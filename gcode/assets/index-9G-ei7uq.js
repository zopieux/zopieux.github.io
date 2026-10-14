var gg=Object.defineProperty;var mg=(n,t,e)=>t in n?gg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ke=(n,t,e)=>mg(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const _g=!1,xg=(n,t)=>n===t,si=Symbol("solid-proxy"),vg=typeof Proxy=="function",fc=Symbol("solid-track"),_a={equals:xg};let Tf=Df;const tr=1,xa=2,Af={owned:null,cleanups:null,context:null,owner:null};var Be=null;let el=null,yg=null,we=null,ln=null,wi=null,Oa=0;function ia(n,t){const e=we,i=Be,r=n.length===0,s=t===void 0?i:t,o=r?Af:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=r?n:()=>n(()=>Zi(()=>Ws(o)));Be=o,we=null;try{return _s(a,!0)}finally{we=e,Be=i}}function ve(n,t){t=t?Object.assign({},_a,t):_a;const e={value:n,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(e.value)),Pf(e,r));return[Rf.bind(e),i]}function ie(n,t,e){const i=Su(n,t,!1,tr);to(i)}function vu(n,t,e){Tf=Eg;const i=Su(n,t,!1,tr);i.user=!0,wi?wi.push(i):to(i)}function Tn(n,t,e){e=e?Object.assign({},_a,e):_a;const i=Su(n,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=e.equals||void 0,to(i),Rf.bind(i)}function Sg(n){return _s(n,!1)}function Zi(n){if(we===null)return n();const t=we;we=null;try{return n()}finally{we=t}}function Cf(n){vu(()=>Zi(n))}function yu(n){return Be===null||(Be.cleanups===null?Be.cleanups=[n]:Be.cleanups.push(n)),n}function pc(){return we}const[QE,tw]=ve(!1);function Rf(){if(this.sources&&this.state)if(this.state===tr)to(this);else{const n=ln;ln=null,_s(()=>ya(this),!1),ln=n}if(we){const n=this.observers;if(!n||n[n.length-1]!==we){const t=n?n.length:0;we.sources?(we.sources.push(this),we.sourceSlots.push(t)):(we.sources=[this],we.sourceSlots=[t]),n?(n.push(we),this.observerSlots.push(we.sources.length-1)):(this.observers=[we],this.observerSlots=[we.sources.length-1])}}return this.value}function Pf(n,t,e){let i=n.value;return(!n.comparator||!n.comparator(i,t))&&(n.value=t,n.observers&&n.observers.length&&_s(()=>{for(let r=0;r<n.observers.length;r+=1){const s=n.observers[r],o=el&&el.running;o&&el.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?ln.push(s):wi.push(s),s.observers&&If(s)),o||(s.state=tr)}if(ln.length>1e6)throw ln=[],new Error},!1)),t}function to(n){if(!n.fn)return;Ws(n);const t=Oa;Mg(n,n.value,t)}function Mg(n,t,e){let i;const r=Be,s=we;we=Be=n;try{i=n.fn(t)}catch(o){return n.pure&&(n.state=tr,n.owned&&n.owned.forEach(Ws),n.owned=null),n.updatedAt=e+1,Lf(o)}finally{we=s,Be=r}(!n.updatedAt||n.updatedAt<=e)&&(n.updatedAt!=null&&"observers"in n?Pf(n,i):n.value=i,n.updatedAt=e)}function Su(n,t,e,i=tr,r){const s={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Be,context:Be?Be.context:null,pure:e};return Be===null||Be!==Af&&(Be.owned?Be.owned.push(s):Be.owned=[s]),s}function va(n){if(n.state===0)return;if(n.state===xa)return ya(n);if(n.suspense&&Zi(n.suspense.inFallback))return n.suspense.effects.push(n);const t=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<Oa);)n.state&&t.push(n);for(let e=t.length-1;e>=0;e--)if(n=t[e],n.state===tr)to(n);else if(n.state===xa){const i=ln;ln=null,_s(()=>ya(n,t[0]),!1),ln=i}}function _s(n,t){if(ln)return n();let e=!1;t||(ln=[]),wi?e=!0:wi=[],Oa++;try{const i=n();return bg(e),i}catch(i){e||(wi=null),ln=null,Lf(i)}}function bg(n){if(ln&&(Df(ln),ln=null),n)return;const t=wi;wi=null,t.length&&_s(()=>Tf(t),!1)}function Df(n){for(let t=0;t<n.length;t++)va(n[t])}function Eg(n){let t,e=0;for(t=0;t<n.length;t++){const i=n[t];i.user?n[e++]=i:va(i)}for(t=0;t<e;t++)va(n[t])}function ya(n,t){n.state=0;for(let e=0;e<n.sources.length;e+=1){const i=n.sources[e];if(i.sources){const r=i.state;r===tr?i!==t&&(!i.updatedAt||i.updatedAt<Oa)&&va(i):r===xa&&ya(i,t)}}}function If(n){for(let t=0;t<n.observers.length;t+=1){const e=n.observers[t];e.state||(e.state=xa,e.pure?ln.push(e):wi.push(e),e.observers&&If(e))}}function Ws(n){let t;if(n.sources)for(;n.sources.length;){const e=n.sources.pop(),i=n.sourceSlots.pop(),r=e.observers;if(r&&r.length){const s=r.pop(),o=e.observerSlots.pop();i<r.length&&(s.sourceSlots[o]=i,r[i]=s,e.observerSlots[i]=o)}}if(n.tOwned){for(t=n.tOwned.length-1;t>=0;t--)Ws(n.tOwned[t]);delete n.tOwned}if(n.owned){for(t=n.owned.length-1;t>=0;t--)Ws(n.owned[t]);n.owned=null}if(n.cleanups){for(t=n.cleanups.length-1;t>=0;t--)n.cleanups[t]();n.cleanups=null}n.state=0}function wg(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function Lf(n,t=Be){throw wg(n)}const Tg=Symbol("fallback");function uh(n){for(let t=0;t<n.length;t++)n[t]()}function Ag(n,t,e={}){let i=[],r=[],s=[],o=0,a=t.length>1?[]:null;return yu(()=>uh(s)),()=>{let u=n()||[],h=u.length,d,p;return u[fc],Zi(()=>{let m,y,M,_,x,E,f,c,v;if(h===0)o!==0&&(uh(s),s=[],i=[],r=[],o=0,a&&(a=[])),e.fallback&&(i=[Tg],r[0]=ia(l=>(s[0]=l,e.fallback())),o=1);else if(o===0){for(r=new Array(h),p=0;p<h;p++)i[p]=u[p],r[p]=ia(g);o=h}else{for(M=new Array(h),_=new Array(h),a&&(x=new Array(h)),E=0,f=Math.min(o,h);E<f&&i[E]===u[E];E++);for(f=o-1,c=h-1;f>=E&&c>=E&&i[f]===u[c];f--,c--)M[c]=r[f],_[c]=s[f],a&&(x[c]=a[f]);for(m=new Map,y=new Array(c+1),p=c;p>=E;p--)v=u[p],d=m.get(v),y[p]=d===void 0?-1:d,m.set(v,p);for(d=E;d<=f;d++)v=i[d],p=m.get(v),p!==void 0&&p!==-1?(M[p]=r[d],_[p]=s[d],a&&(x[p]=a[d]),p=y[p],m.set(v,p)):s[d]();for(p=E;p<h;p++)p in M?(r[p]=M[p],s[p]=_[p],a&&(a[p]=x[p],a[p](p))):r[p]=ia(g);r=r.slice(0,o=h),i=u.slice(0)}return r});function g(m){if(s[p]=m,a){const[y,M]=ve(p);return a[p]=M,t(u[p],y)}return t(u[p])}}}function rt(n,t){return Zi(()=>n(t||{}))}function oo(){return!0}const Cg={get(n,t,e){return t===si?e:n.get(t)},has(n,t){return t===si?!0:n.has(t)},set:oo,deleteProperty:oo,getOwnPropertyDescriptor(n,t){return{configurable:!0,enumerable:!0,get(){return n.get(t)},set:oo,deleteProperty:oo}},ownKeys(n){return n.keys()}};function nl(n){return(n=typeof n=="function"?n():n)?n:{}}function Rg(){for(let n=0,t=this.length;n<t;++n){const e=this[n]();if(e!==void 0)return e}}function Pe(...n){let t=!1;for(let o=0;o<n.length;o++){const a=n[o];t=t||!!a&&si in a,n[o]=typeof a=="function"?(t=!0,Tn(a)):a}if(vg&&t)return new Proxy({get(o){for(let a=n.length-1;a>=0;a--){const u=nl(n[a])[o];if(u!==void 0)return u}},has(o){for(let a=n.length-1;a>=0;a--)if(o in nl(n[a]))return!0;return!1},keys(){const o=[];for(let a=0;a<n.length;a++)o.push(...Object.keys(nl(n[a])));return[...new Set(o)]}},Cg);const e={},i=Object.create(null);for(let o=n.length-1;o>=0;o--){const a=n[o];if(!a)continue;const u=Object.getOwnPropertyNames(a);for(let h=u.length-1;h>=0;h--){const d=u[h];if(d==="__proto__"||d==="constructor")continue;const p=Object.getOwnPropertyDescriptor(a,d);if(!i[d])i[d]=p.get?{enumerable:!0,configurable:!0,get:Rg.bind(e[d]=[p.get.bind(a)])}:p.value!==void 0?p:void 0;else{const g=e[d];g&&(p.get?g.push(p.get.bind(a)):p.value!==void 0&&g.push(()=>p.value))}}}const r={},s=Object.keys(i);for(let o=s.length-1;o>=0;o--){const a=s[o],u=i[a];u&&u.get?Object.defineProperty(r,a,u):r[a]=u?u.value:void 0}return r}const Pg=n=>`Stale read from <${n}>.`;function Mu(n){const t="fallback"in n&&{fallback:()=>n.fallback};return Tn(Ag(()=>n.each,n.children,t||void 0))}function Ue(n){const t=n.keyed,e=Tn(()=>n.when,void 0,void 0),i=t?e:Tn(e,void 0,{equals:(r,s)=>!r==!s});return Tn(()=>{const r=i();if(r){const s=n.children;return typeof s=="function"&&s.length>0?Zi(()=>s(t?r:()=>{if(!Zi(i))throw Pg("Show");return e()})):s}return n.fallback},void 0,void 0)}const Dg=new Set(["innerHTML","textContent","innerText","children"]),Ig=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Lg=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ng={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},qi=n=>Tn(()=>n());function Ug(n,t,e){let i=e.length,r=t.length,s=i,o=0,a=0,u=t[r-1].nextSibling,h=null;for(;o<r||a<s;){if(t[o]===e[a]){o++,a++;continue}for(;t[r-1]===e[s-1];)r--,s--;if(r===o){const d=s<i?a?e[a-1].nextSibling:e[s-a]:u;for(;a<s;)n.insertBefore(e[a++],d)}else if(s===a)for(;o<r;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[s-1]&&e[a]===t[r-1]){const d=t[--r].nextSibling;n.insertBefore(e[a++],t[o++].nextSibling),n.insertBefore(e[--s],d),t[r]=e[s]}else{if(!h){h=new Map;let p=a;for(;p<s;)h.set(e[p],p++)}const d=h.get(t[o]);if(d!=null)if(a<d&&d<s){let p=o,g=1,m;for(;++p<r&&p<s&&!((m=h.get(t[p]))==null||m!==d+g);)g++;if(g>d-a){const y=t[o];for(;a<d;)n.insertBefore(e[a++],y)}else n.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const hh="_$DX_DELEGATE";function Fg(n,t,e,i={}){let r;return ia(s=>{r=s,t===document?n():tt(t,n(),t.firstChild?null:void 0,e)},i.owner),()=>{r(),t.textContent=""}}function Pt(n,t,e,i){let r;const s=()=>{const a=document.createElement("template");return a.innerHTML=n,a.content.firstChild},o=()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function ui(n,t=window.document){const e=t[hh]||(t[hh]=new Set);for(let i=0,r=n.length;i<r;i++){const s=n[i];e.has(s)||(e.add(s),t.addEventListener(s,Vg))}}function Sr(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Og(n,t,e,i){i==null?n.removeAttributeNS(t,e):n.setAttributeNS(t,e,i)}function Bg(n,t,e){e?n.setAttribute(t,""):n.removeAttribute(t)}function Fn(n,t){t==null?n.removeAttribute("class"):n.className=t}function Sa(n,t,e,i){if(i)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const r=e[0];n.addEventListener(t,e[0]=s=>r.call(n,e[1],s))}else n.addEventListener(t,e,typeof e!="function"&&e)}function zg(n,t,e={}){const i=Object.keys(t||{}),r=Object.keys(e);let s,o;for(s=0,o=r.length;s<o;s++){const a=r[s];!a||a==="undefined"||t[a]||(dh(n,a,!1),delete e[a])}for(s=0,o=i.length;s<o;s++){const a=i[s],u=!!t[a];!a||a==="undefined"||e[a]===u||!u||(dh(n,a,!0),e[a]=u)}return e}function kg(n,t,e){if(!t)return e?Sr(n,"style"):t;const i=n.style;if(typeof t=="string")return i.cssText=t;typeof e=="string"&&(i.cssText=e=void 0),e||(e={}),t||(t={});let r,s;for(s in e)t[s]==null&&i.removeProperty(s),delete e[s];for(s in t)r=t[s],r!==e[s]&&(i.setProperty(s,r),e[s]=r);return e}function De(n,t={},e,i){const r={};return ie(()=>typeof t.ref=="function"&&Nf(t.ref,n)),ie(()=>Gg(n,t,e,!0,r,!0)),r}function Nf(n,t,e){return Zi(()=>n(t,e))}function tt(n,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return Ma(n,t,i,e);ie(r=>Ma(n,t(),r,e),i)}function Gg(n,t,e,i,r={},s=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=fh(n,o,null,r[o],e,s,t)}for(const o in t){if(o==="children")continue;const a=t[o];r[o]=fh(n,o,a,r[o],e,s,t)}}function Hg(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function dh(n,t,e){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)n.classList.toggle(i[r],e)}function fh(n,t,e,i,r,s,o){let a,u,h,d;if(t==="style")return kg(n,e,i);if(t==="classList")return zg(n,e,i);if(e===i)return i;if(t==="ref")s||e(n);else if(t.slice(0,3)==="on:"){const p=t.slice(3);i&&n.removeEventListener(p,i,typeof i!="function"&&i),e&&n.addEventListener(p,e,typeof e!="function"&&e)}else if(t.slice(0,10)==="oncapture:"){const p=t.slice(10);i&&n.removeEventListener(p,i,!0),e&&n.addEventListener(p,e,!0)}else if(t.slice(0,2)==="on"){const p=t.slice(2).toLowerCase(),g=Lg.has(p);if(!g&&i){const m=Array.isArray(i)?i[0]:i;n.removeEventListener(p,m)}(g||e)&&(Sa(n,p,e,g),g&&ui([p]))}else if(t.slice(0,5)==="attr:")Sr(n,t.slice(5),e);else if(t.slice(0,5)==="bool:")Bg(n,t.slice(5),e);else if((d=t.slice(0,5)==="prop:")||(h=Dg.has(t))||(a=n.nodeName.includes("-")||"is"in o))d&&(t=t.slice(5),u=!0),t==="class"||t==="className"?Fn(n,e):a&&!u&&!h?n[Hg(t)]=e:(t==="value"||t==="defaultValue")&&(n.nodeName==="INPUT"||n.nodeName==="TEXTAREA")?n[t]=e??"":n[t]=e;else{const p=t.indexOf(":")>-1&&Ng[t.split(":")[0]];p?Og(n,p,t,e):Sr(n,Ig[t]||t,e)}return e}function Vg(n){let t=n.target;const e=`$$${n.type}`,i=n.target,r=n.currentTarget,s=u=>Object.defineProperty(n,"target",{configurable:!0,value:u}),o=()=>{const u=t[e];if(u&&!t.disabled){const h=t[`${e}Data`];if(h!==void 0?u.call(t,h,n):u.call(t,n),n.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(n.target)&&s(t.host),!0},a=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}}),n.composedPath){const u=n.composedPath();s(u[0]);for(let h=0;h<u.length-2&&(t=u[h],!!o());h++){if(t._$host){t=t._$host,a();break}if(t.parentNode===r)break}}else a();s(i)}function Ma(n,t,e,i,r){for(;typeof e=="function";)e=e();if(t===e)return e;const s=typeof t,o=i!==void 0;if(n=o&&e[0]&&e[0].parentNode||n,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===e))return e;if(o){let a=e[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),e=Cr(n,e,i,a)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t}else if(t==null||s==="boolean")e=Cr(n,e,i);else{if(s==="function")return ie(()=>{let a=t();for(;typeof a=="function";)a=a();e=Ma(n,a,e,i)}),()=>e;if(Array.isArray(t)){const a=[],u=e&&Array.isArray(e);if(gc(a,t,e,r))return ie(()=>e=Ma(n,a,e,i,!0)),()=>e;if(a.length===0){if(e=Cr(n,e,i),o)return e}else u?e.length===0?ph(n,a,i):Ug(n,e,a):(e&&Cr(n),ph(n,a));e=a}else if(t.nodeType){if(Array.isArray(e)){if(o)return e=Cr(n,e,i,t);Cr(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function gc(n,t,e,i){let r=!1;for(let s=0,o=t.length;s<o;s++){let a=t[s],u=e&&e[n.length],h;if(!(a==null||a===!0||a===!1))if((h=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))r=gc(n,a,u)||r;else if(h==="function")if(i){for(;typeof a=="function";)a=a();r=gc(n,Array.isArray(a)?a:[a],Array.isArray(u)?u:[u])||r}else n.push(a),r=!0;else{const d=String(a);u&&u.nodeType===3&&u.data===d?n.push(u):n.push(document.createTextNode(d))}}return r}function ph(n,t,e=null){for(let i=0,r=t.length;i<r;i++)n.insertBefore(t[i],e)}function Cr(n,t,e,i){if(e===void 0)return n.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(r!==a){const u=a.parentNode===n;!s&&!o?u?n.replaceChild(r,a):n.insertBefore(r,e):u&&a.remove()}else s=!0}}else n.insertBefore(r,e);return[r]}const mc=Symbol("store-raw"),cs=Symbol("store-node"),Si=Symbol("store-has"),Uf=Symbol("store-self");function Ff(n){let t=n[si];if(!t&&(Object.defineProperty(n,si,{value:t=new Proxy(n,Xg)}),!Array.isArray(n))){const e=Object.keys(n),i=Object.getOwnPropertyDescriptors(n),r=Object.getPrototypeOf(n),s=r!==null&&n!==null&&typeof n=="object"&&!Array.isArray(n)&&r!==Object.prototype;if(s){const o=Object.getOwnPropertyDescriptors(r);e.push(...Object.keys(o)),Object.assign(i,o)}for(let o=0,a=e.length;o<a;o++){const u=e[o];s&&u==="constructor"||i[u].get&&Object.defineProperty(n,u,{configurable:!0,enumerable:i[u].enumerable,get:i[u].get.bind(t)})}}return t}function Ki(n){let t;return n!=null&&typeof n=="object"&&(n[si]||!(t=Object.getPrototypeOf(n))||t===Object.prototype||Array.isArray(n))}function fs(n,t=new Set){let e,i,r,s;if(e=n!=null&&n[mc])return e;if(!Ki(n)||t.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):t.add(n);for(let o=0,a=n.length;o<a;o++)r=n[o],(i=fs(r,t))!==r&&(n[o]=i)}else{Object.isFrozen(n)?n=Object.assign({},n):t.add(n);const o=Object.keys(n),a=Object.getOwnPropertyDescriptors(n);for(let u=0,h=o.length;u<h;u++)s=o[u],!a[s].get&&(r=n[s],(i=fs(r,t))!==r&&(n[s]=i))}return n}function ba(n,t){let e=n[t];return e||Object.defineProperty(n,t,{value:e=Object.create(null)}),e}function Xs(n,t,e){if(n[t])return n[t];const[i,r]=ve(e,{equals:!1,internal:!0});return i.$=r,n[t]=i}function $g(n,t){const e=Reflect.getOwnPropertyDescriptor(n,t);return!e||e.get||!e.configurable||t===si||t===cs||(delete e.value,delete e.writable,e.get=()=>n[si][t]),e}function Of(n){pc()&&Xs(ba(n,cs),Uf)()}function Wg(n){return Of(n),Reflect.ownKeys(n)}const Xg={get(n,t,e){if(t===mc)return n;if(t===si)return e;if(t===fc)return Of(n),e;const i=ba(n,cs),r=i[t];let s=r?r():n[t];if(t===cs||t===Si||t==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(n,t);pc()&&(typeof s!="function"||Object.prototype.hasOwnProperty.call(n,t))&&!(o&&o.get)&&(s=Xs(i,t,s)())}return Ki(s)?Ff(s):s},has(n,t){return t===mc||t===si||t===fc||t===cs||t===Si||t==="__proto__"?!0:(pc()&&Xs(ba(n,Si),t)(),t in n)},set(){return!0},deleteProperty(){return!0},ownKeys:Wg,getOwnPropertyDescriptor:$g};function Ln(n,t,e,i=!1){if(t==="__proto__"||!i&&n[t]===e)return;const r=n[t],s=n.length;e===void 0?(delete n[t],n[Si]&&n[Si][t]&&r!==void 0&&n[Si][t].$()):(n[t]=e,n[Si]&&n[Si][t]&&r===void 0&&n[Si][t].$());let o=ba(n,cs),a;if((a=Xs(o,t,r))&&a.$(()=>e),Array.isArray(n)&&n.length!==s){for(let u=n.length;u<s;u++)(a=o[u])&&a.$();(a=Xs(o,"length",s))&&a.$(n.length)}(a=o[Uf])&&a.$()}function Bf(n,t){const e=Object.keys(t);for(let i=0;i<e.length;i+=1){const r=e[i];zf(r)||Ln(n,r,t[r])}}function zf(n){return n==="__proto__"||n==="constructor"||n==="prototype"}function qg(n,t){if(typeof t=="function"&&(t=t(n)),t=fs(t),Array.isArray(t)){if(n===t)return;let e=0,i=t.length;for(;e<i;e++){const r=t[e];n[e]!==r&&Ln(n,e,r)}Ln(n,"length",i)}else Bf(n,t)}function Bs(n,t,e=[]){let i,r=n;if(t.length>1){i=t.shift();const o=typeof i,a=Array.isArray(n);if(o==="string"&&(i==="__proto__"||t.length>1&&zf(i)))return;if(Array.isArray(i)){for(let u=0;u<i.length;u++)Bs(n,[i[u]].concat(t),e);return}else if(a&&o==="function"){for(let u=0;u<n.length;u++)i(n[u],u)&&Bs(n,[u].concat(t),e);return}else if(a&&o==="object"){const{from:u=0,to:h=n.length-1,by:d=1}=i;for(let p=u;p<=h;p+=d)Bs(n,[p].concat(t),e);return}else if(t.length>1){Bs(n[i],t,[i].concat(e));return}r=n[i],e=[i].concat(e)}let s=t[0];typeof s=="function"&&(s=s(r,e),s===r)||i===void 0&&s==null||(s=fs(s),i===void 0||Ki(r)&&Ki(s)&&!Array.isArray(s)?Bf(r,s):Ln(n,i,s))}function Yg(...[n,t]){const e=fs(n||{}),i=Array.isArray(e),r=Ff(e);function s(...o){Sg(()=>{i&&o.length===1?qg(e,o[0]):Bs(e,o)})}return[r,s]}const _c=Symbol("store-root");function gh(n){return n==="__proto__"||n==="constructor"||n==="prototype"}function ts(n,t,e,i,r){if(gh(e))return;const s=t[e];if(n===s)return;const o=Array.isArray(n);if(e!==_c&&(!Ki(n)||!Ki(s)||o!==Array.isArray(s)||r&&n[r]!==s[r])){Ln(t,e,n);return}if(o){if(n.length&&s.length&&(!i||r&&n[0]&&n[0][r]!=null)){let h,d,p,g,m,y,M,_;for(p=0,g=Math.min(s.length,n.length);p<g&&(s[p]===n[p]||r&&s[p]&&n[p]&&s[p][r]&&s[p][r]===n[p][r]);p++)ts(n[p],s,p,i,r);const x=new Array(n.length),E=new Map;for(g=s.length-1,m=n.length-1;g>=p&&m>=p&&(s[g]===n[m]||r&&s[g]&&n[m]&&s[g][r]&&s[g][r]===n[m][r]);g--,m--)x[m]=s[g];if(p>m||p>g){for(d=p;d<=m;d++)Ln(s,d,n[d]);for(;d<n.length;d++)Ln(s,d,x[d]),ts(n[d],s,d,i,r);s.length>n.length&&Ln(s,"length",n.length);return}for(M=new Array(m+1),d=m;d>=p;d--)y=n[d],_=r&&y?y[r]:y,h=E.get(_),M[d]=h===void 0?-1:h,E.set(_,d);for(h=p;h<=g;h++)y=s[h],_=r&&y?y[r]:y,d=E.get(_),d!==void 0&&d!==-1&&(x[d]=s[h],d=M[d],E.set(_,d));for(d=p;d<n.length;d++)d in x?(Ln(s,d,x[d]),ts(n[d],s,d,i,r)):Ln(s,d,n[d])}else for(let h=0,d=n.length;h<d;h++)ts(n[h],s,h,i,r);s.length>n.length&&Ln(s,"length",n.length);return}const a=Object.keys(n);for(let h=0,d=a.length;h<d;h++)gh(a[h])||ts(n[a[h]],s,a[h],i,r);const u=Object.keys(s);for(let h=0,d=u.length;h<d;h++)n[u[h]]===void 0&&Ln(s,u[h],void 0)}function kf(n,t={}){const{merge:e,key:i="id"}=t,r=fs(n);return s=>{if(!Ki(s)||!Ki(r))return r;const o=ts(r,{[_c]:s},_c,e,i);return o===void 0?s:o}}const vr=[{id:"flat-1/4",name:'1/4" Flat Endmill',diameterMm:25.4/4,diameterExpr:"1/4in",profile:"flat",description:"6.35mm (0.25in) Flat Endmill"},{id:"flat-1/8",name:'1/8" Flat Endmill',diameterMm:25.4/8,diameterExpr:"1/8in",profile:"flat",description:"3.175mm (0.125in) Flat Endmill"},{id:"flat-1/16",name:'1/16" Flat Endmill',diameterMm:25.4/16,diameterExpr:"1/16in",profile:"flat",description:"1.5875mm (0.0625in) Flat Endmill"},{id:"v45-1/4",name:'1/4" V-Bit 45°',diameterMm:25.4/4,diameterExpr:"1/4in",profile:"v45",description:"6.35mm (0.25in) 45° Chamfer / V-Bit"},{id:"v45-1/8",name:'1/8" V-Bit 45°',diameterMm:25.4/8,diameterExpr:"1/8in",profile:"v45",description:"3.175mm (0.125in) 45° Chamfer / V-Bit"},{id:"v45-1/16",name:'1/16" V-Bit 45°',diameterMm:25.4/16,diameterExpr:"1/16in",profile:"v45",description:"1.5875mm (0.0625in) 45° Chamfer / V-Bit"},{id:"v60-1/4",name:'1/4" V-Bit 60°',diameterMm:25.4/4,diameterExpr:"1/4in",profile:"v60",description:"6.35mm (0.25in) 60° V-Carve / Engraving Bit"},{id:"v60-1/8",name:'1/8" V-Bit 60°',diameterMm:25.4/8,diameterExpr:"1/8in",profile:"v60",description:"3.175mm (0.125in) 60° V-Carve / Engraving Bit"},{id:"v60-1/16",name:'1/16" V-Bit 60°',diameterMm:25.4/16,diameterExpr:"1/16in",profile:"v60",description:"1.5875mm (0.0625in) 60° V-Carve / Engraving Bit"}];function Yn(n){return vr.find(t=>t.id===n)||vr[0]}function Zg(n){const t=vr.findIndex(e=>e.id===n);return(t>=0?t:0)+1}function Kg(n,t=!0){let e=n.trim();return t&&(e=e.replace(/["”″]/g,"in"),e=e.replace(/\b(inches|inch)\b/gi,"in"),e=e.replace(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*(in|mm)?/gi,"($1 + ($2 / $3))$4"),e=e.replace(/(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*(in|mm)\b/gi,"($1 / $2)$3")),e}function Jg(n,t=!0){const e=Kg(n,t),i=[];let r=0;for(;r<e.length;){const s=e[r];if(/\s/.test(s)){r++;continue}if(s==="+"||s==="-"||s==="*"||s==="/"){i.push({type:"OP",value:s}),r++;continue}if(s==="("){i.push({type:"LPAREN",value:s}),r++;continue}if(s===")"){i.push({type:"RPAREN",value:s}),r++;continue}if(/\d|\./.test(s)){let o="",a=!1;for(;r<e.length&&(/\d/.test(e[r])||e[r]==="."&&!a);)e[r]==="."&&(a=!0),o+=e[r],r++;if(i.push({type:"NUMBER",value:o}),r<e.length&&/[a-zA-Z"”″]/.test(e[r])){if(!t)throw new Error("Units are not allowed in this field");let u="";for(;r<e.length&&/[a-zA-Z]/.test(e[r]);)u+=e[r],r++;const h=u.toLowerCase();if(h==="mm")i.push({type:"UNIT",value:"mm",unitMultiplier:1});else if(h==="in"||h==="inch"||h==="inches")i.push({type:"UNIT",value:"in",unitMultiplier:25.4});else throw new Error(`Unknown unit "${u}"`)}continue}if(/[a-zA-Z"”″]/.test(s)){if(!t)throw new Error("Units are not allowed in this field");let o="";for(;r<e.length&&/[a-zA-Z]/.test(e[r]);)o+=e[r],r++;const a=o.toLowerCase();if(a==="mm")i.push({type:"UNIT",value:"mm",unitMultiplier:1});else if(a==="in"||a==="inch"||a==="inches")i.push({type:"UNIT",value:"in",unitMultiplier:25.4});else throw new Error(`Unknown unit "${o}"`);continue}throw new Error(`Unexpected character "${s}" at index ${r}`)}return i.push({type:"EOF",value:""}),i}class jg{constructor(t){Ke(this,"tokens");Ke(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}consume(t){const e=this.peek();if(t&&e.type!==t)throw new Error(`Expected ${t} but found ${e.type} (${e.value})`);return this.pos++,e}parse(){if(this.peek().type==="EOF")throw new Error("Empty expression");const t=this.parseExpr();if(this.peek().type!=="EOF")throw new Error(`Unexpected token "${this.peek().value}" after expression`);return t}parseExpr(){let t=this.parseTerm();for(;this.peek().type==="OP"&&(this.peek().value==="+"||this.peek().value==="-");){const e=this.consume().value,i=this.parseTerm();e==="+"?t+=i:t-=i}return t}parseTerm(){let t=this.parseFactor();for(;this.peek().type==="OP"&&(this.peek().value==="*"||this.peek().value==="/");){const e=this.consume().value,i=this.parseFactor();if(e==="*")t*=i;else{if(i===0)throw new Error("Division by zero");t/=i}}if(this.peek().type==="UNIT"){const e=this.consume("UNIT");t*=e.unitMultiplier??1}return t}parseFactor(){const t=this.peek();if(t.type==="OP"&&(t.value==="+"||t.value==="-")){const e=this.consume().value,i=this.parseAtom();return e==="-"?-i:i}return this.parseAtom()}parseAtom(){const t=this.peek();if(t.type==="NUMBER"){this.consume("NUMBER");const e=parseFloat(t.value);if(Number.isNaN(e))throw new Error(`Invalid number: ${t.value}`);if(this.peek().type==="UNIT"){const i=this.consume("UNIT");return e*(i.unitMultiplier??1)}return e}if(t.type==="LPAREN"){this.consume("LPAREN");let e=this.parseExpr();if(this.consume("RPAREN"),this.peek().type==="UNIT"){const i=this.consume("UNIT");e*=i.unitMultiplier??1}return e}throw new Error(`Unexpected token "${t.value}"`)}}function Ea(n,t={}){const e=t.allowUnits??!0;if(n==null)return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Empty value"};if(typeof n=="number"){if(Number.isNaN(n)||!Number.isFinite(n))return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Invalid number"};const r=ao(n),s=n/25.4;return{value:n,formatted:r,formattedMm:`${r} mm`,formattedIn:`${ao(s)}"`}}const i=n.trim();if(!i)return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Empty expression"};try{const r=Jg(i,e),o=new jg(r).parse();if(Number.isNaN(o)||!Number.isFinite(o))return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Result is not a finite number"};const a=ao(o),u=o/25.4;return{value:o,formatted:a,formattedMm:`${a} mm`,formattedIn:`${ao(u)}"`}}catch(r){return{value:0,formatted:"Error",formattedMm:"Error",formattedIn:"Error",error:r instanceof Error?r.message:String(r)}}}function Qg(n){return Ea(n,{allowUnits:!0})}function tm(n){return Ea(n,{allowUnits:!1})}function et(n,t=0){const e=Qg(n);return e.error?t:e.value}function mh(n,t=0){const e=tm(n);return e.error?t:e.value}function ao(n){const t=Math.round(n*1e4)/1e4;return Math.abs(t-Math.round(t))<1e-6?Math.round(t).toString():t.toFixed(3).replace(/\.?0+$/,"")}function bu(n,t){return n<1.2*t}function em(n,t){const i=Yn(n.toolId).diameterMm,r=et(n.x,0),s=et(n.y,0),o=et(n.diameter,i),a=Math.max(0,et(n.cutDepth,5)),u=n.pecking??bu(o,i),h=u?Math.max(.1,et(n.peckDepth,2)):0,d=et(t.zOffset,0),p=d+Math.max(1,et(t.safeZ,5)),g=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),m=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,250))),y=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1.5))),M=[];if(o<i-.05)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:d,maxZ:p};if(M.push({type:"rapid",z:p,comment:"Retract to safe Z"}),M.push({type:"rapid",x:r,y:s,comment:"Hole center"}),Math.abs(o-i)<=.1){if(h>0){const S=Math.ceil(a/h);for(let b=1;b<=S;b++){const w=d-Math.min(a,b*h);M.push({type:"linear",z:w,feedRate:m,comment:`Peck ${b}/${S} to Z=${w.toFixed(3)}`}),M.push({type:"rapid",z:d+1,comment:"Chip break retract"}),b<S&&M.push({type:"rapid",z:w+.3})}}else M.push({type:"linear",z:d-a,feedRate:m,comment:"Direct plunge drill"});return M.push({type:"rapid",z:p,comment:"Retract after drill"}),{opId:n.id,opName:n.name,toolId:n.toolId,moves:M,minZ:d-a,maxZ:p}}const _=(o-i)/2,x=d-a,E=t.helicalRampAngleDeg;let f;E!==void 0&&E>0&&_>0?f=Math.max(.05,Math.tan(E*Math.PI/180)*2*Math.PI*_):f=Math.max(.1,y);const c=Math.max(1,Math.ceil(a/f)),v=a/c,l=n.cutMode??"contour",R=(S,b,w)=>{let T=b,A=w;for(let C=S;C<=c;C++){const D=d-C*v,L=(T+D)/2;if(n.direction==="reversed"?(M.push({type:"arc-ccw",x:r-_,y:s,z:L,i:-_,j:0,feedRate:g,comment:`Helical turn ${C}/${c} (half)`}),M.push({type:"arc-ccw",x:r+_,y:s,z:D,i:_,j:0,feedRate:g})):(M.push({type:"arc-cw",x:r-_,y:s,z:L,i:-_,j:0,feedRate:g,comment:`Helical turn ${C}/${c} (half)`}),M.push({type:"arc-cw",x:r+_,y:s,z:D,i:_,j:0,feedRate:g})),T=D,A+=v,h>0&&A>=h&&C<c){A=0;const F=Math.min(d+.5,T+.8);M.push({type:"rapid",z:F,comment:"Chip break retract"}),M.push({type:"rapid",z:T})}}};if(M.push({type:"rapid",z:d+.5}),l==="clear"){const S=.5*i,b=Math.max(1,Math.ceil(_/S)),w=48,T=n.direction==="reversed"?1:-1,A=(D,L,F,O)=>{const k=b*w;for(let B=1;B<=k;B++){const $=B/k,W=T*$*b*2*Math.PI,st=_*$;M.push({type:"linear",x:r+st*Math.cos(W),y:s+st*Math.sin(W),z:F?L:D-$*(D-L),feedRate:g,comment:B===1?O:void 0})}},C=D=>{u?(M.push({type:"rapid",z:d+.5,comment:"Retract for chip extraction"}),M.push({type:"rapid",x:r,y:s,comment:"Return to center"}),M.push({type:"rapid",z:D+.5})):(M.push({type:"rapid",z:D+v+.5,comment:"Lift and return to center"}),M.push({type:"rapid",x:r,y:s})),M.push({type:"linear",z:D,feedRate:m,comment:"Feed to layer top at center"})};M.push({type:"linear",z:d,feedRate:m,comment:"Plunge to surface at hole center"});for(let D=1;D<=c;D++){const L=d-(D-1)*v,F=d-D*v;D>1&&C(L),A(L,F,!1,`Clear layer ${D}/${c} to Z=${F.toFixed(3)}`)}C(x),A(x,x,!0,"Flat floor spiral")}else M.push({type:"linear",x:r+_,y:s,feedRate:m,comment:"Lead to helical start"}),M.push({type:"linear",z:d,feedRate:m,comment:"Plunge to surface at orbit start"}),R(1,d,0);return n.direction==="reversed"?(M.push({type:"arc-ccw",x:r-_,y:s,z:x,i:-_,j:0,feedRate:g,comment:"Flat bottom cleanup"}),M.push({type:"arc-ccw",x:r+_,y:s,z:x,i:_,j:0,feedRate:g})):(M.push({type:"arc-cw",x:r-_,y:s,z:x,i:-_,j:0,feedRate:g,comment:"Flat bottom cleanup"}),M.push({type:"arc-cw",x:r+_,y:s,z:x,i:_,j:0,feedRate:g})),M.push({type:"linear",x:r,y:s,feedRate:g,comment:"Lead out to center"}),M.push({type:"rapid",z:p,comment:"Retract to safe Z"}),{opId:n.id,opName:n.name,toolId:n.toolId,moves:M,minZ:x,maxZ:p}}const qs=90;function nm(){return{stockWidth:"100mm",stockHeight:"75mm",stockThickness:"12.7mm",zOffset:"0mm",safeZ:"5mm",defaultFeedRate:"800",defaultPlungeRate:"300",defaultSpindleRpm:12e3,defaultDepthPerPass:"1.5mm",defaultStepoverPercent:qs,toolChangeMode:"manual",toolChangeGcode:"",parkAtProgramEnd:!1}}function im(n,t=1){const e={id:`op-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,enabled:!0,toolId:vr[0].id,feedRate:"800",plungeRate:"300",spindleRpm:12e3,depthPerPass:"1.5mm"};switch(n){case"surfacing":return{...e,type:"surfacing",name:`Surfacing ${t}`,x:"0mm",y:"0mm",width:"100mm",height:"75mm",cutDepth:"0.8mm",stepoverPercent:qs,pattern:"zigzag-h",direction:"forward"};case"profiling":return{...e,type:"profiling",name:`Profiling ${t}`,x:"5mm",y:"5mm",width:"90mm",height:"65mm",cutDepth:"6.35mm",side:"outside",direction:"forward"};case"pocket":return{...e,type:"pocket",name:`Pocket ${t}`,x:"20mm",y:"15mm",width:"60mm",height:"45mm",cutDepth:"3.5mm",stepoverPercent:qs,pattern:"spiral",direction:"forward"};case"hole":return{...e,type:"hole",name:`Drill Hole ${t}`,toolId:vr[1].id,x:"50mm",y:"37.5mm",diameter:"1/8in",cutDepth:"10mm",peckDepth:"2mm",direction:"forward",cutMode:"contour",pecking:bu(et("1/8in",0),vr[1].diameterMm)}}}function Eu(n="New CNC Project"){return{id:`proj-${Date.now()}`,name:n,createdAt:Date.now(),updatedAt:Date.now(),settings:nm(),operations:[]}}function Gf(n,t,e,i="forward"){const{minX:r,minY:s,maxX:o,maxY:a}=n,u=o-r,h=a-s;if(u<=0||h<=0||t<=0)return[];let d=[];switch(e){case"zigzag-h":d=_h(n,t);break;case"zigzag-v":d=rm(n,t);break;case"zigzag-diag":d=sm(n,t);break;case"spiral":d=om(n,t);break;default:d=_h(n,t)}return i==="reversed"&&d.reverse(),d}function _h(n,t){const{minX:e,minY:i,maxX:r,maxY:s}=n,o=[],a=Math.max(1,Math.ceil((s-i)/t)),u=(s-i)/a;for(let h=0;h<=a;h++){const d=Math.min(s,i+h*u);h%2===0?(o.push({x:e,y:d}),o.push({x:r,y:d})):(o.push({x:r,y:d}),o.push({x:e,y:d}))}return o}function rm(n,t){const{minX:e,minY:i,maxX:r,maxY:s}=n,o=[],a=Math.max(1,Math.ceil((r-e)/t)),u=(r-e)/a;for(let h=0;h<=a;h++){const d=Math.min(r,e+h*u);h%2===0?(o.push({x:d,y:i}),o.push({x:d,y:s})):(o.push({x:d,y:s}),o.push({x:d,y:i}))}return o}function sm(n,t){const{minX:e,minY:i,maxX:r,maxY:s}=n,o=[],a=e+i,u=r+s,h=t*Math.SQRT2,d=Math.max(1,Math.ceil((u-a)/h)),p=(u-a)/d;let g=!1;for(let m=0;m<=d;m++){const y=a+m*p,M=[],_=y-e;_>=i&&_<=s&&M.push({x:e,y:_});const x=y-i;x>=e&&x<=r&&(M.some(c=>Math.abs(c.x-x)<1e-4&&Math.abs(c.y-i)<1e-4)||M.push({x,y:i}));const E=y-r;E>=i&&E<=s&&(M.some(c=>Math.abs(c.x-r)<1e-4&&Math.abs(c.y-E)<1e-4)||M.push({x:r,y:E}));const f=y-s;if(f>=e&&f<=r&&(M.some(c=>Math.abs(c.x-f)<1e-4&&Math.abs(c.y-s)<1e-4)||M.push({x:f,y:s})),M.length>=2){M.sort((l,R)=>l.x-R.x);const c=g?M[M.length-1]:M[0],v=g?M[0]:M[M.length-1];o.push(c,v),g=!g}else M.length===1&&o.push(M[0])}return o.length>0?o:[{x:e,y:i},{x:r,y:s}]}function om(n,t){let{minX:e,minY:i,maxX:r,maxY:s}=n;const o=[];for(;r>e+.001&&s>i+.001;){const u=[{x:e,y:i},{x:r,y:i},{x:r,y:s},{x:e,y:s},{x:e,y:i}];o.push(u),e+=t,i+=t,r-=t,s-=t}e<=r&&i<=s&&o.push([{x:(e+r)/2,y:(i+s)/2}]);const a=[];for(const u of o)a.push(...u);return a}function am(n,t){const e=Yn(n.toolId),i=e.diameterMm/2,r=et(n.x,0),s=et(n.y,0),o=Math.max(.1,et(n.width,40)),a=Math.max(.1,et(n.height,30)),u=Math.max(0,et(n.cutDepth,3)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),g=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,300))),m=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1.5))),y=n.stepoverPercent||t.defaultStepoverPercent||qs,M=Math.max(.1,e.diameterMm*(y/100)),_=r+i,x=r+o-i,E=s+i,f=s+a-i;if(_>x||E>f)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};const v=Gf({minX:_,minY:E,maxX:x,maxY:f},M,n.pattern,n.direction),l=[{x:_,y:E},{x,y:E},{x,y:f},{x:_,y:f},{x:_,y:E}],R=[],S=Math.max(1,Math.ceil(u/m)),b=u/S;R.push({type:"rapid",z:d,comment:"Retract to safe Z"});let w=h;for(let T=1;T<=S;T++){w=h-T*b;const A=v[0]||l[0];R.push({type:"rapid",x:A.x,y:A.y,comment:`Pass ${T}/${S} start`}),R.push({type:"rapid",z:h+.5}),R.push({type:"linear",z:w,feedRate:g,comment:`Plunge to Z=${w.toFixed(3)}`});for(let C=1;C<v.length;C++)R.push({type:"linear",x:v[C].x,y:v[C].y,feedRate:p});R.push({type:"linear",x:l[0].x,y:l[0].y,feedRate:p,comment:"Wall cleanup"});for(let C=1;C<l.length;C++)R.push({type:"linear",x:l[C].x,y:l[C].y,feedRate:p});R.push({type:"rapid",z:d,comment:`Retract after pass ${T}`})}return{opId:n.id,opName:n.name,toolId:n.toolId,moves:R,minZ:h-u,maxZ:d}}function lm(n,t){const i=Yn(n.toolId).diameterMm/2,r=et(n.x,0),s=et(n.y,0),o=Math.max(.1,et(n.width,50)),a=Math.max(.1,et(n.height,50)),u=Math.max(0,et(n.cutDepth,5)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),g=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,300))),m=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1.5)));let y,M,_,x;if(n.side==="outside"?(y=r-i,M=r+o+i,_=s-i,x=s+a+i):(y=r+i,M=r+o-i,_=s+i,x=s+a-i),y>M||_>x)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};let E=[{x:y,y:_},{x:M,y:_},{x:M,y:x},{x:y,y:x},{x:y,y:_}];n.direction==="reversed"&&(E=[{x:y,y:_},{x:y,y:x},{x:M,y:x},{x:M,y:_},{x:y,y:_}]);const f=[],c=Math.max(1,Math.ceil(u/m)),v=u/c;f.push({type:"rapid",z:d,comment:"Retract to safe Z"});let l=h;for(let R=1;R<=c;R++){l=h-R*v;const S=E[0];f.push({type:"rapid",x:S.x,y:S.y,comment:`Pass ${R}/${c} start`}),f.push({type:"rapid",z:h+.5}),f.push({type:"linear",z:l,feedRate:g,comment:`Plunge to Z=${l.toFixed(3)}`});for(let b=1;b<E.length;b++)f.push({type:"linear",x:E[b].x,y:E[b].y,feedRate:p});f.push({type:"rapid",z:d,comment:`Retract after pass ${R}`})}return{opId:n.id,opName:n.name,toolId:n.toolId,moves:f,minZ:h-u,maxZ:d}}function cm(n,t){const e=Yn(n.toolId),i=e.diameterMm/2,r=et(n.x,0),s=et(n.y,0),o=Math.max(.1,et(n.width,et(t.stockWidth,100))),a=Math.max(.1,et(n.height,et(t.stockHeight,75))),u=Math.max(0,et(n.cutDepth,1)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),g=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,300))),m=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1))),y=n.stepoverPercent||t.defaultStepoverPercent||qs,M=Math.max(.1,e.diameterMm*(y/100)),_=[],x={minX:r-i*.6,minY:s-i*.6,maxX:r+o+i*.6,maxY:s+a+i*.6},E=Gf(x,M,n.pattern,n.direction);if(E.length===0||u<=0)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};const f=Math.max(1,Math.ceil(u/m)),c=u/f;_.push({type:"rapid",z:d,comment:"Retract to safe Z"});let v=h;for(let l=1;l<=f;l++){v=h-l*c;const R=E[0];_.push({type:"rapid",x:R.x,y:R.y,comment:`Pass ${l}/${f} start XY`}),_.push({type:"rapid",z:h+.5}),_.push({type:"linear",z:v,feedRate:g,comment:`Plunge to Z=${v.toFixed(3)}`});for(let S=1;S<E.length;S++){const b=E[S];_.push({type:"linear",x:b.x,y:b.y,feedRate:p})}_.push({type:"rapid",z:d,comment:`Retract after pass ${l}`})}return{opId:n.id,opName:n.name,toolId:n.toolId,moves:_,minZ:h-u,maxZ:d}}const um=.25;function hm(n,t,e,i){const r=(f,c,v)=>({type:"linear",x:f,y:c,z:v,feedRate:n.feedRate}),s=n.type==="arc-cw",o=n.i??0,a=n.j??0,u=t+o,h=e+a,d=Math.hypot(o,a),p=n.x??t,g=n.y??e,m=n.z??i;if(d<1e-4){const f=r(p,g,m);return f.comment=n.comment,[f]}const y=Math.atan2(e-h,t-u),M=Math.atan2(g-h,p-u);let _=s?y-M:M-y;for(;_<=1e-5;)_+=2*Math.PI;const x=Math.max(8,Math.ceil(_*d/um)),E=[];for(let f=1;f<=x;f++){const c=f/x,v=s?y-c*_:y+c*_,l=r(u+d*Math.cos(v),h+d*Math.sin(v),i+c*(m-i));f===1&&(l.comment=n.comment),E.push(l)}return E}function dm(n){const t=[];for(const e of n.operations)if(e.enabled)switch(e.type){case"surfacing":t.push(cm(e,n.settings));break;case"profiling":t.push(lm(e,n.settings));break;case"pocket":t.push(am(e,n.settings));break;case"hole":t.push(em(e,n.settings));break}return t}function fm(n){const t=dm(n),e=[],i=[],r=et(n.settings.stockThickness,12.7);for(const M of n.operations){if(!M.enabled)continue;const _=Yn(M.toolId);if(M.type==="hole"){const E=et(M.diameter,_.diameterMm);E<_.diameterMm-.05&&e.push(`Operation "${M.name}": Hole diameter (${E.toFixed(2)}mm) is smaller than tool diameter (${_.diameterMm.toFixed(2)}mm).`)}if(M.type==="pocket"){const E=et(M.width,0),f=et(M.height,0);(E<_.diameterMm||f<_.diameterMm)&&e.push(`Operation "${M.name}": Pocket dimensions (${E.toFixed(1)}x${f.toFixed(1)}mm) are smaller than tool diameter (${_.diameterMm.toFixed(2)}mm).`)}const x=et(M.cutDepth,0);x>r&&e.push(`Operation "${M.name}": Cut depth (${x.toFixed(2)}mm) exceeds stock thickness (${r.toFixed(2)}mm).`)}const o=et(n.settings.zOffset,0)+Math.max(1,et(n.settings.safeZ,5));i.push("(========================================)"),i.push(`( Project: ${n.name} )`),i.push(`( Date: ${new Date().toLocaleString()} )`),i.push("( Generator: GCoder CNC Toolpath Gen )"),i.push("( Coordinate System: 0,0 Bottom-Left )"),i.push(`( Stock: ${n.settings.stockWidth} x ${n.settings.stockHeight} x ${n.settings.stockThickness} )`),i.push("(========================================)"),i.push(""),i.push("G21 (Units: Millimeters)"),i.push("G90 (Absolute coordinates)"),i.push("G17 (XY plane selection)"),i.push("G94 (Feedrate per minute)"),i.push("");let a=null,u=0,h,d,p,g=0;for(let M=0;M<n.operations.length;M++){const _=n.operations[M];if(!_.enabled)continue;const x=t.find(l=>l.opId===_.id);if(!x||x.moves.length===0)continue;const E=Yn(_.toolId),f=mh(n.settings.defaultSpindleRpm,12e3),c=Math.round(mh(_.spindleRpm,f));if(i.push(""),i.push("(----------------------------------------)"),i.push(`( Operation ${M+1}: ${_.name} [${_.type}] )`),i.push(`( Tool: ${E.name} - Dia: ${E.diameterMm.toFixed(3)}mm )`),i.push("(----------------------------------------)"),a!==_.toolId){const l=n.settings.toolChangeMode??"manual",R=(n.settings.toolChangeGcode??"").trim();if(a!==null&&i.push("M5 (Spindle off)"),l==="changer"){const S=Zg(_.toolId);i.push(`T${S} M6 (Auto tool change: ${E.name})`)}else{if(R)for(const S of R.split(";")){const b=S.trim();b&&i.push(b)}else i.push(`G0 Z${o.toFixed(3)} (Retract to safe Z)`),i.push("G0 X0.000 Y0.000 (Move to X0 Y0 for tool change)");i.push(`M0 (Manual tool change: Load ${E.name} - zero Z on stock top, then resume)`)}i.push(`M3 S${c} (Spindle ON CW at ${c} RPM)`),i.push("G4 P2.0 (Dwell 2s for spindle spin up)"),i.push(`G0 Z${o.toFixed(3)}`),a=_.toolId,h=void 0,d=void 0,p=o}const v=l=>{const R=[];if(l.comment&&!l.type){i.push(`(${l.comment})`);return}switch(l.type){case"rapid":R.push("G0");break;case"linear":R.push("G1");break;case"arc-cw":R.push("G2");break;case"arc-ccw":R.push("G3");break}if(l.x!==void 0&&l.x!==h){if(R.push(`X${l.x.toFixed(3)}`),h!==void 0&&d!==void 0){const S=l.y!==void 0?l.y-d:0;g+=Math.hypot(l.x-h,S)}h=l.x}l.y!==void 0&&l.y!==d&&(R.push(`Y${l.y.toFixed(3)}`),d=l.y),l.z!==void 0&&l.z!==p&&(R.push(`Z${l.z.toFixed(3)}`),p!==void 0&&(g+=Math.abs(l.z-p)),p=l.z),l.i!==void 0&&R.push(`I${l.i.toFixed(3)}`),l.j!==void 0&&R.push(`J${l.j.toFixed(3)}`),l.feedRate&&l.feedRate!==u&&l.type!=="rapid"&&(R.push(`F${Math.round(l.feedRate)}`),u=l.feedRate),l.comment&&R.push(`(${l.comment})`),(R.length>1||l.comment)&&i.push(R.join(" "))};for(const l of x.moves)if((l.type==="arc-cw"||l.type==="arc-ccw")&&l.z!==void 0&&p!==void 0&&l.z!==p&&l.x!==void 0&&l.y!==void 0&&h!==void 0&&d!==void 0){const b=h,w=d,T=p;for(const A of hm(l,b,w,T))v(A)}else v(l)}i.push(""),i.push("(========================================)"),i.push("( Program End )"),i.push("(========================================)"),i.push("M5 (Spindle stop)"),i.push(`G0 Z${o.toFixed(3)} (Retract to safe Z)`),n.settings.parkAtProgramEnd&&i.push("G30 (Move all axes to park position)"),i.push("M30 (End of program and rewind)");const m=i.join(`
`),y=Math.max(.2,g/(u||800)*1.2);return{gcode:m,totalLines:i.length,estimatedTimeMin:Math.round(y*10)/10,toolpaths:t,warnings:e}}const pm=100;class gm{constructor(){Ke(this,"past",{});Ke(this,"future",{});Ke(this,"canUndoSignal",ve(!1));Ke(this,"canRedoSignal",ve(!1))}initProject(t,e){this.past[t]||(this.past[t]=[],this.future[t]=[]),this.updateSignals(t)}recordSnapshot(t,e,i){this.past[t]||(this.past[t]=[],this.future[t]=[]);const r={timestamp:Date.now(),projectData:JSON.stringify(e),description:i};this.past[t].push(r),this.past[t].length>pm&&this.past[t].shift(),this.future[t]=[],this.updateSignals(t)}undo(t,e){const i=this.past[t];if(!i||i.length===0)return null;const r=i.pop();this.future[t]||(this.future[t]=[]),this.future[t].push({timestamp:Date.now(),projectData:JSON.stringify(e),description:r.description}),this.updateSignals(t);try{return JSON.parse(r.projectData)}catch{return null}}redo(t,e){const i=this.future[t];if(!i||i.length===0)return null;const r=i.pop();this.past[t].push({timestamp:Date.now(),projectData:JSON.stringify(e),description:r.description}),this.updateSignals(t);try{return JSON.parse(r.projectData)}catch{return null}}updateSignals(t){var r,s;const[,e]=this.canUndoSignal,[,i]=this.canRedoSignal;e((((r=this.past[t])==null?void 0:r.length)||0)>0),i((((s=this.future[t])==null?void 0:s.length)||0)>0)}serialize(){return{past:this.past,future:this.future}}hydrate(t){t&&(this.past=t.past||{},this.future=t.future||{})}}const Di=new gm,Hf="gcoder_data_v1";function mm(){try{const t=localStorage.getItem(Hf);if(t){const e=JSON.parse(t);if(e.projects&&Object.keys(e.projects).length>0){let i=e.projects[e.currentProjectId];return i||(i=Object.values(e.projects)[0]),e.undoData&&Di.hydrate(e.undoData),{currentProject:i,projects:e.projects}}}}catch(t){console.warn("Failed to load projects from localStorage:",t)}const n=Eu("Default Project");return{currentProject:n,projects:{[n.id]:n}}}let il=null;function _m(n,t){il&&clearTimeout(il),il=setTimeout(()=>{try{const e={currentProjectId:n,projects:t,undoData:Di.serialize()};localStorage.setItem(Hf,JSON.stringify(e))}catch(e){console.error("Failed to save project data to localStorage:",e)}},300)}const wu=mm(),[Ci,He]=Yg(wu.projects),[Ba,za]=ve(wu.currentProject.id);var wf;const[eo,hi]=ve(((wf=wu.currentProject.operations[0])==null?void 0:wf.id)||null),[rl,xh]=ve("selected"),[sl,xm]=ve(!0),[vm,ra]=ve(!1),[ym,zs]=ve(!1),[Sm,xc]=ve(!1),be=Tn(()=>{const n=Ba();return Ci[n]||Object.values(Ci)[0]||Eu()}),Vf=Tn(()=>{const n=be(),t=eo();return t?n.operations.find(e=>e.id===t)||n.operations[0]||null:n.operations[0]||null}),Ys=Tn(()=>{const n=be();return fm(n)});function er(n){const t=be();Di.recordSnapshot(t.id,JSON.parse(JSON.stringify(t)),n)}function Cn(){const n=Ba();_m(n,Ci)}function Mm(n="New Project"){var e;const t=Eu(n);return He(t.id,t),za(t.id),hi(((e=t.operations[0])==null?void 0:e.id)||null),Di.initProject(t.id,t),Cn(),t}function bm(n){var t;Ci[n]&&(za(n),hi(((t=Ci[n].operations[0])==null?void 0:t.id)||null),Di.updateSignals(n),Cn())}function $f(n,t){const e=t.trim();!e||!Ci[n]||(er(`Rename project to "${e}"`),He(n,"name",e),He(n,"updatedAt",Date.now()),Cn())}function Em(n){$f(Ba(),n)}function wm(n){var i,r;const t=Object.keys(Ci);if(t.length<=1){alert("Cannot delete the only project. Create a new one first.");return}const e=t.find(s=>s!==n)||"";He(n,void 0),za(e),hi(((r=(i=Ci[e])==null?void 0:i.operations[0])==null?void 0:r.id)||null),Cn()}function Tm(){var i;const n=be(),t=`proj-${Date.now()}`,e={...JSON.parse(JSON.stringify(n)),id:t,name:`${n.name} (Copy)`,createdAt:Date.now(),updatedAt:Date.now()};He(t,e),za(t),hi(((i=e.operations[0])==null?void 0:i.id)||null),Cn()}function Am(n){er(`Add ${n} operation`);const t=be(),e=t.operations.filter(r=>r.type===n).length+1,i=im(n,e);He(t.id,"operations",r=>[...r,i]),He(t.id,"updatedAt",Date.now()),hi(i.id),Cn()}function ee(n,t,e=!0){e&&er("Update operation");const i=be(),r=i.operations.findIndex(a=>a.id===n);if(r===-1)return;const o={...i.operations[r],...t};He(i.id,"operations",r,o),He(i.id,"updatedAt",Date.now()),Cn()}function Cm(n){var i;er("Delete operation");const t=be(),e=t.operations.filter(r=>r.id!==n);He(t.id,"operations",e),He(t.id,"updatedAt",Date.now()),eo()===n&&hi(((i=e[0])==null?void 0:i.id)||null),Cn()}function Rm(n){const e=be().operations.find(i=>i.id===n);e&&(er(`${e.enabled?"Disable":"Enable"} ${e.name}`),ee(n,{enabled:!e.enabled},!1))}function vh(n,t){if(n===t)return;er("Reorder operations");const e=be(),i=[...e.operations],[r]=i.splice(n,1);i.splice(t,0,r),He(e.id,"operations",i),He(e.id,"updatedAt",Date.now()),Cn()}function Pm(n){er("Duplicate operation");const t=be(),e=t.operations.find(o=>o.id===n);if(!e)return;const i={...JSON.parse(JSON.stringify(e)),id:`op-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:`${e.name} (Copy)`},r=t.operations.findIndex(o=>o.id===n),s=[...t.operations];s.splice(r+1,0,i),He(t.id,"operations",s),He(t.id,"updatedAt",Date.now()),hi(i.id),Cn()}function gn(n){er("Update stock settings");const t=be();He(t.id,"settings",e=>({...e,...n})),He(t.id,"updatedAt",Date.now()),Cn()}function Wf(){var e;const n=be(),t=Di.undo(n.id,JSON.parse(JSON.stringify(n)));t&&(He(n.id,kf(t)),t.operations.some(i=>i.id===eo())||hi(((e=t.operations[0])==null?void 0:e.id)||null),Cn())}function Xf(){var e;const n=be(),t=Di.redo(n.id,JSON.parse(JSON.stringify(n)));t&&(He(n.id,kf(t)),t.operations.some(i=>i.id===eo())||hi(((e=t.operations[0])==null?void 0:e.id)||null),Cn())}const Dm=()=>Di.canUndoSignal[0](),Im=()=>Di.canRedoSignal[0]();var Lm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=3></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">'),Nm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">'),Um=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><polyline points="6 9 12 15 18 9">'),Fm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><polyline points="18 15 12 9 6 15">'),Om=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10">'),Bm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10">'),zm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><line x1=4 y1=21 x2=4 y2=14></line><line x1=4 y1=10 x2=4 y2=3></line><line x1=12 y1=21 x2=12 y2=12></line><line x1=12 y1=8 x2=12 y2=3></line><line x1=20 y1=21 x2=20 y2=16></line><line x1=20 y1=12 x2=20 y2=3></line><line x1=1 y1=14 x2=7 y2=14></line><line x1=9 y1=8 x2=15 y2=8></line><line x1=17 y1=16 x2=23 y2=16>'),km=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18">'),Gm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=9 y=9 width=13 height=13 rx=2 ry=2></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">'),Hm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><polyline points="20 6 9 17 4 12">'),Vm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1=12 y1=15 x2=12 y2=3>'),$m=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1=12 y1=9 x2=12 y2=13></line><line x1=12 y1=17 x2=12.01 y2=17>'),Wm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),Xm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">'),qm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=10></circle><polyline points="12 6 12 12 16 14">'),Ym=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=12 y1=5 x2=12 y2=19></line><line x1=5 y1=12 x2=19 y2=12>'),Zm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=9 y=2 width=6 height=8 rx=1></rect><path d="M10 10v7l2 4 2-4v-7"></path><line x1=10 y1=13 x2=14 y2=13></line><line x1=10 y1=16 x2=14 y2=16>'),Km=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=3 y=4 width=18 height=16 rx=2></rect><line x1=3 y1=9 x2=21 y2=9></line><line x1=3 y1=14 x2=21 y2=14></line><path d="M7 9l5 5"></path><path d="M12 9l5 5">'),Jm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=3 y=3 width=18 height=18 rx=2 stroke-dasharray="3 3"></rect><rect x=6 y=6 width=12 height=12 rx=1>'),jm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=3 y=3 width=18 height=18 rx=2></rect><rect x=7 y=7 width=10 height=10 rx=1></rect><line x1=12 y1=7 x2=12 y2=17></line><line x1=7 y1=12 x2=17 y2=12>'),Qm=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=7></circle><circle cx=12 cy=12 r=2 fill=currentColor></circle><line x1=12 y1=2 x2=12 y2=5></line><line x1=12 y1=19 x2=12 y2=22></line><line x1=2 y1=12 x2=5 y2=12></line><line x1=19 y1=12 x2=22 y2=12>');const Ie={size:14};function qf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Lm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Yf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Nm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Tu(n){const t=()=>n.size??Ie.size;return(()=>{var e=Um();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Zf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Fm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function t_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Om();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function e_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Bm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function n_(n){const t=()=>n.size??Ie.size;return(()=>{var e=zm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function i_(n){const t=()=>n.size??Ie.size;return(()=>{var e=km();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function ka(n){const t=()=>n.size??Ie.size;return(()=>{var e=Gm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Kf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Hm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Jf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Vm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function wa(n){const t=()=>n.size??Ie.size;return(()=>{var e=$m();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Ga(n){const t=()=>n.size??Ie.size;return(()=>{var e=Wm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function r_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Xm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function s_(n){const t=()=>n.size??Ie.size;return(()=>{var e=qm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function jf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Ym();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function o_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Zm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Qf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Km();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function tp(n){const t=()=>n.size??Ie.size;return(()=>{var e=Jm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function ep(n){const t=()=>n.size??Ie.size;return(()=>{var e=jm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function np(n){const t=()=>n.size??Ie.size;return(()=>{var e=Qm();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}var a_=Pt("<span>Copied to Clipboard!"),l_=Pt('<div class=modal-overlay><div class="modal-card gcode-modal"><div class=modal-header><div class=gcode-modal-title><h3>Generated G-Code</h3><div class=gcode-stats><span class=stat-tag> lines</span><span class=stat-tag>Est. ~<!> min</span><span class=stat-tag>Standard: MASSO ISO G-Code</span></div></div><button class=modal-close-btn title=Close></button></div><div class="modal-body gcode-modal-body"><pre class=gcode-viewer><code></code></pre></div><div class="modal-footer gcode-modal-footer"><button></button><button class=btn-primary><span>Download .NC File'),c_=Pt("<span>Copy to Clipboard");function u_(){const[n,t]=ve(!1),e=()=>Ys(),i=async()=>{try{await navigator.clipboard.writeText(e().gcode),t(!0),setTimeout(()=>t(!1),2e3)}catch{const s=document.createElement("textarea");s.value=e().gcode,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),t(!0),setTimeout(()=>t(!1),2e3)}},r=()=>{const s=new Blob([e().gcode],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(s),a=document.createElement("a"),u=be().name.toLowerCase().replace(/[^a-z0-9_-]/g,"_");a.href=o,a.download=`${u}.nc`,a.click(),URL.revokeObjectURL(o)};return rt(Ue,{get when(){return Sm()},get children(){var s=l_(),o=s.firstChild,a=o.firstChild,u=a.firstChild,h=u.firstChild,d=h.nextSibling,p=d.firstChild,g=p.firstChild,m=p.nextSibling,y=m.firstChild,M=y.nextSibling;M.nextSibling;var _=u.nextSibling,x=a.nextSibling,E=x.firstChild,f=E.firstChild,c=x.nextSibling,v=c.firstChild,l=v.nextSibling,R=l.firstChild;return s.$$click=()=>xc(!1),o.$$click=S=>S.stopPropagation(),tt(p,()=>e().totalLines,g),tt(m,rt(s_,{size:11,style:{"margin-right":"4px","vertical-align":"middle"}}),y),tt(m,()=>e().estimatedTimeMin,M),_.$$click=()=>xc(!1),tt(_,rt(Ga,{size:14})),tt(f,()=>e().gcode),v.$$click=i,tt(v,rt(Ue,{get when(){return n()},get fallback(){return[rt(ka,{size:13}),c_()]},get children(){return[rt(Kf,{size:13}),a_()]}})),l.$$click=r,tt(l,rt(Jf,{size:13}),R),ie(()=>Fn(v,`btn-action ${n()?"copied":""}`)),s}})}ui(["click"]);const[yh,ol]=ve(!1);if(typeof window<"u"){const n=i=>{i.ctrlKey&&i.shiftKey&&ol(!0)},t=i=>{(i.key==="Control"||i.key==="Shift"||!i.ctrlKey||!i.shiftKey)&&ol(!1)},e=()=>{ol(!1)};window.addEventListener("keydown",n,{passive:!0}),window.addEventListener("keyup",t,{passive:!0}),window.addEventListener("blur",e)}var h_=Pt("<div class=dim-input-group><div class=dim-input-header><label class=dim-input-label></label><span></span></div><div><input type=text class=dim-input-field>"),d_=Pt("<span class=error-badge>"),f_=Pt("<span class=preview-text><span class=mm-val>"),p_=Pt("<p class=dim-input-tooltip>");function oe(n){const[t,e]=ve(String(n.value??"")),[i,r]=ve(!1),s=()=>n.allowUnits??!0;vu(()=>{e(String(n.value??""))});const o=Tn(()=>Ea(t(),{allowUnits:s()})),a=()=>{r(!1),!o().error&&t()!==String(n.value)&&n.onChange(t())},u=h=>{h.key==="Enter"&&h.target.blur()};return(()=>{var h=h_(),d=h.firstChild,p=d.firstChild,g=p.nextSibling,m=d.nextSibling,y=m.firstChild;return tt(p,()=>n.label),tt(g,(()=>{var M=qi(()=>!!o().error);return()=>M()?(()=>{var _=d_();return tt(_,rt(wa,{size:11,style:{"margin-right":"3px","vertical-align":"text-bottom"}}),null),tt(_,()=>o().error,null),_})():(()=>{var _=f_(),x=_.firstChild;return tt(x,(()=>{var E=qi(()=>!!s());return()=>E()?qi(()=>!!yh())()?o().formattedIn:o().formattedMm:`${o().formatted}${n.unitSuffix?` ${n.unitSuffix}`:""}`})()),_})()})()),y.$$keydown=u,y.$$input=M=>{e(M.currentTarget.value),Ea(M.currentTarget.value,{allowUnits:s()}).error||n.onChange(M.currentTarget.value)},y.addEventListener("blur",a),y.addEventListener("focus",()=>r(!0)),tt(h,(()=>{var M=qi(()=>!!n.tooltip);return()=>M()&&(()=>{var _=p_();return tt(_,()=>n.tooltip),_})()})(),null),ie(M=>{var _=`dim-input-preview ${o().error?"dim-error":"dim-valid"}`,x=o().error||(s()?yh()?o().formattedIn:o().formattedMm:o().formatted),E=`dim-input-wrapper ${o().error?"has-error":""} ${i()?"is-focused":""}`,f=n.placeholder||(s()?"e.g. 1/4in or 10mm":"e.g. 12000 or 12*1000");return _!==M.e&&Fn(g,M.e=_),x!==M.t&&Sr(g,"title",M.t=x),E!==M.a&&Fn(m,M.a=E),f!==M.o&&Sr(y,"placeholder",M.o=f),M},{e:void 0,t:void 0,a:void 0,o:void 0}),ie(()=>y.value=t()),h})()}ui(["input","keydown"]);var g_=Pt('<div class=modal-overlay><div class="modal-card settings-modal"><div class=modal-header><h3>Stock & Global Parameters</h3><button class=modal-close-btn title=Close></button></div><div class="modal-body settings-body"><div class=settings-section><h4 class=section-title>Stock Material Dimensions</h4><p class=section-desc>0,0 is the bottom-left corner of the stock. Top surface is Z = 0 (before offset).</p><div class=grid-2></div><div class=grid-2></div></div><div class=settings-section><h4 class=section-title>Safety & Travel</h4><div class=grid-2><div class=info-box><span class=info-label>Parking Command:</span><span class=info-val><code>G30</code> (MASSO Work Offset Park)</span><p class=info-hint>Moves all axes to machine park position at program end.</p></div></div></div><div class=settings-section><h4 class=section-title>Tool Change</h4><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Tool Change Mode</label><select class=tool-select-dropdown><option value=manual>Manual tool change (M0 pause)</option><option value=changer>Automatic tool changer (T&lt;n> M6)</option></select></div><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Custom Tool-Change G-code</label></div><div class=dim-input-wrapper><input type=text class=dim-input-field placeholder="e.g. G0 Z10; G0 X0 Y0"></div><p class=dim-input-tooltip>Manual mode only. One line; ";" splits into separate gcode lines. Empty = fast to safe Z, then fast to X0 Y0.</p></div></div></div><div class=settings-section><h4 class=section-title>Program End</h4><label title="G30: move all axes to the MASSO work offset park position at program end."style=display:flex;align-items:center;gap:8px;font-size:var(--text-sm);color:var(--text-secondary);cursor:pointer><input type=checkbox class=op-toggle-checkbox>Park at program end (G30)</label></div><div class=settings-section><h4 class=section-title>Defaults for New Operations</h4><div class=grid-3></div><div class=grid-2><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Default Stepover (% of Tool Dia)</label><span class=preview-text>%</span></div><input type=range class=range-slider min=10 max=90></div></div></div></div><div class=modal-footer><button class=btn-primary>Done');function m_(){const n=()=>be().settings;return rt(Ue,{get when(){return vm()},get children(){var t=g_(),e=t.firstChild,i=e.firstChild,r=i.firstChild,s=r.nextSibling,o=i.nextSibling,a=o.firstChild,u=a.firstChild,h=u.nextSibling,d=h.nextSibling,p=d.nextSibling,g=a.nextSibling,m=g.firstChild,y=m.nextSibling,M=y.firstChild,_=g.nextSibling,x=_.firstChild,E=x.nextSibling,f=E.firstChild,c=f.firstChild,v=c.nextSibling,l=f.nextSibling,R=l.firstChild,S=R.nextSibling,b=S.firstChild,w=_.nextSibling,T=w.firstChild,A=T.nextSibling,C=A.firstChild,D=w.nextSibling,L=D.firstChild,F=L.nextSibling,O=F.nextSibling,k=O.firstChild,B=k.firstChild,$=B.firstChild,W=$.nextSibling,st=W.firstChild,ct=B.nextSibling,gt=o.nextSibling,ut=gt.firstChild;return t.$$click=()=>ra(!1),e.$$click=ot=>ot.stopPropagation(),s.$$click=()=>ra(!1),tt(s,rt(Ga,{size:14})),tt(d,rt(oe,{label:"Stock Width (X)",get value(){return n().stockWidth},placeholder:"e.g. 100mm or 4in",onChange:ot=>gn({stockWidth:ot})}),null),tt(d,rt(oe,{label:"Stock Height (Y)",get value(){return n().stockHeight},placeholder:"e.g. 75mm or 3in",onChange:ot=>gn({stockHeight:ot})}),null),tt(p,rt(oe,{label:"Stock Thickness (Z)",get value(){return n().stockThickness},placeholder:"e.g. 12.7mm or 1/2in",tooltip:"Total stock height along Z. Cuts go into negative Z.",onChange:ot=>gn({stockThickness:ot})}),null),tt(p,rt(oe,{label:"Z Offset (Top Surface)",get value(){return n().zOffset},placeholder:"e.g. 0mm",tooltip:"Offset from stock top surface (0mm = stock top is Z0).",onChange:ot=>gn({zOffset:ot})}),null),tt(y,rt(oe,{label:"Safe Z (Retract Height)",get value(){return n().safeZ},placeholder:"e.g. 5mm or 1/4in",tooltip:"Rapid travel height above stock top surface.",onChange:ot=>gn({safeZ:ot})}),M),v.addEventListener("change",ot=>gn({toolChangeMode:ot.currentTarget.value})),b.$$input=ot=>gn({toolChangeGcode:ot.currentTarget.value}),C.addEventListener("change",ot=>gn({parkAtProgramEnd:ot.currentTarget.checked})),tt(F,rt(oe,{label:"Default Feed Rate",get value(){return n().defaultFeedRate},placeholder:"e.g. 800",tooltip:"Horizontal cutting feed in mm/min.",onChange:ot=>gn({defaultFeedRate:ot})}),null),tt(F,rt(oe,{label:"Default Plunge Rate",get value(){return n().defaultPlungeRate},placeholder:"e.g. 300",tooltip:"Vertical plunge feed in mm/min.",onChange:ot=>gn({defaultPlungeRate:ot})}),null),tt(F,rt(oe,{label:"Spindle RPM",get value(){return n().defaultSpindleRpm},allowUnits:!1,unitSuffix:"RPM",placeholder:"e.g. 12000 or 12*1000",tooltip:"Default spindle speed in rev/min.",onChange:ot=>gn({defaultSpindleRpm:ot})}),null),tt(O,rt(oe,{label:"Default Depth Per Pass",get value(){return n().defaultDepthPerPass},placeholder:"e.g. 1.5mm or 1/16in",onChange:ot=>gn({defaultDepthPerPass:ot})}),k),tt(O,rt(oe,{label:"Helical Ramp Angle",get value(){var ot;return((ot=n().helicalRampAngleDeg)==null?void 0:ot.toString())??""},allowUnits:!1,unitSuffix:"°",placeholder:"auto (depth per pass)",tooltip:"Ease-down angle for helical hole ramping. Empty = use the depth per pass (current behavior).",onChange:ot=>{const q=parseFloat(ot);gn({helicalRampAngleDeg:ot.trim()===""||isNaN(q)||q<=0?void 0:q})}}),k),tt(W,()=>n().defaultStepoverPercent,st),ct.$$input=ot=>gn({defaultStepoverPercent:parseInt(ot.currentTarget.value)||40}),ut.$$click=()=>ra(!1),ie(()=>b.disabled=(n().toolChangeMode??"manual")!=="manual"),ie(()=>v.value=n().toolChangeMode??"manual"),ie(()=>b.value=n().toolChangeGcode??""),ie(()=>C.checked=n().parkAtProgramEnd??!1),ie(()=>ct.value=n().defaultStepoverPercent),t}})}ui(["click","input"]);var __=Pt("<input type=text class=project-rename-input autofocus>"),x_=Pt("<span>Copied!"),v_=Pt('<header class=app-header><div class=header-left><div class=app-branding><span class=app-logo></span><span class=app-title>GCoder</span></div><div class=project-title-container></div></div><div class=header-center><div class=history-controls><button class=btn-icon title="Undo (Ctrl+Z)"><span>Undo</span></button><button class=btn-icon title="Redo (Ctrl+Y or Ctrl+Shift+Z)"><span>Redo</span></button></div></div><div class=header-right><button class=btn-secondary title="Stock Dimensions &amp; Global Defaults"><span>Stock Settings</span></button><button class=btn-secondary title="View G-Code Text"><span>G-Code</span></button><button title="Copy generated G-Code to clipboard"></button><button class="btn-primary btn-export"title="Download .nc / .gcode file"><span>Export G-Code'),y_=Pt('<button class=project-name-btn title="Click to manage projects • Double-click to rename"><span class=folder-icon></span><span class=project-name-text></span><span class=dropdown-chevron>'),S_=Pt("<span>Copy G-Code");function M_(){const[n,t]=ve(!1),[e,i]=ve(""),[r,s]=ve(!1);let o=0;const a=()=>{i(be().name),t(!0)},u=()=>{n()&&(Em(e()),t(!1))},h=m=>{m.key==="Enter"?u():m.key==="Escape"&&t(!1)},d=async()=>{const m=Ys().gcode;try{await navigator.clipboard.writeText(m),s(!0),setTimeout(()=>s(!1),2e3)}catch{const y=document.createElement("textarea");y.value=m,document.body.appendChild(y),y.select(),document.execCommand("copy"),document.body.removeChild(y),s(!0),setTimeout(()=>s(!1),2e3)}},p=()=>{const m=Ys().gcode,y=new Blob([m],{type:"text/plain;charset=utf-8"}),M=URL.createObjectURL(y),_=document.createElement("a"),x=be().name.toLowerCase().replace(/[^a-z0-9_-]/g,"_");_.href=M,_.download=`${x}.nc`,_.click(),URL.revokeObjectURL(M)},g=()=>{const m=Date.now();m-o<350?(a(),o=0):o=m};return(()=>{var m=v_(),y=m.firstChild,M=y.firstChild,_=M.firstChild,x=M.nextSibling,E=y.nextSibling,f=E.firstChild,c=f.firstChild,v=c.firstChild,l=c.nextSibling,R=l.firstChild,S=E.nextSibling,b=S.firstChild,w=b.firstChild,T=b.nextSibling,A=T.firstChild,C=T.nextSibling,D=C.nextSibling,L=D.firstChild;return tt(_,rt(qf,{size:16})),tt(x,rt(Ue,{get when(){return n()},get fallback(){return(()=>{var F=y_(),O=F.firstChild,k=O.nextSibling,B=k.nextSibling;return F.$$dblclick=$=>{$.stopPropagation(),a()},F.$$click=()=>{g(),zs(!0)},tt(O,rt(Yf,{size:14})),tt(k,()=>be().name),tt(B,rt(Tu,{size:11})),F})()},get children(){var F=__();return F.$$keydown=h,F.addEventListener("blur",u),F.$$input=O=>i(O.currentTarget.value),ie(()=>F.value=e()),F}})),Sa(c,"click",Wf,!0),tt(c,rt(t_,{size:12,style:{"margin-right":"4px"}}),v),Sa(l,"click",Xf,!0),tt(l,rt(e_,{size:12,style:{"margin-right":"4px"}}),R),b.$$click=()=>ra(!0),tt(b,rt(n_,{size:13}),w),T.$$click=()=>xc(!0),tt(T,rt(i_,{size:13}),A),C.$$click=d,tt(C,rt(Ue,{get when(){return r()},get fallback(){return[rt(ka,{size:13}),S_()]},get children(){return[rt(Kf,{size:13}),x_()]}})),D.$$click=p,tt(D,rt(Jf,{size:13}),L),ie(F=>{var O=!Dm(),k=!Im(),B=`btn-action btn-copy ${r()?"copied":""}`;return O!==F.e&&(c.disabled=F.e=O),k!==F.t&&(l.disabled=F.t=k),B!==F.a&&Fn(C,F.a=B),F},{e:void 0,t:void 0,a:void 0}),m})()}ui(["input","keydown","click","dblclick"]);var b_=Pt('<div><div class=op-card-header><div class=op-header-left><input type=checkbox class=op-toggle-checkbox><span class=op-type-icon></span><span class=op-title></span></div><div class=op-card-actions><button class=btn-tiny title="Move Up"></button><button class=btn-tiny title="Move Down"></button><button class=btn-tiny title=Duplicate></button><button class="btn-tiny btn-tiny-danger"title=Delete></button></div></div><div class=op-card-footer><span class=op-badge-type></span><span class=op-tool-indicator>');function E_(n){switch(n.type){case"surfacing":return rt(Qf,{size:15});case"profiling":return rt(tp,{size:15});case"pocket":return rt(ep,{size:15});case"hole":return rt(np,{size:15});default:return rt(qf,{size:15})}}function w_(n){const t=()=>eo()===n.op.id,e=()=>Yn(n.op.toolId);return(()=>{var i=b_(),r=i.firstChild,s=r.firstChild,o=s.firstChild,a=o.nextSibling,u=a.nextSibling,h=s.nextSibling,d=h.firstChild,p=d.nextSibling,g=p.nextSibling,m=g.nextSibling,y=r.nextSibling,M=y.firstChild,_=M.nextSibling;return i.$$click=()=>hi(n.op.id),o.$$click=x=>{x.stopPropagation(),Rm(n.op.id)},tt(a,rt(E_,{get type(){return n.op.type}})),tt(u,()=>n.op.name),h.$$click=x=>x.stopPropagation(),d.$$click=()=>vh(n.index,n.index-1),tt(d,rt(Zf,{size:11})),p.$$click=()=>vh(n.index,n.index+1),tt(p,rt(Tu,{size:11})),g.$$click=()=>Pm(n.op.id),tt(g,rt(ka,{size:11})),m.$$click=()=>Cm(n.op.id),tt(m,rt(r_,{size:11})),tt(M,()=>n.op.type),tt(_,rt(o_,{size:11,style:{"margin-right":"4px","vertical-align":"middle"}}),null),tt(_,()=>e().name,null),ie(x=>{var E=`op-card ${t()?"op-selected":""} ${n.op.enabled?"":"op-disabled"}`,f=n.op.enabled?"Disable operation":"Enable operation",c=n.index===0,v=n.index===n.total-1;return E!==x.e&&Fn(i,x.e=E),f!==x.t&&Sr(o,"title",x.t=f),c!==x.a&&(d.disabled=x.a=c),v!==x.o&&(p.disabled=x.o=v),x},{e:void 0,t:void 0,a:void 0,o:void 0}),ie(()=>o.checked=n.op.enabled),i})()}ui(["click"]);var T_=Pt("<div class=add-op-menu><div class=add-op-menu-header><span>Select Operation Type</span><button class=btn-tiny title=Close></button></div><div class=add-op-menu-buttons><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Rect Surfacing</strong><span>Face top surface to flat depth</span></div></button><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Rect Profiling</strong><span>Cut outer contour or inside slot</span></div></button><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Pocketing</strong><span>Hollow out rectangular cavity</span></div></button><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Hole Drilling</strong><span>Plunge, peck, or circular bore"),A_=Pt("<div class=operation-list-container><div class=operation-list-header><h3 class=panel-heading>Operations (<!>)</h3><span class=panel-hint>Executed top-to-bottom</span></div><div class=operation-cards-scroll></div><div class=add-operation-section>"),C_=Pt("<div class=empty-ops-state><p>No operations yet.</p><p class=empty-sub>Click below to add a machining feature."),R_=Pt("<button class=btn-add-op><span>Add Operation");function P_(){const[n,t]=ve(!1),e=()=>be().operations,i=r=>{Am(r),t(!1)};return(()=>{var r=A_(),s=r.firstChild,o=s.firstChild,a=o.firstChild,u=a.nextSibling;u.nextSibling;var h=s.nextSibling,d=h.nextSibling;return tt(o,()=>e().length,u),tt(h,rt(Ue,{get when(){return e().length>0},get fallback(){return C_()},get children(){return rt(Mu,{get each(){return e()},children:(p,g)=>rt(w_,{op:p,get index(){return g()},get total(){return e().length}})})}})),tt(d,rt(Ue,{get when(){return n()},get fallback(){return(()=>{var p=R_(),g=p.firstChild;return p.$$click=()=>t(!0),tt(p,rt(jf,{size:13,style:{"margin-right":"6px","vertical-align":"middle"}}),g),p})()},get children(){var p=T_(),g=p.firstChild,m=g.firstChild,y=m.nextSibling,M=g.nextSibling,_=M.firstChild,x=_.firstChild,E=_.nextSibling,f=E.firstChild,c=E.nextSibling,v=c.firstChild,l=c.nextSibling,R=l.firstChild;return y.$$click=()=>t(!1),tt(y,rt(Ga,{size:12})),_.$$click=()=>i("surfacing"),tt(x,rt(Qf,{size:16})),E.$$click=()=>i("profiling"),tt(f,rt(tp,{size:16})),c.$$click=()=>i("pocket"),tt(v,rt(ep,{size:16})),l.$$click=()=>i("hole"),tt(R,rt(np,{size:16})),p}})),r})()}ui(["click"]);var D_=Pt("<div class=tool-select-group><label class=tool-select-label>Cutting Tool</label><div class=tool-select-control><select class=tool-select-dropdown></select><div class=tool-info-badge><span></span><span class=tool-dimensions>Ø <!> mm"),I_=Pt("<option> (<!> mm)");function L_(n){const t=()=>Yn(n.selectedId);return(()=>{var e=D_(),i=e.firstChild,r=i.nextSibling,s=r.firstChild,o=s.nextSibling,a=o.firstChild,u=a.nextSibling,h=u.firstChild,d=h.nextSibling;return d.nextSibling,s.addEventListener("change",p=>n.onChange(p.currentTarget.value)),tt(s,()=>vr.map(p=>(()=>{var g=I_(),m=g.firstChild,y=m.nextSibling;return y.nextSibling,tt(g,()=>p.name,m),tt(g,()=>p.diameterMm.toFixed(3),y),ie(()=>g.value=p.id),g})())),tt(a,()=>t().profile.toUpperCase()),tt(u,()=>t().diameterMm.toFixed(3),d),ie(()=>Fn(a,`profile-tag profile-${t().profile}`)),ie(()=>s.value=n.selectedId),e})()}var N_=Pt('<div class="params-pane empty-params"><p>No operation selected.</p><p class=empty-sub>Click "+ Add Operation" to add a machining feature.'),Sh=Pt("<div class=inline-warning-box><strong>Tool Size Warning:</strong> "),U_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2>"),F_=Pt("<div class=params-pane><div class=params-header><div class=params-title-row><input type=text class=op-name-input><span class=op-type-tag></span></div></div><div class=params-scroll><section class=params-group></section><section class=params-group><h4 class=group-title>Geometry & Dimensions</h4></section><section class=params-group><div class=group-header-collapsible><h4 class=group-title>Feeds, Speeds & Depths</h4><span class=collapse-icon>"),O_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Clearing Pattern</label><select class=tool-select-dropdown><option value=zigzag-h>Zigzag Horizontal (X)</option><option value=zigzag-v>Zigzag Vertical (Y)</option><option value=zigzag-diag>Diagonal Zigzag (45°)</option><option value=spiral>Spiral</option></select></div><div class=dim-input-group><label class=dim-input-label>Path Direction</label><select class=tool-select-dropdown><option value=forward>Forward</option><option value=reversed>Reversed (Start from end)</option></select></div></div><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Stepover (% of Tool Dia)</label><span class=preview-text>%</span></div><input type=range class=range-slider min=10 max=90>"),B_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Cut Side</label><select class=tool-select-dropdown><option value=outside>Outside Profile (Outer boundary)</option><option value=inside>Inside Profile (Inner cut)</option></select></div><div class=dim-input-group><label class=dim-input-label>Direction</label><select class=tool-select-dropdown><option value=forward>Forward (Climb)</option><option value=reversed>Reversed (Conventional)"),z_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Clearing Pattern</label><select class=tool-select-dropdown><option value=spiral>Spiral</option><option value=zigzag-h>Zigzag Horizontal (X)</option><option value=zigzag-v>Zigzag Vertical (Y)</option><option value=zigzag-diag>Diagonal Zigzag (45°)</option></select></div><div class=dim-input-group><label class=dim-input-label>Path Direction</label><select class=tool-select-dropdown><option value=forward>Forward (Outside-in)</option><option value=reversed>Reversed (Inside-out)</option></select></div></div><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Stepover (% of Tool Dia)</label><span class=preview-text>%</span></div><input type=range class=range-slider min=10 max=90>"),k_=Pt('<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Circular Milling Direction</label><select class=tool-select-dropdown><option value=forward>Clockwise (CW - G2)</option><option value=reversed>Counter-Clockwise (CCW - G3)</option></select></div></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Hole Cut Mode</label><select class=tool-select-dropdown><option value=contour>Contour only (leaves center plug)</option><option value=clear>Clear all (spiral from center)</option></select></div><div class=dim-input-group><label class=dim-input-label>Pecking (Chip Extraction)</label><label title="Retract to clear chips. Defaults on when the hole is tighter than 1.2x the tool diameter."style=display:flex;align-items:center;gap:8px;height:32px;font-size:var(--text-sm);color:var(--text-secondary);cursor:pointer><input type=checkbox class=op-toggle-checkbox>Retract to clear chips');function G_(){const n=()=>Vf(),[t,e]=ve(!0),i=Tn(()=>{const o=n();return o?Yn(o.toolId):null}),r=Tn(()=>{const o=n(),a=i();if(o&&o.type==="hole"&&a){const u=et(o.diameter,0);if(u<a.diameterMm-.05)return`Hole diameter (${u.toFixed(2)}mm) is smaller than tool diameter (${a.diameterMm.toFixed(2)}mm). Select a smaller tool or increase hole diameter.`}return null}),s=Tn(()=>{const o=n(),a=i();if(o&&o.type==="pocket"&&a){const u=o,h=et(u.width,0),d=et(u.height,0);if(h<a.diameterMm||d<a.diameterMm)return`Pocket dimension is smaller than tool diameter (${a.diameterMm.toFixed(2)}mm).`}return null});return rt(Ue,{get when(){return n()},get fallback(){return N_()},children:o=>(()=>{var a=F_(),u=a.firstChild,h=u.firstChild,d=h.firstChild,p=d.nextSibling,g=u.nextSibling,m=g.firstChild,y=m.nextSibling;y.firstChild;var M=y.nextSibling,_=M.firstChild,x=_.firstChild,E=x.nextSibling;return d.$$input=f=>ee(o().id,{name:f.currentTarget.value}),tt(p,()=>o().type),tt(a,rt(Ue,{get when(){return r()},get children(){var f=Sh(),c=f.firstChild;return c.nextSibling,tt(f,rt(wa,{size:13,style:{"margin-right":"6px","vertical-align":"text-bottom"}}),c),tt(f,r,null),f}}),g),tt(a,rt(Ue,{get when(){return s()},get children(){var f=Sh(),c=f.firstChild;return c.nextSibling,tt(f,rt(wa,{size:13,style:{"margin-right":"6px","vertical-align":"text-bottom"}}),c),tt(f,s,null),f}}),g),tt(m,rt(L_,{get selectedId(){return o().toolId},onChange:f=>ee(o().id,{toolId:f})})),tt(y,rt(Ue,{get when(){return o().type==="surfacing"},get children(){return(()=>{const f=o();return(()=>{var c=O_(),v=c.firstChild,l=v.nextSibling,R=l.nextSibling,S=R.firstChild,b=S.firstChild,w=b.nextSibling,T=S.nextSibling,A=T.firstChild,C=A.nextSibling,D=R.nextSibling,L=D.firstChild,F=L.firstChild,O=F.nextSibling,k=O.firstChild,B=L.nextSibling;return tt(v,rt(oe,{label:"Start X (Bottom-Left)",get value(){return f.x},placeholder:"e.g. 0mm",onChange:$=>ee(f.id,{x:$})}),null),tt(v,rt(oe,{label:"Start Y (Bottom-Left)",get value(){return f.y},placeholder:"e.g. 0mm",onChange:$=>ee(f.id,{y:$})}),null),tt(l,rt(oe,{label:"Width (X Span)",get value(){return f.width},placeholder:"e.g. 100mm",onChange:$=>ee(f.id,{width:$})}),null),tt(l,rt(oe,{label:"Height (Y Span)",get value(){return f.height},placeholder:"e.g. 75mm",onChange:$=>ee(f.id,{height:$})}),null),tt(c,rt(oe,{label:"Cut Depth (Material to remove)",get value(){return f.cutDepth},placeholder:"e.g. 1.0mm",tooltip:"Depth removed from top surface down.",onChange:$=>ee(f.id,{cutDepth:$})}),R),w.addEventListener("change",$=>ee(f.id,{pattern:$.currentTarget.value})),C.addEventListener("change",$=>ee(f.id,{direction:$.currentTarget.value})),tt(O,()=>f.stepoverPercent,k),B.$$input=$=>ee(f.id,{stepoverPercent:parseInt($.currentTarget.value)||40}),ie(()=>w.value=f.pattern),ie(()=>C.value=f.direction),ie(()=>B.value=f.stepoverPercent),c})()})()}}),null),tt(y,rt(Ue,{get when(){return o().type==="profiling"},get children(){return(()=>{const f=o();return(()=>{var c=B_(),v=c.firstChild,l=v.nextSibling,R=l.nextSibling,S=R.firstChild,b=S.firstChild,w=b.nextSibling,T=S.nextSibling,A=T.firstChild,C=A.nextSibling;return tt(v,rt(oe,{label:"X (Bottom-Left)",get value(){return f.x},placeholder:"e.g. 5mm",onChange:D=>ee(f.id,{x:D})}),null),tt(v,rt(oe,{label:"Y (Bottom-Left)",get value(){return f.y},placeholder:"e.g. 5mm",onChange:D=>ee(f.id,{y:D})}),null),tt(l,rt(oe,{label:"Profile Width (X)",get value(){return f.width},placeholder:"e.g. 80mm",onChange:D=>ee(f.id,{width:D})}),null),tt(l,rt(oe,{label:"Profile Height (Y)",get value(){return f.height},placeholder:"e.g. 60mm",onChange:D=>ee(f.id,{height:D})}),null),tt(c,rt(oe,{label:"Cut Depth",get value(){return f.cutDepth},placeholder:"e.g. 6.35mm",onChange:D=>ee(f.id,{cutDepth:D})}),R),w.addEventListener("change",D=>ee(f.id,{side:D.currentTarget.value})),C.addEventListener("change",D=>ee(f.id,{direction:D.currentTarget.value})),ie(()=>w.value=f.side),ie(()=>C.value=f.direction),c})()})()}}),null),tt(y,rt(Ue,{get when(){return o().type==="pocket"},get children(){return(()=>{const f=o();return(()=>{var c=z_(),v=c.firstChild,l=v.nextSibling,R=l.nextSibling,S=R.firstChild,b=S.firstChild,w=b.nextSibling,T=S.nextSibling,A=T.firstChild,C=A.nextSibling,D=R.nextSibling,L=D.firstChild,F=L.firstChild,O=F.nextSibling,k=O.firstChild,B=L.nextSibling;return tt(v,rt(oe,{label:"Pocket X (Bottom-Left)",get value(){return f.x},placeholder:"e.g. 20mm",onChange:$=>ee(f.id,{x:$})}),null),tt(v,rt(oe,{label:"Pocket Y (Bottom-Left)",get value(){return f.y},placeholder:"e.g. 15mm",onChange:$=>ee(f.id,{y:$})}),null),tt(l,rt(oe,{label:"Pocket Width (X)",get value(){return f.width},placeholder:"e.g. 50mm",onChange:$=>ee(f.id,{width:$})}),null),tt(l,rt(oe,{label:"Pocket Height (Y)",get value(){return f.height},placeholder:"e.g. 40mm",onChange:$=>ee(f.id,{height:$})}),null),tt(c,rt(oe,{label:"Pocket Depth",get value(){return f.cutDepth},placeholder:"e.g. 3mm",onChange:$=>ee(f.id,{cutDepth:$})}),R),w.addEventListener("change",$=>ee(f.id,{pattern:$.currentTarget.value})),C.addEventListener("change",$=>ee(f.id,{direction:$.currentTarget.value})),tt(O,()=>f.stepoverPercent,k),B.$$input=$=>ee(f.id,{stepoverPercent:parseInt($.currentTarget.value)||40}),ie(()=>w.value=f.pattern),ie(()=>C.value=f.direction),ie(()=>B.value=f.stepoverPercent),c})()})()}}),null),tt(y,rt(Ue,{get when(){return o().type==="hole"},get children(){return(()=>{const f=o(),c=i(),v=f.pecking??(c?bu(et(f.diameter,c.diameterMm),c.diameterMm):!1);return(()=>{var l=k_(),R=l.firstChild,S=R.nextSibling,b=S.nextSibling,w=b.firstChild,T=w.firstChild,A=T.nextSibling,C=b.nextSibling,D=C.firstChild,L=D.firstChild,F=L.nextSibling,O=D.nextSibling,k=O.firstChild,B=k.nextSibling,$=B.firstChild;return tt(R,rt(oe,{label:"Hole Center X",get value(){return f.x},placeholder:"e.g. 50mm",onChange:W=>ee(f.id,{x:W})}),null),tt(R,rt(oe,{label:"Hole Center Y",get value(){return f.y},placeholder:"e.g. 37.5mm",onChange:W=>ee(f.id,{y:W})}),null),tt(S,rt(oe,{label:"Hole Diameter",get value(){return f.diameter},placeholder:"e.g. 6.35mm",tooltip:"Must be ≥ tool diameter. If larger, performs circular milling.",onChange:W=>ee(f.id,{diameter:W})}),null),tt(S,rt(oe,{label:"Cut Depth (Hole Depth)",get value(){return f.cutDepth},placeholder:"e.g. 10mm",onChange:W=>ee(f.id,{cutDepth:W})}),null),tt(b,rt(oe,{label:"Peck Depth (Chip break)",get value(){return f.peckDepth},placeholder:"e.g. 2mm",tooltip:"Chip extraction increment, used when pecking is on.",onChange:W=>ee(f.id,{peckDepth:W})}),w),A.addEventListener("change",W=>ee(f.id,{direction:W.currentTarget.value})),F.addEventListener("change",W=>ee(f.id,{cutMode:W.currentTarget.value})),$.addEventListener("change",W=>ee(f.id,{pecking:W.currentTarget.checked})),$.checked=v,ie(()=>A.value=f.direction),ie(()=>F.value=f.cutMode??"contour"),l})()})()}}),null),_.$$click=()=>e(!t()),tt(E,(()=>{var f=qi(()=>!!t());return()=>f()?rt(Zf,{size:11}):rt(Tu,{size:11})})()),tt(M,rt(Ue,{get when(){return t()},get children(){var f=U_(),c=f.firstChild,v=c.nextSibling;return tt(c,rt(oe,{label:"Feed Rate (Cut XY)",get value(){return o().feedRate},placeholder:"e.g. 800",tooltip:"Horizontal cutting speed in mm/min.",onChange:l=>ee(o().id,{feedRate:l})}),null),tt(c,rt(oe,{label:"Plunge Rate (Z)",get value(){return o().plungeRate},placeholder:"e.g. 300",tooltip:"Downward entry speed in mm/min.",onChange:l=>ee(o().id,{plungeRate:l})}),null),tt(v,rt(oe,{label:"Spindle RPM",get value(){return o().spindleRpm},allowUnits:!1,unitSuffix:"RPM",placeholder:"e.g. 12000 or 12*1000",tooltip:"Spindle rotation speed in rev/min.",onChange:l=>ee(o().id,{spindleRpm:l})}),null),tt(v,rt(oe,{label:"Depth Per Pass",get value(){return o().depthPerPass},placeholder:"e.g. 1.5mm",tooltip:"Maximum Z cut per layer.",onChange:l=>ee(o().id,{depthPerPass:l})}),null),f}}),null),ie(()=>d.value=o().name),a})()})}ui(["input","click"]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="186",us={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H_=0,Mh=1,V_=2,sa=1,ip=2,ks=3,oi=0,hn=1,Wn=2,Ti=0,Hs=1,bh=2,Eh=3,wh=4,$_=5,es=100,W_=101,X_=102,q_=103,Y_=104,Z_=200,K_=201,J_=202,j_=203,rp=204,sp=205,Q_=206,t0=207,e0=208,n0=209,i0=210,r0=211,s0=212,o0=213,a0=214,vc=0,yc=1,Sc=2,Zs=3,Mc=4,bc=5,Ec=6,wc=7,op=0,l0=1,c0=2,ri=0,ap=1,lp=2,cp=3,up=4,hp=5,dp=6,fp=7,pp=300,Mr=301,ps=302,al=303,ll=304,Ha=306,Tc=1e3,bi=1001,Ac=1002,je=1003,u0=1004,lo=1005,sn=1006,cl=1007,mr=1008,wn=1009,gp=1010,mp=1011,Ks=1012,Au=1013,ai=1014,ei=1015,li=1016,Cu=1017,Ru=1018,Js=1020,_p=35902,xp=35899,vp=1021,yp=1022,Xn=1023,Ri=1026,_r=1027,Sp=1028,Pu=1029,br=1030,Du=1031,Iu=1033,oa=33776,aa=33777,la=33778,ca=33779,Cc=35840,Rc=35841,Pc=35842,Dc=35843,Ic=36196,Lc=37492,Nc=37496,Uc=37488,Fc=37489,Ta=37490,Oc=37491,Bc=37808,zc=37809,kc=37810,Gc=37811,Hc=37812,Vc=37813,$c=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,Zc=37819,Kc=37820,Jc=37821,jc=36492,Qc=36494,tu=36495,eu=36283,nu=36284,Aa=36285,iu=36286,h0=3200,ru=0,d0=1,$i="",Nn="srgb",Ca="srgb-linear",Ra="linear",de="srgb",ul=7680,f0=519,p0=512,g0=513,m0=514,Lu=515,_0=516,x0=517,Nu=518,v0=519,y0=35044,Th="300 es",ni=2e3,js=2001;function S0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M0(){const n=Pa("canvas");return n.style.display="block",n}const Ah={};function Ch(...n){const t="THREE."+n.shift();console.log(t,...n)}function Mp(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=Mp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ce(...n){n=Mp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function hs(...n){const t=n.join(" ");t in Ah||(Ah[t]=!0,Wt(...n))}function b0(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const E0={[vc]:yc,[Sc]:Ec,[Mc]:wc,[Zs]:bc,[yc]:vc,[Ec]:Sc,[wc]:Mc,[bc]:Zs};class nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,su=180/Math.PI;function io(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function w0(n,t){return(n%t+t)%t}function hl(n,t,e){return(1-e)*n+e*t}function Ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const T0={DEG2RAD:ua},Zu=class Zu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zu.prototype.isVector2=!0;let kt=Zu;class Ji{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let u=i[r+0],h=i[r+1],d=i[r+2],p=i[r+3],g=s[o+0],m=s[o+1],y=s[o+2],M=s[o+3];if(p!==M||u!==g||h!==m||d!==y){let _=u*g+h*m+d*y+p*M;_<0&&(g=-g,m=-m,y=-y,M=-M,_=-_);let x=1-a;if(_<.9995){const E=Math.acos(_),f=Math.sin(E);x=Math.sin(x*E)/f,a=Math.sin(a*E)/f,u=u*x+g*a,h=h*x+m*a,d=d*x+y*a,p=p*x+M*a}else{u=u*x+g*a,h=h*x+m*a,d=d*x+y*a,p=p*x+M*a;const E=1/Math.sqrt(u*u+h*h+d*d+p*p);u*=E,h*=E,d*=E,p*=E}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],u=i[r+1],h=i[r+2],d=i[r+3],p=s[o],g=s[o+1],m=s[o+2],y=s[o+3];return t[e]=a*y+d*p+u*m-h*g,t[e+1]=u*y+d*g+h*p-a*m,t[e+2]=h*y+d*m+a*g-u*p,t[e+3]=d*y-a*p-u*g-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,u=Math.sin,h=a(i/2),d=a(r/2),p=a(s/2),g=u(i/2),m=u(r/2),y=u(s/2);switch(o){case"XYZ":this._x=g*d*p+h*m*y,this._y=h*m*p-g*d*y,this._z=h*d*y+g*m*p,this._w=h*d*p-g*m*y;break;case"YXZ":this._x=g*d*p+h*m*y,this._y=h*m*p-g*d*y,this._z=h*d*y-g*m*p,this._w=h*d*p+g*m*y;break;case"ZXY":this._x=g*d*p-h*m*y,this._y=h*m*p+g*d*y,this._z=h*d*y+g*m*p,this._w=h*d*p-g*m*y;break;case"ZYX":this._x=g*d*p-h*m*y,this._y=h*m*p+g*d*y,this._z=h*d*y-g*m*p,this._w=h*d*p+g*m*y;break;case"YZX":this._x=g*d*p+h*m*y,this._y=h*m*p+g*d*y,this._z=h*d*y-g*m*p,this._w=h*d*p-g*m*y;break;case"XZY":this._x=g*d*p-h*m*y,this._y=h*m*p-g*d*y,this._z=h*d*y+g*m*p,this._w=h*d*p+g*m*y;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],u=e[9],h=e[2],d=e[6],p=e[10],g=i+a+p;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(d-u)*m,this._y=(s-h)*m,this._z=(o-r)*m}else if(i>a&&i>p){const m=2*Math.sqrt(1+i-a-p);this._w=(d-u)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+h)/m}else if(a>p){const m=2*Math.sqrt(1+a-i-p);this._w=(s-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(u+d)/m}else{const m=2*Math.sqrt(1+p-i-a);this._w=(o-r)/m,this._x=(s+h)/m,this._y=(u+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,u=e._y,h=e._z,d=e._w;return this._x=i*d+o*a+r*h-s*u,this._y=r*d+o*u+s*a-i*h,this._z=s*d+o*h+i*u-r*a,this._w=o*d-i*a-r*u-s*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let u=1-e;if(a<.9995){const h=Math.acos(a),d=Math.sin(h);u=Math.sin(u*h)/d,e=Math.sin(e*h)/d,this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+s*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+s*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ku=class Ku{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,u=t.w,h=2*(o*r-a*i),d=2*(a*e-s*r),p=2*(s*i-o*e);return this.x=e+u*h+o*p-a*d,this.y=i+u*d+a*h-s*p,this.z=r+u*p+s*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,u=e.z;return this.x=r*u-s*a,this.y=s*o-i*u,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ku.prototype.isVector3=!0;let U=Ku;const dl=new U,Rh=new Ji,Ju=class Ju{constructor(t,e,i,r,s,o,a,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,u,h)}set(t,e,i,r,s,o,a,u,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=u,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],u=i[6],h=i[1],d=i[4],p=i[7],g=i[2],m=i[5],y=i[8],M=r[0],_=r[3],x=r[6],E=r[1],f=r[4],c=r[7],v=r[2],l=r[5],R=r[8];return s[0]=o*M+a*E+u*v,s[3]=o*_+a*f+u*l,s[6]=o*x+a*c+u*R,s[1]=h*M+d*E+p*v,s[4]=h*_+d*f+p*l,s[7]=h*x+d*c+p*R,s[2]=g*M+m*E+y*v,s[5]=g*_+m*f+y*l,s[8]=g*x+m*c+y*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-i*s*d+i*a*u+r*s*h-r*o*u}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8],p=d*o-a*h,g=a*u-d*s,m=h*s-o*u,y=e*p+i*g+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return t[0]=p*M,t[1]=(r*h-d*i)*M,t[2]=(a*i-r*o)*M,t[3]=g*M,t[4]=(d*e-r*u)*M,t[5]=(r*s-a*e)*M,t[6]=m*M,t[7]=(i*u-h*e)*M,t[8]=(o*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const u=Math.cos(s),h=Math.sin(s);return this.set(i*u,i*h,-i*(u*o+h*a)+o+t,-r*h,r*u,-r*(-h*o+u*a)+a+e,0,0,1),this}scale(t,e){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(t,e)),this}rotate(t){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ju.prototype.isMatrix3=!0;let Yt=Ju;const fl=new Yt,Ph=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){const n={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Ra:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ca]:{primaries:t,whitePoint:i,transfer:Ra,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Ph,fromXYZ:Dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),n}const se=A0();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rr;class C0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rr===void 0&&(Rr=Pa("canvas")),Rr.width=t.width,Rr.height=t.height;const r=Rr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Rr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R0=0;class Uu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=io(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pl(r[o].image)):s.push(pl(r[o]))}else s=pl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let P0=0;const gl=new U;class dn extends nr{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,i=bi,r=bi,s=sn,o=mr,a=Xn,u=wn,h=dn.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=io(),this.name="",this.source=new Uu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=u,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gl).x}get height(){return this.source.getSize(gl).y}get depth(){return this.source.getSize(gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=pp;dn.DEFAULT_ANISOTROPY=1;const ju=class ju{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const u=t.elements,h=u[0],d=u[4],p=u[8],g=u[1],m=u[5],y=u[9],M=u[2],_=u[6],x=u[10];if(Math.abs(d-g)<.01&&Math.abs(p-M)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+g)<.1&&Math.abs(p+M)<.1&&Math.abs(y+_)<.1&&Math.abs(h+m+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const f=(h+1)/2,c=(m+1)/2,v=(x+1)/2,l=(d+g)/4,R=(p+M)/4,S=(y+_)/4;return f>c&&f>v?f<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(f),r=l/i,s=R/i):c>v?c<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),i=l/r,s=S/r):v<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),i=R/s,r=S/s),this.set(i,r,s,e),this}let E=Math.sqrt((_-y)*(_-y)+(p-M)*(p-M)+(g-d)*(g-d));return Math.abs(E)<.001&&(E=1),this.x=(_-y)/E,this.y=(p-M)/E,this.z=(g-d)/E,this.w=Math.acos((h+m+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ju.prototype.isVector4=!0;let ge=ju;class D0 extends nr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Uu(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends D0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class bp extends dn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends dn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Fa=class Fa{constructor(t,e,i,r,s,o,a,u,h,d,p,g,m,y,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,u,h,d,p,g,m,y,M,_)}set(t,e,i,r,s,o,a,u,h,d,p,g,m,y,M,_){const x=this.elements;return x[0]=t,x[4]=e,x[8]=i,x[12]=r,x[1]=s,x[5]=o,x[9]=a,x[13]=u,x[2]=h,x[6]=d,x[10]=p,x[14]=g,x[3]=m,x[7]=y,x[11]=M,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),o=1/Pr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(r),h=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const g=o*d,m=o*p,y=a*d,M=a*p;e[0]=u*d,e[4]=-u*p,e[8]=h,e[1]=m+y*h,e[5]=g-M*h,e[9]=-a*u,e[2]=M-g*h,e[6]=y+m*h,e[10]=o*u}else if(t.order==="YXZ"){const g=u*d,m=u*p,y=h*d,M=h*p;e[0]=g+M*a,e[4]=y*a-m,e[8]=o*h,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=m*a-y,e[6]=M+g*a,e[10]=o*u}else if(t.order==="ZXY"){const g=u*d,m=u*p,y=h*d,M=h*p;e[0]=g-M*a,e[4]=-o*p,e[8]=y+m*a,e[1]=m+y*a,e[5]=o*d,e[9]=M-g*a,e[2]=-o*h,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){const g=o*d,m=o*p,y=a*d,M=a*p;e[0]=u*d,e[4]=y*h-m,e[8]=g*h+M,e[1]=u*p,e[5]=M*h+g,e[9]=m*h-y,e[2]=-h,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){const g=o*u,m=o*h,y=a*u,M=a*h;e[0]=u*d,e[4]=M-g*p,e[8]=y*p+m,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=m*p+y,e[10]=g-M*p}else if(t.order==="XZY"){const g=o*u,m=o*h,y=a*u,M=a*h;e[0]=u*d,e[4]=-p,e[8]=h*d,e[1]=g*p+M,e[5]=o*d,e[9]=m*p-y,e[2]=y*p-m,e[6]=a*d,e[10]=M*p+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L0,t,N0)}lookAt(t,e,i){const r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ui.crossVectors(i,Sn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ui.crossVectors(i,Sn)),Ui.normalize(),co.crossVectors(Sn,Ui),r[0]=Ui.x,r[4]=co.x,r[8]=Sn.x,r[1]=Ui.y,r[5]=co.y,r[9]=Sn.y,r[2]=Ui.z,r[6]=co.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],u=i[8],h=i[12],d=i[1],p=i[5],g=i[9],m=i[13],y=i[2],M=i[6],_=i[10],x=i[14],E=i[3],f=i[7],c=i[11],v=i[15],l=r[0],R=r[4],S=r[8],b=r[12],w=r[1],T=r[5],A=r[9],C=r[13],D=r[2],L=r[6],F=r[10],O=r[14],k=r[3],B=r[7],$=r[11],W=r[15];return s[0]=o*l+a*w+u*D+h*k,s[4]=o*R+a*T+u*L+h*B,s[8]=o*S+a*A+u*F+h*$,s[12]=o*b+a*C+u*O+h*W,s[1]=d*l+p*w+g*D+m*k,s[5]=d*R+p*T+g*L+m*B,s[9]=d*S+p*A+g*F+m*$,s[13]=d*b+p*C+g*O+m*W,s[2]=y*l+M*w+_*D+x*k,s[6]=y*R+M*T+_*L+x*B,s[10]=y*S+M*A+_*F+x*$,s[14]=y*b+M*C+_*O+x*W,s[3]=E*l+f*w+c*D+v*k,s[7]=E*R+f*T+c*L+v*B,s[11]=E*S+f*A+c*F+v*$,s[15]=E*b+f*C+c*O+v*W,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],u=t[9],h=t[13],d=t[2],p=t[6],g=t[10],m=t[14],y=t[3],M=t[7],_=t[11],x=t[15],E=u*m-h*g,f=a*m-h*p,c=a*g-u*p,v=o*m-h*d,l=o*g-u*d,R=o*p-a*d;return e*(M*E-_*f+x*c)-i*(y*E-_*v+x*l)+r*(y*f-M*v+x*R)-s*(y*c-M*l+_*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],u=t[2],h=t[6],d=t[10];return e*(o*d-a*h)-i*(s*d-a*u)+r*(s*h-o*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8],p=t[9],g=t[10],m=t[11],y=t[12],M=t[13],_=t[14],x=t[15],E=e*a-i*o,f=e*u-r*o,c=e*h-s*o,v=i*u-r*a,l=i*h-s*a,R=r*h-s*u,S=d*M-p*y,b=d*_-g*y,w=d*x-m*y,T=p*_-g*M,A=p*x-m*M,C=g*x-m*_,D=E*C-f*A+c*T+v*w-l*b+R*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/D;return t[0]=(a*C-u*A+h*T)*L,t[1]=(r*A-i*C-s*T)*L,t[2]=(M*R-_*l+x*v)*L,t[3]=(g*l-p*R-m*v)*L,t[4]=(u*w-o*C-h*b)*L,t[5]=(e*C-r*w+s*b)*L,t[6]=(_*c-y*R-x*f)*L,t[7]=(d*R-g*c+m*f)*L,t[8]=(o*A-a*w+h*S)*L,t[9]=(i*w-e*A-s*S)*L,t[10]=(y*l-M*c+x*E)*L,t[11]=(p*c-d*l-m*E)*L,t[12]=(a*b-o*T-u*S)*L,t[13]=(e*T-i*b+r*S)*L,t[14]=(M*f-y*v-_*E)*L,t[15]=(d*v-p*f+g*E)*L,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,u=t.z,h=s*o,d=s*a;return this.set(h*o+i,h*a-r*u,h*u+r*a,0,h*a+r*u,d*a+i,d*u-r*o,0,h*u-r*a,d*u+r*o,s*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,u=e._w,h=s+s,d=o+o,p=a+a,g=s*h,m=s*d,y=s*p,M=o*d,_=o*p,x=a*p,E=u*h,f=u*d,c=u*p,v=i.x,l=i.y,R=i.z;return r[0]=(1-(M+x))*v,r[1]=(m+c)*v,r[2]=(y-f)*v,r[3]=0,r[4]=(m-c)*l,r[5]=(1-(g+x))*l,r[6]=(_+E)*l,r[7]=0,r[8]=(y+f)*R,r[9]=(_-E)*R,r[10]=(1-(g+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),u=Pr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),zn.copy(this);const h=1/o,d=1/a,p=1/u;return zn.elements[0]*=h,zn.elements[1]*=h,zn.elements[2]*=h,zn.elements[4]*=d,zn.elements[5]*=d,zn.elements[6]*=d,zn.elements[8]*=p,zn.elements[9]*=p,zn.elements[10]*=p,e.setFromRotationMatrix(zn),i.x=o,i.y=a,i.z=u,this}makePerspective(t,e,i,r,s,o,a=ni,u=!1){const h=this.elements,d=2*s/(e-t),p=2*s/(i-r),g=(e+t)/(e-t),m=(i+r)/(i-r);let y,M;if(u)y=s/(o-s),M=o*s/(o-s);else if(a===ni)y=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===js)y=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ni,u=!1){const h=this.elements,d=2/(e-t),p=2/(i-r),g=-(e+t)/(e-t),m=-(i+r)/(i-r);let y,M;if(u)y=1/(o-s),M=o/(o-s);else if(a===ni)y=-2/(o-s),M=-(o+s)/(o-s);else if(a===js)y=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=p,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=y,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Fa.prototype.isMatrix4=!0;let re=Fa;const Pr=new U,zn=new re,L0=new U(0,0,0),N0=new U(1,1,1),Ui=new U,co=new U,Sn=new U,Ih=new re,Lh=new Ji;class ji{constructor(t=0,e=0,i=0,r=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],u=r[1],h=r[5],d=r[9],p=r[2],g=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class Ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let U0=0;const Nh=new U,Dr=new Ji,di=new re,uo=new U,Ms=new U,F0=new U,O0=new Ji,Uh=new U(1,0,0),Fh=new U(0,1,0),Oh=new U(0,0,1),Bh={type:"added"},B0={type:"removed"},Ir={type:"childadded",child:null},ml={type:"childremoved",child:null};class qe extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new U,e=new ji,i=new Ji,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new Yt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(t,e){return Dr.setFromAxisAngle(t,e),this.quaternion.premultiply(Dr),this}rotateX(t){return this.rotateOnAxis(Uh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Nh.copy(t).applyQuaternion(this.quaternion),this.position.add(Nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?uo.copy(t):uo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Ms,uo,this.up):di.lookAt(uo,Ms,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(di),this.quaternion.premultiply(Dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B0),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,F0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,O0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const p=u[h];s(t.shapes,p)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,h=this.material.length;u<h;u++)a.push(s(t.materials,this.material[u]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(t.animations,u))}}if(e){const a=o(t.geometries),u=o(t.materials),h=o(t.textures),d=o(t.images),p=o(t.shapes),g=o(t.skeletons),m=o(t.animations),y=o(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),g.length>0&&(i.skeletons=g),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const u=[];for(const h in a){const d=a[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.DEFAULT_UP=new U(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ei extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,i),x=this._getHandJoint(h,M);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],g=d.position.distanceTo(p.position),m=.02,y=.005;h.inputState.pinching&&g>m+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=m-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=se.workingColorSpace){if(t=w0(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=xl(o,s,t+1/3),this.g=xl(o,s,t),this.b=xl(o,s,t-1/3)}return se.colorSpaceToWorking(this,r),this}setStyle(t,e=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Nn){const i=wp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Nn){return se.workingToColorSpace(nn.copy(this),t),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(t=Nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(nn.copy(this),e);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let u,h;const d=(a+o)/2;if(a===o)u=0,h=0;else{const p=o-a;switch(h=d<=.5?p/(o+a):p/(2-o-a),o){case i:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-i)/p+2;break;case s:u=(i-r)/p+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Nn){se.workingToColorSpace(nn.copy(this),t);const e=nn.r,i=nn.g,r=nn.b;return t!==Nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(ho);const i=hl(Fi.h,ho.h,e),r=hl(Fi.s,ho.s,e),s=hl(Fi.l,ho.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new te;te.NAMES=wp;class k0 extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const kn=new U,fi=new U,vl=new U,pi=new U,Lr=new U,Nr=new U,zh=new U,yl=new U,Sl=new U,Ml=new U,bl=new ge,El=new ge,wl=new ge;class Se{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),kn.subVectors(t,e),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){kn.subVectors(r,e),fi.subVectors(i,e),vl.subVectors(t,e);const o=kn.dot(kn),a=kn.dot(fi),u=kn.dot(vl),h=fi.dot(fi),d=fi.dot(vl),p=o*h-a*a;if(p===0)return s.set(0,0,0),null;const g=1/p,m=(h*u-a*d)*g,y=(o*d-a*u)*g;return s.set(1-m-y,y,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,r,s,o,a,u){return this.getBarycoord(t,e,i,r,pi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,pi.x),u.addScaledVector(o,pi.y),u.addScaledVector(a,pi.z),u)}static getInterpolatedAttribute(t,e,i,r,s,o){return bl.setScalar(0),El.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,i),wl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(bl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(wl,s.z),o}static isFrontFacing(t,e,i,r){return kn.subVectors(i,e),fi.subVectors(t,e),kn.cross(fi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Se.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Se.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Se.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Se.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Se.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Lr.subVectors(r,i),Nr.subVectors(s,i),yl.subVectors(t,i);const u=Lr.dot(yl),h=Nr.dot(yl);if(u<=0&&h<=0)return e.copy(i);Sl.subVectors(t,r);const d=Lr.dot(Sl),p=Nr.dot(Sl);if(d>=0&&p<=d)return e.copy(r);const g=u*p-d*h;if(g<=0&&u>=0&&d<=0)return o=u/(u-d),e.copy(i).addScaledVector(Lr,o);Ml.subVectors(t,s);const m=Lr.dot(Ml),y=Nr.dot(Ml);if(y>=0&&m<=y)return e.copy(s);const M=m*h-u*y;if(M<=0&&h>=0&&y<=0)return a=h/(h-y),e.copy(i).addScaledVector(Nr,a);const _=d*y-m*p;if(_<=0&&p-d>=0&&m-y>=0)return zh.subVectors(s,r),a=(p-d)/(p-d+(m-y)),e.copy(r).addScaledVector(zh,a);const x=1/(_+M+g);return o=M*x,a=g*x,e.copy(i).addScaledVector(Lr,o).addScaledVector(Nr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),po.subVectors(this.max,bs),Ur.subVectors(t.a,bs),Fr.subVectors(t.b,bs),Or.subVectors(t.c,bs),Oi.subVectors(Fr,Ur),Bi.subVectors(Or,Fr),rr.subVectors(Ur,Or);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-rr.z,rr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,rr.z,0,-rr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-rr.y,rr.x,0];return!Tl(e,Ur,Fr,Or,po)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,Ur,Fr,Or,po))?!1:(go.crossVectors(Oi,Bi),e=[go.x,go.y,go.z],Tl(e,Ur,Fr,Or,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const gi=[new U,new U,new U,new U,new U,new U,new U,new U],Gn=new U,fo=new fn,Ur=new U,Fr=new U,Or=new U,Oi=new U,Bi=new U,rr=new U,bs=new U,po=new U,go=new U,sr=new U;function Tl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){sr.fromArray(n,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),u=t.dot(sr),h=e.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>a)return!1}return!0}const Ne=new U,mo=new kt;let G0=0;class An extends nr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=y0,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Tp extends An{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ap extends An{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends An{constructor(t,e,i){super(new Float32Array(t),e,i)}}const H0=new fn,Es=new U,Al=new U;class Va{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):H0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Es,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(Al)),this.expandByPoint(Es.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let V0=0;const Dn=new re,Cl=new qe,Br=new U,Mn=new fn,ws=new fn,We=new U;class Qe extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S0(t)?Ap:Tp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,i){return Dn.makeTranslation(t,e,i),this.applyMatrix4(Dn),this}scale(t,e,i){return Dn.makeScale(t,e,i),this.applyMatrix4(Dn),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(Mn.min,ws.min),Mn.expandByPoint(We),We.addVectors(Mn.max,ws.max),Mn.expandByPoint(We)):(Mn.expandByPoint(ws.min),Mn.expandByPoint(ws.max))}Mn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],u=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)We.fromBufferAttribute(a,h),u&&(Br.fromBufferAttribute(t,h),We.add(Br)),r=Math.max(r,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new An(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],u=[];for(let S=0;S<i.count;S++)a[S]=new U,u[S]=new U;const h=new U,d=new U,p=new U,g=new kt,m=new kt,y=new kt,M=new U,_=new U;function x(S,b,w){h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,w),g.fromBufferAttribute(s,S),m.fromBufferAttribute(s,b),y.fromBufferAttribute(s,w),d.sub(h),p.sub(h),m.sub(g),y.sub(g);const T=1/(m.x*y.y-y.x*m.y);isFinite(T)&&(M.copy(d).multiplyScalar(y.y).addScaledVector(p,-m.y).multiplyScalar(T),_.copy(p).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(T),a[S].add(M),a[b].add(M),a[w].add(M),u[S].add(_),u[b].add(_),u[w].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let S=0,b=E.length;S<b;++S){const w=E[S],T=w.start,A=w.count;for(let C=T,D=T+A;C<D;C+=3)x(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const f=new U,c=new U,v=new U,l=new U;function R(S){v.fromBufferAttribute(r,S),l.copy(v);const b=a[S];f.copy(b),f.sub(v.multiplyScalar(v.dot(b))).normalize(),c.crossVectors(l,b);const T=c.dot(u[S])<0?-1:1;o.setXYZW(S,f.x,f.y,f.z,T)}for(let S=0,b=E.length;S<b;++S){const w=E[S],T=w.start,A=w.count;for(let C=T,D=T+A;C<D;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let g=0,m=i.count;g<m;g++)i.setXYZ(g,0,0,0);const r=new U,s=new U,o=new U,a=new U,u=new U,h=new U,d=new U,p=new U;if(t)for(let g=0,m=t.count;g<m;g+=3){const y=t.getX(g+0),M=t.getX(g+1),_=t.getX(g+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,y),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),a.add(d),u.add(d),h.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,m=e.count;g<m;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(g+0,d.x,d.y,d.z),i.setXYZ(g+1,d.x,d.y,d.z),i.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,u){const h=a.array,d=a.itemSize,p=a.normalized,g=new h.constructor(u.length*d);let m=0,y=0;for(let M=0,_=u.length;M<_;M++){a.isInterleavedBufferAttribute?m=u[M]*a.data.stride+a.offset:m=u[M]*d;for(let x=0;x<d;x++)g[y++]=h[m++]}return new An(g,d,p)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],h=t(u,i);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const u=[],h=s[a];for(let d=0,p=h.length;d<p;d++){const g=h[d],m=t(g,i);u.push(m)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const u in i){const h=i[u];t.data.attributes[u]=h.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let p=0,g=h.length;p<g;p++){const m=h[p];d.push(m.toJSON(t.data))}d.length>0&&(r[u]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],p=s[h];for(let g=0,m=p.length;g<m;g++)d.push(p[g].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new U,$0=new U,W0=new Yt;class En{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Rl.subVectors(i,e).cross($0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(Rl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||W0.getNormalMatrix(t),r=this.coplanarPoint(Rl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let X0=0;class xs extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Hs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new En().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const mi=new U,Pl=new U,_o=new U,xo=new U;class vs{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Pl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(Pl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=xo.dot(this.direction),u=-xo.dot(_o),h=xo.lengthSq(),d=Math.abs(1-o*o);let p,g,m,y;if(d>0)if(p=o*u-a,g=o*a-u,y=s*d,p>=0)if(g>=-y)if(g<=y){const M=1/d;p*=M,g*=M,m=p*(p+o*g+2*a)+g*(o*p+g+2*u)+h}else g=s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*u)+h;else g=-s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*u)+h;else g<=-y?(p=Math.max(0,-(-o*s+a)),g=p>0?-s:Math.min(Math.max(-s,-u),s),m=-p*p+g*(g+2*u)+h):g<=y?(p=0,g=Math.min(Math.max(-s,-u),s),m=g*(g+2*u)+h):(p=Math.max(0,-(o*s+a)),g=p>0?s:Math.min(Math.max(-s,-u),s),m=-p*p+g*(g+2*u)+h);else g=o>0?-s:s,p=Math.max(0,-(o*g+a)),m=-p*p+g*(g+2*u)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Pl).addScaledVector(_o,g),m}intersectSphere(t,e){if(t.radius<0)return null;mi.subVectors(t.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,u;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,g=this.origin;return h>=0?(i=(t.min.x-g.x)*h,r=(t.max.x-g.x)*h):(i=(t.max.x-g.x)*h,r=(t.min.x-g.x)*h),d>=0?(s=(t.min.y-g.y)*d,o=(t.max.y-g.y)*d):(s=(t.max.y-g.y)*d,o=(t.min.y-g.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-g.z)*p,u=(t.max.z-g.z)*p):(a=(t.max.z-g.z)*p,u=(t.min.z-g.z)*p),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,i,r,s){const o=this.origin,a=this.direction,u=a.x,h=a.y,d=a.z,p=t.x-o.x,g=t.y-o.y,m=t.z-o.z,y=e.x-o.x,M=e.y-o.y,_=e.z-o.z,x=i.x-o.x,E=i.y-o.y,f=i.z-o.z,c=Math.abs(u),v=Math.abs(h),l=Math.abs(d);let R,S,b,w,T,A,C,D,L,F,O,k;if(c>=v&&c>=l?(b=u,A=p,L=y,k=x,u>=0?(R=h,S=d,w=g,T=m,C=M,D=_,F=E,O=f):(R=d,S=h,w=m,T=g,C=_,D=M,F=f,O=E)):v>=l?(b=h,A=g,L=M,k=E,h>=0?(R=d,S=u,w=m,T=p,C=_,D=y,F=f,O=x):(R=u,S=d,w=p,T=m,C=y,D=_,F=x,O=f)):(b=d,A=m,L=_,k=f,d>=0?(R=u,S=h,w=p,T=g,C=y,D=M,F=x,O=E):(R=h,S=u,w=g,T=p,C=M,D=y,F=E,O=x)),b===0)return null;const B=R/b,$=S/b,W=1/b,st=w-B*A,ct=T-$*A,gt=C-B*L,ut=D-$*L,ot=F-B*k,q=O-$*k,K=ot*ut-q*gt,at=st*q-ct*ot,ft=gt*ct-ut*st;if(r){if(K<0||at<0||ft<0)return null}else if((K<0||at<0||ft<0)&&(K>0||at>0||ft>0))return null;const ht=K+at+ft;if(ht===0)return null;const zt=W*(K*A+at*L+ft*k);return(ht>0?zt<0:zt>0)?null:this.at(zt/ht,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Cp extends xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kh=new re,or=new vs,vo=new Va,Gh=new U,yo=new U,So=new U,Mo=new U,Dl=new U,bo=new U,Hh=new U,Eo=new U;class Je extends qe{constructor(t=new Qe,e=new Cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){bo.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=a[u],p=s[u];d!==0&&(Dl.fromBufferAttribute(p,t),o?bo.addScaledVector(Dl,d):bo.addScaledVector(Dl.sub(e),d))}e.add(bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),or.copy(t.ray).recast(t.near),!(vo.containsPoint(or.origin)===!1&&(or.intersectSphere(vo,Gh)===null||or.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(kh.copy(s).invert(),or.copy(t.ray).applyMatrix4(kh),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,g=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,M=g.length;y<M;y++){const _=g[y],x=o[_.materialIndex],E=Math.max(_.start,m.start),f=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let c=E,v=f;c<v;c+=3){const l=a.getX(c),R=a.getX(c+1),S=a.getX(c+2);r=wo(this,x,t,i,h,d,p,l,R,S),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const y=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let _=y,x=M;_<x;_+=3){const E=a.getX(_),f=a.getX(_+1),c=a.getX(_+2);r=wo(this,o,t,i,h,d,p,E,f,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let y=0,M=g.length;y<M;y++){const _=g[y],x=o[_.materialIndex],E=Math.max(_.start,m.start),f=Math.min(u.count,Math.min(_.start+_.count,m.start+m.count));for(let c=E,v=f;c<v;c+=3){const l=c,R=c+1,S=c+2;r=wo(this,x,t,i,h,d,p,l,R,S),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const y=Math.max(0,m.start),M=Math.min(u.count,m.start+m.count);for(let _=y,x=M;_<x;_+=3){const E=_,f=_+1,c=_+2;r=wo(this,o,t,i,h,d,p,E,f,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function q0(n,t,e,i,r,s,o,a){let u;if(t.side===hn?u=i.intersectTriangle(o,s,r,!0,a):u=i.intersectTriangle(r,s,o,t.side===oi,a),u===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:n}}function wo(n,t,e,i,r,s,o,a,u,h){n.getVertexPosition(a,yo),n.getVertexPosition(u,So),n.getVertexPosition(h,Mo);const d=q0(n,t,e,i,yo,So,Mo,Hh);if(d){const p=new U;Se.getBarycoord(Hh,yo,So,Mo,p),r&&(d.uv=Se.getInterpolatedAttribute(r,a,u,h,p,new kt)),s&&(d.uv1=Se.getInterpolatedAttribute(s,a,u,h,p,new kt)),o&&(d.normal=Se.getInterpolatedAttribute(o,a,u,h,p,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const g={a,b:u,c:h,normal:new U,materialIndex:0};Se.getNormal(yo,So,Mo,g.normal),d.face=g,d.barycoord=p}return d}class Y0 extends dn{constructor(t=null,e=1,i=1,r,s,o,a,u,h=je,d=je,p,g){super(null,o,a,u,h,d,r,s,p,g),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ar=new Va,Z0=new kt(.5,.5),To=new U;class Fu{constructor(t=new En,e=new En,i=new En,r=new En,s=new En,o=new En){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],u=s[2],h=s[3],d=s[4],p=s[5],g=s[6],m=s[7],y=s[8],M=s[9],_=s[10],x=s[11],E=s[12],f=s[13],c=s[14],v=s[15];if(r[0].setComponents(h-o,m-d,x-y,v-E).normalize(),r[1].setComponents(h+o,m+d,x+y,v+E).normalize(),r[2].setComponents(h+a,m+p,x+M,v+f).normalize(),r[3].setComponents(h-a,m-p,x-M,v-f).normalize(),i)r[4].setComponents(u,g,_,c).normalize(),r[5].setComponents(h-u,m-g,x-_,v-c).normalize();else if(r[4].setComponents(h-u,m-g,x-_,v-c).normalize(),e===ni)r[5].setComponents(h+u,m+g,x+_,v+c).normalize();else if(e===js)r[5].setComponents(u,g,_,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);const e=Z0.distanceTo(t.center);return ar.radius=.7071067811865476+e,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(To.x=r.normal.x>0?t.max.x:t.min.x,To.y=r.normal.y>0?t.max.y:t.min.y,To.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wr extends xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Da=new U,Ia=new U,Vh=new re,Ts=new vs,Ao=new Va,Il=new U,$h=new U;class K0 extends qe{constructor(t=new Qe,e=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Da.fromBufferAttribute(e,r-1),Ia.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Da.distanceTo(Ia);t.setAttribute("lineDistance",new Ye(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,t.ray.intersectsSphere(Ao)===!1)return;Vh.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(Vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,h=this.isLineSegments?2:1,d=i.index,g=i.attributes.position;if(d!==null){const m=Math.max(0,o.start),y=Math.min(d.count,o.start+o.count);for(let M=m,_=y-1;M<_;M+=h){const x=d.getX(M),E=d.getX(M+1),f=Co(this,t,Ts,u,x,E,M);f&&e.push(f)}if(this.isLineLoop){const M=d.getX(y-1),_=d.getX(m),x=Co(this,t,Ts,u,M,_,y-1);x&&e.push(x)}}else{const m=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let M=m,_=y-1;M<_;M+=h){const x=Co(this,t,Ts,u,M,M+1,M);x&&e.push(x)}if(this.isLineLoop){const M=Co(this,t,Ts,u,y-1,m,y-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Co(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Da.fromBufferAttribute(a,r),Ia.fromBufferAttribute(a,s),e.distanceSqToSegment(Da,Ia,Il,$h)>i)return;Il.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Il);if(!(h<t.near||h>t.far))return{distance:h,point:$h.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Wh=new U,Xh=new U;class gs extends K0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Wh.fromBufferAttribute(e,r),Xh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Wh.distanceTo(Xh);t.setAttribute("lineDistance",new Ye(i,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rp extends dn{constructor(t=[],e=Mr,i,r,s,o,a,u,h,d){super(t,e,i,r,s,o,a,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qs extends dn{constructor(t,e,i=ai,r,s,o,a=je,u=je,h,d=Ri,p=1){if(d!==Ri&&d!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:p};super(g,r,s,o,a,u,d,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class J0 extends Qs{constructor(t,e=ai,i=Mr,r,s,o=je,a=je,u,h=Ri){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,i,r,s,o,a,u,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pp extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rn extends Qe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],p=[];let g=0,m=0;y("z","y","x",-1,-1,i,e,t,o,s,0),y("z","y","x",1,-1,i,e,-t,o,s,1),y("x","z","y",1,1,t,i,e,r,o,2),y("x","z","y",1,-1,t,i,-e,r,o,3),y("x","y","z",1,-1,t,e,i,r,s,4),y("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function y(M,_,x,E,f,c,v,l,R,S,b){const w=c/R,T=v/S,A=c/2,C=v/2,D=l/2,L=R+1,F=S+1;let O=0,k=0;const B=new U;for(let $=0;$<F;$++){const W=$*T-C;for(let st=0;st<L;st++){const ct=st*w-A;B[M]=ct*E,B[_]=W*f,B[x]=D,h.push(B.x,B.y,B.z),B[M]=0,B[_]=0,B[x]=l>0?1:-1,d.push(B.x,B.y,B.z),p.push(st/R),p.push(1-$/S),O+=1}}for(let $=0;$<S;$++)for(let W=0;W<R;W++){const st=g+W+L*$,ct=g+W+L*($+1),gt=g+(W+1)+L*($+1),ut=g+(W+1)+L*$;u.push(st,ct,ut),u.push(ct,gt,ut),k+=6}a.addGroup(m,k,b),m+=k,g+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $a extends Qe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:u};const h=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],g=[],m=[];let y=0;const M=[],_=i/2;let x=0;E(),o===!1&&(t>0&&f(!0),e>0&&f(!1)),this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(g,3)),this.setAttribute("uv",new Ye(m,2));function E(){const c=new U,v=new U;let l=0;const R=(e-t)/i;for(let S=0;S<=s;S++){const b=[],w=S/s,T=w*(e-t)+t;for(let A=0;A<=r;A++){const C=A/r,D=C*u+a,L=Math.sin(D),F=Math.cos(D);v.x=T*L,v.y=-w*i+_,v.z=T*F,p.push(v.x,v.y,v.z),c.set(L,R,F).normalize(),g.push(c.x,c.y,c.z),m.push(C,1-w),b.push(y++)}M.push(b)}for(let S=0;S<r;S++)for(let b=0;b<s;b++){const w=M[b][S],T=M[b+1][S],A=M[b+1][S+1],C=M[b][S+1];(t>0||b!==0)&&(d.push(w,T,C),l+=3),(e>0||b!==s-1)&&(d.push(T,A,C),l+=3)}h.addGroup(x,l,0),x+=l}function f(c){const v=y,l=new kt,R=new U;let S=0;const b=c===!0?t:e,w=c===!0?1:-1;for(let A=1;A<=r;A++)p.push(0,_*w,0),g.push(0,w,0),m.push(.5,.5),y++;const T=y;for(let A=0;A<=r;A++){const D=A/r*u+a,L=Math.cos(D),F=Math.sin(D);R.x=b*F,R.y=_*w,R.z=b*L,p.push(R.x,R.y,R.z),g.push(0,w,0),l.x=L*.5+.5,l.y=F*.5*w+.5,m.push(l.x,l.y),y++}for(let A=0;A<r;A++){const C=v+A,D=T+A;c===!0?d.push(D,D+1,C):d.push(D+1,D,C),S+=3}h.addGroup(x,S,c===!0?1:2),x+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wa extends Qe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),u=Math.floor(r),h=a+1,d=u+1,p=t/a,g=e/u,m=[],y=[],M=[],_=[];for(let x=0;x<d;x++){const E=x*g-o;for(let f=0;f<h;f++){const c=f*p-s;y.push(c,-E,0),M.push(0,0,1),_.push(f/a),_.push(1-x/u)}}for(let x=0;x<u;x++)for(let E=0;E<a;E++){const f=E+h*x,c=E+h*(x+1),v=E+1+h*(x+1),l=E+1+h*x;m.push(f,c,l),m.push(c,v,l)}this.setIndex(m),this.setAttribute("position",new Ye(y,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.width,t.height,t.widthSegments,t.heightSegments)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(qh(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(qh(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const r in i)t[r]=i[r]}return t}function qh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function j0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Q0={clone:ms,merge:un};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=j0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new te().setHex(r.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new U().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ge().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new re().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class nx extends ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ip extends xs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ix extends xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rx extends xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sx extends wr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Ou extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ox extends Ou{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ll=new re,Yh=new U,Zh=new U;class ax{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fu,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ll,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,u=r?r.x/s.x:0,h=r?r.y/s.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ro=new U,Po=new Ji,Jn=new U;class Lp extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Po,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ro,Po,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new U,Kh=new kt,Jh=new kt;class Un extends Lp{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=su*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return su*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,Jh),e.subVectors(Jh,Kh)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/u,e-=o.offsetY*i/h,r*=o.width/u,i*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Bu extends Lp{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=d*this.view.offsetY,u=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class lx extends ax{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends Ou{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new lx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class cx extends Ou{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const zr=-90,kr=1;class ux extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(zr,kr,t,e);r.layers=this.layers,this.add(r);const s=new Un(zr,kr,t,e);s.layers=this.layers,this.add(s);const o=new Un(zr,kr,t,e);o.layers=this.layers,this.add(o);const a=new Un(zr,kr,t,e);a.layers=this.layers,this.add(a);const u=new Un(zr,kr,t,e);u.layers=this.layers,this.add(u);const h=new Un(zr,kr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,u]=e;for(const h of e)this.remove(h);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,h,d]=this.children,p=t.getRenderTarget(),g=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,g,m),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class hx extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Qh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qu=class Qu{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};Qu.prototype.isMatrix2=!0;let td=Qu;const ed=new U,Do=new U,Gr=new U,Hr=new U,Nl=new U,dx=new U,fx=new U;class Ze{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ed.subVectors(t,this.start),Do.subVectors(this.end,this.start);const i=Do.dot(Do);if(i===0)return 0;let s=Do.dot(ed)/i;return e&&(s=Zt(s,0,1)),s}closestPointToPoint(t,e,i){const r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=dx,i=fx){const r=10000000000000001e-32;let s,o;const a=this.start,u=t.start,h=this.end,d=t.end;Gr.subVectors(h,a),Hr.subVectors(d,u),Nl.subVectors(a,u);const p=Gr.dot(Gr),g=Hr.dot(Hr),m=Hr.dot(Nl);if(p<=r&&g<=r)return e.copy(a),i.copy(u),e.sub(i),e.dot(e);if(p<=r)s=0,o=m/g,o=Zt(o,0,1);else{const y=Gr.dot(Nl);if(g<=r)o=0,s=Zt(-y/p,0,1);else{const M=Gr.dot(Hr),_=p*g-M*M;_!==0?s=Zt((M*m-y*g)/_,0,1):s=0,o=(M*s+m)/g,o<0?(o=0,s=Zt(-y/p,0,1)):o>1&&(o=1,s=Zt((M-y)/p,0,1))}}return e.copy(a).addScaledVector(Gr,s),i.copy(u).addScaledVector(Hr,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class px extends gs{constructor(t=10,e=10,i=4473924,r=8947848){i=new te(i),r=new te(r);const s=e/2,o=t/e,a=t/2,u=[],h=[];for(let g=0,m=0,y=-a;g<=e;g++,y+=o){u.push(-a,0,y,a,0,y),u.push(y,0,-a,y,0,a);const M=g===s?i:r;M.toArray(h,m),m+=3,M.toArray(h,m),m+=3,M.toArray(h,m),m+=3,M.toArray(h,m),m+=3}const d=new Qe;d.setAttribute("position",new Ye(u,3)),d.setAttribute("color",new Ye(h,3));const p=new wr({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class gx extends gs{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Qe;r.setAttribute("position",new Ye(e,3)),r.setAttribute("color",new Ye(i,3));const s=new wr({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new te,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class mx extends nr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function nd(n,t,e,i){const r=_x(i);switch(e){case vp:return n*t;case Sp:return n*t/r.components*r.byteLength;case Pu:return n*t/r.components*r.byteLength;case br:return n*t*2/r.components*r.byteLength;case Du:return n*t*2/r.components*r.byteLength;case yp:return n*t*3/r.components*r.byteLength;case Xn:return n*t*4/r.components*r.byteLength;case Iu:return n*t*4/r.components*r.byteLength;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rc:case Dc:return Math.max(n,16)*Math.max(t,8)/4;case Cc:case Pc:return Math.max(n,8)*Math.max(t,8)/2;case Ic:case Lc:case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Ta:case Oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jc:case Qc:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case eu:case nu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Aa:case iu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _x(n){switch(n){case wn:case gp:return{byteLength:1,components:1};case Ks:case mp:case li:return{byteLength:2,components:1};case Cu:case Ru:return{byteLength:2,components:4};case ai:case Au:case ei:return{byteLength:4,components:1};case _p:case xp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Np(){let n=null,t=!1,e=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function xx(n){const t=new WeakMap;function e(a,u){const h=a.array,d=a.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),a.onUploadCallback();let m;if(h instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=n.SHORT;else if(h instanceof Uint32Array)m=n.UNSIGNED_INT;else if(h instanceof Int32Array)m=n.INT;else if(h instanceof Int8Array)m=n.BYTE;else if(h instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,u,h){const d=u.array,p=u.updateRanges;if(n.bindBuffer(h,a),p.length===0)n.bufferSubData(h,0,d);else{p.sort((m,y)=>m.start-y.start);let g=0;for(let m=1;m<p.length;m++){const y=p[g],M=p[m];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++g,p[g]=M)}p.length=g+1;for(let m=0,y=p.length;m<y;m++){const M=p[m];n.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,u));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,u),h.version=a.version}}return{get:r,remove:s,update:o}}var vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Px=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_v=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ny=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ry=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ly=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,py=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,By=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ky=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:vx,alphahash_pars_fragment:yx,alphamap_fragment:Sx,alphamap_pars_fragment:Mx,alphatest_fragment:bx,alphatest_pars_fragment:Ex,aomap_fragment:wx,aomap_pars_fragment:Tx,batching_pars_vertex:Ax,batching_vertex:Cx,begin_vertex:Rx,beginnormal_vertex:Px,bsdfs:Dx,iridescence_fragment:Ix,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Nx,clipping_planes_pars_fragment:Ux,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ox,color_fragment:Bx,color_pars_fragment:zx,color_pars_vertex:kx,color_vertex:Gx,common:Hx,cube_uv_reflection_fragment:Vx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Wx,displacementmap_vertex:Xx,emissivemap_fragment:qx,emissivemap_pars_fragment:Yx,colorspace_fragment:Zx,colorspace_pars_fragment:Kx,envmap_fragment:Jx,envmap_common_pars_fragment:jx,envmap_pars_fragment:Qx,envmap_pars_vertex:tv,envmap_physical_pars_fragment:hv,envmap_vertex:ev,fog_vertex:nv,fog_pars_vertex:iv,fog_fragment:rv,fog_pars_fragment:sv,gradientmap_pars_fragment:ov,lightmap_pars_fragment:av,lights_lambert_fragment:lv,lights_lambert_pars_fragment:cv,lights_pars_begin:uv,lights_toon_fragment:dv,lights_toon_pars_fragment:fv,lights_phong_fragment:pv,lights_phong_pars_fragment:gv,lights_physical_fragment:mv,lights_physical_pars_fragment:_v,lights_fragment_begin:xv,lights_fragment_maps:vv,lights_fragment_end:yv,lightprobes_pars_fragment:Sv,logdepthbuf_fragment:Mv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:wv,map_fragment:Tv,map_pars_fragment:Av,map_particle_fragment:Cv,map_particle_pars_fragment:Rv,metalnessmap_fragment:Pv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Iv,morphcolor_vertex:Lv,morphnormal_vertex:Nv,morphtarget_pars_vertex:Uv,morphtarget_vertex:Fv,normal_fragment_begin:Ov,normal_fragment_maps:Bv,normal_pars_fragment:zv,normal_pars_vertex:kv,normal_vertex:Gv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:Vv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Wv,iridescence_pars_fragment:Xv,opaque_fragment:qv,packing:Yv,premultiplied_alpha_fragment:Zv,project_vertex:Kv,dithering_fragment:Jv,dithering_pars_fragment:jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:ty,shadowmap_pars_fragment:ey,shadowmap_pars_vertex:ny,shadowmap_vertex:iy,shadowmask_pars_fragment:ry,skinbase_vertex:sy,skinning_pars_vertex:oy,skinning_vertex:ay,skinnormal_vertex:ly,specularmap_fragment:cy,specularmap_pars_fragment:uy,tonemapping_fragment:hy,tonemapping_pars_fragment:dy,transmission_fragment:fy,transmission_pars_fragment:py,uv_pars_fragment:gy,uv_pars_vertex:my,uv_vertex:_y,worldpos_vertex:xy,background_vert:vy,background_frag:yy,backgroundCube_vert:Sy,backgroundCube_frag:My,cube_vert:by,cube_frag:Ey,depth_vert:wy,depth_frag:Ty,distance_vert:Ay,distance_frag:Cy,equirect_vert:Ry,equirect_frag:Py,linedashed_vert:Dy,linedashed_frag:Iy,meshbasic_vert:Ly,meshbasic_frag:Ny,meshlambert_vert:Uy,meshlambert_frag:Fy,meshmatcap_vert:Oy,meshmatcap_frag:By,meshnormal_vert:zy,meshnormal_frag:ky,meshphong_vert:Gy,meshphong_frag:Hy,meshphysical_vert:Vy,meshphysical_frag:$y,meshtoon_vert:Wy,meshtoon_frag:Xy,points_vert:qy,points_frag:Yy,shadow_vert:Zy,shadow_frag:Ky,sprite_vert:Jy,sprite_frag:jy},St={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Qn={basic:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:un([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:un([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:un([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:un([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:un([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:un([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:un([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:un([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:un([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:un([St.lights,St.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Qn.physical={uniforms:un([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Io={r:0,b:0,g:0},Qy=new re,Up=new Yt;Up.set(-1,0,0,0,1,0,0,0,1);function tS(n,t,e,i,r,s){const o=new te(0);let a=r===!0?0:1,u,h,d=null,p=0,g=null;function m(E){let f=E.isScene===!0?E.background:null;if(f&&f.isTexture){const c=E.backgroundBlurriness>0;f=t.get(f,c)}return f}function y(E){let f=!1;const c=m(E);c===null?_(o,a):c&&c.isColor&&(_(c,1),f=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||f)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(E,f){const c=m(f);c&&(c.isCubeTexture||c.mapping===Ha)?(h===void 0&&(h=new Je(new rn(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ms(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(v,l,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=c,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(f.backgroundRotation)).transpose(),c.isCubeTexture&&c.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Up),h.material.toneMapped=se.getTransfer(c.colorSpace)!==de,(d!==c||p!==c.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,d=c,p=c.version,g=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):c&&c.isTexture&&(u===void 0&&(u=new Je(new Wa(2,2),new ci({name:"BackgroundMaterial",uniforms:ms(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=c,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=se.getTransfer(c.colorSpace)!==de,c.matrixAutoUpdate===!0&&c.updateMatrix(),u.material.uniforms.uvTransform.value.copy(c.matrix),(d!==c||p!==c.version||g!==n.toneMapping)&&(u.material.needsUpdate=!0,d=c,p=c.version,g=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function _(E,f){E.getRGB(Io,Dp(n)),e.buffers.color.setClear(Io.r,Io.g,Io.b,f,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,f=1){o.set(E),a=f,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,_(o,a)},render:y,addToRenderList:M,dispose:x}}function eS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=g(null);let s=r,o=!1;function a(T,A,C,D,L){let F=!1;const O=p(T,D,C,A);s!==O&&(s=O,h(s.object)),F=m(T,D,C,L),F&&y(T,D,C,L),L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,c(T,A,C,D),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function u(){return n.createVertexArray()}function h(T){return n.bindVertexArray(T)}function d(T){return n.deleteVertexArray(T)}function p(T,A,C,D){const L=D.wireframe===!0;let F=i[A.id];F===void 0&&(F={},i[A.id]=F);const O=T.isInstancedMesh===!0?T.id:0;let k=F[O];k===void 0&&(k={},F[O]=k);let B=k[C.id];B===void 0&&(B={},k[C.id]=B);let $=B[L];return $===void 0&&($=g(u()),B[L]=$),$}function g(T){const A=[],C=[],D=[];for(let L=0;L<e;L++)A[L]=0,C[L]=0,D[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:D,object:T,attributes:{},index:null}}function m(T,A,C,D){const L=s.attributes,F=A.attributes;let O=0;const k=C.getAttributes();for(const B in k)if(k[B].location>=0){const W=L[B];let st=F[B];if(st===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(st=T.instanceColor)),W===void 0||W.attribute!==st||st&&W.data!==st.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function y(T,A,C,D){const L={},F=A.attributes;let O=0;const k=C.getAttributes();for(const B in k)if(k[B].location>=0){let W=F[B];W===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(W=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(W=T.instanceColor));const st={};st.attribute=W,W&&W.data&&(st.data=W.data),L[B]=st,O++}s.attributes=L,s.attributesNum=O,s.index=D}function M(){const T=s.newAttributes;for(let A=0,C=T.length;A<C;A++)T[A]=0}function _(T){x(T,0)}function x(T,A){const C=s.newAttributes,D=s.enabledAttributes,L=s.attributeDivisors;C[T]=1,D[T]===0&&(n.enableVertexAttribArray(T),D[T]=1),L[T]!==A&&(n.vertexAttribDivisor(T,A),L[T]=A)}function E(){const T=s.newAttributes,A=s.enabledAttributes;for(let C=0,D=A.length;C<D;C++)A[C]!==T[C]&&(n.disableVertexAttribArray(C),A[C]=0)}function f(T,A,C,D,L,F,O){O===!0?n.vertexAttribIPointer(T,A,C,L,F):n.vertexAttribPointer(T,A,C,D,L,F)}function c(T,A,C,D){M();const L=D.attributes,F=C.getAttributes(),O=A.defaultAttributeValues;for(const k in F){const B=F[k];if(B.location>=0){let $=L[k];if($===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),$!==void 0){const W=$.normalized,st=$.itemSize,ct=t.get($);if(ct===void 0)continue;const gt=ct.buffer,ut=ct.type,ot=ct.bytesPerElement,q=ut===n.INT||ut===n.UNSIGNED_INT||$.gpuType===Au;if($.isInterleavedBufferAttribute){const K=$.data,at=K.stride,ft=$.offset;if(K.isInstancedInterleavedBuffer){for(let ht=0;ht<B.locationSize;ht++)x(B.location+ht,K.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<B.locationSize;ht++)_(B.location+ht);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let ht=0;ht<B.locationSize;ht++)f(B.location+ht,st/B.locationSize,ut,W,at*ot,(ft+st/B.locationSize*ht)*ot,q)}else{if($.isInstancedBufferAttribute){for(let K=0;K<B.locationSize;K++)x(B.location+K,$.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let K=0;K<B.locationSize;K++)_(B.location+K);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let K=0;K<B.locationSize;K++)f(B.location+K,st/B.locationSize,ut,W,st*ot,st/B.locationSize*K*ot,q)}}else if(O!==void 0){const W=O[k];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(B.location,W);break;case 3:n.vertexAttrib3fv(B.location,W);break;case 4:n.vertexAttrib4fv(B.location,W);break;default:n.vertexAttrib1fv(B.location,W)}}}}E()}function v(){b();for(const T in i){const A=i[T];for(const C in A){const D=A[C];for(const L in D){const F=D[L];for(const O in F)d(F[O].object),delete F[O];delete D[L]}}delete i[T]}}function l(T){if(i[T.id]===void 0)return;const A=i[T.id];for(const C in A){const D=A[C];for(const L in D){const F=D[L];for(const O in F)d(F[O].object),delete F[O];delete D[L]}}delete i[T.id]}function R(T){for(const A in i){const C=i[A];for(const D in C){const L=C[D];if(L[T.id]===void 0)continue;const F=L[T.id];for(const O in F)d(F[O].object),delete F[O];delete L[T.id]}}}function S(T){for(const A in i){const C=i[A],D=T.isInstancedMesh===!0?T.id:0,L=C[D];if(L!==void 0){for(const F in L){const O=L[F];for(const k in O)d(O[k].object),delete O[k];delete L[F]}delete C[D],Object.keys(C).length===0&&delete i[A]}}}function b(){w(),o=!0,s!==r&&(s=r,h(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:v,releaseStatesOfGeometry:l,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:_,disableUnusedAttributes:E}}function nS(n,t,e){let i;function r(u){i=u}function s(u,h){n.drawArrays(i,u,h),e.update(h,i,1)}function o(u,h,d){d!==0&&(n.drawArraysInstanced(i,u,h,d),e.update(h,i,d))}function a(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let g=0;for(let m=0;m<d;m++)g+=h[m];e.update(g,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function iS(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Xn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==wn&&R!==ei&&!S&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=u(h);d!==h&&(Wt("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),c=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),l=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:E,maxVaryings:f,maxFragmentUniforms:c,maxSamples:v,samples:l}}function rS(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new En,a=new Yt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,g){const m=p.length!==0||g||i!==0||r;return r=g,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,g){e=d(p,g,0)},this.setState=function(p,g,m){const y=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,x=n.get(p);if(!r||y===null||y.length===0||s&&!_)s?d(null):h();else{const E=s?0:i,f=E*4;let c=x.clippingState||null;u.value=c,c=d(y,g,f,m);for(let v=0;v!==f;++v)c[v]=e[v];x.clippingState=c,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,g,m,y){const M=p!==null?p.length:0;let _=null;if(M!==0){if(_=u.value,y!==!0||_===null){const x=m+M*4,E=g.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<x)&&(_=new Float32Array(x));for(let f=0,c=m;f!==M;++f,c+=4)o.copy(p[f]).applyMatrix4(E,a),o.normal.toArray(_,c),_[c+3]=o.constant}u.value=_,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}const os=4,sS=6,oS=20,aS=256,As=new Bu,id=new te;let Ul=null,Fl=0,Ol=0,Bl=!1;const lS=new U,lr=new U;class rd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=lS}=s;Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,r,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ul,Fl,Ol),this._renderer.xr.enabled=Bl,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mr||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:li,format:Xn,colorSpace:Ca,depthBuffer:!1},r=sd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cS(s)),this._blurMaterial=hS(s,t,e),this._ggxMaterial=uS(s,t,e)}return r}_compileMaterial(t){const e=new Je(new Qe,t);this._renderer.compile(e,As)}_sceneToCubeUV(t,e,i,r,s){const u=new Un(90,1,e,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,m=p.toneMapping;p.getClearColor(id),p.toneMapping=ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new rn,new Cp({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let x=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,x=!0):(_.color.copy(id),x=!0);for(let f=0;f<6;f++){const c=f%3;c===0?(u.up.set(0,h[f],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+d[f],s.y,s.z)):c===1?(u.up.set(0,0,h[f]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+d[f],s.z)):(u.up.set(0,h[f],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+d[f]));const v=this._cubeSize;Vr(r,c*v,f>2?v:0,v,v),p.setRenderTarget(r),x&&p.render(M,u),p.render(t,u)}p.toneMapping=m,p.autoClear=g,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Mr||t.mapping===ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const u=this._cubeSize;Vr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(o,As)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const u=o.uniforms,h=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(h*h-d*d),g=h*1.25,m=p*g,{_lodMax:y}=this,M=this._sizeLods[i],_=3*M*(i>y-os?i-y+os:0),x=4*(this._cubeSize-M);u.envMap.value=t.texture,u.roughness.value=m,u.mipInt.value=y-e,Vr(s,_,x,3*M,2*M),r.setRenderTarget(s),r.render(a,As),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=y-i,Vr(t,_,x,3*M,2*M),r.setRenderTarget(t),r.render(a,As)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,r,s){const o=this._renderer,a=this._blurMaterial,u=this._lodMeshes[r];u.material=a;const h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=s,h.mipInt.value=this._lodMax-i;const d=this._sizeLods[r],p=3*d*(r>this._lodMax-os?r-this._lodMax+os:0),g=4*(this._cubeSize-d);Vr(e,p,g,3*d,2*d),o.setRenderTarget(e),o.render(u,As)}}function cS(n){const t=[],e=[];let i=n;const r=n-os+1+sS;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),u=-a,h=1+a,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,y=new Float32Array(m*g*p),M=new Float32Array(m*g*p);for(let x=0;x<p;x++){const E=x%3*2/3-1,f=x>2?0:-1,c=[E,f,0,E+2/3,f,0,E+2/3,f+1,0,E,f,0,E+2/3,f+1,0,E,f+1,0];y.set(c,m*g*x);for(let v=0;v<g;v++){const l=d[v*2]*2-1,R=d[v*2+1]*2-1;x===0?lr.set(1,R,l):x===1?lr.set(-l,1,-R):x===2?lr.set(-l,R,1):x===3?lr.set(-1,R,-l):x===4?lr.set(-l,-1,R):lr.set(l,R,-1),lr.toArray(M,(x*g+v)*m)}}const _=new Qe;_.setAttribute("position",new An(y,m)),_.setAttribute("outputDirection",new An(M,m)),e.push(new Je(_,null)),i>os&&i--}return{lodMeshes:e,sizeLods:t}}function sd(n,t,e){const i=new qn(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function uS(n,t,e){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hS(n,t,e){return new ci({name:"SphericalGaussianBlur",defines:{SAMPLES:oS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function od(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ad(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Xa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fp extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Rp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new rn(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ti});s.uniforms.tEquirect.value=e;const o=new Je(r,s),a=e.minFilter;return e.minFilter===mr&&(e.minFilter=sn),new ux(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}function dS(n){let t=new WeakMap,e=new WeakMap,i=null;function r(g,m=!1){return g==null?null:m?o(g):s(g)}function s(g){if(g&&g.isTexture){const m=g.mapping;if(m===al||m===ll)if(t.has(g)){const y=t.get(g).texture;return a(y,g.mapping)}else{const y=g.image;if(y&&y.height>0){const M=new Fp(y.height);return M.fromEquirectangularTexture(n,g),t.set(g,M),g.addEventListener("dispose",h),a(M.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){const m=g.mapping,y=m===al||m===ll,M=m===Mr||m===ps;if(y||M){let _=e.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return i===null&&(i=new rd(n)),_=y?i.fromEquirectangular(g,_):i.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,e.set(g,_),_.texture;if(_!==void 0)return _.texture;{const E=g.image;return y&&E&&E.height>0||M&&E&&u(E)?(i===null&&(i=new rd(n)),_=y?i.fromEquirectangular(g):i.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,e.set(g,_),g.addEventListener("dispose",d),_.texture):null}}}return g}function a(g,m){return m===al?g.mapping=Mr:m===ll&&(g.mapping=ps),g}function u(g){let m=0;const y=6;for(let M=0;M<y;M++)g[M]!==void 0&&m++;return m===y}function h(g){const m=g.target;m.removeEventListener("dispose",h);const y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function d(g){const m=g.target;m.removeEventListener("dispose",d);const y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function fS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&hs("WebGLRenderer: "+i+" extension not supported."),r}}}function pS(n,t,e,i){const r={},s=new WeakMap;function o(p){const g=p.target;g.index!==null&&t.remove(g.index);for(const y in g.attributes)t.remove(g.attributes[y]);g.removeEventListener("dispose",o),delete r[g.id];const m=s.get(g);m&&(t.remove(m),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(p,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,e.memory.geometries++),g}function u(p){const g=p.attributes;for(const m in g)t.update(g[m],n.ARRAY_BUFFER)}function h(p){const g=[],m=p.index,y=p.attributes.position;let M=0;if(y===void 0)return;if(m!==null){const E=m.array;M=m.version;for(let f=0,c=E.length;f<c;f+=3){const v=E[f+0],l=E[f+1],R=E[f+2];g.push(v,l,l,R,R,v)}}else{const E=y.array;M=y.version;for(let f=0,c=E.length/3-1;f<c;f+=3){const v=f+0,l=f+1,R=f+2;g.push(v,l,l,R,R,v)}}const _=new(y.count>=65535?Ap:Tp)(g,1);_.version=M;const x=s.get(p);x&&t.remove(x),s.set(p,_)}function d(p){const g=s.get(p);if(g){const m=p.index;m!==null&&g.version<m.version&&h(p)}else h(p);return s.get(p)}return{get:a,update:u,getWireframeAttribute:d}}function gS(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function u(p,g){n.drawElements(i,g,s,p*o),e.update(g,i,1)}function h(p,g,m){m!==0&&(n.drawElementsInstanced(i,g,s,p*o,m),e.update(g,i,m))}function d(p,g,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,m);let M=0;for(let _=0;_<m;_++)M+=g[_];e.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function mS(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function _S(n,t,e){const i=new WeakMap,r=new ge;function s(o,a,u){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let g=i.get(a);if(g===void 0||g.count!==p){let w=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var m=w;g!==void 0&&g.texture.dispose();const y=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],f=a.morphAttributes.color||[];let c=0;y===!0&&(c=1),M===!0&&(c=2),_===!0&&(c=3);let v=a.attributes.position.count*c,l=1;v>t.maxTextureSize&&(l=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const R=new Float32Array(v*l*4*p),S=new bp(R,v,l,p);S.type=ei,S.needsUpdate=!0;const b=c*4;for(let T=0;T<p;T++){const A=x[T],C=E[T],D=f[T],L=v*l*4*T;for(let F=0;F<A.count;F++){const O=F*b;y===!0&&(r.fromBufferAttribute(A,F),R[L+O+0]=r.x,R[L+O+1]=r.y,R[L+O+2]=r.z,R[L+O+3]=0),M===!0&&(r.fromBufferAttribute(C,F),R[L+O+4]=r.x,R[L+O+5]=r.y,R[L+O+6]=r.z,R[L+O+7]=0),_===!0&&(r.fromBufferAttribute(D,F),R[L+O+8]=r.x,R[L+O+9]=r.y,R[L+O+10]=r.z,R[L+O+11]=D.itemSize===4?r.w:1)}}g={count:p,texture:S,size:new kt(v,l)},i.set(a,g),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let y=0;for(let _=0;_<h.length;_++)y+=h[_];const M=a.morphTargetsRelative?1:1-y;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",h)}u.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:s}}function xS(n,t,e,i,r){let s=new WeakMap;function o(h){const d=r.render.frame,p=h.geometry,g=t.get(h,p);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==d&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return g}function a(){s=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const vS={[ap]:"LINEAR_TONE_MAPPING",[lp]:"REINHARD_TONE_MAPPING",[cp]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[dp]:"AGX_TONE_MAPPING",[fp]:"NEUTRAL_TONE_MAPPING",[hp]:"CUSTOM_TONE_MAPPING"};function yS(n,t,e,i,r,s){const o=new qn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,u=null;const h=new Qe;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const d=new nx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Je(h,d),g=new Bu(-1,1,1,-1,0,1);let m=null,y=null,M=!1,_,x=null,E=[],f=!1;this.setSize=function(c,v){o.setSize(c,v),a!==null&&a.setSize(c,v),u!==null&&u.setSize(c,v);for(let l=0;l<E.length;l++){const R=E[l];R.setSize&&R.setSize(c,v)}},this.setEffects=function(c){E=c,f=E.length>0&&E[0].isRenderPass===!0;const v=o.width,l=o.height;E.length>0&&a===null&&(a=new qn(v,l,{type:li,depthBuffer:!1,stencilBuffer:!1}),u=new qn(v,l,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){const S=E[R];S.setSize&&S.setSize(v,l)}},this.begin=function(c,v){if(M||c.toneMapping===ri&&E.length===0)return!1;if(x=v,v!==null){const l=v.width,R=v.height;(o.width!==l||o.height!==R)&&this.setSize(l,R)}return f===!1&&c.setRenderTarget(o),_=c.toneMapping,c.toneMapping=ri,!0},this.hasRenderPass=function(){return f},this.end=function(c,v){c.toneMapping=_,M=!0;let l=o,R=a;for(let S=0;S<E.length;S++){const b=E[S];b.enabled!==!1&&(b.render(c,R,l,v),b.needsSwap!==!1&&(l=R,R=R===a?u:a))}if(m!==c.outputColorSpace||y!==c.toneMapping){m=c.outputColorSpace,y=c.toneMapping,d.defines={},se.getTransfer(m)===de&&(d.defines.SRGB_TRANSFER="");const S=vS[y];S&&(d.defines[S]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=l.texture,c.setRenderTarget(x),c.render(p,g),x=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),h.dispose(),d.dispose()}}const Op=new dn,ou=new Qs(1,1),Bp=new bp,zp=new I0,kp=new Rp,ld=[],cd=[],ud=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function ys(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ld[r];if(s===void 0&&(s=new Float32Array(r),ld[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function $e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=cd[t];e===void 0&&(e=new Int32Array(t),cd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function SS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function MS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),$e(e,t)}}function bS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),$e(e,t)}}function ES(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),$e(e,t)}}function wS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ve(e,i))return;dd.set(i),n.uniformMatrix2fv(this.addr,!1,dd),$e(e,i)}}function TS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ve(e,i))return;hd.set(i),n.uniformMatrix3fv(this.addr,!1,hd),$e(e,i)}}function AS(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ve(e,i))return;ud.set(i),n.uniformMatrix4fv(this.addr,!1,ud),$e(e,i)}}function CS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function RS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),$e(e,t)}}function PS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),$e(e,t)}}function DS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),$e(e,t)}}function IS(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function LS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),$e(e,t)}}function NS(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),$e(e,t)}}function US(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),$e(e,t)}}function FS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ou.compareFunction=e.isReversedDepthBuffer()?Nu:Lu,s=ou):s=Op,e.setTexture2D(t||s,r)}function OS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||zp,r)}function BS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||kp,r)}function zS(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Bp,r)}function kS(n){switch(n){case 5126:return SS;case 35664:return MS;case 35665:return bS;case 35666:return ES;case 35674:return wS;case 35675:return TS;case 35676:return AS;case 5124:case 35670:return CS;case 35667:case 35671:return RS;case 35668:case 35672:return PS;case 35669:case 35673:return DS;case 5125:return IS;case 36294:return LS;case 36295:return NS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}function GS(n,t){n.uniform1fv(this.addr,t)}function HS(n,t){const e=ys(t,this.size,2);n.uniform2fv(this.addr,e)}function VS(n,t){const e=ys(t,this.size,3);n.uniform3fv(this.addr,e)}function $S(n,t){const e=ys(t,this.size,4);n.uniform4fv(this.addr,e)}function WS(n,t){const e=ys(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function XS(n,t){const e=ys(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function qS(n,t){const e=ys(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function YS(n,t){n.uniform1iv(this.addr,t)}function ZS(n,t){n.uniform2iv(this.addr,t)}function KS(n,t){n.uniform3iv(this.addr,t)}function JS(n,t){n.uniform4iv(this.addr,t)}function jS(n,t){n.uniform1uiv(this.addr,t)}function QS(n,t){n.uniform2uiv(this.addr,t)}function tM(n,t){n.uniform3uiv(this.addr,t)}function eM(n,t){n.uniform4uiv(this.addr,t)}function nM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ou:o=Op;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function iM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||zp,s[o])}function rM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||kp,s[o])}function sM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Bp,s[o])}function oM(n){switch(n){case 5126:return GS;case 35664:return HS;case 35665:return VS;case 35666:return $S;case 35674:return WS;case 35675:return XS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return ZS;case 35668:case 35672:return KS;case 35669:case 35673:return JS;case 5125:return jS;case 36294:return QS;case 36295:return tM;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}class aM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kS(e.type)}}class lM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oM(e.type)}}class cM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function fd(n,t){n.seq.push(t),n.map[t.id]=t}function uM(n,t,e){const i=n.name,r=i.length;for(zl.lastIndex=0;;){const s=zl.exec(i),o=zl.lastIndex;let a=s[1];const u=s[2]==="]",h=s[3];if(u&&(a=a|0),h===void 0||h==="["&&o+2===r){fd(e,h===void 0?new aM(a,n,t):new lM(a,n,t));break}else{let p=e.map[a];p===void 0&&(p=new cM(a),fd(e,p)),e=p}}}class ha{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),u=t.getUniformLocation(e,a.name);uM(a,u,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function pd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hM=37297;let dM=0;function fM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gd=new Yt;function pM(n){se._getMatrix(gd,se.workingColorSpace,n);const t=`mat3( ${gd.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case Ra:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function md(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+fM(n.getShaderSource(t),a)}else return s}function gM(n,t){const e=pM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const mM={[ap]:"Linear",[lp]:"Reinhard",[cp]:"Cineon",[up]:"ACESFilmic",[dp]:"AgX",[fp]:"Neutral",[hp]:"Custom"};function _M(n,t){const e=mM[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lo=new U;function xM(){se.getLuminanceCoefficients(Lo);const n=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function yM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function SM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Gs(n){return n!==""}function _d(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(MM,EM)}const bM=new Map;function EM(n,t){let e=Qt[t];if(e===void 0){const i=bM.get(t);if(i!==void 0)e=Qt[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return au(e)}const wM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(n){return n.replace(wM,TM)}function TM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const AM={[sa]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function CM(n){return AM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RM={[Mr]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function PM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":RM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const DM={[ps]:"ENVMAP_MODE_REFRACTION"};function IM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":DM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LM={[op]:"ENVMAP_BLENDING_MULTIPLY",[l0]:"ENVMAP_BLENDING_MIX",[c0]:"ENVMAP_BLENDING_ADD"};function NM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":LM[n.combine]||"ENVMAP_BLENDING_NONE"}function UM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function FM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const u=CM(e),h=PM(e),d=IM(e),p=NM(e),g=UM(e),m=vM(e),y=yM(s),M=r.createProgram();let _,x,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Gs).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Gs).join(`
`),x.length>0&&(x+=`
`)):(_=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),x=[yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ri?_M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,gM("linearToOutputTexel",e.outputColorSpace),xM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),o=au(o),o=_d(o,e),o=xd(o,e),a=au(a),a=_d(a,e),a=xd(a,e),o=vd(o),a=vd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",e.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const f=E+_+o,c=E+x+a,v=pd(r,r.VERTEX_SHADER,f),l=pd(r,r.FRAGMENT_SHADER,c);r.attachShader(M,v),r.attachShader(M,l),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(T){if(n.debug.checkShaderErrors){const A=r.getProgramInfoLog(M)||"",C=r.getShaderInfoLog(v)||"",D=r.getShaderInfoLog(l)||"",L=A.trim(),F=C.trim(),O=D.trim();let k=!0,B=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,v,l);else{const $=md(r,v,"vertex"),W=md(r,l,"fragment");ce("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+$+`
`+W)}else L!==""?Wt("WebGLProgram: Program Info Log:",L):(F===""||O==="")&&(B=!1);B&&(T.diagnostics={runnable:k,programLog:L,vertexShader:{log:F,prefix:_},fragmentShader:{log:O,prefix:x}})}r.deleteShader(v),r.deleteShader(l),S=new ha(r,M),b=SM(r,M)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(M,hM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=v,this.fragmentShader=l,this}let OM=0;class BM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zM(t),e.set(t,i)),i}}class zM{constructor(t){this.id=OM++,this.code=t,this.usedTimes=0}}function kM(n){return n===br||n===Ta||n===Aa}function GM(n,t,e,i,r,s){const o=new Ep,a=new BM,u=new Set,h=[],d=new Map,p=i.logarithmicDepthBuffer;let g=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return u.add(S),S===0?"uv":`uv${S}`}function M(S,b,w,T,A,C){const D=T.fog,L=A.geometry,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?T.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,k=t.get(S.envMap||F,O),B=k&&k.mapping===Ha?k.image.height:null,$=m[S.type];S.precision!==null&&(g=i.getMaxPrecision(S.precision),g!==S.precision&&Wt("WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const W=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,st=W!==void 0?W.length:0;let ct=0;L.morphAttributes.position!==void 0&&(ct=1),L.morphAttributes.normal!==void 0&&(ct=2),L.morphAttributes.color!==void 0&&(ct=3);let gt,ut,ot,q;if($){const _e=Qn[$];gt=_e.vertexShader,ut=_e.fragmentShader}else{gt=S.vertexShader,ut=S.fragmentShader;const _e=a.getVertexShaderStage(S),ue=a.getFragmentShaderStage(S);a.update(S,_e,ue),ot=_e.id,q=ue.id}const K=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),ft=A.isInstancedMesh===!0,ht=A.isBatchedMesh===!0,zt=!!S.map,Vt=!!S.matcap,wt=!!k,Rt=!!S.aoMap,Ut=!!S.lightMap,Tt=!!S.bumpMap&&S.wireframe===!1,le=!!S.normalMap,Xt=!!S.displacementMap,Kt=!!S.emissiveMap,$t=!!S.metalnessMap,qt=!!S.roughnessMap,z=S.anisotropy>0,Ee=S.clearcoat>0,Gt=S.dispersion>0,N=S.retroreflectivity>0,P=S.iridescence>0,H=S.sheen>0,X=S.transmission>0,j=z&&!!S.anisotropyMap,dt=Ee&&!!S.clearcoatMap,pt=Ee&&!!S.clearcoatNormalMap,Q=Ee&&!!S.clearcoatRoughnessMap,it=P&&!!S.iridescenceMap,mt=P&&!!S.iridescenceThicknessMap,Ft=H&&!!S.sheenColorMap,yt=H&&!!S.sheenRoughnessMap,_t=!!S.specularMap,Ot=!!S.specularColorMap,Ht=!!S.specularIntensityMap,Jt=X&&!!S.transmissionMap,V=X&&!!S.thicknessMap,xt=!!S.gradientMap,nt=!!S.alphaMap,vt=S.alphaTest>0,Et=!!S.alphaHash,lt=!!S.extensions;let Bt=ri;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const Lt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:gt,fragmentShader:ut,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ht,batchingColor:ht&&A._colorsTexture!==null,instancing:ft,instancingColor:ft&&A.instanceColor!==null,instancingMorph:ft&&A.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:Vt,envMap:wt,envMapMode:wt&&k.mapping,envMapCubeUVHeight:B,aoMap:Rt,lightMap:Ut,bumpMap:Tt,normalMap:le,displacementMap:Xt,emissiveMap:Kt,normalMapObjectSpace:le&&S.normalMapType===d0,normalMapTangentSpace:le&&S.normalMapType===ru,packedNormalMap:le&&S.normalMapType===ru&&kM(S.normalMap.format),metalnessMap:$t,roughnessMap:qt,anisotropy:z,anisotropyMap:j,clearcoat:Ee,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Q,dispersion:Gt,retroreflection:N,iridescence:P,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:H,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:_t,specularColorMap:Ot,specularIntensityMap:Ht,transmission:X,transmissionMap:Jt,thicknessMap:V,gradientMap:xt,opaque:S.transparent===!1&&S.blending===Hs&&S.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:Et,combine:S.combine,mapUv:zt&&y(S.map.channel),aoMapUv:Rt&&y(S.aoMap.channel),lightMapUv:Ut&&y(S.lightMap.channel),bumpMapUv:Tt&&y(S.bumpMap.channel),normalMapUv:le&&y(S.normalMap.channel),displacementMapUv:Xt&&y(S.displacementMap.channel),emissiveMapUv:Kt&&y(S.emissiveMap.channel),metalnessMapUv:$t&&y(S.metalnessMap.channel),roughnessMapUv:qt&&y(S.roughnessMap.channel),anisotropyMapUv:j&&y(S.anisotropyMap.channel),clearcoatMapUv:dt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&y(S.sheenRoughnessMap.channel),specularMapUv:_t&&y(S.specularMap.channel),specularColorMapUv:Ot&&y(S.specularColorMap.channel),specularIntensityMapUv:Ht&&y(S.specularIntensityMap.channel),transmissionMapUv:Jt&&y(S.transmissionMap.channel),thicknessMapUv:V&&y(S.thicknessMap.channel),alphaMapUv:nt&&y(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(le||z),vertexNormals:!!L.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!L.attributes.uv&&(zt||nt),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&le===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:at,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ct,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:Kt&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:lt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&S.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=u.has(1),Lt.vertexUv2s=u.has(2),Lt.vertexUv3s=u.has(3),u.clear(),Lt}function _(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)b.push(w),b.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(x(b,S),E(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function x(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numSunLights),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numSunLightShadows),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function f(S){const b=m[S.type];let w;if(b){const T=Qn[b];w=Q0.clone(T.uniforms)}else w=S.uniforms;return w}function c(S,b){let w=d.get(b);return w!==void 0?++w.usedTimes:(w=new FM(n,b,S,r),h.push(w),d.set(b,w)),w}function v(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),d.delete(S.cacheKey),S.destroy()}}function l(S){a.remove(S)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:f,acquireProgram:c,releaseProgram:v,releaseShaderCache:l,programs:h,dispose:R}}function HM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,u){n.get(o)[a]=u}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function VM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Md(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(g){let m=0;return g.isInstancedMesh&&(m+=2),g.isSkinnedMesh&&(m+=1),m}function a(g,m,y,M,_,x){let E=n[t];return E===void 0?(E={id:g.id,object:g,geometry:m,material:y,materialVariant:o(g),groupOrder:M,renderOrder:g.renderOrder,z:_,group:x},n[t]=E):(E.id=g.id,E.object=g,E.geometry=m,E.material=y,E.materialVariant=o(g),E.groupOrder=M,E.renderOrder=g.renderOrder,E.z=_,E.group=x),t++,E}function u(g,m,y,M,_,x,E){E.reversedDepth===!0&&(_=-_);const f=a(g,m,y,M,_,x);y.transmission>0?i.push(f):y.transparent===!0?r.push(f):e.push(f)}function h(g,m,y,M,_,x){const E=a(g,m,y,M,_,x);y.transmission>0?i.unshift(E):y.transparent===!0?r.unshift(E):e.unshift(E)}function d(g,m){e.length>1&&e.sort(g||VM),i.length>1&&i.sort(m||Sd),r.length>1&&r.sort(m||Sd)}function p(){for(let g=t,m=n.length;g<m;g++){const y=n[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:u,unshift:h,finish:p,sort:d}}function $M(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Md,n.set(i,[o])):r>=s.length?(o=new Md,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function WM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function XM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let qM=0;function YM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ZM(n){const t=new WM,e=XM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new U);const r=new U,s=new re,o=new re;function a(h){let d=0,p=0,g=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,y=0,M=0,_=0,x=0,E=0,f=0,c=0,v=0,l=0,R=0,S=0,b=0,w=0;h.sort(YM);for(let A=0,C=h.length;A<C;A++){const D=h[A],L=D.color,F=D.intensity,O=D.distance;let k=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===br?k=D.shadow.map.texture:k=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=L.r*F,p+=L.g*F,g+=L.b*F;else if(D.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(D.sh.coefficients[B],F);w++}else if(D.isSunLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[y]=W,i.sunShadowMap[y]=k;const st=$.getViewportCount();for(let ct=0;ct<st;ct++)i.sunShadowMatrix[M+ct]=$.getMatrix(ct),i.sunShadowCascade[M+ct]=$._cascadeData[ct];M+=st,y++}i.sun[m]=B,m++}else if(D.isDirectionalLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[_]=W,i.directionalShadowMap[_]=k,i.directionalShadowMatrix[_]=D.shadow.matrix,v++}i.directional[_]=B,_++}else if(D.isSpotLight){const B=t.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(L).multiplyScalar(F),B.distance=O,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,i.spot[E]=B;const $=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,$.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[E]=$.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[E]=W,i.spotShadowMap[E]=k,R++}E++}else if(D.isRectAreaLight){const B=t.get(D);B.color.copy(L).multiplyScalar(F),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=B,f++}else if(D.isPointLight){const B=t.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const $=D.shadow,W=e.get(D);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[x]=W,i.pointShadowMap[x]=k,i.pointShadowMatrix[x]=D.shadow.matrix,l++}i.point[x]=B,x++}else if(D.isHemisphereLight){const B=t.get(D);B.skyColor.copy(D.color).multiplyScalar(F),B.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[c]=B,c++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const T=i.hash;(T.sunLength!==m||T.directionalLength!==_||T.pointLength!==x||T.spotLength!==E||T.rectAreaLength!==f||T.hemiLength!==c||T.numSunShadows!==y||T.numDirectionalShadows!==v||T.numPointShadows!==l||T.numSpotShadows!==R||T.numSpotMaps!==S||T.numLightProbes!==w)&&(i.sun.length=m,i.directional.length=_,i.spot.length=E,i.rectArea.length=f,i.point.length=x,i.hemi.length=c,i.sunShadow.length=y,i.sunShadowMap.length=y,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=l,i.pointShadowMap.length=l,i.pointShadowMatrix.length=l,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+S-b,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,T.sunLength=m,T.directionalLength=_,T.pointLength=x,T.spotLength=E,T.rectAreaLength=f,T.hemiLength=c,T.numSunShadows=y,T.numDirectionalShadows=v,T.numPointShadows=l,T.numSpotShadows=R,T.numSpotMaps=S,T.numLightProbes=w,i.version=qM++)}function u(h,d){let p=0,g=0,m=0,y=0,M=0,_=0;const x=d.matrixWorldInverse;for(let E=0,f=h.length;E<f;E++){const c=h[E];if(c.isSunLight){const v=i.sun[p];v.direction.setFromMatrixPosition(c.matrixWorld),v.direction.transformDirection(x),p++}else if(c.isDirectionalLight){const v=i.directional[g];v.direction.setFromMatrixPosition(c.matrixWorld),r.setFromMatrixPosition(c.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),g++}else if(c.isSpotLight){const v=i.spot[y];v.position.setFromMatrixPosition(c.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(c.matrixWorld),r.setFromMatrixPosition(c.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(x),y++}else if(c.isRectAreaLight){const v=i.rectArea[M];v.position.setFromMatrixPosition(c.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(c.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(c.width*.5,0,0),v.halfHeight.set(0,c.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),M++}else if(c.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(c.matrixWorld),v.position.applyMatrix4(x),m++}else if(c.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(c.matrixWorld),v.direction.transformDirection(x),_++}}}return{setup:a,setupView:u,state:i}}function bd(n){const t=new ZM(n),e=[],i=[],r=[];function s(g){p.camera=g,e.length=0,i.length=0,r.length=0}function o(g){e.push(g)}function a(g){i.push(g)}function u(g){r.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}const p={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:h,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:u}}function KM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new bd(n),t.set(r,[a])):s>=o.length?(a=new bd(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],tb=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ed=new re,Cs=new U,kl=new U;function eb(n,t,e){let i=new Fu;const r=new kt,s=new kt,o=new ge,a=new ix,u=new rx,h={},d=e.maxTextureSize,p={[oi]:hn,[hn]:oi,[Wn]:Wn},g=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:JM,fragmentShader:jM}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const y=new Qe;y.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Je(y,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let x=this.type;this.render=function(l,R,S){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||l.length===0)return;this.type===ip&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sa);const b=n.getRenderTarget(),w=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),A=n.state;A.setBlending(Ti),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const C=x!==this.type;C&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(L=>L.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,L=l.length;D<L;D++){const F=l[D],O=F.shadow;if(O===void 0){Wt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const k=O.getFrameExtents();r.multiply(k),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/k.x),r.x=s.x*k.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/k.y),r.y=s.y*k.y,O.mapSize.y=s.y));const B=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ks){if(F.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new qn(r.x,r.y,{format:br,type:li,minFilter:sn,magFilter:sn,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Qs(r.x,r.y,ei),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=Ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je}else F.isPointLight?(O.map=new Fp(r.x),O.map.depthTexture=new J0(r.x,ai)):(O.map=new qn(r.x,r.y),O.map.depthTexture=new Qs(r.x,r.y,ai)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=Ri,this.type===sa?(O.map.depthTexture.compareFunction=B?Nu:Lu,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);const $=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,S);for(let W=0;W<$;W++){const st=O.getCamera(W);if(F.isPointLight){const ct=O.camera,gt=O.matrix,ut=F.distance||ct.far;ut!==ct.far&&(ct.far=ut,ct.updateProjectionMatrix()),Cs.setFromMatrixPosition(F.matrixWorld),ct.position.copy(Cs),kl.copy(ct.position),kl.add(QM[W]),ct.up.copy(tb[W]),ct.lookAt(kl),ct.updateMatrixWorld(),gt.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Ed.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ed,ct.coordinateSystem,ct.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,W),n.clear();else{W===0&&(n.setRenderTarget(O.map),n.clear());const ct=O.getViewport(W);o.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),A.viewport(o)}i=O.getFrustum(W),c(R,S,st,F,this.type)}O.isPointLightShadow!==!0&&this.type===ks&&E(O,S),O.needsUpdate=!1}x=this.type,_.needsUpdate=!1,n.setRenderTarget(b,w,T)};function E(l,R){const S=t.update(M);g.defines.VSM_SAMPLES!==l.blurSamples&&(g.defines.VSM_SAMPLES=l.blurSamples,m.defines.VSM_SAMPLES=l.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),l.mapPass===null?l.mapPass=new qn(r.x,r.y,{format:br,type:li}):(l.mapPass.width!==l.map.width||l.mapPass.height!==l.map.height)&&l.mapPass.setSize(l.map.width,l.map.height),g.uniforms.shadow_pass.value=l.map.depthTexture,g.uniforms.resolution.value.set(l.map.width,l.map.height),g.uniforms.radius.value=l.radius,n.setRenderTarget(l.mapPass),n.clear(),n.renderBufferDirect(R,null,S,g,M,null),m.uniforms.shadow_pass.value=l.mapPass.texture,m.uniforms.resolution.value.set(l.map.width,l.map.height),m.uniforms.radius.value=l.radius,n.setRenderTarget(l.map),n.clear(),n.renderBufferDirect(R,null,S,m,M,null)}function f(l,R,S,b){let w=null;const T=S.isPointLight===!0?l.customDistanceMaterial:l.customDepthMaterial;if(T!==void 0)w=T;else if(w=S.isPointLight===!0?u:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const A=w.uuid,C=R.uuid;let D=h[A];D===void 0&&(D={},h[A]=D);let L=D[C];L===void 0&&(L=w.clone(),D[C]=L,R.addEventListener("dispose",v)),w=L}if(w.visible=R.visible,w.wireframe=R.wireframe,b===ks?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:p[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const A=n.properties.get(w);A.light=S}return w}function c(l,R,S,b,w){if(l.visible===!1)return;if(l.layers.test(R.layers)&&(l.isMesh||l.isLine||l.isPoints)&&(l.castShadow||l.receiveShadow&&w===ks)&&(!l.frustumCulled||l.intersectsFrustum(i))){l.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,l.matrixWorld);const C=t.update(l),D=l.material;if(Array.isArray(D)){const L=C.groups;for(let F=0,O=L.length;F<O;F++){const k=L[F],B=D[k.materialIndex];if(B&&B.visible){const $=f(l,B,b,w);l.onBeforeShadow(n,l,R,S,C,$,k),n.renderBufferDirect(S,null,C,$,l,k),l.onAfterShadow(n,l,R,S,C,$,k)}}}else if(D.visible){const L=f(l,D,b,w);l.onBeforeShadow(n,l,R,S,C,L,null),n.renderBufferDirect(S,null,C,L,l,null),l.onAfterShadow(n,l,R,S,C,L,null)}}const A=l.children;for(let C=0,D=A.length;C<D;C++)c(A[C],R,S,b,w)}function v(l){l.target.removeEventListener("dispose",v);for(const S in h){const b=h[S],w=l.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function nb(n,t){function e(){let V=!1;const xt=new ge;let nt=null;const vt=new ge(0,0,0,0);return{setMask:function(Et){nt!==Et&&!V&&(n.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){V=Et},setClear:function(Et,lt,Bt,Lt,_e){_e===!0&&(Et*=Lt,lt*=Lt,Bt*=Lt),xt.set(Et,lt,Bt,Lt),vt.equals(xt)===!1&&(n.clearColor(Et,lt,Bt,Lt),vt.copy(xt))},reset:function(){V=!1,nt=null,vt.set(-1,0,0,0)}}}function i(){let V=!1,xt=!1,nt=null,vt=null,Et=null;return{setReversed:function(lt){if(xt!==lt){const Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),xt=lt;const Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return xt},setTest:function(lt){lt?K(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!V&&(n.depthMask(lt),nt=lt)},setFunc:function(lt){if(xt&&(lt=E0[lt]),vt!==lt){switch(lt){case vc:n.depthFunc(n.NEVER);break;case yc:n.depthFunc(n.ALWAYS);break;case Sc:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case Ec:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=lt}},setLocked:function(lt){V=lt},setClear:function(lt){Et!==lt&&(Et=lt,xt&&(lt=1-lt),n.clearDepth(lt))},reset:function(){V=!1,nt=null,vt=null,Et=null,xt=!1}}}function r(){let V=!1,xt=null,nt=null,vt=null,Et=null,lt=null,Bt=null,Lt=null,_e=null;return{setTest:function(ue){V||(ue?K(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(ue){xt!==ue&&!V&&(n.stencilMask(ue),xt=ue)},setFunc:function(ue,Bn,Zn){(nt!==ue||vt!==Bn||Et!==Zn)&&(n.stencilFunc(ue,Bn,Zn),nt=ue,vt=Bn,Et=Zn)},setOp:function(ue,Bn,Zn){(lt!==ue||Bt!==Bn||Lt!==Zn)&&(n.stencilOp(ue,Bn,Zn),lt=ue,Bt=Bn,Lt=Zn)},setLocked:function(ue){V=ue},setClear:function(ue){_e!==ue&&(n.clearStencil(ue),_e=ue)},reset:function(){V=!1,xt=null,nt=null,vt=null,Et=null,lt=null,Bt=null,Lt=null,_e=null}}}const s=new e,o=new i,a=new r,u=new WeakMap,h=new WeakMap;let d={},p={},g={},m=new WeakMap,y=[],M=null,_=!1,x=null,E=null,f=null,c=null,v=null,l=null,R=null,S=new te(0,0,0),b=0,w=!1,T=null,A=null,C=null,D=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,k=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=k>=2);let $=null,W={};const st=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),gt=new ge().fromArray(st),ut=new ge().fromArray(ct);function ot(V,xt,nt,vt){const Et=new Uint8Array(4),lt=n.createTexture();n.bindTexture(V,lt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<nt;Bt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(xt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(xt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return lt}const q={};q[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Zs),Tt(!1),le(Mh),K(n.CULL_FACE),Rt(Ti);function K(V){d[V]!==!0&&(n.enable(V),d[V]=!0)}function at(V){d[V]!==!1&&(n.disable(V),d[V]=!1)}function ft(V,xt){return g[V]!==xt?(n.bindFramebuffer(V,xt),g[V]=xt,V===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=xt),V===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=xt),!0):!1}function ht(V,xt){let nt=y,vt=!1;if(V){nt=m.get(xt),nt===void 0&&(nt=[],m.set(xt,nt));const Et=V.textures;if(nt.length!==Et.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Bt=Et.length;lt<Bt;lt++)nt[lt]=n.COLOR_ATTACHMENT0+lt;nt.length=Et.length,vt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,vt=!0);vt&&n.drawBuffers(nt)}function zt(V){return M!==V?(n.useProgram(V),M=V,!0):!1}const Vt={[es]:n.FUNC_ADD,[W_]:n.FUNC_SUBTRACT,[X_]:n.FUNC_REVERSE_SUBTRACT};Vt[q_]=n.MIN,Vt[Y_]=n.MAX;const wt={[Z_]:n.ZERO,[K_]:n.ONE,[J_]:n.SRC_COLOR,[rp]:n.SRC_ALPHA,[i0]:n.SRC_ALPHA_SATURATE,[e0]:n.DST_COLOR,[Q_]:n.DST_ALPHA,[j_]:n.ONE_MINUS_SRC_COLOR,[sp]:n.ONE_MINUS_SRC_ALPHA,[n0]:n.ONE_MINUS_DST_COLOR,[t0]:n.ONE_MINUS_DST_ALPHA,[r0]:n.CONSTANT_COLOR,[s0]:n.ONE_MINUS_CONSTANT_COLOR,[o0]:n.CONSTANT_ALPHA,[a0]:n.ONE_MINUS_CONSTANT_ALPHA};function Rt(V,xt,nt,vt,Et,lt,Bt,Lt,_e,ue){if(V===Ti){_===!0&&(at(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),V!==$_){if(V!==x||ue!==w){if((E!==es||v!==es)&&(n.blendEquation(n.FUNC_ADD),E=es,v=es),ue)switch(V){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bh:n.blendFunc(n.ONE,n.ONE);break;case Eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ce("WebGLState: Invalid blending: ",V);break}else switch(V){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case bh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eh:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wh:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",V);break}f=null,c=null,l=null,R=null,S.set(0,0,0),b=0,x=V,w=ue}return}Et=Et||xt,lt=lt||nt,Bt=Bt||vt,(xt!==E||Et!==v)&&(n.blendEquationSeparate(Vt[xt],Vt[Et]),E=xt,v=Et),(nt!==f||vt!==c||lt!==l||Bt!==R)&&(n.blendFuncSeparate(wt[nt],wt[vt],wt[lt],wt[Bt]),f=nt,c=vt,l=lt,R=Bt),(Lt.equals(S)===!1||_e!==b)&&(n.blendColor(Lt.r,Lt.g,Lt.b,_e),S.copy(Lt),b=_e),x=V,w=!1}function Ut(V,xt){V.side===Wn?at(n.CULL_FACE):K(n.CULL_FACE);let nt=V.side===hn;xt&&(nt=!nt),Tt(nt),V.blending===Hs&&V.transparent===!1?Rt(Ti):Rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const vt=V.stencilWrite;a.setTest(vt),vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Kt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function le(V){V!==H_?(K(n.CULL_FACE),V!==A&&(V===Mh?n.cullFace(n.BACK):V===V_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),A=V}function Xt(V){V!==C&&(O&&n.lineWidth(V),C=V)}function Kt(V,xt,nt){V?(K(n.POLYGON_OFFSET_FILL),(D!==xt||L!==nt)&&(D=xt,L=nt,o.getReversed()&&(xt=-xt),n.polygonOffset(xt,nt))):at(n.POLYGON_OFFSET_FILL)}function $t(V){V?K(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function qt(V){V===void 0&&(V=n.TEXTURE0+F-1),$!==V&&(n.activeTexture(V),$=V)}function z(V,xt,nt){nt===void 0&&($===null?nt=n.TEXTURE0+F-1:nt=$);let vt=W[nt];vt===void 0&&(vt={type:void 0,texture:void 0},W[nt]=vt),(vt.type!==V||vt.texture!==xt)&&($!==nt&&(n.activeTexture(nt),$=nt),n.bindTexture(V,xt||q[V]),vt.type=V,vt.texture=xt)}function Ee(){const V=W[$];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Gt(){try{n.compressedTexImage2D(...arguments)}catch(V){ce("WebGLState:",V)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(V){ce("WebGLState:",V)}}function P(){try{n.texSubImage2D(...arguments)}catch(V){ce("WebGLState:",V)}}function H(){try{n.texSubImage3D(...arguments)}catch(V){ce("WebGLState:",V)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ce("WebGLState:",V)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ce("WebGLState:",V)}}function dt(){try{n.texStorage2D(...arguments)}catch(V){ce("WebGLState:",V)}}function pt(){try{n.texStorage3D(...arguments)}catch(V){ce("WebGLState:",V)}}function Q(){try{n.texImage2D(...arguments)}catch(V){ce("WebGLState:",V)}}function it(){try{n.texImage3D(...arguments)}catch(V){ce("WebGLState:",V)}}function mt(V){return p[V]!==void 0?p[V]:n.getParameter(V)}function Ft(V,xt){p[V]!==xt&&(n.pixelStorei(V,xt),p[V]=xt)}function yt(V){gt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),gt.copy(V))}function _t(V){ut.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function Ot(V,xt){let nt=h.get(xt);nt===void 0&&(nt=new WeakMap,h.set(xt,nt));let vt=nt.get(V);vt===void 0&&(vt=n.getUniformBlockIndex(xt,V.name),nt.set(V,vt))}function Ht(V,xt){const vt=h.get(xt).get(V);u.get(xt)!==vt&&(n.uniformBlockBinding(xt,vt,V.__bindingPointIndex),u.set(xt,vt))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},p={},$=null,W={},g={},m=new WeakMap,y=[],M=null,_=!1,x=null,E=null,f=null,c=null,v=null,l=null,R=null,S=new te(0,0,0),b=0,w=!1,T=null,A=null,C=null,D=null,L=null,gt.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:at,bindFramebuffer:ft,drawBuffers:ht,useProgram:zt,setBlending:Rt,setMaterial:Ut,setFlipSided:Tt,setCullFace:le,setLineWidth:Xt,setPolygonOffset:Kt,setScissorTest:$t,activeTexture:qt,bindTexture:z,unbindTexture:Ee,compressedTexImage2D:Gt,compressedTexImage3D:N,texImage2D:Q,texImage3D:it,pixelStorei:Ft,getParameter:mt,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:dt,texStorage3D:pt,texSubImage2D:P,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:yt,viewport:_t,reset:Jt}}function ib(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap,p=new Set;let g;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,P){return y?new OffscreenCanvas(N,P):Pa("canvas")}function _(N,P,H){let X=1;const j=Gt(N);if((j.width>H||j.height>H)&&(X=H/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const dt=Math.floor(X*j.width),pt=Math.floor(X*j.height);g===void 0&&(g=M(dt,pt));const Q=P?M(dt,pt):g;return Q.width=dt,Q.height=pt,Q.getContext("2d").drawImage(N,0,0,dt,pt),Wt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+dt+"x"+pt+")."),Q}else return"data"in N&&Wt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),N;return N}function x(N){return N.generateMipmaps}function E(N){n.generateMipmap(N)}function f(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function c(N,P,H,X,j,dt=!1){if(N!==null){if(n[N]!==void 0)return n[N];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt;X&&(pt=t.get("EXT_texture_norm16"),pt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=P;if(P===n.RED&&(H===n.FLOAT&&(Q=n.R32F),H===n.HALF_FLOAT&&(Q=n.R16F),H===n.UNSIGNED_BYTE&&(Q=n.R8),H===n.UNSIGNED_SHORT&&pt&&(Q=pt.R16_EXT),H===n.SHORT&&pt&&(Q=pt.R16_SNORM_EXT)),P===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.R8UI),H===n.UNSIGNED_SHORT&&(Q=n.R16UI),H===n.UNSIGNED_INT&&(Q=n.R32UI),H===n.BYTE&&(Q=n.R8I),H===n.SHORT&&(Q=n.R16I),H===n.INT&&(Q=n.R32I)),P===n.RG&&(H===n.FLOAT&&(Q=n.RG32F),H===n.HALF_FLOAT&&(Q=n.RG16F),H===n.UNSIGNED_BYTE&&(Q=n.RG8),H===n.UNSIGNED_SHORT&&pt&&(Q=pt.RG16_EXT),H===n.SHORT&&pt&&(Q=pt.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RG8UI),H===n.UNSIGNED_SHORT&&(Q=n.RG16UI),H===n.UNSIGNED_INT&&(Q=n.RG32UI),H===n.BYTE&&(Q=n.RG8I),H===n.SHORT&&(Q=n.RG16I),H===n.INT&&(Q=n.RG32I)),P===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),H===n.UNSIGNED_INT&&(Q=n.RGB32UI),H===n.BYTE&&(Q=n.RGB8I),H===n.SHORT&&(Q=n.RGB16I),H===n.INT&&(Q=n.RGB32I)),P===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),H===n.UNSIGNED_INT&&(Q=n.RGBA32UI),H===n.BYTE&&(Q=n.RGBA8I),H===n.SHORT&&(Q=n.RGBA16I),H===n.INT&&(Q=n.RGBA32I)),P===n.RGB&&(H===n.UNSIGNED_SHORT&&pt&&(Q=pt.RGB16_EXT),H===n.SHORT&&pt&&(Q=pt.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),P===n.RGBA){const it=dt?Ra:se.getTransfer(j);H===n.FLOAT&&(Q=n.RGBA32F),H===n.HALF_FLOAT&&(Q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Q=it===de?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&pt&&(Q=pt.RGBA16_EXT),H===n.SHORT&&pt&&(Q=pt.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(N,P){let H;return N?P===null||P===ai||P===Js?H=n.DEPTH24_STENCIL8:P===ei?H=n.DEPTH32F_STENCIL8:P===Ks&&(H=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ai||P===Js?H=n.DEPTH_COMPONENT24:P===ei?H=n.DEPTH_COMPONENT32F:P===Ks&&(H=n.DEPTH_COMPONENT16),H}function l(N,P){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==je&&N.minFilter!==sn?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function R(N){const P=N.target;P.removeEventListener("dispose",R),b(P),P.isVideoTexture&&d.delete(P),P.isHTMLTexture&&p.delete(P)}function S(N){const P=N.target;P.removeEventListener("dispose",S),T(P)}function b(N){const P=i.get(N);if(P.__webglInit===void 0)return;const H=N.source,X=m.get(H);if(X){const j=X[P.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(N),Object.keys(X).length===0&&m.delete(H)}i.remove(N)}function w(N){const P=i.get(N);n.deleteTexture(P.__webglTexture);const H=N.source,X=m.get(H);delete X[P.__cacheKey],o.memory.textures--}function T(N){const P=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(P.__webglFramebuffer[X]))for(let j=0;j<P.__webglFramebuffer[X].length;j++)n.deleteFramebuffer(P.__webglFramebuffer[X][j]);else n.deleteFramebuffer(P.__webglFramebuffer[X]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[X])}else{if(Array.isArray(P.__webglFramebuffer))for(let X=0;X<P.__webglFramebuffer.length;X++)n.deleteFramebuffer(P.__webglFramebuffer[X]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let X=0;X<P.__webglColorRenderbuffer.length;X++)P.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[X]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const H=N.textures;for(let X=0,j=H.length;X<j;X++){const dt=i.get(H[X]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(H[X])}i.remove(N)}let A=0;function C(){A=0}function D(){return A}function L(N){A=N}function F(){const N=A;return N>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+r.maxTextures),A+=1,N}function O(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function k(N,P){const H=i.get(N);if(N.isVideoTexture&&z(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&H.__version!==N.version){const X=N.image;if(X===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(H,N,P);return}}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+P)}function B(N,P){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){at(H,N,P);return}else N.isExternalTexture&&(H.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+P)}function $(N,P){const H=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&H.__version!==N.version){at(H,N,P);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+P)}function W(N,P){const H=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&H.__version!==N.version){ft(H,N,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+P)}const st={[Tc]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},ct={[je]:n.NEAREST,[u0]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[mr]:n.LINEAR_MIPMAP_LINEAR},gt={[p0]:n.NEVER,[v0]:n.ALWAYS,[g0]:n.LESS,[Lu]:n.LEQUAL,[m0]:n.EQUAL,[Nu]:n.GEQUAL,[_0]:n.GREATER,[x0]:n.NOTEQUAL};function ut(N,P){if(P.type===ei&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===sn||P.magFilter===cl||P.magFilter===lo||P.magFilter===mr||P.minFilter===sn||P.minFilter===cl||P.minFilter===lo||P.minFilter===mr)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,st[P.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,st[P.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,st[P.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,ct[P.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,ct[P.minFilter]),P.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,gt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===je||P.minFilter!==lo&&P.minFilter!==mr||P.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(N,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function ot(N,P){let H=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",R));const X=P.source;let j=m.get(X);j===void 0&&(j={},m.set(X,j));const dt=O(P);if(dt!==N.__cacheKey){j[dt]===void 0&&(j[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[dt].usedTimes++;const pt=j[N.__cacheKey];pt!==void 0&&(j[N.__cacheKey].usedTimes--,pt.usedTimes===0&&w(P)),N.__cacheKey=dt,N.__webglTexture=j[dt].texture}return H}function q(N,P,H){return Math.floor(Math.floor(N/H)/P)}function K(N,P,H,X){const dt=N.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,H,X,P.data);else{dt.sort((Ft,yt)=>Ft.start-yt.start);let pt=0;for(let Ft=1;Ft<dt.length;Ft++){const yt=dt[pt],_t=dt[Ft],Ot=yt.start+yt.count,Ht=q(_t.start,P.width,4),Jt=q(yt.start,P.width,4);_t.start<=Ot+1&&Ht===Jt&&q(_t.start+_t.count-1,P.width,4)===Ht?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++pt,dt[pt]=_t)}dt.length=pt+1;const Q=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let Ft=0,yt=dt.length;Ft<yt;Ft++){const _t=dt[Ft],Ot=Math.floor(_t.start/4),Ht=Math.ceil(_t.count/4),Jt=Ot%P.width,V=Math.floor(Ot/P.width),xt=Ht,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Jt,V,xt,nt,H,X,P.data)}N.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,mt)}}function at(N,P,H){let X=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(X=n.TEXTURE_3D);const j=ot(N,P),dt=P.source;e.bindTexture(X,N.__webglTexture,n.TEXTURE0+H);const pt=i.get(dt);if(dt.version!==pt.__version||j===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){const nt=se.getPrimaries(se.workingColorSpace),vt=P.colorSpace===$i?null:se.getPrimaries(P.colorSpace),Et=P.colorSpace===$i||nt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let it=_(P.image,!1,r.maxTextureSize);it=Ee(P,it);const mt=s.convert(P.format,P.colorSpace),Ft=s.convert(P.type);let yt=c(P.internalFormat,mt,Ft,P.normalized,P.colorSpace,P.isVideoTexture);ut(X,P);let _t;const Ot=P.mipmaps,Ht=P.isVideoTexture!==!0,Jt=pt.__version===void 0||j===!0,V=dt.dataReady,xt=l(P,it);if(P.isDepthTexture)yt=v(P.format===_r,P.type),Jt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,yt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,yt,it.width,it.height,0,mt,Ft,null));else if(P.isDataTexture)if(Ot.length>0){Ht&&Jt&&e.texStorage2D(n.TEXTURE_2D,xt,yt,Ot[0].width,Ot[0].height);for(let nt=0,vt=Ot.length;nt<vt;nt++)_t=Ot[nt],Ht?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,_t.width,_t.height,mt,Ft,_t.data):e.texImage2D(n.TEXTURE_2D,nt,yt,_t.width,_t.height,0,mt,Ft,_t.data);P.generateMipmaps=!1}else Ht?(Jt&&e.texStorage2D(n.TEXTURE_2D,xt,yt,it.width,it.height),V&&K(P,it,mt,Ft)):e.texImage2D(n.TEXTURE_2D,0,yt,it.width,it.height,0,mt,Ft,it.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ht&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,yt,Ot[0].width,Ot[0].height,it.depth);for(let nt=0,vt=Ot.length;nt<vt;nt++)if(_t=Ot[nt],P.format!==Xn)if(mt!==null)if(Ht){if(V)if(P.layerUpdates.size>0){const Et=nd(_t.width,_t.height,P.format,P.type);for(const lt of P.layerUpdates){const Bt=_t.data.subarray(lt*Et/_t.data.BYTES_PER_ELEMENT,(lt+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,lt,_t.width,_t.height,1,mt,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,it.depth,mt,_t.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,yt,_t.width,_t.height,it.depth,0,_t.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,it.depth,mt,Ft,_t.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,yt,_t.width,_t.height,it.depth,0,mt,Ft,_t.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Ht&&Jt&&e.texStorage2D(n.TEXTURE_2D,xt,yt,Ot[0].width,Ot[0].height);for(let nt=0,vt=Ot.length;nt<vt;nt++)_t=Ot[nt],P.format!==Xn?mt!==null?Ht?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,yt,_t.width,_t.height,0,_t.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,_t.width,_t.height,mt,Ft,_t.data):e.texImage2D(n.TEXTURE_2D,nt,yt,_t.width,_t.height,0,mt,Ft,_t.data)}else if(P.isDataArrayTexture)if(Ht){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,xt,yt,it.width,it.height,it.depth),V)if(P.layerUpdates.size>0){const nt=nd(it.width,it.height,P.format,P.type);for(const vt of P.layerUpdates){const Et=it.data.subarray(vt*nt/it.data.BYTES_PER_ELEMENT,(vt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,it.width,it.height,1,mt,Ft,Et)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ft,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,it.width,it.height,it.depth,0,mt,Ft,it.data);else if(P.isData3DTexture)Ht?(Jt&&e.texStorage3D(n.TEXTURE_3D,xt,yt,it.width,it.height,it.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ft,it.data)):e.texImage3D(n.TEXTURE_3D,0,yt,it.width,it.height,it.depth,0,mt,Ft,it.data);else if(P.isFramebufferTexture){if(Jt)if(Ht)e.texStorage2D(n.TEXTURE_2D,xt,yt,it.width,it.height);else{let nt=it.width,vt=it.height;for(let Et=0;Et<xt;Et++)e.texImage2D(n.TEXTURE_2D,Et,yt,nt,vt,0,mt,Ft,null),nt>>=1,vt>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){const nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),p.add(P),nt.onpaint=vt=>{const Et=vt.changedElements;for(const lt of p)Et.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{const Et=n.RGBA,lt=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Et,lt,Bt,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&Jt){const nt=Gt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,xt,yt,nt.width,nt.height)}for(let nt=0,vt=Ot.length;nt<vt;nt++)_t=Ot[nt],Ht?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,mt,Ft,_t):e.texImage2D(n.TEXTURE_2D,nt,yt,mt,Ft,_t);P.generateMipmaps=!1}else if(Ht){if(Jt){const nt=Gt(it);e.texStorage2D(n.TEXTURE_2D,xt,yt,nt.width,nt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,Ft,it)}else e.texImage2D(n.TEXTURE_2D,0,yt,mt,Ft,it);x(P)&&E(X),pt.__version=dt.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function ft(N,P,H){if(P.image.length!==6)return;const X=ot(N,P),j=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+H);const dt=i.get(j);if(j.version!==dt.__version||X===!0){e.activeTexture(n.TEXTURE0+H);const pt=se.getPrimaries(se.workingColorSpace),Q=P.colorSpace===$i?null:se.getPrimaries(P.colorSpace),it=P.colorSpace===$i||pt===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const mt=P.isCompressedTexture||P.image[0].isCompressedTexture,Ft=P.image[0]&&P.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!mt&&!Ft?yt[lt]=_(P.image[lt],!0,r.maxCubemapSize):yt[lt]=Ft?P.image[lt].image:P.image[lt],yt[lt]=Ee(P,yt[lt]);const _t=yt[0],Ot=s.convert(P.format,P.colorSpace),Ht=s.convert(P.type),Jt=c(P.internalFormat,Ot,Ht,P.normalized,P.colorSpace),V=P.isVideoTexture!==!0,xt=dt.__version===void 0||X===!0,nt=j.dataReady;let vt=l(P,_t);ut(n.TEXTURE_CUBE_MAP,P);let Et;if(mt){V&&xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Jt,_t.width,_t.height);for(let lt=0;lt<6;lt++){Et=yt[lt].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){const Lt=Et[Bt];P.format!==Xn?Ot!==null?V?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Lt.width,Lt.height,Ot,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,Jt,Lt.width,Lt.height,0,Lt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,0,0,Lt.width,Lt.height,Ot,Ht,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt,Jt,Lt.width,Lt.height,0,Ot,Ht,Lt.data)}}}else{if(Et=P.mipmaps,V&&xt){Et.length>0&&vt++;const lt=Gt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ft){V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,Ot,Ht,yt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,yt[lt].width,yt[lt].height,0,Ot,Ht,yt[lt].data);for(let Bt=0;Bt<Et.length;Bt++){const _e=Et[Bt].image[lt].image;V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,_e.width,_e.height,Ot,Ht,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,Jt,_e.width,_e.height,0,Ot,Ht,_e.data)}}else{V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ot,Ht,yt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Jt,Ot,Ht,yt[lt]);for(let Bt=0;Bt<Et.length;Bt++){const Lt=Et[Bt];V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,0,0,Ot,Ht,Lt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Bt+1,Jt,Ot,Ht,Lt.image[lt])}}}x(P)&&E(n.TEXTURE_CUBE_MAP),dt.__version=j.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function ht(N,P,H,X,j,dt){const pt=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),it=c(H.internalFormat,pt,Q,H.normalized,H.colorSpace),mt=i.get(P),Ft=i.get(H);if(Ft.__renderTarget=P,!mt.__hasExternalTextures){const yt=Math.max(1,P.width>>dt),_t=Math.max(1,P.height>>dt);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,dt,it,yt,_t,P.depth,0,pt,Q,null):e.texImage2D(j,dt,it,yt,_t,0,pt,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,N),qt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,Ft.__webglTexture,0,$t(P)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,j,Ft.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(N,P,H){if(n.bindRenderbuffer(n.RENDERBUFFER,N),P.depthBuffer){const X=P.depthTexture,j=X&&X.isDepthTexture?X.type:null,dt=v(P.stencilBuffer,j),pt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;qt(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(P),dt,P.width,P.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(P),dt,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,dt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,N)}else{const X=P.textures;for(let j=0;j<X.length;j++){const dt=X[j],pt=s.convert(dt.format,dt.colorSpace),Q=s.convert(dt.type),it=c(dt.internalFormat,pt,Q,dt.normalized,dt.colorSpace);qt(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(P),it,P.width,P.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(P),it,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,it,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(N,P,H){const X=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(P.depthTexture);if(j.__renderTarget=P,(!j.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,P.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ut(n.TEXTURE_CUBE_MAP,P.depthTexture);const mt=s.convert(P.depthTexture.format),Ft=s.convert(P.depthTexture.type);let yt;P.depthTexture.format===Ri?yt=n.DEPTH_COMPONENT24:P.depthTexture.format===_r&&(yt=n.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,P.width,P.height,0,mt,Ft,null)}}else k(P.depthTexture,0);const dt=j.__webglTexture,pt=$t(P),Q=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,it=P.depthTexture.format===_r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===Ri)qt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,dt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,dt,0);else if(P.depthTexture.format===_r)qt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,dt,0,pt):n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(N){const P=i.get(N),H=N.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==N.depthTexture){const X=N.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),X){const j=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),P.__depthDisposeCallback=j}P.__boundDepthTexture=X}if(N.depthTexture&&!P.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)Vt(P.__webglFramebuffer[X],N,X);else{const X=N.texture.mipmaps;X&&X.length>0?Vt(P.__webglFramebuffer[0],N,0):Vt(P.__webglFramebuffer,N,0)}else if(H){P.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[X]),P.__webglDepthbuffer[X]===void 0)P.__webglDepthbuffer[X]=n.createRenderbuffer(),zt(P.__webglDepthbuffer[X],N,!1);else{const j=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=P.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,dt)}}else{const X=N.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),zt(P.__webglDepthbuffer,N,!1);else{const j=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(N,P,H){const X=i.get(N);P!==void 0&&ht(X.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&wt(N)}function Ut(N){const P=N.texture,H=i.get(N),X=i.get(P);N.addEventListener("dispose",S);const j=N.textures,dt=N.isWebGLCubeRenderTarget===!0,pt=j.length>1;if(pt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=P.version,o.memory.textures++),dt){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(P.mipmaps&&P.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let it=0;it<P.mipmaps.length;it++)H.__webglFramebuffer[Q][it]=n.createFramebuffer()}else H.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<P.mipmaps.length;Q++)H.__webglFramebuffer[Q]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(pt)for(let Q=0,it=j.length;Q<it;Q++){const mt=i.get(j[Q]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&qt(N)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){const it=j[Q];H.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const mt=s.convert(it.format,it.colorSpace),Ft=s.convert(it.type),yt=c(it.internalFormat,mt,Ft,it.normalized,it.colorSpace,N.isXRRenderTarget===!0),_t=$t(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,yt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(H.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),ut(n.TEXTURE_CUBE_MAP,P);for(let Q=0;Q<6;Q++)if(P.mipmaps&&P.mipmaps.length>0)for(let it=0;it<P.mipmaps.length;it++)ht(H.__webglFramebuffer[Q][it],N,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else ht(H.__webglFramebuffer[Q],N,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);x(P)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let Q=0,it=j.length;Q<it;Q++){const mt=j[Q],Ft=i.get(mt);let yt=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(yt=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ft.__webglTexture),ut(yt,mt),ht(H.__webglFramebuffer,N,mt,n.COLOR_ATTACHMENT0+Q,yt,0),x(mt)&&E(yt)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Q=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,X.__webglTexture),ut(Q,P),P.mipmaps&&P.mipmaps.length>0)for(let it=0;it<P.mipmaps.length;it++)ht(H.__webglFramebuffer[it],N,P,n.COLOR_ATTACHMENT0,Q,it);else ht(H.__webglFramebuffer,N,P,n.COLOR_ATTACHMENT0,Q,0);x(P)&&E(Q),e.unbindTexture()}N.depthBuffer&&wt(N)}function Tt(N){const P=N.textures;for(let H=0,X=P.length;H<X;H++){const j=P[H];if(x(j)){const dt=f(N),pt=i.get(j).__webglTexture;e.bindTexture(dt,pt),E(dt),e.unbindTexture()}}}const le=[],Xt=[];function Kt(N){if(N.samples>0){if(qt(N)===!1){const P=N.textures,H=N.width,X=N.height;let j=n.COLOR_BUFFER_BIT;const dt=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(N),Q=P.length>1;if(Q)for(let mt=0;mt<P.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const it=N.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<P.length;mt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);const Ft=i.get(P[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,H,X,0,0,H,X,j,n.NEAREST),u===!0&&(le.length=0,Xt.length=0,le.push(n.COLOR_ATTACHMENT0+mt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(le.push(dt),Xt.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let mt=0;mt<P.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);const Ft=i.get(P[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&u){const P=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function $t(N){return Math.min(r.maxSamples,N.samples)}function qt(N){const P=i.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function z(N){const P=o.render.frame;d.get(N)!==P&&(d.set(N,P),N.update())}function Ee(N,P){const H=N.colorSpace,X=N.format,j=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||H!==Ca&&H!==$i&&(se.getTransfer(H)===de?(X!==Xn||j!==wn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",H)),P}function Gt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.getTextureUnits=D,this.setTextureUnits=L,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=Rt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function rb(n,t){function e(i,r=$i){let s;const o=se.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===Cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===Au)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===vp)return n.ALPHA;if(i===yp)return n.RGB;if(i===Xn)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Sp)return n.RED;if(i===Pu)return n.RED_INTEGER;if(i===br)return n.RG;if(i===Du)return n.RG_INTEGER;if(i===Iu)return n.RGBA_INTEGER;if(i===oa||i===aa||i===la||i===ca)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Dc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Lc||i===Nc||i===Uc||i===Fc||i===Ta||i===Oc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ic||i===Lc)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uc)return s.COMPRESSED_R11_EAC;if(i===Fc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ta)return s.COMPRESSED_RG11_EAC;if(i===Oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bc||i===zc||i===kc||i===Gc||i===Hc||i===Vc||i===$c||i===Wc||i===Xc||i===qc||i===Yc||i===Zc||i===Kc||i===Jc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$c)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Qc||i===tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===jc)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===nu||i===Aa||i===iu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===eu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ab{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Pp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ci({vertexShader:sb,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lb extends nr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",u=1,h=null,d=null,p=null,g=null,m=null,y=null;const M=typeof XRWebGLBinding<"u",_=new ab,x={},E=e.getContextAttributes();let f=null,c=null;const v=[],l=[],R=new kt;let S=null,b=null;const w=new Un;w.viewport=new ge;const T=new Un;T.viewport=new ge;const A=[w,T],C=new hx;let D=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=v[q];return K===void 0&&(K=new _l,v[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=v[q];return K===void 0&&(K=new _l,v[q]=K),K.getGripSpace()},this.getHand=function(q){let K=v[q];return K===void 0&&(K=new _l,v[q]=K),K.getHandSpace()};function F(q){const K=l.indexOf(q.inputSource);if(K===-1)return;const at=v[K];at!==void 0&&(at.update(q.inputSource,q.frame,h||o),at.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",k);for(let q=0;q<v.length;q++){const K=l[q];K!==null&&(l[q]=null,v[q].disconnect(K))}D=null,L=null,_.reset();for(const q in x)delete x[q];if(t.setRenderTarget(f),m=null,g=null,p=null,r=null,c=null,ot.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),b!==null){const q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",k),E.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,ft=null,ht=null;E.depth&&(ht=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=E.stencil?_r:Ri,ft=E.stencil?Js:ai);const zt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};p=this.getBinding(),g=p.createProjectionLayer(zt),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),c=new qn(g.textureWidth,g.textureHeight,{format:Xn,type:wn,depthTexture:new Qs(g.textureWidth,g.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const at={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),c=new qn(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(q){for(let K=0;K<q.removed.length;K++){const at=q.removed[K],ft=l.indexOf(at);ft>=0&&(l[ft]=null,v[ft].disconnect(at))}for(let K=0;K<q.added.length;K++){const at=q.added[K];let ft=l.indexOf(at);if(ft===-1){for(let zt=0;zt<v.length;zt++)if(zt>=l.length){l.push(at),ft=zt;break}else if(l[zt]===null){l[zt]=at,ft=zt;break}if(ft===-1)break}const ht=v[ft];ht&&ht.connect(at)}}const B=new U,$=new U;function W(q,K,at){B.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(at.matrixWorld);const ft=B.distanceTo($),ht=K.projectionMatrix.elements,zt=at.projectionMatrix.elements,Vt=ht[14]/(ht[10]-1),wt=ht[14]/(ht[10]+1),Rt=(ht[9]+1)/ht[5],Ut=(ht[9]-1)/ht[5],Tt=(ht[8]-1)/ht[0],le=(zt[8]+1)/zt[0],Xt=Vt*Tt,Kt=Vt*le,$t=ft/(-Tt+le),qt=$t*-Tt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(qt),q.translateZ($t),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ht[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const z=Vt+$t,Ee=wt+$t,Gt=Xt-qt,N=Kt+(ft-qt),P=Rt*wt/Ee*z,H=Ut*wt/Ee*z;q.projectionMatrix.makePerspective(Gt,N,P,H,z,Ee),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let K=q.near,at=q.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(at=_.depthFar)),C.near=T.near=w.near=K,C.far=T.far=w.far=at,(D!==C.near||L!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,L=C.far),C.layers.mask=q.layers.mask|6,w.layers.mask=C.layers.mask&-5,T.layers.mask=C.layers.mask&-3;const ft=q.parent,ht=C.cameras;st(C,ft);for(let zt=0;zt<ht.length;zt++)st(ht[zt],ft);ht.length===2?W(C,w,T):C.projectionMatrix.copy(w.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),ct(q,C,ft)};function ct(q,K,at){at===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=su*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(g===null&&m===null))return u},this.setFoveation=function(q){u=q,g!==null&&(g.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(q){return x[q]};let gt=null;function ut(q,K){if(d=K.getViewerPose(h||o),y=K,d!==null){const at=d.views;m!==null&&(t.setRenderTargetFramebuffer(c,m.framebuffer),t.setRenderTarget(c));let ft=!1;at.length!==C.cameras.length&&(C.cameras.length=0,ft=!0);for(let wt=0;wt<at.length;wt++){const Rt=at[wt];let Ut=null;if(m!==null)Ut=m.getViewport(Rt);else{const le=p.getViewSubImage(g,Rt);Ut=le.viewport,wt===0&&(t.setRenderTargetTextures(c,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(c))}let Tt=A[wt];Tt===void 0&&(Tt=new Un,Tt.layers.enable(wt),Tt.viewport=new ge,A[wt]=Tt),Tt.matrix.fromArray(Rt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Rt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),wt===0&&(C.matrix.copy(Tt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ft===!0&&C.cameras.push(Tt)}const ht=r.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const wt=p.getDepthInformation(at[0]);wt&&wt.isValid&&wt.texture&&_.init(wt,r.renderState)}if(ht&&ht.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let wt=0;wt<at.length;wt++){const Rt=at[wt].camera;if(Rt){let Ut=x[Rt];Ut||(Ut=new Pp,x[Rt]=Ut);const Tt=p.getCameraImage(Rt);Ut.sourceTexture=Tt}}}}for(let at=0;at<v.length;at++){const ft=l[at],ht=v[at];ft!==null&&ht!==void 0&&ht.update(ft,K,h||o)}gt&&gt(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),y=null}const ot=new Np;ot.setAnimationLoop(ut),this.setAnimationLoop=function(q){gt=q},this.dispose=function(){}}}const cb=new re,Gp=new Yt;Gp.set(-1,0,0,0,1,0,0,0,1);function ub(n,t){function e(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function i(_,x){x.color.getRGB(_.fogColor.value,Dp(n)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function r(_,x,E,f,c){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?s(_,x):x.isMeshLambertMaterial?(s(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(s(_,x),p(_,x)):x.isMeshPhongMaterial?(s(_,x),d(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(s(_,x),g(_,x),x.isMeshPhysicalMaterial&&m(_,x,c)):x.isMeshMatcapMaterial?(s(_,x),y(_,x)):x.isMeshDepthMaterial?s(_,x):x.isMeshDistanceMaterial?(s(_,x),M(_,x)):x.isMeshNormalMaterial?s(_,x):x.isLineBasicMaterial?(o(_,x),x.isLineDashedMaterial&&a(_,x)):x.isPointsMaterial?u(_,x,E,f):x.isSpriteMaterial?h(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,e(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,e(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===hn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,e(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===hn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,e(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,e(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const E=t.get(x),f=E.envMap,c=E.envMapRotation;f&&(_.envMap.value=f,_.envMapRotation.value.setFromMatrix4(cb.makeRotationFromEuler(c)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Gp),_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,_.aoMapTransform))}function o(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,e(x.map,_.mapTransform))}function a(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function u(_,x,E,f){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*E,_.scale.value=f*.5,x.map&&(_.map.value=x.map,e(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,e(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,e(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function d(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function p(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function m(_,x,E){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===hn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.retroreflectivity>0&&(_.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,x){x.matcap&&(_.matcap.value=x.matcap)}function M(_,x){const E=t.get(x).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hb(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(c,v){const l=v.program;i.uniformBlockBinding(c,l)}function h(c,v){let l=r[c.id];l===void 0&&(_(c),l=d(c),r[c.id]=l,c.addEventListener("dispose",E));const R=v.program;i.updateUBOMapping(c,R);const S=t.render.frame;s[c.id]!==S&&(g(c),s[c.id]=S)}function d(c){const v=p();c.__bindingPointIndex=v;const l=n.createBuffer(),R=c.__size,S=c.usage;return n.bindBuffer(n.UNIFORM_BUFFER,l),n.bufferData(n.UNIFORM_BUFFER,R,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,l),l}function p(){for(let c=0;c<a;c++)if(o.indexOf(c)===-1)return o.push(c),c;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(c){const v=r[c.id],l=c.uniforms,R=c.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let S=0,b=l.length;S<b;S++){const w=l[S];if(Array.isArray(w))for(let T=0,A=w.length;T<A;T++)m(w[T],S,T,R);else m(w,S,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(c,v,l,R){if(M(c,v,l,R)===!0){const S=c.__offset,b=c.value;if(Array.isArray(b)){let w=0;for(let T=0;T<b.length;T++){const A=b[T],C=x(A);y(A,c.__data,w),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(w+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(b,c.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,c.__data)}}function y(c,v,l){typeof c=="number"||typeof c=="boolean"?v[0]=c:c.isMatrix3?(v[0]=c.elements[0],v[1]=c.elements[1],v[2]=c.elements[2],v[3]=0,v[4]=c.elements[3],v[5]=c.elements[4],v[6]=c.elements[5],v[7]=0,v[8]=c.elements[6],v[9]=c.elements[7],v[10]=c.elements[8],v[11]=0):ArrayBuffer.isView(c)?v.set(new c.constructor(c.buffer,c.byteOffset,v.length)):c.toArray(v,l)}function M(c,v,l,R){const S=c.value,b=v+"_"+l;if(R[b]===void 0)return typeof S=="number"||typeof S=="boolean"?R[b]=S:ArrayBuffer.isView(S)?R[b]=S.slice():R[b]=S.clone(),!0;{const w=R[b];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return R[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function _(c){const v=c.uniforms;let l=0;const R=16;for(let b=0,w=v.length;b<w;b++){const T=Array.isArray(v[b])?v[b]:[v[b]];for(let A=0,C=T.length;A<C;A++){const D=T[A],L=Array.isArray(D.value)?D.value:[D.value];for(let F=0,O=L.length;F<O;F++){const k=L[F],B=x(k),$=l%R,W=$%B.boundary,st=$+W;l+=W,st!==0&&R-st<B.storage&&(l+=R-st),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=l,l+=B.storage}}}const S=l%R;return S>0&&(l+=R-S),c.__size=l,c.__cache={},this}function x(c){const v={boundary:0,storage:0};return typeof c=="number"||typeof c=="boolean"?(v.boundary=4,v.storage=4):c.isVector2?(v.boundary=8,v.storage=8):c.isVector3||c.isColor?(v.boundary=16,v.storage=12):c.isVector4?(v.boundary=16,v.storage=16):c.isMatrix3?(v.boundary=48,v.storage=48):c.isMatrix4?(v.boundary=64,v.storage=64):c.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(c)?(v.boundary=16,v.storage=c.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",c),v}function E(c){const v=c.target;v.removeEventListener("dispose",E);const l=o.indexOf(v.__bindingPointIndex);o.splice(l,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const c in r)n.deleteBuffer(r[c]);o=[],r={},s={}}return{bind:u,update:h,dispose:f}}const db=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function fb(){return jn===null&&(jn=new Y0(db,16,16,br,li),jn.name="DFG_LUT",jn.minFilter=sn,jn.magFilter=sn,jn.wrapS=bi,jn.wrapT=bi,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class pb{constructor(t={}){const{canvas:e=M0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:g=!1,outputBufferType:m=wn}=t;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=o;const M=m,_=new Set([Iu,Du,Pu]),x=new Set([wn,ai,Ks,Js,Cu,Ru]),E=new Uint32Array(4),f=new Int32Array(4),c=new U;let v=null,l=null;const R=[],S=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let T=!1,A=null,C=null,D=null,L=null;this._outputColorSpace=Nn;let F=0,O=0,k=null,B=-1,$=null;const W=new ge,st=new ge;let ct=null;const gt=new te(0);let ut=0,ot=e.width,q=e.height,K=1,at=null,ft=null;const ht=new ge(0,0,ot,q),zt=new ge(0,0,ot,q);let Vt=!1;const wt=new Fu;let Rt=!1,Ut=!1;const Tt=new re,le=new U,Xt=new ge,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function qt(){return k===null?K:1}let z=i;function Ee(I,G){return e.getContext(I,G)}let Gt,N,P,H,X,j,dt,pt,Q,it,mt,Ft,yt,_t,Ot,Ht,Jt,V,xt,nt,vt,Et,lt;try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),z===null){const G="webgl2";if(z=Ee(G,I),z===null)throw Ee(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(I){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),ce("WebGLRenderer: "+I.message),I}function Bt(){Gt=new fS(z),Gt.init(),vt=new rb(z,Gt),N=new iS(z,Gt,t,vt),P=new nb(z,Gt),N.reversedDepthBuffer&&g&&P.buffers.depth.setReversed(!0),C=z.createFramebuffer(),D=z.createFramebuffer(),L=z.createFramebuffer(),H=new mS(z),X=new HM,j=new ib(z,Gt,P,X,N,vt,H),dt=new dS(w),pt=new xx(z),Et=new eS(z,pt),Q=new pS(z,pt,H,Et),it=new xS(z,Q,pt,Et,H),V=new _S(z,N,j),Ot=new rS(X),mt=new GM(w,dt,Gt,N,Et,Ot),Ft=new ub(w,X),yt=new $M,_t=new KM(Gt),Jt=new tS(w,dt,P,it,y,u),Ht=new eb(w,it,N),lt=new hb(z,H,N,P),xt=new nS(z,Gt,H),nt=new gS(z,Gt,H),H.programs=mt.programs,w.capabilities=N,w.extensions=Gt,w.properties=X,w.renderLists=yt,w.shadowMap=Ht,w.state=P,w.info=H}M!==wn&&(b=new yS(M,e.width,e.height,a,r,s));const Lt=new lb(w,z);this.xr=Lt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const I=Gt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Gt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(I){I!==void 0&&(K=I,this.setSize(ot,q,!1))},this.getSize=function(I){return I.set(ot,q)},this.setSize=function(I,G,J=!0){if(Lt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=I,q=G,e.width=Math.floor(I*K),e.height=Math.floor(G*K),J===!0&&(e.style.width=I+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(ot*K,q*K).floor()},this.setDrawingBufferSize=function(I,G,J){ot=I,q=G,K=J,e.width=Math.floor(I*J),e.height=Math.floor(G*J),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(M===wn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(W)},this.getViewport=function(I){return I.copy(ht)},this.setViewport=function(I,G,J,Y){I.isVector4?ht.set(I.x,I.y,I.z,I.w):ht.set(I,G,J,Y),P.viewport(W.copy(ht).multiplyScalar(K).round())},this.getScissor=function(I){return I.copy(zt)},this.setScissor=function(I,G,J,Y){I.isVector4?zt.set(I.x,I.y,I.z,I.w):zt.set(I,G,J,Y),P.scissor(st.copy(zt).multiplyScalar(K).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(I){P.setScissorTest(Vt=I)},this.setOpaqueSort=function(I){at=I},this.setTransparentSort=function(I){ft=I},this.getClearColor=function(I){return I.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,J=!0){let Y=0;if(I){let Z=!1;if(k!==null){const bt=k.texture.format;Z=_.has(bt)}if(Z){const bt=k.texture.type,Ct=x.has(bt),Mt=Jt.getClearColor(),Dt=Jt.getClearAlpha(),Nt=Mt.r,jt=Mt.g,ne=Mt.b;Ct?(E[0]=Nt,E[1]=jt,E[2]=ne,E[3]=Dt,z.clearBufferuiv(z.COLOR,0,E)):(f[0]=Nt,f[1]=jt,f[2]=ne,f[3]=Dt,z.clearBufferiv(z.COLOR,0,f))}else Y|=z.COLOR_BUFFER_BIT}G&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),A=I},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Jt.dispose(),yt.dispose(),_t.dispose(),X.dispose(),dt.dispose(),it.dispose(),Et.dispose(),lt.dispose(),mt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",eh),Lt.removeEventListener("sessionend",nh),ir.stop()};function _e(I){I.preventDefault(),Ch("WebGLRenderer: Context Lost."),T=!0}function ue(){Ch("WebGLRenderer: Context Restored."),T=!1;const I=H.autoReset,G=Ht.enabled,J=Ht.autoUpdate,Y=Ht.needsUpdate,Z=Ht.type;Bt(),H.autoReset=I,Ht.enabled=G,Ht.autoUpdate=J,Ht.needsUpdate=Y,Ht.type=Z}function Bn(I){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Zn(I){const G=I.target;G.removeEventListener("dispose",Zn),lg(G)}function lg(I){cg(I),X.remove(I)}function cg(I){const G=X.get(I).programs;G!==void 0&&(G.forEach(function(J){mt.releaseProgram(J)}),I.isShaderMaterial&&mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,J,Y,Z,bt){G===null&&(G=Kt);const Ct=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Mt=dg(I,G,J,Y,Z);P.setMaterial(Y,Ct);let Dt=J.index,Nt=1;if(Y.wireframe===!0){if(Dt=Q.getWireframeAttribute(J),Dt===void 0)return;Nt=2}const jt=J.drawRange,ne=J.attributes.position;let It=jt.start*Nt,he=(jt.start+jt.count)*Nt;bt!==null&&(It=Math.max(It,bt.start*Nt),he=Math.min(he,(bt.start+bt.count)*Nt)),Dt!==null?(It=Math.max(It,0),he=Math.min(he,Dt.count)):ne!=null&&(It=Math.max(It,0),he=Math.min(he,ne.count));const Le=he-It;if(Le<0||Le===1/0)return;Et.setup(Z,Y,Mt,J,Dt);let ye,me=xt;if(Dt!==null&&(ye=pt.get(Dt),me=nt,me.setIndex(ye)),Z.isMesh)Y.wireframe===!0?(P.setLineWidth(Y.wireframeLinewidth*qt()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(Z.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),P.setLineWidth(tn*qt()),Z.isLineSegments?me.setMode(z.LINES):Z.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else Z.isPoints?me.setMode(z.POINTS):Z.isSprite&&me.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const tn=Z._multiDrawStarts,At=Z._multiDrawCounts,cn=Z._multiDrawCount,ae=Dt?pt.get(Dt).bytesPerElement:1,Pn=X.get(Y).currentProgram.getUniforms();for(let Kn=0;Kn<cn;Kn++)Pn.setValue(z,"_gl_DrawID",Kn),me.render(tn[Kn]/ae,At[Kn])}else if(Z.isInstancedMesh)me.renderInstances(It,Le,Z.count);else if(J.isInstancedBufferGeometry){const tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,At=Math.min(J.instanceCount,tn);me.renderInstances(It,Le,At)}else me.render(It,Le)};function th(I,G,J,Y){A!==null&&I.isNodeMaterial&&A.setObject(Y,I),Rt===!0&&Ot.setState(I,J,!1),I.transparent===!0&&I.side===Wn&&I.forceSinglePass===!1?(I.side=hn,I.needsUpdate=!0,so(I,G,Y),I.side=oi,I.needsUpdate=!0,so(I,G,Y),I.side=Wn):so(I,G,Y)}this.compile=function(I,G,J=null){J===null&&(J=I),A!==null&&A.renderStart(I,G,J),l=_t.get(J),l.init(G),S.push(l),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(l.pushLight(Z),Z.castShadow&&l.pushShadow(Z))}),I!==J&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(l.pushLight(Z),Z.castShadow&&l.pushShadow(Z))}),l.setupLights(),A!==null&&A.updateLights(l.state.lightsArray),Ut=this.localClippingEnabled,Rt=Ot.init(this.clippingPlanes,Ut),Rt===!0&&Ot.setGlobalState(this.clippingPlanes,G),A!==null&&Ht.render(l.state.shadowsArray,J,G);const Y=new Set;return I.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){const Mt=bt[Ct];th(Mt,J,G,Z),Y.add(Mt)}else th(bt,J,G,Z),Y.add(bt)}),l=S.pop(),A!==null&&A.renderEnd(),Y},this.compileAsync=function(I,G,J=null){const Y=this.compile(I,G,J);return new Promise(Z=>{function bt(){if(Y.forEach(function(Ct){const Dt=X.get(Ct).currentProgram;(Dt===void 0||Dt.isReady())&&Y.delete(Ct)}),Y.size===0){Z(I);return}setTimeout(bt,10)}Gt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Qa=null;function ug(I){Qa&&Qa(I)}function eh(){ir.stop()}function nh(){ir.start()}const ir=new Np;ir.setAnimationLoop(ug),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(I){Qa=I,Lt.setAnimationLoop(I),I===null?ir.stop():ir.start()},Lt.addEventListener("sessionstart",eh),Lt.addEventListener("sessionend",nh),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A!==null&&A.renderStart(I,G);const J=Lt.enabled===!0&&Lt.isPresenting===!0,Y=b!==null&&(k===null||J)&&b.begin(w,k);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(G),G=Lt.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,G,k),l=_t.get(I,S.length),l.init(G),l.state.textureUnits=j.getTextureUnits(),S.push(l),Tt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),wt.setFromProjectionMatrix(Tt,ni,G.reversedDepth),Ut=this.localClippingEnabled,Rt=Ot.init(this.clippingPlanes,Ut),v=yt.get(I,R.length),v.init(),R.push(v),Lt.enabled===!0&&Lt.isPresenting===!0){const Ct=w.xr.getDepthSensingMesh();Ct!==null&&tl(Ct,G,-1/0,w.sortObjects)}tl(I,G,0,w.sortObjects),v.finish(),A!==null&&A.updateLights(l.state.lightsArray),w.sortObjects===!0&&v.sort(at,ft),$t=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,$t&&Jt.addToRenderList(v,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Ot.beginShadows();const Z=l.state.shadowsArray;if(Ht.render(Z,I,G),Rt===!0&&Ot.endShadows(),(Y&&b.hasRenderPass())===!1){const Ct=v.opaque,Mt=v.transmissive;if(l.setupLights(),G.isArrayCamera){const Dt=G.cameras;if(Mt.length>0)for(let Nt=0,jt=Dt.length;Nt<jt;Nt++){const ne=Dt[Nt];rh(Ct,Mt,I,ne)}$t&&Jt.render(I);for(let Nt=0,jt=Dt.length;Nt<jt;Nt++){const ne=Dt[Nt];ih(v,I,ne,ne.viewport)}}else Mt.length>0&&rh(Ct,Mt,I,G),$t&&Jt.render(I),ih(v,I,G)}k!==null&&O===0&&(j.updateMultisampleRenderTarget(k),j.updateRenderTargetMipmap(k)),Y&&b.end(w),I.isScene===!0&&I.onAfterRender(w,I,G),Et.resetDefaultState(),B=-1,$=null,S.pop(),S.length>0?(l=S[S.length-1],j.setTextureUnits(l.state.textureUnits),Rt===!0&&Ot.setGlobalState(w.clippingPlanes,l.state.camera)):l=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,A!==null&&A.renderEnd()};function tl(I,G,J,Y){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLightProbeGrid)l.pushLightProbeGrid(I);else if(I.isLight)l.pushLight(I),I.castShadow&&l.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(wt)){Y&&Xt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Tt);const Ct=it.update(I),Mt=I.material;Mt.visible&&v.push(I,Ct,Mt,J,Xt.z,null,G)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(wt))){const Ct=it.update(I),Mt=I.material;if(Y&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xt.copy(I.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Xt.copy(Ct.boundingSphere.center)),Xt.applyMatrix4(I.matrixWorld).applyMatrix4(Tt)),Array.isArray(Mt)){const Dt=Ct.groups;for(let Nt=0,jt=Dt.length;Nt<jt;Nt++){const ne=Dt[Nt],It=Mt[ne.materialIndex];It&&It.visible&&v.push(I,Ct,It,J,Xt.z,ne,G)}}else Mt.visible&&v.push(I,Ct,Mt,J,Xt.z,null,G)}}const bt=I.children;for(let Ct=0,Mt=bt.length;Ct<Mt;Ct++)tl(bt[Ct],G,J,Y)}function ih(I,G,J,Y){const{opaque:Z,transmissive:bt,transparent:Ct}=I;l.setupLightsView(J),Rt===!0&&Ot.setGlobalState(w.clippingPlanes,J),Y&&P.viewport(W.copy(Y)),Z.length>0&&ro(Z,G,J),bt.length>0&&ro(bt,G,J),Ct.length>0&&ro(Ct,G,J),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function rh(I,G,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(l.state.transmissionRenderTarget[Y.id]===void 0){const It=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");l.state.transmissionRenderTarget[Y.id]=new qn(1,1,{generateMipmaps:!0,type:It?li:wn,minFilter:mr,samples:Math.max(4,N.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}const bt=l.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||W;bt.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const Mt=w.getRenderTarget(),Dt=w.getActiveCubeFace(),Nt=w.getActiveMipmapLevel();w.setRenderTarget(bt),w.getClearColor(gt),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),$t&&Jt.render(J);const jt=w.toneMapping;w.toneMapping=ri;const ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),l.setupLightsView(Y),Rt===!0&&Ot.setGlobalState(w.clippingPlanes,Y),ro(I,J,Y),j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Le=G.length;he<Le;he++){const ye=G[he],{object:me,geometry:tn,material:At,group:cn}=ye;if(At.side===Wn&&me.layers.test(Y.layers)){const ae=At.side;At.side=hn,At.needsUpdate=!0,sh(me,J,Y,tn,At,cn),At.side=ae,At.needsUpdate=!0,It=!0}}It===!0&&(j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt))}w.setRenderTarget(Mt,Dt,Nt),w.setClearColor(gt,ut),ne!==void 0&&(Y.viewport=ne),w.toneMapping=jt}function ro(I,G,J){const Y=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,bt=I.length;Z<bt;Z++){const Ct=I[Z],{object:Mt,geometry:Dt,group:Nt}=Ct;let jt=Ct.material;jt.allowOverride===!0&&Y!==null&&(jt=Y),Mt.layers.test(J.layers)&&sh(Mt,G,J,Dt,jt,Nt)}}function sh(I,G,J,Y,Z,bt){A!==null&&Z.isNodeMaterial&&A.setObject(I,Z),I.onBeforeRender(w,G,J,Y,Z,bt),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(w,G,J,Y,I,bt),Z.transparent===!0&&Z.side===Wn&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,w.renderBufferDirect(J,G,Y,Z,I,bt),Z.side=oi,Z.needsUpdate=!0,w.renderBufferDirect(J,G,Y,Z,I,bt),Z.side=Wn):w.renderBufferDirect(J,G,Y,Z,I,bt),I.onAfterRender(w,G,J,Y,Z,bt)}function so(I,G,J){G.isScene!==!0&&(G=Kt);const Y=X.get(I),Z=l.state.lights,bt=l.state.shadowsArray,Ct=Z.state.version,Mt=mt.getParameters(I,Z.state,bt,G,J,l.state.lightProbeGridArray),Dt=mt.getProgramCacheKey(Mt);let Nt=Y.programs;Y.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const jt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;Y.envMap=dt.get(I.envMap||Y.environment,jt),Y.envMapRotation=Y.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Nt===void 0&&(I.addEventListener("dispose",Zn),Nt=new Map,Y.programs=Nt);let ne=Nt.get(Dt);if(ne!==void 0){if(Y.currentProgram===ne&&Y.lightsStateVersion===Ct)return ah(I,Mt),ne}else Mt.uniforms=mt.getUniforms(I),A!==null&&I.isNodeMaterial&&A.build(I,J,Mt),I.onBeforeCompile(Mt,w),ne=mt.acquireProgram(Mt,Dt),Nt.set(Dt,ne),Y.uniforms=Mt.uniforms;const It=Y.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(It.clippingPlanes=Ot.uniform),ah(I,Mt),Y.needsLights=pg(I),Y.lightsStateVersion=Ct,Y.needsLights&&(It.ambientLightColor.value=Z.state.ambient,It.lightProbe.value=Z.state.probe,It.sunLights.value=Z.state.sun,It.sunLightShadows.value=Z.state.sunShadow,It.directionalLights.value=Z.state.directional,It.directionalLightShadows.value=Z.state.directionalShadow,It.spotLights.value=Z.state.spot,It.spotLightShadows.value=Z.state.spotShadow,It.rectAreaLights.value=Z.state.rectArea,It.ltc_1.value=Z.state.rectAreaLTC1,It.ltc_2.value=Z.state.rectAreaLTC2,It.pointLights.value=Z.state.point,It.pointLightShadows.value=Z.state.pointShadow,It.hemisphereLights.value=Z.state.hemi,It.sunShadowMatrix.value=Z.state.sunShadowMatrix,It.sunShadowCascade.value=Z.state.sunShadowCascade,It.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,It.spotLightMatrix.value=Z.state.spotLightMatrix,It.spotLightMap.value=Z.state.spotLightMap,It.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=l.state.lightProbeGridArray.length>0,Y.currentProgram=ne,Y.uniformsList=null,ne}function oh(I){if(I.uniformsList===null){const G=I.currentProgram.getUniforms();I.uniformsList=ha.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function ah(I,G){const J=X.get(I);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function hg(I,G){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;c.setFromMatrixPosition(G.matrixWorld);for(let J=0,Y=I.length;J<Y;J++){const Z=I[J];if(Z.texture!==null&&Z.boundingBox.containsPoint(c))return Z}return null}function dg(I,G,J,Y,Z){G.isScene!==!0&&(G=Kt),j.resetTextureUnits();const bt=G.fog,Ct=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,Mt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:se.workingColorSpace,Dt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Nt=dt.get(Y.envMap||Ct,Dt),jt=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ne=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!J.morphAttributes.position,he=!!J.morphAttributes.normal,Le=!!J.morphAttributes.color;let ye=ri;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ye=w.toneMapping);const me=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tn=me!==void 0?me.length:0,At=X.get(Y),cn=l.state.lights;if(Rt===!0&&(Ut===!0||I!==$)){const xe=I===$&&Y.id===B;Ot.setState(Y,I,xe)}let ae=!1;Y.version===At.__version?(At.needsLights&&At.lightsStateVersion!==cn.state.version||At.outputColorSpace!==Mt||Z.isBatchedMesh&&At.batching===!1||!Z.isBatchedMesh&&At.batching===!0||Z.isBatchedMesh&&At.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&At.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&At.instancing===!1||!Z.isInstancedMesh&&At.instancing===!0||Z.isSkinnedMesh&&At.skinning===!1||!Z.isSkinnedMesh&&At.skinning===!0||Z.isInstancedMesh&&At.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&At.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&At.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&At.instancingMorph===!1&&Z.morphTexture!==null||At.envMap!==Nt||Y.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ot.numPlanes||At.numIntersection!==Ot.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==ne||At.morphTargets!==It||At.morphNormals!==he||At.morphColors!==Le||At.toneMapping!==ye||At.morphTargetsCount!==tn||!!At.lightProbeGrid!=l.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,At.__version=Y.version);let Pn=At.currentProgram;ae===!0&&(Pn=so(Y,G,Z),A&&Y.isNodeMaterial&&A.onUpdateProgram(Y,Pn,At));let Kn=!1,Ii=!1,Tr=!1;const pe=Pn.getUniforms(),Ae=At.uniforms;if(P.useProgram(Pn.program)&&(Kn=!0,Ii=!0,Tr=!0),Y.id!==B&&(B=Y.id,Ii=!0),At.needsLights){const xe=hg(l.state.lightProbeGridArray,Z);At.lightProbeGrid!==xe&&(At.lightProbeGrid=xe,Ii=!0)}if(Kn||$!==I){P.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),pe.setValue(z,"projectionMatrix",I.projectionMatrix),pe.setValue(z,"viewMatrix",I.matrixWorldInverse);const Ni=pe.map.cameraPosition;Ni!==void 0&&Ni.setValue(z,le.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&pe.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),$!==I&&($=I,Ii=!0,Tr=!0)}if(At.needsLights&&(cn.state.sunShadowMap.length>0&&pe.setValue(z,"sunShadowMap",cn.state.sunShadowMap,j),cn.state.directionalShadowMap.length>0&&pe.setValue(z,"directionalShadowMap",cn.state.directionalShadowMap,j),cn.state.spotShadowMap.length>0&&pe.setValue(z,"spotShadowMap",cn.state.spotShadowMap,j),cn.state.pointShadowMap.length>0&&pe.setValue(z,"pointShadowMap",cn.state.pointShadowMap,j)),Z.isSkinnedMesh){pe.setOptional(z,Z,"bindMatrix"),pe.setOptional(z,Z,"bindMatrixInverse");const xe=Z.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),pe.setValue(z,"boneTexture",xe.boneTexture,j))}Z.isBatchedMesh&&(pe.setOptional(z,Z,"batchingTexture"),pe.setValue(z,"batchingTexture",Z._matricesTexture,j),pe.setOptional(z,Z,"batchingIdTexture"),pe.setValue(z,"batchingIdTexture",Z._indirectTexture,j),pe.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&pe.setValue(z,"batchingColorTexture",Z._colorsTexture,j));const Li=J.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&V.update(Z,J,Pn),(Ii||At.receiveShadow!==Z.receiveShadow)&&(At.receiveShadow=Z.receiveShadow,pe.setValue(z,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(Ae.envMapIntensity.value=G.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=fb()),Ii){if(pe.setValue(z,"toneMappingExposure",w.toneMappingExposure),At.needsLights&&fg(Ae,Tr),bt&&Y.fog===!0&&Ft.refreshFogUniforms(Ae,bt),Ft.refreshMaterialUniforms(Ae,Y,K,q,l.state.transmissionRenderTarget[I.id]),At.needsLights&&At.lightProbeGrid){const xe=At.lightProbeGrid;Ae.probesSH.value=xe.texture,Ae.probesMin.value.copy(xe.boundingBox.min),Ae.probesMax.value.copy(xe.boundingBox.max),Ae.probesResolution.value.copy(xe.resolution)}ha.upload(z,oh(At),Ae,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ha.upload(z,oh(At),Ae,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(z,"center",Z.center),pe.setValue(z,"modelViewMatrix",Z.modelViewMatrix),pe.setValue(z,"normalMatrix",Z.normalMatrix),pe.setValue(z,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const xe=Y.uniformsGroups;for(let Ni=0,Ar=xe.length;Ni<Ar;Ni++){const ch=xe[Ni];lt.update(ch,Pn),lt.bind(ch,Pn)}}return Pn}function fg(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.sunLights.needsUpdate=G,I.sunLightShadows.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function pg(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,G,J){const Y=X.get(I);Y.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(I.texture).__webglTexture=G,X.get(I.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){const J=X.get(I);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,J=0){k=I,F=G,O=J;let Y=null,Z=!1,bt=!1;if(I){const Mt=X.get(I);if(Mt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(z.FRAMEBUFFER,Mt.__webglFramebuffer),W.copy(I.viewport),st.copy(I.scissor),ct=I.scissorTest,P.viewport(W),P.scissor(st),P.setScissorTest(ct),B=-1;return}else if(Mt.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(Mt.__hasExternalTextures)j.rebindTextures(I,X.get(I.texture).__webglTexture,X.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const jt=I.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&X.has(jt)&&(I.width!==jt.image.width||I.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}const Dt=I.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(bt=!0);const Nt=X.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Nt[G])?Y=Nt[G][J]:Y=Nt[G],Z=!0):I.samples>0&&j.useMultisampledRTT(I)===!1?Y=X.get(I).__webglMultisampledFramebuffer:Array.isArray(Nt)?Y=Nt[J]:Y=Nt,W.copy(I.viewport),st.copy(I.scissor),ct=I.scissorTest}else W.copy(ht).multiplyScalar(K).floor(),st.copy(zt).multiplyScalar(K).floor(),ct=Vt;if(J!==0&&(Y=C),P.bindFramebuffer(z.FRAMEBUFFER,Y)&&P.drawBuffers(I,Y),P.viewport(W),P.scissor(st),P.setScissorTest(ct),Z){const Mt=X.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Mt.__webglTexture,J)}else if(bt){const Mt=G;for(let Dt=0;Dt<I.textures.length;Dt++){const Nt=X.get(I.textures[Dt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Dt,Nt.__webglTexture,J,Mt)}}else if(I!==null&&J!==0){const Mt=X.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Mt.__webglTexture,J)}B=-1};function lh(I){const G=X.get(I);return(G.__readFormat!==I.format||G.__readType!==I.type)&&(G.__readFormat=I.format,G.__readType=I.type,G.__formatReadable=N.textureFormatReadable(I.format),G.__typeReadable=N.textureTypeReadable(I.type)),G}this.readRenderTargetPixels=function(I,G,J,Y,Z,bt,Ct,Mt=0){if(!(I&&I.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=X.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){P.bindFramebuffer(z.FRAMEBUFFER,Dt);try{const Nt=I.textures[Mt],jt=Nt.format,ne=Nt.type;I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);const It=lh(Nt);if(It.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-Y&&J>=0&&J<=I.height-Z&&z.readPixels(G,J,Y,Z,vt.convert(jt),vt.convert(ne),bt)}finally{const Nt=k!==null?X.get(k).__webglFramebuffer:null;P.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(I,G,J,Y,Z,bt,Ct,Mt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=X.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(G>=0&&G<=I.width-Y&&J>=0&&J<=I.height-Z){P.bindFramebuffer(z.FRAMEBUFFER,Dt);const Nt=I.textures[Mt],jt=Nt.format,ne=Nt.type;I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Mt);const It=lh(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.bufferData(z.PIXEL_PACK_BUFFER,bt.byteLength,z.STREAM_READ),z.readPixels(G,J,Y,Z,vt.convert(jt),vt.convert(ne),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Le=k!==null?X.get(k).__webglFramebuffer:null;P.bindFramebuffer(z.FRAMEBUFFER,Le);const ye=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await b0(z,ye,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,he),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,bt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(he),z.deleteSync(ye),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,J=0){const Y=Math.pow(2,-J),Z=Math.floor(I.image.width*Y),bt=Math.floor(I.image.height*Y),Ct=G!==null?G.x:0,Mt=G!==null?G.y:0;j.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Ct,Mt,Z,bt),P.unbindTexture()},this.copyTextureToTexture=function(I,G,J=null,Y=null,Z=0,bt=0){let Ct,Mt,Dt,Nt,jt,ne,It,he,Le;const ye=I.isCompressedTexture?I.mipmaps[bt]:I.image;if(J!==null)Ct=J.max.x-J.min.x,Mt=J.max.y-J.min.y,Dt=J.isBox3?J.max.z-J.min.z:1,Nt=J.min.x,jt=J.min.y,ne=J.isBox3?J.min.z:0;else{const Ae=Math.pow(2,-Z);Ct=Math.floor(ye.width*Ae),Mt=Math.floor(ye.height*Ae),I.isDataArrayTexture?Dt=ye.depth:I.isData3DTexture?Dt=Math.floor(ye.depth*Ae):Dt=1,Nt=0,jt=0,ne=0}Y!==null?(It=Y.x,he=Y.y,Le=Y.z):(It=0,he=0,Le=0);const me=vt.convert(G.format),tn=vt.convert(G.type);let At;G.isData3DTexture?(j.setTexture3D(G,0),At=z.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(j.setTexture2DArray(G,0),At=z.TEXTURE_2D_ARRAY):(j.setTexture2D(G,0),At=z.TEXTURE_2D),P.activeTexture(z.TEXTURE0),P.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const cn=P.getParameter(z.UNPACK_ROW_LENGTH),ae=P.getParameter(z.UNPACK_IMAGE_HEIGHT),Pn=P.getParameter(z.UNPACK_SKIP_PIXELS),Kn=P.getParameter(z.UNPACK_SKIP_ROWS),Ii=P.getParameter(z.UNPACK_SKIP_IMAGES);P.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),P.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),P.pixelStorei(z.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(z.UNPACK_SKIP_ROWS,jt),P.pixelStorei(z.UNPACK_SKIP_IMAGES,ne);const Tr=I.isDataArrayTexture||I.isData3DTexture,pe=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){const Ae=X.get(I),Li=X.get(G),xe=X.get(Ae.__renderTarget),Ni=X.get(Li.__renderTarget);P.bindFramebuffer(z.READ_FRAMEBUFFER,xe.__webglFramebuffer),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ar=0;Ar<Dt;Ar++)Tr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(I).__webglTexture,Z,ne+Ar),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.get(G).__webglTexture,bt,Le+Ar)),z.blitFramebuffer(Nt,jt,Ct,Mt,It,he,Ct,Mt,z.DEPTH_BUFFER_BIT,z.NEAREST);P.bindFramebuffer(z.READ_FRAMEBUFFER,null),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||I.isRenderTargetTexture||X.has(I)){const Ae=X.get(I),Li=X.get(G);P.bindFramebuffer(z.READ_FRAMEBUFFER,D),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,L);for(let xe=0;xe<Dt;xe++)Tr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ae.__webglTexture,Z,ne+xe):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ae.__webglTexture,Z),pe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Li.__webglTexture,bt,Le+xe):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Li.__webglTexture,bt),Z!==0?z.blitFramebuffer(Nt,jt,Ct,Mt,It,he,Ct,Mt,z.COLOR_BUFFER_BIT,z.NEAREST):pe?z.copyTexSubImage3D(At,bt,It,he,Le+xe,Nt,jt,Ct,Mt):z.copyTexSubImage2D(At,bt,It,he,Nt,jt,Ct,Mt);P.bindFramebuffer(z.READ_FRAMEBUFFER,null),P.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pe?I.isDataTexture||I.isData3DTexture?z.texSubImage3D(At,bt,It,he,Le,Ct,Mt,Dt,me,tn,ye.data):G.isCompressedArrayTexture?z.compressedTexSubImage3D(At,bt,It,he,Le,Ct,Mt,Dt,me,ye.data):z.texSubImage3D(At,bt,It,he,Le,Ct,Mt,Dt,me,tn,ye):I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,bt,It,he,Ct,Mt,me,tn,ye.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,bt,It,he,ye.width,ye.height,me,ye.data):z.texSubImage2D(z.TEXTURE_2D,bt,It,he,Ct,Mt,me,tn,ye);P.pixelStorei(z.UNPACK_ROW_LENGTH,cn),P.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ae),P.pixelStorei(z.UNPACK_SKIP_PIXELS,Pn),P.pixelStorei(z.UNPACK_SKIP_ROWS,Kn),P.pixelStorei(z.UNPACK_SKIP_IMAGES,Ii),bt===0&&G.generateMipmaps&&z.generateMipmap(At),P.unbindTexture()},this.initRenderTarget=function(I){X.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),P.unbindTexture()},this.resetState=function(){F=0,O=0,k=null,P.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Hp=0,gb=1,mb=2,wd=2,Gl=1.25,Td=1,on=32,ze=on/4,Vp=65535,da=Math.pow(2,-24),zu=Symbol("SKIP_GENERATION"),$p={strategy:Hp,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[zu]:!1};function Te(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function lu(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const r=n[i+3]-n[i];r>e&&(e=r,t=i)}return t}function Ad(n,t){t.set(n)}function Cd(n,t,e){let i,r;for(let s=0;s<3;s++){const o=s+3;i=n[s],r=t[s],e[s]=i<r?i:r,i=n[o],r=t[o],e[o]=i>r?i:r}}function No(n,t,e){for(let i=0;i<3;i++){const r=t[n+2*i],s=t[n+2*i+1],o=r-s,a=r+s;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function Rs(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}function Re(n,t){return t[n+15]===Vp}function Xe(n,t){return t[n+6]}function an(n,t){return t[n+14]}function ke(n){return n+ze}function Ge(n,t){const e=t[n+6];return n+e*ze}function ku(n,t){return t[n+7]}function Hl(n,t,e,i,r){let s=1/0,o=1/0,a=1/0,u=-1/0,h=-1/0,d=-1/0,p=1/0,g=1/0,m=1/0,y=-1/0,M=-1/0,_=-1/0;const x=n.offset||0;for(let E=(t-x)*6,f=(t+e-x)*6;E<f;E+=6){const c=n[E+0],v=n[E+1],l=c-v,R=c+v;l<s&&(s=l),R>u&&(u=R),c<p&&(p=c),c>y&&(y=c);const S=n[E+2],b=n[E+3],w=S-b,T=S+b;w<o&&(o=w),T>h&&(h=T),S<g&&(g=S),S>M&&(M=S);const A=n[E+4],C=n[E+5],D=A-C,L=A+C;D<a&&(a=D),L>d&&(d=L),A<m&&(m=A),A>_&&(_=A)}i[0]=s,i[1]=o,i[2]=a,i[3]=u,i[4]=h,i[5]=d,r[0]=p,r[1]=g,r[2]=m,r[3]=y,r[4]=M,r[5]=_}const yi=32,_b=(n,t)=>n.candidate-t.candidate,ki=new Array(yi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Uo=new Float32Array(6);function xb(n,t,e,i,r,s){let o=-1,a=0;if(s===Hp)o=lu(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===gb)o=lu(n),o!==-1&&(a=vb(e,i,r,o));else if(s===mb){const u=Rs(n);let h=Gl*r;const d=e.offset||0,p=(i-d)*6,g=(i+r-d)*6;for(let m=0;m<3;m++){const y=t[m],x=(t[m+3]-y)/yi;if(r<yi/4){const E=[...ki];E.length=r;let f=0;for(let v=p;v<g;v+=6,f++){const l=E[f];l.candidate=e[v+2*m],l.count=0;const{bounds:R,leftCacheBounds:S,rightCacheBounds:b}=l;for(let w=0;w<3;w++)b[w]=1/0,b[w+3]=-1/0,S[w]=1/0,S[w+3]=-1/0,R[w]=1/0,R[w+3]=-1/0;No(v,e,R)}E.sort(_b);let c=r;for(let v=0;v<c;v++){const l=E[v];for(;v+1<c&&E[v+1].candidate===l.candidate;)E.splice(v+1,1),c--}for(let v=p;v<g;v+=6){const l=e[v+2*m];for(let R=0;R<c;R++){const S=E[R];l>=S.candidate?No(v,e,S.rightCacheBounds):(No(v,e,S.leftCacheBounds),S.count++)}}for(let v=0;v<c;v++){const l=E[v],R=l.count,S=r-l.count,b=l.leftCacheBounds,w=l.rightCacheBounds;let T=0;R!==0&&(T=Rs(b)/u);let A=0;S!==0&&(A=Rs(w)/u);const C=Td+Gl*(T*R+A*S);C<h&&(o=m,h=C,a=l.candidate)}}else{for(let c=0;c<yi;c++){const v=ki[c];v.count=0,v.candidate=y+x+c*x;const l=v.bounds;for(let R=0;R<3;R++)l[R]=1/0,l[R+3]=-1/0}for(let c=p;c<g;c+=6){let R=~~((e[c+2*m]-y)/x);R>=yi&&(R=yi-1);const S=ki[R];S.count++,No(c,e,S.bounds)}const E=ki[yi-1];Ad(E.bounds,E.rightCacheBounds);for(let c=yi-2;c>=0;c--){const v=ki[c],l=ki[c+1];Cd(v.bounds,l.rightCacheBounds,v.rightCacheBounds)}let f=0;for(let c=0;c<yi-1;c++){const v=ki[c],l=v.count,R=v.bounds,b=ki[c+1].rightCacheBounds;l!==0&&(f===0?Ad(R,Uo):Cd(R,Uo,Uo)),f+=l;let w=0,T=0;f!==0&&(w=Rs(Uo)/u);const A=r-f;A!==0&&(T=Rs(b)/u);const C=Td+Gl*(w*f+T*A);C<h&&(o=m,h=C,a=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function vb(n,t,e,i){let r=0;const s=n.offset;for(let o=t,a=t+e;o<a;o++)r+=n[(o-s)*6+i*2];return r/e}class Vl{constructor(){this.boundingData=new Float32Array(6)}}function yb(n,t,e,i,r,s){let o=i,a=i+r-1;const u=s.pos,h=s.axis*2,d=e.offset||0;for(;;){for(;o<=a&&e[(o-d)*6+h]<u;)o++;for(;o<=a&&e[(a-d)*6+h]>=u;)a--;if(o<a){for(let p=0;p<t;p++){let g=n[o*t+p];n[o*t+p]=n[a*t+p],n[a*t+p]=g}for(let p=0;p<6;p++){const g=o-d,m=a-d,y=e[g*6+p];e[g*6+p]=e[m*6+p],e[m*6+p]=y}o++,a--}else return o}}let Wp,fa,cu,Xp;const Sb=Math.pow(2,32);function uu(n){return"count"in n?1:1+uu(n.left)+uu(n.right)}function Mb(n,t,e){return Wp=new Float32Array(e),fa=new Uint32Array(e),cu=new Uint16Array(e),Xp=new Uint8Array(e),hu(n,t)}function hu(n,t){const e=n/4,i=n/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Wp[e+o]=s[o];if(r)return t.buffer?(Xp.set(new Uint8Array(t.buffer),n),n+t.buffer.byteLength):(fa[e+6]=t.offset,cu[i+14]=t.count,cu[i+15]=Vp,n+on);{const{left:o,right:a,splitAxis:u}=t,h=n+on;let d=hu(h,o);const p=n/on,m=d/on-p;if(m>Sb)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return fa[e+6]=m,fa[e+7]=u,hu(d,a)}}function bb(n,t,e,i,r,s){const{maxDepth:o,verbose:a,targetLeafSize:u,_strictLeafSize:h=1/0,strategy:d,onProgress:p}=r,g=n.primitiveBuffer,m=n.primitiveBufferStride,y=new Float32Array(6);let M=!1;const _=new Vl;return Hl(t,e,i,_.boundingData,y),E(_,e,i,y),_;function x(f){p&&p((f-s.offset)/s.count)}function E(f,c,v,l=null,R=0){!M&&R>=o&&(M=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const S=v>h;if(v<=u&&!S||R>=o)return x(c+v),f.offset=c,f.count=v,f;const b=xb(f.boundingData,l,t,c,v,d);let w=b.axis===-1?-1:yb(g,m,t,c,v,b);if(b.axis===-1||w===c||w===c+v){if(!S)return x(c+v),f.offset=c,f.count=v,f;b.axis=Math.max(0,lu(f.boundingData)),w=c+Math.max(1,Math.floor(v/2))}f.splitAxis=b.axis;const T=new Vl,A=c,C=w-c;f.left=T,Hl(t,A,C,T.boundingData,y),E(T,A,C,y,R+1);const D=new Vl,L=w,F=v-C;return f.right=D,Hl(t,L,F,D.boundingData,y),E(D,L,F,y,R+1),f}}function Eb(n,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=n.getRootRanges(t.range),r=i[0],s=i[i.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,n.computePrimitiveBounds(o.offset,o.count,a),n._roots=i.map(u=>{const h=bb(n,a,u.offset,u.count,t,o),d=uu(h),p=new e(on*d);return Mb(0,h,p),p})}class Gu{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class wb{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Me=new wb;let Yi,as;const $r=[],Fo=new Gu(()=>new fn);function Tb(n,t,e,i,r,s){Yi=Fo.getPrimitive(),as=Fo.getPrimitive(),$r.push(Yi,as),Me.setBuffer(n._roots[t]);const o=du(0,n.geometry,e,i,r,s);Me.clearBuffer(),Fo.releasePrimitive(Yi),Fo.releasePrimitive(as),$r.pop(),$r.pop();const a=$r.length;return a>0&&(as=$r[a-1],Yi=$r[a-2]),o}function du(n,t,e,i,r=null,s=0,o=0){const{float32Array:a,uint16Array:u,uint32Array:h}=Me;let d=n*2;if(Re(d,u)){const y=Xe(n,h),M=an(d,u);return Te(n,a,Yi),i(y,M,!1,o,s+n/ze,Yi)}else{let A=function(D){const{uint16Array:L,uint32Array:F}=Me;let O=D*2;for(;!Re(O,L);)D=ke(D),O=D*2;return Xe(D,F)},C=function(D){const{uint16Array:L,uint32Array:F}=Me;let O=D*2;for(;!Re(O,L);)D=Ge(D,F),O=D*2;return Xe(D,F)+an(O,L)};var g=A,m=C;const y=ke(n),M=Ge(n,h);let _=y,x=M,E,f,c,v;if(r&&(c=Yi,v=as,Te(_,a,c),Te(x,a,v),E=r(c),f=r(v),f<E)){_=M,x=y;const D=E;E=f,f=D,c=v}c||(c=Yi,Te(_,a,c));const l=Re(_*2,u),R=e(c,l,E,o+1,s+_/ze);let S;if(R===wd){const D=A(_),F=C(_)-D;S=i(D,F,!0,o+1,s+_/ze,c)}else S=R&&du(_,t,e,i,r,s,o+1);if(S)return!0;v=as,Te(x,a,v);const b=Re(x*2,u),w=e(v,b,f,o+1,s+x/ze);let T;if(w===wd){const D=A(x),F=C(x)-D;T=i(D,F,!0,o+1,s+x/ze,v)}else T=w&&du(x,t,e,i,r,s,o+1);return!!T}}const Vs=new Me.constructor,La=new Me.constructor,Hi=new Gu(()=>new fn),Wr=new fn,Xr=new fn,$l=new fn,Wl=new fn;let Xl=!1;function Ab(n,t,e,i){if(Xl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Xl=!0;const r=n._roots,s=t._roots;let o,a=0,u=0;const h=new re().copy(e).invert();for(let d=0,p=r.length;d<p;d++){Vs.setBuffer(r[d]),u=0;const g=Hi.getPrimitive();Te(0,Vs.float32Array,g),g.applyMatrix4(h);for(let m=0,y=s.length;m<y&&(La.setBuffer(s[m]),o=$n(0,0,e,h,i,a,u,0,0,g),La.clearBuffer(),u+=s[m].byteLength/on,!o);m++);if(Hi.releasePrimitive(g),Vs.clearBuffer(),a+=r[d].byteLength/on,o)break}return Xl=!1,o}function $n(n,t,e,i,r,s=0,o=0,a=0,u=0,h=null,d=!1){let p,g;d?(p=La,g=Vs):(p=Vs,g=La);const m=p.float32Array,y=p.uint32Array,M=p.uint16Array,_=g.float32Array,x=g.uint32Array,E=g.uint16Array,f=n*2,c=t*2,v=Re(f,M),l=Re(c,E);let R=!1;if(l&&v)d?R=r(Xe(t,x),an(t*2,E),Xe(n,y),an(n*2,M),u,o+t/ze,a,s+n/ze):R=r(Xe(n,y),an(n*2,M),Xe(t,x),an(t*2,E),a,s+n/ze,u,o+t/ze);else if(l){const S=Hi.getPrimitive();Te(t,_,S),S.applyMatrix4(e);const b=ke(n),w=Ge(n,y);Te(b,m,Wr),Te(w,m,Xr);const T=S.intersectsBox(Wr),A=S.intersectsBox(Xr);R=T&&$n(t,b,i,e,r,o,s,u,a+1,S,!d)||A&&$n(t,w,i,e,r,o,s,u,a+1,S,!d),Hi.releasePrimitive(S)}else{const S=ke(t),b=Ge(t,x);Te(S,_,$l),Te(b,_,Wl);const w=h.intersectsBox($l),T=h.intersectsBox(Wl);if(w&&T)R=$n(n,S,e,i,r,s,o,a,u+1,h,d)||$n(n,b,e,i,r,s,o,a,u+1,h,d);else if(w)if(v)R=$n(n,S,e,i,r,s,o,a,u+1,h,d);else{const A=Hi.getPrimitive();A.copy($l).applyMatrix4(e);const C=ke(n),D=Ge(n,y);Te(C,m,Wr),Te(D,m,Xr);const L=A.intersectsBox(Wr),F=A.intersectsBox(Xr);R=L&&$n(S,C,i,e,r,o,s,u,a+1,A,!d)||F&&$n(S,D,i,e,r,o,s,u,a+1,A,!d),Hi.releasePrimitive(A)}else if(T)if(v)R=$n(n,b,e,i,r,s,o,a,u+1,h,d);else{const A=Hi.getPrimitive();A.copy(Wl).applyMatrix4(e);const C=ke(n),D=Ge(n,y);Te(C,m,Wr),Te(D,m,Xr);const L=A.intersectsBox(Wr),F=A.intersectsBox(Xr);R=L&&$n(b,C,i,e,r,o,s,u,a+1,A,!d)||F&&$n(b,D,i,e,r,o,s,u,a+1,A,!d),Hi.releasePrimitive(A)}}return R}const ql=new class{constructor(){let n=null,t=null,e=null,i=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(i)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=n=s._roots[o],this.uint16Array=e=new Uint16Array(n),this.uint32Array=t=new Uint32Array(n)},this.reset=()=>{this.root=null,this.buffer=n=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!Re(o,e);)s=ke(s),o=s*2;return Xe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!Re(o,e);)s=Ge(s,t),o=s*2;return Xe(s,t)+an(o,e)};const r=(s,o,a)=>{const u=o*2,h=Re(u,e);if(!s(a,h,o)&&!h){const p=ke(o),g=Ge(o,t);r(s,p,a+1),r(s,g,a+1)}};this.traverseBuffer=s=>{if(i)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");i=!0;try{r(s,0,0)}finally{i=!1}},this.traverse=s=>{this.traverseBuffer((o,a,u)=>{if(a){const h=u*2,d=t[u+6],p=e[h+14];return s(o,a,new Float32Array(n,u*4,6),d,p)}else{const h=ku(u,t);return s(o,a,new Float32Array(n,u*4,6),h)}})}}},Rd=new fn,qr=new Float32Array(6);class Cb{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...$p,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Eb(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,i,r){let s=1/0,o=1/0,a=1/0,u=-1/0,h=-1/0,d=-1/0;for(let p=t,g=t+e;p<g;p++){this.writePrimitiveBounds(p,qr,0);const[m,y,M,_,x,E]=qr;m<s&&(s=m),_>u&&(u=_),y<o&&(o=y),x>h&&(h=x),M<a&&(a=M),E>d&&(d=E)}return i[r+0]=s,i[r+1]=o,i[r+2]=a,i[r+3]=u,i[r+4]=h,i[r+5]=d,i}computePrimitiveBounds(t,e,i){const r=i.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,qr,0);const[a,u,h,d,p,g]=qr,m=(a+d)/2,y=(u+p)/2,M=(h+g)/2,_=(d-a)/2,x=(p-u)/2,E=(g-h)/2,f=(s-r)*6;i[f+0]=m,i[f+1]=_+(Math.abs(m)+_)*da,i[f+2]=y,i[f+3]=x+(Math.abs(y)+x)*da,i[f+4]=M,i[f+5]=E+(Math.abs(M)+E)*da}return i}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let i=0,r=e.length;i<r;i++)e[i]+=t;else{const i=this._roots;for(let r=0;r<i.length;r++){const s=i[r],o=new Uint32Array(s),a=new Uint16Array(s),u=s.byteLength/on;for(let h=0;h<u;h++){const d=ze*h,p=2*d;Re(p,a)&&(o[d+6]+=t)}}}}traverse(t,e=0){ql.setBVH(this,e),ql.traverse(t),ql.reset()}refit(){const t=this._roots;for(let e=0,i=t.length;e<i;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),u=r.byteLength/on;for(let h=u-1;h>=0;h--){const d=h*ze,p=d*2;if(Re(p,o)){const m=Xe(d,s),y=an(p,o);this.writePrimitiveRangeBounds(m,y,qr,0),a.set(qr,d)}else{const m=ke(d),y=Ge(d,s);for(let M=0;M<3;M++){const _=a[m+M],x=a[m+M+3],E=a[y+M],f=a[y+M+3];a[d+M]=_<E?_:E,a[d+M+3]=x>f?x:f}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{Te(0,new Float32Array(i),Rd),t.union(Rd)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:i,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const p=r;r=(g,m,y,M,_)=>p(g,m,y,M,_)?!0:a(g,m,this,s,y,M,o)}else r||(s?r=(p,g,m,y)=>a(p,g,this,s,m,y,o):r=(p,g,m)=>m);let u=!1,h=0;const d=this._roots;for(let p=0,g=d.length;p<g;p++){const m=d[p];if(u=Tb(this,p,i,r,e,h),u)break;h+=m.byteLength/on}return u}bvhcast(t,e,i){let{intersectsRanges:r}=i;return Ab(this,t,e,r)}}function Rb(){return typeof SharedArrayBuffer<"u"}function Hu(n){return n.index?n.index.count:n.attributes.position.count}function Ya(n){return Hu(n)/3}function Pb(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function Db(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Pb(e,i);n.setIndex(new An(r,1));for(let s=0;s<e;s++)r[s]=s}}function Ib(n,t,e){const i=Hu(n)/e,r=t||n.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),u=Math.min(i,o)-a;return{offset:Math.floor(a),count:Math.floor(u)}}function Lb(n,t){return n.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Pd(n,t,e){const i=Ib(n,t,e),r=Lb(n,e);if(!r.length)return[i];const s=[],o=i.offset,a=i.offset+i.count,u=Hu(n)/e,h=[];for(const g of r){const{offset:m,count:y}=g,M=m,_=isFinite(y)?y:u-m,x=m+_;M<a&&x>o&&(h.push({pos:Math.max(o,M),isStart:!0}),h.push({pos:Math.min(a,x),isStart:!1}))}h.sort((g,m)=>g.pos!==m.pos?g.pos-m.pos:g.type==="end"?-1:1);let d=0,p=null;for(const g of h){const m=g.pos;d!==0&&m!==p&&s.push({offset:p,count:m-p}),d+=g.isStart?1:-1,p=m}return s}function Nb(n,t){const e=n[n.length-1],i=e.offset+e.count>2**16,r=n.reduce((h,d)=>h+d.count,0),s=i?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=i?new Uint32Array(o):new Uint16Array(o);let u=0;for(let h=0;h<n.length;h++){const{offset:d,count:p}=n[h];for(let g=0;g<p;g++)a[u+g]=d+g;u+=p}return a}class Ub extends Cb{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Rb())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...$p,...e},e[zu]||this.init(e)}init(t){const{geometry:e,primitiveStride:i}=this;if(t.indirect){const r=Pd(e,t.range,i),s=Nb(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Db(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new fn))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Pd(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Pi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const u=t[s][e];i=u<i?u:i,r=u>r?u:r}this.min=i,this.max=r}setFromPoints(t,e){let i=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],u=t.dot(a);i=u<i?u:i,r=u>r?u:r}this.min=i,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Pi.prototype.setFromBox=(function(){const n=new U;return function(e,i){const r=i.min,s=i.max;let o=1/0,a=-1/0;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){n.x=r.x*u+s.x*(1-u),n.y=r.y*h+s.y*(1-h),n.z=r.z*d+s.z*(1-d);const p=e.dot(n);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();const Fb=(function(){const n=new U,t=new U,e=new U;return function(r,s,o){const a=r.start,u=n,h=s.start,d=t;e.subVectors(a,h),n.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const p=e.dot(d),g=d.dot(u),m=d.dot(d),y=e.dot(u),_=u.dot(u)*m-g*g;let x,E;_!==0?x=(p*g-y*m)/_:x=0,E=(p+x*g)/m,o.x=x,o.y=E}})(),Vu=(function(){const n=new kt,t=new U,e=new U;return function(r,s,o,a){Fb(r,s,n);let u=n.x,h=n.y;if(u>=0&&u<=1&&h>=0&&h<=1){r.at(u,o),s.at(h,a);return}else if(u>=0&&u<=1){h<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let d;u<0?d=r.start:d=r.end;let p;h<0?p=s.start:p=s.end;const g=t,m=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(d,!0,e),g.distanceToSquared(p)<=m.distanceToSquared(d)){o.copy(g),a.copy(p);return}else{o.copy(d),a.copy(m);return}}}})(),Ob=(function(){const n=new U,t=new U,e=new En,i=new Ze;return function(s,o){const{radius:a,center:u}=s,{a:h,b:d,c:p}=o;if(i.start=h,i.end=d,i.closestPointToPoint(u,!0,n).distanceTo(u)<=a||(i.start=h,i.end=p,i.closestPointToPoint(u,!0,n).distanceTo(u)<=a)||(i.start=d,i.end=p,i.closestPointToPoint(u,!0,n).distanceTo(u)<=a))return!0;const M=o.getPlane(e);if(Math.abs(M.distanceToPoint(u))<=a){const x=M.projectPoint(u,t);if(o.containsPoint(x))return!0}return!1}})(),Bb=["x","y","z"],Mi=1e-15,Dd=Mi*Mi;function In(n){return Math.abs(n)<Mi}class yn extends Se{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new Pi),this.points=[this.a,this.b,this.c],this.plane=new En,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ze,this.needsUpdate=!0}intersectsSphere(t){return Ob(t,this)}update(){const t=this.a,e=this.b,i=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],u=o[0];this.getNormal(a),u.setFromPoints(a,r);const h=s[1],d=o[1];h.subVectors(t,e),d.setFromPoints(h,r);const p=s[2],g=o[2];p.subVectors(e,i),g.setFromPoints(p,r);const m=s[3],y=o[3];m.subVectors(i,t),y.setFromPoints(m,r);const M=h.length(),_=p.length(),x=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,M<Mi?_<Mi||x<Mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(i)):_<Mi?x<Mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):x<Mi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}yn.prototype.closestPointToSegment=(function(){const n=new U,t=new U,e=new Ze;return function(r,s=null,o=null){const{start:a,end:u}=r,h=this.points;let d,p=1/0;for(let g=0;g<3;g++){const m=(g+1)%3;e.start.copy(h[g]),e.end.copy(h[m]),Vu(e,r,n,t),d=n.distanceToSquared(t),d<p&&(p=d,s&&s.copy(n),o&&o.copy(t))}return this.closestPointToPoint(a,n),d=a.distanceToSquared(n),d<p&&(p=d,s&&s.copy(n),o&&o.copy(a)),this.closestPointToPoint(u,n),d=u.distanceToSquared(n),d<p&&(p=d,s&&s.copy(n),o&&o.copy(u)),Math.sqrt(p)}})();yn.prototype.intersectsTriangle=(function(){const n=new yn,t=new Pi,e=new Pi,i=new U,r=new U,s=new U,o=new U,a=new Ze,u=new Ze,h=new U,d=new kt,p=new kt;function g(f,c,v,l){const R=i;!f.isDegenerateIntoPoint&&!f.isDegenerateIntoSegment?R.copy(f.plane.normal):R.copy(c.plane.normal);const S=f.satBounds,b=f.satAxes;for(let A=1;A<4;A++){const C=S[A],D=b[A];if(t.setFromPoints(D,c.points),C.isSeparated(t)||(o.copy(R).cross(D),t.setFromPoints(o,f.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}const w=c.satBounds,T=c.satAxes;for(let A=1;A<4;A++){const C=w[A],D=T[A];if(t.setFromPoints(D,f.points),C.isSeparated(t)||(o.crossVectors(R,D),t.setFromPoints(o,f.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return v&&(l||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function m(f,c,v,l,R,S,b,w,T,A,C){let D=b/(b-w);A.x=l+(R-l)*D,C.start.subVectors(c,f).multiplyScalar(D).add(f),D=b/(b-T),A.y=l+(S-l)*D,C.end.subVectors(v,f).multiplyScalar(D).add(f)}function y(f,c,v,l,R,S,b,w,T,A,C){if(R>0)m(f.c,f.a,f.b,l,c,v,T,b,w,A,C);else if(S>0)m(f.b,f.a,f.c,v,c,l,w,b,T,A,C);else if(w*T>0||b!=0)m(f.a,f.b,f.c,c,v,l,b,w,T,A,C);else if(w!=0)m(f.b,f.a,f.c,v,c,l,w,b,T,A,C);else if(T!=0)m(f.c,f.a,f.b,l,c,v,T,b,w,A,C);else return!0;return!1}function M(f,c,v,l){const R=c.degenerateSegment,S=f.plane.distanceToPoint(R.start),b=f.plane.distanceToPoint(R.end);return In(S)?In(b)?g(f,c,v,l):(v&&(v.start.copy(R.start),v.end.copy(R.start)),f.containsPoint(R.start)):In(b)?(v&&(v.start.copy(R.end),v.end.copy(R.end)),f.containsPoint(R.end)):f.plane.intersectLine(R,i)!=null?(v&&(v.start.copy(i),v.end.copy(i)),f.containsPoint(i)):!1}function _(f,c,v){const l=c.a;return In(f.plane.distanceToPoint(l))&&f.containsPoint(l)?(v&&(v.start.copy(l),v.end.copy(l)),!0):!1}function x(f,c,v){const l=f.degenerateSegment,R=c.a;return l.closestPointToPoint(R,!0,i),R.distanceToSquared(i)<Dd?(v&&(v.start.copy(R),v.end.copy(R)),!0):!1}function E(f,c,v,l){if(f.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){const R=f.degenerateSegment,S=c.degenerateSegment,b=r,w=s;R.delta(b),S.delta(w);const T=i.subVectors(S.start,R.start),A=b.x*w.y-b.y*w.x;if(In(A))return!1;const C=(T.x*w.y-T.y*w.x)/A,D=-(b.x*T.y-b.y*T.x)/A;if(C<0||C>1||D<0||D>1)return!1;const L=R.start.z+b.z*C,F=S.start.z+w.z*D;return In(L-F)?(v&&(v.start.copy(R.start).addScaledVector(b,C),v.end.copy(R.start).addScaledVector(b,C)),!0):!1}else return c.isDegenerateIntoPoint?x(f,c,v):M(c,f,v,l);else{if(f.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(f.a)<Dd?(v&&(v.start.copy(f.a),v.end.copy(f.a)),!0):!1:c.isDegenerateIntoSegment?x(c,f,v):_(c,f,v);if(c.isDegenerateIntoPoint)return _(f,c,v);if(c.isDegenerateIntoSegment)return M(f,c,v,l)}}return function(c,v=null,l=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(n.copy(c),n.update(),c=n);const R=E(this,c,v,l);if(R!==void 0)return R;const S=this.plane,b=c.plane;let w=b.distanceToPoint(this.a),T=b.distanceToPoint(this.b),A=b.distanceToPoint(this.c);In(w)&&(w=0),In(T)&&(T=0),In(A)&&(A=0);const C=w*T,D=w*A;if(C>0&&D>0)return!1;let L=S.distanceToPoint(c.a),F=S.distanceToPoint(c.b),O=S.distanceToPoint(c.c);In(L)&&(L=0),In(F)&&(F=0),In(O)&&(O=0);const k=L*F,B=L*O;if(k>0&&B>0)return!1;r.copy(S.normal),s.copy(b.normal);const $=r.cross(s);let W=0,st=Math.abs($.x);const ct=Math.abs($.y);ct>st&&(st=ct,W=1),Math.abs($.z)>st&&(W=2);const ut=Bb[W],ot=this.a[ut],q=this.b[ut],K=this.c[ut],at=c.a[ut],ft=c.b[ut],ht=c.c[ut];if(y(this,ot,q,K,C,D,w,T,A,d,a))return g(this,c,v,l);if(y(c,at,ft,ht,k,B,L,F,O,p,u))return g(this,c,v,l);if(d.y<d.x){const zt=d.y;d.y=d.x,d.x=zt,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(p.y<p.x){const zt=p.y;p.y=p.x,p.x=zt,h.copy(u.start),u.start.copy(u.end),u.end.copy(h)}return d.y<p.x||p.y<d.x?!1:(v&&(p.x>d.x?v.start.copy(u.start):v.start.copy(a.start),p.y<d.y?v.end.copy(u.end):v.end.copy(a.end)),!0)}})();yn.prototype.distanceToPoint=(function(){const n=new U;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}})();yn.prototype.distanceToTriangle=(function(){const n=new U,t=new U,e=["a","b","c"],i=new Ze,r=new Ze;return function(o,a=null,u=null){const h=a||u?i:null;if(this.intersectsTriangle(o,h,!0))return(a||u)&&(a&&h.getCenter(a),u&&h.getCenter(u)),0;let d=1/0;for(let p=0;p<3;p++){let g;const m=e[p],y=o[m];this.closestPointToPoint(y,n),g=y.distanceToSquared(n),g<d&&(d=g,a&&a.copy(n),u&&u.copy(y));const M=this[m];o.closestPointToPoint(M,n),g=M.distanceToSquared(n),g<d&&(d=g,a&&a.copy(M),u&&u.copy(n))}for(let p=0;p<3;p++){const g=e[p],m=e[(p+1)%3];i.set(this[g],this[m]);for(let y=0;y<3;y++){const M=e[y],_=e[(y+1)%3];r.set(o[M],o[_]),Vu(i,r,n,t);const x=n.distanceToSquared(t);x<d&&(d=x,a&&a.copy(n),u&&u.copy(t))}}return Math.sqrt(d)}})();class pn{constructor(t,e,i){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new re,this.invMatrix=new re,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new Pi),this.alignedSatBounds=new Array(3).fill().map(()=>new Pi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}pn.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,i=this.max,r=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){const g=1*h|2*d|4*p,m=r[g];m.x=h?i.x:e.x,m.y=d?i.y:e.y,m.z=p?i.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let h=0;h<3;h++){const d=o[h],p=s[h],g=1<<h,m=r[g];d.subVectors(a,m),p.setFromPoints(d,r)}const u=this.alignedSatBounds;u[0].setFromPointsField(r,"x"),u[1].setFromPointsField(r,"y"),u[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();pn.prototype.intersectsBox=(function(){const n=new Pi;return function(e){this.needsUpdate&&this.update();const i=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=r.x,a[0].isSeparated(n)||(n.min=i.y,n.max=r.y,a[1].isSeparated(n))||(n.min=i.z,n.max=r.z,a[2].isSeparated(n)))return!1;for(let u=0;u<3;u++){const h=o[u],d=s[u];if(n.setFromBox(h,e),d.isSeparated(n))return!1}return!0}})();pn.prototype.intersectsTriangle=(function(){const n=new yn,t=new Array(3),e=new Pi,i=new Pi,r=new U;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,u=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let g=0;g<3;g++){const m=a[g],y=u[g];if(e.setFromPoints(y,t),m.isSeparated(e))return!1}const h=o.satBounds,d=o.satAxes,p=this.points;for(let g=0;g<3;g++){const m=h[g],y=d[g];if(e.setFromPoints(y,p),m.isSeparated(e))return!1}for(let g=0;g<3;g++){const m=u[g];for(let y=0;y<4;y++){const M=d[y];if(r.crossVectors(m,M),e.setFromPoints(r,t),i.setFromPoints(r,p),e.isSeparated(i))return!1}}return!0}})();pn.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();pn.prototype.distanceToPoint=(function(){const n=new U;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}})();pn.prototype.distanceToBox=(function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new Ze),e=new Array(12).fill().map(()=>new Ze),i=new U,r=new U;return function(o,a=0,u=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(u||h)&&(o.getCenter(r),this.closestPointToPoint(r,i),o.closestPointToPoint(i,r),u&&u.copy(i),h&&h.copy(r)),0;const d=a*a,p=o.min,g=o.max,m=this.points;let y=1/0;for(let _=0;_<8;_++){const x=m[_];r.copy(x).clamp(p,g);const E=x.distanceToSquared(r);if(E<y&&(y=E,u&&u.copy(x),h&&h.copy(r),E<d))return Math.sqrt(E)}let M=0;for(let _=0;_<3;_++)for(let x=0;x<=1;x++)for(let E=0;E<=1;E++){const f=(_+1)%3,c=(_+2)%3,v=x<<f|E<<c,l=1<<_|x<<f|E<<c,R=m[v],S=m[l];t[M].set(R,S);const w=n[_],T=n[f],A=n[c],C=e[M],D=C.start,L=C.end;D[w]=p[w],D[T]=x?p[T]:g[T],D[A]=E?p[A]:g[T],L[w]=g[w],L[T]=x?p[T]:g[T],L[A]=E?p[A]:g[T],M++}for(let _=0;_<=1;_++)for(let x=0;x<=1;x++)for(let E=0;E<=1;E++){r.x=_?g.x:p.x,r.y=x?g.y:p.y,r.z=E?g.z:p.z,this.closestPointToPoint(r,i);const f=r.distanceToSquared(i);if(f<y&&(y=f,u&&u.copy(i),h&&h.copy(r),f<d))return Math.sqrt(f)}for(let _=0;_<12;_++){const x=t[_];for(let E=0;E<12;E++){const f=e[E];Vu(x,f,i,r);const c=i.distanceToSquared(r);if(c<y&&(y=c,u&&u.copy(i),h&&h.copy(r),c<d))return Math.sqrt(c)}}return Math.sqrt(y)}})();class zb extends Gu{constructor(){super(()=>new yn)}}const On=new zb,Ps=new U,Yl=new U;function kb(n,t,e={},i=0,r=1/0){const s=i*i,o=r*r;let a=1/0,u=null;if(n.shapecast({boundsTraverseOrder:d=>(Ps.copy(t).clamp(d.min,d.max),Ps.distanceToSquared(t)),intersectsBounds:(d,p,g)=>g<a&&g<o,intersectsTriangle:(d,p)=>{d.closestPointToPoint(t,Ps);const g=t.distanceToSquared(Ps);return g<a&&(Yl.copy(Ps),a=g,u=p),g<s}}),a===1/0)return null;const h=Math.sqrt(a);return e.point?e.point.copy(Yl):e.point=Yl.clone(),e.distance=h,e.faceIndex=u,e}const Oo=parseInt(no)>=169,Gb=parseInt(no)<=161,cr=new U,ur=new U,hr=new U,Bo=new kt,zo=new kt,ko=new kt,Id=new U,Ld=new U,Nd=new U,Ds=new U;function Hb(n,t,e,i,r,s,o,a){let u;if(s===hn?u=n.intersectTriangle(i,e,t,!0,r):u=n.intersectTriangle(t,e,i,s!==Wn,r),u===null)return null;const h=n.origin.distanceTo(r);return h<o||h>a?null:{distance:h,point:r.clone()}}function Ud(n,t,e,i,r,s,o,a,u,h,d){cr.fromBufferAttribute(t,s),ur.fromBufferAttribute(t,o),hr.fromBufferAttribute(t,a);const p=Hb(n,cr,ur,hr,Ds,u,h,d);if(p){if(i){Bo.fromBufferAttribute(i,s),zo.fromBufferAttribute(i,o),ko.fromBufferAttribute(i,a),p.uv=new kt;const m=Se.getInterpolation(Ds,cr,ur,hr,Bo,zo,ko,p.uv);Oo||(p.uv=m)}if(r){Bo.fromBufferAttribute(r,s),zo.fromBufferAttribute(r,o),ko.fromBufferAttribute(r,a),p.uv1=new kt;const m=Se.getInterpolation(Ds,cr,ur,hr,Bo,zo,ko,p.uv1);Oo||(p.uv1=m),Gb&&(p.uv2=p.uv1)}if(e){Id.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,o),Nd.fromBufferAttribute(e,a),p.normal=new U;const m=Se.getInterpolation(Ds,cr,ur,hr,Id,Ld,Nd,p.normal);p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1),Oo||(p.normal=m)}const g={a:s,b:o,c:a,normal:new U,materialIndex:0};if(Se.getNormal(cr,ur,hr,g.normal),p.face=g,p.faceIndex=s,Oo){const m=new U;Se.getBarycoord(Ds,cr,ur,hr,m),p.barycoord=m}}return p}function Fd(n){return n&&n.isMaterial?n.side:n}function Za(n,t,e,i,r,s,o){const a=i*3;let u=a+0,h=a+1,d=a+2;const{index:p,groups:g}=n;n.index&&(u=p.getX(u),h=p.getX(h),d=p.getX(d));const{position:m,normal:y,uv:M,uv1:_}=n.attributes;if(Array.isArray(t)){const x=i*3;for(let E=0,f=g.length;E<f;E++){const{start:c,count:v,materialIndex:l}=g[E];if(x>=c&&x<c+v){const R=Fd(t[l]),S=Ud(e,m,y,M,_,u,h,d,R,s,o);if(S)if(S.faceIndex=i,S.face.materialIndex=l,r)r.push(S);else return S}}}else{const x=Fd(t),E=Ud(e,m,y,M,_,u,h,d,x,s,o);if(E)if(E.faceIndex=i,E.face.materialIndex=0,r)r.push(E);else return E}return null}function Fe(n,t,e,i){const r=n.a,s=n.b,o=n.c;let a=t,u=t+1,h=t+2;e&&(a=e.getX(a),u=e.getX(u),h=e.getX(h)),r.x=i.getX(a),r.y=i.getY(a),r.z=i.getZ(a),s.x=i.getX(u),s.y=i.getY(u),s.z=i.getZ(u),o.x=i.getX(h),o.y=i.getY(h),o.z=i.getZ(h)}function Vb(n,t,e,i,r,s,o,a){const{geometry:u,_indirectBuffer:h}=n;for(let d=i,p=i+r;d<p;d++)Za(u,t,e,d,s,o,a)}function $b(n,t,e,i,r,s,o){const{geometry:a,_indirectBuffer:u}=n;let h=1/0,d=null;for(let p=i,g=i+r;p<g;p++){let m;m=Za(a,t,e,p,null,s,o),m&&m.distance<h&&(d=m,h=m.distance)}return d}function Wb(n,t,e,i,r,s,o){const{geometry:a}=e,{index:u}=a,h=a.attributes.position;for(let d=n,p=t+n;d<p;d++){let g;if(g=d,Fe(o,g*3,u,h),o.needsUpdate=!0,i(o,g,r,s))return!0}return!1}function Xb(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,u,h=0;const d=n._roots;for(let g=0,m=d.length;g<m;g++)s=d[g],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),p(0,h),h+=s.byteLength;function p(g,m,y=!1){const M=g*2;if(Re(M,a)){const _=Xe(g,o),x=an(M,a);let E=1/0,f=1/0,c=1/0,v=-1/0,l=-1/0,R=-1/0;for(let S=3*_,b=3*(_+x);S<b;S++){let w=i[S];const T=r.getX(w),A=r.getY(w),C=r.getZ(w);T<E&&(E=T),T>v&&(v=T),A<f&&(f=A),A>l&&(l=A),C<c&&(c=C),C>R&&(R=C)}return u[g+0]!==E||u[g+1]!==f||u[g+2]!==c||u[g+3]!==v||u[g+4]!==l||u[g+5]!==R?(u[g+0]=E,u[g+1]=f,u[g+2]=c,u[g+3]=v,u[g+4]=l,u[g+5]=R,!0):!1}else{const _=ke(g),x=Ge(g,o);let E=y,f=!1,c=!1;if(t){if(!E){const w=_/ze+m/on,T=x/ze+m/on;f=t.has(w),c=t.has(T),E=!f&&!c}}else f=!0,c=!0;const v=E||f,l=E||c;let R=!1;v&&(R=p(_,m,E));let S=!1;l&&(S=p(x,m,E));const b=R||S;if(b)for(let w=0;w<3;w++){const T=_+w,A=x+w,C=u[T],D=u[T+3],L=u[A],F=u[A+3];u[g+w]=C<L?C:L,u[g+w+3]=D>F?D:F}return b}}}function Qi(n,t,e,i,r){let s,o,a,u,h,d;const p=1/e.direction.x,g=1/e.direction.y,m=1/e.direction.z,y=e.origin.x,M=e.origin.y,_=e.origin.z;let x=t[n],E=t[n+3],f=t[n+1],c=t[n+3+1],v=t[n+2],l=t[n+3+2];return p>=0?(s=(x-y)*p,o=(E-y)*p):(s=(E-y)*p,o=(x-y)*p),g>=0?(a=(f-M)*g,u=(c-M)*g):(a=(c-M)*g,u=(f-M)*g),s>u||a>o||((a>s||isNaN(s))&&(s=a),(u<o||isNaN(o))&&(o=u),m>=0?(h=(v-_)*m,d=(l-_)*m):(h=(l-_)*m,d=(v-_)*m),s>d||h>o)?!1:((h>s||s!==s)&&(s=h),(d<o||o!==o)&&(o=d),s<=r&&o>=i)}function qb(n,t,e,i,r,s,o,a){const{geometry:u,_indirectBuffer:h}=n;for(let d=i,p=i+r;d<p;d++){let g=h?h[d]:d;Za(u,t,e,g,s,o,a)}}function Yb(n,t,e,i,r,s,o){const{geometry:a,_indirectBuffer:u}=n;let h=1/0,d=null;for(let p=i,g=i+r;p<g;p++){let m;m=Za(a,t,e,u?u[p]:p,null,s,o),m&&m.distance<h&&(d=m,h=m.distance)}return d}function Zb(n,t,e,i,r,s,o){const{geometry:a}=e,{index:u}=a,h=a.attributes.position;for(let d=n,p=t+n;d<p;d++){let g;if(g=e.resolveTriangleIndex(d),Fe(o,g*3,u,h),o.needsUpdate=!0,i(o,g,r,s))return!0}return!1}function Kb(n,t,e,i,r,s,o){Me.setBuffer(n._roots[t]),fu(0,n,e,i,r,s,o),Me.clearBuffer()}function fu(n,t,e,i,r,s,o){const{float32Array:a,uint16Array:u,uint32Array:h}=Me,d=n*2;if(Re(d,u)){const g=Xe(n,h),m=an(d,u);Vb(t,e,i,g,m,r,s,o)}else{const g=ke(n);Qi(g,a,i,s,o)&&fu(g,t,e,i,r,s,o);const m=Ge(n,h);Qi(m,a,i,s,o)&&fu(m,t,e,i,r,s,o)}}const Jb=["x","y","z"];function jb(n,t,e,i,r,s){Me.setBuffer(n._roots[t]);const o=pu(0,n,e,i,r,s);return Me.clearBuffer(),o}function pu(n,t,e,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:u}=Me;let h=n*2;if(Re(h,a)){const p=Xe(n,u),g=an(h,a);return $b(t,e,i,p,g,r,s)}else{const p=ku(n,u),g=Jb[p],y=i.direction[g]>=0;let M,_;y?(M=ke(n),_=Ge(n,u)):(M=Ge(n,u),_=ke(n));const E=Qi(M,o,i,r,s)?pu(M,t,e,i,r,s):null;if(E){const v=E.point[g];if(y?v<=o[_+p]:v>=o[_+p+3])return E}const c=Qi(_,o,i,r,s)?pu(_,t,e,i,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const Go=new fn,Yr=new yn,Zr=new yn,Is=new re,Od=new pn,Ho=new pn;function Qb(n,t,e,i){Me.setBuffer(n._roots[t]);const r=gu(0,n,e,i);return Me.clearBuffer(),r}function gu(n,t,e,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=Me;let u=n*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Od.set(e.boundingBox.min,e.boundingBox.max,i),r=Od),Re(u,o)){const d=t.geometry,p=d.index,g=d.attributes.position,m=e.index,y=e.attributes.position,M=Xe(n,a),_=an(u,o);if(Is.copy(i).invert(),e.boundsTree)return Te(n,s,Ho),Ho.matrix.copy(Is),Ho.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Ho.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(i),E.b.applyMatrix4(i),E.c.applyMatrix4(i),E.needsUpdate=!0;for(let f=M*3,c=(_+M)*3;f<c;f+=3)if(Fe(Zr,f,p,g),Zr.needsUpdate=!0,E.intersectsTriangle(Zr))return!0;return!1}});{const x=Ya(e);for(let E=M*3,f=(_+M)*3;E<f;E+=3){Fe(Yr,E,p,g),Yr.a.applyMatrix4(Is),Yr.b.applyMatrix4(Is),Yr.c.applyMatrix4(Is),Yr.needsUpdate=!0;for(let c=0,v=x*3;c<v;c+=3)if(Fe(Zr,c,m,y),Zr.needsUpdate=!0,Yr.intersectsTriangle(Zr))return!0}}}else{const d=ke(n),p=Ge(n,a);return Te(d,s,Go),!!(r.intersectsBox(Go)&&gu(d,t,e,i,r)||(Te(p,s,Go),r.intersectsBox(Go)&&gu(p,t,e,i,r)))}}const Vo=new re,Zl=new pn,Ls=new pn,t1=new U,e1=new U,n1=new U,i1=new U;function r1(n,t,e,i={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zl.set(t.boundingBox.min,t.boundingBox.max,e),Zl.needsUpdate=!0;const a=n.geometry,u=a.attributes.position,h=a.index,d=t.attributes.position,p=t.index,g=On.getPrimitive(),m=On.getPrimitive();let y=t1,M=e1,_=null,x=null;r&&(_=n1,x=i1);let E=1/0,f=null,c=null;return Vo.copy(e).invert(),Ls.matrix.copy(Vo),n.shapecast({boundsTraverseOrder:v=>Zl.distanceToBox(v),intersectsBounds:(v,l,R)=>R<E&&R<o?(l&&(Ls.min.copy(v.min),Ls.max.copy(v.max),Ls.needsUpdate=!0),!0):!1,intersectsRange:(v,l)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:S=>Ls.distanceToBox(S),intersectsBounds:(S,b,w)=>w<E&&w<o,intersectsRange:(S,b)=>{for(let w=S,T=S+b;w<T;w++){Fe(m,3*w,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=v,C=v+l;A<C;A++){Fe(g,3*A,h,u),g.needsUpdate=!0;const D=g.distanceToTriangle(m,y,_);if(D<E&&(M.copy(y),x&&x.copy(_),E=D,f=A,c=w),D<s)return!0}}}});{const R=Ya(t);for(let S=0,b=R;S<b;S++){Fe(m,3*S,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=v,T=v+l;w<T;w++){Fe(g,3*w,h,u),g.needsUpdate=!0;const A=g.distanceToTriangle(m,y,_);if(A<E&&(M.copy(y),x&&x.copy(_),E=A,f=w,c=S),A<s)return!0}}}}}),On.releasePrimitive(g),On.releasePrimitive(m),E===1/0?null:(i.point?i.point.copy(M):i.point=M.clone(),i.distance=E,i.faceIndex=f,r&&(r.point?r.point.copy(x):r.point=x.clone(),r.point.applyMatrix4(Vo),M.applyMatrix4(Vo),r.distance=M.sub(r.point).length(),r.faceIndex=c),i)}function s1(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,u,h=0;const d=n._roots;for(let g=0,m=d.length;g<m;g++)s=d[g],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),p(0,h),h+=s.byteLength;function p(g,m,y=!1){const M=g*2;if(Re(M,a)){const _=Xe(g,o),x=an(M,a);let E=1/0,f=1/0,c=1/0,v=-1/0,l=-1/0,R=-1/0;for(let S=_,b=_+x;S<b;S++){const w=3*n.resolveTriangleIndex(S);for(let T=0;T<3;T++){let A=w+T;A=i?i[A]:A;const C=r.getX(A),D=r.getY(A),L=r.getZ(A);C<E&&(E=C),C>v&&(v=C),D<f&&(f=D),D>l&&(l=D),L<c&&(c=L),L>R&&(R=L)}}return u[g+0]!==E||u[g+1]!==f||u[g+2]!==c||u[g+3]!==v||u[g+4]!==l||u[g+5]!==R?(u[g+0]=E,u[g+1]=f,u[g+2]=c,u[g+3]=v,u[g+4]=l,u[g+5]=R,!0):!1}else{const _=ke(g),x=Ge(g,o);let E=y,f=!1,c=!1;if(t){if(!E){const w=_/ze+m/on,T=x/ze+m/on;f=t.has(w),c=t.has(T),E=!f&&!c}}else f=!0,c=!0;const v=E||f,l=E||c;let R=!1;v&&(R=p(_,m,E));let S=!1;l&&(S=p(x,m,E));const b=R||S;if(b)for(let w=0;w<3;w++){const T=_+w,A=x+w,C=u[T],D=u[T+3],L=u[A],F=u[A+3];u[g+w]=C<L?C:L,u[g+w+3]=D>F?D:F}return b}}}function o1(n,t,e,i,r,s,o){Me.setBuffer(n._roots[t]),mu(0,n,e,i,r,s,o),Me.clearBuffer()}function mu(n,t,e,i,r,s,o){const{float32Array:a,uint16Array:u,uint32Array:h}=Me,d=n*2;if(Re(d,u)){const g=Xe(n,h),m=an(d,u);qb(t,e,i,g,m,r,s,o)}else{const g=ke(n);Qi(g,a,i,s,o)&&mu(g,t,e,i,r,s,o);const m=Ge(n,h);Qi(m,a,i,s,o)&&mu(m,t,e,i,r,s,o)}}const a1=["x","y","z"];function l1(n,t,e,i,r,s){Me.setBuffer(n._roots[t]);const o=_u(0,n,e,i,r,s);return Me.clearBuffer(),o}function _u(n,t,e,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:u}=Me;let h=n*2;if(Re(h,a)){const p=Xe(n,u),g=an(h,a);return Yb(t,e,i,p,g,r,s)}else{const p=ku(n,u),g=a1[p],y=i.direction[g]>=0;let M,_;y?(M=ke(n),_=Ge(n,u)):(M=Ge(n,u),_=ke(n));const E=Qi(M,o,i,r,s)?_u(M,t,e,i,r,s):null;if(E){const v=E.point[g];if(y?v<=o[_+p]:v>=o[_+p+3])return E}const c=Qi(_,o,i,r,s)?_u(_,t,e,i,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const $o=new fn,Kr=new yn,Jr=new yn,Ns=new re,Bd=new pn,Wo=new pn;function c1(n,t,e,i){Me.setBuffer(n._roots[t]);const r=xu(0,n,e,i);return Me.clearBuffer(),r}function xu(n,t,e,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=Me;let u=n*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Bd.set(e.boundingBox.min,e.boundingBox.max,i),r=Bd),Re(u,o)){const d=t.geometry,p=d.index,g=d.attributes.position,m=e.index,y=e.attributes.position,M=Xe(n,a),_=an(u,o);if(Ns.copy(i).invert(),e.boundsTree)return Te(n,s,Wo),Wo.matrix.copy(Ns),Wo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Wo.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(i),E.b.applyMatrix4(i),E.c.applyMatrix4(i),E.needsUpdate=!0;for(let f=M,c=_+M;f<c;f++)if(Fe(Jr,3*t.resolveTriangleIndex(f),p,g),Jr.needsUpdate=!0,E.intersectsTriangle(Jr))return!0;return!1}});{const x=Ya(e);for(let E=M,f=_+M;E<f;E++){const c=t.resolveTriangleIndex(E);Fe(Kr,3*c,p,g),Kr.a.applyMatrix4(Ns),Kr.b.applyMatrix4(Ns),Kr.c.applyMatrix4(Ns),Kr.needsUpdate=!0;for(let v=0,l=x*3;v<l;v+=3)if(Fe(Jr,v,m,y),Jr.needsUpdate=!0,Kr.intersectsTriangle(Jr))return!0}}}else{const d=ke(n),p=Ge(n,a);return Te(d,s,$o),!!(r.intersectsBox($o)&&xu(d,t,e,i,r)||(Te(p,s,$o),r.intersectsBox($o)&&xu(p,t,e,i,r)))}}const Xo=new re,Kl=new pn,Us=new pn,u1=new U,h1=new U,d1=new U,f1=new U;function p1(n,t,e,i={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Kl.set(t.boundingBox.min,t.boundingBox.max,e),Kl.needsUpdate=!0;const a=n.geometry,u=a.attributes.position,h=a.index,d=t.attributes.position,p=t.index,g=On.getPrimitive(),m=On.getPrimitive();let y=u1,M=h1,_=null,x=null;r&&(_=d1,x=f1);let E=1/0,f=null,c=null;return Xo.copy(e).invert(),Us.matrix.copy(Xo),n.shapecast({boundsTraverseOrder:v=>Kl.distanceToBox(v),intersectsBounds:(v,l,R)=>R<E&&R<o?(l&&(Us.min.copy(v.min),Us.max.copy(v.max),Us.needsUpdate=!0),!0):!1,intersectsRange:(v,l)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:S=>Us.distanceToBox(S),intersectsBounds:(S,b,w)=>w<E&&w<o,intersectsRange:(S,b)=>{for(let w=S,T=S+b;w<T;w++){const A=R.resolveTriangleIndex(w);Fe(m,3*A,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let C=v,D=v+l;C<D;C++){const L=n.resolveTriangleIndex(C);Fe(g,3*L,h,u),g.needsUpdate=!0;const F=g.distanceToTriangle(m,y,_);if(F<E&&(M.copy(y),x&&x.copy(_),E=F,f=C,c=w),F<s)return!0}}}})}else{const R=Ya(t);for(let S=0,b=R;S<b;S++){Fe(m,3*S,p,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=v,T=v+l;w<T;w++){const A=n.resolveTriangleIndex(w);Fe(g,3*A,h,u),g.needsUpdate=!0;const C=g.distanceToTriangle(m,y,_);if(C<E&&(M.copy(y),x&&x.copy(_),E=C,f=w,c=S),C<s)return!0}}}}}),On.releasePrimitive(g),On.releasePrimitive(m),E===1/0?null:(i.point?i.point.copy(M):i.point=M.clone(),i.distance=E,i.faceIndex=f,r&&(r.point?r.point.copy(x):r.point=x.clone(),r.point.applyMatrix4(Xo),M.applyMatrix4(Xo),r.distance=M.sub(r.point).length(),r.faceIndex=c),i)}function zd(n,t,e){return n===null?null:(n.point.applyMatrix4(t.matrixWorld),n.distance=n.point.distanceTo(e.ray.origin),n.object=t,n)}const qo=new pn,Yo=new vs,kd=new U,Gd=new re,Hd=new U,Jl=["getX","getY","getZ"];class Na extends Ub{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,r=t._roots,s=t._indirectBuffer,o=i.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(u=>u.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),u(s));const a=new Na(e,{...i,[zu]:!0});if(a._roots=s,a._indirectBuffer=o||null,i.setIndex){const h=e.getIndex();if(h===null){const d=new An(t.index,1,!1);e.setIndex(d)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return a;function u(h){for(let d=0;d<h.length;d++){const p=h[d],g=new Uint32Array(p),m=new Uint16Array(p);for(let y=0,M=p.byteLength/on;y<M;y++){const _=ze*y,x=2*_;Re(x,m)||(g[_+6]=g[_+6]/ze-y)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,i){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=(s?s[t]:t)*3;let d=h+0,p=h+1,g=h+2;a&&(d=a[d],p=a[p],g=a[g]);for(let m=0;m<3;m++){const y=o[Jl[m]](d),M=o[Jl[m]](p),_=o[Jl[m]](g);let x=y;M<x&&(x=M),_<x&&(x=_);let E=y;M>E&&(E=M),_>E&&(E=_),e[i+m]=x,e[i+m+3]=E}return e}computePrimitiveBounds(t,e,i){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=o.normalized;if(t<0||e+t-i.offset>i.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=o.array,d=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const g=["getX","getY","getZ"],m=i.offset;for(let y=t,M=t+e;y<M;y++){const x=(s?s[y]:y)*3,E=(y-m)*6;let f=x+0,c=x+1,v=x+2;a&&(f=a[f],c=a[c],v=a[v]),u||(f=f*p+d,c=c*p+d,v=v*p+d);for(let l=0;l<3;l++){let R,S,b;u?(R=o[g[l]](f),S=o[g[l]](c),b=o[g[l]](v)):(R=h[f+l],S=h[c+l],b=h[v+l]);let w=R;S<w&&(w=S),b<w&&(w=b);let T=R;S>T&&(T=S),b>T&&(T=b);const A=(T-w)/2,C=l*2;i[E+C+0]=w+A,i[E+C+1]=A+(Math.abs(w)+A)*da}}return i}raycastObject3D(t,e,i=[]){const{material:r}=t;if(r===void 0)return;Gd.copy(t.matrixWorld).invert(),Yo.copy(e.ray).applyMatrix4(Gd),Hd.setFromMatrixScale(t.matrixWorld),kd.copy(Yo.direction).multiply(Hd);const s=kd.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let u=this.raycastFirst(Yo,r,o,a);u=zd(u,t,e),u&&i.push(u)}else{const u=this.raycast(Yo,r,o,a);for(let h=0,d=u.length;h<d;h++){const p=zd(u[h],t,e);p&&i.push(p)}}return i}refit(t=null){return(this.indirect?s1:Xb)(this,t)}raycast(t,e=oi,i=0,r=1/0){const s=this._roots,o=[],a=this.indirect?o1:Kb;for(let u=0,h=s.length;u<h;u++)a(this,u,e,t,o,i,r);return o}raycastFirst(t,e=oi,i=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?l1:jb;for(let u=0,h=s.length;u<h;u++){const d=a(this,u,e,t,i,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let i=!1;const r=this._roots,s=this.indirect?c1:Qb;for(let o=0,a=r.length;o<a&&(i=s(this,o,t,e),!i);o++);return i}shapecast(t){const e=On.getPrimitive(),i=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Zb:Wb});return On.releasePrimitive(e),i}bvhcast(t,e,i){let{intersectsRanges:r,intersectsTriangles:s}=i;const o=On.getPrimitive(),a=this.geometry.index,u=this.geometry.attributes.position,h=this.indirect?y=>{const M=this.resolveTriangleIndex(y);Fe(o,M*3,a,u)}:y=>{Fe(o,y*3,a,u)},d=On.getPrimitive(),p=t.geometry.index,g=t.geometry.attributes.position,m=t.indirect?y=>{const M=t.resolveTriangleIndex(y);Fe(d,M*3,p,g)}:y=>{Fe(d,y*3,p,g)};if(s){if(!(t instanceof Na))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const y=(M,_,x,E,f,c,v,l)=>{for(let R=x,S=x+E;R<S;R++){m(R),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let b=M,w=M+_;b<w;b++)if(h(b),o.needsUpdate=!0,s(o,d,b,R,f,c,v,l))return!0}return!1};if(r){const M=r;r=function(_,x,E,f,c,v,l,R){return M(_,x,E,f,c,v,l,R)?!0:y(_,x,E,f,c,v,l,R)}}else r=y}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return qo.set(t.min,t.max,e),qo.needsUpdate=!0,this.shapecast({intersectsBounds:i=>qo.intersectsBox(i),intersectsTriangle:i=>qo.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},r={},s=0,o=1/0){return(this.indirect?p1:r1)(this,t,e,i,r,s,o)}closestPointToPoint(t,e={},i=0,r=1/0){return kb(this,t,e,i,r)}}const qp=1e-6,g1=qp*.5,Yp=Math.pow(10,-Math.log10(qp)),m1=g1*Yp;function ii(n){return~~(n*Yp+m1)}function _1(n){return`${ii(n.x)},${ii(n.y)}`}function Vd(n){return`${ii(n.x)},${ii(n.y)},${ii(n.z)}`}function x1(n){return`${ii(n.x)},${ii(n.y)},${ii(n.z)},${ii(n.w)}`}function v1(n,t,e){e.direction.subVectors(t,n).normalize();const i=n.dot(e.direction);return e.origin.copy(n).addScaledVector(e.direction,-i),e}function Zp(){return typeof SharedArrayBuffer<"u"}function y1(n){if(n.buffer instanceof SharedArrayBuffer)return n;const t=n.constructor,e=n.buffer,i=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(i).set(r,0),new t(i)}function S1(n){return n.index?n.index.count:n.attributes.position.count}function $u(n){return S1(n)/3}const M1=1e-8,b1=new U;function E1(n){return~~(n/3)}function w1(n){return n%3}function $d(n,t){return n.start-t.start}function Wd(n,t){return b1.subVectors(t,n.origin).dot(n.direction)}function T1(n,t,e,i=M1){n.sort($d),t.sort($d);for(let a=0;a<n.length;a++){const u=n[a];for(let h=0;h<t.length;h++){const d=t[h];if(!(d.start>u.end)){if(u.end<d.start||d.end<u.start)continue;if(u.start<=d.start&&u.end>=d.end)s(d.end,u.end)||n.splice(a+1,0,{start:d.end,end:u.end,index:u.index}),u.end=d.start,d.start=0,d.end=0;else if(u.start>=d.start&&u.end<=d.end)s(u.end,d.end)||t.splice(h+1,0,{start:u.end,end:d.end,index:d.index}),d.end=u.start,u.start=0,u.end=0;else if(u.start<=d.start&&u.end<=d.end){const p=u.end;u.end=d.start,d.start=p}else if(u.start>=d.start&&u.end>=d.end){const p=d.end;d.end=u.start,u.start=p}else throw new Error}if(e.has(u.index)||e.set(u.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(u.index).push(d.index),e.get(d.index).push(u.index),o(d)&&(t.splice(h,1),h--),o(u)){n.splice(a,1),a--;break}}}r(n),r(t);function r(a){for(let u=0;u<a.length;u++)o(a[u])&&(a.splice(u,1),u--)}function s(a,u){return Math.abs(u-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const Xd=1e-5,qd=1e-4;class A1{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,i=t.clone();i.direction.multiplyScalar(-1);let r=1/0,s=null;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(o(d,t)&&o(d,i))continue;const p=a(d,t),g=a(d,i),m=Math.min(p,g);m<r&&(r=m,s=d)}return s;function o(u,h){const d=u.origin.distanceTo(h.origin)>Xd;return u.direction.angleTo(h.direction)>qd||d}function a(u,h){const d=u.origin.distanceTo(h.origin),p=u.direction.angleTo(h.direction);return d/Xd+p/qd}}}const jl=new U,Ql=new U,Zo=new vs;function C1(n,t,e){const i=n.attributes,r=n.index,s=i.position,o=new Map,a=new Map,u=Array.from(t),h=new A1;for(let d=0,p=u.length;d<p;d++){const g=u[d],m=E1(g),y=w1(g);let M=3*m+y,_=3*m+(y+1)%3;r&&(M=r.getX(M),_=r.getX(_)),jl.fromBufferAttribute(s,M),Ql.fromBufferAttribute(s,_),v1(jl,Ql,Zo);let x,E=h.findClosestRay(Zo);E===null&&(E=Zo.clone(),h.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),x=a.get(E);let f=Wd(E,jl),c=Wd(E,Ql);f>c&&([f,c]=[c,f]),Zo.direction.dot(E.direction)<0?x.reverse.push({start:f,end:c,index:g}):x.forward.push({start:f,end:c,index:g})}return a.forEach(({forward:d,reverse:p},g)=>{T1(d,p,o,e),d.length===0&&p.length===0&&a.delete(g)}),{disjointConnectivityMap:o,fragmentMap:a}}const R1=new kt,tc=new U,P1=new ge,ec=["","",""];class D1{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(t,e){const i=t*3+e,r=this.disjointConnections.get(i);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const i=t*3+e,r=this.disjointConnections.get(i);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:i,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?f:E,a=new Map,{attributes:u}=t,h=e?Object.keys(u):null,d=t.index,p=u.position;let g=$u(t);const m=g;let y=0;i&&(y=t.drawRange.start,t.drawRange.count!==1/0&&(g=~~(t.drawRange.count/3)));let M=this.data;(!M||M.length<3*m)&&(M=new Int32Array(3*m)),M.fill(-1);let _=0,x=new Set;for(let c=y,v=g*3+y;c<v;c+=3){const l=c;for(let R=0;R<3;R++){let S=l+R;d&&(S=d.getX(S)),ec[R]=o(S)}for(let R=0;R<3;R++){const S=(R+1)%3,b=ec[R],w=ec[S],T=`${w}_${b}`;if(a.has(T)){const A=l+R,C=a.get(T);M[A]=C,M[C]=A,a.delete(T),_+=2,x.delete(C)}else{const A=`${b}_${w}`,C=l+R;a.set(A,C),x.add(C)}}}if(r){const{fragmentMap:c,disjointConnectivityMap:v}=C1(t,x,s);x.clear(),c.forEach(({forward:l,reverse:R})=>{l.forEach(({index:S})=>x.add(S)),R.forEach(({index:S})=>x.add(S))}),this.unmatchedDisjointEdges=c,this.disjointConnections=v,_=g*3-x.size}this.matchedEdges=_,this.unmatchedEdges=x.size,this.data=M;function E(c){return tc.fromBufferAttribute(p,c),Vd(tc)}function f(c){let v="";for(let l=0,R=h.length;l<R;l++){const S=u[h[l]];let b;switch(S.itemSize){case 1:b=ii(S.getX(c));break;case 2:b=_1(R1.fromBufferAttribute(S,c));break;case 3:b=Vd(tc.fromBufferAttribute(S,c));break;case 4:b=x1(P1.fromBufferAttribute(S,c));break}v!==""&&(v+="|"),v+=b}return v}}}class Wi extends Je{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new re,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,i=t.elements,r=e.elements;for(let s=0;s<16;s++)if(i[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,i=Zp(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,u=`${t.uuid}_${o}_${a}`;if(this._hash===u)return;if(this._hash=u,i)for(const g in e){const m=e[g];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=y1(m.array)}t.boundsTree=new Na(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:i}),t.halfEdges||(t.halfEdges=new D1),t.halfEdges.updateFrom(t);const h=$u(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));const d=t.groupIndices,p=t.groups;for(let g=0,m=p.length;g<m;g++){const{start:y,count:M}=p[g];for(let _=y/3,x=(y+M)/3;_<x;_++)d[_]=g}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var I1=Object.getOwnPropertyNames,Rn=(n,t)=>function(){return t||(0,n[I1(n)[0]])((t={exports:{}}).exports,t),t.exports},Ka=Rn({"node_modules/binary-search-bounds/search-bounds.js"(n,t){function e(u,h,d,p,g){for(var m=g+1;p<=g;){var y=p+g>>>1,M=u[y],_=d!==void 0?d(M,h):M-h;_>=0?(m=y,g=y-1):p=y+1}return m}function i(u,h,d,p,g){for(var m=g+1;p<=g;){var y=p+g>>>1,M=u[y],_=d!==void 0?d(M,h):M-h;_>0?(m=y,g=y-1):p=y+1}return m}function r(u,h,d,p,g){for(var m=p-1;p<=g;){var y=p+g>>>1,M=u[y],_=d!==void 0?d(M,h):M-h;_<0?(m=y,p=y+1):g=y-1}return m}function s(u,h,d,p,g){for(var m=p-1;p<=g;){var y=p+g>>>1,M=u[y],_=d!==void 0?d(M,h):M-h;_<=0?(m=y,p=y+1):g=y-1}return m}function o(u,h,d,p,g){for(;p<=g;){var m=p+g>>>1,y=u[m],M=d!==void 0?d(y,h):y-h;if(M===0)return m;M<=0?p=m+1:g=m-1}return-1}function a(u,h,d,p,g,m){return typeof d=="function"?m(u,h,d,p===void 0?0:p|0,g===void 0?u.length-1:g|0):m(u,h,void 0,d===void 0?0:d|0,p===void 0?u.length-1:p|0)}t.exports={ge:function(u,h,d,p,g){return a(u,h,d,p,g,e)},gt:function(u,h,d,p,g){return a(u,h,d,p,g,i)},lt:function(u,h,d,p,g){return a(u,h,d,p,g,r)},le:function(u,h,d,p,g){return a(u,h,d,p,g,s)},eq:function(u,h,d,p,g){return a(u,h,d,p,g,o)}}}}),Wu=Rn({"node_modules/two-product/two-product.js"(n,t){t.exports=i;var e=+(Math.pow(2,27)+1);function i(r,s,o){var a=r*s,u=e*r,h=u-r,d=u-h,p=r-d,g=e*s,m=g-s,y=g-m,M=s-y,_=a-d*y,x=_-p*y,E=x-d*M,f=p*M-E;return o?(o[0]=f,o[1]=a,o):[f,a]}}}),Kp=Rn({"node_modules/robust-sum/robust-sum.js"(n,t){t.exports=i;function e(r,s){var o=r+s,a=o-r,u=o-a,h=s-a,d=r-u,p=d+h;return p?[p,o]:[o]}function i(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var u=o+a,h=new Array(u),d=0,p=0,g=0,m=Math.abs,y=r[p],M=m(y),_=s[g],x=m(_),E,f;M<x?(f=y,p+=1,p<o&&(y=r[p],M=m(y))):(f=_,g+=1,g<a&&(_=s[g],x=m(_))),p<o&&M<x||g>=a?(E=y,p+=1,p<o&&(y=r[p],M=m(y))):(E=_,g+=1,g<a&&(_=s[g],x=m(_)));for(var c=E+f,v=c-E,l=f-v,R=l,S=c,b,w,T,A,C;p<o&&g<a;)M<x?(E=y,p+=1,p<o&&(y=r[p],M=m(y))):(E=_,g+=1,g<a&&(_=s[g],x=m(_))),f=R,c=E+f,v=c-E,l=f-v,l&&(h[d++]=l),b=S+c,w=b-S,T=b-w,A=c-w,C=S-T,R=C+A,S=b;for(;p<o;)E=y,f=R,c=E+f,v=c-E,l=f-v,l&&(h[d++]=l),b=S+c,w=b-S,T=b-w,A=c-w,C=S-T,R=C+A,S=b,p+=1,p<o&&(y=r[p]);for(;g<a;)E=_,f=R,c=E+f,v=c-E,l=f-v,l&&(h[d++]=l),b=S+c,w=b-S,T=b-w,A=c-w,C=S-T,R=C+A,S=b,g+=1,g<a&&(_=s[g]);return R&&(h[d++]=R),S&&(h[d++]=S),d||(h[d++]=0),h.length=d,h}}}),L1=Rn({"node_modules/two-sum/two-sum.js"(n,t){t.exports=e;function e(i,r,s){var o=i+r,a=o-i,u=o-a,h=r-a,d=i-u;return s?(s[0]=d+h,s[1]=o,s):[d+h,o]}}}),Jp=Rn({"node_modules/robust-scale/robust-scale.js"(n,t){var e=Wu(),i=L1();t.exports=r;function r(s,o){var a=s.length;if(a===1){var u=e(s[0],o);return u[0]?u:[u[1]]}var h=new Array(2*a),d=[.1,.1],p=[.1,.1],g=0;e(s[0],o,d),d[0]&&(h[g++]=d[0]);for(var m=1;m<a;++m){e(s[m],o,p);var y=d[1];i(y,p[0],d),d[0]&&(h[g++]=d[0]);var M=p[1],_=d[1],x=M+_,E=x-M,f=_-E;d[1]=x,f&&(h[g++]=f)}return d[1]&&(h[g++]=d[1]),g===0&&(h[g++]=0),h.length=g,h}}}),jp=Rn({"node_modules/robust-subtract/robust-diff.js"(n,t){t.exports=i;function e(r,s){var o=r+s,a=o-r,u=o-a,h=s-a,d=r-u,p=d+h;return p?[p,o]:[o]}function i(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var u=o+a,h=new Array(u),d=0,p=0,g=0,m=Math.abs,y=r[p],M=m(y),_=-s[g],x=m(_),E,f;M<x?(f=y,p+=1,p<o&&(y=r[p],M=m(y))):(f=_,g+=1,g<a&&(_=-s[g],x=m(_))),p<o&&M<x||g>=a?(E=y,p+=1,p<o&&(y=r[p],M=m(y))):(E=_,g+=1,g<a&&(_=-s[g],x=m(_)));for(var c=E+f,v=c-E,l=f-v,R=l,S=c,b,w,T,A,C;p<o&&g<a;)M<x?(E=y,p+=1,p<o&&(y=r[p],M=m(y))):(E=_,g+=1,g<a&&(_=-s[g],x=m(_))),f=R,c=E+f,v=c-E,l=f-v,l&&(h[d++]=l),b=S+c,w=b-S,T=b-w,A=c-w,C=S-T,R=C+A,S=b;for(;p<o;)E=y,f=R,c=E+f,v=c-E,l=f-v,l&&(h[d++]=l),b=S+c,w=b-S,T=b-w,A=c-w,C=S-T,R=C+A,S=b,p+=1,p<o&&(y=r[p]);for(;g<a;)E=_,f=R,c=E+f,v=c-E,l=f-v,l&&(h[d++]=l),b=S+c,w=b-S,T=b-w,A=c-w,C=S-T,R=C+A,S=b,g+=1,g<a&&(_=-s[g]);return R&&(h[d++]=R),S&&(h[d++]=S),d||(h[d++]=0),h.length=d,h}}}),N1=Rn({"node_modules/robust-orientation/orientation.js"(n,t){var e=Wu(),i=Kp(),r=Jp(),s=jp(),o=5,a=11102230246251565e-32,u=(3+16*a)*a,h=(7+56*a)*a;function d(c,v,l,R){return function(b,w,T){var A=c(c(v(w[1],T[0]),v(-T[1],w[0])),c(v(b[1],w[0]),v(-w[1],b[0]))),C=c(v(b[1],T[0]),v(-T[1],b[0])),D=R(A,C);return D[D.length-1]}}function p(c,v,l,R){return function(b,w,T,A){var C=c(c(l(c(v(T[1],A[0]),v(-A[1],T[0])),w[2]),c(l(c(v(w[1],A[0]),v(-A[1],w[0])),-T[2]),l(c(v(w[1],T[0]),v(-T[1],w[0])),A[2]))),c(l(c(v(w[1],A[0]),v(-A[1],w[0])),b[2]),c(l(c(v(b[1],A[0]),v(-A[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),A[2])))),D=c(c(l(c(v(T[1],A[0]),v(-A[1],T[0])),b[2]),c(l(c(v(b[1],A[0]),v(-A[1],b[0])),-T[2]),l(c(v(b[1],T[0]),v(-T[1],b[0])),A[2]))),c(l(c(v(w[1],T[0]),v(-T[1],w[0])),b[2]),c(l(c(v(b[1],T[0]),v(-T[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),T[2])))),L=R(C,D);return L[L.length-1]}}function g(c,v,l,R){return function(b,w,T,A,C){var D=c(c(c(l(c(l(c(v(A[1],C[0]),v(-C[1],A[0])),T[2]),c(l(c(v(T[1],C[0]),v(-C[1],T[0])),-A[2]),l(c(v(T[1],A[0]),v(-A[1],T[0])),C[2]))),w[3]),c(l(c(l(c(v(A[1],C[0]),v(-C[1],A[0])),w[2]),c(l(c(v(w[1],C[0]),v(-C[1],w[0])),-A[2]),l(c(v(w[1],A[0]),v(-A[1],w[0])),C[2]))),-T[3]),l(c(l(c(v(T[1],C[0]),v(-C[1],T[0])),w[2]),c(l(c(v(w[1],C[0]),v(-C[1],w[0])),-T[2]),l(c(v(w[1],T[0]),v(-T[1],w[0])),C[2]))),A[3]))),c(l(c(l(c(v(T[1],A[0]),v(-A[1],T[0])),w[2]),c(l(c(v(w[1],A[0]),v(-A[1],w[0])),-T[2]),l(c(v(w[1],T[0]),v(-T[1],w[0])),A[2]))),-C[3]),c(l(c(l(c(v(A[1],C[0]),v(-C[1],A[0])),w[2]),c(l(c(v(w[1],C[0]),v(-C[1],w[0])),-A[2]),l(c(v(w[1],A[0]),v(-A[1],w[0])),C[2]))),b[3]),l(c(l(c(v(A[1],C[0]),v(-C[1],A[0])),b[2]),c(l(c(v(b[1],C[0]),v(-C[1],b[0])),-A[2]),l(c(v(b[1],A[0]),v(-A[1],b[0])),C[2]))),-w[3])))),c(c(l(c(l(c(v(w[1],C[0]),v(-C[1],w[0])),b[2]),c(l(c(v(b[1],C[0]),v(-C[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),C[2]))),A[3]),c(l(c(l(c(v(w[1],A[0]),v(-A[1],w[0])),b[2]),c(l(c(v(b[1],A[0]),v(-A[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),A[2]))),-C[3]),l(c(l(c(v(T[1],A[0]),v(-A[1],T[0])),w[2]),c(l(c(v(w[1],A[0]),v(-A[1],w[0])),-T[2]),l(c(v(w[1],T[0]),v(-T[1],w[0])),A[2]))),b[3]))),c(l(c(l(c(v(T[1],A[0]),v(-A[1],T[0])),b[2]),c(l(c(v(b[1],A[0]),v(-A[1],b[0])),-T[2]),l(c(v(b[1],T[0]),v(-T[1],b[0])),A[2]))),-w[3]),c(l(c(l(c(v(w[1],A[0]),v(-A[1],w[0])),b[2]),c(l(c(v(b[1],A[0]),v(-A[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),A[2]))),T[3]),l(c(l(c(v(w[1],T[0]),v(-T[1],w[0])),b[2]),c(l(c(v(b[1],T[0]),v(-T[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),T[2]))),-A[3]))))),L=c(c(c(l(c(l(c(v(A[1],C[0]),v(-C[1],A[0])),T[2]),c(l(c(v(T[1],C[0]),v(-C[1],T[0])),-A[2]),l(c(v(T[1],A[0]),v(-A[1],T[0])),C[2]))),b[3]),l(c(l(c(v(A[1],C[0]),v(-C[1],A[0])),b[2]),c(l(c(v(b[1],C[0]),v(-C[1],b[0])),-A[2]),l(c(v(b[1],A[0]),v(-A[1],b[0])),C[2]))),-T[3])),c(l(c(l(c(v(T[1],C[0]),v(-C[1],T[0])),b[2]),c(l(c(v(b[1],C[0]),v(-C[1],b[0])),-T[2]),l(c(v(b[1],T[0]),v(-T[1],b[0])),C[2]))),A[3]),l(c(l(c(v(T[1],A[0]),v(-A[1],T[0])),b[2]),c(l(c(v(b[1],A[0]),v(-A[1],b[0])),-T[2]),l(c(v(b[1],T[0]),v(-T[1],b[0])),A[2]))),-C[3]))),c(c(l(c(l(c(v(T[1],C[0]),v(-C[1],T[0])),w[2]),c(l(c(v(w[1],C[0]),v(-C[1],w[0])),-T[2]),l(c(v(w[1],T[0]),v(-T[1],w[0])),C[2]))),b[3]),l(c(l(c(v(T[1],C[0]),v(-C[1],T[0])),b[2]),c(l(c(v(b[1],C[0]),v(-C[1],b[0])),-T[2]),l(c(v(b[1],T[0]),v(-T[1],b[0])),C[2]))),-w[3])),c(l(c(l(c(v(w[1],C[0]),v(-C[1],w[0])),b[2]),c(l(c(v(b[1],C[0]),v(-C[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),C[2]))),T[3]),l(c(l(c(v(w[1],T[0]),v(-T[1],w[0])),b[2]),c(l(c(v(b[1],T[0]),v(-T[1],b[0])),-w[2]),l(c(v(b[1],w[0]),v(-w[1],b[0])),T[2]))),-C[3])))),F=R(D,L);return F[F.length-1]}}function m(c){var v=c===3?d:c===4?p:g;return v(i,e,r,s)}var y=m(3),M=m(4),_=[function(){return 0},function(){return 0},function(v,l){return l[0]-v[0]},function(v,l,R){var S=(v[1]-R[1])*(l[0]-R[0]),b=(v[0]-R[0])*(l[1]-R[1]),w=S-b,T;if(S>0){if(b<=0)return w;T=S+b}else if(S<0){if(b>=0)return w;T=-(S+b)}else return w;var A=u*T;return w>=A||w<=-A?w:y(v,l,R)},function(v,l,R,S){var b=v[0]-S[0],w=l[0]-S[0],T=R[0]-S[0],A=v[1]-S[1],C=l[1]-S[1],D=R[1]-S[1],L=v[2]-S[2],F=l[2]-S[2],O=R[2]-S[2],k=w*D,B=T*C,$=T*A,W=b*D,st=b*C,ct=w*A,gt=L*(k-B)+F*($-W)+O*(st-ct),ut=(Math.abs(k)+Math.abs(B))*Math.abs(L)+(Math.abs($)+Math.abs(W))*Math.abs(F)+(Math.abs(st)+Math.abs(ct))*Math.abs(O),ot=h*ut;return gt>ot||-gt>ot?gt:M(v,l,R,S)}];function x(c){var v=_[c.length];return v||(v=_[c.length]=m(c.length)),v.apply(void 0,c)}function E(c,v,l,R,S,b,w){return function(A,C,D,L,F){switch(arguments.length){case 0:case 1:return 0;case 2:return R(A,C);case 3:return S(A,C,D);case 4:return b(A,C,D,L);case 5:return w(A,C,D,L,F)}for(var O=new Array(arguments.length),k=0;k<arguments.length;++k)O[k]=arguments[k];return c(O)}}function f(){for(;_.length<=o;)_.push(m(_.length));t.exports=E.apply(void 0,[x].concat(_));for(var c=0;c<=o;++c)t.exports[c]=_[c]}f()}}),U1=Rn({"node_modules/cdt2d/lib/monotone.js"(n,t){var e=Ka(),i=N1()[3],r=0,s=1,o=2;t.exports=M;function a(_,x,E,f,c){this.a=_,this.b=x,this.idx=E,this.lowerIds=f,this.upperIds=c}function u(_,x,E,f){this.a=_,this.b=x,this.type=E,this.idx=f}function h(_,x){var E=_.a[0]-x.a[0]||_.a[1]-x.a[1]||_.type-x.type;return E||_.type!==r&&(E=i(_.a,_.b,x.b),E)?E:_.idx-x.idx}function d(_,x){return i(_.a,_.b,x)}function p(_,x,E,f,c){for(var v=e.lt(x,f,d),l=e.gt(x,f,d),R=v;R<l;++R){for(var S=x[R],b=S.lowerIds,T=b.length;T>1&&i(E[b[T-2]],E[b[T-1]],f)>0;)_.push([b[T-1],b[T-2],c]),T-=1;b.length=T,b.push(c);for(var w=S.upperIds,T=w.length;T>1&&i(E[w[T-2]],E[w[T-1]],f)<0;)_.push([w[T-2],w[T-1],c]),T-=1;w.length=T,w.push(c)}}function g(_,x){var E;return _.a[0]<x.a[0]?E=i(_.a,_.b,x.a):E=i(x.b,x.a,_.a),E||(x.b[0]<_.b[0]?E=i(_.a,_.b,x.b):E=i(x.b,x.a,_.b),E||_.idx-x.idx)}function m(_,x,E){var f=e.le(_,E,g),c=_[f],v=c.upperIds,l=v[v.length-1];c.upperIds=[l],_.splice(f+1,0,new a(E.a,E.b,E.idx,[l],v))}function y(_,x,E){var f=E.a;E.a=E.b,E.b=f;var c=e.eq(_,E,g),v=_[c],l=_[c-1];l.upperIds=v.upperIds,_.splice(c,1)}function M(_,x){for(var E=_.length,f=x.length,c=[],v=0;v<E;++v)c.push(new u(_[v],null,r,v));for(var v=0;v<f;++v){var l=x[v],R=_[l[0]],S=_[l[1]];R[0]<S[0]?c.push(new u(R,S,o,v),new u(S,R,s,v)):R[0]>S[0]&&c.push(new u(S,R,o,v),new u(R,S,s,v))}c.sort(h);for(var b=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),w=[new a([b,1],[b,0],-1,[],[])],T=[],v=0,A=c.length;v<A;++v){var C=c[v],D=C.type;D===r?p(T,w,_,C.a,C.idx):D===o?m(w,_,C):y(w,_,C)}return T}}}),F1=Rn({"node_modules/cdt2d/lib/triangulation.js"(n,t){var e=Ka();t.exports=o;function i(a,u){this.stars=a,this.edges=u}var r=i.prototype;function s(a,u,h){for(var d=1,p=a.length;d<p;d+=2)if(a[d-1]===u&&a[d]===h){a[d-1]=a[p-2],a[d]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function u(h,d){return h[0]-d[0]||h[1]-d[1]}return function(h,d){return a[0]=Math.min(h,d),a[1]=Math.max(h,d),e.eq(this.edges,a,u)>=0}})(),r.removeTriangle=function(a,u,h){var d=this.stars;s(d[a],u,h),s(d[u],h,a),s(d[h],a,u)},r.addTriangle=function(a,u,h){var d=this.stars;d[a].push(u,h),d[u].push(h,a),d[h].push(a,u)},r.opposite=function(a,u){for(var h=this.stars[u],d=1,p=h.length;d<p;d+=2)if(h[d]===a)return h[d-1];return-1},r.flip=function(a,u){var h=this.opposite(a,u),d=this.opposite(u,a);this.removeTriangle(a,u,h),this.removeTriangle(u,a,d),this.addTriangle(a,d,h),this.addTriangle(u,h,d)},r.edges=function(){for(var a=this.stars,u=[],h=0,d=a.length;h<d;++h)for(var p=a[h],g=0,m=p.length;g<m;g+=2)u.push([p[g],p[g+1]]);return u},r.cells=function(){for(var a=this.stars,u=[],h=0,d=a.length;h<d;++h)for(var p=a[h],g=0,m=p.length;g<m;g+=2){var y=p[g],M=p[g+1];h<Math.min(y,M)&&u.push([h,y,M])}return u};function o(a,u){for(var h=new Array(a),d=0;d<a;++d)h[d]=[];return new i(h,u)}}}),O1=Rn({"node_modules/robust-in-sphere/in-sphere.js"(n,t){var e=Wu(),i=Kp(),r=jp(),s=Jp(),o=6;function a(f){var c=f===3?p:f===4?g:f===5?m:y;return c(i,r,e,s)}function u(){return 0}function h(){return 0}function d(){return 0}function p(f,c,v,l){function R(S,b,w){var T=v(S[0],S[0]),A=l(T,b[0]),C=l(T,w[0]),D=v(b[0],b[0]),L=l(D,S[0]),F=l(D,w[0]),O=v(w[0],w[0]),k=l(O,S[0]),B=l(O,b[0]),$=f(c(B,F),c(L,A)),W=c(k,C),st=c($,W);return st[st.length-1]}return R}function g(f,c,v,l){function R(S,b,w,T){var A=f(v(S[0],S[0]),v(S[1],S[1])),C=l(A,b[0]),D=l(A,w[0]),L=l(A,T[0]),F=f(v(b[0],b[0]),v(b[1],b[1])),O=l(F,S[0]),k=l(F,w[0]),B=l(F,T[0]),$=f(v(w[0],w[0]),v(w[1],w[1])),W=l($,S[0]),st=l($,b[0]),ct=l($,T[0]),gt=f(v(T[0],T[0]),v(T[1],T[1])),ut=l(gt,S[0]),ot=l(gt,b[0]),q=l(gt,w[0]),K=f(f(l(c(q,ct),b[1]),f(l(c(ot,B),-w[1]),l(c(st,k),T[1]))),f(l(c(ot,B),S[1]),f(l(c(ut,L),-b[1]),l(c(O,C),T[1])))),at=f(f(l(c(q,ct),S[1]),f(l(c(ut,L),-w[1]),l(c(W,D),T[1]))),f(l(c(st,k),S[1]),f(l(c(W,D),-b[1]),l(c(O,C),w[1])))),ft=c(K,at);return ft[ft.length-1]}return R}function m(f,c,v,l){function R(S,b,w,T,A){var C=f(v(S[0],S[0]),f(v(S[1],S[1]),v(S[2],S[2]))),D=l(C,b[0]),L=l(C,w[0]),F=l(C,T[0]),O=l(C,A[0]),k=f(v(b[0],b[0]),f(v(b[1],b[1]),v(b[2],b[2]))),B=l(k,S[0]),$=l(k,w[0]),W=l(k,T[0]),st=l(k,A[0]),ct=f(v(w[0],w[0]),f(v(w[1],w[1]),v(w[2],w[2]))),gt=l(ct,S[0]),ut=l(ct,b[0]),ot=l(ct,T[0]),q=l(ct,A[0]),K=f(v(T[0],T[0]),f(v(T[1],T[1]),v(T[2],T[2]))),at=l(K,S[0]),ft=l(K,b[0]),ht=l(K,w[0]),zt=l(K,A[0]),Vt=f(v(A[0],A[0]),f(v(A[1],A[1]),v(A[2],A[2]))),wt=l(Vt,S[0]),Rt=l(Vt,b[0]),Ut=l(Vt,w[0]),Tt=l(Vt,T[0]),le=f(f(f(l(f(l(c(Tt,zt),w[1]),f(l(c(Ut,q),-T[1]),l(c(ht,ot),A[1]))),b[2]),f(l(f(l(c(Tt,zt),b[1]),f(l(c(Rt,st),-T[1]),l(c(ft,W),A[1]))),-w[2]),l(f(l(c(Ut,q),b[1]),f(l(c(Rt,st),-w[1]),l(c(ut,$),A[1]))),T[2]))),f(l(f(l(c(ht,ot),b[1]),f(l(c(ft,W),-w[1]),l(c(ut,$),T[1]))),-A[2]),f(l(f(l(c(Tt,zt),b[1]),f(l(c(Rt,st),-T[1]),l(c(ft,W),A[1]))),S[2]),l(f(l(c(Tt,zt),S[1]),f(l(c(wt,O),-T[1]),l(c(at,F),A[1]))),-b[2])))),f(f(l(f(l(c(Rt,st),S[1]),f(l(c(wt,O),-b[1]),l(c(B,D),A[1]))),T[2]),f(l(f(l(c(ft,W),S[1]),f(l(c(at,F),-b[1]),l(c(B,D),T[1]))),-A[2]),l(f(l(c(ht,ot),b[1]),f(l(c(ft,W),-w[1]),l(c(ut,$),T[1]))),S[2]))),f(l(f(l(c(ht,ot),S[1]),f(l(c(at,F),-w[1]),l(c(gt,L),T[1]))),-b[2]),f(l(f(l(c(ft,W),S[1]),f(l(c(at,F),-b[1]),l(c(B,D),T[1]))),w[2]),l(f(l(c(ut,$),S[1]),f(l(c(gt,L),-b[1]),l(c(B,D),w[1]))),-T[2]))))),Xt=f(f(f(l(f(l(c(Tt,zt),w[1]),f(l(c(Ut,q),-T[1]),l(c(ht,ot),A[1]))),S[2]),l(f(l(c(Tt,zt),S[1]),f(l(c(wt,O),-T[1]),l(c(at,F),A[1]))),-w[2])),f(l(f(l(c(Ut,q),S[1]),f(l(c(wt,O),-w[1]),l(c(gt,L),A[1]))),T[2]),l(f(l(c(ht,ot),S[1]),f(l(c(at,F),-w[1]),l(c(gt,L),T[1]))),-A[2]))),f(f(l(f(l(c(Ut,q),b[1]),f(l(c(Rt,st),-w[1]),l(c(ut,$),A[1]))),S[2]),l(f(l(c(Ut,q),S[1]),f(l(c(wt,O),-w[1]),l(c(gt,L),A[1]))),-b[2])),f(l(f(l(c(Rt,st),S[1]),f(l(c(wt,O),-b[1]),l(c(B,D),A[1]))),w[2]),l(f(l(c(ut,$),S[1]),f(l(c(gt,L),-b[1]),l(c(B,D),w[1]))),-A[2])))),Kt=c(le,Xt);return Kt[Kt.length-1]}return R}function y(f,c,v,l){function R(S,b,w,T,A,C){var D=f(f(v(S[0],S[0]),v(S[1],S[1])),f(v(S[2],S[2]),v(S[3],S[3]))),L=l(D,b[0]),F=l(D,w[0]),O=l(D,T[0]),k=l(D,A[0]),B=l(D,C[0]),$=f(f(v(b[0],b[0]),v(b[1],b[1])),f(v(b[2],b[2]),v(b[3],b[3]))),W=l($,S[0]),st=l($,w[0]),ct=l($,T[0]),gt=l($,A[0]),ut=l($,C[0]),ot=f(f(v(w[0],w[0]),v(w[1],w[1])),f(v(w[2],w[2]),v(w[3],w[3]))),q=l(ot,S[0]),K=l(ot,b[0]),at=l(ot,T[0]),ft=l(ot,A[0]),ht=l(ot,C[0]),zt=f(f(v(T[0],T[0]),v(T[1],T[1])),f(v(T[2],T[2]),v(T[3],T[3]))),Vt=l(zt,S[0]),wt=l(zt,b[0]),Rt=l(zt,w[0]),Ut=l(zt,A[0]),Tt=l(zt,C[0]),le=f(f(v(A[0],A[0]),v(A[1],A[1])),f(v(A[2],A[2]),v(A[3],A[3]))),Xt=l(le,S[0]),Kt=l(le,b[0]),$t=l(le,w[0]),qt=l(le,T[0]),z=l(le,C[0]),Ee=f(f(v(C[0],C[0]),v(C[1],C[1])),f(v(C[2],C[2]),v(C[3],C[3]))),Gt=l(Ee,S[0]),N=l(Ee,b[0]),P=l(Ee,w[0]),H=l(Ee,T[0]),X=l(Ee,A[0]),j=f(f(f(l(f(f(l(f(l(c(X,z),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),w[2]),l(f(l(c(X,z),w[1]),f(l(c(P,ht),-A[1]),l(c($t,ft),C[1]))),-T[2])),f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ht),-T[1]),l(c(Rt,at),C[1]))),A[2]),l(f(l(c(qt,Ut),w[1]),f(l(c($t,ft),-T[1]),l(c(Rt,at),A[1]))),-C[2]))),b[3]),f(l(f(f(l(f(l(c(X,z),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),b[2]),l(f(l(c(X,z),b[1]),f(l(c(N,ut),-A[1]),l(c(Kt,gt),C[1]))),-T[2])),f(l(f(l(c(H,Tt),b[1]),f(l(c(N,ut),-T[1]),l(c(wt,ct),C[1]))),A[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,gt),-T[1]),l(c(wt,ct),A[1]))),-C[2]))),-w[3]),l(f(f(l(f(l(c(X,z),w[1]),f(l(c(P,ht),-A[1]),l(c($t,ft),C[1]))),b[2]),l(f(l(c(X,z),b[1]),f(l(c(N,ut),-A[1]),l(c(Kt,gt),C[1]))),-w[2])),f(l(f(l(c(P,ht),b[1]),f(l(c(N,ut),-w[1]),l(c(K,st),C[1]))),A[2]),l(f(l(c($t,ft),b[1]),f(l(c(Kt,gt),-w[1]),l(c(K,st),A[1]))),-C[2]))),T[3]))),f(f(l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ht),-T[1]),l(c(Rt,at),C[1]))),b[2]),l(f(l(c(H,Tt),b[1]),f(l(c(N,ut),-T[1]),l(c(wt,ct),C[1]))),-w[2])),f(l(f(l(c(P,ht),b[1]),f(l(c(N,ut),-w[1]),l(c(K,st),C[1]))),T[2]),l(f(l(c(Rt,at),b[1]),f(l(c(wt,ct),-w[1]),l(c(K,st),T[1]))),-C[2]))),-A[3]),l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,ft),-T[1]),l(c(Rt,at),A[1]))),b[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,gt),-T[1]),l(c(wt,ct),A[1]))),-w[2])),f(l(f(l(c($t,ft),b[1]),f(l(c(Kt,gt),-w[1]),l(c(K,st),A[1]))),T[2]),l(f(l(c(Rt,at),b[1]),f(l(c(wt,ct),-w[1]),l(c(K,st),T[1]))),-A[2]))),C[3])),f(l(f(f(l(f(l(c(X,z),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),b[2]),l(f(l(c(X,z),b[1]),f(l(c(N,ut),-A[1]),l(c(Kt,gt),C[1]))),-T[2])),f(l(f(l(c(H,Tt),b[1]),f(l(c(N,ut),-T[1]),l(c(wt,ct),C[1]))),A[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,gt),-T[1]),l(c(wt,ct),A[1]))),-C[2]))),S[3]),l(f(f(l(f(l(c(X,z),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),S[2]),l(f(l(c(X,z),S[1]),f(l(c(Gt,B),-A[1]),l(c(Xt,k),C[1]))),-T[2])),f(l(f(l(c(H,Tt),S[1]),f(l(c(Gt,B),-T[1]),l(c(Vt,O),C[1]))),A[2]),l(f(l(c(qt,Ut),S[1]),f(l(c(Xt,k),-T[1]),l(c(Vt,O),A[1]))),-C[2]))),-b[3])))),f(f(f(l(f(f(l(f(l(c(X,z),b[1]),f(l(c(N,ut),-A[1]),l(c(Kt,gt),C[1]))),S[2]),l(f(l(c(X,z),S[1]),f(l(c(Gt,B),-A[1]),l(c(Xt,k),C[1]))),-b[2])),f(l(f(l(c(N,ut),S[1]),f(l(c(Gt,B),-b[1]),l(c(W,L),C[1]))),A[2]),l(f(l(c(Kt,gt),S[1]),f(l(c(Xt,k),-b[1]),l(c(W,L),A[1]))),-C[2]))),T[3]),l(f(f(l(f(l(c(H,Tt),b[1]),f(l(c(N,ut),-T[1]),l(c(wt,ct),C[1]))),S[2]),l(f(l(c(H,Tt),S[1]),f(l(c(Gt,B),-T[1]),l(c(Vt,O),C[1]))),-b[2])),f(l(f(l(c(N,ut),S[1]),f(l(c(Gt,B),-b[1]),l(c(W,L),C[1]))),T[2]),l(f(l(c(wt,ct),S[1]),f(l(c(Vt,O),-b[1]),l(c(W,L),T[1]))),-C[2]))),-A[3])),f(l(f(f(l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,gt),-T[1]),l(c(wt,ct),A[1]))),S[2]),l(f(l(c(qt,Ut),S[1]),f(l(c(Xt,k),-T[1]),l(c(Vt,O),A[1]))),-b[2])),f(l(f(l(c(Kt,gt),S[1]),f(l(c(Xt,k),-b[1]),l(c(W,L),A[1]))),T[2]),l(f(l(c(wt,ct),S[1]),f(l(c(Vt,O),-b[1]),l(c(W,L),T[1]))),-A[2]))),C[3]),l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ht),-T[1]),l(c(Rt,at),C[1]))),b[2]),l(f(l(c(H,Tt),b[1]),f(l(c(N,ut),-T[1]),l(c(wt,ct),C[1]))),-w[2])),f(l(f(l(c(P,ht),b[1]),f(l(c(N,ut),-w[1]),l(c(K,st),C[1]))),T[2]),l(f(l(c(Rt,at),b[1]),f(l(c(wt,ct),-w[1]),l(c(K,st),T[1]))),-C[2]))),S[3]))),f(f(l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ht),-T[1]),l(c(Rt,at),C[1]))),S[2]),l(f(l(c(H,Tt),S[1]),f(l(c(Gt,B),-T[1]),l(c(Vt,O),C[1]))),-w[2])),f(l(f(l(c(P,ht),S[1]),f(l(c(Gt,B),-w[1]),l(c(q,F),C[1]))),T[2]),l(f(l(c(Rt,at),S[1]),f(l(c(Vt,O),-w[1]),l(c(q,F),T[1]))),-C[2]))),-b[3]),l(f(f(l(f(l(c(H,Tt),b[1]),f(l(c(N,ut),-T[1]),l(c(wt,ct),C[1]))),S[2]),l(f(l(c(H,Tt),S[1]),f(l(c(Gt,B),-T[1]),l(c(Vt,O),C[1]))),-b[2])),f(l(f(l(c(N,ut),S[1]),f(l(c(Gt,B),-b[1]),l(c(W,L),C[1]))),T[2]),l(f(l(c(wt,ct),S[1]),f(l(c(Vt,O),-b[1]),l(c(W,L),T[1]))),-C[2]))),w[3])),f(l(f(f(l(f(l(c(P,ht),b[1]),f(l(c(N,ut),-w[1]),l(c(K,st),C[1]))),S[2]),l(f(l(c(P,ht),S[1]),f(l(c(Gt,B),-w[1]),l(c(q,F),C[1]))),-b[2])),f(l(f(l(c(N,ut),S[1]),f(l(c(Gt,B),-b[1]),l(c(W,L),C[1]))),w[2]),l(f(l(c(K,st),S[1]),f(l(c(q,F),-b[1]),l(c(W,L),w[1]))),-C[2]))),-T[3]),l(f(f(l(f(l(c(Rt,at),b[1]),f(l(c(wt,ct),-w[1]),l(c(K,st),T[1]))),S[2]),l(f(l(c(Rt,at),S[1]),f(l(c(Vt,O),-w[1]),l(c(q,F),T[1]))),-b[2])),f(l(f(l(c(wt,ct),S[1]),f(l(c(Vt,O),-b[1]),l(c(W,L),T[1]))),w[2]),l(f(l(c(K,st),S[1]),f(l(c(q,F),-b[1]),l(c(W,L),w[1]))),-T[2]))),C[3]))))),dt=f(f(f(l(f(f(l(f(l(c(X,z),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),w[2]),l(f(l(c(X,z),w[1]),f(l(c(P,ht),-A[1]),l(c($t,ft),C[1]))),-T[2])),f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ht),-T[1]),l(c(Rt,at),C[1]))),A[2]),l(f(l(c(qt,Ut),w[1]),f(l(c($t,ft),-T[1]),l(c(Rt,at),A[1]))),-C[2]))),S[3]),f(l(f(f(l(f(l(c(X,z),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),S[2]),l(f(l(c(X,z),S[1]),f(l(c(Gt,B),-A[1]),l(c(Xt,k),C[1]))),-T[2])),f(l(f(l(c(H,Tt),S[1]),f(l(c(Gt,B),-T[1]),l(c(Vt,O),C[1]))),A[2]),l(f(l(c(qt,Ut),S[1]),f(l(c(Xt,k),-T[1]),l(c(Vt,O),A[1]))),-C[2]))),-w[3]),l(f(f(l(f(l(c(X,z),w[1]),f(l(c(P,ht),-A[1]),l(c($t,ft),C[1]))),S[2]),l(f(l(c(X,z),S[1]),f(l(c(Gt,B),-A[1]),l(c(Xt,k),C[1]))),-w[2])),f(l(f(l(c(P,ht),S[1]),f(l(c(Gt,B),-w[1]),l(c(q,F),C[1]))),A[2]),l(f(l(c($t,ft),S[1]),f(l(c(Xt,k),-w[1]),l(c(q,F),A[1]))),-C[2]))),T[3]))),f(f(l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ht),-T[1]),l(c(Rt,at),C[1]))),S[2]),l(f(l(c(H,Tt),S[1]),f(l(c(Gt,B),-T[1]),l(c(Vt,O),C[1]))),-w[2])),f(l(f(l(c(P,ht),S[1]),f(l(c(Gt,B),-w[1]),l(c(q,F),C[1]))),T[2]),l(f(l(c(Rt,at),S[1]),f(l(c(Vt,O),-w[1]),l(c(q,F),T[1]))),-C[2]))),-A[3]),l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,ft),-T[1]),l(c(Rt,at),A[1]))),S[2]),l(f(l(c(qt,Ut),S[1]),f(l(c(Xt,k),-T[1]),l(c(Vt,O),A[1]))),-w[2])),f(l(f(l(c($t,ft),S[1]),f(l(c(Xt,k),-w[1]),l(c(q,F),A[1]))),T[2]),l(f(l(c(Rt,at),S[1]),f(l(c(Vt,O),-w[1]),l(c(q,F),T[1]))),-A[2]))),C[3])),f(l(f(f(l(f(l(c(X,z),w[1]),f(l(c(P,ht),-A[1]),l(c($t,ft),C[1]))),b[2]),l(f(l(c(X,z),b[1]),f(l(c(N,ut),-A[1]),l(c(Kt,gt),C[1]))),-w[2])),f(l(f(l(c(P,ht),b[1]),f(l(c(N,ut),-w[1]),l(c(K,st),C[1]))),A[2]),l(f(l(c($t,ft),b[1]),f(l(c(Kt,gt),-w[1]),l(c(K,st),A[1]))),-C[2]))),S[3]),l(f(f(l(f(l(c(X,z),w[1]),f(l(c(P,ht),-A[1]),l(c($t,ft),C[1]))),S[2]),l(f(l(c(X,z),S[1]),f(l(c(Gt,B),-A[1]),l(c(Xt,k),C[1]))),-w[2])),f(l(f(l(c(P,ht),S[1]),f(l(c(Gt,B),-w[1]),l(c(q,F),C[1]))),A[2]),l(f(l(c($t,ft),S[1]),f(l(c(Xt,k),-w[1]),l(c(q,F),A[1]))),-C[2]))),-b[3])))),f(f(f(l(f(f(l(f(l(c(X,z),b[1]),f(l(c(N,ut),-A[1]),l(c(Kt,gt),C[1]))),S[2]),l(f(l(c(X,z),S[1]),f(l(c(Gt,B),-A[1]),l(c(Xt,k),C[1]))),-b[2])),f(l(f(l(c(N,ut),S[1]),f(l(c(Gt,B),-b[1]),l(c(W,L),C[1]))),A[2]),l(f(l(c(Kt,gt),S[1]),f(l(c(Xt,k),-b[1]),l(c(W,L),A[1]))),-C[2]))),w[3]),l(f(f(l(f(l(c(P,ht),b[1]),f(l(c(N,ut),-w[1]),l(c(K,st),C[1]))),S[2]),l(f(l(c(P,ht),S[1]),f(l(c(Gt,B),-w[1]),l(c(q,F),C[1]))),-b[2])),f(l(f(l(c(N,ut),S[1]),f(l(c(Gt,B),-b[1]),l(c(W,L),C[1]))),w[2]),l(f(l(c(K,st),S[1]),f(l(c(q,F),-b[1]),l(c(W,L),w[1]))),-C[2]))),-A[3])),f(l(f(f(l(f(l(c($t,ft),b[1]),f(l(c(Kt,gt),-w[1]),l(c(K,st),A[1]))),S[2]),l(f(l(c($t,ft),S[1]),f(l(c(Xt,k),-w[1]),l(c(q,F),A[1]))),-b[2])),f(l(f(l(c(Kt,gt),S[1]),f(l(c(Xt,k),-b[1]),l(c(W,L),A[1]))),w[2]),l(f(l(c(K,st),S[1]),f(l(c(q,F),-b[1]),l(c(W,L),w[1]))),-A[2]))),C[3]),l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,ft),-T[1]),l(c(Rt,at),A[1]))),b[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,gt),-T[1]),l(c(wt,ct),A[1]))),-w[2])),f(l(f(l(c($t,ft),b[1]),f(l(c(Kt,gt),-w[1]),l(c(K,st),A[1]))),T[2]),l(f(l(c(Rt,at),b[1]),f(l(c(wt,ct),-w[1]),l(c(K,st),T[1]))),-A[2]))),S[3]))),f(f(l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,ft),-T[1]),l(c(Rt,at),A[1]))),S[2]),l(f(l(c(qt,Ut),S[1]),f(l(c(Xt,k),-T[1]),l(c(Vt,O),A[1]))),-w[2])),f(l(f(l(c($t,ft),S[1]),f(l(c(Xt,k),-w[1]),l(c(q,F),A[1]))),T[2]),l(f(l(c(Rt,at),S[1]),f(l(c(Vt,O),-w[1]),l(c(q,F),T[1]))),-A[2]))),-b[3]),l(f(f(l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,gt),-T[1]),l(c(wt,ct),A[1]))),S[2]),l(f(l(c(qt,Ut),S[1]),f(l(c(Xt,k),-T[1]),l(c(Vt,O),A[1]))),-b[2])),f(l(f(l(c(Kt,gt),S[1]),f(l(c(Xt,k),-b[1]),l(c(W,L),A[1]))),T[2]),l(f(l(c(wt,ct),S[1]),f(l(c(Vt,O),-b[1]),l(c(W,L),T[1]))),-A[2]))),w[3])),f(l(f(f(l(f(l(c($t,ft),b[1]),f(l(c(Kt,gt),-w[1]),l(c(K,st),A[1]))),S[2]),l(f(l(c($t,ft),S[1]),f(l(c(Xt,k),-w[1]),l(c(q,F),A[1]))),-b[2])),f(l(f(l(c(Kt,gt),S[1]),f(l(c(Xt,k),-b[1]),l(c(W,L),A[1]))),w[2]),l(f(l(c(K,st),S[1]),f(l(c(q,F),-b[1]),l(c(W,L),w[1]))),-A[2]))),-T[3]),l(f(f(l(f(l(c(Rt,at),b[1]),f(l(c(wt,ct),-w[1]),l(c(K,st),T[1]))),S[2]),l(f(l(c(Rt,at),S[1]),f(l(c(Vt,O),-w[1]),l(c(q,F),T[1]))),-b[2])),f(l(f(l(c(wt,ct),S[1]),f(l(c(Vt,O),-b[1]),l(c(W,L),T[1]))),w[2]),l(f(l(c(K,st),S[1]),f(l(c(q,F),-b[1]),l(c(W,L),w[1]))),-T[2]))),A[3]))))),pt=c(j,dt);return pt[pt.length-1]}return R}var M=[u,h,d];function _(f){var c=M[f.length];return c||(c=M[f.length]=a(f.length)),c.apply(void 0,f)}function x(f,c,v,l,R,S,b,w){function T(A,C,D,L,F,O){switch(arguments.length){case 0:case 1:return 0;case 2:return l(A,C);case 3:return R(A,C,D);case 4:return S(A,C,D,L);case 5:return b(A,C,D,L,F);case 6:return w(A,C,D,L,F,O)}for(var k=new Array(arguments.length),B=0;B<arguments.length;++B)k[B]=arguments[B];return f(k)}return T}function E(){for(;M.length<=o;)M.push(a(M.length));t.exports=x.apply(void 0,[_].concat(M));for(var f=0;f<=o;++f)t.exports[f]=M[f]}E()}}),B1=Rn({"node_modules/cdt2d/lib/delaunay.js"(n,t){var e=O1()[4];Ka(),t.exports=r;function i(s,o,a,u,h,d){var p=o.opposite(u,h);if(!(p<0)){if(h<u){var g=u;u=h,h=g,g=d,d=p,p=g}o.isConstraint(u,h)||e(s[u],s[h],s[d],s[p])<0&&a.push(u,h)}}function r(s,o){for(var a=[],u=s.length,h=o.stars,d=0;d<u;++d)for(var p=h[d],g=1;g<p.length;g+=2){var m=p[g];if(!(m<d)&&!o.isConstraint(d,m)){for(var y=p[g-1],M=-1,_=1;_<p.length;_+=2)if(p[_-1]===m){M=p[_];break}M<0||e(s[d],s[m],s[y],s[M])<0&&a.push(d,m)}}for(;a.length>0;){for(var m=a.pop(),d=a.pop(),y=-1,M=-1,p=h[d],x=1;x<p.length;x+=2){var E=p[x-1],f=p[x];E===m?M=f:f===m&&(y=E)}y<0||M<0||e(s[d],s[m],s[y],s[M])>=0||(o.flip(d,m),i(s,o,a,y,d,M),i(s,o,a,d,M,y),i(s,o,a,M,m,y),i(s,o,a,m,y,M))}}}}),z1=Rn({"node_modules/cdt2d/lib/filter.js"(n,t){var e=Ka();t.exports=u;function i(h,d,p,g,m,y,M){this.cells=h,this.neighbor=d,this.flags=g,this.constraint=p,this.active=m,this.next=y,this.boundary=M}var r=i.prototype;function s(h,d){return h[0]-d[0]||h[1]-d[1]||h[2]-d[2]}r.locate=(function(){var h=[0,0,0];return function(d,p,g){var m=d,y=p,M=g;return p<g?p<d&&(m=p,y=g,M=d):g<d&&(m=g,y=d,M=p),m<0?-1:(h[0]=m,h[1]=y,h[2]=M,e.eq(this.cells,h,s))}})();function o(h,d){for(var p=h.cells(),g=p.length,m=0;m<g;++m){var y=p[m],M=y[0],_=y[1],x=y[2];_<x?_<M&&(y[0]=_,y[1]=x,y[2]=M):x<M&&(y[0]=x,y[1]=M,y[2]=_)}p.sort(s);for(var E=new Array(g),m=0;m<E.length;++m)E[m]=0;var f=[],c=[],v=new Array(3*g),l=new Array(3*g),R=null;d&&(R=[]);for(var S=new i(p,v,l,E,f,c,R),m=0;m<g;++m)for(var y=p[m],b=0;b<3;++b){var M=y[b],_=y[(b+1)%3],w=v[3*m+b]=S.locate(_,M,h.opposite(_,M)),T=l[3*m+b]=h.isConstraint(M,_);w<0&&(T?c.push(m):(f.push(m),E[m]=1),d&&R.push([_,M,-1]))}return S}function a(h,d,p){for(var g=0,m=0;m<h.length;++m)d[m]===p&&(h[g++]=h[m]);return h.length=g,h}function u(h,d,p){var g=o(h,p);if(d===0)return p?g.cells.concat(g.boundary):g.cells;for(var m=1,y=g.active,M=g.next,_=g.flags,x=g.cells,E=g.constraint,f=g.neighbor;y.length>0||M.length>0;){for(;y.length>0;){var c=y.pop();if(_[c]!==-m){_[c]=m,x[c];for(var v=0;v<3;++v){var l=f[3*c+v];l>=0&&_[l]===0&&(E[3*c+v]?M.push(l):(y.push(l),_[l]=m))}}}var R=M;M=y,y=R,M.length=0,m=-m}var S=a(x,_,d);return p?S.concat(g.boundary):S}}}),k1=Rn({"node_modules/cdt2d/cdt2d.js"(n,t){var e=U1(),i=F1(),r=B1(),s=z1();t.exports=d;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,g){return p[0]-g[0]||p[1]-g[1]}function u(p){return p.map(o).sort(a)}function h(p,g,m){return g in p?p[g]:m}function d(p,g,m){Array.isArray(g)?(m=m||{},g=g||[]):(m=g||{},g=[]);var y=!!h(m,"delaunay",!0),M=!!h(m,"interior",!0),_=!!h(m,"exterior",!0),x=!!h(m,"infinity",!1);if(!M&&!_||p.length===0)return[];var E=e(p,g);if(y||M!==_||x){for(var f=i(p.length,u(g)),c=0;c<E.length;++c){var v=E[c];f.addTriangle(v[0],v[1],v[2])}return y&&r(p,f),_?M?x?s(f,0,x):f.cells():s(f,1,x):s(f,-1)}else return E}}});const G1=k1();class Er{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Yd=1e-16,H1=1e-16,xr=new U,Zd=new U,Kd=new Er(()=>({param:0,index:0})),V1=new Er(()=>new U);function $1(n,t,e,i){Kd.clear(),t.length=0,e.length=0;for(let h=0,d=n.length;h<d;h++){const p=n[h];u(p.start),u(p.end)}for(let h=0,d=n.length;h<d;h++){const p=n[h];for(let g=h+1;g<d;g++){const m=n[g];p.distanceSqToLine3(m,xr,Zd)<Yd*i&&u(Zd)}}const r=[];for(let h=0,d=n.length;h<d;h++){r.length=0;const p=n[h];for(let g=0,m=t.length;g<m;g++){const y=t[g],M=p.closestPointToPointParameter(y,!0);if(p.at(M,xr),y.distanceToSquared(xr)<Yd*i){const _=Kd.getInstance();_.param=M,_.index=g,r.push(_)}}r.sort(a);for(let g=0,m=r.length-1;g<m;g++){const y=r[g].index,M=r[g+1].index;y!==M&&e.push([y,M])}}const s=new Set;let o=0;for(let h=0,d=e.length;h<d;h++){const p=e[h],g=Math.min(p[0],p[1]),m=Math.max(p[0],p[1]),y=g+","+m;s.has(y)||(s.add(y),e[o++]=p)}e.length=o;function a(h,d){return h.param-d.param}function u(h){for(let d=0;d<t.length;d++){const p=t[d];if(h===p||h.distanceToSquared(p)<H1*i)return d}return t.push(V1.getInstance().copy(h)),t.length-1}}class Jd{constructor(){this.trianglePool=new Er(()=>new yn),this.linePool=new Er(()=>new Ze),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new U,this.projOrigin=new U,this.projU=new U,this.projV=new U,this.baseTri=new yn,this.baseIndices=new Array(3)}initialize(t,e=null,i=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:u,projOrigin:h,constrainedEdges:d,linePool:p,baseIndices:g}=this;t.getNormal(s),o.copy(t),o.update(),g[0]=e,g[1]=i,g[2]=r,d.length=0;const m=p.getInstance();m.start.copy(o.a),m.end.copy(o.b);const y=p.getInstance();y.start.copy(o.b),y.end.copy(o.c);const M=p.getInstance();M.start.copy(o.c),M.end.copy(o.a),d.push(m,y,M),h.copy(o.a),a.subVectors(o.b,o.a).normalize(),u.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:i}=this,r=i.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:i,projU:r,projV:s}=this;return xr.subVectors(t,i),e.set(xr.dot(r),xr.dot(s),0)}_from2D(t,e,i){const{projOrigin:r,projU:s,projV:o}=this;return i.copy(r).addScaledVector(s,t).addScaledVector(o,e),i}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:i,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:u}=this;t.length=0,e.clear();const h=[];for(let x=0,E=a.length;x<E;x++){const f=a[x],c=s.getInstance();this._to2D(f.start,c.start),this._to2D(f.end,c.end),h.push(c)}let d=0;for(let x=0;x<3;x++){const E=this._to2D(o.points[x],xr);d=Math.max(d,Math.abs(E.x),Math.abs(E.y))}const p=[],g=[];$1(h,p,g,d);const m=[];for(let x=0,E=p.length;x<E;x++){const f=p[x];m.push([f.x,f.y])}const y=G1(m,g,{exterior:!1}),M=new Map;for(let x=0,E=g.length;x<E;x++){const f=g[x];M.set(`${f[0]}_${f[1]}`,-1),M.set(`${f[1]}_${f[0]}`,-1)}const _=`${u[0]}_${u[1]}_${u[2]}_`;for(let x=0,E=y.length;x<E;x++){const f=y[x],[c,v,l]=f,R=e.getInstance();this._from2D(m[c][0],m[c][1],R.a),this._from2D(m[v][0],m[v][1],R.b),this._from2D(m[l][0],m[l][1],R.c),t.push(R);const S=[];i.push(S);const b=[];r.push(b);for(let w=0;w<3;w++){const T=f[w];b.push(T<3?u[T]:_+T);const A=f[(w+1)%3],C=`${T}_${A}`;if(M.has(C)){const D=M.get(C);D!==-1&&(S.push(D),i[D].push(x))}else{const D=`${A}_${T}`;M.set(D,x)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const W1=1e-14,nc=new U,jd=new U,Qd=new U;function Xi(n,t=W1){nc.subVectors(n.b,n.a),jd.subVectors(n.c,n.a),Qd.subVectors(n.b,n.c);const e=nc.angleTo(jd),i=nc.angleTo(Qd),r=Math.PI-e-i;return Math.abs(e)<t||Math.abs(i)<t||Math.abs(r)<t||n.a.distanceToSquared(n.b)<t||n.a.distanceToSquared(n.c)<t||n.b.distanceToSquared(n.c)<t}const ic=1e-10,Fs=1e-10,_i=new Ze,Ce=new Ze,xi=new U,tf=new U,ef=new U,Ko=new En,rc=new yn;class nf{constructor(){this.trianglePool=new Er(()=>new Se),this.triangles=[],this.normal=new U}initialize(t){this.reset();const{triangles:e,trianglePool:i,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(xi).dot(r))>ic)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const u=i.getInstance();u.copy(a),e.push(u)}else{t.getNormal(r);const s=i.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:i}=this;if(e){for(let s=0,o=i.length;s<o;s++){const a=i[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],u=r[o];t.getNormal(tf).normalize(),xi.subVectors(u,a).normalize(),ef.crossVectors(tf,xi),Ko.setFromNormalAndCoplanarPoint(ef,a),this.splitByPlane(Ko,t)}}else t.getPlane(Ko),this.splitByPlane(Ko,t)}splitByPlane(t,e){const{triangles:i,trianglePool:r}=this;rc.copy(e),rc.needsUpdate=!0;for(let s=0,o=i.length;s<o;s++){const a=i[s];if(!rc.intersectsTriangle(a,_i,!0))continue;const{a:u,b:h,c:d}=a;let p=0,g=-1,m=!1,y=[],M=[];const _=[u,h,d];for(let x=0;x<3;x++){const E=(x+1)%3;_i.start.copy(_[x]),_i.end.copy(_[E]);const f=t.distanceToPoint(_i.start),c=t.distanceToPoint(_i.end);if(Math.abs(f)<Fs&&Math.abs(c)<Fs){m=!0;break}if(f>0?y.push(x):M.push(x),Math.abs(f)<Fs)continue;let v=!!t.intersectLine(_i,xi);!v&&Math.abs(c)<Fs&&(xi.copy(_i.end),v=!0),v&&!(xi.distanceTo(_i.start)<ic)&&(xi.distanceTo(_i.end)<ic&&(g=x),p===0?Ce.start.copy(xi):Ce.end.copy(xi),p++)}if(!m&&p===2&&Ce.distance()>Fs)if(g!==-1){g=(g+1)%3;let x=0;x===g&&(x=(x+1)%3);let E=x+1;E===g&&(E=(E+1)%3);const f=r.getInstance();f.a.copy(_[E]),f.b.copy(Ce.end),f.c.copy(Ce.start),Xi(f)||i.push(f),a.a.copy(_[x]),a.b.copy(Ce.start),a.c.copy(Ce.end),Xi(a)&&(i.splice(s,1),s--,o--)}else{const x=y.length>=2?M[0]:y[0];if(x===0){let l=Ce.start;Ce.start=Ce.end,Ce.end=l}const E=(x+1)%3,f=(x+2)%3,c=r.getInstance(),v=r.getInstance();_[E].distanceToSquared(Ce.start)<_[f].distanceToSquared(Ce.end)?(c.a.copy(_[E]),c.b.copy(Ce.start),c.c.copy(Ce.end),v.a.copy(_[E]),v.b.copy(_[f]),v.c.copy(Ce.start)):(c.a.copy(_[f]),c.b.copy(Ce.start),c.c.copy(Ce.end),v.a.copy(_[E]),v.b.copy(_[f]),v.c.copy(Ce.end)),a.a.copy(_[x]),a.b.copy(Ce.end),a.c.copy(Ce.start),Xi(c)||i.push(c),Xi(v)||i.push(v),Xi(a)&&(i.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class rf{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,i=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),i&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:i}=this;i.has(t)||i.set(t,new Set),i.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const X1=0,Ja=1,q1=2,Y1=3,Z1=4,Qp=5,tg=6,sc=1e-10,K1=1e-15,J1=1e-10,j1=1e-10,sf=new Ze,jr=new Ze,of=new U,af=new U,lf=new U,oc=new En,ls=new U,Ua=new U;function Q1(n,t){n.getNormal(ls),t.getNormal(Ua);const e=ls.dot(Ua);if(Math.abs(1-Math.abs(e))>=J1)return!1;const i=ls.dot(n.a),r=ls.dot(t.a);return Math.abs(i-r)<j1}function cf(n,t,e,i){let r=0,s=1;n.delta(of);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const u=o[a],h=o[(a+1)%3];af.subVectors(h,u),lf.crossVectors(e,af),oc.setFromNormalAndCoplanarPoint(lf,u);const d=oc.distanceToPoint(n.start),p=oc.normal.dot(of);if(Math.abs(p)<K1){if(d<-sc)return null;continue}const g=-d/p;if(p>0?r=Math.max(r,g):s=Math.min(s,g),r>s+sc)return null}return s-r<sc?null:(n.at(r,i.start),n.at(s,i.end),i)}function uf(n,t,e){let i=0;n.getNormal(ls),t.getNormal(Ua);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){jr.start.copy(r[o]),jr.end.copy(r[(o+1)%3]);const a=cf(jr,n,ls,sf);a!==null&&(i>=e.length&&e.push(new Ze),e[i].copy(a),i++)}const s=[n.a,n.b,n.c];for(let o=0;o<3;o++){jr.start.copy(s[o]),jr.end.copy(s[(o+1)%3]);const a=cf(jr,t,Ua,sf);a!==null&&(i>=e.length&&e.push(new Ze),e[i].copy(a),i++)}return i}const Qr=new vs,hf=new re,Jo=new Ze,ac=[],jo=new Er(()=>new Ze),ns=-1,is=1,pa=-2,ga=2,$s=0,dr=1,Xu=2;let ma=null;function df(n){ma=n}function eg(n,t,e=null){n.getMidpoint(Qr.origin),n.getNormal(Qr.direction),e&&(Qr.origin.applyMatrix4(e),Qr.direction.transformDirection(e));const i=t.raycastFirst(Qr,Wn);return!!(i&&Qr.direction.dot(i.face.normal)>0)?ns:is}function tE(n,t){const e=new rf,i=new rf;return jo.clear(),hf.copy(n.matrixWorld).invert().multiply(t.matrixWorld),n.geometry.boundsTree.bvhcast(t.geometry.boundsTree,hf,{intersectsTriangles(r,s,o,a){if(!Xi(r)&&!Xi(s)){const h=(Q1(r,s)?uf(r,s,ac):0)>2;if(h||r.intersectsTriangle(s,Jo,!0)){const p=n.geometry.boundsTree.resolveTriangleIndex(o),g=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,g,h),i.add(g,p,h),h){const m=uf(r,s,ac);for(let y=0;y<m;y++){const M=jo.getInstance().copy(ac[y]);e.addIntersectionEdge(p,M),i.addIntersectionEdge(g,M)}}else{const m=jo.getInstance().copy(Jo),y=jo.getInstance().copy(Jo);e.addIntersectionEdge(p,m),i.addIntersectionEdge(g,y)}ma&&(ma.addEdge(Jo),ma.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:i}}function ng(n,t,e=!1){switch(n){case X1:if(t===is||t===ga&&!e)return dr;break;case Ja:if(e){if(t===ns)return $s}else if(t===is||t===pa)return dr;break;case q1:if(e){if(t===is||t===pa)return dr}else if(t===ns)return $s;break;case Z1:if(t===ns)return $s;if(t===is)return dr;break;case Y1:if(t===ns||t===ga&&!e)return dr;break;case Qp:if(!e&&(t===is||t===pa))return dr;break;case tg:if(!e&&(t===ns||t===ga))return dr;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return Xu}class eE{constructor(t){this.triangle=new Se().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new Se().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const i in e)t.push(e[i]);return t}}class ff{constructor(){this.data={}}addTriangleIntersection(t,e,i,r){const{data:s}=this;s[t]||(s[t]=new eE(e)),s[t].addTriangle(i,r)}getTrianglesAsArray(t=null){const{data:e}=this,i=[];if(t!==null)t in e&&i.push(e[t].triangle);else for(const r in e)i.push(e[r].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(t=null,e=null){const{data:i}=this,r=new Set,s=[],o=a=>{if(i[a])if(e!==null)i[a].intersects[e]&&s.push(i[a].intersects[e]);else{const u=i[a].intersects;for(const h in u)r.has(h)||(r.add(h),s.push(u[h]))}};if(t!==null)o(t);else for(const a in i)o(a);return s}reset(){this.data={}}}class nE{constructor(){this.enabled=!1,this.triangleIntersectsA=new ff,this.triangleIntersectsB=new ff,this.intersectionEdges=[]}addIntersectingTriangles(t,e,i,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,i,r),o.addTriangleIntersection(i,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),df(this))}complete(){this.enabled&&df(null)}}const bn=new re,fr=new re,vn=new re,Vi=new Yt,Hn=new Se,pr=new Se,Vn=new Se,Gi=new Se,yr=[],ti=[],Qo=new Set,pf=new U,gf=new U,mf=new Er(()=>new Se),_f=new U,ta=[];function iE(n,t,e,i,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:u}=tE(n,t),h=[];let d=null,p;return p=o?0:-1,vf(n,t,a,e,!1,r,p),xf(n,t,a,e,!1,i,r,p),e.findIndex(m=>m!==tg&&m!==Qp)!==-1&&(r.forEach(m=>m.clearIndexMap()),p=o?n.geometry.groups.length||1:-1,vf(t,n,u,e,!0,r,p),xf(t,n,u,e,!0,i,r,p)),r.forEach(m=>m.clearIndexMap()),yr.length=0,{groups:h,materials:d}}function xf(n,t,e,i,r,s,o,a=0){bn.copy(t.matrixWorld).invert().multiply(n.matrixWorld),fr.copy(bn).invert(),r?vn.copy(bn):vn.identity();const u=vn.determinant()<0;Vi.getNormalMatrix(vn).multiplyScalar(u?-1:1);const h=n.geometry.groupIndices,d=n.geometry.index,p=n.geometry.attributes.position,g=t.geometry.boundsTree,m=t.geometry.index,y=t.geometry.attributes.position,M=e.ids;for(let _=0,x=M.length;_<x;_++){const E=M[_],f=a===-1?0:h[E]+a,c=3*E;let v=c+0,l=c+1,R=c+2;d&&(v=d.getX(v),l=d.getX(l),R=d.getX(R)),Hn.a.fromBufferAttribute(p,v),Hn.b.fromBufferAttribute(p,l),Hn.c.fromBufferAttribute(p,R),r&&(Hn.a.applyMatrix4(bn),Hn.b.applyMatrix4(bn),Hn.c.applyMatrix4(bn)),s.reset(),s.initialize(Hn,v,l,R),ta.length=0,mf.clear(),Hn.getNormal(gf);const S=e.coplanarSet.get(E);if(S)for(const A of S){const C=3*A;let D=C+0,L=C+1,F=C+2;m&&(D=m.getX(D),L=m.getX(L),F=m.getX(F));const O=mf.getInstance();O.a.fromBufferAttribute(y,D),O.b.fromBufferAttribute(y,L),O.c.fromBufferAttribute(y,F),r||(O.a.applyMatrix4(fr),O.b.applyMatrix4(fr),O.c.applyMatrix4(fr)),ta.push(O)}if(s.addConstraintEdge){const A=e.getIntersectionEdges(E);if(A)for(const C of A)s.addConstraintEdge(C);s.triangulate()}else{const C=e.intersectionSet.get(E);for(let D=0,L=C.length;D<L;D++){const F=C[D],O=S&&S.has(F),k=3*F;let B=k+0,$=k+1,W=k+2;m&&(B=m.getX(B),$=m.getX($),W=m.getX(W)),pr.a.fromBufferAttribute(y,B),pr.b.fromBufferAttribute(y,$),pr.c.fromBufferAttribute(y,W),r||(pr.a.applyMatrix4(fr),pr.b.applyMatrix4(fr),pr.c.applyMatrix4(fr)),s.splitByTriangle(pr,O)}}const{triangles:b,triangleIndices:w=[],triangleConnectivity:T=[]}=s;for(let A=0,C=o.length;A<C;A++)o[A].initInterpolatedAttributeData(n.geometry,vn,Vi,v,l,R);Qo.clear();for(let A=0,C=b.length;A<C;A++){if(Qo.has(A))continue;const D=b[A],L=r?null:bn;let F=null;D.getMidpoint(pf);for(let O=0,k=ta.length;O<k;O++){const B=ta[O];if(B.containsPoint(pf)){B.getNormal(_f),F=gf.dot(_f)>0?ga:pa;break}}F===null&&(F=eg(D,g,L)),yr.length=0,ti.length=0;for(let O=0,k=i.length;O<k;O++){const B=ng(i[O],F,r);B!==Xu&&(yr.push(B),ti.push(o[O]))}if(ti.length!==0){const O=[A];for(;O.length>0;){const k=O.pop();if(Qo.has(k))continue;Qo.add(k);const B=w[k];let $=null,W=null,st=null;B&&($=B[0],W=B[1],st=B[2]);const ct=b[k];Hn.getBarycoord(ct.a,Gi.a),Hn.getBarycoord(ct.b,Gi.b),Hn.getBarycoord(ct.c,Gi.c);for(let gt=0,ut=ti.length;gt<ut;gt++){const ot=ti[gt],K=yr[gt]===$s,at=u!==K;ot.appendInterpolatedAttributeData(f,Gi.a,$,at),at?(ot.appendInterpolatedAttributeData(f,Gi.c,st,at),ot.appendInterpolatedAttributeData(f,Gi.b,W,at)):(ot.appendInterpolatedAttributeData(f,Gi.b,W,at),ot.appendInterpolatedAttributeData(f,Gi.c,st,at))}}}}}return M.length}function vf(n,t,e,i,r,s,o=0){bn.copy(t.matrixWorld).invert().multiply(n.matrixWorld),r?vn.copy(bn):vn.identity();const a=vn.determinant()<0;Vi.getNormalMatrix(vn).multiplyScalar(a?-1:1);const u=t.geometry.boundsTree,h=n.geometry.groupIndices,d=n.geometry.index,g=n.geometry.attributes.position,m=[],y=n.geometry.halfEdges,M=new Set(e.ids),_=$u(n.geometry);for(let x=0;x<_&&M.size!==_;x++){if(M.has(x))continue;M.add(x),m.push(x);const E=3*x;let f=E+0,c=E+1,v=E+2;d&&(f=d.getX(f),c=d.getX(c),v=d.getX(v)),Vn.a.fromBufferAttribute(g,f),Vn.b.fromBufferAttribute(g,c),Vn.c.fromBufferAttribute(g,v),r&&(Vn.a.applyMatrix4(bn),Vn.b.applyMatrix4(bn),Vn.c.applyMatrix4(bn));const l=eg(Vn,u,r?null:bn);yr.length=0,ti.length=0;for(let R=0,S=i.length;R<S;R++){const b=ng(i[R],l,r);b!==Xu&&(yr.push(b),ti.push(s[R]))}for(;m.length>0;){const R=m.pop();for(let S=0;S<3;S++){const b=y.getSiblingTriangleIndex(R,S);b!==-1&&!M.has(b)&&(m.push(b),M.add(b))}if(ti.length!==0){const S=3*R;let b=S+0,w=S+1,T=S+2;d&&(b=d.getX(b),w=d.getX(w),T=d.getX(T));const A=o===-1?0:h[R]+o;if(Vn.a.fromBufferAttribute(g,b),Vn.b.fromBufferAttribute(g,w),Vn.c.fromBufferAttribute(g,T),!Xi(Vn))for(let C=0,D=ti.length;C<D;C++){const L=ti[C],k=yr[C]===$s!==a;L.appendIndexFromGeometry(n.geometry,vn,Vi,A,b,k),k?(L.appendIndexFromGeometry(n.geometry,vn,Vi,A,T,k),L.appendIndexFromGeometry(n.geometry,vn,Vi,A,w,k)):(L.appendIndexFromGeometry(n.geometry,vn,Vi,A,w,k),L.appendIndexFromGeometry(n.geometry,vn,Vi,A,T,k))}}}}}function rE(n){return n=~~n,n+4-n%4}class sE{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,i=Zp()?SharedArrayBuffer:ArrayBuffer,r=new e(new i(rE(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:i}=this;i+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[i+r]=t[r];this.length+=t.length}clear(){this.length=0}}const _n=new U,lc=new U,cc=new U,uc=new U,ea=new ge,oE=new ge,aE=new ge,lE=new ge;function cE(n,t,e,i,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(n,i.x).addScaledVector(t,i.y).addScaledVector(e,i.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function yf(n,t,e){switch(t){case 1:e.push(n.x);break;case 2:e.push(n.x,n.y);break;case 3:e.push(n.x,n.y,n.z);break;case 4:e.push(n.x,n.y,n.z,n.w);break}}class hc extends sE{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class uE{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:i}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],u=r[a],h=u.array.constructor;i[a]||(i[a]=new hc(h)),i[a].setType(h),i[a].itemSize=u.itemSize,i[a].normalized=u.normalized}for(const s in i.attributes)e.includes(s)||i.delete(s)}initInterpolatedAttributeData(t,e,i,r,s,o){const{attributeData:a,interpolatedFields:u}=this,{attributes:h}=t;for(const d in a){const p=h[d];if(!p)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let g,m,y;if(d==="position"?(g=lc.fromBufferAttribute(p,r).applyMatrix4(e),m=cc.fromBufferAttribute(p,s).applyMatrix4(e),y=uc.fromBufferAttribute(p,o).applyMatrix4(e)):d==="normal"?(g=lc.fromBufferAttribute(p,r).applyNormalMatrix(i),m=cc.fromBufferAttribute(p,s).applyNormalMatrix(i),y=uc.fromBufferAttribute(p,o).applyNormalMatrix(i)):d==="tangent"?(g=lc.fromBufferAttribute(p,r).transformDirection(e),m=cc.fromBufferAttribute(p,s).transformDirection(e),y=uc.fromBufferAttribute(p,o).transformDirection(e)):(g=oE.fromBufferAttribute(p,r),m=aE.fromBufferAttribute(p,s),y=lE.fromBufferAttribute(p,o)),!u[d])u[d]=[g.clone(),m.clone(),y.clone()];else{const M=u[d];M[0].copy(g),M[1].copy(m),M[2].copy(y)}}}appendInterpolatedAttributeData(t,e,i=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:u,invertedIndexMap:h}=this;for(;s.length<=t;)s.push(new hc(Uint32Array));const d=r?h:u,p=s[t];if(i!==null&&d.has(i))p.push(d.get(i));else{d.set(i,o.position.count),p.push(o.position.count);for(const g in a){const m=o[g],y=g==="normal"||g==="tangent",M=r&&y,_=m.itemSize,[x,E,f]=a[g];cE(x,E,f,e,ea,y,M),yf(ea,_,m)}}}appendIndexFromGeometry(t,e,i,r,s,o=!1){const{groupIndices:a,attributeData:u,forwardIndexMap:h,invertedIndexMap:d}=this;for(;a.length<=r;)a.push(new hc(Uint32Array));const p=o?d:h,g=a[r];if(s!==null&&p.has(s))g.push(p.get(s));else{p.set(s,u.position.count),g.push(u.position.count);const{attributes:m}=t;for(const y in u){const M=u[y],_=m[y];if(!_)throw new Error(`CSG Operations: Attribute ${y} not available on geometry.`);const x=_.itemSize;y==="position"?(_n.fromBufferAttribute(_,s).applyMatrix4(e),M.push(_n.x,_n.y,_n.z)):y==="normal"?(_n.fromBufferAttribute(_,s).applyNormalMatrix(i),o&&_n.multiplyScalar(-1),M.push(_n.x,_n.y,_n.z)):y==="tangent"?(_n.fromBufferAttribute(_,s).transformDirection(e),o&&_n.multiplyScalar(-1),M.push(_n.x,_n.y,_n.z)):(ea.fromBufferAttribute(_,s),yf(ea,x,M))}}}buildGeometry(t,e){let i=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const d in s){const p=s[d],{type:g,itemSize:m,normalized:y,length:M,count:_}=p,x=p.array.buffer;let E=o[d];(!E||E.count<_||E.array.type!==g)&&(E=new An(new g(M),m,y),t.setAttribute(d,E),i=!0),E.array.set(new g(x,0,M),0),E.needsUpdate=!0}const u=r.reduce((d,p)=>p.count+d,0);(!t.index||a.count<u||a.array.type!==Uint32Array)&&(t.setIndex(new An(new Uint32Array(u),1)),i=!0),t.clearGroups();let h=0;for(let d=0,p=Math.min(e.length,r.length);d<p;d++){const{index:g,materialIndex:m}=e[d],{count:y}=r[g],M=r[g].array.buffer;y!==0&&(t.index.array.set(new Uint32Array(M,0,y),h),t.addGroup(h,y,m),h+=y)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,i&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const i in e)e[i].clear();t.forEach(i=>{i.clear()}),this.clearIndexMap()}}function hE(n,t){for(const e in n.attributes)t.includes(e)||(n.deleteAttribute(e),n.dispose());return n}function dE(n,t){const e=[];for(let i=0,r=n.length;i<r;i++){const s=n[i],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function fE(n,t){const e=[],i=new Map;for(let r=0,s=n.length;r<s;r++){const o=n[r];i.has(o.materialIndex)||(i.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=i.get(o.materialIndex)}return e}function pE(n){for(let t=0;t<n.length-1;t++){const e=n[t],i=n[t+1];if(e.materialIndex===i.materialIndex){const r=e.start,s=i.start+i.count;i.start=r,i.count=s-r,n.splice(t,1),t--}}}function Sf(n,t){let e=t;return Array.isArray(t)||(e=[],n.forEach(i=>{e[i.materialIndex]=t})),e}class gE{get useCDTClipping(){return this.triangleSplitter instanceof Jd}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Jd:new nf)}constructor(){this.triangleSplitter=new nf,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new nE}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(i=>({...i}))}evaluate(t,e,i,r=new Wi){let s=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(r)||(r=[r],s=!1),r.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:u,useGroups:h,consolidateGroups:d,removeUnusedMaterials:p,debug:g}=this;for(;a.length<r.length;)a.push(new uE);r.forEach((f,c)=>{a[c].initFromGeometry(t.geometry,u),hE(f.geometry,u)}),g.init(),iE(t,e,i,o,a,{useGroups:h}),g.complete();const m=this.getGroupRanges(t.geometry),y=Sf(m,t.material),M=this.getGroupRanges(e.geometry),_=Sf(M,e.material);M.forEach(f=>f.materialIndex+=y.length);const x=[...y,..._];let E=[...m,...M].map((f,c)=>({...f,index:c}));return h?h&&d&&(E=dE(E,x),E.sort((f,c)=>f.materialIndex-c.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((f,c)=>{const v=f.geometry;a[c].buildGeometry(v,E),t.matrixWorld.decompose(f.position,f.quaternion,f.scale),f.updateMatrix(),f.matrixWorld.copy(t.matrixWorld),h?(f.material=x,d&&pE(v.groups),p&&(f.material=fE(v.groups,x))):f.material=x[0]}),s?r:r[0]}evaluateHierarchy(t,e=new Wi){t.updateMatrixWorld(!0);const i=(s,o)=>{const a=s.children;for(let u=0,h=a.length;u<h;u++){const d=a[u];d.isOperationGroup?i(d,o):o(d)}},r=s=>{const o=s.children;let a=!1;for(let h=0,d=o.length;h<d;h++){const p=o[h];a=r(p)||a}const u=s.isDirty();if(u&&s.markUpdated(),a&&!s.isOperationGroup){let h;return i(s,d=>{h?h=this.evaluate(h,d,d.operation):h=this.evaluate(s,d,d.operation)}),s._cachedGeometry=h.geometry,s._cachedMaterials=h.material,!0}else return a||u};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const ja=new gE;ja.useGroups=!1;const qu=new Ip({color:2450411,roughness:.4,metalness:.3,flatShading:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),gr=new Ip({color:16096779,transparent:!0,opacity:.38,roughness:.25,metalness:.1,side:oi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),ig=new wr({color:1920728,transparent:!0,opacity:.8}),Os=new wr({color:14251782,transparent:!0,opacity:.9}),vi=.2;function rs(n,t,e,i,r,s,o){const a=[new U(n,t,r),new U(e,t,r),new U(e,t,r),new U(e,i,r),new U(e,i,r),new U(n,i,r),new U(n,i,r),new U(n,t,r),new U(n,t,s),new U(e,t,s),new U(e,t,s),new U(e,i,s),new U(e,i,s),new U(n,i,s),new U(n,i,s),new U(n,t,s),new U(n,t,r),new U(n,t,s),new U(e,t,r),new U(e,t,s),new U(e,i,r),new U(e,i,s),new U(n,i,r),new U(n,i,s)],u=new Qe().setFromPoints(a);return new gs(u,o)}function mE(n,t,e,i,r,s=48,o){const a=[];for(let h=0;h<s;h++){const d=h/s*Math.PI*2,p=(h+1)/s*Math.PI*2,g=n+e*Math.cos(d),m=t+e*Math.sin(d),y=n+e*Math.cos(p),M=t+e*Math.sin(p);a.push(new U(g,m,i),new U(y,M,i)),a.push(new U(g,m,r),new U(y,M,r)),h%(s/4)===0&&a.push(new U(g,m,i),new U(g,m,r))}const u=new Qe().setFromPoints(a);return new gs(u,o)}function rg(n){const t=Math.max(1,et(n.stockWidth,100)),e=Math.max(1,et(n.stockHeight,75)),i=Math.max(.5,et(n.stockThickness,12.7)),r=new rn(t,e,i);r.translate(t/2,e/2,-i/2);const s=new Wi(r,qu);return s.updateMatrixWorld(),{brush:s,w:t,h:e,t:i}}function sg(n,t){const i=Yn(n.toolId).diameterMm,r=Math.max(1,et(t.stockWidth,100)),s=Math.max(1,et(t.stockHeight,75)),o=Math.max(.5,et(t.stockThickness,12.7));switch(n.type){case"surfacing":{const a=et(n.x,0),u=et(n.y,0),h=Math.max(.1,et(n.width,r)),d=Math.max(.1,et(n.height,s)),p=Math.max(.01,Math.min(o,et(n.cutDepth,1))),g=p+vi,m=new rn(h,d,g);m.translate(a+h/2,u+d/2,(vi-p)/2);const y=new Wi(m);return y.updateMatrixWorld(),y}case"profiling":{const a=et(n.x,0),u=et(n.y,0),h=Math.max(.1,et(n.width,50)),d=Math.max(.1,et(n.height,50)),p=Math.max(.01,Math.min(o+1,et(n.cutDepth,5))),g=p+vi;let m,y,M,_,x,E,f,c;n.side==="outside"?(m=a-i,y=a+h+i,M=u-i,_=u+d+i,x=a,E=a+h,f=u,c=u+d):(m=a,y=a+h,M=u,_=u+d,x=Math.min(a+h/2,a+i),E=Math.max(a+h/2,a+h-i),f=Math.min(u+d/2,u+i),c=Math.max(u+d/2,u+d-i));const v=y-m,l=_-M,R=Math.max(.01,E-x),S=Math.max(.01,c-f),b=new rn(v,l,g);b.translate((m+y)/2,(M+_)/2,(vi-p)/2);const w=new Wi(b);w.updateMatrixWorld();const T=new rn(R,S,g+.5);T.translate((x+E)/2,(f+c)/2,(vi-p)/2);const A=new Wi(T);A.updateMatrixWorld();try{const C=ja.evaluate(w,A,Ja);return C.updateMatrixWorld(),C}catch{return w}}case"pocket":{const a=et(n.x,0),u=et(n.y,0),h=Math.max(.1,et(n.width,40)),d=Math.max(.1,et(n.height,30)),p=Math.max(.01,Math.min(o,et(n.cutDepth,3))),g=p+vi,m=new rn(h,d,g);m.translate(a+h/2,u+d/2,(vi-p)/2);const y=new Wi(m);return y.updateMatrixWorld(),y}case"hole":{const a=et(n.x,r/2),u=et(n.y,s/2),h=Math.max(.1,et(n.diameter,i)),d=Math.max(.01,Math.min(o+2,et(n.cutDepth,5))),p=h/2,g=d+vi,m=new $a(p,p,g,48);m.rotateX(Math.PI/2),m.translate(a,u,(vi-d)/2);const y=new Wi(m);return y.updateMatrixWorld(),y}}return null}function og(n,t){const{brush:e,w:i,h:r,t:s}=rg(t),a=Yn(n.toolId).diameterMm;let u=null;const h=[];let d;switch(n.type){case"surfacing":{const m=et(n.x,0),y=et(n.y,0),M=Math.max(.1,et(n.width,i)),_=Math.max(.1,et(n.height,r)),x=Math.max(.01,Math.min(s,et(n.cutDepth,1))),E=new rn(M,_,x);E.translate(m+M/2,y+_/2,-x/2),u=new Je(E,gr),h.push(rs(m,y,m+M,y+_,0,-x,Os));break}case"profiling":{const m=et(n.x,0),y=et(n.y,0),M=Math.max(.1,et(n.width,50)),_=Math.max(.1,et(n.height,50)),x=Math.max(.01,Math.min(s+1,et(n.cutDepth,5)));let E,f,c,v,l,R,S,b;n.side==="outside"?(E=m-a,f=m+M+a,c=y-a,v=y+_+a,l=m,R=m+M,S=y,b=y+_):(E=m,f=m+M,c=y,v=y+_,l=Math.min(m+M/2,m+a),R=Math.max(m+M/2,m+M-a),S=Math.min(y+_/2,y+a),b=Math.max(y+_/2,y+_-a));const w=Math.max(.01,R-l),T=v-c,A=new Ei,C=-x/2,D=l-E;if(D>.01){const k=new rn(D,T,x);k.translate((E+l)/2,(c+v)/2,C),A.add(new Je(k,gr))}const L=f-R;if(L>.01){const k=new rn(L,T,x);k.translate((R+f)/2,(c+v)/2,C),A.add(new Je(k,gr))}const F=S-c;if(F>.01){const k=new rn(w,F,x);k.translate((l+R)/2,(c+S)/2,C),A.add(new Je(k,gr))}const O=v-b;if(O>.01){const k=new rn(w,O,x);k.translate((l+R)/2,(b+v)/2,C),A.add(new Je(k,gr))}u=A,h.push(rs(E,c,f,v,0,-x,Os)),h.push(rs(l,S,R,b,0,-x,Os));break}case"pocket":{const m=et(n.x,0),y=et(n.y,0),M=Math.max(.1,et(n.width,40)),_=Math.max(.1,et(n.height,30)),x=Math.max(.01,Math.min(s,et(n.cutDepth,3)));(M<a||_<a)&&(d=`Pocket size (${M.toFixed(1)}x${_.toFixed(1)}mm) is smaller than tool diameter (${a.toFixed(2)}mm).`);const E=new rn(M,_,x);E.translate(m+M/2,y+_/2,-x/2),u=new Je(E,gr),h.push(rs(m,y,m+M,y+_,0,-x,Os));break}case"hole":{const m=et(n.x,i/2),y=et(n.y,r/2),M=Math.max(.1,et(n.diameter,a)),_=Math.max(.01,Math.min(s+2,et(n.cutDepth,5)));M<a-.05&&(d=`Hole diameter (${M.toFixed(2)}mm) is smaller than bit diameter (${a.toFixed(2)}mm).`);const x=M/2,E=new $a(x,x,_,48);E.rotateX(Math.PI/2),E.translate(m,y,-_/2),u=new Je(E,gr),h.push(mE(m,y,x,0,-_,48,Os));break}}const p=sg(n,t);let g;if(p)try{g=ja.evaluate(e,p,Ja),g.material=qu}catch{g=e}else g=e;return h.push(rs(0,0,i,r,0,-s,ig)),{remainingStock:g,cutVolume:u||void 0,wireframes:h,warning:d}}function _E(n,t){const e=Math.max(1,et(t.stockWidth,100)),i=Math.max(1,et(t.stockHeight,75)),r=Math.max(.5,et(t.stockThickness,12.7));let s=rg(t).brush;const o=new Ei,a=[];let u;for(const h of n){if(!h.enabled)continue;const{cutVolume:d,wireframes:p,warning:g}=og(h,t);g&&!u&&(u=g);const m=sg(h,t);if(m)try{const y=ja.evaluate(s,m,Ja);y.material=qu,s=y}catch(y){console.warn("CSG subtraction error on op:",h.name,y)}if(d&&o.add(d.clone()),p)for(let y=0;y<p.length-1;y++)a.push(p[y])}return a.push(rs(0,0,e,i,0,-r,ig)),{remainingStock:s,cutVolume:o.children.length>0?o:void 0,wireframes:a,warning:u}}const Mf={type:"change"},Yu={type:"start"},ag={type:"end"},na=new vs,bf=new En,xE=Math.cos(70*T0.DEG2RAD),Oe=new U,xn=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dc=1e-6;class vE extends mx{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ji,this._lastTargetPosition=new U,this._quat=new Ji().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qh,this._sphericalDelta=new Qh,this._scale=1,this._panOffset=new U,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new U,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=SE.bind(this),this._onPointerDown=yE.bind(this),this._onPointerUp=ME.bind(this),this._onContextMenu=RE.bind(this),this._onMouseWheel=wE.bind(this),this._onKeyDown=TE.bind(this),this._onTouchStart=AE.bind(this),this._onTouchMove=CE.bind(this),this._onMouseDown=bE.bind(this),this._onMouseMove=EE.bind(this),this._interceptControlDown=PE.bind(this),this._interceptControlUp=DE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mf),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),r<-Math.PI?r+=xn:r>Math.PI&&(r-=xn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const u=a-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new U(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<xE?this.object.lookAt(this.target):(bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(bf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dc||this._lastTargetPosition.distanceToSquared(this.target)>dc?(this.dispatchEvent(Mf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Oe.copy(r).sub(this.target);let s=Oe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function SE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ME(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ag),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function bE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Yu)}function EE(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function wE(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(Yu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ag))}function TE(n){this.enabled!==!1&&this._handleKeyDown(n)}function AE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Yu)}function CE(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function RE(n){this.enabled!==!1&&n.preventDefault()}function PE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class IE{constructor(t){Ke(this,"canvas");Ke(this,"renderer");Ke(this,"scene");Ke(this,"camera");Ke(this,"controls");Ke(this,"animationFrameId",null);Ke(this,"resizeObserver",null);Ke(this,"meshGroup");Ke(this,"toolpathGroup");Ke(this,"helpersGroup");this.canvas=t,this.renderer=new pb({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth,t.clientHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ip,this.scene=new k0,this.scene.background=new te(1184276);const e=t.clientWidth/(t.clientHeight||1);this.camera=new Un(45,e,1,2e3),this.camera.up.set(0,0,1),this.camera.position.set(120,-140,100),this.controls=new vE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.target.set(50,40,-6),this.controls.update(),this.meshGroup=new Ei,this.toolpathGroup=new Ei,this.helpersGroup=new Ei,this.scene.add(this.meshGroup),this.scene.add(this.toolpathGroup),this.scene.add(this.helpersGroup),this.setupLights(),this.setupHelpers(100,75,12.7),this.resizeObserver=new ResizeObserver(()=>{this.handleResize()}),this.resizeObserver.observe(t),this.startRenderLoop()}setupLights(){const t=new cx(16777215,.7);this.scene.add(t);const e=new jh(16777215,.9);e.position.set(100,-100,150),this.scene.add(e);const i=new jh(9741240,.4);i.position.set(-80,80,-50),this.scene.add(i);const r=new ox(14870768,1976635,.4);this.scene.add(r)}setupHelpers(t,e,i=12.7){this.helpersGroup.clear();const r=new gx(Math.max(30,Math.min(t,e)*.5));r.position.set(0,0,0),this.helpersGroup.add(r);const s=Math.max(150,Math.max(t,e)*1.6),o=new px(s,Math.round(s/10),3684414,2236966);o.rotateX(Math.PI/2),o.position.set(t/2,e/2,-i-.2),this.helpersGroup.add(o)}updateMeshes(t,e=!0){if(this.meshGroup.clear(),t.remainingStock&&this.meshGroup.add(t.remainingStock),e&&t.cutVolume&&this.meshGroup.add(t.cutVolume),t.wireframes)for(let i=0;i<t.wireframes.length;i++){const r=t.wireframes[i];(i===t.wireframes.length-1||e)&&this.meshGroup.add(r)}}updateToolpaths(t,e=!0){if(this.toolpathGroup.clear(),!(!e||t.length===0))for(const i of t){const r=[],s=[];let o=new U(0,0,10);for(const a of i.moves){const u=new U(a.x!==void 0?a.x:o.x,a.y!==void 0?a.y:o.y,a.z!==void 0?a.z:o.z);if(a.type==="rapid")s.push(o.clone(),u.clone());else if(a.type==="arc-cw"||a.type==="arc-ccw"){const h=a.type==="arc-cw",d=a.i??0,p=a.j??0,g=o.x+d,m=o.y+p,y=Math.hypot(d,p);if(y>1e-4){const M=Math.atan2(o.y-m,o.x-g),_=Math.atan2(u.y-m,u.x-g);let x=h?M-_:_-M;for(;x<=1e-5;)x+=2*Math.PI;const E=24;let f=o.clone();for(let c=1;c<=E;c++){const v=c/E,l=h?M-v*x:M+v*x,R=o.z+v*(u.z-o.z),S=new U(g+y*Math.cos(l),m+y*Math.sin(l),R);r.push(f.clone(),S.clone()),f=S}}else r.push(o.clone(),u.clone())}else r.push(o.clone(),u.clone());o=u}if(r.length>0){const a=new Qe().setFromPoints(r),u=new wr({color:440020,linewidth:1.5}),h=new gs(a,u);this.toolpathGroup.add(h)}if(s.length>0){const a=new Qe().setFromPoints(s),u=new sx({color:15381256,dashSize:2,gapSize:1.5,transparent:!0,opacity:.5}),h=new gs(a,u);h.computeLineDistances(),this.toolpathGroup.add(h)}}}fitView(t,e,i){const r=t/2,s=e/2,o=-i/2;this.controls.target.set(r,s,o);const a=Math.max(t,e,i);this.camera.position.set(r+a*.9,s-a*1.2,o+a*1.1),this.controls.update()}setViewPreset(t,e,i,r){const s=e/2,o=i/2,a=-r/2,u=Math.max(e,i)*1.6;switch(this.controls.target.set(s,o,a),t){case"iso":this.camera.position.set(s+u*.7,o-u*.9,a+u*.8);break;case"top":this.camera.position.set(s,o,a+u*1.3);break;case"front":this.camera.position.set(s,o-u*1.3,a);break;case"right":this.camera.position.set(s+u*1.3,o,a);break}this.controls.update()}handleResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1))}startRenderLoop(){const t=()=>{this.animationFrameId=requestAnimationFrame(t),this.controls.update(),this.renderer.render(this.scene,this.camera)};t()}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.resizeObserver&&this.resizeObserver.disconnect(),this.controls.dispose(),this.renderer.dispose()}}var LE=Pt('<div class=legend-item><span class="legend-color legend-path"></span><span>Cutting Move'),NE=Pt('<div class=legend-item><span class="legend-color legend-rapid"></span><span>Rapid Move'),UE=Pt(`<div class=preview-container><div class=preview-toolbar><div class=toolbar-left><div class=segmented-control><button title="Preview only the selected operation's cut">Selected Op</button><button title="Preview all operations accumulated">Full Part</button></div><label class=toolbar-toggle title="Toggle toolpath lines in 3D"><input type=checkbox><span>Toolpaths</span></label></div><div class=toolbar-right><div class=btn-group-views><button class=btn-view title="Isometric View">Iso</button><button class=btn-view title="Top Plan View (XY)">Top</button><button class=btn-view title="Front View (XZ)">Front</button><button class=btn-view title="Right View (YZ)">Right</button><button class=btn-view title="Fit to Stock">Fit</button></div></div></div><div class=canvas-wrapper><canvas class=webgl-canvas></canvas><div class=preview-legend><div class=legend-item><span class="legend-color legend-stock"></span><span>Stock Body</span></div><button type=button><span></span><span>Material Removed`);function FE(){let n,t=null;Cf(()=>{t=new IE(n);const u=be(),h=Math.max(1,et(u.settings.stockWidth,100)),d=Math.max(1,et(u.settings.stockHeight,75)),p=Math.max(.5,et(u.settings.stockThickness,12.7));t.fitView(h,d,p),yu(()=>{t==null||t.dispose()})});const e=()=>{try{const u=localStorage.getItem("gcoder_show_cut_material");return u!==null?JSON.parse(u):!0}catch{return!0}},[i,r]=ve(e()),s=()=>{const u=!i();r(u);try{localStorage.setItem("gcoder_show_cut_material",JSON.stringify(u))}catch{}};vu(()=>{if(!t)return;const u=be(),h=Vf(),d=rl(),p=sl(),g=i(),m=Ys(),y=Math.max(1,et(u.settings.stockWidth,100)),M=Math.max(1,et(u.settings.stockHeight,75)),_=Math.max(.5,et(u.settings.stockThickness,12.7));if(t.setupHelpers(y,M,_),d==="selected"&&h){const x=og(h,u.settings);t.updateMeshes(x,g);const E=m.toolpaths.filter(f=>f.opId===h.id);t.updateToolpaths(E,p)}else{const x=_E(u.operations,u.settings);t.updateMeshes(x,g),t.updateToolpaths(m.toolpaths,p)}});const o=u=>{if(!t)return;const h=be(),d=Math.max(1,et(h.settings.stockWidth,100)),p=Math.max(1,et(h.settings.stockHeight,75)),g=Math.max(.5,et(h.settings.stockThickness,12.7));t.setViewPreset(u,d,p,g)},a=()=>{if(!t)return;const u=be(),h=Math.max(1,et(u.settings.stockWidth,100)),d=Math.max(1,et(u.settings.stockHeight,75)),p=Math.max(.5,et(u.settings.stockThickness,12.7));t.fitView(h,d,p)};return(()=>{var u=UE(),h=u.firstChild,d=h.firstChild,p=d.firstChild,g=p.firstChild,m=g.nextSibling,y=p.nextSibling,M=y.firstChild,_=d.nextSibling,x=_.firstChild,E=x.firstChild,f=E.nextSibling,c=f.nextSibling,v=c.nextSibling,l=v.nextSibling,R=h.nextSibling,S=R.firstChild,b=S.nextSibling,w=b.firstChild,T=w.nextSibling,A=T.firstChild;g.$$click=()=>xh("selected"),m.$$click=()=>xh("full"),M.addEventListener("change",D=>xm(D.currentTarget.checked)),E.$$click=()=>o("iso"),f.$$click=()=>o("top"),c.$$click=()=>o("front"),v.$$click=()=>o("right"),l.$$click=a;var C=n;return typeof C=="function"?Nf(C,S):n=S,T.$$click=s,tt(b,rt(Ue,{get when(){return sl()},get children(){return[LE(),NE()]}}),null),ie(D=>{var L=`seg-btn ${rl()==="selected"?"active":""}`,F=`seg-btn ${rl()==="full"?"active":""}`,O=`legend-item legend-item-toggle ${i()?"active":"inactive"}`,k=i()?"Click to hide removed material":"Click to show removed material",B=`legend-color legend-cut ${i()?"":"dimmed"}`;return L!==D.e&&Fn(g,D.e=L),F!==D.t&&Fn(m,D.t=F),O!==D.a&&Fn(T,D.a=O),k!==D.o&&Sr(T,"title",D.o=k),B!==D.i&&Fn(A,D.i=B),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),ie(()=>M.checked=sl()),u})()}ui(["click"]);var OE=Pt('<form class=create-project-form><input type=text class=project-input placeholder="Project Name..."autofocus><button type=submit class=btn-primary>Create</button><button type=button class=btn-secondary>Cancel'),BE=Pt('<div class=modal-overlay><div class="modal-card project-modal"><div class=modal-header><h3>Projects</h3><button class=modal-close-btn title="Close dialog"></button></div><div class=modal-body><div class=project-actions-bar><button class=btn-secondary title="Duplicate active project"><span>Duplicate Current</span></button></div><div class=projects-table-wrapper><table class=projects-table><thead><tr><th>Project Name</th><th>Operations</th><th>Last Modified</th><th></th></tr></thead><tbody>'),zE=Pt("<button class=btn-primary><span>Create New Project"),kE=Pt("<input type=text class=proj-rename-inline-input autofocus>"),GE=Pt("<tr><td class=proj-name-cell><div class=proj-name-wrapper><span class=proj-icon></span></div></td><td> ops</td><td class=proj-date></td><td class=proj-actions><div class=proj-actions-group>"),HE=Pt('<span class=proj-name title="Double-click or double-tap to rename">'),VE=Pt("<span class=active-badge>ACTIVE"),$E=Pt('<button class="btn-sm btn-primary">Open'),WE=Pt('<button class="btn-sm btn-danger">Delete');function XE(){const[n,t]=ve(""),[e,i]=ve(!1),[r,s]=ve(null),[o,a]=ve("");let u=0;const h=()=>Object.values(Ci),d=_=>{_.preventDefault();const x=n().trim()||"New CNC Project";Mm(x),t(""),i(!1),zs(!1)},p=_=>{bm(_),zs(!1)},g=(_,x)=>{s(_),a(x)},m=()=>{const _=r();if(_){const x=o().trim();x&&$f(_,x),s(null)}},y=()=>{s(null)},M=(_,x)=>{const E=Date.now();E-u<350?(g(_,x),u=0):u=E};return rt(Ue,{get when(){return ym()},get children(){var _=BE(),x=_.firstChild,E=x.firstChild,f=E.firstChild,c=f.nextSibling,v=E.nextSibling,l=v.firstChild,R=l.firstChild,S=R.firstChild,b=l.nextSibling,w=b.firstChild,T=w.firstChild,A=T.nextSibling;return _.$$click=()=>zs(!1),x.$$click=C=>C.stopPropagation(),c.$$click=()=>zs(!1),tt(c,rt(Ga,{size:14})),tt(l,rt(Ue,{get when(){return e()},get fallback(){return(()=>{var C=zE(),D=C.firstChild;return C.$$click=()=>i(!0),tt(C,rt(jf,{size:13}),D),C})()},get children(){var C=OE(),D=C.firstChild,L=D.nextSibling,F=L.nextSibling;return C.addEventListener("submit",d),D.$$input=O=>t(O.currentTarget.value),F.$$click=()=>i(!1),ie(()=>D.value=n()),C}}),R),Sa(R,"click",Tm,!0),tt(R,rt(ka,{size:13}),S),tt(A,rt(Mu,{get each(){return h()},children:C=>{const D=()=>C.id===Ba(),L=()=>r()===C.id;return(()=>{var F=GE(),O=F.firstChild,k=O.firstChild,B=k.firstChild,$=O.nextSibling,W=$.firstChild,st=$.nextSibling,ct=st.nextSibling,gt=ct.firstChild;return tt(B,rt(Yf,{size:14})),tt(k,rt(Ue,{get when(){return L()},get fallback(){return(()=>{var ut=HE();return ut.$$dblclick=ot=>{ot.stopPropagation(),g(C.id,C.name)},ut.$$click=()=>M(C.id,C.name),tt(ut,()=>C.name),ut})()},get children(){var ut=kE();return ut.$$click=ot=>ot.stopPropagation(),ut.addEventListener("blur",m),ut.$$keydown=ot=>{ot.key==="Enter"?m():ot.key==="Escape"&&y()},ut.$$input=ot=>a(ot.currentTarget.value),ie(()=>ut.value=o()),ut}}),null),tt(k,(()=>{var ut=qi(()=>!!D());return()=>ut()&&VE()})(),null),tt($,()=>C.operations.length,W),tt(st,()=>new Date(C.updatedAt).toLocaleDateString()),tt(gt,(()=>{var ut=qi(()=>!D());return()=>ut()&&(()=>{var ot=$E();return ot.$$click=()=>p(C.id),ot})()})(),null),tt(gt,(()=>{var ut=qi(()=>h().length>1);return()=>ut()&&(()=>{var ot=WE();return ot.$$click=()=>{confirm(`Delete project "${C.name}"?`)&&wm(C.id)},ot})()})(),null),ie(()=>Fn(F,D()?"active-row":"")),F})()}})),_}})}ui(["click","input","keydown","dblclick"]);var qE=Pt("<div class=warning-banner><div class=warning-banner-icon></div><div class=warning-banner-content><div class=warning-banner-title>Toolpath Warnings:</div><ul class=warning-banner-list>"),YE=Pt("<li class=warning-item>");function ZE(){const n=()=>Ys().warnings;return rt(Ue,{get when(){return n().length>0},get children(){var t=qE(),e=t.firstChild,i=e.nextSibling,r=i.firstChild,s=r.nextSibling;return tt(e,rt(wa,{size:15})),tt(s,rt(Mu,{get each(){return n()},children:o=>(()=>{var a=YE();return tt(a,o),a})()})),t}})}var KE=Pt("<div class=app-layout><main class=main-workspace><aside class=sidebar-operations></aside><section class=center-params></section><section class=preview-panel>");function JE(){return Cf(()=>{const n=t=>{const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT")||((t.ctrlKey||t.metaKey)&&!t.shiftKey&&t.key.toLowerCase()==="z"?(t.preventDefault(),Wf()):((t.ctrlKey||t.metaKey)&&t.shiftKey&&t.key.toLowerCase()==="z"||(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")&&(t.preventDefault(),Xf()))};window.addEventListener("keydown",n),yu(()=>{window.removeEventListener("keydown",n)})}),(()=>{var n=KE(),t=n.firstChild,e=t.firstChild,i=e.nextSibling,r=i.nextSibling;return tt(n,rt(M_,{}),t),tt(n,rt(ZE,{}),t),tt(e,rt(P_,{})),tt(i,rt(G_,{})),tt(r,rt(FE,{})),tt(n,rt(XE,{}),null),tt(n,rt(m_,{}),null),tt(n,rt(u_,{}),null),n})()}const Ef=document.getElementById("root");Ef&&Fg(()=>rt(JE,{}),Ef);
