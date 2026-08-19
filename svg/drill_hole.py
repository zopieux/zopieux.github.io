"""Library for extracting drill holes and origin from DXF and generating CNC G-code."""

from __future__ import annotations

import math
import sys
import types
from dataclasses import dataclass
from typing import Any, Sequence

# Stub fontTools if absent or mocked so ezdxf can import cleanly in lightweight / web environments
if "fontTools.ttLib" not in sys.modules or not hasattr(sys.modules.get("fontTools.ttLib"), "TTFont"):
    ft = sys.modules.get("fontTools") or types.ModuleType("fontTools")
    ft_ttLib = types.ModuleType("fontTools.ttLib")
    ft_ttLib.TTFont = None
    ft_ttLib.TTLibError = Exception
    ft.ttLib = ft_ttLib
    sys.modules["fontTools"] = ft
    sys.modules["fontTools.ttLib"] = ft_ttLib

import shapely.geometry as sg
from shapely.ops import polygonize, unary_union


@dataclass(frozen=True)
class Point2D:
    x: float
    y: float

    def distance_to(self, other: Point2D) -> float:
        return math.hypot(self.x - other.x, self.y - other.y)

    def offset_by(self, origin: Point2D) -> Point2D:
        return Point2D(self.x - origin.x, self.y - origin.y)


@dataclass(frozen=True)
class Rectangle:
    min_x: float
    min_y: float
    max_x: float
    max_y: float

    @property
    def width(self) -> float:
        return self.max_x - self.min_x

    @property
    def height(self) -> float:
        return self.max_y - self.min_y

    @property
    def area(self) -> float:
        return self.width * self.height

    @property
    def bottom_left(self) -> Point2D:
        return Point2D(self.min_x, self.min_y)


@dataclass(frozen=True)
class DrillConfig:
    """Configuration parameters for G-code generation."""

    safe_z: float = 5.0  # mm
    plunge_depth: float = 5.0  # mm (positive depth into stock, e.g. 5.0 -> Z = -5.0)
    plunge_feed: float = 150.0  # mm/min
    retract_feed: float | None = None  # mm/min (None = rapid G0)
    travel_feed: float = 1000.0  # mm/min (feed rate for rapid/travel if G1 used or info)
    spindle_speed: int = 12000  # RPM
    spindle_dwell: float = 1.0  # seconds after M3
    dwell_at_bottom: float = 0.0  # seconds at plunge depth before retract
    ignore_rect: bool = False  # force hole-based origin even if rectangle exists
    optimize_path: bool = True  # optimize travel path with TSP solver
    origin_hole_index: int | None = None  # 1-indexed hole number (from bottom-left) to use as origin to minimize travel distance
    precision: int = 4


@dataclass
class DrillJobResult:
    origin: Point2D
    origin_source: str  # "rectangle" or "hole"
    largest_rectangle: Rectangle | None
    all_rectangles: list[Rectangle]
    raw_holes: list[Point2D]
    offset_holes: list[Point2D]
    ordered_holes: list[Point2D]
    total_travel_distance: float
    gcode: str


def extract_circles(modelspace: Any) -> list[Point2D]:
    """Extract center points of all CIRCLE entities in modelspace."""
    holes: list[Point2D] = []
    for circle in modelspace.query("CIRCLE"):
        center = circle.dxf.center
        holes.append(Point2D(float(center.x), float(center.y)))
    return holes


def _is_rectangle_polygon(poly: sg.Polygon, tol: float = 1e-3) -> Rectangle | None:
    """Check if a shapely Polygon is an axis-aligned or rotated rectangle."""
    if not poly.is_valid or poly.is_empty:
        return None

    # Simplify polygon slightly to avoid microscopic colinear vertices
    poly = poly.simplify(tol)
    coords = list(poly.exterior.coords)
    # Closed polygon has first == last coord
    if len(coords) != 5:
        return None

    # Check minimum rotated rectangle vs polygon area
    min_rect = poly.minimum_rotated_rectangle
    if abs(poly.area - min_rect.area) > (poly.area * 0.01 + tol):
        return None

    bounds = poly.bounds  # (minx, miny, maxx, maxy)
    rect = Rectangle(
        min_x=float(bounds[0]),
        min_y=float(bounds[1]),
        max_x=float(bounds[2]),
        max_y=float(bounds[3]),
    )
    return rect


def extract_rectangles(modelspace: Any) -> list[Rectangle]:
    """Extract all rectangular contours from modelspace lines, lwpolylines, and polylines."""
    lines_list: list[sg.LineString] = []

    # 1. LINE entities
    for line in modelspace.query("LINE"):
        start = line.dxf.start
        end = line.dxf.end
        if (start.x, start.y) != (end.x, end.y):
            lines_list.append(sg.LineString([(start.x, start.y), (end.x, end.y)]))

    # 2. LWPOLYLINE entities
    for lwpoly in modelspace.query("LWPOLYLINE"):
        points = [(p[0], p[1]) for p in lwpoly.get_points(format="xy")]
        if lwpoly.closed and len(points) >= 3:
            if points[0] != points[-1]:
                points.append(points[0])
            for i in range(len(points) - 1):
                if points[i] != points[i + 1]:
                    lines_list.append(sg.LineString([points[i], points[i + 1]]))
        elif len(points) >= 2:
            for i in range(len(points) - 1):
                if points[i] != points[i + 1]:
                    lines_list.append(sg.LineString([points[i], points[i + 1]]))

    # 3. POLYLINE entities
    for poly in modelspace.query("POLYLINE"):
        points = [(v.dxf.location.x, v.dxf.location.y) for v in poly.vertices]
        if poly.is_closed and len(points) >= 3:
            if points[0] != points[-1]:
                points.append(points[0])
            for i in range(len(points) - 1):
                if points[i] != points[i + 1]:
                    lines_list.append(sg.LineString([points[i], points[i + 1]]))
        elif len(points) >= 2:
            for i in range(len(points) - 1):
                if points[i] != points[i + 1]:
                    lines_list.append(sg.LineString([points[i], points[i + 1]]))

    if not lines_list:
        return []

    # Merge and polygonize
    merged = unary_union(lines_list)
    polygons = list(polygonize(merged))

    rectangles: list[Rectangle] = []
    for poly in polygons:
        rect = _is_rectangle_polygon(poly)
        if rect is not None and rect.area > 1e-6:
            rectangles.append(rect)

    # Sort descending by area
    rectangles.sort(key=lambda r: r.area, reverse=True)
    return rectangles


def determine_origin(
    holes: Sequence[Point2D],
    rectangles: Sequence[Rectangle],
    ignore_rect: bool = False,
    origin_hole_index: int | None = None,
) -> tuple[Point2D, str, Rectangle | None]:
    """Determine the origin (0, 0) reference point.

    - If origin_hole_index is specified (0-indexed, 0..N-1): use that hole as origin.
    - Else if not ignore_rect and rectangles exist: bottom-left of largest rectangle.
    - Else if holes exist: bottom-left most hole (minimum x, then minimum y).
    - Otherwise: (0, 0).
    """
    sorted_holes = sorted(holes, key=lambda p: (p.x, p.y))

    if origin_hole_index is not None and holes:
        if 0 <= origin_hole_index < len(sorted_holes):
            chosen = sorted_holes[origin_hole_index]
            rect = rectangles[0] if (rectangles and not ignore_rect) else None
            return chosen, f"hole #{origin_hole_index}", rect

    if not ignore_rect and rectangles:
        largest = rectangles[0]
        return largest.bottom_left, "rectangle", largest

    if not holes:
        return Point2D(0.0, 0.0), "default", None

    chosen = sorted_holes[0]
    return chosen, "bottom-left hole", None


def optimize_travel_path(
    holes: Sequence[Point2D],
    start: Point2D | None = None,
    origin: Point2D | None = None,
) -> list[Point2D]:
    """Sort holes to minimize rapid travel distance starting from `start` (0,0).

    Uses Greedy Nearest-Neighbor followed by 2-Opt local search refinement.
    """
    if len(holes) <= 1:
        return list(holes)

    start_pt = origin if origin is not None else (start if start is not None else Point2D(0.0, 0.0))
    unvisited = list(holes)
    ordered: list[Point2D] = []
    current = start_pt

    # 1. Nearest-Neighbor Heuristic
    while unvisited:
        nearest_idx = min(
            range(len(unvisited)),
            key=lambda i: current.distance_to(unvisited[i]),
        )
        current = unvisited.pop(nearest_idx)
        ordered.append(current)

    # 2. 2-Opt Refinement
    n = len(ordered)
    if n > 3:
        improved = True
        iterations = 0
        max_iterations = 200

        def route_distance(pts: list[Point2D]) -> float:
            dist = start_pt.distance_to(pts[0])
            for i in range(len(pts) - 1):
                dist += pts[i].distance_to(pts[i + 1])
            return dist

        best_dist = route_distance(ordered)

        while improved and iterations < max_iterations:
            improved = False
            iterations += 1
            for i in range(n - 1):
                for j in range(i + 1, n):
                    # 2-opt swap
                    new_route = ordered[:i] + ordered[i : j + 1][::-1] + ordered[j + 1 :]
                    new_dist = route_distance(new_route)
                    if new_dist < best_dist - 1e-6:
                        ordered = new_route
                        best_dist = new_dist
                        improved = True
                        break
                if improved:
                    break

    return ordered


def compute_travel_distance(holes: Sequence[Point2D], start: Point2D = Point2D(0.0, 0.0)) -> float:
    """Compute total XY rapid travel distance from start through all holes and back to start."""
    if not holes:
        return 0.0
    dist = start.distance_to(holes[0])
    for i in range(len(holes) - 1):
        dist += holes[i].distance_to(holes[i + 1])
    dist += holes[-1].distance_to(start)
    return dist


def generate_gcode(
    ordered_holes: Sequence[Point2D],
    config: DrillConfig,
    metadata: dict[str, Any] | None = None,
) -> str:
    """Generate standardized CNC G-code for drilling hole positions."""
    prec = config.precision
    plunge_z = -abs(config.plunge_depth)
    safe_z = config.safe_z

    lines: list[str] = []
    lines.append("( ============================================ )")
    lines.append("( Generated by dxf_gcode_drill_hole            )")
    if metadata:
        for k, v in metadata.items():
            lines.append(f"( {k}: {v} )")
    lines.append(f"( Hole count: {len(ordered_holes)} )")
    lines.append(f"( Plunge depth: {config.plunge_depth} mm (Z={plunge_z:.{prec}f}) )")
    lines.append(f"( Safe Z: {safe_z} mm )")
    lines.append(f"( Plunge feed: {config.plunge_feed} mm/min )")
    lines.append(f"( Spindle speed: {config.spindle_speed} RPM )")
    lines.append("( ============================================ )")
    lines.append("")

    # Preamble
    lines.append("G21 ; Set units to millimeters")
    lines.append("G90 ; Absolute distance mode")
    lines.append("G17 ; Select XY plane")
    lines.append(f"G0 Z{safe_z:.{prec}f} ; Safe travel height")
    lines.append(f"M3 S{config.spindle_speed} ; Start spindle clockwise")
    if config.spindle_dwell > 0:
        lines.append(f"G4 P{config.spindle_dwell:.2f} ; Dwell for spindle settle")
    lines.append("")

    # Drill holes (0-indexed)
    for i, hole in enumerate(ordered_holes):
        lines.append(f"( --- Hole #{i} --- )")
        lines.append(f"G0 X{hole.x:.{prec}f} Y{hole.y:.{prec}f}")
        lines.append(f"G1 Z{plunge_z:.{prec}f} F{config.plunge_feed:.{prec}f}")
        if config.dwell_at_bottom > 0:
            lines.append(f"G4 P{config.dwell_at_bottom:.2f} ; Dwell at hole bottom")

        if config.retract_feed is not None:
            lines.append(f"G1 Z{safe_z:.{prec}f} F{config.retract_feed:.{prec}f}")
        else:
            lines.append(f"G0 Z{safe_z:.{prec}f}")
        lines.append("")

    # Postamble
    lines.append("( --- End of program --- )")
    lines.append(f"G0 Z{safe_z:.{prec}f} ; Safe retract")
    lines.append("M5 ; Stop spindle")
    lines.append(f"G0 X{0.0:.{prec}f} Y{0.0:.{prec}f} ; Return to origin")
    lines.append("M2 ; Program complete")
    lines.append("")

    return "\n".join(lines)


def process_modelspace(
    modelspace: Any,
    config: DrillConfig | None = None,
    metadata: dict[str, Any] | None = None,
) -> DrillJobResult:
    """Process an ezdxf modelspace and produce DrillJobResult."""
    if config is None:
        config = DrillConfig()

    raw_holes = extract_circles(modelspace)
    rectangles = extract_rectangles(modelspace)

    origin, origin_source, largest_rect = determine_origin(
        raw_holes,
        rectangles,
        ignore_rect=config.ignore_rect,
        origin_hole_index=config.origin_hole_index,
    )

    offset_holes = [h.offset_by(origin) for h in raw_holes]

    if config.optimize_path:
        ordered_holes = optimize_travel_path(offset_holes, start=Point2D(0.0, 0.0))
    else:
        ordered_holes = list(offset_holes)

    total_dist = compute_travel_distance(ordered_holes, start=Point2D(0.0, 0.0))

    gcode_meta = dict(metadata or {})
    gcode_meta["Origin source"] = origin_source
    gcode_meta["Origin DXF coord"] = f"({origin.x:.4f}, {origin.y:.4f})"
    if largest_rect:
        gcode_meta["Largest rectangle bbox"] = (
            f"[{largest_rect.min_x:.4f}, {largest_rect.min_y:.4f}] to "
            f"[{largest_rect.max_x:.4f}, {largest_rect.max_y:.4f}] "
            f"(size: {largest_rect.width:.4f} x {largest_rect.height:.4f})"
        )
    gcode_meta["Total rapid travel XY"] = f"{total_dist:.4f} mm"

    gcode = generate_gcode(ordered_holes, config, gcode_meta)

    return DrillJobResult(
        origin=origin,
        origin_source=origin_source,
        largest_rectangle=largest_rect,
        all_rectangles=rectangles,
        raw_holes=raw_holes,
        offset_holes=offset_holes,
        ordered_holes=ordered_holes,
        total_travel_distance=total_dist,
        gcode=gcode,
    )


def process_dxf_string(
    dxf_content: str,
    config_dict: dict[str, Any] | None = None,
    filename: str = "uploaded.dxf",
) -> dict[str, Any]:
    """Process DXF content from string and return a dictionary result suitable for JSON/JS."""
    import io
    import ezdxf

    # Normalize CRLF and CR to LF: io.StringIO preserves \r\n, which prevents ezdxf token stream from matching section keywords
    normalized_content = dxf_content.replace("\r\n", "\n").replace("\r", "\n")

    cfg_kwargs = dict(config_dict or {})
    config = DrillConfig(**cfg_kwargs)

    try:
        doc = ezdxf.read(io.StringIO(normalized_content))
    except Exception as err:
        print(f"[Python] ezdxf.read failed: {err}")
        raise

    msp = doc.modelspace()
    entities = list(msp)
    dxftypes = [e.dxftype() for e in entities]
    print(f"[Python] Modelspace entities ({len(entities)}): {dxftypes}")

    # Also inspect all layouts
    for layout in doc.layouts:
        layout_entities = list(layout)
        if layout_entities:
            print(f"[Python] Layout '{layout.name}' ({type(layout).__name__}) has {len(layout_entities)} entities: {[e.dxftype() for e in layout_entities]}")

    result = process_modelspace(msp, config=config, metadata={"Source DXF": filename})
    print(f"[Python] Result: {len(result.raw_holes)} raw holes, {len(result.all_rectangles)} rectangles, origin: {result.origin_source} at ({result.origin.x}, {result.origin.y})")

    sorted_raw_holes = sorted(result.raw_holes, key=lambda p: (p.x, p.y))
    available_origins: list[dict[str, Any]] = []
    if result.largest_rectangle:
        available_origins.append({
            "id": "rect",
            "type": "rectangle",
            "label": f"Rectangle ({result.largest_rectangle.width:.1f} × {result.largest_rectangle.height:.1f} mm)",
        })
    for i, h in enumerate(sorted_raw_holes):
        available_origins.append({
            "id": f"hole_{i}",
            "type": "hole",
            "index": i,
            "label": f"Hole #{i} ({h.x:.2f}, {h.y:.2f})",
        })

    return {
        "gcode": result.gcode,
        "origin": {"x": result.origin.x, "y": result.origin.y},
        "origin_source": result.origin_source,
        "hole_count": len(result.ordered_holes),
        "total_travel_distance": result.total_travel_distance,
        "rectangle": (
            {
                "min_x": result.largest_rectangle.min_x,
                "min_y": result.largest_rectangle.min_y,
                "max_x": result.largest_rectangle.max_x,
                "max_y": result.largest_rectangle.max_y,
                "width": result.largest_rectangle.width,
                "height": result.largest_rectangle.height,
                "area": result.largest_rectangle.area,
            }
            if result.largest_rectangle
            else None
        ),
        "holes": [{"x": h.x, "y": h.y} for h in result.ordered_holes],
        "available_origins": available_origins,
    }


