var pm=Object.defineProperty;var mm=(n,t,e)=>t in n?pm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ke=(n,t,e)=>mm(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const gm=!1,_m=(n,t)=>n===t,si=Symbol("solid-proxy"),xm=typeof Proxy=="function",fc=Symbol("solid-track"),_a={equals:_m};let wf=Pf;const tr=1,xa=2,Tf={owned:null,cleanups:null,context:null,owner:null};var Be=null;let el=null,vm=null,we=null,ln=null,wi=null,Oa=0;function ia(n,t){const e=we,i=Be,r=n.length===0,s=t===void 0?i:t,o=r?Tf:{owned:null,cleanups:null,context:s?s.context:null,owner:s},a=r?n:()=>n(()=>Zi(()=>$s(o)));Be=o,we=null;try{return gs(a,!0)}finally{we=e,Be=i}}function ve(n,t){t=t?Object.assign({},_a,t):_a;const e={value:n,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(e.value)),Rf(e,r));return[Cf.bind(e),i]}function ce(n,t,e){const i=yu(n,t,!1,tr);to(i)}function vu(n,t,e){wf=bm;const i=yu(n,t,!1,tr);i.user=!0,wi?wi.push(i):to(i)}function wn(n,t,e){e=e?Object.assign({},_a,e):_a;const i=yu(n,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=e.equals||void 0,to(i),Cf.bind(i)}function Sm(n){return gs(n,!1)}function Zi(n){if(we===null)return n();const t=we;we=null;try{return n()}finally{we=t}}function Af(n){vu(()=>Zi(n))}function Su(n){return Be===null||(Be.cleanups===null?Be.cleanups=[n]:Be.cleanups.push(n)),n}function pc(){return we}const[ZE,KE]=ve(!1);function Cf(){if(this.sources&&this.state)if(this.state===tr)to(this);else{const n=ln;ln=null,gs(()=>Sa(this),!1),ln=n}if(we){const n=this.observers;if(!n||n[n.length-1]!==we){const t=n?n.length:0;we.sources?(we.sources.push(this),we.sourceSlots.push(t)):(we.sources=[this],we.sourceSlots=[t]),n?(n.push(we),this.observerSlots.push(we.sources.length-1)):(this.observers=[we],this.observerSlots=[we.sources.length-1])}}return this.value}function Rf(n,t,e){let i=n.value;return(!n.comparator||!n.comparator(i,t))&&(n.value=t,n.observers&&n.observers.length&&gs(()=>{for(let r=0;r<n.observers.length;r+=1){const s=n.observers[r],o=el&&el.running;o&&el.disposed.has(s),(o?!s.tState:!s.state)&&(s.pure?ln.push(s):wi.push(s),s.observers&&Df(s)),o||(s.state=tr)}if(ln.length>1e6)throw ln=[],new Error},!1)),t}function to(n){if(!n.fn)return;$s(n);const t=Oa;ym(n,n.value,t)}function ym(n,t,e){let i;const r=Be,s=we;we=Be=n;try{i=n.fn(t)}catch(o){return n.pure&&(n.state=tr,n.owned&&n.owned.forEach($s),n.owned=null),n.updatedAt=e+1,If(o)}finally{we=s,Be=r}(!n.updatedAt||n.updatedAt<=e)&&(n.updatedAt!=null&&"observers"in n?Rf(n,i):n.value=i,n.updatedAt=e)}function yu(n,t,e,i=tr,r){const s={fn:n,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Be,context:Be?Be.context:null,pure:e};return Be===null||Be!==Tf&&(Be.owned?Be.owned.push(s):Be.owned=[s]),s}function va(n){if(n.state===0)return;if(n.state===xa)return Sa(n);if(n.suspense&&Zi(n.suspense.inFallback))return n.suspense.effects.push(n);const t=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<Oa);)n.state&&t.push(n);for(let e=t.length-1;e>=0;e--)if(n=t[e],n.state===tr)to(n);else if(n.state===xa){const i=ln;ln=null,gs(()=>Sa(n,t[0]),!1),ln=i}}function gs(n,t){if(ln)return n();let e=!1;t||(ln=[]),wi?e=!0:wi=[],Oa++;try{const i=n();return Mm(e),i}catch(i){e||(wi=null),ln=null,If(i)}}function Mm(n){if(ln&&(Pf(ln),ln=null),n)return;const t=wi;wi=null,t.length&&gs(()=>wf(t),!1)}function Pf(n){for(let t=0;t<n.length;t++)va(n[t])}function bm(n){let t,e=0;for(t=0;t<n.length;t++){const i=n[t];i.user?n[e++]=i:va(i)}for(t=0;t<e;t++)va(n[t])}function Sa(n,t){n.state=0;for(let e=0;e<n.sources.length;e+=1){const i=n.sources[e];if(i.sources){const r=i.state;r===tr?i!==t&&(!i.updatedAt||i.updatedAt<Oa)&&va(i):r===xa&&Sa(i,t)}}}function Df(n){for(let t=0;t<n.observers.length;t+=1){const e=n.observers[t];e.state||(e.state=xa,e.pure?ln.push(e):wi.push(e),e.observers&&Df(e))}}function $s(n){let t;if(n.sources)for(;n.sources.length;){const e=n.sources.pop(),i=n.sourceSlots.pop(),r=e.observers;if(r&&r.length){const s=r.pop(),o=e.observerSlots.pop();i<r.length&&(s.sourceSlots[o]=i,r[i]=s,e.observerSlots[i]=o)}}if(n.tOwned){for(t=n.tOwned.length-1;t>=0;t--)$s(n.tOwned[t]);delete n.tOwned}if(n.owned){for(t=n.owned.length-1;t>=0;t--)$s(n.owned[t]);n.owned=null}if(n.cleanups){for(t=n.cleanups.length-1;t>=0;t--)n.cleanups[t]();n.cleanups=null}n.state=0}function Em(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function If(n,t=Be){throw Em(n)}const wm=Symbol("fallback");function ch(n){for(let t=0;t<n.length;t++)n[t]()}function Tm(n,t,e={}){let i=[],r=[],s=[],o=0,a=t.length>1?[]:null;return Su(()=>ch(s)),()=>{let u=n()||[],h=u.length,d,p;return u[fc],Zi(()=>{let g,S,M,_,v,E,f,c,x;if(h===0)o!==0&&(ch(s),s=[],i=[],r=[],o=0,a&&(a=[])),e.fallback&&(i=[wm],r[0]=ia(l=>(s[0]=l,e.fallback())),o=1);else if(o===0){for(r=new Array(h),p=0;p<h;p++)i[p]=u[p],r[p]=ia(m);o=h}else{for(M=new Array(h),_=new Array(h),a&&(v=new Array(h)),E=0,f=Math.min(o,h);E<f&&i[E]===u[E];E++);for(f=o-1,c=h-1;f>=E&&c>=E&&i[f]===u[c];f--,c--)M[c]=r[f],_[c]=s[f],a&&(v[c]=a[f]);for(g=new Map,S=new Array(c+1),p=c;p>=E;p--)x=u[p],d=g.get(x),S[p]=d===void 0?-1:d,g.set(x,p);for(d=E;d<=f;d++)x=i[d],p=g.get(x),p!==void 0&&p!==-1?(M[p]=r[d],_[p]=s[d],a&&(v[p]=a[d]),p=S[p],g.set(x,p)):s[d]();for(p=E;p<h;p++)p in M?(r[p]=M[p],s[p]=_[p],a&&(a[p]=v[p],a[p](p))):r[p]=ia(m);r=r.slice(0,o=h),i=u.slice(0)}return r});function m(g){if(s[p]=g,a){const[S,M]=ve(p);return a[p]=M,t(u[p],S)}return t(u[p])}}}function rt(n,t){return Zi(()=>n(t||{}))}function oo(){return!0}const Am={get(n,t,e){return t===si?e:n.get(t)},has(n,t){return t===si?!0:n.has(t)},set:oo,deleteProperty:oo,getOwnPropertyDescriptor(n,t){return{configurable:!0,enumerable:!0,get(){return n.get(t)},set:oo,deleteProperty:oo}},ownKeys(n){return n.keys()}};function nl(n){return(n=typeof n=="function"?n():n)?n:{}}function Cm(){for(let n=0,t=this.length;n<t;++n){const e=this[n]();if(e!==void 0)return e}}function Pe(...n){let t=!1;for(let o=0;o<n.length;o++){const a=n[o];t=t||!!a&&si in a,n[o]=typeof a=="function"?(t=!0,wn(a)):a}if(xm&&t)return new Proxy({get(o){for(let a=n.length-1;a>=0;a--){const u=nl(n[a])[o];if(u!==void 0)return u}},has(o){for(let a=n.length-1;a>=0;a--)if(o in nl(n[a]))return!0;return!1},keys(){const o=[];for(let a=0;a<n.length;a++)o.push(...Object.keys(nl(n[a])));return[...new Set(o)]}},Am);const e={},i=Object.create(null);for(let o=n.length-1;o>=0;o--){const a=n[o];if(!a)continue;const u=Object.getOwnPropertyNames(a);for(let h=u.length-1;h>=0;h--){const d=u[h];if(d==="__proto__"||d==="constructor")continue;const p=Object.getOwnPropertyDescriptor(a,d);if(!i[d])i[d]=p.get?{enumerable:!0,configurable:!0,get:Cm.bind(e[d]=[p.get.bind(a)])}:p.value!==void 0?p:void 0;else{const m=e[d];m&&(p.get?m.push(p.get.bind(a)):p.value!==void 0&&m.push(()=>p.value))}}}const r={},s=Object.keys(i);for(let o=s.length-1;o>=0;o--){const a=s[o],u=i[a];u&&u.get?Object.defineProperty(r,a,u):r[a]=u?u.value:void 0}return r}const Rm=n=>`Stale read from <${n}>.`;function Mu(n){const t="fallback"in n&&{fallback:()=>n.fallback};return wn(Tm(()=>n.each,n.children,t||void 0))}function Ue(n){const t=n.keyed,e=wn(()=>n.when,void 0,void 0),i=t?e:wn(e,void 0,{equals:(r,s)=>!r==!s});return wn(()=>{const r=i();if(r){const s=n.children;return typeof s=="function"&&s.length>0?Zi(()=>s(t?r:()=>{if(!Zi(i))throw Rm("Show");return e()})):s}return n.fallback},void 0,void 0)}const Pm=new Set(["innerHTML","textContent","innerText","children"]),Dm=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Im=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Lm={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},qi=n=>wn(()=>n());function Nm(n,t,e){let i=e.length,r=t.length,s=i,o=0,a=0,u=t[r-1].nextSibling,h=null;for(;o<r||a<s;){if(t[o]===e[a]){o++,a++;continue}for(;t[r-1]===e[s-1];)r--,s--;if(r===o){const d=s<i?a?e[a-1].nextSibling:e[s-a]:u;for(;a<s;)n.insertBefore(e[a++],d)}else if(s===a)for(;o<r;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[s-1]&&e[a]===t[r-1]){const d=t[--r].nextSibling;n.insertBefore(e[a++],t[o++].nextSibling),n.insertBefore(e[--s],d),t[r]=e[s]}else{if(!h){h=new Map;let p=a;for(;p<s;)h.set(e[p],p++)}const d=h.get(t[o]);if(d!=null)if(a<d&&d<s){let p=o,m=1,g;for(;++p<r&&p<s&&!((g=h.get(t[p]))==null||g!==d+m);)m++;if(m>d-a){const S=t[o];for(;a<d;)n.insertBefore(e[a++],S)}else n.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const uh="_$DX_DELEGATE";function Um(n,t,e,i={}){let r;return ia(s=>{r=s,t===document?n():tt(t,n(),t.firstChild?null:void 0,e)},i.owner),()=>{r(),t.textContent=""}}function Pt(n,t,e,i){let r;const s=()=>{const a=document.createElement("template");return a.innerHTML=n,a.content.firstChild},o=()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function ui(n,t=window.document){const e=t[uh]||(t[uh]=new Set);for(let i=0,r=n.length;i<r;i++){const s=n[i];e.has(s)||(e.add(s),t.addEventListener(s,Hm))}}function Sr(n,t,e){e==null?n.removeAttribute(t):n.setAttribute(t,e)}function Fm(n,t,e,i){i==null?n.removeAttributeNS(t,e):n.setAttributeNS(t,e,i)}function Om(n,t,e){e?n.setAttribute(t,""):n.removeAttribute(t)}function Un(n,t){t==null?n.removeAttribute("class"):n.className=t}function ya(n,t,e,i){if(i)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const r=e[0];n.addEventListener(t,e[0]=s=>r.call(n,e[1],s))}else n.addEventListener(t,e,typeof e!="function"&&e)}function Bm(n,t,e={}){const i=Object.keys(t||{}),r=Object.keys(e);let s,o;for(s=0,o=r.length;s<o;s++){const a=r[s];!a||a==="undefined"||t[a]||(hh(n,a,!1),delete e[a])}for(s=0,o=i.length;s<o;s++){const a=i[s],u=!!t[a];!a||a==="undefined"||e[a]===u||!u||(hh(n,a,!0),e[a]=u)}return e}function zm(n,t,e){if(!t)return e?Sr(n,"style"):t;const i=n.style;if(typeof t=="string")return i.cssText=t;typeof e=="string"&&(i.cssText=e=void 0),e||(e={}),t||(t={});let r,s;for(s in e)t[s]==null&&i.removeProperty(s),delete e[s];for(s in t)r=t[s],r!==e[s]&&(i.setProperty(s,r),e[s]=r);return e}function De(n,t={},e,i){const r={};return ce(()=>typeof t.ref=="function"&&Lf(t.ref,n)),ce(()=>km(n,t,e,!0,r,!0)),r}function Lf(n,t,e){return Zi(()=>n(t,e))}function tt(n,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return Ma(n,t,i,e);ce(r=>Ma(n,t(),r,e),i)}function km(n,t,e,i,r={},s=!1){t||(t={});for(const o in r)if(!(o in t)){if(o==="children")continue;r[o]=dh(n,o,null,r[o],e,s,t)}for(const o in t){if(o==="children")continue;const a=t[o];r[o]=dh(n,o,a,r[o],e,s,t)}}function Gm(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function hh(n,t,e){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)n.classList.toggle(i[r],e)}function dh(n,t,e,i,r,s,o){let a,u,h,d;if(t==="style")return zm(n,e,i);if(t==="classList")return Bm(n,e,i);if(e===i)return i;if(t==="ref")s||e(n);else if(t.slice(0,3)==="on:"){const p=t.slice(3);i&&n.removeEventListener(p,i,typeof i!="function"&&i),e&&n.addEventListener(p,e,typeof e!="function"&&e)}else if(t.slice(0,10)==="oncapture:"){const p=t.slice(10);i&&n.removeEventListener(p,i,!0),e&&n.addEventListener(p,e,!0)}else if(t.slice(0,2)==="on"){const p=t.slice(2).toLowerCase(),m=Im.has(p);if(!m&&i){const g=Array.isArray(i)?i[0]:i;n.removeEventListener(p,g)}(m||e)&&(ya(n,p,e,m),m&&ui([p]))}else if(t.slice(0,5)==="attr:")Sr(n,t.slice(5),e);else if(t.slice(0,5)==="bool:")Om(n,t.slice(5),e);else if((d=t.slice(0,5)==="prop:")||(h=Pm.has(t))||(a=n.nodeName.includes("-")||"is"in o))d&&(t=t.slice(5),u=!0),t==="class"||t==="className"?Un(n,e):a&&!u&&!h?n[Gm(t)]=e:(t==="value"||t==="defaultValue")&&(n.nodeName==="INPUT"||n.nodeName==="TEXTAREA")?n[t]=e??"":n[t]=e;else{const p=t.indexOf(":")>-1&&Lm[t.split(":")[0]];p?Fm(n,p,t,e):Sr(n,Dm[t]||t,e)}return e}function Hm(n){let t=n.target;const e=`$$${n.type}`,i=n.target,r=n.currentTarget,s=u=>Object.defineProperty(n,"target",{configurable:!0,value:u}),o=()=>{const u=t[e];if(u&&!t.disabled){const h=t[`${e}Data`];if(h!==void 0?u.call(t,h,n):u.call(t,n),n.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(n.target)&&s(t.host),!0},a=()=>{for(;o()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}}),n.composedPath){const u=n.composedPath();s(u[0]);for(let h=0;h<u.length-2&&(t=u[h],!!o());h++){if(t._$host){t=t._$host,a();break}if(t.parentNode===r)break}}else a();s(i)}function Ma(n,t,e,i,r){for(;typeof e=="function";)e=e();if(t===e)return e;const s=typeof t,o=i!==void 0;if(n=o&&e[0]&&e[0].parentNode||n,s==="string"||s==="number"){if(s==="number"&&(t=t.toString(),t===e))return e;if(o){let a=e[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),e=Ar(n,e,i,a)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t}else if(t==null||s==="boolean")e=Ar(n,e,i);else{if(s==="function")return ce(()=>{let a=t();for(;typeof a=="function";)a=a();e=Ma(n,a,e,i)}),()=>e;if(Array.isArray(t)){const a=[],u=e&&Array.isArray(e);if(mc(a,t,e,r))return ce(()=>e=Ma(n,a,e,i,!0)),()=>e;if(a.length===0){if(e=Ar(n,e,i),o)return e}else u?e.length===0?fh(n,a,i):Nm(n,e,a):(e&&Ar(n),fh(n,a));e=a}else if(t.nodeType){if(Array.isArray(e)){if(o)return e=Ar(n,e,i,t);Ar(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function mc(n,t,e,i){let r=!1;for(let s=0,o=t.length;s<o;s++){let a=t[s],u=e&&e[n.length],h;if(!(a==null||a===!0||a===!1))if((h=typeof a)=="object"&&a.nodeType)n.push(a);else if(Array.isArray(a))r=mc(n,a,u)||r;else if(h==="function")if(i){for(;typeof a=="function";)a=a();r=mc(n,Array.isArray(a)?a:[a],Array.isArray(u)?u:[u])||r}else n.push(a),r=!0;else{const d=String(a);u&&u.nodeType===3&&u.data===d?n.push(u):n.push(document.createTextNode(d))}}return r}function fh(n,t,e=null){for(let i=0,r=t.length;i<r;i++)n.insertBefore(t[i],e)}function Ar(n,t,e,i){if(e===void 0)return n.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(r!==a){const u=a.parentNode===n;!s&&!o?u?n.replaceChild(r,a):n.insertBefore(r,e):u&&a.remove()}else s=!0}}else n.insertBefore(r,e);return[r]}const gc=Symbol("store-raw"),ls=Symbol("store-node"),yi=Symbol("store-has"),Nf=Symbol("store-self");function Uf(n){let t=n[si];if(!t&&(Object.defineProperty(n,si,{value:t=new Proxy(n,Wm)}),!Array.isArray(n))){const e=Object.keys(n),i=Object.getOwnPropertyDescriptors(n),r=Object.getPrototypeOf(n),s=r!==null&&n!==null&&typeof n=="object"&&!Array.isArray(n)&&r!==Object.prototype;if(s){const o=Object.getOwnPropertyDescriptors(r);e.push(...Object.keys(o)),Object.assign(i,o)}for(let o=0,a=e.length;o<a;o++){const u=e[o];s&&u==="constructor"||i[u].get&&Object.defineProperty(n,u,{configurable:!0,enumerable:i[u].enumerable,get:i[u].get.bind(t)})}}return t}function Ki(n){let t;return n!=null&&typeof n=="object"&&(n[si]||!(t=Object.getPrototypeOf(n))||t===Object.prototype||Array.isArray(n))}function ds(n,t=new Set){let e,i,r,s;if(e=n!=null&&n[gc])return e;if(!Ki(n)||t.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):t.add(n);for(let o=0,a=n.length;o<a;o++)r=n[o],(i=ds(r,t))!==r&&(n[o]=i)}else{Object.isFrozen(n)?n=Object.assign({},n):t.add(n);const o=Object.keys(n),a=Object.getOwnPropertyDescriptors(n);for(let u=0,h=o.length;u<h;u++)s=o[u],!a[s].get&&(r=n[s],(i=ds(r,t))!==r&&(n[s]=i))}return n}function ba(n,t){let e=n[t];return e||Object.defineProperty(n,t,{value:e=Object.create(null)}),e}function Ws(n,t,e){if(n[t])return n[t];const[i,r]=ve(e,{equals:!1,internal:!0});return i.$=r,n[t]=i}function Vm(n,t){const e=Reflect.getOwnPropertyDescriptor(n,t);return!e||e.get||!e.configurable||t===si||t===ls||(delete e.value,delete e.writable,e.get=()=>n[si][t]),e}function Ff(n){pc()&&Ws(ba(n,ls),Nf)()}function $m(n){return Ff(n),Reflect.ownKeys(n)}const Wm={get(n,t,e){if(t===gc)return n;if(t===si)return e;if(t===fc)return Ff(n),e;const i=ba(n,ls),r=i[t];let s=r?r():n[t];if(t===ls||t===yi||t==="__proto__")return s;if(!r){const o=Object.getOwnPropertyDescriptor(n,t);pc()&&(typeof s!="function"||Object.prototype.hasOwnProperty.call(n,t))&&!(o&&o.get)&&(s=Ws(i,t,s)())}return Ki(s)?Uf(s):s},has(n,t){return t===gc||t===si||t===fc||t===ls||t===yi||t==="__proto__"?!0:(pc()&&Ws(ba(n,yi),t)(),t in n)},set(){return!0},deleteProperty(){return!0},ownKeys:$m,getOwnPropertyDescriptor:Vm};function In(n,t,e,i=!1){if(t==="__proto__"||!i&&n[t]===e)return;const r=n[t],s=n.length;e===void 0?(delete n[t],n[yi]&&n[yi][t]&&r!==void 0&&n[yi][t].$()):(n[t]=e,n[yi]&&n[yi][t]&&r===void 0&&n[yi][t].$());let o=ba(n,ls),a;if((a=Ws(o,t,r))&&a.$(()=>e),Array.isArray(n)&&n.length!==s){for(let u=n.length;u<s;u++)(a=o[u])&&a.$();(a=Ws(o,"length",s))&&a.$(n.length)}(a=o[Nf])&&a.$()}function Of(n,t){const e=Object.keys(t);for(let i=0;i<e.length;i+=1){const r=e[i];Bf(r)||In(n,r,t[r])}}function Bf(n){return n==="__proto__"||n==="constructor"||n==="prototype"}function Xm(n,t){if(typeof t=="function"&&(t=t(n)),t=ds(t),Array.isArray(t)){if(n===t)return;let e=0,i=t.length;for(;e<i;e++){const r=t[e];n[e]!==r&&In(n,e,r)}In(n,"length",i)}else Of(n,t)}function Os(n,t,e=[]){let i,r=n;if(t.length>1){i=t.shift();const o=typeof i,a=Array.isArray(n);if(o==="string"&&(i==="__proto__"||t.length>1&&Bf(i)))return;if(Array.isArray(i)){for(let u=0;u<i.length;u++)Os(n,[i[u]].concat(t),e);return}else if(a&&o==="function"){for(let u=0;u<n.length;u++)i(n[u],u)&&Os(n,[u].concat(t),e);return}else if(a&&o==="object"){const{from:u=0,to:h=n.length-1,by:d=1}=i;for(let p=u;p<=h;p+=d)Os(n,[p].concat(t),e);return}else if(t.length>1){Os(n[i],t,[i].concat(e));return}r=n[i],e=[i].concat(e)}let s=t[0];typeof s=="function"&&(s=s(r,e),s===r)||i===void 0&&s==null||(s=ds(s),i===void 0||Ki(r)&&Ki(s)&&!Array.isArray(s)?Of(r,s):In(n,i,s))}function qm(...[n,t]){const e=ds(n||{}),i=Array.isArray(e),r=Uf(e);function s(...o){Sm(()=>{i&&o.length===1?Xm(e,o[0]):Os(e,o)})}return[r,s]}const _c=Symbol("store-root");function ph(n){return n==="__proto__"||n==="constructor"||n==="prototype"}function Qr(n,t,e,i,r){if(ph(e))return;const s=t[e];if(n===s)return;const o=Array.isArray(n);if(e!==_c&&(!Ki(n)||!Ki(s)||o!==Array.isArray(s)||r&&n[r]!==s[r])){In(t,e,n);return}if(o){if(n.length&&s.length&&(!i||r&&n[0]&&n[0][r]!=null)){let h,d,p,m,g,S,M,_;for(p=0,m=Math.min(s.length,n.length);p<m&&(s[p]===n[p]||r&&s[p]&&n[p]&&s[p][r]&&s[p][r]===n[p][r]);p++)Qr(n[p],s,p,i,r);const v=new Array(n.length),E=new Map;for(m=s.length-1,g=n.length-1;m>=p&&g>=p&&(s[m]===n[g]||r&&s[m]&&n[g]&&s[m][r]&&s[m][r]===n[g][r]);m--,g--)v[g]=s[m];if(p>g||p>m){for(d=p;d<=g;d++)In(s,d,n[d]);for(;d<n.length;d++)In(s,d,v[d]),Qr(n[d],s,d,i,r);s.length>n.length&&In(s,"length",n.length);return}for(M=new Array(g+1),d=g;d>=p;d--)S=n[d],_=r&&S?S[r]:S,h=E.get(_),M[d]=h===void 0?-1:h,E.set(_,d);for(h=p;h<=m;h++)S=s[h],_=r&&S?S[r]:S,d=E.get(_),d!==void 0&&d!==-1&&(v[d]=s[h],d=M[d],E.set(_,d));for(d=p;d<n.length;d++)d in v?(In(s,d,v[d]),Qr(n[d],s,d,i,r)):In(s,d,n[d])}else for(let h=0,d=n.length;h<d;h++)Qr(n[h],s,h,i,r);s.length>n.length&&In(s,"length",n.length);return}const a=Object.keys(n);for(let h=0,d=a.length;h<d;h++)ph(a[h])||Qr(n[a[h]],s,a[h],i,r);const u=Object.keys(s);for(let h=0,d=u.length;h<d;h++)n[u[h]]===void 0&&In(s,u[h],void 0)}function zf(n,t={}){const{merge:e,key:i="id"}=t,r=ds(n);return s=>{if(!Ki(s)||!Ki(r))return r;const o=Qr(r,{[_c]:s},_c,e,i);return o===void 0?s:o}}const Xs=[{id:"flat-1/4",name:'1/4" Flat Endmill',diameterMm:25.4/4,diameterExpr:"1/4in",profile:"flat",description:"6.35mm (0.25in) Flat Endmill"},{id:"flat-1/8",name:'1/8" Flat Endmill',diameterMm:25.4/8,diameterExpr:"1/8in",profile:"flat",description:"3.175mm (0.125in) Flat Endmill"},{id:"flat-1/16",name:'1/16" Flat Endmill',diameterMm:25.4/16,diameterExpr:"1/16in",profile:"flat",description:"1.5875mm (0.0625in) Flat Endmill"},{id:"v45-1/4",name:'1/4" V-Bit 45°',diameterMm:25.4/4,diameterExpr:"1/4in",profile:"v45",description:"6.35mm (0.25in) 45° Chamfer / V-Bit"},{id:"v45-1/8",name:'1/8" V-Bit 45°',diameterMm:25.4/8,diameterExpr:"1/8in",profile:"v45",description:"3.175mm (0.125in) 45° Chamfer / V-Bit"},{id:"v45-1/16",name:'1/16" V-Bit 45°',diameterMm:25.4/16,diameterExpr:"1/16in",profile:"v45",description:"1.5875mm (0.0625in) 45° Chamfer / V-Bit"},{id:"v60-1/4",name:'1/4" V-Bit 60°',diameterMm:25.4/4,diameterExpr:"1/4in",profile:"v60",description:"6.35mm (0.25in) 60° V-Carve / Engraving Bit"},{id:"v60-1/8",name:'1/8" V-Bit 60°',diameterMm:25.4/8,diameterExpr:"1/8in",profile:"v60",description:"3.175mm (0.125in) 60° V-Carve / Engraving Bit"},{id:"v60-1/16",name:'1/16" V-Bit 60°',diameterMm:25.4/16,diameterExpr:"1/16in",profile:"v60",description:"1.5875mm (0.0625in) 60° V-Carve / Engraving Bit"}];function qn(n){return Xs.find(t=>t.id===n)||Xs[0]}function Ym(n,t=!0){let e=n.trim();return t&&(e=e.replace(/["”″]/g,"in"),e=e.replace(/\b(inches|inch)\b/gi,"in"),e=e.replace(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*(in|mm)?/gi,"($1 + ($2 / $3))$4"),e=e.replace(/(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*(in|mm)\b/gi,"($1 / $2)$3")),e}function Zm(n,t=!0){const e=Ym(n,t),i=[];let r=0;for(;r<e.length;){const s=e[r];if(/\s/.test(s)){r++;continue}if(s==="+"||s==="-"||s==="*"||s==="/"){i.push({type:"OP",value:s}),r++;continue}if(s==="("){i.push({type:"LPAREN",value:s}),r++;continue}if(s===")"){i.push({type:"RPAREN",value:s}),r++;continue}if(/\d|\./.test(s)){let o="",a=!1;for(;r<e.length&&(/\d/.test(e[r])||e[r]==="."&&!a);)e[r]==="."&&(a=!0),o+=e[r],r++;if(i.push({type:"NUMBER",value:o}),r<e.length&&/[a-zA-Z"”″]/.test(e[r])){if(!t)throw new Error("Units are not allowed in this field");let u="";for(;r<e.length&&/[a-zA-Z]/.test(e[r]);)u+=e[r],r++;const h=u.toLowerCase();if(h==="mm")i.push({type:"UNIT",value:"mm",unitMultiplier:1});else if(h==="in"||h==="inch"||h==="inches")i.push({type:"UNIT",value:"in",unitMultiplier:25.4});else throw new Error(`Unknown unit "${u}"`)}continue}if(/[a-zA-Z"”″]/.test(s)){if(!t)throw new Error("Units are not allowed in this field");let o="";for(;r<e.length&&/[a-zA-Z]/.test(e[r]);)o+=e[r],r++;const a=o.toLowerCase();if(a==="mm")i.push({type:"UNIT",value:"mm",unitMultiplier:1});else if(a==="in"||a==="inch"||a==="inches")i.push({type:"UNIT",value:"in",unitMultiplier:25.4});else throw new Error(`Unknown unit "${o}"`);continue}throw new Error(`Unexpected character "${s}" at index ${r}`)}return i.push({type:"EOF",value:""}),i}class Km{constructor(t){Ke(this,"tokens");Ke(this,"pos",0);this.tokens=t}peek(){return this.tokens[this.pos]}consume(t){const e=this.peek();if(t&&e.type!==t)throw new Error(`Expected ${t} but found ${e.type} (${e.value})`);return this.pos++,e}parse(){if(this.peek().type==="EOF")throw new Error("Empty expression");const t=this.parseExpr();if(this.peek().type!=="EOF")throw new Error(`Unexpected token "${this.peek().value}" after expression`);return t}parseExpr(){let t=this.parseTerm();for(;this.peek().type==="OP"&&(this.peek().value==="+"||this.peek().value==="-");){const e=this.consume().value,i=this.parseTerm();e==="+"?t+=i:t-=i}return t}parseTerm(){let t=this.parseFactor();for(;this.peek().type==="OP"&&(this.peek().value==="*"||this.peek().value==="/");){const e=this.consume().value,i=this.parseFactor();if(e==="*")t*=i;else{if(i===0)throw new Error("Division by zero");t/=i}}if(this.peek().type==="UNIT"){const e=this.consume("UNIT");t*=e.unitMultiplier??1}return t}parseFactor(){const t=this.peek();if(t.type==="OP"&&(t.value==="+"||t.value==="-")){const e=this.consume().value,i=this.parseAtom();return e==="-"?-i:i}return this.parseAtom()}parseAtom(){const t=this.peek();if(t.type==="NUMBER"){this.consume("NUMBER");const e=parseFloat(t.value);if(Number.isNaN(e))throw new Error(`Invalid number: ${t.value}`);if(this.peek().type==="UNIT"){const i=this.consume("UNIT");return e*(i.unitMultiplier??1)}return e}if(t.type==="LPAREN"){this.consume("LPAREN");let e=this.parseExpr();if(this.consume("RPAREN"),this.peek().type==="UNIT"){const i=this.consume("UNIT");e*=i.unitMultiplier??1}return e}throw new Error(`Unexpected token "${t.value}"`)}}function Ea(n,t={}){const e=t.allowUnits??!0;if(n==null)return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Empty value"};if(typeof n=="number"){if(Number.isNaN(n)||!Number.isFinite(n))return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Invalid number"};const r=ao(n),s=n/25.4;return{value:n,formatted:r,formattedMm:`${r} mm`,formattedIn:`${ao(s)}"`}}const i=n.trim();if(!i)return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Empty expression"};try{const r=Zm(i,e),o=new Km(r).parse();if(Number.isNaN(o)||!Number.isFinite(o))return{value:0,formatted:"0",formattedMm:"0 mm",formattedIn:'0"',error:"Result is not a finite number"};const a=ao(o),u=o/25.4;return{value:o,formatted:a,formattedMm:`${a} mm`,formattedIn:`${ao(u)}"`}}catch(r){return{value:0,formatted:"Error",formattedMm:"Error",formattedIn:"Error",error:r instanceof Error?r.message:String(r)}}}function Jm(n){return Ea(n,{allowUnits:!0})}function jm(n){return Ea(n,{allowUnits:!1})}function et(n,t=0){const e=Jm(n);return e.error?t:e.value}function mh(n,t=0){const e=jm(n);return e.error?t:e.value}function ao(n){const t=Math.round(n*1e4)/1e4;return Math.abs(t-Math.round(t))<1e-6?Math.round(t).toString():t.toFixed(3).replace(/\.?0+$/,"")}function Qm(n,t){const i=qn(n.toolId).diameterMm,r=et(n.x,0),s=et(n.y,0),o=et(n.diameter,i),a=Math.max(0,et(n.cutDepth,5)),u=Math.max(0,et(n.peckDepth,0)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),m=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,250))),g=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1.5))),S=[];if(o<i-.05)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};if(S.push({type:"rapid",z:d,comment:"Retract to safe Z"}),S.push({type:"rapid",x:r,y:s,comment:"Hole center"}),Math.abs(o-i)<=.1){if(u>0){const l=Math.ceil(a/u);for(let R=1;R<=l;R++){const y=h-Math.min(a,R*u);S.push({type:"linear",z:y,feedRate:m,comment:`Peck ${R}/${l} to Z=${y.toFixed(3)}`}),S.push({type:"rapid",z:h+1,comment:"Chip break retract"}),R<l&&S.push({type:"rapid",z:y+.3})}}else S.push({type:"linear",z:h-a,feedRate:m,comment:"Direct plunge drill"});return S.push({type:"rapid",z:d,comment:"Retract after drill"}),{opId:n.id,opName:n.name,toolId:n.toolId,moves:S,minZ:h-a,maxZ:d}}const M=(o-i)/2,_=h-a,v=Math.max(.1,g),E=Math.max(1,Math.ceil(a/v)),f=a/E;S.push({type:"rapid",z:h+.5}),S.push({type:"linear",x:r+M,y:s,feedRate:m,comment:"Lead to helical start"});let c=h,x=0;for(let l=1;l<=E;l++){const R=h-l*f,y=(c+R)/2;if(n.direction==="reversed"?(S.push({type:"arc-ccw",x:r-M,y:s,z:y,i:-M,j:0,feedRate:p,comment:`Helical turn ${l}/${E} (half)`}),S.push({type:"arc-ccw",x:r+M,y:s,z:R,i:M,j:0,feedRate:p})):(S.push({type:"arc-cw",x:r-M,y:s,z:y,i:-M,j:0,feedRate:p,comment:`Helical turn ${l}/${E} (half)`}),S.push({type:"arc-cw",x:r+M,y:s,z:R,i:M,j:0,feedRate:p})),c=R,x+=f,u>0&&x>=u&&l<E){x=0;const b=Math.min(h+.5,c+.8);S.push({type:"rapid",z:b,comment:"Chip break retract"}),S.push({type:"rapid",z:c})}}return n.direction==="reversed"?(S.push({type:"arc-ccw",x:r-M,y:s,z:_,i:-M,j:0,feedRate:p,comment:"Flat bottom cleanup"}),S.push({type:"arc-ccw",x:r+M,y:s,z:_,i:M,j:0,feedRate:p})):(S.push({type:"arc-cw",x:r-M,y:s,z:_,i:-M,j:0,feedRate:p,comment:"Flat bottom cleanup"}),S.push({type:"arc-cw",x:r+M,y:s,z:_,i:M,j:0,feedRate:p})),S.push({type:"linear",x:r,y:s,feedRate:p,comment:"Lead out to center"}),S.push({type:"rapid",z:d,comment:"Retract to safe Z"}),{opId:n.id,opName:n.name,toolId:n.toolId,moves:S,minZ:_,maxZ:d}}const qs=90;function tg(){return{stockWidth:"100mm",stockHeight:"75mm",stockThickness:"12.7mm",zOffset:"0mm",safeZ:"5mm",defaultFeedRate:"800",defaultPlungeRate:"300",defaultSpindleRpm:12e3,defaultDepthPerPass:"1.5mm",defaultStepoverPercent:qs}}function eg(n,t=1){const e={id:`op-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,enabled:!0,toolId:Xs[0].id,feedRate:"800",plungeRate:"300",spindleRpm:12e3,depthPerPass:"1.5mm"};switch(n){case"surfacing":return{...e,type:"surfacing",name:`Surfacing ${t}`,x:"0mm",y:"0mm",width:"100mm",height:"75mm",cutDepth:"0.8mm",stepoverPercent:qs,pattern:"zigzag-h",direction:"forward"};case"profiling":return{...e,type:"profiling",name:`Profiling ${t}`,x:"5mm",y:"5mm",width:"90mm",height:"65mm",cutDepth:"6.35mm",side:"outside",direction:"forward"};case"pocket":return{...e,type:"pocket",name:`Pocket ${t}`,x:"20mm",y:"15mm",width:"60mm",height:"45mm",cutDepth:"3.5mm",stepoverPercent:qs,pattern:"spiral",direction:"forward"};case"hole":return{...e,type:"hole",name:`Drill Hole ${t}`,toolId:Xs[1].id,x:"50mm",y:"37.5mm",diameter:"1/8in",cutDepth:"10mm",peckDepth:"2mm",direction:"forward"}}}function bu(n="New CNC Project"){return{id:`proj-${Date.now()}`,name:n,createdAt:Date.now(),updatedAt:Date.now(),settings:tg(),operations:[]}}function kf(n,t,e,i="forward"){const{minX:r,minY:s,maxX:o,maxY:a}=n,u=o-r,h=a-s;if(u<=0||h<=0||t<=0)return[];let d=[];switch(e){case"zigzag-h":d=gh(n,t);break;case"zigzag-v":d=ng(n,t);break;case"zigzag-diag":d=ig(n,t);break;case"spiral":d=rg(n,t);break;default:d=gh(n,t)}return i==="reversed"&&d.reverse(),d}function gh(n,t){const{minX:e,minY:i,maxX:r,maxY:s}=n,o=[],a=Math.max(1,Math.ceil((s-i)/t)),u=(s-i)/a;for(let h=0;h<=a;h++){const d=Math.min(s,i+h*u);h%2===0?(o.push({x:e,y:d}),o.push({x:r,y:d})):(o.push({x:r,y:d}),o.push({x:e,y:d}))}return o}function ng(n,t){const{minX:e,minY:i,maxX:r,maxY:s}=n,o=[],a=Math.max(1,Math.ceil((r-e)/t)),u=(r-e)/a;for(let h=0;h<=a;h++){const d=Math.min(r,e+h*u);h%2===0?(o.push({x:d,y:i}),o.push({x:d,y:s})):(o.push({x:d,y:s}),o.push({x:d,y:i}))}return o}function ig(n,t){const{minX:e,minY:i,maxX:r,maxY:s}=n,o=[],a=e+i,u=r+s,h=t*Math.SQRT2,d=Math.max(1,Math.ceil((u-a)/h)),p=(u-a)/d;let m=!1;for(let g=0;g<=d;g++){const S=a+g*p,M=[],_=S-e;_>=i&&_<=s&&M.push({x:e,y:_});const v=S-i;v>=e&&v<=r&&(M.some(c=>Math.abs(c.x-v)<1e-4&&Math.abs(c.y-i)<1e-4)||M.push({x:v,y:i}));const E=S-r;E>=i&&E<=s&&(M.some(c=>Math.abs(c.x-r)<1e-4&&Math.abs(c.y-E)<1e-4)||M.push({x:r,y:E}));const f=S-s;if(f>=e&&f<=r&&(M.some(c=>Math.abs(c.x-f)<1e-4&&Math.abs(c.y-s)<1e-4)||M.push({x:f,y:s})),M.length>=2){M.sort((l,R)=>l.x-R.x);const c=m?M[M.length-1]:M[0],x=m?M[0]:M[M.length-1];o.push(c,x),m=!m}else M.length===1&&o.push(M[0])}return o.length>0?o:[{x:e,y:i},{x:r,y:s}]}function rg(n,t){let{minX:e,minY:i,maxX:r,maxY:s}=n;const o=[];for(;r>e+.001&&s>i+.001;){const u=[{x:e,y:i},{x:r,y:i},{x:r,y:s},{x:e,y:s},{x:e,y:i}];o.push(u),e+=t,i+=t,r-=t,s-=t}e<=r&&i<=s&&o.push([{x:(e+r)/2,y:(i+s)/2}]);const a=[];for(const u of o)a.push(...u);return a}function sg(n,t){const e=qn(n.toolId),i=e.diameterMm/2,r=et(n.x,0),s=et(n.y,0),o=Math.max(.1,et(n.width,40)),a=Math.max(.1,et(n.height,30)),u=Math.max(0,et(n.cutDepth,3)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),m=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,300))),g=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1.5))),S=n.stepoverPercent||t.defaultStepoverPercent||qs,M=Math.max(.1,e.diameterMm*(S/100)),_=r+i,v=r+o-i,E=s+i,f=s+a-i;if(_>v||E>f)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};const x=kf({minX:_,minY:E,maxX:v,maxY:f},M,n.pattern,n.direction),l=[{x:_,y:E},{x:v,y:E},{x:v,y:f},{x:_,y:f},{x:_,y:E}],R=[],y=Math.max(1,Math.ceil(u/g)),b=u/y;R.push({type:"rapid",z:d,comment:"Retract to safe Z"});let w=h;for(let T=1;T<=y;T++){w=h-T*b;const A=x[0]||l[0];R.push({type:"rapid",x:A.x,y:A.y,comment:`Pass ${T}/${y} start`}),R.push({type:"rapid",z:h+.5}),R.push({type:"linear",z:w,feedRate:m,comment:`Plunge to Z=${w.toFixed(3)}`});for(let C=1;C<x.length;C++)R.push({type:"linear",x:x[C].x,y:x[C].y,feedRate:p});R.push({type:"linear",x:l[0].x,y:l[0].y,feedRate:p,comment:"Wall cleanup"});for(let C=1;C<l.length;C++)R.push({type:"linear",x:l[C].x,y:l[C].y,feedRate:p});R.push({type:"rapid",z:d,comment:`Retract after pass ${T}`})}return{opId:n.id,opName:n.name,toolId:n.toolId,moves:R,minZ:h-u,maxZ:d}}function og(n,t){const i=qn(n.toolId).diameterMm/2,r=et(n.x,0),s=et(n.y,0),o=Math.max(.1,et(n.width,50)),a=Math.max(.1,et(n.height,50)),u=Math.max(0,et(n.cutDepth,5)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),m=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,300))),g=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1.5)));let S,M,_,v;if(n.side==="outside"?(S=r-i,M=r+o+i,_=s-i,v=s+a+i):(S=r+i,M=r+o-i,_=s+i,v=s+a-i),S>M||_>v)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};let E=[{x:S,y:_},{x:M,y:_},{x:M,y:v},{x:S,y:v},{x:S,y:_}];n.direction==="reversed"&&(E=[{x:S,y:_},{x:S,y:v},{x:M,y:v},{x:M,y:_},{x:S,y:_}]);const f=[],c=Math.max(1,Math.ceil(u/g)),x=u/c;f.push({type:"rapid",z:d,comment:"Retract to safe Z"});let l=h;for(let R=1;R<=c;R++){l=h-R*x;const y=E[0];f.push({type:"rapid",x:y.x,y:y.y,comment:`Pass ${R}/${c} start`}),f.push({type:"rapid",z:h+.5}),f.push({type:"linear",z:l,feedRate:m,comment:`Plunge to Z=${l.toFixed(3)}`});for(let b=1;b<E.length;b++)f.push({type:"linear",x:E[b].x,y:E[b].y,feedRate:p});f.push({type:"rapid",z:d,comment:`Retract after pass ${R}`})}return{opId:n.id,opName:n.name,toolId:n.toolId,moves:f,minZ:h-u,maxZ:d}}function ag(n,t){const e=qn(n.toolId),i=e.diameterMm/2,r=et(n.x,0),s=et(n.y,0),o=Math.max(.1,et(n.width,et(t.stockWidth,100))),a=Math.max(.1,et(n.height,et(t.stockHeight,75))),u=Math.max(0,et(n.cutDepth,1)),h=et(t.zOffset,0),d=h+Math.max(1,et(t.safeZ,5)),p=Math.max(50,et(n.feedRate,et(t.defaultFeedRate,800))),m=Math.max(20,et(n.plungeRate,et(t.defaultPlungeRate,300))),g=Math.max(.1,et(n.depthPerPass,et(t.defaultDepthPerPass,1))),S=n.stepoverPercent||t.defaultStepoverPercent||qs,M=Math.max(.1,e.diameterMm*(S/100)),_=[],v={minX:r-i*.6,minY:s-i*.6,maxX:r+o+i*.6,maxY:s+a+i*.6},E=kf(v,M,n.pattern,n.direction);if(E.length===0||u<=0)return{opId:n.id,opName:n.name,toolId:n.toolId,moves:[],minZ:h,maxZ:d};const f=Math.max(1,Math.ceil(u/g)),c=u/f;_.push({type:"rapid",z:d,comment:"Retract to safe Z"});let x=h;for(let l=1;l<=f;l++){x=h-l*c;const R=E[0];_.push({type:"rapid",x:R.x,y:R.y,comment:`Pass ${l}/${f} start XY`}),_.push({type:"rapid",z:h+.5}),_.push({type:"linear",z:x,feedRate:m,comment:`Plunge to Z=${x.toFixed(3)}`});for(let y=1;y<E.length;y++){const b=E[y];_.push({type:"linear",x:b.x,y:b.y,feedRate:p})}_.push({type:"rapid",z:d,comment:`Retract after pass ${l}`})}return{opId:n.id,opName:n.name,toolId:n.toolId,moves:_,minZ:h-u,maxZ:d}}function lg(n){const t=[];for(const e of n.operations)if(e.enabled)switch(e.type){case"surfacing":t.push(ag(e,n.settings));break;case"profiling":t.push(og(e,n.settings));break;case"pocket":t.push(sg(e,n.settings));break;case"hole":t.push(Qm(e,n.settings));break}return t}function cg(n){const t=lg(n),e=[],i=[],r=et(n.settings.stockThickness,12.7);for(const M of n.operations){if(!M.enabled)continue;const _=qn(M.toolId);if(M.type==="hole"){const E=et(M.diameter,_.diameterMm);E<_.diameterMm-.05&&e.push(`Operation "${M.name}": Hole diameter (${E.toFixed(2)}mm) is smaller than tool diameter (${_.diameterMm.toFixed(2)}mm).`)}if(M.type==="pocket"){const E=et(M.width,0),f=et(M.height,0);(E<_.diameterMm||f<_.diameterMm)&&e.push(`Operation "${M.name}": Pocket dimensions (${E.toFixed(1)}x${f.toFixed(1)}mm) are smaller than tool diameter (${_.diameterMm.toFixed(2)}mm).`)}const v=et(M.cutDepth,0);v>r&&e.push(`Operation "${M.name}": Cut depth (${v.toFixed(2)}mm) exceeds stock thickness (${r.toFixed(2)}mm).`)}const o=et(n.settings.zOffset,0)+Math.max(1,et(n.settings.safeZ,5));i.push("%"),i.push("(========================================)"),i.push(`( Project: ${n.name} )`),i.push(`( Date: ${new Date().toLocaleString()} )`),i.push("( Generator: GCoder CNC Toolpath Gen )"),i.push("( Coordinate System: 0,0 Bottom-Left )"),i.push(`( Stock: ${n.settings.stockWidth} x ${n.settings.stockHeight} x ${n.settings.stockThickness} )`),i.push("(========================================)"),i.push(""),i.push("G21 (Units: Millimeters)"),i.push("G90 (Absolute coordinates)"),i.push("G17 (XY plane selection)"),i.push("G94 (Feedrate per minute)"),i.push("");let a=null,u=0,h,d,p,m=0;for(let M=0;M<n.operations.length;M++){const _=n.operations[M];if(!_.enabled)continue;const v=t.find(x=>x.opId===_.id);if(!v||v.moves.length===0)continue;const E=qn(_.toolId),f=mh(n.settings.defaultSpindleRpm,12e3),c=Math.round(mh(_.spindleRpm,f));i.push(""),i.push("(----------------------------------------)"),i.push(`( Operation ${M+1}: ${_.name} [${_.type}] )`),i.push(`( Tool: ${E.name} - Dia: ${E.diameterMm.toFixed(3)}mm )`),i.push("(----------------------------------------)"),a!==_.toolId&&(a!==null?(i.push("M5 (Spindle off)"),i.push(`G0 Z${o.toFixed(3)} (Retract to safe Z)`),i.push("G30 (Go to park position)")):(i.push(`G0 Z${o.toFixed(3)} (Retract to safe Z)`),i.push("G30 (Go to park position)")),i.push(`M0 (Manual tool change: Load ${E.name} - zero Z on stock top, then resume)`),i.push(`M3 S${c} (Spindle ON CW at ${c} RPM)`),i.push("G4 P2.0 (Dwell 2s for spindle spin up)"),i.push(`G0 Z${o.toFixed(3)}`),a=_.toolId,h=void 0,d=void 0,p=o);for(const x of v.moves){const l=[];if(x.comment&&!x.type){i.push(`(${x.comment})`);continue}switch(x.type){case"rapid":l.push("G0");break;case"linear":l.push("G1");break;case"arc-cw":l.push("G2");break;case"arc-ccw":l.push("G3");break}if(x.x!==void 0&&x.x!==h){if(l.push(`X${x.x.toFixed(3)}`),h!==void 0&&d!==void 0){const R=x.y!==void 0?x.y-d:0;m+=Math.hypot(x.x-h,R)}h=x.x}x.y!==void 0&&x.y!==d&&(l.push(`Y${x.y.toFixed(3)}`),d=x.y),x.z!==void 0&&x.z!==p&&(l.push(`Z${x.z.toFixed(3)}`),p!==void 0&&(m+=Math.abs(x.z-p)),p=x.z),x.i!==void 0&&l.push(`I${x.i.toFixed(3)}`),x.j!==void 0&&l.push(`J${x.j.toFixed(3)}`),x.feedRate&&x.feedRate!==u&&x.type!=="rapid"&&(l.push(`F${Math.round(x.feedRate)}`),u=x.feedRate),x.comment&&l.push(`(${x.comment})`),(l.length>1||x.comment)&&i.push(l.join(" "))}}i.push(""),i.push("(========================================)"),i.push("( Program End )"),i.push("(========================================)"),i.push("M5 (Spindle stop)"),i.push(`G0 Z${o.toFixed(3)} (Retract to safe Z)`),i.push("G30 (Move all axes to park position)"),i.push("M30 (End of program and rewind)"),i.push("%");const g=i.join(`
`),S=Math.max(.2,m/(u||800)*1.2);return{gcode:g,totalLines:i.length,estimatedTimeMin:Math.round(S*10)/10,toolpaths:t,warnings:e}}const ug=100;class hg{constructor(){Ke(this,"past",{});Ke(this,"future",{});Ke(this,"canUndoSignal",ve(!1));Ke(this,"canRedoSignal",ve(!1))}initProject(t,e){this.past[t]||(this.past[t]=[],this.future[t]=[]),this.updateSignals(t)}recordSnapshot(t,e,i){this.past[t]||(this.past[t]=[],this.future[t]=[]);const r={timestamp:Date.now(),projectData:JSON.stringify(e),description:i};this.past[t].push(r),this.past[t].length>ug&&this.past[t].shift(),this.future[t]=[],this.updateSignals(t)}undo(t,e){const i=this.past[t];if(!i||i.length===0)return null;const r=i.pop();this.future[t]||(this.future[t]=[]),this.future[t].push({timestamp:Date.now(),projectData:JSON.stringify(e),description:r.description}),this.updateSignals(t);try{return JSON.parse(r.projectData)}catch{return null}}redo(t,e){const i=this.future[t];if(!i||i.length===0)return null;const r=i.pop();this.past[t].push({timestamp:Date.now(),projectData:JSON.stringify(e),description:r.description}),this.updateSignals(t);try{return JSON.parse(r.projectData)}catch{return null}}updateSignals(t){var r,s;const[,e]=this.canUndoSignal,[,i]=this.canRedoSignal;e((((r=this.past[t])==null?void 0:r.length)||0)>0),i((((s=this.future[t])==null?void 0:s.length)||0)>0)}serialize(){return{past:this.past,future:this.future}}hydrate(t){t&&(this.past=t.past||{},this.future=t.future||{})}}const Di=new hg,Gf="gcoder_data_v1";function dg(){try{const t=localStorage.getItem(Gf);if(t){const e=JSON.parse(t);if(e.projects&&Object.keys(e.projects).length>0){let i=e.projects[e.currentProjectId];return i||(i=Object.values(e.projects)[0]),e.undoData&&Di.hydrate(e.undoData),{currentProject:i,projects:e.projects}}}}catch(t){console.warn("Failed to load projects from localStorage:",t)}const n=bu("Default Project");return{currentProject:n,projects:{[n.id]:n}}}let il=null;function fg(n,t){il&&clearTimeout(il),il=setTimeout(()=>{try{const e={currentProjectId:n,projects:t,undoData:Di.serialize()};localStorage.setItem(Gf,JSON.stringify(e))}catch(e){console.error("Failed to save project data to localStorage:",e)}},300)}const Eu=dg(),[Ci,He]=qm(Eu.projects),[Ba,za]=ve(Eu.currentProject.id);var Ef;const[eo,hi]=ve(((Ef=Eu.currentProject.operations[0])==null?void 0:Ef.id)||null),[rl,_h]=ve("selected"),[sl,pg]=ve(!0),[mg,ra]=ve(!1),[gg,Bs]=ve(!1),[_g,xc]=ve(!1),be=wn(()=>{const n=Ba();return Ci[n]||Object.values(Ci)[0]||bu()}),Hf=wn(()=>{const n=be(),t=eo();return t?n.operations.find(e=>e.id===t)||n.operations[0]||null:n.operations[0]||null}),Ys=wn(()=>{const n=be();return cg(n)});function er(n){const t=be();Di.recordSnapshot(t.id,JSON.parse(JSON.stringify(t)),n)}function An(){const n=Ba();fg(n,Ci)}function xg(n="New Project"){var e;const t=bu(n);return He(t.id,t),za(t.id),hi(((e=t.operations[0])==null?void 0:e.id)||null),Di.initProject(t.id,t),An(),t}function vg(n){var t;Ci[n]&&(za(n),hi(((t=Ci[n].operations[0])==null?void 0:t.id)||null),Di.updateSignals(n),An())}function Vf(n,t){const e=t.trim();!e||!Ci[n]||(er(`Rename project to "${e}"`),He(n,"name",e),He(n,"updatedAt",Date.now()),An())}function Sg(n){Vf(Ba(),n)}function yg(n){var i,r;const t=Object.keys(Ci);if(t.length<=1){alert("Cannot delete the only project. Create a new one first.");return}const e=t.find(s=>s!==n)||"";He(n,void 0),za(e),hi(((r=(i=Ci[e])==null?void 0:i.operations[0])==null?void 0:r.id)||null),An()}function Mg(){var i;const n=be(),t=`proj-${Date.now()}`,e={...JSON.parse(JSON.stringify(n)),id:t,name:`${n.name} (Copy)`,createdAt:Date.now(),updatedAt:Date.now()};He(t,e),za(t),hi(((i=e.operations[0])==null?void 0:i.id)||null),An()}function bg(n){er(`Add ${n} operation`);const t=be(),e=t.operations.filter(r=>r.type===n).length+1,i=eg(n,e);He(t.id,"operations",r=>[...r,i]),He(t.id,"updatedAt",Date.now()),hi(i.id),An()}function ne(n,t,e=!0){e&&er("Update operation");const i=be(),r=i.operations.findIndex(a=>a.id===n);if(r===-1)return;const o={...i.operations[r],...t};He(i.id,"operations",r,o),He(i.id,"updatedAt",Date.now()),An()}function Eg(n){var i;er("Delete operation");const t=be(),e=t.operations.filter(r=>r.id!==n);He(t.id,"operations",e),He(t.id,"updatedAt",Date.now()),eo()===n&&hi(((i=e[0])==null?void 0:i.id)||null),An()}function wg(n){const e=be().operations.find(i=>i.id===n);e&&(er(`${e.enabled?"Disable":"Enable"} ${e.name}`),ne(n,{enabled:!e.enabled},!1))}function xh(n,t){if(n===t)return;er("Reorder operations");const e=be(),i=[...e.operations],[r]=i.splice(n,1);i.splice(t,0,r),He(e.id,"operations",i),He(e.id,"updatedAt",Date.now()),An()}function Tg(n){er("Duplicate operation");const t=be(),e=t.operations.find(o=>o.id===n);if(!e)return;const i={...JSON.parse(JSON.stringify(e)),id:`op-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:`${e.name} (Copy)`},r=t.operations.findIndex(o=>o.id===n),s=[...t.operations];s.splice(r+1,0,i),He(t.id,"operations",s),He(t.id,"updatedAt",Date.now()),hi(i.id),An()}function Kn(n){er("Update stock settings");const t=be();He(t.id,"settings",e=>({...e,...n})),He(t.id,"updatedAt",Date.now()),An()}function $f(){var e;const n=be(),t=Di.undo(n.id,JSON.parse(JSON.stringify(n)));t&&(He(n.id,zf(t)),t.operations.some(i=>i.id===eo())||hi(((e=t.operations[0])==null?void 0:e.id)||null),An())}function Wf(){var e;const n=be(),t=Di.redo(n.id,JSON.parse(JSON.stringify(n)));t&&(He(n.id,zf(t)),t.operations.some(i=>i.id===eo())||hi(((e=t.operations[0])==null?void 0:e.id)||null),An())}const Ag=()=>Di.canUndoSignal[0](),Cg=()=>Di.canRedoSignal[0]();var Rg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=3></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">'),Pg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">'),Dg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><polyline points="6 9 12 15 18 9">'),Ig=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><polyline points="18 15 12 9 6 15">'),Lg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10">'),Ng=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10">'),Ug=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><line x1=4 y1=21 x2=4 y2=14></line><line x1=4 y1=10 x2=4 y2=3></line><line x1=12 y1=21 x2=12 y2=12></line><line x1=12 y1=8 x2=12 y2=3></line><line x1=20 y1=21 x2=20 y2=16></line><line x1=20 y1=12 x2=20 y2=3></line><line x1=1 y1=14 x2=7 y2=14></line><line x1=9 y1=8 x2=15 y2=8></line><line x1=17 y1=16 x2=23 y2=16>'),Fg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18">'),Og=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=9 y=9 width=13 height=13 rx=2 ry=2></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">'),Bg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><polyline points="20 6 9 17 4 12">'),zg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1=12 y1=15 x2=12 y2=3>'),kg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1=12 y1=9 x2=12 y2=13></line><line x1=12 y1=17 x2=12.01 y2=17>'),Gg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=18 y1=6 x2=6 y2=18></line><line x1=6 y1=6 x2=18 y2=18>'),Hg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">'),Vg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=10></circle><polyline points="12 6 12 12 16 14">'),$g=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><line x1=12 y1=5 x2=12 y2=19></line><line x1=5 y1=12 x2=19 y2=12>'),Wg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=9 y=2 width=6 height=8 rx=1></rect><path d="M10 10v7l2 4 2-4v-7"></path><line x1=10 y1=13 x2=14 y2=13></line><line x1=10 y1=16 x2=14 y2=16>'),Xg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=3 y=4 width=18 height=16 rx=2></rect><line x1=3 y1=9 x2=21 y2=9></line><line x1=3 y1=14 x2=21 y2=14></line><path d="M7 9l5 5"></path><path d="M12 9l5 5">'),qg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=3 y=3 width=18 height=18 rx=2 stroke-dasharray="3 3"></rect><rect x=6 y=6 width=12 height=12 rx=1>'),Yg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><rect x=3 y=3 width=18 height=18 rx=2></rect><rect x=7 y=7 width=10 height=10 rx=1></rect><line x1=12 y1=7 x2=12 y2=17></line><line x1=7 y1=12 x2=17 y2=12>'),Zg=Pt('<svg viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.75 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=7></circle><circle cx=12 cy=12 r=2 fill=currentColor></circle><line x1=12 y1=2 x2=12 y2=5></line><line x1=12 y1=19 x2=12 y2=22></line><line x1=2 y1=12 x2=5 y2=12></line><line x1=19 y1=12 x2=22 y2=12>');const Ie={size:14};function Xf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Rg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function qf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Pg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function wu(n){const t=()=>n.size??Ie.size;return(()=>{var e=Dg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Yf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Ig();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Kg(n){const t=()=>n.size??Ie.size;return(()=>{var e=Lg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Jg(n){const t=()=>n.size??Ie.size;return(()=>{var e=Ng();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function jg(n){const t=()=>n.size??Ie.size;return(()=>{var e=Ug();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Qg(n){const t=()=>n.size??Ie.size;return(()=>{var e=Fg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function ka(n){const t=()=>n.size??Ie.size;return(()=>{var e=Og();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Zf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Bg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Kf(n){const t=()=>n.size??Ie.size;return(()=>{var e=zg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function wa(n){const t=()=>n.size??Ie.size;return(()=>{var e=kg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Ga(n){const t=()=>n.size??Ie.size;return(()=>{var e=Gg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function t_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Hg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function e_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Vg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Jf(n){const t=()=>n.size??Ie.size;return(()=>{var e=$g();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function n_(n){const t=()=>n.size??Ie.size;return(()=>{var e=Wg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function jf(n){const t=()=>n.size??Ie.size;return(()=>{var e=Xg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function Qf(n){const t=()=>n.size??Ie.size;return(()=>{var e=qg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function tp(n){const t=()=>n.size??Ie.size;return(()=>{var e=Yg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}function ep(n){const t=()=>n.size??Ie.size;return(()=>{var e=Zg();return De(e,Pe({get width(){return t()},get height(){return t()}},n),!0),e})()}var i_=Pt("<span>Copied to Clipboard!"),r_=Pt('<div class=modal-overlay><div class="modal-card gcode-modal"><div class=modal-header><div class=gcode-modal-title><h3>Generated G-Code</h3><div class=gcode-stats><span class=stat-tag> lines</span><span class=stat-tag>Est. ~<!> min</span><span class=stat-tag>Standard: MASSO ISO G-Code</span></div></div><button class=modal-close-btn title=Close></button></div><div class="modal-body gcode-modal-body"><pre class=gcode-viewer><code></code></pre></div><div class="modal-footer gcode-modal-footer"><button></button><button class=btn-primary><span>Download .NC File'),s_=Pt("<span>Copy to Clipboard");function o_(){const[n,t]=ve(!1),e=()=>Ys(),i=async()=>{try{await navigator.clipboard.writeText(e().gcode),t(!0),setTimeout(()=>t(!1),2e3)}catch{const s=document.createElement("textarea");s.value=e().gcode,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),t(!0),setTimeout(()=>t(!1),2e3)}},r=()=>{const s=new Blob([e().gcode],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(s),a=document.createElement("a"),u=be().name.toLowerCase().replace(/[^a-z0-9_-]/g,"_");a.href=o,a.download=`${u}.nc`,a.click(),URL.revokeObjectURL(o)};return rt(Ue,{get when(){return _g()},get children(){var s=r_(),o=s.firstChild,a=o.firstChild,u=a.firstChild,h=u.firstChild,d=h.nextSibling,p=d.firstChild,m=p.firstChild,g=p.nextSibling,S=g.firstChild,M=S.nextSibling;M.nextSibling;var _=u.nextSibling,v=a.nextSibling,E=v.firstChild,f=E.firstChild,c=v.nextSibling,x=c.firstChild,l=x.nextSibling,R=l.firstChild;return s.$$click=()=>xc(!1),o.$$click=y=>y.stopPropagation(),tt(p,()=>e().totalLines,m),tt(g,rt(e_,{size:11,style:{"margin-right":"4px","vertical-align":"middle"}}),S),tt(g,()=>e().estimatedTimeMin,M),_.$$click=()=>xc(!1),tt(_,rt(Ga,{size:14})),tt(f,()=>e().gcode),x.$$click=i,tt(x,rt(Ue,{get when(){return n()},get fallback(){return[rt(ka,{size:13}),s_()]},get children(){return[rt(Zf,{size:13}),i_()]}})),l.$$click=r,tt(l,rt(Kf,{size:13}),R),ce(()=>Un(x,`btn-action ${n()?"copied":""}`)),s}})}ui(["click"]);const[vh,ol]=ve(!1);if(typeof window<"u"){const n=i=>{i.ctrlKey&&i.shiftKey&&ol(!0)},t=i=>{(i.key==="Control"||i.key==="Shift"||!i.ctrlKey||!i.shiftKey)&&ol(!1)},e=()=>{ol(!1)};window.addEventListener("keydown",n,{passive:!0}),window.addEventListener("keyup",t,{passive:!0}),window.addEventListener("blur",e)}var a_=Pt("<div class=dim-input-group><div class=dim-input-header><label class=dim-input-label></label><span></span></div><div><input type=text class=dim-input-field>"),l_=Pt("<span class=error-badge>"),c_=Pt("<span class=preview-text><span class=mm-val>"),u_=Pt("<p class=dim-input-tooltip>");function oe(n){const[t,e]=ve(String(n.value??"")),[i,r]=ve(!1),s=()=>n.allowUnits??!0;vu(()=>{e(String(n.value??""))});const o=wn(()=>Ea(t(),{allowUnits:s()})),a=()=>{r(!1),!o().error&&t()!==String(n.value)&&n.onChange(t())},u=h=>{h.key==="Enter"&&h.target.blur()};return(()=>{var h=a_(),d=h.firstChild,p=d.firstChild,m=p.nextSibling,g=d.nextSibling,S=g.firstChild;return tt(p,()=>n.label),tt(m,(()=>{var M=qi(()=>!!o().error);return()=>M()?(()=>{var _=l_();return tt(_,rt(wa,{size:11,style:{"margin-right":"3px","vertical-align":"text-bottom"}}),null),tt(_,()=>o().error,null),_})():(()=>{var _=c_(),v=_.firstChild;return tt(v,(()=>{var E=qi(()=>!!s());return()=>E()?qi(()=>!!vh())()?o().formattedIn:o().formattedMm:`${o().formatted}${n.unitSuffix?` ${n.unitSuffix}`:""}`})()),_})()})()),S.$$keydown=u,S.$$input=M=>{e(M.currentTarget.value),Ea(M.currentTarget.value,{allowUnits:s()}).error||n.onChange(M.currentTarget.value)},S.addEventListener("blur",a),S.addEventListener("focus",()=>r(!0)),tt(h,(()=>{var M=qi(()=>!!n.tooltip);return()=>M()&&(()=>{var _=u_();return tt(_,()=>n.tooltip),_})()})(),null),ce(M=>{var _=`dim-input-preview ${o().error?"dim-error":"dim-valid"}`,v=o().error||(s()?vh()?o().formattedIn:o().formattedMm:o().formatted),E=`dim-input-wrapper ${o().error?"has-error":""} ${i()?"is-focused":""}`,f=n.placeholder||(s()?"e.g. 1/4in or 10mm":"e.g. 12000 or 12*1000");return _!==M.e&&Un(m,M.e=_),v!==M.t&&Sr(m,"title",M.t=v),E!==M.a&&Un(g,M.a=E),f!==M.o&&Sr(S,"placeholder",M.o=f),M},{e:void 0,t:void 0,a:void 0,o:void 0}),ce(()=>S.value=t()),h})()}ui(["input","keydown"]);var h_=Pt('<div class=modal-overlay><div class="modal-card settings-modal"><div class=modal-header><h3>Stock & Global Parameters</h3><button class=modal-close-btn title=Close></button></div><div class="modal-body settings-body"><div class=settings-section><h4 class=section-title>Stock Material Dimensions</h4><p class=section-desc>0,0 is the bottom-left corner of the stock. Top surface is Z = 0 (before offset).</p><div class=grid-2></div><div class=grid-2></div></div><div class=settings-section><h4 class=section-title>Safety & Travel</h4><div class=grid-2><div class=info-box><span class=info-label>Parking Command:</span><span class=info-val><code>G30</code> (MASSO Work Offset Park)</span><p class=info-hint>Moves all axes to machine park position on tool change & finish.</p></div></div></div><div class=settings-section><h4 class=section-title>Defaults for New Operations</h4><div class=grid-3></div><div class=grid-2><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Default Stepover (% of Tool Dia)</label><span class=preview-text>%</span></div><input type=range class=range-slider min=10 max=90></div></div></div></div><div class=modal-footer><button class=btn-primary>Done');function d_(){const n=()=>be().settings;return rt(Ue,{get when(){return mg()},get children(){var t=h_(),e=t.firstChild,i=e.firstChild,r=i.firstChild,s=r.nextSibling,o=i.nextSibling,a=o.firstChild,u=a.firstChild,h=u.nextSibling,d=h.nextSibling,p=d.nextSibling,m=a.nextSibling,g=m.firstChild,S=g.nextSibling,M=S.firstChild,_=m.nextSibling,v=_.firstChild,E=v.nextSibling,f=E.nextSibling,c=f.firstChild,x=c.firstChild,l=x.firstChild,R=l.nextSibling,y=R.firstChild,b=x.nextSibling,w=o.nextSibling,T=w.firstChild;return t.$$click=()=>ra(!1),e.$$click=A=>A.stopPropagation(),s.$$click=()=>ra(!1),tt(s,rt(Ga,{size:14})),tt(d,rt(oe,{label:"Stock Width (X)",get value(){return n().stockWidth},placeholder:"e.g. 100mm or 4in",onChange:A=>Kn({stockWidth:A})}),null),tt(d,rt(oe,{label:"Stock Height (Y)",get value(){return n().stockHeight},placeholder:"e.g. 75mm or 3in",onChange:A=>Kn({stockHeight:A})}),null),tt(p,rt(oe,{label:"Stock Thickness (Z)",get value(){return n().stockThickness},placeholder:"e.g. 12.7mm or 1/2in",tooltip:"Total stock height along Z. Cuts go into negative Z.",onChange:A=>Kn({stockThickness:A})}),null),tt(p,rt(oe,{label:"Z Offset (Top Surface)",get value(){return n().zOffset},placeholder:"e.g. 0mm",tooltip:"Offset from stock top surface (0mm = stock top is Z0).",onChange:A=>Kn({zOffset:A})}),null),tt(S,rt(oe,{label:"Safe Z (Retract Height)",get value(){return n().safeZ},placeholder:"e.g. 5mm or 1/4in",tooltip:"Rapid travel height above stock top surface.",onChange:A=>Kn({safeZ:A})}),M),tt(E,rt(oe,{label:"Default Feed Rate",get value(){return n().defaultFeedRate},placeholder:"e.g. 800",tooltip:"Horizontal cutting feed in mm/min.",onChange:A=>Kn({defaultFeedRate:A})}),null),tt(E,rt(oe,{label:"Default Plunge Rate",get value(){return n().defaultPlungeRate},placeholder:"e.g. 300",tooltip:"Vertical plunge feed in mm/min.",onChange:A=>Kn({defaultPlungeRate:A})}),null),tt(E,rt(oe,{label:"Spindle RPM",get value(){return n().defaultSpindleRpm},allowUnits:!1,unitSuffix:"RPM",placeholder:"e.g. 12000 or 12*1000",tooltip:"Default spindle speed in rev/min.",onChange:A=>Kn({defaultSpindleRpm:A})}),null),tt(f,rt(oe,{label:"Default Depth Per Pass",get value(){return n().defaultDepthPerPass},placeholder:"e.g. 1.5mm or 1/16in",onChange:A=>Kn({defaultDepthPerPass:A})}),c),tt(R,()=>n().defaultStepoverPercent,y),b.$$input=A=>Kn({defaultStepoverPercent:parseInt(A.currentTarget.value)||40}),T.$$click=()=>ra(!1),ce(()=>b.value=n().defaultStepoverPercent),t}})}ui(["click","input"]);var f_=Pt("<input type=text class=project-rename-input autofocus>"),p_=Pt("<span>Copied!"),m_=Pt('<header class=app-header><div class=header-left><div class=app-branding><span class=app-logo></span><span class=app-title>GCoder</span></div><div class=project-title-container></div></div><div class=header-center><div class=history-controls><button class=btn-icon title="Undo (Ctrl+Z)"><span>Undo</span></button><button class=btn-icon title="Redo (Ctrl+Y or Ctrl+Shift+Z)"><span>Redo</span></button></div></div><div class=header-right><button class=btn-secondary title="Stock Dimensions &amp; Global Defaults"><span>Stock Settings</span></button><button class=btn-secondary title="View G-Code Text"><span>G-Code</span></button><button title="Copy generated G-Code to clipboard"></button><button class="btn-primary btn-export"title="Download .nc / .gcode file"><span>Export G-Code'),g_=Pt('<button class=project-name-btn title="Click to manage projects • Double-click to rename"><span class=folder-icon></span><span class=project-name-text></span><span class=dropdown-chevron>'),__=Pt("<span>Copy G-Code");function x_(){const[n,t]=ve(!1),[e,i]=ve(""),[r,s]=ve(!1);let o=0;const a=()=>{i(be().name),t(!0)},u=()=>{n()&&(Sg(e()),t(!1))},h=g=>{g.key==="Enter"?u():g.key==="Escape"&&t(!1)},d=async()=>{const g=Ys().gcode;try{await navigator.clipboard.writeText(g),s(!0),setTimeout(()=>s(!1),2e3)}catch{const S=document.createElement("textarea");S.value=g,document.body.appendChild(S),S.select(),document.execCommand("copy"),document.body.removeChild(S),s(!0),setTimeout(()=>s(!1),2e3)}},p=()=>{const g=Ys().gcode,S=new Blob([g],{type:"text/plain;charset=utf-8"}),M=URL.createObjectURL(S),_=document.createElement("a"),v=be().name.toLowerCase().replace(/[^a-z0-9_-]/g,"_");_.href=M,_.download=`${v}.nc`,_.click(),URL.revokeObjectURL(M)},m=()=>{const g=Date.now();g-o<350?(a(),o=0):o=g};return(()=>{var g=m_(),S=g.firstChild,M=S.firstChild,_=M.firstChild,v=M.nextSibling,E=S.nextSibling,f=E.firstChild,c=f.firstChild,x=c.firstChild,l=c.nextSibling,R=l.firstChild,y=E.nextSibling,b=y.firstChild,w=b.firstChild,T=b.nextSibling,A=T.firstChild,C=T.nextSibling,D=C.nextSibling,U=D.firstChild;return tt(_,rt(Xf,{size:16})),tt(v,rt(Ue,{get when(){return n()},get fallback(){return(()=>{var F=g_(),O=F.firstChild,G=O.nextSibling,z=G.nextSibling;return F.$$dblclick=$=>{$.stopPropagation(),a()},F.$$click=()=>{m(),Bs(!0)},tt(O,rt(qf,{size:14})),tt(G,()=>be().name),tt(z,rt(wu,{size:11})),F})()},get children(){var F=f_();return F.$$keydown=h,F.addEventListener("blur",u),F.$$input=O=>i(O.currentTarget.value),ce(()=>F.value=e()),F}})),ya(c,"click",$f,!0),tt(c,rt(Kg,{size:12,style:{"margin-right":"4px"}}),x),ya(l,"click",Wf,!0),tt(l,rt(Jg,{size:12,style:{"margin-right":"4px"}}),R),b.$$click=()=>ra(!0),tt(b,rt(jg,{size:13}),w),T.$$click=()=>xc(!0),tt(T,rt(Qg,{size:13}),A),C.$$click=d,tt(C,rt(Ue,{get when(){return r()},get fallback(){return[rt(ka,{size:13}),__()]},get children(){return[rt(Zf,{size:13}),p_()]}})),D.$$click=p,tt(D,rt(Kf,{size:13}),U),ce(F=>{var O=!Ag(),G=!Cg(),z=`btn-action btn-copy ${r()?"copied":""}`;return O!==F.e&&(c.disabled=F.e=O),G!==F.t&&(l.disabled=F.t=G),z!==F.a&&Un(C,F.a=z),F},{e:void 0,t:void 0,a:void 0}),g})()}ui(["input","keydown","click","dblclick"]);var v_=Pt('<div><div class=op-card-header><div class=op-header-left><input type=checkbox class=op-toggle-checkbox><span class=op-type-icon></span><span class=op-title></span></div><div class=op-card-actions><button class=btn-tiny title="Move Up"></button><button class=btn-tiny title="Move Down"></button><button class=btn-tiny title=Duplicate></button><button class="btn-tiny btn-tiny-danger"title=Delete></button></div></div><div class=op-card-footer><span class=op-badge-type></span><span class=op-tool-indicator>');function S_(n){switch(n.type){case"surfacing":return rt(jf,{size:15});case"profiling":return rt(Qf,{size:15});case"pocket":return rt(tp,{size:15});case"hole":return rt(ep,{size:15});default:return rt(Xf,{size:15})}}function y_(n){const t=()=>eo()===n.op.id,e=()=>qn(n.op.toolId);return(()=>{var i=v_(),r=i.firstChild,s=r.firstChild,o=s.firstChild,a=o.nextSibling,u=a.nextSibling,h=s.nextSibling,d=h.firstChild,p=d.nextSibling,m=p.nextSibling,g=m.nextSibling,S=r.nextSibling,M=S.firstChild,_=M.nextSibling;return i.$$click=()=>hi(n.op.id),o.$$click=v=>{v.stopPropagation(),wg(n.op.id)},tt(a,rt(S_,{get type(){return n.op.type}})),tt(u,()=>n.op.name),h.$$click=v=>v.stopPropagation(),d.$$click=()=>xh(n.index,n.index-1),tt(d,rt(Yf,{size:11})),p.$$click=()=>xh(n.index,n.index+1),tt(p,rt(wu,{size:11})),m.$$click=()=>Tg(n.op.id),tt(m,rt(ka,{size:11})),g.$$click=()=>Eg(n.op.id),tt(g,rt(t_,{size:11})),tt(M,()=>n.op.type),tt(_,rt(n_,{size:11,style:{"margin-right":"4px","vertical-align":"middle"}}),null),tt(_,()=>e().name,null),ce(v=>{var E=`op-card ${t()?"op-selected":""} ${n.op.enabled?"":"op-disabled"}`,f=n.op.enabled?"Disable operation":"Enable operation",c=n.index===0,x=n.index===n.total-1;return E!==v.e&&Un(i,v.e=E),f!==v.t&&Sr(o,"title",v.t=f),c!==v.a&&(d.disabled=v.a=c),x!==v.o&&(p.disabled=v.o=x),v},{e:void 0,t:void 0,a:void 0,o:void 0}),ce(()=>o.checked=n.op.enabled),i})()}ui(["click"]);var M_=Pt("<div class=add-op-menu><div class=add-op-menu-header><span>Select Operation Type</span><button class=btn-tiny title=Close></button></div><div class=add-op-menu-buttons><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Rect Surfacing</strong><span>Face top surface to flat depth</span></div></button><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Rect Profiling</strong><span>Cut outer contour or inside slot</span></div></button><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Pocketing</strong><span>Hollow out rectangular cavity</span></div></button><button class=btn-op-type><span class=type-icon></span><div class=type-meta><strong>Hole Drilling</strong><span>Plunge, peck, or circular bore"),b_=Pt("<div class=operation-list-container><div class=operation-list-header><h3 class=panel-heading>Operations (<!>)</h3><span class=panel-hint>Executed top-to-bottom</span></div><div class=operation-cards-scroll></div><div class=add-operation-section>"),E_=Pt("<div class=empty-ops-state><p>No operations yet.</p><p class=empty-sub>Click below to add a machining feature."),w_=Pt("<button class=btn-add-op><span>Add Operation");function T_(){const[n,t]=ve(!1),e=()=>be().operations,i=r=>{bg(r),t(!1)};return(()=>{var r=b_(),s=r.firstChild,o=s.firstChild,a=o.firstChild,u=a.nextSibling;u.nextSibling;var h=s.nextSibling,d=h.nextSibling;return tt(o,()=>e().length,u),tt(h,rt(Ue,{get when(){return e().length>0},get fallback(){return E_()},get children(){return rt(Mu,{get each(){return e()},children:(p,m)=>rt(y_,{op:p,get index(){return m()},get total(){return e().length}})})}})),tt(d,rt(Ue,{get when(){return n()},get fallback(){return(()=>{var p=w_(),m=p.firstChild;return p.$$click=()=>t(!0),tt(p,rt(Jf,{size:13,style:{"margin-right":"6px","vertical-align":"middle"}}),m),p})()},get children(){var p=M_(),m=p.firstChild,g=m.firstChild,S=g.nextSibling,M=m.nextSibling,_=M.firstChild,v=_.firstChild,E=_.nextSibling,f=E.firstChild,c=E.nextSibling,x=c.firstChild,l=c.nextSibling,R=l.firstChild;return S.$$click=()=>t(!1),tt(S,rt(Ga,{size:12})),_.$$click=()=>i("surfacing"),tt(v,rt(jf,{size:16})),E.$$click=()=>i("profiling"),tt(f,rt(Qf,{size:16})),c.$$click=()=>i("pocket"),tt(x,rt(tp,{size:16})),l.$$click=()=>i("hole"),tt(R,rt(ep,{size:16})),p}})),r})()}ui(["click"]);var A_=Pt("<div class=tool-select-group><label class=tool-select-label>Cutting Tool</label><div class=tool-select-control><select class=tool-select-dropdown></select><div class=tool-info-badge><span></span><span class=tool-dimensions>Ø <!> mm"),C_=Pt("<option> (<!> mm)");function R_(n){const t=()=>qn(n.selectedId);return(()=>{var e=A_(),i=e.firstChild,r=i.nextSibling,s=r.firstChild,o=s.nextSibling,a=o.firstChild,u=a.nextSibling,h=u.firstChild,d=h.nextSibling;return d.nextSibling,s.addEventListener("change",p=>n.onChange(p.currentTarget.value)),tt(s,()=>Xs.map(p=>(()=>{var m=C_(),g=m.firstChild,S=g.nextSibling;return S.nextSibling,tt(m,()=>p.name,g),tt(m,()=>p.diameterMm.toFixed(3),S),ce(()=>m.value=p.id),m})())),tt(a,()=>t().profile.toUpperCase()),tt(u,()=>t().diameterMm.toFixed(3),d),ce(()=>Un(a,`profile-tag profile-${t().profile}`)),ce(()=>s.value=n.selectedId),e})()}var P_=Pt('<div class="params-pane empty-params"><p>No operation selected.</p><p class=empty-sub>Click "+ Add Operation" to add a machining feature.'),Sh=Pt("<div class=inline-warning-box><strong>Tool Size Warning:</strong> "),D_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2>"),I_=Pt("<div class=params-pane><div class=params-header><div class=params-title-row><input type=text class=op-name-input><span class=op-type-tag></span></div></div><div class=params-scroll><section class=params-group></section><section class=params-group><h4 class=group-title>Geometry & Dimensions</h4></section><section class=params-group><div class=group-header-collapsible><h4 class=group-title>Feeds, Speeds & Depths</h4><span class=collapse-icon>"),L_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Clearing Pattern</label><select class=tool-select-dropdown><option value=zigzag-h>Zigzag Horizontal (X)</option><option value=zigzag-v>Zigzag Vertical (Y)</option><option value=zigzag-diag>Diagonal Zigzag (45°)</option><option value=spiral>Spiral</option></select></div><div class=dim-input-group><label class=dim-input-label>Path Direction</label><select class=tool-select-dropdown><option value=forward>Forward</option><option value=reversed>Reversed (Start from end)</option></select></div></div><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Stepover (% of Tool Dia)</label><span class=preview-text>%</span></div><input type=range class=range-slider min=10 max=90>"),N_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Cut Side</label><select class=tool-select-dropdown><option value=outside>Outside Profile (Outer boundary)</option><option value=inside>Inside Profile (Inner cut)</option></select></div><div class=dim-input-group><label class=dim-input-label>Direction</label><select class=tool-select-dropdown><option value=forward>Forward (Climb)</option><option value=reversed>Reversed (Conventional)"),U_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Clearing Pattern</label><select class=tool-select-dropdown><option value=spiral>Spiral</option><option value=zigzag-h>Zigzag Horizontal (X)</option><option value=zigzag-v>Zigzag Vertical (Y)</option><option value=zigzag-diag>Diagonal Zigzag (45°)</option></select></div><div class=dim-input-group><label class=dim-input-label>Path Direction</label><select class=tool-select-dropdown><option value=forward>Forward (Outside-in)</option><option value=reversed>Reversed (Inside-out)</option></select></div></div><div class=dim-input-group><div class=dim-input-header><label class=dim-input-label>Stepover (% of Tool Dia)</label><span class=preview-text>%</span></div><input type=range class=range-slider min=10 max=90>"),F_=Pt("<div class=op-fields><div class=grid-2></div><div class=grid-2></div><div class=grid-2><div class=dim-input-group><label class=dim-input-label>Circular Milling Direction</label><select class=tool-select-dropdown><option value=forward>Clockwise (CW - G2)</option><option value=reversed>Counter-Clockwise (CCW - G3)");function O_(){const n=()=>Hf(),[t,e]=ve(!0),i=wn(()=>{const o=n();return o?qn(o.toolId):null}),r=wn(()=>{const o=n(),a=i();if(o&&o.type==="hole"&&a){const u=et(o.diameter,0);if(u<a.diameterMm-.05)return`Hole diameter (${u.toFixed(2)}mm) is smaller than tool diameter (${a.diameterMm.toFixed(2)}mm). Select a smaller tool or increase hole diameter.`}return null}),s=wn(()=>{const o=n(),a=i();if(o&&o.type==="pocket"&&a){const u=o,h=et(u.width,0),d=et(u.height,0);if(h<a.diameterMm||d<a.diameterMm)return`Pocket dimension is smaller than tool diameter (${a.diameterMm.toFixed(2)}mm).`}return null});return rt(Ue,{get when(){return n()},get fallback(){return P_()},children:o=>(()=>{var a=I_(),u=a.firstChild,h=u.firstChild,d=h.firstChild,p=d.nextSibling,m=u.nextSibling,g=m.firstChild,S=g.nextSibling;S.firstChild;var M=S.nextSibling,_=M.firstChild,v=_.firstChild,E=v.nextSibling;return d.$$input=f=>ne(o().id,{name:f.currentTarget.value}),tt(p,()=>o().type),tt(a,rt(Ue,{get when(){return r()},get children(){var f=Sh(),c=f.firstChild;return c.nextSibling,tt(f,rt(wa,{size:13,style:{"margin-right":"6px","vertical-align":"text-bottom"}}),c),tt(f,r,null),f}}),m),tt(a,rt(Ue,{get when(){return s()},get children(){var f=Sh(),c=f.firstChild;return c.nextSibling,tt(f,rt(wa,{size:13,style:{"margin-right":"6px","vertical-align":"text-bottom"}}),c),tt(f,s,null),f}}),m),tt(g,rt(R_,{get selectedId(){return o().toolId},onChange:f=>ne(o().id,{toolId:f})})),tt(S,rt(Ue,{get when(){return o().type==="surfacing"},get children(){return(()=>{const f=o();return(()=>{var c=L_(),x=c.firstChild,l=x.nextSibling,R=l.nextSibling,y=R.firstChild,b=y.firstChild,w=b.nextSibling,T=y.nextSibling,A=T.firstChild,C=A.nextSibling,D=R.nextSibling,U=D.firstChild,F=U.firstChild,O=F.nextSibling,G=O.firstChild,z=U.nextSibling;return tt(x,rt(oe,{label:"Start X (Bottom-Left)",get value(){return f.x},placeholder:"e.g. 0mm",onChange:$=>ne(f.id,{x:$})}),null),tt(x,rt(oe,{label:"Start Y (Bottom-Left)",get value(){return f.y},placeholder:"e.g. 0mm",onChange:$=>ne(f.id,{y:$})}),null),tt(l,rt(oe,{label:"Width (X Span)",get value(){return f.width},placeholder:"e.g. 100mm",onChange:$=>ne(f.id,{width:$})}),null),tt(l,rt(oe,{label:"Height (Y Span)",get value(){return f.height},placeholder:"e.g. 75mm",onChange:$=>ne(f.id,{height:$})}),null),tt(c,rt(oe,{label:"Cut Depth (Material to remove)",get value(){return f.cutDepth},placeholder:"e.g. 1.0mm",tooltip:"Depth removed from top surface down.",onChange:$=>ne(f.id,{cutDepth:$})}),R),w.addEventListener("change",$=>ne(f.id,{pattern:$.currentTarget.value})),C.addEventListener("change",$=>ne(f.id,{direction:$.currentTarget.value})),tt(O,()=>f.stepoverPercent,G),z.$$input=$=>ne(f.id,{stepoverPercent:parseInt($.currentTarget.value)||40}),ce(()=>w.value=f.pattern),ce(()=>C.value=f.direction),ce(()=>z.value=f.stepoverPercent),c})()})()}}),null),tt(S,rt(Ue,{get when(){return o().type==="profiling"},get children(){return(()=>{const f=o();return(()=>{var c=N_(),x=c.firstChild,l=x.nextSibling,R=l.nextSibling,y=R.firstChild,b=y.firstChild,w=b.nextSibling,T=y.nextSibling,A=T.firstChild,C=A.nextSibling;return tt(x,rt(oe,{label:"X (Bottom-Left)",get value(){return f.x},placeholder:"e.g. 5mm",onChange:D=>ne(f.id,{x:D})}),null),tt(x,rt(oe,{label:"Y (Bottom-Left)",get value(){return f.y},placeholder:"e.g. 5mm",onChange:D=>ne(f.id,{y:D})}),null),tt(l,rt(oe,{label:"Profile Width (X)",get value(){return f.width},placeholder:"e.g. 80mm",onChange:D=>ne(f.id,{width:D})}),null),tt(l,rt(oe,{label:"Profile Height (Y)",get value(){return f.height},placeholder:"e.g. 60mm",onChange:D=>ne(f.id,{height:D})}),null),tt(c,rt(oe,{label:"Cut Depth",get value(){return f.cutDepth},placeholder:"e.g. 6.35mm",onChange:D=>ne(f.id,{cutDepth:D})}),R),w.addEventListener("change",D=>ne(f.id,{side:D.currentTarget.value})),C.addEventListener("change",D=>ne(f.id,{direction:D.currentTarget.value})),ce(()=>w.value=f.side),ce(()=>C.value=f.direction),c})()})()}}),null),tt(S,rt(Ue,{get when(){return o().type==="pocket"},get children(){return(()=>{const f=o();return(()=>{var c=U_(),x=c.firstChild,l=x.nextSibling,R=l.nextSibling,y=R.firstChild,b=y.firstChild,w=b.nextSibling,T=y.nextSibling,A=T.firstChild,C=A.nextSibling,D=R.nextSibling,U=D.firstChild,F=U.firstChild,O=F.nextSibling,G=O.firstChild,z=U.nextSibling;return tt(x,rt(oe,{label:"Pocket X (Bottom-Left)",get value(){return f.x},placeholder:"e.g. 20mm",onChange:$=>ne(f.id,{x:$})}),null),tt(x,rt(oe,{label:"Pocket Y (Bottom-Left)",get value(){return f.y},placeholder:"e.g. 15mm",onChange:$=>ne(f.id,{y:$})}),null),tt(l,rt(oe,{label:"Pocket Width (X)",get value(){return f.width},placeholder:"e.g. 50mm",onChange:$=>ne(f.id,{width:$})}),null),tt(l,rt(oe,{label:"Pocket Height (Y)",get value(){return f.height},placeholder:"e.g. 40mm",onChange:$=>ne(f.id,{height:$})}),null),tt(c,rt(oe,{label:"Pocket Depth",get value(){return f.cutDepth},placeholder:"e.g. 3mm",onChange:$=>ne(f.id,{cutDepth:$})}),R),w.addEventListener("change",$=>ne(f.id,{pattern:$.currentTarget.value})),C.addEventListener("change",$=>ne(f.id,{direction:$.currentTarget.value})),tt(O,()=>f.stepoverPercent,G),z.$$input=$=>ne(f.id,{stepoverPercent:parseInt($.currentTarget.value)||40}),ce(()=>w.value=f.pattern),ce(()=>C.value=f.direction),ce(()=>z.value=f.stepoverPercent),c})()})()}}),null),tt(S,rt(Ue,{get when(){return o().type==="hole"},get children(){return(()=>{const f=o();return(()=>{var c=F_(),x=c.firstChild,l=x.nextSibling,R=l.nextSibling,y=R.firstChild,b=y.firstChild,w=b.nextSibling;return tt(x,rt(oe,{label:"Hole Center X",get value(){return f.x},placeholder:"e.g. 50mm",onChange:T=>ne(f.id,{x:T})}),null),tt(x,rt(oe,{label:"Hole Center Y",get value(){return f.y},placeholder:"e.g. 37.5mm",onChange:T=>ne(f.id,{y:T})}),null),tt(l,rt(oe,{label:"Hole Diameter",get value(){return f.diameter},placeholder:"e.g. 6.35mm",tooltip:"Must be ≥ tool diameter. If larger, performs circular milling.",onChange:T=>ne(f.id,{diameter:T})}),null),tt(l,rt(oe,{label:"Cut Depth (Hole Depth)",get value(){return f.cutDepth},placeholder:"e.g. 10mm",onChange:T=>ne(f.id,{cutDepth:T})}),null),tt(R,rt(oe,{label:"Peck Depth (Chip break)",get value(){return f.peckDepth},placeholder:"e.g. 2mm (0 = direct plunge)",tooltip:"Retracts to clear chips every peck.",onChange:T=>ne(f.id,{peckDepth:T})}),y),w.addEventListener("change",T=>ne(f.id,{direction:T.currentTarget.value})),ce(()=>w.value=f.direction),c})()})()}}),null),_.$$click=()=>e(!t()),tt(E,(()=>{var f=qi(()=>!!t());return()=>f()?rt(Yf,{size:11}):rt(wu,{size:11})})()),tt(M,rt(Ue,{get when(){return t()},get children(){var f=D_(),c=f.firstChild,x=c.nextSibling;return tt(c,rt(oe,{label:"Feed Rate (Cut XY)",get value(){return o().feedRate},placeholder:"e.g. 800",tooltip:"Horizontal cutting speed in mm/min.",onChange:l=>ne(o().id,{feedRate:l})}),null),tt(c,rt(oe,{label:"Plunge Rate (Z)",get value(){return o().plungeRate},placeholder:"e.g. 300",tooltip:"Downward entry speed in mm/min.",onChange:l=>ne(o().id,{plungeRate:l})}),null),tt(x,rt(oe,{label:"Spindle RPM",get value(){return o().spindleRpm},allowUnits:!1,unitSuffix:"RPM",placeholder:"e.g. 12000 or 12*1000",tooltip:"Spindle rotation speed in rev/min.",onChange:l=>ne(o().id,{spindleRpm:l})}),null),tt(x,rt(oe,{label:"Depth Per Pass",get value(){return o().depthPerPass},placeholder:"e.g. 1.5mm",tooltip:"Maximum Z cut per layer.",onChange:l=>ne(o().id,{depthPerPass:l})}),null),f}}),null),ce(()=>d.value=o().name),a})()})}ui(["input","click"]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="186",cs={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},B_=0,yh=1,z_=2,sa=1,np=2,zs=3,oi=0,hn=1,$n=2,Ti=0,Gs=1,Mh=2,bh=3,Eh=4,k_=5,ts=100,G_=101,H_=102,V_=103,$_=104,W_=200,X_=201,q_=202,Y_=203,ip=204,rp=205,Z_=206,K_=207,J_=208,j_=209,Q_=210,t0=211,e0=212,n0=213,i0=214,vc=0,Sc=1,yc=2,Zs=3,Mc=4,bc=5,Ec=6,wc=7,sp=0,r0=1,s0=2,ri=0,op=1,ap=2,lp=3,cp=4,up=5,hp=6,dp=7,fp=300,yr=301,fs=302,al=303,ll=304,Ha=306,Tc=1e3,bi=1001,Ac=1002,je=1003,o0=1004,lo=1005,sn=1006,cl=1007,gr=1008,En=1009,pp=1010,mp=1011,Ks=1012,Tu=1013,ai=1014,ei=1015,li=1016,Au=1017,Cu=1018,Js=1020,gp=35902,_p=35899,xp=1021,vp=1022,Wn=1023,Ri=1026,_r=1027,Sp=1028,Ru=1029,Mr=1030,Pu=1031,Du=1033,oa=33776,aa=33777,la=33778,ca=33779,Cc=35840,Rc=35841,Pc=35842,Dc=35843,Ic=36196,Lc=37492,Nc=37496,Uc=37488,Fc=37489,Ta=37490,Oc=37491,Bc=37808,zc=37809,kc=37810,Gc=37811,Hc=37812,Vc=37813,$c=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,Zc=37819,Kc=37820,Jc=37821,jc=36492,Qc=36494,tu=36495,eu=36283,nu=36284,Aa=36285,iu=36286,a0=3200,ru=0,l0=1,$i="",Ln="srgb",Ca="srgb-linear",Ra="linear",de="srgb",ul=7680,c0=519,u0=512,h0=513,d0=514,Iu=515,f0=516,p0=517,Lu=518,m0=519,g0=35044,wh="300 es",ni=2e3,js=2001;function _0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function x0(){const n=Pa("canvas");return n.style.display="block",n}const Th={};function Ah(...n){const t="THREE."+n.shift();console.log(t,...n)}function yp(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Wt(...n){n=yp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function le(...n){n=yp(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function us(...n){const t=n.join(" ");t in Th||(Th[t]=!0,Wt(...n))}function v0(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const S0={[vc]:Sc,[yc]:Ec,[Mc]:wc,[Zs]:bc,[Sc]:vc,[Ec]:yc,[wc]:Mc,[bc]:Zs};class nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ua=Math.PI/180,su=180/Math.PI;function io(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function y0(n,t){return(n%t+t)%t}function hl(n,t,e){return(1-e)*n+e*t}function Ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const M0={DEG2RAD:ua},Yu=class Yu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yu.prototype.isVector2=!0;let kt=Yu;class Ji{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let u=i[r+0],h=i[r+1],d=i[r+2],p=i[r+3],m=s[o+0],g=s[o+1],S=s[o+2],M=s[o+3];if(p!==M||u!==m||h!==g||d!==S){let _=u*m+h*g+d*S+p*M;_<0&&(m=-m,g=-g,S=-S,M=-M,_=-_);let v=1-a;if(_<.9995){const E=Math.acos(_),f=Math.sin(E);v=Math.sin(v*E)/f,a=Math.sin(a*E)/f,u=u*v+m*a,h=h*v+g*a,d=d*v+S*a,p=p*v+M*a}else{u=u*v+m*a,h=h*v+g*a,d=d*v+S*a,p=p*v+M*a;const E=1/Math.sqrt(u*u+h*h+d*d+p*p);u*=E,h*=E,d*=E,p*=E}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],u=i[r+1],h=i[r+2],d=i[r+3],p=s[o],m=s[o+1],g=s[o+2],S=s[o+3];return t[e]=a*S+d*p+u*g-h*m,t[e+1]=u*S+d*m+h*p-a*g,t[e+2]=h*S+d*g+a*m-u*p,t[e+3]=d*S-a*p-u*m-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,u=Math.sin,h=a(i/2),d=a(r/2),p=a(s/2),m=u(i/2),g=u(r/2),S=u(s/2);switch(o){case"XYZ":this._x=m*d*p+h*g*S,this._y=h*g*p-m*d*S,this._z=h*d*S+m*g*p,this._w=h*d*p-m*g*S;break;case"YXZ":this._x=m*d*p+h*g*S,this._y=h*g*p-m*d*S,this._z=h*d*S-m*g*p,this._w=h*d*p+m*g*S;break;case"ZXY":this._x=m*d*p-h*g*S,this._y=h*g*p+m*d*S,this._z=h*d*S+m*g*p,this._w=h*d*p-m*g*S;break;case"ZYX":this._x=m*d*p-h*g*S,this._y=h*g*p+m*d*S,this._z=h*d*S-m*g*p,this._w=h*d*p+m*g*S;break;case"YZX":this._x=m*d*p+h*g*S,this._y=h*g*p+m*d*S,this._z=h*d*S-m*g*p,this._w=h*d*p-m*g*S;break;case"XZY":this._x=m*d*p-h*g*S,this._y=h*g*p-m*d*S,this._z=h*d*S+m*g*p,this._w=h*d*p+m*g*S;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],u=e[9],h=e[2],d=e[6],p=e[10],m=i+a+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-u)*g,this._y=(s-h)*g,this._z=(o-r)*g}else if(i>a&&i>p){const g=2*Math.sqrt(1+i-a-p);this._w=(d-u)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+h)/g}else if(a>p){const g=2*Math.sqrt(1+a-i-p);this._w=(s-h)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(u+d)/g}else{const g=2*Math.sqrt(1+p-i-a);this._w=(o-r)/g,this._x=(s+h)/g,this._y=(u+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,u=e._y,h=e._z,d=e._w;return this._x=i*d+o*a+r*h-s*u,this._y=r*d+o*u+s*a-i*h,this._z=s*d+o*h+i*u-r*a,this._w=o*d-i*a-r*u-s*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let u=1-e;if(a<.9995){const h=Math.acos(a),d=Math.sin(h);u=Math.sin(u*h)/d,e=Math.sin(e*h)/d,this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+s*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+i*e,this._y=this._y*u+r*e,this._z=this._z*u+s*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Zu=class Zu{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,u=t.w,h=2*(o*r-a*i),d=2*(a*e-s*r),p=2*(s*i-o*e);return this.x=e+u*h+o*p-a*d,this.y=i+u*d+a*h-s*p,this.z=r+u*p+s*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,u=e.z;return this.x=r*u-s*a,this.y=s*o-i*u,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zu.prototype.isVector3=!0;let N=Zu;const dl=new N,Ch=new Ji,Ku=class Ku{constructor(t,e,i,r,s,o,a,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,u,h)}set(t,e,i,r,s,o,a,u,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=u,d[6]=i,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],u=i[6],h=i[1],d=i[4],p=i[7],m=i[2],g=i[5],S=i[8],M=r[0],_=r[3],v=r[6],E=r[1],f=r[4],c=r[7],x=r[2],l=r[5],R=r[8];return s[0]=o*M+a*E+u*x,s[3]=o*_+a*f+u*l,s[6]=o*v+a*c+u*R,s[1]=h*M+d*E+p*x,s[4]=h*_+d*f+p*l,s[7]=h*v+d*c+p*R,s[2]=m*M+g*E+S*x,s[5]=m*_+g*f+S*l,s[8]=m*v+g*c+S*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-i*s*d+i*a*u+r*s*h-r*o*u}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8],p=d*o-a*h,m=a*u-d*s,g=h*s-o*u,S=e*p+i*m+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return t[0]=p*M,t[1]=(r*h-d*i)*M,t[2]=(a*i-r*o)*M,t[3]=m*M,t[4]=(d*e-r*u)*M,t[5]=(r*s-a*e)*M,t[6]=g*M,t[7]=(i*u-h*e)*M,t[8]=(o*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const u=Math.cos(s),h=Math.sin(s);return this.set(i*u,i*h,-i*(u*o+h*a)+o+t,-r*h,r*u,-r*(-h*o+u*a)+a+e,0,0,1),this}scale(t,e){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(t,e)),this}rotate(t){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ku.prototype.isMatrix3=!0;let Yt=Ku;const fl=new Yt,Rh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){const n={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===de&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===$i?Ra:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ca]:{primaries:t,whitePoint:i,transfer:Ra,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:i,transfer:de,toXYZ:Rh,fromXYZ:Ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),n}const re=b0();function Ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Cr;class E0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Cr===void 0&&(Cr=Pa("canvas")),Cr.width=t.width,Cr.height=t.height;const r=Cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ai(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ai(e[i]/255)*255):e[i]=Ai(e[i]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let w0=0;class Nu{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=io(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pl(r[o].image)):s.push(pl(r[o]))}else s=pl(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?E0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let T0=0;const ml=new N;class dn extends nr{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,i=bi,r=bi,s=sn,o=gr,a=Wn,u=En,h=dn.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=io(),this.name="",this.source=new Nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=u,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tc:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tc:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=fp;dn.DEFAULT_ANISOTROPY=1;const Ju=class Ju{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const u=t.elements,h=u[0],d=u[4],p=u[8],m=u[1],g=u[5],S=u[9],M=u[2],_=u[6],v=u[10];if(Math.abs(d-m)<.01&&Math.abs(p-M)<.01&&Math.abs(S-_)<.01){if(Math.abs(d+m)<.1&&Math.abs(p+M)<.1&&Math.abs(S+_)<.1&&Math.abs(h+g+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const f=(h+1)/2,c=(g+1)/2,x=(v+1)/2,l=(d+m)/4,R=(p+M)/4,y=(S+_)/4;return f>c&&f>x?f<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(f),r=l/i,s=R/i):c>x?c<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),i=l/r,s=y/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=R/s,r=y/s),this.set(i,r,s,e),this}let E=Math.sqrt((_-S)*(_-S)+(p-M)*(p-M)+(m-d)*(m-d));return Math.abs(E)<.001&&(E=1),this.x=(_-S)/E,this.y=(p-M)/E,this.z=(m-d)/E,this.w=Math.acos((h+g+v-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ju.prototype.isVector4=!0;let me=Ju;class A0 extends nr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Nu(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends A0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mp extends dn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class C0 extends dn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=je,this.minFilter=je,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Fa=class Fa{constructor(t,e,i,r,s,o,a,u,h,d,p,m,g,S,M,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,u,h,d,p,m,g,S,M,_)}set(t,e,i,r,s,o,a,u,h,d,p,m,g,S,M,_){const v=this.elements;return v[0]=t,v[4]=e,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=u,v[2]=h,v[6]=d,v[10]=p,v[14]=m,v[3]=g,v[7]=S,v[11]=M,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Rr.setFromMatrixColumn(t,0).length(),s=1/Rr.setFromMatrixColumn(t,1).length(),o=1/Rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),u=Math.cos(r),h=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const m=o*d,g=o*p,S=a*d,M=a*p;e[0]=u*d,e[4]=-u*p,e[8]=h,e[1]=g+S*h,e[5]=m-M*h,e[9]=-a*u,e[2]=M-m*h,e[6]=S+g*h,e[10]=o*u}else if(t.order==="YXZ"){const m=u*d,g=u*p,S=h*d,M=h*p;e[0]=m+M*a,e[4]=S*a-g,e[8]=o*h,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=g*a-S,e[6]=M+m*a,e[10]=o*u}else if(t.order==="ZXY"){const m=u*d,g=u*p,S=h*d,M=h*p;e[0]=m-M*a,e[4]=-o*p,e[8]=S+g*a,e[1]=g+S*a,e[5]=o*d,e[9]=M-m*a,e[2]=-o*h,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){const m=o*d,g=o*p,S=a*d,M=a*p;e[0]=u*d,e[4]=S*h-g,e[8]=m*h+M,e[1]=u*p,e[5]=M*h+m,e[9]=g*h-S,e[2]=-h,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){const m=o*u,g=o*h,S=a*u,M=a*h;e[0]=u*d,e[4]=M-m*p,e[8]=S*p+g,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=g*p+S,e[10]=m-M*p}else if(t.order==="XZY"){const m=o*u,g=o*h,S=a*u,M=a*h;e[0]=u*d,e[4]=-p,e[8]=h*d,e[1]=m*p+M,e[5]=o*d,e[9]=g*p-S,e[2]=S*p-g,e[6]=a*d,e[10]=M*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,P0)}lookAt(t,e,i){const r=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ui.crossVectors(i,Sn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ui.crossVectors(i,Sn)),Ui.normalize(),co.crossVectors(Sn,Ui),r[0]=Ui.x,r[4]=co.x,r[8]=Sn.x,r[1]=Ui.y,r[5]=co.y,r[9]=Sn.y,r[2]=Ui.z,r[6]=co.z,r[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],u=i[8],h=i[12],d=i[1],p=i[5],m=i[9],g=i[13],S=i[2],M=i[6],_=i[10],v=i[14],E=i[3],f=i[7],c=i[11],x=i[15],l=r[0],R=r[4],y=r[8],b=r[12],w=r[1],T=r[5],A=r[9],C=r[13],D=r[2],U=r[6],F=r[10],O=r[14],G=r[3],z=r[7],$=r[11],Z=r[15];return s[0]=o*l+a*w+u*D+h*G,s[4]=o*R+a*T+u*U+h*z,s[8]=o*y+a*A+u*F+h*$,s[12]=o*b+a*C+u*O+h*Z,s[1]=d*l+p*w+m*D+g*G,s[5]=d*R+p*T+m*U+g*z,s[9]=d*y+p*A+m*F+g*$,s[13]=d*b+p*C+m*O+g*Z,s[2]=S*l+M*w+_*D+v*G,s[6]=S*R+M*T+_*U+v*z,s[10]=S*y+M*A+_*F+v*$,s[14]=S*b+M*C+_*O+v*Z,s[3]=E*l+f*w+c*D+x*G,s[7]=E*R+f*T+c*U+x*z,s[11]=E*y+f*A+c*F+x*$,s[15]=E*b+f*C+c*O+x*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],u=t[9],h=t[13],d=t[2],p=t[6],m=t[10],g=t[14],S=t[3],M=t[7],_=t[11],v=t[15],E=u*g-h*m,f=a*g-h*p,c=a*m-u*p,x=o*g-h*d,l=o*m-u*d,R=o*p-a*d;return e*(M*E-_*f+v*c)-i*(S*E-_*x+v*l)+r*(S*f-M*x+v*R)-s*(S*c-M*l+_*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],o=t[5],a=t[9],u=t[2],h=t[6],d=t[10];return e*(o*d-a*h)-i*(s*d-a*u)+r*(s*h-o*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8],p=t[9],m=t[10],g=t[11],S=t[12],M=t[13],_=t[14],v=t[15],E=e*a-i*o,f=e*u-r*o,c=e*h-s*o,x=i*u-r*a,l=i*h-s*a,R=r*h-s*u,y=d*M-p*S,b=d*_-m*S,w=d*v-g*S,T=p*_-m*M,A=p*v-g*M,C=m*v-g*_,D=E*C-f*A+c*T+x*w-l*b+R*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/D;return t[0]=(a*C-u*A+h*T)*U,t[1]=(r*A-i*C-s*T)*U,t[2]=(M*R-_*l+v*x)*U,t[3]=(m*l-p*R-g*x)*U,t[4]=(u*w-o*C-h*b)*U,t[5]=(e*C-r*w+s*b)*U,t[6]=(_*c-S*R-v*f)*U,t[7]=(d*R-m*c+g*f)*U,t[8]=(o*A-a*w+h*y)*U,t[9]=(i*w-e*A-s*y)*U,t[10]=(S*l-M*c+v*E)*U,t[11]=(p*c-d*l-g*E)*U,t[12]=(a*b-o*T-u*y)*U,t[13]=(e*T-i*b+r*y)*U,t[14]=(M*f-S*x-_*E)*U,t[15]=(d*x-p*f+m*E)*U,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,u=t.z,h=s*o,d=s*a;return this.set(h*o+i,h*a-r*u,h*u+r*a,0,h*a+r*u,d*a+i,d*u-r*o,0,h*u-r*a,d*u+r*o,s*u*u+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,u=e._w,h=s+s,d=o+o,p=a+a,m=s*h,g=s*d,S=s*p,M=o*d,_=o*p,v=a*p,E=u*h,f=u*d,c=u*p,x=i.x,l=i.y,R=i.z;return r[0]=(1-(M+v))*x,r[1]=(g+c)*x,r[2]=(S-f)*x,r[3]=0,r[4]=(g-c)*l,r[5]=(1-(m+v))*l,r[6]=(_+E)*l,r[7]=0,r[8]=(S+f)*R,r[9]=(_-E)*R,r[10]=(1-(m+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=Rr.set(r[0],r[1],r[2]).length();const a=Rr.set(r[4],r[5],r[6]).length(),u=Rr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Bn.copy(this);const h=1/o,d=1/a,p=1/u;return Bn.elements[0]*=h,Bn.elements[1]*=h,Bn.elements[2]*=h,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=p,Bn.elements[9]*=p,Bn.elements[10]*=p,e.setFromRotationMatrix(Bn),i.x=o,i.y=a,i.z=u,this}makePerspective(t,e,i,r,s,o,a=ni,u=!1){const h=this.elements,d=2*s/(e-t),p=2*s/(i-r),m=(e+t)/(e-t),g=(i+r)/(i-r);let S,M;if(u)S=s/(o-s),M=o*s/(o-s);else if(a===ni)S=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===js)S=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=ni,u=!1){const h=this.elements,d=2/(e-t),p=2/(i-r),m=-(e+t)/(e-t),g=-(i+r)/(i-r);let S,M;if(u)S=1/(o-s),M=o/(o-s);else if(a===ni)S=-2/(o-s),M=-(o+s)/(o-s);else if(a===js)S=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=p,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Fa.prototype.isMatrix4=!0;let ie=Fa;const Rr=new N,Bn=new ie,R0=new N(0,0,0),P0=new N(1,1,1),Ui=new N,co=new N,Sn=new N,Dh=new ie,Ih=new Ji;class ji{constructor(t=0,e=0,i=0,r=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],u=r[1],h=r[5],d=r[9],p=r[2],m=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let D0=0;const Lh=new N,Pr=new Ji,di=new ie,uo=new N,ys=new N,I0=new N,L0=new Ji,Nh=new N(1,0,0),Uh=new N(0,1,0),Fh=new N(0,0,1),Oh={type:"added"},N0={type:"removed"},Dr={type:"childadded",child:null},gl={type:"childremoved",child:null};class qe extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new N,e=new ji,i=new Ji,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ie},normalMatrix:{value:new Yt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,e){return Pr.setFromAxisAngle(t,e),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Lh.copy(t).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?uo.copy(t):uo.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ys,uo,this.up):di.lookAt(uo,ys,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(di),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(N0),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,I0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,L0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const p=u[h];s(t.shapes,p)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,h=this.material.length;u<h;u++)a.push(s(t.materials,this.material[u]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(t.animations,u))}}if(e){const a=o(t.geometries),u=o(t.materials),h=o(t.textures),d=o(t.images),p=o(t.shapes),m=o(t.skeletons),g=o(t.animations),S=o(t.nodes);a.length>0&&(i.geometries=a),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),m.length>0&&(i.skeletons=m),g.length>0&&(i.animations=g),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const u=[];for(const h in a){const d=a[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qe.DEFAULT_UP=new N(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ei extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const U0={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const M of t.hand.values()){const _=e.getJointPose(M,i),v=this._getHandJoint(h,M);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],m=d.position.distanceTo(p.position),g=.02,S=.005;h.inputState.pinching&&m>g+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=g-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ei;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=re.workingColorSpace){return this.r=t,this.g=e,this.b=i,re.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=re.workingColorSpace){if(t=y0(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=xl(o,s,t+1/3),this.g=xl(o,s,t),this.b=xl(o,s,t-1/3)}return re.colorSpaceToWorking(this,r),this}setStyle(t,e=Ln){function i(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const i=Ep[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return re.workingToColorSpace(nn.copy(this),t),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(nn.copy(this),e);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let u,h;const d=(a+o)/2;if(a===o)u=0,h=0;else{const p=o-a;switch(h=d<=.5?p/(o+a):p/(2-o-a),o){case i:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-i)/p+2;break;case s:u=(i-r)/p+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ln){re.workingToColorSpace(nn.copy(this),t);const e=nn.r,i=nn.g,r=nn.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(ho);const i=hl(Fi.h,ho.h,e),r=hl(Fi.s,ho.s,e),s=hl(Fi.l,ho.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new te;te.NAMES=Ep;class F0 extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zn=new N,fi=new N,vl=new N,pi=new N,Ir=new N,Lr=new N,Bh=new N,Sl=new N,yl=new N,Ml=new N,bl=new me,El=new me,wl=new me;class ye{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),zn.subVectors(t,e),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){zn.subVectors(r,e),fi.subVectors(i,e),vl.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(fi),u=zn.dot(vl),h=fi.dot(fi),d=fi.dot(vl),p=o*h-a*a;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(h*u-a*d)*m,S=(o*d-a*u)*m;return s.set(1-g-S,S,g)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(t,e,i,r,s,o,a,u){return this.getBarycoord(t,e,i,r,pi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,pi.x),u.addScaledVector(o,pi.y),u.addScaledVector(a,pi.z),u)}static getInterpolatedAttribute(t,e,i,r,s,o){return bl.setScalar(0),El.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,i),wl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(bl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(wl,s.z),o}static isFrontFacing(t,e,i,r){return zn.subVectors(i,e),fi.subVectors(t,e),zn.cross(fi).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),zn.cross(fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return ye.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Lr.subVectors(s,i),Sl.subVectors(t,i);const u=Ir.dot(Sl),h=Lr.dot(Sl);if(u<=0&&h<=0)return e.copy(i);yl.subVectors(t,r);const d=Ir.dot(yl),p=Lr.dot(yl);if(d>=0&&p<=d)return e.copy(r);const m=u*p-d*h;if(m<=0&&u>=0&&d<=0)return o=u/(u-d),e.copy(i).addScaledVector(Ir,o);Ml.subVectors(t,s);const g=Ir.dot(Ml),S=Lr.dot(Ml);if(S>=0&&g<=S)return e.copy(s);const M=g*h-u*S;if(M<=0&&h>=0&&S<=0)return a=h/(h-S),e.copy(i).addScaledVector(Lr,a);const _=d*S-g*p;if(_<=0&&p-d>=0&&g-S>=0)return Bh.subVectors(s,r),a=(p-d)/(p-d+(g-S)),e.copy(r).addScaledVector(Bh,a);const v=1/(_+M+m);return o=M*v,a=m*v,e.copy(i).addScaledVector(Ir,o).addScaledVector(Lr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),po.subVectors(this.max,Ms),Nr.subVectors(t.a,Ms),Ur.subVectors(t.b,Ms),Fr.subVectors(t.c,Ms),Oi.subVectors(Ur,Nr),Bi.subVectors(Fr,Ur),rr.subVectors(Nr,Fr);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-rr.z,rr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,rr.z,0,-rr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-rr.y,rr.x,0];return!Tl(e,Nr,Ur,Fr,po)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,Nr,Ur,Fr,po))?!1:(mo.crossVectors(Oi,Bi),e=[mo.x,mo.y,mo.z],Tl(e,Nr,Ur,Fr,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mi=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,fo=new fn,Nr=new N,Ur=new N,Fr=new N,Oi=new N,Bi=new N,rr=new N,Ms=new N,po=new N,mo=new N,sr=new N;function Tl(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){sr.fromArray(n,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),u=t.dot(sr),h=e.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>a)return!1}return!0}const Ne=new N,go=new kt;let O0=0;class Tn extends nr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=g0,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=mn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class wp extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tp extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ye extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const B0=new fn,bs=new N,Al=new N;class Va{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):B0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Al)),this.expandByPoint(bs.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let z0=0;const Pn=new ie,Cl=new qe,Or=new N,yn=new fn,Es=new fn,We=new N;class Qe extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_0(t)?Tp:wp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return Cl.lookAt(t),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(yn.min,Es.min),yn.expandByPoint(We),We.addVectors(yn.max,Es.max),yn.expandByPoint(We)):(yn.expandByPoint(Es.min),yn.expandByPoint(Es.max))}yn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],u=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)We.fromBufferAttribute(a,h),u&&(Or.fromBufferAttribute(t,h),We.add(Or)),r=Math.max(r,i.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],u=[];for(let y=0;y<i.count;y++)a[y]=new N,u[y]=new N;const h=new N,d=new N,p=new N,m=new kt,g=new kt,S=new kt,M=new N,_=new N;function v(y,b,w){h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,b),p.fromBufferAttribute(i,w),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,b),S.fromBufferAttribute(s,w),d.sub(h),p.sub(h),g.sub(m),S.sub(m);const T=1/(g.x*S.y-S.x*g.y);isFinite(T)&&(M.copy(d).multiplyScalar(S.y).addScaledVector(p,-g.y).multiplyScalar(T),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-S.x).multiplyScalar(T),a[y].add(M),a[b].add(M),a[w].add(M),u[y].add(_),u[b].add(_),u[w].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let y=0,b=E.length;y<b;++y){const w=E[y],T=w.start,A=w.count;for(let C=T,D=T+A;C<D;C+=3)v(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const f=new N,c=new N,x=new N,l=new N;function R(y){x.fromBufferAttribute(r,y),l.copy(x);const b=a[y];f.copy(b),f.sub(x.multiplyScalar(x.dot(b))).normalize(),c.crossVectors(l,b);const T=c.dot(u[y])<0?-1:1;o.setXYZW(y,f.x,f.y,f.z,T)}for(let y=0,b=E.length;y<b;++y){const w=E[y],T=w.start,A=w.count;for(let C=T,D=T+A;C<D;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,g=i.count;m<g;m++)i.setXYZ(m,0,0,0);const r=new N,s=new N,o=new N,a=new N,u=new N,h=new N,d=new N,p=new N;if(t)for(let m=0,g=t.count;m<g;m+=3){const S=t.getX(m+0),M=t.getX(m+1),_=t.getX(m+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,M),o.fromBufferAttribute(e,_),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,_),a.add(d),u.add(d),h.add(d),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let m=0,g=e.count;m<g;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(m+0,d.x,d.y,d.z),i.setXYZ(m+1,d.x,d.y,d.z),i.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,u){const h=a.array,d=a.itemSize,p=a.normalized,m=new h.constructor(u.length*d);let g=0,S=0;for(let M=0,_=u.length;M<_;M++){a.isInterleavedBufferAttribute?g=u[M]*a.data.stride+a.offset:g=u[M]*d;for(let v=0;v<d;v++)m[S++]=h[g++]}return new Tn(m,d,p)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,r=this.attributes;for(const a in r){const u=r[a],h=t(u,i);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const u=[],h=s[a];for(let d=0,p=h.length;d<p;d++){const m=h[d],g=t(m,i);u.push(g)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const u in i){const h=i[u];t.data.attributes[u]=h.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let p=0,m=h.length;p<m;p++){const g=h[p];d.push(g.toJSON(t.data))}d.length>0&&(r[u]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],p=s[h];for(let m=0,g=p.length;m<g;m++)d.push(p[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const p=o[h];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new N,k0=new N,G0=new Yt;class bn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Rl.subVectors(i,e).cross(k0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(Rl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||G0.getNormalMatrix(t),r=this.coplanarPoint(Rl).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let H0=0;class _s extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Gs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ip,this.blendDst=rp,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new bn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new kt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const gi=new N,Pl=new N,_o=new N,xo=new N;class xs{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Pl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(Pl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=xo.dot(this.direction),u=-xo.dot(_o),h=xo.lengthSq(),d=Math.abs(1-o*o);let p,m,g,S;if(d>0)if(p=o*u-a,m=o*a-u,S=s*d,p>=0)if(m>=-S)if(m<=S){const M=1/d;p*=M,m*=M,g=p*(p+o*m+2*a)+m*(o*p+m+2*u)+h}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*u)+h;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*u)+h;else m<=-S?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h):m<=S?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+h):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+h);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*u)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Pl).addScaledVector(_o,m),g}intersectSphere(t,e){if(t.radius<0)return null;gi.subVectors(t.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,u=i+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,u;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,m=this.origin;return h>=0?(i=(t.min.x-m.x)*h,r=(t.max.x-m.x)*h):(i=(t.max.x-m.x)*h,r=(t.min.x-m.x)*h),d>=0?(s=(t.min.y-m.y)*d,o=(t.max.y-m.y)*d):(s=(t.max.y-m.y)*d,o=(t.min.y-m.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-m.z)*p,u=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,u=(t.min.z-m.z)*p),i>u||a>r)||((a>i||i!==i)&&(i=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,i,r,s){const o=this.origin,a=this.direction,u=a.x,h=a.y,d=a.z,p=t.x-o.x,m=t.y-o.y,g=t.z-o.z,S=e.x-o.x,M=e.y-o.y,_=e.z-o.z,v=i.x-o.x,E=i.y-o.y,f=i.z-o.z,c=Math.abs(u),x=Math.abs(h),l=Math.abs(d);let R,y,b,w,T,A,C,D,U,F,O,G;if(c>=x&&c>=l?(b=u,A=p,U=S,G=v,u>=0?(R=h,y=d,w=m,T=g,C=M,D=_,F=E,O=f):(R=d,y=h,w=g,T=m,C=_,D=M,F=f,O=E)):x>=l?(b=h,A=m,U=M,G=E,h>=0?(R=d,y=u,w=g,T=p,C=_,D=S,F=f,O=v):(R=u,y=d,w=p,T=g,C=S,D=_,F=v,O=f)):(b=d,A=g,U=_,G=f,d>=0?(R=u,y=h,w=p,T=m,C=S,D=M,F=v,O=E):(R=h,y=u,w=m,T=p,C=M,D=S,F=E,O=v)),b===0)return null;const z=R/b,$=y/b,Z=1/b,ot=w-z*A,lt=T-$*A,xt=C-z*U,ut=D-$*U,Mt=F-z*G,X=O-$*G,K=Mt*ut-X*xt,st=ot*X-lt*Mt,dt=xt*lt-ut*ot;if(r){if(K<0||st<0||dt<0)return null}else if((K<0||st<0||dt<0)&&(K>0||st>0||dt>0))return null;const ct=K+st+dt;if(ct===0)return null;const zt=Z*(K*A+st*U+dt*G);return(ct>0?zt<0:zt>0)?null:this.at(zt/ct,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ap extends _s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zh=new ie,or=new xs,vo=new Va,kh=new N,So=new N,yo=new N,Mo=new N,Dl=new N,bo=new N,Gh=new N,Eo=new N;class Je extends qe{constructor(t=new Qe,e=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){bo.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=a[u],p=s[u];d!==0&&(Dl.fromBufferAttribute(p,t),o?bo.addScaledVector(Dl,d):bo.addScaledVector(Dl.sub(e),d))}e.add(bo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),or.copy(t.ray).recast(t.near),!(vo.containsPoint(or.origin)===!1&&(or.intersectSphere(vo,kh)===null||or.origin.distanceToSquared(kh)>(t.far-t.near)**2))&&(zh.copy(s).invert(),or.copy(t.ray).applyMatrix4(zh),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,or)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,M=m.length;S<M;S++){const _=m[S],v=o[_.materialIndex],E=Math.max(_.start,g.start),f=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let c=E,x=f;c<x;c+=3){const l=a.getX(c),R=a.getX(c+1),y=a.getX(c+2);r=wo(this,v,t,i,h,d,p,l,R,y),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const S=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let _=S,v=M;_<v;_+=3){const E=a.getX(_),f=a.getX(_+1),c=a.getX(_+2);r=wo(this,o,t,i,h,d,p,E,f,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,M=m.length;S<M;S++){const _=m[S],v=o[_.materialIndex],E=Math.max(_.start,g.start),f=Math.min(u.count,Math.min(_.start+_.count,g.start+g.count));for(let c=E,x=f;c<x;c+=3){const l=c,R=c+1,y=c+2;r=wo(this,v,t,i,h,d,p,l,R,y),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const S=Math.max(0,g.start),M=Math.min(u.count,g.start+g.count);for(let _=S,v=M;_<v;_+=3){const E=_,f=_+1,c=_+2;r=wo(this,o,t,i,h,d,p,E,f,c),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function V0(n,t,e,i,r,s,o,a){let u;if(t.side===hn?u=i.intersectTriangle(o,s,r,!0,a):u=i.intersectTriangle(r,s,o,t.side===oi,a),u===null)return null;Eo.copy(a),Eo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Eo);return h<e.near||h>e.far?null:{distance:h,point:Eo.clone(),object:n}}function wo(n,t,e,i,r,s,o,a,u,h){n.getVertexPosition(a,So),n.getVertexPosition(u,yo),n.getVertexPosition(h,Mo);const d=V0(n,t,e,i,So,yo,Mo,Gh);if(d){const p=new N;ye.getBarycoord(Gh,So,yo,Mo,p),r&&(d.uv=ye.getInterpolatedAttribute(r,a,u,h,p,new kt)),s&&(d.uv1=ye.getInterpolatedAttribute(s,a,u,h,p,new kt)),o&&(d.normal=ye.getInterpolatedAttribute(o,a,u,h,p,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const m={a,b:u,c:h,normal:new N,materialIndex:0};ye.getNormal(So,yo,Mo,m.normal),d.face=m,d.barycoord=p}return d}class $0 extends dn{constructor(t=null,e=1,i=1,r,s,o,a,u,h=je,d=je,p,m){super(null,o,a,u,h,d,r,s,p,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ar=new Va,W0=new kt(.5,.5),To=new N;class Uu{constructor(t=new bn,e=new bn,i=new bn,r=new bn,s=new bn,o=new bn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ni,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],u=s[2],h=s[3],d=s[4],p=s[5],m=s[6],g=s[7],S=s[8],M=s[9],_=s[10],v=s[11],E=s[12],f=s[13],c=s[14],x=s[15];if(r[0].setComponents(h-o,g-d,v-S,x-E).normalize(),r[1].setComponents(h+o,g+d,v+S,x+E).normalize(),r[2].setComponents(h+a,g+p,v+M,x+f).normalize(),r[3].setComponents(h-a,g-p,v-M,x-f).normalize(),i)r[4].setComponents(u,m,_,c).normalize(),r[5].setComponents(h-u,g-m,v-_,x-c).normalize();else if(r[4].setComponents(h-u,g-m,v-_,x-c).normalize(),e===ni)r[5].setComponents(h+u,g+m,v+_,x+c).normalize();else if(e===js)r[5].setComponents(u,m,_,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(t){ar.center.set(0,0,0);const e=W0.distanceTo(t.center);return ar.radius=.7071067811865476+e,ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(To.x=r.normal.x>0?t.max.x:t.min.x,To.y=r.normal.y>0?t.max.y:t.min.y,To.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Er extends _s{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Da=new N,Ia=new N,Hh=new ie,ws=new xs,Ao=new Va,Il=new N,Vh=new N;class X0 extends qe{constructor(t=new Qe,e=new Er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Da.fromBufferAttribute(e,r-1),Ia.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Da.distanceTo(Ia);t.setAttribute("lineDistance",new Ye(i,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),Ao.radius+=s,t.ray.intersectsSphere(Ao)===!1)return;Hh.copy(r).invert(),ws.copy(t.ray).applyMatrix4(Hh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,h=this.isLineSegments?2:1,d=i.index,m=i.attributes.position;if(d!==null){const g=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let M=g,_=S-1;M<_;M+=h){const v=d.getX(M),E=d.getX(M+1),f=Co(this,t,ws,u,v,E,M);f&&e.push(f)}if(this.isLineLoop){const M=d.getX(S-1),_=d.getX(g),v=Co(this,t,ws,u,M,_,S-1);v&&e.push(v)}}else{const g=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let M=g,_=S-1;M<_;M+=h){const v=Co(this,t,ws,u,M,M+1,M);v&&e.push(v)}if(this.isLineLoop){const M=Co(this,t,ws,u,S-1,g,S-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Co(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Da.fromBufferAttribute(a,r),Ia.fromBufferAttribute(a,s),e.distanceSqToSegment(Da,Ia,Il,Vh)>i)return;Il.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Il);if(!(h<t.near||h>t.far))return{distance:h,point:Vh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const $h=new N,Wh=new N;class ps extends X0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)$h.fromBufferAttribute(e,r),Wh.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$h.distanceTo(Wh);t.setAttribute("lineDistance",new Ye(i,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cp extends dn{constructor(t=[],e=yr,i,r,s,o,a,u,h,d){super(t,e,i,r,s,o,a,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qs extends dn{constructor(t,e,i=ai,r,s,o,a=je,u=je,h,d=Ri,p=1){if(d!==Ri&&d!==_r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:p};super(m,r,s,o,a,u,d,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class q0 extends Qs{constructor(t,e=ai,i=yr,r,s,o=je,a=je,u,h=Ri){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,i,r,s,o,a,u,h),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Rp extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rn extends Qe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],p=[];let m=0,g=0;S("z","y","x",-1,-1,i,e,t,o,s,0),S("z","y","x",1,-1,i,e,-t,o,s,1),S("x","z","y",1,1,t,i,e,r,o,2),S("x","z","y",1,-1,t,i,-e,r,o,3),S("x","y","z",1,-1,t,e,i,r,s,4),S("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function S(M,_,v,E,f,c,x,l,R,y,b){const w=c/R,T=x/y,A=c/2,C=x/2,D=l/2,U=R+1,F=y+1;let O=0,G=0;const z=new N;for(let $=0;$<F;$++){const Z=$*T-C;for(let ot=0;ot<U;ot++){const lt=ot*w-A;z[M]=lt*E,z[_]=Z*f,z[v]=D,h.push(z.x,z.y,z.z),z[M]=0,z[_]=0,z[v]=l>0?1:-1,d.push(z.x,z.y,z.z),p.push(ot/R),p.push(1-$/y),O+=1}}for(let $=0;$<y;$++)for(let Z=0;Z<R;Z++){const ot=m+Z+U*$,lt=m+Z+U*($+1),xt=m+(Z+1)+U*($+1),ut=m+(Z+1)+U*$;u.push(ot,lt,ut),u.push(lt,xt,ut),G+=6}a.addGroup(g,G,b),g+=G,m+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $a extends Qe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:u};const h=this;r=Math.floor(r),s=Math.floor(s);const d=[],p=[],m=[],g=[];let S=0;const M=[],_=i/2;let v=0;E(),o===!1&&(t>0&&f(!0),e>0&&f(!1)),this.setIndex(d),this.setAttribute("position",new Ye(p,3)),this.setAttribute("normal",new Ye(m,3)),this.setAttribute("uv",new Ye(g,2));function E(){const c=new N,x=new N;let l=0;const R=(e-t)/i;for(let y=0;y<=s;y++){const b=[],w=y/s,T=w*(e-t)+t;for(let A=0;A<=r;A++){const C=A/r,D=C*u+a,U=Math.sin(D),F=Math.cos(D);x.x=T*U,x.y=-w*i+_,x.z=T*F,p.push(x.x,x.y,x.z),c.set(U,R,F).normalize(),m.push(c.x,c.y,c.z),g.push(C,1-w),b.push(S++)}M.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const w=M[b][y],T=M[b+1][y],A=M[b+1][y+1],C=M[b][y+1];(t>0||b!==0)&&(d.push(w,T,C),l+=3),(e>0||b!==s-1)&&(d.push(T,A,C),l+=3)}h.addGroup(v,l,0),v+=l}function f(c){const x=S,l=new kt,R=new N;let y=0;const b=c===!0?t:e,w=c===!0?1:-1;for(let A=1;A<=r;A++)p.push(0,_*w,0),m.push(0,w,0),g.push(.5,.5),S++;const T=S;for(let A=0;A<=r;A++){const D=A/r*u+a,U=Math.cos(D),F=Math.sin(D);R.x=b*F,R.y=_*w,R.z=b*U,p.push(R.x,R.y,R.z),m.push(0,w,0),l.x=U*.5+.5,l.y=F*.5*w+.5,g.push(l.x,l.y),S++}for(let A=0;A<r;A++){const C=x+A,D=T+A;c===!0?d.push(D,D+1,C):d.push(D+1,D,C),y+=3}h.addGroup(v,y,c===!0?1:2),v+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wa extends Qe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),u=Math.floor(r),h=a+1,d=u+1,p=t/a,m=e/u,g=[],S=[],M=[],_=[];for(let v=0;v<d;v++){const E=v*m-o;for(let f=0;f<h;f++){const c=f*p-s;S.push(c,-E,0),M.push(0,0,1),_.push(f/a),_.push(1-v/u)}}for(let v=0;v<u;v++)for(let E=0;E<a;E++){const f=E+h*v,c=E+h*(v+1),x=E+1+h*(v+1),l=E+1+h*v;g.push(f,c,l),g.push(c,x,l)}this.setIndex(g),this.setAttribute("position",new Ye(S,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wa(t.width,t.height,t.widthSegments,t.heightSegments)}}function ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Xh(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Xh(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function un(n){const t={};for(let e=0;e<n.length;e++){const i=ms(n[e]);for(const r in i)t[r]=i[r]}return t}function Xh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Y0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Pp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Z0={clone:ms,merge:un};var K0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends _s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K0,this.fragmentShader=J0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Y0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new te().setHex(r.value);break;case"v2":this.uniforms[i].value=new kt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new N().fromArray(r.value);break;case"v4":this.uniforms[i].value=new me().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ie().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class j0 extends ci{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dp extends _s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Q0 extends _s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tx extends _s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ex extends Er{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}class Fu extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class nx extends Fu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ll=new ie,qh=new N,Yh=new N;class ix{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uu,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ll,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,u=r?r.x/s.x:0,h=r?r.y/s.y:0;t.coordinateSystem===js||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(Ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ro=new N,Po=new Ji,Jn=new N;class Ip extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ro,Po,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ro,Po,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ro,Po,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,Zh=new kt,Kh=new kt;class Nn extends Ip{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=su*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return su*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,Zh,Kh),e.subVectors(Kh,Zh)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ua*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/u,e-=o.offsetY*i/h,r*=o.width/u,i*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ou extends Ip{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=d*this.view.offsetY,u=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rx extends ix{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jh extends Fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new rx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class sx extends Fu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Br=-90,zr=1;class ox extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Br,zr,t,e);r.layers=this.layers,this.add(r);const s=new Nn(Br,zr,t,e);s.layers=this.layers,this.add(s);const o=new Nn(Br,zr,t,e);o.layers=this.layers,this.add(o);const a=new Nn(Br,zr,t,e);a.layers=this.layers,this.add(a);const u=new Nn(Br,zr,t,e);u.layers=this.layers,this.add(u);const h=new Nn(Br,zr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,u]=e;for(const h of e)this.remove(h);if(t===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,h,d]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,4,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,m,g),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class ax extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class jh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ju=class ju{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};ju.prototype.isMatrix2=!0;let Qh=ju;const td=new N,Do=new N,kr=new N,Gr=new N,Nl=new N,lx=new N,cx=new N;class Ze{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){td.subVectors(t,this.start),Do.subVectors(this.end,this.start);const i=Do.dot(Do);if(i===0)return 0;let s=Do.dot(td)/i;return e&&(s=Zt(s,0,1)),s}closestPointToPoint(t,e,i){const r=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=lx,i=cx){const r=10000000000000001e-32;let s,o;const a=this.start,u=t.start,h=this.end,d=t.end;kr.subVectors(h,a),Gr.subVectors(d,u),Nl.subVectors(a,u);const p=kr.dot(kr),m=Gr.dot(Gr),g=Gr.dot(Nl);if(p<=r&&m<=r)return e.copy(a),i.copy(u),e.sub(i),e.dot(e);if(p<=r)s=0,o=g/m,o=Zt(o,0,1);else{const S=kr.dot(Nl);if(m<=r)o=0,s=Zt(-S/p,0,1);else{const M=kr.dot(Gr),_=p*m-M*M;_!==0?s=Zt((M*g-S*m)/_,0,1):s=0,o=(M*s+g)/m,o<0?(o=0,s=Zt(-S/p,0,1)):o>1&&(o=1,s=Zt((M-S)/p,0,1))}}return e.copy(a).addScaledVector(kr,s),i.copy(u).addScaledVector(Gr,o),e.distanceToSquared(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class ux extends ps{constructor(t=10,e=10,i=4473924,r=8947848){i=new te(i),r=new te(r);const s=e/2,o=t/e,a=t/2,u=[],h=[];for(let m=0,g=0,S=-a;m<=e;m++,S+=o){u.push(-a,0,S,a,0,S),u.push(S,0,-a,S,0,a);const M=m===s?i:r;M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3,M.toArray(h,g),g+=3}const d=new Qe;d.setAttribute("position",new Ye(u,3)),d.setAttribute("color",new Ye(h,3));const p=new Er({vertexColors:!0,toneMapped:!1});super(d,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class hx extends ps{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Qe;r.setAttribute("position",new Ye(e,3)),r.setAttribute("color",new Ye(i,3));const s=new Er({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,i){const r=new te,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class dx extends nr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ed(n,t,e,i){const r=fx(i);switch(e){case xp:return n*t;case Sp:return n*t/r.components*r.byteLength;case Ru:return n*t/r.components*r.byteLength;case Mr:return n*t*2/r.components*r.byteLength;case Pu:return n*t*2/r.components*r.byteLength;case vp:return n*t*3/r.components*r.byteLength;case Wn:return n*t*4/r.components*r.byteLength;case Du:return n*t*4/r.components*r.byteLength;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Rc:case Dc:return Math.max(n,16)*Math.max(t,8)/4;case Cc:case Pc:return Math.max(n,8)*Math.max(t,8)/2;case Ic:case Lc:case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Ta:case Oc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $c:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case qc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Kc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jc:case Qc:case tu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case eu:case nu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Aa:case iu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fx(n){switch(n){case En:case pp:return{byteLength:1,components:1};case Ks:case mp:case li:return{byteLength:2,components:1};case Au:case Cu:return{byteLength:2,components:4};case ai:case Tu:case ei:return{byteLength:4,components:1};case gp:case _p:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lp(){let n=null,t=!1,e=null,i=null;function r(s,o){i=n.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function px(n){const t=new WeakMap;function e(a,u){const h=a.array,d=a.usage,p=h.byteLength,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,h,d),a.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)g=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,u,h){const d=u.array,p=u.updateRanges;if(n.bindBuffer(h,a),p.length===0)n.bufferSubData(h,0,d);else{p.sort((g,S)=>g.start-S.start);let m=0;for(let g=1;g<p.length;g++){const S=p[m],M=p[g];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++m,p[m]=M)}p.length=m+1;for(let g=0,S=p.length;g<S;g++){const M=p[g];n.bufferSubData(h,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(n.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,u));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,u),h.version=a.version}}return{get:r,remove:s,update:o}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,_x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
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
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bx=`#define PI 3.141592653589793
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
} // validated`,zx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ov=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,av=`#ifdef USE_ENVMAP
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
#endif`,lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
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
#endif`,fv=`uniform sampler2D dfgLUT;
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
}`,pv=`
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wv=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
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
}`,eS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`#include <common>
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
}`,MS=`#if DEPTH_PACKING == 3200
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
}`,bS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`uniform float scale;
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
}`,CS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,IS=`#define LAMBERT
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
}`,LS=`#define MATCAP
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
}`,NS=`#define MATCAP
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
}`,US=`#define NORMAL
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
}`,FS=`#define NORMAL
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
}`,OS=`#define PHONG
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
}`,BS=`#define PHONG
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
}`,zS=`#define STANDARD
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
}`,kS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,HS=`#define TOON
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
}`,VS=`uniform float size;
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
}`,$S=`uniform vec3 diffuse;
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
}`,WS=`#include <common>
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
}`,XS=`uniform vec3 color;
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
}`,qS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:vx,alphatest_pars_fragment:Sx,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:bx,batching_vertex:Ex,begin_vertex:wx,beginnormal_vertex:Tx,bsdfs:Ax,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Dx,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Lx,color_fragment:Nx,color_pars_fragment:Ux,color_pars_vertex:Fx,color_vertex:Ox,common:Bx,cube_uv_reflection_fragment:zx,defaultnormal_vertex:kx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Hx,emissivemap_fragment:Vx,emissivemap_pars_fragment:$x,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:Zx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:av,envmap_vertex:Jx,fog_vertex:jx,fog_pars_vertex:Qx,fog_fragment:tv,fog_pars_fragment:ev,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:ov,lights_toon_fragment:lv,lights_toon_pars_fragment:cv,lights_phong_fragment:uv,lights_phong_pars_fragment:hv,lights_physical_fragment:dv,lights_physical_pars_fragment:fv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:xv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:yv,map_fragment:Mv,map_pars_fragment:bv,map_particle_fragment:Ev,map_particle_pars_fragment:wv,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Cv,morphcolor_vertex:Rv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Dv,morphtarget_vertex:Iv,normal_fragment_begin:Lv,normal_fragment_maps:Nv,normal_pars_fragment:Uv,normal_pars_vertex:Fv,normal_vertex:Ov,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:kv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Hv,opaque_fragment:Vv,packing:$v,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Yv,roughnessmap_fragment:Zv,roughnessmap_pars_fragment:Kv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:jv,shadowmap_vertex:Qv,shadowmask_pars_fragment:tS,skinbase_vertex:eS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:rS,specularmap_fragment:sS,specularmap_pars_fragment:oS,tonemapping_fragment:aS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:hS,uv_pars_vertex:dS,uv_vertex:fS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:_S,backgroundCube_frag:xS,cube_vert:vS,cube_frag:SS,depth_vert:yS,depth_frag:MS,distance_vert:bS,distance_frag:ES,equirect_vert:wS,equirect_frag:TS,linedashed_vert:AS,linedashed_frag:CS,meshbasic_vert:RS,meshbasic_frag:PS,meshlambert_vert:DS,meshlambert_frag:IS,meshmatcap_vert:LS,meshmatcap_frag:NS,meshnormal_vert:US,meshnormal_frag:FS,meshphong_vert:OS,meshphong_frag:BS,meshphysical_vert:zS,meshphysical_frag:kS,meshtoon_vert:GS,meshtoon_frag:HS,points_vert:VS,points_frag:$S,shadow_vert:WS,shadow_frag:XS,sprite_vert:qS,sprite_frag:YS},St={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Qn={basic:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:un([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:un([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:un([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new te(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:un([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:un([St.points,St.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:un([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:un([St.common,St.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:un([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:un([St.sprite,St.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:un([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:un([St.lights,St.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Qn.physical={uniforms:un([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Io={r:0,b:0,g:0},ZS=new ie,Np=new Yt;Np.set(-1,0,0,0,1,0,0,0,1);function KS(n,t,e,i,r,s){const o=new te(0);let a=r===!0?0:1,u,h,d=null,p=0,m=null;function g(E){let f=E.isScene===!0?E.background:null;if(f&&f.isTexture){const c=E.backgroundBlurriness>0;f=t.get(f,c)}return f}function S(E){let f=!1;const c=g(E);c===null?_(o,a):c&&c.isColor&&(_(c,1),f=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||f)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(E,f){const c=g(f);c&&(c.isCubeTexture||c.mapping===Ha)?(h===void 0&&(h=new Je(new rn(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ms(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,l,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=c,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ZS.makeRotationFromEuler(f.backgroundRotation)).transpose(),c.isCubeTexture&&c.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Np),h.material.toneMapped=re.getTransfer(c.colorSpace)!==de,(d!==c||p!==c.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=c,p=c.version,m=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):c&&c.isTexture&&(u===void 0&&(u=new Je(new Wa(2,2),new ci({name:"BackgroundMaterial",uniforms:ms(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=c,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=re.getTransfer(c.colorSpace)!==de,c.matrixAutoUpdate===!0&&c.updateMatrix(),u.material.uniforms.uvTransform.value.copy(c.matrix),(d!==c||p!==c.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=c,p=c.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function _(E,f){E.getRGB(Io,Pp(n)),e.buffers.color.setClear(Io.r,Io.g,Io.b,f,s)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,f=1){o.set(E),a=f,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,_(o,a)},render:S,addToRenderList:M,dispose:v}}function JS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(T,A,C,D,U){let F=!1;const O=p(T,D,C,A);s!==O&&(s=O,h(s.object)),F=g(T,D,C,U),F&&S(T,D,C,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,c(T,A,C,D),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function u(){return n.createVertexArray()}function h(T){return n.bindVertexArray(T)}function d(T){return n.deleteVertexArray(T)}function p(T,A,C,D){const U=D.wireframe===!0;let F=i[A.id];F===void 0&&(F={},i[A.id]=F);const O=T.isInstancedMesh===!0?T.id:0;let G=F[O];G===void 0&&(G={},F[O]=G);let z=G[C.id];z===void 0&&(z={},G[C.id]=z);let $=z[U];return $===void 0&&($=m(u()),z[U]=$),$}function m(T){const A=[],C=[],D=[];for(let U=0;U<e;U++)A[U]=0,C[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:C,attributeDivisors:D,object:T,attributes:{},index:null}}function g(T,A,C,D){const U=s.attributes,F=A.attributes;let O=0;const G=C.getAttributes();for(const z in G)if(G[z].location>=0){const Z=U[z];let ot=F[z];if(ot===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor)),Z===void 0||Z.attribute!==ot||ot&&Z.data!==ot.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function S(T,A,C,D){const U={},F=A.attributes;let O=0;const G=C.getAttributes();for(const z in G)if(G[z].location>=0){let Z=F[z];Z===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(Z=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(Z=T.instanceColor));const ot={};ot.attribute=Z,Z&&Z.data&&(ot.data=Z.data),U[z]=ot,O++}s.attributes=U,s.attributesNum=O,s.index=D}function M(){const T=s.newAttributes;for(let A=0,C=T.length;A<C;A++)T[A]=0}function _(T){v(T,0)}function v(T,A){const C=s.newAttributes,D=s.enabledAttributes,U=s.attributeDivisors;C[T]=1,D[T]===0&&(n.enableVertexAttribArray(T),D[T]=1),U[T]!==A&&(n.vertexAttribDivisor(T,A),U[T]=A)}function E(){const T=s.newAttributes,A=s.enabledAttributes;for(let C=0,D=A.length;C<D;C++)A[C]!==T[C]&&(n.disableVertexAttribArray(C),A[C]=0)}function f(T,A,C,D,U,F,O){O===!0?n.vertexAttribIPointer(T,A,C,U,F):n.vertexAttribPointer(T,A,C,D,U,F)}function c(T,A,C,D){M();const U=D.attributes,F=C.getAttributes(),O=A.defaultAttributeValues;for(const G in F){const z=F[G];if(z.location>=0){let $=U[G];if($===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&($=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&($=T.instanceColor)),$!==void 0){const Z=$.normalized,ot=$.itemSize,lt=t.get($);if(lt===void 0)continue;const xt=lt.buffer,ut=lt.type,Mt=lt.bytesPerElement,X=ut===n.INT||ut===n.UNSIGNED_INT||$.gpuType===Tu;if($.isInterleavedBufferAttribute){const K=$.data,st=K.stride,dt=$.offset;if(K.isInstancedInterleavedBuffer){for(let ct=0;ct<z.locationSize;ct++)v(z.location+ct,K.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ct=0;ct<z.locationSize;ct++)_(z.location+ct);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let ct=0;ct<z.locationSize;ct++)f(z.location+ct,ot/z.locationSize,ut,Z,st*Mt,(dt+ot/z.locationSize*ct)*Mt,X)}else{if($.isInstancedBufferAttribute){for(let K=0;K<z.locationSize;K++)v(z.location+K,$.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let K=0;K<z.locationSize;K++)_(z.location+K);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let K=0;K<z.locationSize;K++)f(z.location+K,ot/z.locationSize,ut,Z,ot*Mt,ot/z.locationSize*K*Mt,X)}}else if(O!==void 0){const Z=O[G];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(z.location,Z);break;case 3:n.vertexAttrib3fv(z.location,Z);break;case 4:n.vertexAttrib4fv(z.location,Z);break;default:n.vertexAttrib1fv(z.location,Z)}}}}E()}function x(){b();for(const T in i){const A=i[T];for(const C in A){const D=A[C];for(const U in D){const F=D[U];for(const O in F)d(F[O].object),delete F[O];delete D[U]}}delete i[T]}}function l(T){if(i[T.id]===void 0)return;const A=i[T.id];for(const C in A){const D=A[C];for(const U in D){const F=D[U];for(const O in F)d(F[O].object),delete F[O];delete D[U]}}delete i[T.id]}function R(T){for(const A in i){const C=i[A];for(const D in C){const U=C[D];if(U[T.id]===void 0)continue;const F=U[T.id];for(const O in F)d(F[O].object),delete F[O];delete U[T.id]}}}function y(T){for(const A in i){const C=i[A],D=T.isInstancedMesh===!0?T.id:0,U=C[D];if(U!==void 0){for(const F in U){const O=U[F];for(const G in O)d(O[G].object),delete O[G];delete U[F]}delete C[D],Object.keys(C).length===0&&delete i[A]}}}function b(){w(),o=!0,s!==r&&(s=r,h(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:x,releaseStatesOfGeometry:l,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:_,disableUnusedAttributes:E}}function jS(n,t,e){let i;function r(u){i=u}function s(u,h){n.drawArrays(i,u,h),e.update(h,i,1)}function o(u,h,d){d!==0&&(n.drawArraysInstanced(i,u,h,d),e.update(h,i,d))}function a(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function QS(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==En&&R!==ei&&!y&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function u(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=u(h);d!==h&&(Wt("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const p=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&m===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),c=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=n.getParameter(n.MAX_SAMPLES),l=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:E,maxVaryings:f,maxFragmentUniforms:c,maxSamples:x,samples:l}}function ty(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new bn,a=new Yt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||i!==0||r;return r=m,i=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){e=d(p,m,0)},this.setState=function(p,m,g){const S=p.clippingPlanes,M=p.clipIntersection,_=p.clipShadows,v=n.get(p);if(!r||S===null||S.length===0||s&&!_)s?d(null):h();else{const E=s?0:i,f=E*4;let c=v.clippingState||null;u.value=c,c=d(S,m,f,g);for(let x=0;x!==f;++x)c[x]=e[x];v.clippingState=c,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(p,m,g,S){const M=p!==null?p.length:0;let _=null;if(M!==0){if(_=u.value,S!==!0||_===null){const v=g+M*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(_===null||_.length<v)&&(_=new Float32Array(v));for(let f=0,c=g;f!==M;++f,c+=4)o.copy(p[f]).applyMatrix4(E,a),o.normal.toArray(_,c),_[c+3]=o.constant}u.value=_,u.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,_}}const ss=4,ey=6,ny=20,iy=256,Ts=new Ou,nd=new te;let Ul=null,Fl=0,Ol=0,Bl=!1;const ry=new N,lr=new N;class id{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=ry}=s;Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,i,r,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ul,Fl,Ol),this._renderer.xr.enabled=Bl,t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ul=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:li,format:Wn,colorSpace:Ca,depthBuffer:!1},r=rd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sy(s)),this._blurMaterial=ay(s,t,e),this._ggxMaterial=oy(s,t,e)}return r}_compileMaterial(t){const e=new Je(new Qe,t);this._renderer.compile(e,Ts)}_sceneToCubeUV(t,e,i,r,s){const u=new Nn(90,1,e,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(nd),p.toneMapping=ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new rn,new Ap({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,_=M.material;let v=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,v=!0):(_.color.copy(nd),v=!0);for(let f=0;f<6;f++){const c=f%3;c===0?(u.up.set(0,h[f],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+d[f],s.y,s.z)):c===1?(u.up.set(0,0,h[f]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+d[f],s.z)):(u.up.set(0,h[f],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+d[f]));const x=this._cubeSize;Hr(r,c*x,f>2?x:0,x,x),p.setRenderTarget(r),v&&p.render(M,u),p.render(t,u)}p.toneMapping=g,p.autoClear=m,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===yr||t.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const u=this._cubeSize;Hr(e,0,0,3*u,2*u),i.setRenderTarget(e),i.render(o,Ts)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const u=o.uniforms,h=i/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(h*h-d*d),m=h*1.25,g=p*m,{_lodMax:S}=this,M=this._sizeLods[i],_=3*M*(i>S-ss?i-S+ss:0),v=4*(this._cubeSize-M);u.envMap.value=t.texture,u.roughness.value=g,u.mipInt.value=S-e,Hr(s,_,v,3*M,2*M),r.setRenderTarget(s),r.render(a,Ts),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=S-i,Hr(t,_,v,3*M,2*M),r.setRenderTarget(t),r.render(a,Ts)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,r,s){const o=this._renderer,a=this._blurMaterial,u=this._lodMeshes[r];u.material=a;const h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=s,h.mipInt.value=this._lodMax-i;const d=this._sizeLods[r],p=3*d*(r>this._lodMax-ss?r-this._lodMax+ss:0),m=4*(this._cubeSize-d);Hr(e,p,m,3*d,2*d),o.setRenderTarget(e),o.render(u,Ts)}}function sy(n){const t=[],e=[];let i=n;const r=n-ss+1+ey;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),u=-a,h=1+a,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,g=3,S=new Float32Array(g*m*p),M=new Float32Array(g*m*p);for(let v=0;v<p;v++){const E=v%3*2/3-1,f=v>2?0:-1,c=[E,f,0,E+2/3,f,0,E+2/3,f+1,0,E,f,0,E+2/3,f+1,0,E,f+1,0];S.set(c,g*m*v);for(let x=0;x<m;x++){const l=d[x*2]*2-1,R=d[x*2+1]*2-1;v===0?lr.set(1,R,l):v===1?lr.set(-l,1,-R):v===2?lr.set(-l,R,1):v===3?lr.set(-1,R,-l):v===4?lr.set(-l,-1,R):lr.set(l,R,-1),lr.toArray(M,(v*m+x)*g)}}const _=new Qe;_.setAttribute("position",new Tn(S,g)),_.setAttribute("outputDirection",new Tn(M,g)),e.push(new Je(_,null)),i>ss&&i--}return{lodMeshes:e,sizeLods:t}}function rd(n,t,e){const i=new Xn(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function oy(n,t,e){return new ci({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function ay(n,t,e){return new ci({name:"SphericalGaussianBlur",defines:{SAMPLES:ny,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function sd(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function od(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

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
	`}class Up extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Cp(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rn(5,5,5),s=new ci({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ti});s.uniforms.tEquirect.value=e;const o=new Je(r,s),a=e.minFilter;return e.minFilter===gr&&(e.minFilter=sn),new ox(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}function ly(n){let t=new WeakMap,e=new WeakMap,i=null;function r(m,g=!1){return m==null?null:g?o(m):s(m)}function s(m){if(m&&m.isTexture){const g=m.mapping;if(g===al||g===ll)if(t.has(m)){const S=t.get(m).texture;return a(S,m.mapping)}else{const S=m.image;if(S&&S.height>0){const M=new Up(S.height);return M.fromEquirectangularTexture(n,m),t.set(m,M),m.addEventListener("dispose",h),a(M.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){const g=m.mapping,S=g===al||g===ll,M=g===yr||g===fs;if(S||M){let _=e.get(m);const v=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==v)return i===null&&(i=new id(n)),_=S?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,e.set(m,_),_.texture;if(_!==void 0)return _.texture;{const E=m.image;return S&&E&&E.height>0||M&&E&&u(E)?(i===null&&(i=new id(n)),_=S?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,e.set(m,_),m.addEventListener("dispose",d),_.texture):null}}}return m}function a(m,g){return g===al?m.mapping=yr:g===ll&&(m.mapping=fs),m}function u(m){let g=0;const S=6;for(let M=0;M<S;M++)m[M]!==void 0&&g++;return g===S}function h(m){const g=m.target;g.removeEventListener("dispose",h);const S=t.get(g);S!==void 0&&(t.delete(g),S.dispose())}function d(m){const g=m.target;g.removeEventListener("dispose",d);const S=e.get(g);S!==void 0&&(e.delete(g),S.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function cy(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&us("WebGLRenderer: "+i+" extension not supported."),r}}}function uy(n,t,e,i){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&t.remove(m.index);for(const S in m.attributes)t.remove(m.attributes[S]);m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(t.remove(g),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function u(p){const m=p.attributes;for(const g in m)t.update(m[g],n.ARRAY_BUFFER)}function h(p){const m=[],g=p.index,S=p.attributes.position;let M=0;if(S===void 0)return;if(g!==null){const E=g.array;M=g.version;for(let f=0,c=E.length;f<c;f+=3){const x=E[f+0],l=E[f+1],R=E[f+2];m.push(x,l,l,R,R,x)}}else{const E=S.array;M=S.version;for(let f=0,c=E.length/3-1;f<c;f+=3){const x=f+0,l=f+1,R=f+2;m.push(x,l,l,R,R,x)}}const _=new(S.count>=65535?Tp:wp)(m,1);_.version=M;const v=s.get(p);v&&t.remove(v),s.set(p,_)}function d(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:a,update:u,getWireframeAttribute:d}}function hy(n,t,e){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function u(p,m){n.drawElements(i,m,s,p*o),e.update(m,i,1)}function h(p,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,p*o,g),e.update(m,i,g))}function d(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,g);let M=0;for(let _=0;_<g;_++)M+=m[_];e.update(M,i,1)}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function dy(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function fy(n,t,e){const i=new WeakMap,r=new me;function s(o,a,u){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let m=i.get(a);if(m===void 0||m.count!==p){let w=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var g=w;m!==void 0&&m.texture.dispose();const S=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],f=a.morphAttributes.color||[];let c=0;S===!0&&(c=1),M===!0&&(c=2),_===!0&&(c=3);let x=a.attributes.position.count*c,l=1;x>t.maxTextureSize&&(l=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*l*4*p),y=new Mp(R,x,l,p);y.type=ei,y.needsUpdate=!0;const b=c*4;for(let T=0;T<p;T++){const A=v[T],C=E[T],D=f[T],U=x*l*4*T;for(let F=0;F<A.count;F++){const O=F*b;S===!0&&(r.fromBufferAttribute(A,F),R[U+O+0]=r.x,R[U+O+1]=r.y,R[U+O+2]=r.z,R[U+O+3]=0),M===!0&&(r.fromBufferAttribute(C,F),R[U+O+4]=r.x,R[U+O+5]=r.y,R[U+O+6]=r.z,R[U+O+7]=0),_===!0&&(r.fromBufferAttribute(D,F),R[U+O+8]=r.x,R[U+O+9]=r.y,R[U+O+10]=r.z,R[U+O+11]=D.itemSize===4?r.w:1)}}m={count:p,texture:y,size:new kt(x,l)},i.set(a,m),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let S=0;for(let _=0;_<h.length;_++)S+=h[_];const M=a.morphTargetsRelative?1:1-S;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",h)}u.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function py(n,t,e,i,r){let s=new WeakMap;function o(h){const d=r.render.frame,p=h.geometry,m=t.get(h,p);if(s.get(m)!==d&&(t.update(m),s.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==d&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const g=h.skeleton;s.get(g)!==d&&(g.update(),s.set(g,d))}return m}function a(){s=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),i.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const my={[op]:"LINEAR_TONE_MAPPING",[ap]:"REINHARD_TONE_MAPPING",[lp]:"CINEON_TONE_MAPPING",[cp]:"ACES_FILMIC_TONE_MAPPING",[hp]:"AGX_TONE_MAPPING",[dp]:"NEUTRAL_TONE_MAPPING",[up]:"CUSTOM_TONE_MAPPING"};function gy(n,t,e,i,r,s){const o=new Xn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,u=null;const h=new Qe;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const d=new j0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Je(h,d),m=new Ou(-1,1,1,-1,0,1);let g=null,S=null,M=!1,_,v=null,E=[],f=!1;this.setSize=function(c,x){o.setSize(c,x),a!==null&&a.setSize(c,x),u!==null&&u.setSize(c,x);for(let l=0;l<E.length;l++){const R=E[l];R.setSize&&R.setSize(c,x)}},this.setEffects=function(c){E=c,f=E.length>0&&E[0].isRenderPass===!0;const x=o.width,l=o.height;E.length>0&&a===null&&(a=new Xn(x,l,{type:li,depthBuffer:!1,stencilBuffer:!1}),u=new Xn(x,l,{type:li,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){const y=E[R];y.setSize&&y.setSize(x,l)}},this.begin=function(c,x){if(M||c.toneMapping===ri&&E.length===0)return!1;if(v=x,x!==null){const l=x.width,R=x.height;(o.width!==l||o.height!==R)&&this.setSize(l,R)}return f===!1&&c.setRenderTarget(o),_=c.toneMapping,c.toneMapping=ri,!0},this.hasRenderPass=function(){return f},this.end=function(c,x){c.toneMapping=_,M=!0;let l=o,R=a;for(let y=0;y<E.length;y++){const b=E[y];b.enabled!==!1&&(b.render(c,R,l,x),b.needsSwap!==!1&&(l=R,R=R===a?u:a))}if(g!==c.outputColorSpace||S!==c.toneMapping){g=c.outputColorSpace,S=c.toneMapping,d.defines={},re.getTransfer(g)===de&&(d.defines.SRGB_TRANSFER="");const y=my[S];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=l.texture,c.setRenderTarget(v),c.render(p,m),v=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),u!==null&&u.dispose(),h.dispose(),d.dispose()}}const Fp=new dn,ou=new Qs(1,1),Op=new Mp,Bp=new C0,zp=new Cp,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),hd=new Float32Array(4);function vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function $e(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function qa(n,t){let e=ld[t];e===void 0&&(e=new Int32Array(t),ld[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _y(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),$e(e,t)}}function vy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),$e(e,t)}}function Sy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),$e(e,t)}}function yy(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ve(e,i))return;hd.set(i),n.uniformMatrix2fv(this.addr,!1,hd),$e(e,i)}}function My(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ve(e,i))return;ud.set(i),n.uniformMatrix3fv(this.addr,!1,ud),$e(e,i)}}function by(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ve(e,i))return;cd.set(i),n.uniformMatrix4fv(this.addr,!1,cd),$e(e,i)}}function Ey(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),$e(e,t)}}function Ty(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),$e(e,t)}}function Ay(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),$e(e,t)}}function Cy(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ry(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),$e(e,t)}}function Py(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),$e(e,t)}}function Dy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),$e(e,t)}}function Iy(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ou.compareFunction=e.isReversedDepthBuffer()?Lu:Iu,s=ou):s=Fp,e.setTexture2D(t||s,r)}function Ly(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Bp,r)}function Ny(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||zp,r)}function Uy(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Op,r)}function Fy(n){switch(n){case 5126:return _y;case 35664:return xy;case 35665:return vy;case 35666:return Sy;case 35674:return yy;case 35675:return My;case 35676:return by;case 5124:case 35670:return Ey;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Py;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Oy(n,t){n.uniform1fv(this.addr,t)}function By(n,t){const e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function zy(n,t){const e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function ky(n,t){const e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function Gy(n,t){const e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Hy(n,t){const e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vy(n,t){const e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $y(n,t){n.uniform1iv(this.addr,t)}function Wy(n,t){n.uniform2iv(this.addr,t)}function Xy(n,t){n.uniform3iv(this.addr,t)}function qy(n,t){n.uniform4iv(this.addr,t)}function Yy(n,t){n.uniform1uiv(this.addr,t)}function Zy(n,t){n.uniform2uiv(this.addr,t)}function Ky(n,t){n.uniform3uiv(this.addr,t)}function Jy(n,t){n.uniform4uiv(this.addr,t)}function jy(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ou:o=Fp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Qy(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Bp,s[o])}function tM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||zp,s[o])}function eM(n,t,e){const i=this.cache,r=t.length,s=qa(e,r);Ve(i,s)||(n.uniform1iv(this.addr,s),$e(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Op,s[o])}function nM(n){switch(n){case 5126:return Oy;case 35664:return By;case 35665:return zy;case 35666:return ky;case 35674:return Gy;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return $y;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return Yy;case 36294:return Zy;case 36295:return Ky;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Fy(e.type)}}class rM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nM(e.type)}}class sM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function dd(n,t){n.seq.push(t),n.map[t.id]=t}function oM(n,t,e){const i=n.name,r=i.length;for(zl.lastIndex=0;;){const s=zl.exec(i),o=zl.lastIndex;let a=s[1];const u=s[2]==="]",h=s[3];if(u&&(a=a|0),h===void 0||h==="["&&o+2===r){dd(e,h===void 0?new iM(a,n,t):new rM(a,n,t));break}else{let p=e.map[a];p===void 0&&(p=new sM(a),dd(e,p)),e=p}}}class ha{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),u=t.getUniformLocation(e,a.name);oM(a,u,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],u=i[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function fd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const aM=37297;let lM=0;function cM(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const pd=new Yt;function uM(n){re._getMatrix(pd,re.workingColorSpace,n);const t=`mat3( ${pd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(n)){case Ra:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function md(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+cM(n.getShaderSource(t),a)}else return s}function hM(n,t){const e=uM(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const dM={[op]:"Linear",[ap]:"Reinhard",[lp]:"Cineon",[cp]:"ACESFilmic",[hp]:"AgX",[dp]:"Neutral",[up]:"Custom"};function fM(n,t){const e=dM[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lo=new N;function pM(){re.getLuminanceCoefficients(Lo);const n=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function gM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _M(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ks(n){return n!==""}function gd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _d(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(xM,SM)}const vM=new Map;function SM(n,t){let e=Qt[t];if(e===void 0){const i=vM.get(t);if(i!==void 0)e=Qt[i],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return au(e)}const yM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(n){return n.replace(yM,MM)}function MM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const bM={[sa]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function EM(n){return bM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wM={[yr]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function TM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":wM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const AM={[fs]:"ENVMAP_MODE_REFRACTION"};function CM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":AM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RM={[sp]:"ENVMAP_BLENDING_MULTIPLY",[r0]:"ENVMAP_BLENDING_MIX",[s0]:"ENVMAP_BLENDING_ADD"};function PM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":RM[n.combine]||"ENVMAP_BLENDING_NONE"}function DM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function IM(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const u=EM(e),h=TM(e),d=CM(e),p=PM(e),m=DM(e),g=mM(e),S=gM(s),M=r.createProgram();let _,v,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(ks).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(ks).join(`
`),v.length>0&&(v+=`
`)):(_=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),v=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ri?fM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,hM("linearToOutputTexel",e.outputColorSpace),pM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),o=au(o),o=gd(o,e),o=_d(o,e),a=au(a),a=gd(a,e),a=_d(a,e),o=xd(o),a=xd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const f=E+_+o,c=E+v+a,x=fd(r,r.VERTEX_SHADER,f),l=fd(r,r.FRAGMENT_SHADER,c);r.attachShader(M,x),r.attachShader(M,l),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(T){if(n.debug.checkShaderErrors){const A=r.getProgramInfoLog(M)||"",C=r.getShaderInfoLog(x)||"",D=r.getShaderInfoLog(l)||"",U=A.trim(),F=C.trim(),O=D.trim();let G=!0,z=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,x,l);else{const $=md(r,x,"vertex"),Z=md(r,l,"fragment");le("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+$+`
`+Z)}else U!==""?Wt("WebGLProgram: Program Info Log:",U):(F===""||O==="")&&(z=!1);z&&(T.diagnostics={runnable:G,programLog:U,vertexShader:{log:F,prefix:_},fragmentShader:{log:O,prefix:v}})}r.deleteShader(x),r.deleteShader(l),y=new ha(r,M),b=_M(r,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(M,aM)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lM++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=x,this.fragmentShader=l,this}let LM=0;class NM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new UM(t),e.set(t,i)),i}}class UM{constructor(t){this.id=LM++,this.code=t,this.usedTimes=0}}function FM(n){return n===Mr||n===Ta||n===Aa}function OM(n,t,e,i,r,s){const o=new bp,a=new NM,u=new Set,h=[],d=new Map,p=i.logarithmicDepthBuffer;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return u.add(y),y===0?"uv":`uv${y}`}function M(y,b,w,T,A,C){const D=T.fog,U=A.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=t.get(y.envMap||F,O),z=G&&G.mapping===Ha?G.image.height:null,$=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ot=Z!==void 0?Z.length:0;let lt=0;U.morphAttributes.position!==void 0&&(lt=1),U.morphAttributes.normal!==void 0&&(lt=2),U.morphAttributes.color!==void 0&&(lt=3);let xt,ut,Mt,X;if($){const _e=Qn[$];xt=_e.vertexShader,ut=_e.fragmentShader}else{xt=y.vertexShader,ut=y.fragmentShader;const _e=a.getVertexShaderStage(y),ue=a.getFragmentShaderStage(y);a.update(y,_e,ue),Mt=_e.id,X=ue.id}const K=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),dt=A.isInstancedMesh===!0,ct=A.isBatchedMesh===!0,zt=!!y.map,Vt=!!y.matcap,wt=!!G,Rt=!!y.aoMap,Ut=!!y.lightMap,Tt=!!y.bumpMap&&y.wireframe===!1,ae=!!y.normalMap,Xt=!!y.displacementMap,Kt=!!y.emissiveMap,$t=!!y.metalnessMap,qt=!!y.roughnessMap,B=y.anisotropy>0,Ee=y.clearcoat>0,Gt=y.dispersion>0,L=y.retroreflectivity>0,P=y.iridescence>0,H=y.sheen>0,W=y.transmission>0,j=B&&!!y.anisotropyMap,ht=Ee&&!!y.clearcoatMap,ft=Ee&&!!y.clearcoatNormalMap,Q=Ee&&!!y.clearcoatRoughnessMap,it=P&&!!y.iridescenceMap,pt=P&&!!y.iridescenceThicknessMap,Ft=H&&!!y.sheenColorMap,vt=H&&!!y.sheenRoughnessMap,mt=!!y.specularMap,Ot=!!y.specularColorMap,Ht=!!y.specularIntensityMap,Jt=W&&!!y.transmissionMap,V=W&&!!y.thicknessMap,gt=!!y.gradientMap,nt=!!y.alphaMap,_t=y.alphaTest>0,Et=!!y.alphaHash,at=!!y.extensions;let Bt=ri;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=n.toneMapping);const Lt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:xt,fragmentShader:ut,defines:y.defines,customVertexShaderID:Mt,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ct,batchingColor:ct&&A._colorsTexture!==null,instancing:dt,instancingColor:dt&&A.instanceColor!==null,instancingMorph:dt&&A.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:Vt,envMap:wt,envMapMode:wt&&G.mapping,envMapCubeUVHeight:z,aoMap:Rt,lightMap:Ut,bumpMap:Tt,normalMap:ae,displacementMap:Xt,emissiveMap:Kt,normalMapObjectSpace:ae&&y.normalMapType===l0,normalMapTangentSpace:ae&&y.normalMapType===ru,packedNormalMap:ae&&y.normalMapType===ru&&FM(y.normalMap.format),metalnessMap:$t,roughnessMap:qt,anisotropy:B,anisotropyMap:j,clearcoat:Ee,clearcoatMap:ht,clearcoatNormalMap:ft,clearcoatRoughnessMap:Q,dispersion:Gt,retroreflection:L,iridescence:P,iridescenceMap:it,iridescenceThicknessMap:pt,sheen:H,sheenColorMap:Ft,sheenRoughnessMap:vt,specularMap:mt,specularColorMap:Ot,specularIntensityMap:Ht,transmission:W,transmissionMap:Jt,thicknessMap:V,gradientMap:gt,opaque:y.transparent===!1&&y.blending===Gs&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:_t,alphaHash:Et,combine:y.combine,mapUv:zt&&S(y.map.channel),aoMapUv:Rt&&S(y.aoMap.channel),lightMapUv:Ut&&S(y.lightMap.channel),bumpMapUv:Tt&&S(y.bumpMap.channel),normalMapUv:ae&&S(y.normalMap.channel),displacementMapUv:Xt&&S(y.displacementMap.channel),emissiveMapUv:Kt&&S(y.emissiveMap.channel),metalnessMapUv:$t&&S(y.metalnessMap.channel),roughnessMapUv:qt&&S(y.roughnessMap.channel),anisotropyMapUv:j&&S(y.anisotropyMap.channel),clearcoatMapUv:ht&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&S(y.sheenRoughnessMap.channel),specularMapUv:mt&&S(y.specularMap.channel),specularColorMapUv:Ot&&S(y.specularColorMap.channel),specularIntensityMapUv:Ht&&S(y.specularIntensityMap.channel),transmissionMapUv:Jt&&S(y.transmissionMap.channel),thicknessMapUv:V&&S(y.thicknessMap.channel),alphaMapUv:nt&&S(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ae||B),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!U.attributes.uv&&(zt||nt),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ae===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:st,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:lt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Bt,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:Kt&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$n,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=u.has(1),Lt.vertexUv2s=u.has(2),Lt.vertexUv3s=u.has(3),u.clear(),Lt}function _(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)b.push(w),b.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(v(b,y),E(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function v(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function f(y){const b=g[y.type];let w;if(b){const T=Qn[b];w=Z0.clone(T.uniforms)}else w=y.uniforms;return w}function c(y,b){let w=d.get(b);return w!==void 0?++w.usedTimes:(w=new IM(n,b,y,r),h.push(w),d.set(b,w)),w}function x(y){if(--y.usedTimes===0){const b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),d.delete(y.cacheKey),y.destroy()}}function l(y){a.remove(y)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:f,acquireProgram:c,releaseProgram:x,releaseShaderCache:l,programs:h,dispose:R}}function BM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,u){n.get(o)[a]=u}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function zM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Sd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yd(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function a(m,g,S,M,_,v){let E=n[t];return E===void 0?(E={id:m.id,object:m,geometry:g,material:S,materialVariant:o(m),groupOrder:M,renderOrder:m.renderOrder,z:_,group:v},n[t]=E):(E.id=m.id,E.object=m,E.geometry=g,E.material=S,E.materialVariant=o(m),E.groupOrder=M,E.renderOrder=m.renderOrder,E.z=_,E.group=v),t++,E}function u(m,g,S,M,_,v,E){E.reversedDepth===!0&&(_=-_);const f=a(m,g,S,M,_,v);S.transmission>0?i.push(f):S.transparent===!0?r.push(f):e.push(f)}function h(m,g,S,M,_,v){const E=a(m,g,S,M,_,v);S.transmission>0?i.unshift(E):S.transparent===!0?r.unshift(E):e.unshift(E)}function d(m,g){e.length>1&&e.sort(m||zM),i.length>1&&i.sort(g||Sd),r.length>1&&r.sort(g||Sd)}function p(){for(let m=t,g=n.length;m<g;m++){const S=n[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:u,unshift:h,finish:p,sort:d}}function kM(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new yd,n.set(i,[o])):r>=s.length?(o=new yd,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function GM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new te};break;case"SpotLight":e={position:new N,direction:new N,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function HM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let VM=0;function $M(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function WM(n){const t=new GM,e=HM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new N);const r=new N,s=new ie,o=new ie;function a(h){let d=0,p=0,m=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let g=0,S=0,M=0,_=0,v=0,E=0,f=0,c=0,x=0,l=0,R=0,y=0,b=0,w=0;h.sort($M);for(let A=0,C=h.length;A<C;A++){const D=h[A],U=D.color,F=D.intensity,O=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Mr?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=U.r*F,p+=U.g*F,m+=U.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],F);w++}else if(D.isSunLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,Z=e.get(D);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[S]=Z,i.sunShadowMap[S]=G;const ot=$.getViewportCount();for(let lt=0;lt<ot;lt++)i.sunShadowMatrix[M+lt]=$.getMatrix(lt),i.sunShadowCascade[M+lt]=$._cascadeData[lt];M+=ot,S++}i.sun[g]=z,g++}else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,Z=e.get(D);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=D.shadow.matrix,x++}i.directional[_]=z,_++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(U).multiplyScalar(F),z.distance=O,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[E]=z;const $=D.shadow;if(D.map&&(i.spotLightMap[y]=D.map,y++,$.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[E]=$.matrix,D.castShadow){const Z=e.get(D);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=G,R++}E++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(U).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[f]=z,f++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const $=D.shadow,Z=e.get(D);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,i.pointShadow[v]=Z,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=D.shadow.matrix,l++}i.point[v]=z,v++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[c]=z,c++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=m;const T=i.hash;(T.sunLength!==g||T.directionalLength!==_||T.pointLength!==v||T.spotLength!==E||T.rectAreaLength!==f||T.hemiLength!==c||T.numSunShadows!==S||T.numDirectionalShadows!==x||T.numPointShadows!==l||T.numSpotShadows!==R||T.numSpotMaps!==y||T.numLightProbes!==w)&&(i.sun.length=g,i.directional.length=_,i.spot.length=E,i.rectArea.length=f,i.point.length=v,i.hemi.length=c,i.sunShadow.length=S,i.sunShadowMap.length=S,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.directionalShadowMatrix.length=x,i.pointShadow.length=l,i.pointShadowMap.length=l,i.pointShadowMatrix.length=l,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,T.sunLength=g,T.directionalLength=_,T.pointLength=v,T.spotLength=E,T.rectAreaLength=f,T.hemiLength=c,T.numSunShadows=S,T.numDirectionalShadows=x,T.numPointShadows=l,T.numSpotShadows=R,T.numSpotMaps=y,T.numLightProbes=w,i.version=VM++)}function u(h,d){let p=0,m=0,g=0,S=0,M=0,_=0;const v=d.matrixWorldInverse;for(let E=0,f=h.length;E<f;E++){const c=h[E];if(c.isSunLight){const x=i.sun[p];x.direction.setFromMatrixPosition(c.matrixWorld),x.direction.transformDirection(v),p++}else if(c.isDirectionalLight){const x=i.directional[m];x.direction.setFromMatrixPosition(c.matrixWorld),r.setFromMatrixPosition(c.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),m++}else if(c.isSpotLight){const x=i.spot[S];x.position.setFromMatrixPosition(c.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(c.matrixWorld),r.setFromMatrixPosition(c.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),S++}else if(c.isRectAreaLight){const x=i.rectArea[M];x.position.setFromMatrixPosition(c.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(c.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(c.width*.5,0,0),x.halfHeight.set(0,c.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),M++}else if(c.isPointLight){const x=i.point[g];x.position.setFromMatrixPosition(c.matrixWorld),x.position.applyMatrix4(v),g++}else if(c.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(c.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:a,setupView:u,state:i}}function Md(n){const t=new WM(n),e=[],i=[],r=[];function s(m){p.camera=m,e.length=0,i.length=0,r.length=0}function o(m){e.push(m)}function a(m){i.push(m)}function u(m){r.push(m)}function h(){t.setup(e)}function d(m){t.setupView(e,m)}const p={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:h,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:u}}function XM(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Md(n),t.set(r,[a])):s>=o.length?(a=new Md(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const qM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YM=`uniform sampler2D shadow_pass;
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
}`,ZM=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],KM=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],bd=new ie,As=new N,kl=new N;function JM(n,t,e){let i=new Uu;const r=new kt,s=new kt,o=new me,a=new Q0,u=new tx,h={},d=e.maxTextureSize,p={[oi]:hn,[hn]:oi,[$n]:$n},m=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:qM,fragmentShader:YM}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const S=new Qe;S.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Je(S,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sa;let v=this.type;this.render=function(l,R,y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||l.length===0)return;this.type===np&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sa);const b=n.getRenderTarget(),w=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),A=n.state;A.setBlending(Ti),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const C=v!==this.type;C&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(U=>U.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,U=l.length;D<U;D++){const F=l[D],O=F.shadow;if(O===void 0){Wt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const G=O.getFrameExtents();r.multiply(G),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,O.mapSize.y=s.y));const z=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=z,O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===zs){if(F.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Xn(r.x,r.y,{format:Mr,type:li,minFilter:sn,magFilter:sn,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Qs(r.x,r.y,ei),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=Ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je}else F.isPointLight?(O.map=new Up(r.x),O.map.depthTexture=new q0(r.x,ai)):(O.map=new Xn(r.x,r.y),O.map.depthTexture=new Qs(r.x,r.y,ai)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=Ri,this.type===sa?(O.map.depthTexture.compareFunction=z?Lu:Iu,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);const $=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,y);for(let Z=0;Z<$;Z++){const ot=O.getCamera(Z);if(F.isPointLight){const lt=O.camera,xt=O.matrix,ut=F.distance||lt.far;ut!==lt.far&&(lt.far=ut,lt.updateProjectionMatrix()),As.setFromMatrixPosition(F.matrixWorld),lt.position.copy(As),kl.copy(lt.position),kl.add(ZM[Z]),lt.up.copy(KM[Z]),lt.lookAt(kl),lt.updateMatrixWorld(),xt.makeTranslation(-As.x,-As.y,-As.z),bd.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(bd,lt.coordinateSystem,lt.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(O.map),n.clear());const lt=O.getViewport(Z);o.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),A.viewport(o)}i=O.getFrustum(Z),c(R,y,ot,F,this.type)}O.isPointLightShadow!==!0&&this.type===zs&&E(O,y),O.needsUpdate=!1}v=this.type,_.needsUpdate=!1,n.setRenderTarget(b,w,T)};function E(l,R){const y=t.update(M);m.defines.VSM_SAMPLES!==l.blurSamples&&(m.defines.VSM_SAMPLES=l.blurSamples,g.defines.VSM_SAMPLES=l.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),l.mapPass===null?l.mapPass=new Xn(r.x,r.y,{format:Mr,type:li}):(l.mapPass.width!==l.map.width||l.mapPass.height!==l.map.height)&&l.mapPass.setSize(l.map.width,l.map.height),m.uniforms.shadow_pass.value=l.map.depthTexture,m.uniforms.resolution.value.set(l.map.width,l.map.height),m.uniforms.radius.value=l.radius,n.setRenderTarget(l.mapPass),n.clear(),n.renderBufferDirect(R,null,y,m,M,null),g.uniforms.shadow_pass.value=l.mapPass.texture,g.uniforms.resolution.value.set(l.map.width,l.map.height),g.uniforms.radius.value=l.radius,n.setRenderTarget(l.map),n.clear(),n.renderBufferDirect(R,null,y,g,M,null)}function f(l,R,y,b){let w=null;const T=y.isPointLight===!0?l.customDistanceMaterial:l.customDepthMaterial;if(T!==void 0)w=T;else if(w=y.isPointLight===!0?u:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const A=w.uuid,C=R.uuid;let D=h[A];D===void 0&&(D={},h[A]=D);let U=D[C];U===void 0&&(U=w.clone(),D[C]=U,R.addEventListener("dispose",x)),w=U}if(w.visible=R.visible,w.wireframe=R.wireframe,b===zs?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:p[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,y.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const A=n.properties.get(w);A.light=y}return w}function c(l,R,y,b,w){if(l.visible===!1)return;if(l.layers.test(R.layers)&&(l.isMesh||l.isLine||l.isPoints)&&(l.castShadow||l.receiveShadow&&w===zs)&&(!l.frustumCulled||l.intersectsFrustum(i))){l.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,l.matrixWorld);const C=t.update(l),D=l.material;if(Array.isArray(D)){const U=C.groups;for(let F=0,O=U.length;F<O;F++){const G=U[F],z=D[G.materialIndex];if(z&&z.visible){const $=f(l,z,b,w);l.onBeforeShadow(n,l,R,y,C,$,G),n.renderBufferDirect(y,null,C,$,l,G),l.onAfterShadow(n,l,R,y,C,$,G)}}}else if(D.visible){const U=f(l,D,b,w);l.onBeforeShadow(n,l,R,y,C,U,null),n.renderBufferDirect(y,null,C,U,l,null),l.onAfterShadow(n,l,R,y,C,U,null)}}const A=l.children;for(let C=0,D=A.length;C<D;C++)c(A[C],R,y,b,w)}function x(l){l.target.removeEventListener("dispose",x);for(const y in h){const b=h[y],w=l.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function jM(n,t){function e(){let V=!1;const gt=new me;let nt=null;const _t=new me(0,0,0,0);return{setMask:function(Et){nt!==Et&&!V&&(n.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){V=Et},setClear:function(Et,at,Bt,Lt,_e){_e===!0&&(Et*=Lt,at*=Lt,Bt*=Lt),gt.set(Et,at,Bt,Lt),_t.equals(gt)===!1&&(n.clearColor(Et,at,Bt,Lt),_t.copy(gt))},reset:function(){V=!1,nt=null,_t.set(-1,0,0,0)}}}function i(){let V=!1,gt=!1,nt=null,_t=null,Et=null;return{setReversed:function(at){if(gt!==at){const Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),gt=at;const Lt=Et;Et=null,this.setClear(Lt)}},getReversed:function(){return gt},setTest:function(at){at?K(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(at){nt!==at&&!V&&(n.depthMask(at),nt=at)},setFunc:function(at){if(gt&&(at=S0[at]),_t!==at){switch(at){case vc:n.depthFunc(n.NEVER);break;case Sc:n.depthFunc(n.ALWAYS);break;case yc:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case Ec:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=at}},setLocked:function(at){V=at},setClear:function(at){Et!==at&&(Et=at,gt&&(at=1-at),n.clearDepth(at))},reset:function(){V=!1,nt=null,_t=null,Et=null,gt=!1}}}function r(){let V=!1,gt=null,nt=null,_t=null,Et=null,at=null,Bt=null,Lt=null,_e=null;return{setTest:function(ue){V||(ue?K(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(ue){gt!==ue&&!V&&(n.stencilMask(ue),gt=ue)},setFunc:function(ue,On,Yn){(nt!==ue||_t!==On||Et!==Yn)&&(n.stencilFunc(ue,On,Yn),nt=ue,_t=On,Et=Yn)},setOp:function(ue,On,Yn){(at!==ue||Bt!==On||Lt!==Yn)&&(n.stencilOp(ue,On,Yn),at=ue,Bt=On,Lt=Yn)},setLocked:function(ue){V=ue},setClear:function(ue){_e!==ue&&(n.clearStencil(ue),_e=ue)},reset:function(){V=!1,gt=null,nt=null,_t=null,Et=null,at=null,Bt=null,Lt=null,_e=null}}}const s=new e,o=new i,a=new r,u=new WeakMap,h=new WeakMap;let d={},p={},m={},g=new WeakMap,S=[],M=null,_=!1,v=null,E=null,f=null,c=null,x=null,l=null,R=null,y=new te(0,0,0),b=0,w=!1,T=null,A=null,C=null,D=null,U=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=G>=2);let $=null,Z={};const ot=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),xt=new me().fromArray(ot),ut=new me().fromArray(lt);function Mt(V,gt,nt,_t){const Et=new Uint8Array(4),at=n.createTexture();n.bindTexture(V,at),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Bt=0;Bt<nt;Bt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(gt+Bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return at}const X={};X[n.TEXTURE_2D]=Mt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Zs),Tt(!1),ae(yh),K(n.CULL_FACE),Rt(Ti);function K(V){d[V]!==!0&&(n.enable(V),d[V]=!0)}function st(V){d[V]!==!1&&(n.disable(V),d[V]=!1)}function dt(V,gt){return m[V]!==gt?(n.bindFramebuffer(V,gt),m[V]=gt,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=gt),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function ct(V,gt){let nt=S,_t=!1;if(V){nt=g.get(gt),nt===void 0&&(nt=[],g.set(gt,nt));const Et=V.textures;if(nt.length!==Et.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let at=0,Bt=Et.length;at<Bt;at++)nt[at]=n.COLOR_ATTACHMENT0+at;nt.length=Et.length,_t=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,_t=!0);_t&&n.drawBuffers(nt)}function zt(V){return M!==V?(n.useProgram(V),M=V,!0):!1}const Vt={[ts]:n.FUNC_ADD,[G_]:n.FUNC_SUBTRACT,[H_]:n.FUNC_REVERSE_SUBTRACT};Vt[V_]=n.MIN,Vt[$_]=n.MAX;const wt={[W_]:n.ZERO,[X_]:n.ONE,[q_]:n.SRC_COLOR,[ip]:n.SRC_ALPHA,[Q_]:n.SRC_ALPHA_SATURATE,[J_]:n.DST_COLOR,[Z_]:n.DST_ALPHA,[Y_]:n.ONE_MINUS_SRC_COLOR,[rp]:n.ONE_MINUS_SRC_ALPHA,[j_]:n.ONE_MINUS_DST_COLOR,[K_]:n.ONE_MINUS_DST_ALPHA,[t0]:n.CONSTANT_COLOR,[e0]:n.ONE_MINUS_CONSTANT_COLOR,[n0]:n.CONSTANT_ALPHA,[i0]:n.ONE_MINUS_CONSTANT_ALPHA};function Rt(V,gt,nt,_t,Et,at,Bt,Lt,_e,ue){if(V===Ti){_===!0&&(st(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),V!==k_){if(V!==v||ue!==w){if((E!==ts||x!==ts)&&(n.blendEquation(n.FUNC_ADD),E=ts,x=ts),ue)switch(V){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFunc(n.ONE,n.ONE);break;case bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Eh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:le("WebGLState: Invalid blending: ",V);break}else switch(V){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",V);break}f=null,c=null,l=null,R=null,y.set(0,0,0),b=0,v=V,w=ue}return}Et=Et||gt,at=at||nt,Bt=Bt||_t,(gt!==E||Et!==x)&&(n.blendEquationSeparate(Vt[gt],Vt[Et]),E=gt,x=Et),(nt!==f||_t!==c||at!==l||Bt!==R)&&(n.blendFuncSeparate(wt[nt],wt[_t],wt[at],wt[Bt]),f=nt,c=_t,l=at,R=Bt),(Lt.equals(y)===!1||_e!==b)&&(n.blendColor(Lt.r,Lt.g,Lt.b,_e),y.copy(Lt),b=_e),v=V,w=!1}function Ut(V,gt){V.side===$n?st(n.CULL_FACE):K(n.CULL_FACE);let nt=V.side===hn;gt&&(nt=!nt),Tt(nt),V.blending===Gs&&V.transparent===!1?Rt(Ti):Rt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const _t=V.stencilWrite;a.setTest(_t),_t&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Kt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function ae(V){V!==B_?(K(n.CULL_FACE),V!==A&&(V===yh?n.cullFace(n.BACK):V===z_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),A=V}function Xt(V){V!==C&&(O&&n.lineWidth(V),C=V)}function Kt(V,gt,nt){V?(K(n.POLYGON_OFFSET_FILL),(D!==gt||U!==nt)&&(D=gt,U=nt,o.getReversed()&&(gt=-gt),n.polygonOffset(gt,nt))):st(n.POLYGON_OFFSET_FILL)}function $t(V){V?K(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function qt(V){V===void 0&&(V=n.TEXTURE0+F-1),$!==V&&(n.activeTexture(V),$=V)}function B(V,gt,nt){nt===void 0&&($===null?nt=n.TEXTURE0+F-1:nt=$);let _t=Z[nt];_t===void 0&&(_t={type:void 0,texture:void 0},Z[nt]=_t),(_t.type!==V||_t.texture!==gt)&&($!==nt&&(n.activeTexture(nt),$=nt),n.bindTexture(V,gt||X[V]),_t.type=V,_t.texture=gt)}function Ee(){const V=Z[$];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Gt(){try{n.compressedTexImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function P(){try{n.texSubImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function H(){try{n.texSubImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function ht(){try{n.texStorage2D(...arguments)}catch(V){le("WebGLState:",V)}}function ft(){try{n.texStorage3D(...arguments)}catch(V){le("WebGLState:",V)}}function Q(){try{n.texImage2D(...arguments)}catch(V){le("WebGLState:",V)}}function it(){try{n.texImage3D(...arguments)}catch(V){le("WebGLState:",V)}}function pt(V){return p[V]!==void 0?p[V]:n.getParameter(V)}function Ft(V,gt){p[V]!==gt&&(n.pixelStorei(V,gt),p[V]=gt)}function vt(V){xt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),xt.copy(V))}function mt(V){ut.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function Ot(V,gt){let nt=h.get(gt);nt===void 0&&(nt=new WeakMap,h.set(gt,nt));let _t=nt.get(V);_t===void 0&&(_t=n.getUniformBlockIndex(gt,V.name),nt.set(V,_t))}function Ht(V,gt){const _t=h.get(gt).get(V);u.get(gt)!==_t&&(n.uniformBlockBinding(gt,_t,V.__bindingPointIndex),u.set(gt,_t))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},p={},$=null,Z={},m={},g=new WeakMap,S=[],M=null,_=!1,v=null,E=null,f=null,c=null,x=null,l=null,R=null,y=new te(0,0,0),b=0,w=!1,T=null,A=null,C=null,D=null,U=null,xt.set(0,0,n.canvas.width,n.canvas.height),ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:st,bindFramebuffer:dt,drawBuffers:ct,useProgram:zt,setBlending:Rt,setMaterial:Ut,setFlipSided:Tt,setCullFace:ae,setLineWidth:Xt,setPolygonOffset:Kt,setScissorTest:$t,activeTexture:qt,bindTexture:B,unbindTexture:Ee,compressedTexImage2D:Gt,compressedTexImage3D:L,texImage2D:Q,texImage3D:it,pixelStorei:Ft,getParameter:pt,updateUBOMapping:Ot,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:ft,texSubImage2D:P,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:j,scissor:vt,viewport:mt,reset:Jt}}function QM(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap,p=new Set;let m;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,P){return S?new OffscreenCanvas(L,P):Pa("canvas")}function _(L,P,H){let W=1;const j=Gt(L);if((j.width>H||j.height>H)&&(W=H/Math.max(j.width,j.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(W*j.width),ft=Math.floor(W*j.height);m===void 0&&(m=M(ht,ft));const Q=P?M(ht,ft):m;return Q.width=ht,Q.height=ft,Q.getContext("2d").drawImage(L,0,0,ht,ft),Wt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ht+"x"+ft+")."),Q}else return"data"in L&&Wt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),L;return L}function v(L){return L.generateMipmaps}function E(L){n.generateMipmap(L)}function f(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function c(L,P,H,W,j,ht=!1){if(L!==null){if(n[L]!==void 0)return n[L];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft;W&&(ft=t.get("EXT_texture_norm16"),ft||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=P;if(P===n.RED&&(H===n.FLOAT&&(Q=n.R32F),H===n.HALF_FLOAT&&(Q=n.R16F),H===n.UNSIGNED_BYTE&&(Q=n.R8),H===n.UNSIGNED_SHORT&&ft&&(Q=ft.R16_EXT),H===n.SHORT&&ft&&(Q=ft.R16_SNORM_EXT)),P===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.R8UI),H===n.UNSIGNED_SHORT&&(Q=n.R16UI),H===n.UNSIGNED_INT&&(Q=n.R32UI),H===n.BYTE&&(Q=n.R8I),H===n.SHORT&&(Q=n.R16I),H===n.INT&&(Q=n.R32I)),P===n.RG&&(H===n.FLOAT&&(Q=n.RG32F),H===n.HALF_FLOAT&&(Q=n.RG16F),H===n.UNSIGNED_BYTE&&(Q=n.RG8),H===n.UNSIGNED_SHORT&&ft&&(Q=ft.RG16_EXT),H===n.SHORT&&ft&&(Q=ft.RG16_SNORM_EXT)),P===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RG8UI),H===n.UNSIGNED_SHORT&&(Q=n.RG16UI),H===n.UNSIGNED_INT&&(Q=n.RG32UI),H===n.BYTE&&(Q=n.RG8I),H===n.SHORT&&(Q=n.RG16I),H===n.INT&&(Q=n.RG32I)),P===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),H===n.UNSIGNED_INT&&(Q=n.RGB32UI),H===n.BYTE&&(Q=n.RGB8I),H===n.SHORT&&(Q=n.RGB16I),H===n.INT&&(Q=n.RGB32I)),P===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),H===n.UNSIGNED_INT&&(Q=n.RGBA32UI),H===n.BYTE&&(Q=n.RGBA8I),H===n.SHORT&&(Q=n.RGBA16I),H===n.INT&&(Q=n.RGBA32I)),P===n.RGB&&(H===n.UNSIGNED_SHORT&&ft&&(Q=ft.RGB16_EXT),H===n.SHORT&&ft&&(Q=ft.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),P===n.RGBA){const it=ht?Ra:re.getTransfer(j);H===n.FLOAT&&(Q=n.RGBA32F),H===n.HALF_FLOAT&&(Q=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Q=it===de?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&ft&&(Q=ft.RGBA16_EXT),H===n.SHORT&&ft&&(Q=ft.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(L,P){let H;return L?P===null||P===ai||P===Js?H=n.DEPTH24_STENCIL8:P===ei?H=n.DEPTH32F_STENCIL8:P===Ks&&(H=n.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ai||P===Js?H=n.DEPTH_COMPONENT24:P===ei?H=n.DEPTH_COMPONENT32F:P===Ks&&(H=n.DEPTH_COMPONENT16),H}function l(L,P){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==je&&L.minFilter!==sn?Math.log2(Math.max(P.width,P.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?P.mipmaps.length:1}function R(L){const P=L.target;P.removeEventListener("dispose",R),b(P),P.isVideoTexture&&d.delete(P),P.isHTMLTexture&&p.delete(P)}function y(L){const P=L.target;P.removeEventListener("dispose",y),T(P)}function b(L){const P=i.get(L);if(P.__webglInit===void 0)return;const H=L.source,W=g.get(H);if(W){const j=W[P.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(L),Object.keys(W).length===0&&g.delete(H)}i.remove(L)}function w(L){const P=i.get(L);n.deleteTexture(P.__webglTexture);const H=L.source,W=g.get(H);delete W[P.__cacheKey],o.memory.textures--}function T(L){const P=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(P.__webglFramebuffer[W]))for(let j=0;j<P.__webglFramebuffer[W].length;j++)n.deleteFramebuffer(P.__webglFramebuffer[W][j]);else n.deleteFramebuffer(P.__webglFramebuffer[W]);P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[W])}else{if(Array.isArray(P.__webglFramebuffer))for(let W=0;W<P.__webglFramebuffer.length;W++)n.deleteFramebuffer(P.__webglFramebuffer[W]);else n.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let W=0;W<P.__webglColorRenderbuffer.length;W++)P.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[W]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const H=L.textures;for(let W=0,j=H.length;W<j;W++){const ht=i.get(H[W]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),o.memory.textures--),i.remove(H[W])}i.remove(L)}let A=0;function C(){A=0}function D(){return A}function U(L){A=L}function F(){const L=A;return L>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+r.maxTextures),A+=1,L}function O(L){const P=[];return P.push(L.wrapS),P.push(L.wrapT),P.push(L.wrapR||0),P.push(L.magFilter),P.push(L.minFilter),P.push(L.anisotropy),P.push(L.internalFormat),P.push(L.format),P.push(L.type),P.push(L.generateMipmaps),P.push(L.premultiplyAlpha),P.push(L.flipY),P.push(L.unpackAlignment),P.push(L.colorSpace),P.join()}function G(L,P){const H=i.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&H.__version!==L.version){const W=L.image;if(W===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(H,L,P);return}}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+P)}function z(L,P){const H=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){st(H,L,P);return}else L.isExternalTexture&&(H.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+P)}function $(L,P){const H=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){st(H,L,P);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+P)}function Z(L,P){const H=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&H.__version!==L.version){dt(H,L,P);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+P)}const ot={[Tc]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},lt={[je]:n.NEAREST,[o0]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[cl]:n.LINEAR_MIPMAP_NEAREST,[gr]:n.LINEAR_MIPMAP_LINEAR},xt={[u0]:n.NEVER,[m0]:n.ALWAYS,[h0]:n.LESS,[Iu]:n.LEQUAL,[d0]:n.EQUAL,[Lu]:n.GEQUAL,[f0]:n.GREATER,[p0]:n.NOTEQUAL};function ut(L,P){if(P.type===ei&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===sn||P.magFilter===cl||P.magFilter===lo||P.magFilter===gr||P.minFilter===sn||P.minFilter===cl||P.minFilter===lo||P.minFilter===gr)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ot[P.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ot[P.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ot[P.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,lt[P.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,lt[P.minFilter]),P.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,xt[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===je||P.minFilter!==lo&&P.minFilter!==gr||P.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Mt(L,P){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,P.addEventListener("dispose",R));const W=P.source;let j=g.get(W);j===void 0&&(j={},g.set(W,j));const ht=O(P);if(ht!==L.__cacheKey){j[ht]===void 0&&(j[ht]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[ht].usedTimes++;const ft=j[L.__cacheKey];ft!==void 0&&(j[L.__cacheKey].usedTimes--,ft.usedTimes===0&&w(P)),L.__cacheKey=ht,L.__webglTexture=j[ht].texture}return H}function X(L,P,H){return Math.floor(Math.floor(L/H)/P)}function K(L,P,H,W){const ht=L.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,P.width,P.height,H,W,P.data);else{ht.sort((Ft,vt)=>Ft.start-vt.start);let ft=0;for(let Ft=1;Ft<ht.length;Ft++){const vt=ht[ft],mt=ht[Ft],Ot=vt.start+vt.count,Ht=X(mt.start,P.width,4),Jt=X(vt.start,P.width,4);mt.start<=Ot+1&&Ht===Jt&&X(mt.start+mt.count-1,P.width,4)===Ht?vt.count=Math.max(vt.count,mt.start+mt.count-vt.start):(++ft,ht[ft]=mt)}ht.length=ft+1;const Q=e.getParameter(n.UNPACK_ROW_LENGTH),it=e.getParameter(n.UNPACK_SKIP_PIXELS),pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,P.width);for(let Ft=0,vt=ht.length;Ft<vt;Ft++){const mt=ht[Ft],Ot=Math.floor(mt.start/4),Ht=Math.ceil(mt.count/4),Jt=Ot%P.width,V=Math.floor(Ot/P.width),gt=Ht,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Jt,V,gt,nt,H,W,P.data)}L.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,it),e.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function st(L,P,H){let W=n.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),P.isData3DTexture&&(W=n.TEXTURE_3D);const j=Mt(L,P),ht=P.source;e.bindTexture(W,L.__webglTexture,n.TEXTURE0+H);const ft=i.get(ht);if(ht.version!==ft.__version||j===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&P.image instanceof ImageBitmap)===!1){const nt=re.getPrimaries(re.workingColorSpace),_t=P.colorSpace===$i?null:re.getPrimaries(P.colorSpace),Et=P.colorSpace===$i||nt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment);let it=_(P.image,!1,r.maxTextureSize);it=Ee(P,it);const pt=s.convert(P.format,P.colorSpace),Ft=s.convert(P.type);let vt=c(P.internalFormat,pt,Ft,P.normalized,P.colorSpace,P.isVideoTexture);ut(W,P);let mt;const Ot=P.mipmaps,Ht=P.isVideoTexture!==!0,Jt=ft.__version===void 0||j===!0,V=ht.dataReady,gt=l(P,it);if(P.isDepthTexture)vt=x(P.format===_r,P.type),Jt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,vt,it.width,it.height,0,pt,Ft,null));else if(P.isDataTexture)if(Ot.length>0){Ht&&Jt&&e.texStorage2D(n.TEXTURE_2D,gt,vt,Ot[0].width,Ot[0].height);for(let nt=0,_t=Ot.length;nt<_t;nt++)mt=Ot[nt],Ht?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,Ft,mt.data):e.texImage2D(n.TEXTURE_2D,nt,vt,mt.width,mt.height,0,pt,Ft,mt.data);P.generateMipmaps=!1}else Ht?(Jt&&e.texStorage2D(n.TEXTURE_2D,gt,vt,it.width,it.height),V&&K(P,it,pt,Ft)):e.texImage2D(n.TEXTURE_2D,0,vt,it.width,it.height,0,pt,Ft,it.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Ht&&Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,vt,Ot[0].width,Ot[0].height,it.depth);for(let nt=0,_t=Ot.length;nt<_t;nt++)if(mt=Ot[nt],P.format!==Wn)if(pt!==null)if(Ht){if(V)if(P.layerUpdates.size>0){const Et=ed(mt.width,mt.height,P.format,P.type);for(const at of P.layerUpdates){const Bt=mt.data.subarray(at*Et/mt.data.BYTES_PER_ELEMENT,(at+1)*Et/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,at,mt.width,mt.height,1,pt,Bt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,it.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,vt,mt.width,mt.height,it.depth,0,mt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,it.depth,pt,Ft,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,vt,mt.width,mt.height,it.depth,0,pt,Ft,mt.data);P.layerUpdates.size>0&&P.clearLayerUpdates()}else{Ht&&Jt&&e.texStorage2D(n.TEXTURE_2D,gt,vt,Ot[0].width,Ot[0].height);for(let nt=0,_t=Ot.length;nt<_t;nt++)mt=Ot[nt],P.format!==Wn?pt!==null?Ht?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,vt,mt.width,mt.height,0,mt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,Ft,mt.data):e.texImage2D(n.TEXTURE_2D,nt,vt,mt.width,mt.height,0,pt,Ft,mt.data)}else if(P.isDataArrayTexture)if(Ht){if(Jt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,vt,it.width,it.height,it.depth),V)if(P.layerUpdates.size>0){const nt=ed(it.width,it.height,P.format,P.type);for(const _t of P.layerUpdates){const Et=it.data.subarray(_t*nt/it.data.BYTES_PER_ELEMENT,(_t+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,it.width,it.height,1,pt,Ft,Et)}P.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ft,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,pt,Ft,it.data);else if(P.isData3DTexture)Ht?(Jt&&e.texStorage3D(n.TEXTURE_3D,gt,vt,it.width,it.height,it.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ft,it.data)):e.texImage3D(n.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,pt,Ft,it.data);else if(P.isFramebufferTexture){if(Jt)if(Ht)e.texStorage2D(n.TEXTURE_2D,gt,vt,it.width,it.height);else{let nt=it.width,_t=it.height;for(let Et=0;Et<gt;Et++)e.texImage2D(n.TEXTURE_2D,Et,vt,nt,_t,0,pt,Ft,null),nt>>=1,_t>>=1}}else if(P.isHTMLTexture){if("texElementImage2D"in n){const nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),p.add(P),nt.onpaint=_t=>{const Et=_t.changedElements;for(const at of p)Et.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,it);else{const Et=n.RGBA,at=n.RGBA,Bt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Et,at,Bt,it)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Ht&&Jt){const nt=Gt(Ot[0]);e.texStorage2D(n.TEXTURE_2D,gt,vt,nt.width,nt.height)}for(let nt=0,_t=Ot.length;nt<_t;nt++)mt=Ot[nt],Ht?V&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,pt,Ft,mt):e.texImage2D(n.TEXTURE_2D,nt,vt,pt,Ft,mt);P.generateMipmaps=!1}else if(Ht){if(Jt){const nt=Gt(it);e.texStorage2D(n.TEXTURE_2D,gt,vt,nt.width,nt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ft,it)}else e.texImage2D(n.TEXTURE_2D,0,vt,pt,Ft,it);v(P)&&E(W),ft.__version=ht.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function dt(L,P,H){if(P.image.length!==6)return;const W=Mt(L,P),j=P.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+H);const ht=i.get(j);if(j.version!==ht.__version||W===!0){e.activeTexture(n.TEXTURE0+H);const ft=re.getPrimaries(re.workingColorSpace),Q=P.colorSpace===$i?null:re.getPrimaries(P.colorSpace),it=P.colorSpace===$i||ft===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,P.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,P.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const pt=P.isCompressedTexture||P.image[0].isCompressedTexture,Ft=P.image[0]&&P.image[0].isDataTexture,vt=[];for(let at=0;at<6;at++)!pt&&!Ft?vt[at]=_(P.image[at],!0,r.maxCubemapSize):vt[at]=Ft?P.image[at].image:P.image[at],vt[at]=Ee(P,vt[at]);const mt=vt[0],Ot=s.convert(P.format,P.colorSpace),Ht=s.convert(P.type),Jt=c(P.internalFormat,Ot,Ht,P.normalized,P.colorSpace),V=P.isVideoTexture!==!0,gt=ht.__version===void 0||W===!0,nt=j.dataReady;let _t=l(P,mt);ut(n.TEXTURE_CUBE_MAP,P);let Et;if(pt){V&&gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Jt,mt.width,mt.height);for(let at=0;at<6;at++){Et=vt[at].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){const Lt=Et[Bt];P.format!==Wn?Ot!==null?V?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Lt.width,Lt.height,Ot,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,Jt,Lt.width,Lt.height,0,Lt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,0,0,Lt.width,Lt.height,Ot,Ht,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt,Jt,Lt.width,Lt.height,0,Ot,Ht,Lt.data)}}}else{if(Et=P.mipmaps,V&&gt){Et.length>0&&_t++;const at=Gt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Jt,at.width,at.height)}for(let at=0;at<6;at++)if(Ft){V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,vt[at].width,vt[at].height,Ot,Ht,vt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,vt[at].width,vt[at].height,0,Ot,Ht,vt[at].data);for(let Bt=0;Bt<Et.length;Bt++){const _e=Et[Bt].image[at].image;V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,_e.width,_e.height,Ot,Ht,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,Jt,_e.width,_e.height,0,Ot,Ht,_e.data)}}else{V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ot,Ht,vt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,Ot,Ht,vt[at]);for(let Bt=0;Bt<Et.length;Bt++){const Lt=Et[Bt];V?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,0,0,Ot,Ht,Lt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,Bt+1,Jt,Ot,Ht,Lt.image[at])}}}v(P)&&E(n.TEXTURE_CUBE_MAP),ht.__version=j.version,P.onUpdate&&P.onUpdate(P)}L.__version=P.version}function ct(L,P,H,W,j,ht){const ft=s.convert(H.format,H.colorSpace),Q=s.convert(H.type),it=c(H.internalFormat,ft,Q,H.normalized,H.colorSpace),pt=i.get(P),Ft=i.get(H);if(Ft.__renderTarget=P,!pt.__hasExternalTextures){const vt=Math.max(1,P.width>>ht),mt=Math.max(1,P.height>>ht);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,ht,it,vt,mt,P.depth,0,ft,Q,null):e.texImage2D(j,ht,it,vt,mt,0,ft,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),qt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,j,Ft.__webglTexture,0,$t(P)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,j,Ft.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(L,P,H){if(n.bindRenderbuffer(n.RENDERBUFFER,L),P.depthBuffer){const W=P.depthTexture,j=W&&W.isDepthTexture?W.type:null,ht=x(P.stencilBuffer,j),ft=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;qt(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(P),ht,P.width,P.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(P),ht,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,ht,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,L)}else{const W=P.textures;for(let j=0;j<W.length;j++){const ht=W[j],ft=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),it=c(ht.internalFormat,ft,Q,ht.normalized,ht.colorSpace);qt(P)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$t(P),it,P.width,P.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,$t(P),it,P.width,P.height):n.renderbufferStorage(n.RENDERBUFFER,it,P.width,P.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(L,P,H){const W=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(P.depthTexture);if(j.__renderTarget=P,(!j.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),W){if(j.__webglInit===void 0&&(j.__webglInit=!0,P.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ut(n.TEXTURE_CUBE_MAP,P.depthTexture);const pt=s.convert(P.depthTexture.format),Ft=s.convert(P.depthTexture.type);let vt;P.depthTexture.format===Ri?vt=n.DEPTH_COMPONENT24:P.depthTexture.format===_r&&(vt=n.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,vt,P.width,P.height,0,pt,Ft,null)}}else G(P.depthTexture,0);const ht=j.__webglTexture,ft=$t(P),Q=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,it=P.depthTexture.format===_r?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(P.depthTexture.format===Ri)qt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,ht,0);else if(P.depthTexture.format===_r)qt(P)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,Q,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,it,Q,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(L){const P=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==L.depthTexture){const W=L.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),W){const j=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,W.removeEventListener("dispose",j)};W.addEventListener("dispose",j),P.__depthDisposeCallback=j}P.__boundDepthTexture=W}if(L.depthTexture&&!P.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)Vt(P.__webglFramebuffer[W],L,W);else{const W=L.texture.mipmaps;W&&W.length>0?Vt(P.__webglFramebuffer[0],L,0):Vt(P.__webglFramebuffer,L,0)}else if(H){P.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[W]),P.__webglDepthbuffer[W]===void 0)P.__webglDepthbuffer[W]=n.createRenderbuffer(),zt(P.__webglDepthbuffer[W],L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=P.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ht)}}else{const W=L.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=n.createRenderbuffer(),zt(P.__webglDepthbuffer,L,!1);else{const j=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=P.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(L,P,H){const W=i.get(L);P!==void 0&&ct(W.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&wt(L)}function Ut(L){const P=L.texture,H=i.get(L),W=i.get(P);L.addEventListener("dispose",y);const j=L.textures,ht=L.isWebGLCubeRenderTarget===!0,ft=j.length>1;if(ft||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=P.version,o.memory.textures++),ht){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(P.mipmaps&&P.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let it=0;it<P.mipmaps.length;it++)H.__webglFramebuffer[Q][it]=n.createFramebuffer()}else H.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<P.mipmaps.length;Q++)H.__webglFramebuffer[Q]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ft)for(let Q=0,it=j.length;Q<it;Q++){const pt=i.get(j[Q]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&qt(L)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<j.length;Q++){const it=j[Q];H.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const pt=s.convert(it.format,it.colorSpace),Ft=s.convert(it.type),vt=c(it.internalFormat,pt,Ft,it.normalized,it.colorSpace,L.isXRRenderTarget===!0),mt=$t(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,vt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),ut(n.TEXTURE_CUBE_MAP,P);for(let Q=0;Q<6;Q++)if(P.mipmaps&&P.mipmaps.length>0)for(let it=0;it<P.mipmaps.length;it++)ct(H.__webglFramebuffer[Q][it],L,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else ct(H.__webglFramebuffer[Q],L,P,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);v(P)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Q=0,it=j.length;Q<it;Q++){const pt=j[Q],Ft=i.get(pt);let vt=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ft.__webglTexture),ut(vt,pt),ct(H.__webglFramebuffer,L,pt,n.COLOR_ATTACHMENT0+Q,vt,0),v(pt)&&E(vt)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Q=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,W.__webglTexture),ut(Q,P),P.mipmaps&&P.mipmaps.length>0)for(let it=0;it<P.mipmaps.length;it++)ct(H.__webglFramebuffer[it],L,P,n.COLOR_ATTACHMENT0,Q,it);else ct(H.__webglFramebuffer,L,P,n.COLOR_ATTACHMENT0,Q,0);v(P)&&E(Q),e.unbindTexture()}L.depthBuffer&&wt(L)}function Tt(L){const P=L.textures;for(let H=0,W=P.length;H<W;H++){const j=P[H];if(v(j)){const ht=f(L),ft=i.get(j).__webglTexture;e.bindTexture(ht,ft),E(ht),e.unbindTexture()}}}const ae=[],Xt=[];function Kt(L){if(L.samples>0){if(qt(L)===!1){const P=L.textures,H=L.width,W=L.height;let j=n.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(L),Q=P.length>1;if(Q)for(let pt=0;pt<P.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const it=L.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let pt=0;pt<P.length;pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);const Ft=i.get(P[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ft,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,j,n.NEAREST),u===!0&&(ae.length=0,Xt.length=0,ae.push(n.COLOR_ATTACHMENT0+pt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(ae.push(ht),Xt.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let pt=0;pt<P.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);const Ft=i.get(P[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&u){const P=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[P])}}}function $t(L){return Math.min(r.maxSamples,L.samples)}function qt(L){const P=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function B(L){const P=o.render.frame;d.get(L)!==P&&(d.set(L,P),L.update())}function Ee(L,P){const H=L.colorSpace,W=L.format,j=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Ca&&H!==$i&&(re.getTransfer(H)===de?(W!==Wn||j!==En)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",H)),P}function Gt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=C,this.getTextureUnits=D,this.setTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=Rt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tb(n,t){function e(i,r=$i){let s;const o=re.getTransfer(r);if(i===En)return n.UNSIGNED_BYTE;if(i===Au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_p)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Ks)return n.UNSIGNED_SHORT;if(i===Tu)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===xp)return n.ALPHA;if(i===vp)return n.RGB;if(i===Wn)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Sp)return n.RED;if(i===Ru)return n.RED_INTEGER;if(i===Mr)return n.RG;if(i===Pu)return n.RG_INTEGER;if(i===Du)return n.RGBA_INTEGER;if(i===oa||i===aa||i===la||i===ca)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Dc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Lc||i===Nc||i===Uc||i===Fc||i===Ta||i===Oc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ic||i===Lc)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uc)return s.COMPRESSED_R11_EAC;if(i===Fc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ta)return s.COMPRESSED_RG11_EAC;if(i===Oc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Bc||i===zc||i===kc||i===Gc||i===Hc||i===Vc||i===$c||i===Wc||i===Xc||i===qc||i===Yc||i===Zc||i===Kc||i===Jc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$c)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jc)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jc||i===Qc||i===tu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===jc)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eu||i===nu||i===Aa||i===iu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===eu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const eb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nb=`
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

}`;class ib{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Rp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ci({vertexShader:eb,fragmentShader:nb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new Wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rb extends nr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",u=1,h=null,d=null,p=null,m=null,g=null,S=null;const M=typeof XRWebGLBinding<"u",_=new ib,v={},E=e.getContextAttributes();let f=null,c=null;const x=[],l=[],R=new kt;let y=null,b=null;const w=new Nn;w.viewport=new me;const T=new Nn;T.viewport=new me;const A=[w,T],C=new ax;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=x[X];return K===void 0&&(K=new _l,x[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=x[X];return K===void 0&&(K=new _l,x[X]=K),K.getGripSpace()},this.getHand=function(X){let K=x[X];return K===void 0&&(K=new _l,x[X]=K),K.getHandSpace()};function F(X){const K=l.indexOf(X.inputSource);if(K===-1)return;const st=x[K];st!==void 0&&(st.update(X.inputSource,X.frame,h||o),st.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",G);for(let X=0;X<x.length;X++){const K=l[X];K!==null&&(l[X]=null,x[X].disconnect(K))}D=null,U=null,_.reset();for(const X in v)delete v[X];if(t.setRenderTarget(f),g=null,m=null,p=null,r=null,c=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),b!==null){const X=b.camera;X.fov=b.fov,X.zoom=b.zoom,X.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,dt=null,ct=null;E.depth&&(ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=E.stencil?_r:Ri,dt=E.stencil?Js:ai);const zt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(zt),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),c=new Xn(m.textureWidth,m.textureHeight,{format:Wn,type:En,depthTexture:new Qs(m.textureWidth,m.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const st={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),c=new Xn(g.framebufferWidth,g.framebufferHeight,{format:Wn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await r.requestReferenceSpace(a),Mt.setContext(r),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(X){for(let K=0;K<X.removed.length;K++){const st=X.removed[K],dt=l.indexOf(st);dt>=0&&(l[dt]=null,x[dt].disconnect(st))}for(let K=0;K<X.added.length;K++){const st=X.added[K];let dt=l.indexOf(st);if(dt===-1){for(let zt=0;zt<x.length;zt++)if(zt>=l.length){l.push(st),dt=zt;break}else if(l[zt]===null){l[zt]=st,dt=zt;break}if(dt===-1)break}const ct=x[dt];ct&&ct.connect(st)}}const z=new N,$=new N;function Z(X,K,st){z.setFromMatrixPosition(K.matrixWorld),$.setFromMatrixPosition(st.matrixWorld);const dt=z.distanceTo($),ct=K.projectionMatrix.elements,zt=st.projectionMatrix.elements,Vt=ct[14]/(ct[10]-1),wt=ct[14]/(ct[10]+1),Rt=(ct[9]+1)/ct[5],Ut=(ct[9]-1)/ct[5],Tt=(ct[8]-1)/ct[0],ae=(zt[8]+1)/zt[0],Xt=Vt*Tt,Kt=Vt*ae,$t=dt/(-Tt+ae),qt=$t*-Tt;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qt),X.translateZ($t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ct[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const B=Vt+$t,Ee=wt+$t,Gt=Xt-qt,L=Kt+(dt-qt),P=Rt*wt/Ee*B,H=Ut*wt/Ee*B;X.projectionMatrix.makePerspective(Gt,L,P,H,B,Ee),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,st=X.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(st=_.depthFar)),C.near=T.near=w.near=K,C.far=T.far=w.far=st,(D!==C.near||U!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),D=C.near,U=C.far),C.layers.mask=X.layers.mask|6,w.layers.mask=C.layers.mask&-5,T.layers.mask=C.layers.mask&-3;const dt=X.parent,ct=C.cameras;ot(C,dt);for(let zt=0;zt<ct.length;zt++)ot(ct[zt],dt);ct.length===2?Z(C,w,T):C.projectionMatrix.copy(w.projectionMatrix),b===null&&X.isPerspectiveCamera&&(b={camera:X,fov:X.fov,zoom:X.zoom}),lt(X,C,dt)};function lt(X,K,st){st===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(st.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=su*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(X){u=X,m!==null&&(m.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(X){return v[X]};let xt=null;function ut(X,K){if(d=K.getViewerPose(h||o),S=K,d!==null){const st=d.views;g!==null&&(t.setRenderTargetFramebuffer(c,g.framebuffer),t.setRenderTarget(c));let dt=!1;st.length!==C.cameras.length&&(C.cameras.length=0,dt=!0);for(let wt=0;wt<st.length;wt++){const Rt=st[wt];let Ut=null;if(g!==null)Ut=g.getViewport(Rt);else{const ae=p.getViewSubImage(m,Rt);Ut=ae.viewport,wt===0&&(t.setRenderTargetTextures(c,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(c))}let Tt=A[wt];Tt===void 0&&(Tt=new Nn,Tt.layers.enable(wt),Tt.viewport=new me,A[wt]=Tt),Tt.matrix.fromArray(Rt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Rt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),wt===0&&(C.matrix.copy(Tt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),dt===!0&&C.cameras.push(Tt)}const ct=r.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const wt=p.getDepthInformation(st[0]);wt&&wt.isValid&&wt.texture&&_.init(wt,r.renderState)}if(ct&&ct.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let wt=0;wt<st.length;wt++){const Rt=st[wt].camera;if(Rt){let Ut=v[Rt];Ut||(Ut=new Rp,v[Rt]=Ut);const Tt=p.getCameraImage(Rt);Ut.sourceTexture=Tt}}}}for(let st=0;st<x.length;st++){const dt=l[st],ct=x[st];dt!==null&&ct!==void 0&&ct.update(dt,K,h||o)}xt&&xt(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),S=null}const Mt=new Lp;Mt.setAnimationLoop(ut),this.setAnimationLoop=function(X){xt=X},this.dispose=function(){}}}const sb=new ie,kp=new Yt;kp.set(-1,0,0,0,1,0,0,0,1);function ob(n,t){function e(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function i(_,v){v.color.getRGB(_.fogColor.value,Pp(n)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,E,f,c){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?s(_,v):v.isMeshLambertMaterial?(s(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(s(_,v),p(_,v)):v.isMeshPhongMaterial?(s(_,v),d(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(s(_,v),m(_,v),v.isMeshPhysicalMaterial&&g(_,v,c)):v.isMeshMatcapMaterial?(s(_,v),S(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),M(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(o(_,v),v.isLineDashedMaterial&&a(_,v)):v.isPointsMaterial?u(_,v,E,f):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,e(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,e(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===hn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,e(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===hn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,e(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,e(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const E=t.get(v),f=E.envMap,c=E.envMapRotation;f&&(_.envMap.value=f,_.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(c)).transpose(),f.isCubeTexture&&f.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(kp),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,_.aoMapTransform))}function o(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,e(v.map,_.mapTransform))}function a(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function u(_,v,E,f){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*E,_.scale.value=f*.5,v.map&&(_.map.value=v.map,e(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,e(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,e(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function d(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function p(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,E){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.retroreflectivity>0&&(_.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=E.texture,_.transmissionSamplerSize.value.set(E.width,E.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,v){v.matcap&&(_.matcap.value=v.matcap)}function M(_,v){const E=t.get(v).light;_.referencePosition.value.setFromMatrixPosition(E.matrixWorld),_.nearDistance.value=E.shadow.camera.near,_.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ab(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function u(c,x){const l=x.program;i.uniformBlockBinding(c,l)}function h(c,x){let l=r[c.id];l===void 0&&(_(c),l=d(c),r[c.id]=l,c.addEventListener("dispose",E));const R=x.program;i.updateUBOMapping(c,R);const y=t.render.frame;s[c.id]!==y&&(m(c),s[c.id]=y)}function d(c){const x=p();c.__bindingPointIndex=x;const l=n.createBuffer(),R=c.__size,y=c.usage;return n.bindBuffer(n.UNIFORM_BUFFER,l),n.bufferData(n.UNIFORM_BUFFER,R,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,l),l}function p(){for(let c=0;c<a;c++)if(o.indexOf(c)===-1)return o.push(c),c;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(c){const x=r[c.id],l=c.uniforms,R=c.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let y=0,b=l.length;y<b;y++){const w=l[y];if(Array.isArray(w))for(let T=0,A=w.length;T<A;T++)g(w[T],y,T,R);else g(w,y,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(c,x,l,R){if(M(c,x,l,R)===!0){const y=c.__offset,b=c.value;if(Array.isArray(b)){let w=0;for(let T=0;T<b.length;T++){const A=b[T],C=v(A);S(A,c.__data,w),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(w+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(b,c.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,c.__data)}}function S(c,x,l){typeof c=="number"||typeof c=="boolean"?x[0]=c:c.isMatrix3?(x[0]=c.elements[0],x[1]=c.elements[1],x[2]=c.elements[2],x[3]=0,x[4]=c.elements[3],x[5]=c.elements[4],x[6]=c.elements[5],x[7]=0,x[8]=c.elements[6],x[9]=c.elements[7],x[10]=c.elements[8],x[11]=0):ArrayBuffer.isView(c)?x.set(new c.constructor(c.buffer,c.byteOffset,x.length)):c.toArray(x,l)}function M(c,x,l,R){const y=c.value,b=x+"_"+l;if(R[b]===void 0)return typeof y=="number"||typeof y=="boolean"?R[b]=y:ArrayBuffer.isView(y)?R[b]=y.slice():R[b]=y.clone(),!0;{const w=R[b];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return R[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function _(c){const x=c.uniforms;let l=0;const R=16;for(let b=0,w=x.length;b<w;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let A=0,C=T.length;A<C;A++){const D=T[A],U=Array.isArray(D.value)?D.value:[D.value];for(let F=0,O=U.length;F<O;F++){const G=U[F],z=v(G),$=l%R,Z=$%z.boundary,ot=$+Z;l+=Z,ot!==0&&R-ot<z.storage&&(l+=R-ot),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=l,l+=z.storage}}}const y=l%R;return y>0&&(l+=R-y),c.__size=l,c.__cache={},this}function v(c){const x={boundary:0,storage:0};return typeof c=="number"||typeof c=="boolean"?(x.boundary=4,x.storage=4):c.isVector2?(x.boundary=8,x.storage=8):c.isVector3||c.isColor?(x.boundary=16,x.storage=12):c.isVector4?(x.boundary=16,x.storage=16):c.isMatrix3?(x.boundary=48,x.storage=48):c.isMatrix4?(x.boundary=64,x.storage=64):c.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(c)?(x.boundary=16,x.storage=c.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",c),x}function E(c){const x=c.target;x.removeEventListener("dispose",E);const l=o.indexOf(x.__bindingPointIndex);o.splice(l,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const c in r)n.deleteBuffer(r[c]);o=[],r={},s={}}return{bind:u,update:h,dispose:f}}const lb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function cb(){return jn===null&&(jn=new $0(lb,16,16,Mr,li),jn.name="DFG_LUT",jn.minFilter=sn,jn.magFilter=sn,jn.wrapS=bi,jn.wrapT=bi,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class ub{constructor(t={}){const{canvas:e=x0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1,outputBufferType:g=En}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=o;const M=g,_=new Set([Du,Pu,Ru]),v=new Set([En,ai,Ks,Js,Au,Cu]),E=new Uint32Array(4),f=new Int32Array(4),c=new N;let x=null,l=null;const R=[],y=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let T=!1,A=null,C=null,D=null,U=null;this._outputColorSpace=Ln;let F=0,O=0,G=null,z=-1,$=null;const Z=new me,ot=new me;let lt=null;const xt=new te(0);let ut=0,Mt=e.width,X=e.height,K=1,st=null,dt=null;const ct=new me(0,0,Mt,X),zt=new me(0,0,Mt,X);let Vt=!1;const wt=new Uu;let Rt=!1,Ut=!1;const Tt=new ie,ae=new N,Xt=new me,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function qt(){return G===null?K:1}let B=i;function Ee(I,k){return e.getContext(I,k)}let Gt,L,P,H,W,j,ht,ft,Q,it,pt,Ft,vt,mt,Ot,Ht,Jt,V,gt,nt,_t,Et,at;try{const I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${no}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",On,!1),B===null){const k="webgl2";if(B=Ee(k,I),B===null)throw Ee(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(I){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",On,!1),le("WebGLRenderer: "+I.message),I}function Bt(){Gt=new cy(B),Gt.init(),_t=new tb(B,Gt),L=new QS(B,Gt,t,_t),P=new jM(B,Gt),L.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),C=B.createFramebuffer(),D=B.createFramebuffer(),U=B.createFramebuffer(),H=new dy(B),W=new BM,j=new QM(B,Gt,P,W,L,_t,H),ht=new ly(w),ft=new px(B),Et=new JS(B,ft),Q=new uy(B,ft,H,Et),it=new py(B,Q,ft,Et,H),V=new fy(B,L,j),Ot=new ty(W),pt=new OM(w,ht,Gt,L,Et,Ot),Ft=new ob(w,W),vt=new kM,mt=new XM(Gt),Jt=new KS(w,ht,P,it,S,u),Ht=new JM(w,it,L),at=new ab(B,H,L,P),gt=new jS(B,Gt,H),nt=new hy(B,Gt,H),H.programs=pt.programs,w.capabilities=L,w.extensions=Gt,w.properties=W,w.renderLists=vt,w.shadowMap=Ht,w.state=P,w.info=H}M!==En&&(b=new gy(M,e.width,e.height,a,r,s));const Lt=new rb(w,B);this.xr=Lt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const I=Gt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Gt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(I){I!==void 0&&(K=I,this.setSize(Mt,X,!1))},this.getSize=function(I){return I.set(Mt,X)},this.setSize=function(I,k,J=!0){if(Lt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=I,X=k,e.width=Math.floor(I*K),e.height=Math.floor(k*K),J===!0&&(e.style.width=I+"px",e.style.height=k+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,I,k)},this.getDrawingBufferSize=function(I){return I.set(Mt*K,X*K).floor()},this.setDrawingBufferSize=function(I,k,J){Mt=I,X=k,K=J,e.width=Math.floor(I*J),e.height=Math.floor(k*J),this.setViewport(0,0,I,k)},this.setEffects=function(I){if(M===En){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let k=0;k<I.length;k++)if(I[k].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Z)},this.getViewport=function(I){return I.copy(ct)},this.setViewport=function(I,k,J,q){I.isVector4?ct.set(I.x,I.y,I.z,I.w):ct.set(I,k,J,q),P.viewport(Z.copy(ct).multiplyScalar(K).round())},this.getScissor=function(I){return I.copy(zt)},this.setScissor=function(I,k,J,q){I.isVector4?zt.set(I.x,I.y,I.z,I.w):zt.set(I,k,J,q),P.scissor(ot.copy(zt).multiplyScalar(K).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(I){P.setScissorTest(Vt=I)},this.setOpaqueSort=function(I){st=I},this.setTransparentSort=function(I){dt=I},this.getClearColor=function(I){return I.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(I=!0,k=!0,J=!0){let q=0;if(I){let Y=!1;if(G!==null){const bt=G.texture.format;Y=_.has(bt)}if(Y){const bt=G.texture.type,Ct=v.has(bt),yt=Jt.getClearColor(),Dt=Jt.getClearAlpha(),Nt=yt.r,jt=yt.g,ee=yt.b;Ct?(E[0]=Nt,E[1]=jt,E[2]=ee,E[3]=Dt,B.clearBufferuiv(B.COLOR,0,E)):(f[0]=Nt,f[1]=jt,f[2]=ee,f[3]=Dt,B.clearBufferiv(B.COLOR,0,f))}else q|=B.COLOR_BUFFER_BIT}k&&(q|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),A=I},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",On,!1),Jt.dispose(),vt.dispose(),mt.dispose(),W.dispose(),ht.dispose(),it.dispose(),Et.dispose(),at.dispose(),pt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",th),Lt.removeEventListener("sessionend",eh),ir.stop()};function _e(I){I.preventDefault(),Ah("WebGLRenderer: Context Lost."),T=!0}function ue(){Ah("WebGLRenderer: Context Restored."),T=!1;const I=H.autoReset,k=Ht.enabled,J=Ht.autoUpdate,q=Ht.needsUpdate,Y=Ht.type;Bt(),H.autoReset=I,Ht.enabled=k,Ht.autoUpdate=J,Ht.needsUpdate=q,Ht.type=Y}function On(I){le("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Yn(I){const k=I.target;k.removeEventListener("dispose",Yn),am(k)}function am(I){lm(I),W.remove(I)}function lm(I){const k=W.get(I).programs;k!==void 0&&(k.forEach(function(J){pt.releaseProgram(J)}),I.isShaderMaterial&&pt.releaseShaderCache(I))}this.renderBufferDirect=function(I,k,J,q,Y,bt){k===null&&(k=Kt);const Ct=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,yt=hm(I,k,J,q,Y);P.setMaterial(q,Ct);let Dt=J.index,Nt=1;if(q.wireframe===!0){if(Dt=Q.getWireframeAttribute(J),Dt===void 0)return;Nt=2}const jt=J.drawRange,ee=J.attributes.position;let It=jt.start*Nt,he=(jt.start+jt.count)*Nt;bt!==null&&(It=Math.max(It,bt.start*Nt),he=Math.min(he,(bt.start+bt.count)*Nt)),Dt!==null?(It=Math.max(It,0),he=Math.min(he,Dt.count)):ee!=null&&(It=Math.max(It,0),he=Math.min(he,ee.count));const Le=he-It;if(Le<0||Le===1/0)return;Et.setup(Y,q,yt,J,Dt);let Se,ge=gt;if(Dt!==null&&(Se=ft.get(Dt),ge=nt,ge.setIndex(Se)),Y.isMesh)q.wireframe===!0?(P.setLineWidth(q.wireframeLinewidth*qt()),ge.setMode(B.LINES)):ge.setMode(B.TRIANGLES);else if(Y.isLine){let tn=q.linewidth;tn===void 0&&(tn=1),P.setLineWidth(tn*qt()),Y.isLineSegments?ge.setMode(B.LINES):Y.isLineLoop?ge.setMode(B.LINE_LOOP):ge.setMode(B.LINE_STRIP)}else Y.isPoints?ge.setMode(B.POINTS):Y.isSprite&&ge.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const tn=Y._multiDrawStarts,At=Y._multiDrawCounts,cn=Y._multiDrawCount,se=Dt?ft.get(Dt).bytesPerElement:1,Rn=W.get(q).currentProgram.getUniforms();for(let Zn=0;Zn<cn;Zn++)Rn.setValue(B,"_gl_DrawID",Zn),ge.render(tn[Zn]/se,At[Zn])}else if(Y.isInstancedMesh)ge.renderInstances(It,Le,Y.count);else if(J.isInstancedBufferGeometry){const tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,At=Math.min(J.instanceCount,tn);ge.renderInstances(It,Le,At)}else ge.render(It,Le)};function Qu(I,k,J,q){A!==null&&I.isNodeMaterial&&A.setObject(q,I),Rt===!0&&Ot.setState(I,J,!1),I.transparent===!0&&I.side===$n&&I.forceSinglePass===!1?(I.side=hn,I.needsUpdate=!0,so(I,k,q),I.side=oi,I.needsUpdate=!0,so(I,k,q),I.side=$n):so(I,k,q)}this.compile=function(I,k,J=null){J===null&&(J=I),A!==null&&A.renderStart(I,k,J),l=mt.get(J),l.init(k),y.push(l),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(l.pushLight(Y),Y.castShadow&&l.pushShadow(Y))}),I!==J&&I.traverseVisible(function(Y){Y.isLight&&Y.layers.test(k.layers)&&(l.pushLight(Y),Y.castShadow&&l.pushShadow(Y))}),l.setupLights(),A!==null&&A.updateLights(l.state.lightsArray),Ut=this.localClippingEnabled,Rt=Ot.init(this.clippingPlanes,Ut),Rt===!0&&Ot.setGlobalState(this.clippingPlanes,k),A!==null&&Ht.render(l.state.shadowsArray,J,k);const q=new Set;return I.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const bt=Y.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){const yt=bt[Ct];Qu(yt,J,k,Y),q.add(yt)}else Qu(bt,J,k,Y),q.add(bt)}),l=y.pop(),A!==null&&A.renderEnd(),q},this.compileAsync=function(I,k,J=null){const q=this.compile(I,k,J);return new Promise(Y=>{function bt(){if(q.forEach(function(Ct){const Dt=W.get(Ct).currentProgram;(Dt===void 0||Dt.isReady())&&q.delete(Ct)}),q.size===0){Y(I);return}setTimeout(bt,10)}Gt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Qa=null;function cm(I){Qa&&Qa(I)}function th(){ir.stop()}function eh(){ir.start()}const ir=new Lp;ir.setAnimationLoop(cm),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(I){Qa=I,Lt.setAnimationLoop(I),I===null?ir.stop():ir.start()},Lt.addEventListener("sessionstart",th),Lt.addEventListener("sessionend",eh),this.render=function(I,k){if(k!==void 0&&k.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A!==null&&A.renderStart(I,k);const J=Lt.enabled===!0&&Lt.isPresenting===!0,q=b!==null&&(G===null||J)&&b.begin(w,G);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(k),k=Lt.getCamera()),I.isScene===!0&&I.onBeforeRender(w,I,k,G),l=mt.get(I,y.length),l.init(k),l.state.textureUnits=j.getTextureUnits(),y.push(l),Tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),wt.setFromProjectionMatrix(Tt,ni,k.reversedDepth),Ut=this.localClippingEnabled,Rt=Ot.init(this.clippingPlanes,Ut),x=vt.get(I,R.length),x.init(),R.push(x),Lt.enabled===!0&&Lt.isPresenting===!0){const Ct=w.xr.getDepthSensingMesh();Ct!==null&&tl(Ct,k,-1/0,w.sortObjects)}tl(I,k,0,w.sortObjects),x.finish(),A!==null&&A.updateLights(l.state.lightsArray),w.sortObjects===!0&&x.sort(st,dt),$t=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,$t&&Jt.addToRenderList(x,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Ot.beginShadows();const Y=l.state.shadowsArray;if(Ht.render(Y,I,k),Rt===!0&&Ot.endShadows(),(q&&b.hasRenderPass())===!1){const Ct=x.opaque,yt=x.transmissive;if(l.setupLights(),k.isArrayCamera){const Dt=k.cameras;if(yt.length>0)for(let Nt=0,jt=Dt.length;Nt<jt;Nt++){const ee=Dt[Nt];ih(Ct,yt,I,ee)}$t&&Jt.render(I);for(let Nt=0,jt=Dt.length;Nt<jt;Nt++){const ee=Dt[Nt];nh(x,I,ee,ee.viewport)}}else yt.length>0&&ih(Ct,yt,I,k),$t&&Jt.render(I),nh(x,I,k)}G!==null&&O===0&&(j.updateMultisampleRenderTarget(G),j.updateRenderTargetMipmap(G)),q&&b.end(w),I.isScene===!0&&I.onAfterRender(w,I,k),Et.resetDefaultState(),z=-1,$=null,y.pop(),y.length>0?(l=y[y.length-1],j.setTextureUnits(l.state.textureUnits),Rt===!0&&Ot.setGlobalState(w.clippingPlanes,l.state.camera)):l=null,R.pop(),R.length>0?x=R[R.length-1]:x=null,A!==null&&A.renderEnd()};function tl(I,k,J,q){if(I.visible===!1)return;if(I.layers.test(k.layers)){if(I.isGroup)J=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(k);else if(I.isLightProbeGrid)l.pushLightProbeGrid(I);else if(I.isLight)l.pushLight(I),I.castShadow&&l.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(wt)){q&&Xt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Tt);const Ct=it.update(I),yt=I.material;yt.visible&&x.push(I,Ct,yt,J,Xt.z,null,k)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(wt))){const Ct=it.update(I),yt=I.material;if(q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xt.copy(I.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Xt.copy(Ct.boundingSphere.center)),Xt.applyMatrix4(I.matrixWorld).applyMatrix4(Tt)),Array.isArray(yt)){const Dt=Ct.groups;for(let Nt=0,jt=Dt.length;Nt<jt;Nt++){const ee=Dt[Nt],It=yt[ee.materialIndex];It&&It.visible&&x.push(I,Ct,It,J,Xt.z,ee,k)}}else yt.visible&&x.push(I,Ct,yt,J,Xt.z,null,k)}}const bt=I.children;for(let Ct=0,yt=bt.length;Ct<yt;Ct++)tl(bt[Ct],k,J,q)}function nh(I,k,J,q){const{opaque:Y,transmissive:bt,transparent:Ct}=I;l.setupLightsView(J),Rt===!0&&Ot.setGlobalState(w.clippingPlanes,J),q&&P.viewport(Z.copy(q)),Y.length>0&&ro(Y,k,J),bt.length>0&&ro(bt,k,J),Ct.length>0&&ro(Ct,k,J),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function ih(I,k,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(l.state.transmissionRenderTarget[q.id]===void 0){const It=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");l.state.transmissionRenderTarget[q.id]=new Xn(1,1,{generateMipmaps:!0,type:It?li:En,minFilter:gr,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}const bt=l.state.transmissionRenderTarget[q.id],Ct=q.viewport||Z;bt.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const yt=w.getRenderTarget(),Dt=w.getActiveCubeFace(),Nt=w.getActiveMipmapLevel();w.setRenderTarget(bt),w.getClearColor(xt),ut=w.getClearAlpha(),ut<1&&w.setClearColor(16777215,.5),w.clear(),$t&&Jt.render(J);const jt=w.toneMapping;w.toneMapping=ri;const ee=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),l.setupLightsView(q),Rt===!0&&Ot.setGlobalState(w.clippingPlanes,q),ro(I,J,q),j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Le=k.length;he<Le;he++){const Se=k[he],{object:ge,geometry:tn,material:At,group:cn}=Se;if(At.side===$n&&ge.layers.test(q.layers)){const se=At.side;At.side=hn,At.needsUpdate=!0,rh(ge,J,q,tn,At,cn),At.side=se,At.needsUpdate=!0,It=!0}}It===!0&&(j.updateMultisampleRenderTarget(bt),j.updateRenderTargetMipmap(bt))}w.setRenderTarget(yt,Dt,Nt),w.setClearColor(xt,ut),ee!==void 0&&(q.viewport=ee),w.toneMapping=jt}function ro(I,k,J){const q=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,bt=I.length;Y<bt;Y++){const Ct=I[Y],{object:yt,geometry:Dt,group:Nt}=Ct;let jt=Ct.material;jt.allowOverride===!0&&q!==null&&(jt=q),yt.layers.test(J.layers)&&rh(yt,k,J,Dt,jt,Nt)}}function rh(I,k,J,q,Y,bt){A!==null&&Y.isNodeMaterial&&A.setObject(I,Y),I.onBeforeRender(w,k,J,q,Y,bt),I.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Y.onBeforeRender(w,k,J,q,I,bt),Y.transparent===!0&&Y.side===$n&&Y.forceSinglePass===!1?(Y.side=hn,Y.needsUpdate=!0,w.renderBufferDirect(J,k,q,Y,I,bt),Y.side=oi,Y.needsUpdate=!0,w.renderBufferDirect(J,k,q,Y,I,bt),Y.side=$n):w.renderBufferDirect(J,k,q,Y,I,bt),I.onAfterRender(w,k,J,q,Y,bt)}function so(I,k,J){k.isScene!==!0&&(k=Kt);const q=W.get(I),Y=l.state.lights,bt=l.state.shadowsArray,Ct=Y.state.version,yt=pt.getParameters(I,Y.state,bt,k,J,l.state.lightProbeGridArray),Dt=pt.getProgramCacheKey(yt);let Nt=q.programs;q.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;const jt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;q.envMap=ht.get(I.envMap||q.environment,jt),q.envMapRotation=q.environment!==null&&I.envMap===null?k.environmentRotation:I.envMapRotation,Nt===void 0&&(I.addEventListener("dispose",Yn),Nt=new Map,q.programs=Nt);let ee=Nt.get(Dt);if(ee!==void 0){if(q.currentProgram===ee&&q.lightsStateVersion===Ct)return oh(I,yt),ee}else yt.uniforms=pt.getUniforms(I),A!==null&&I.isNodeMaterial&&A.build(I,J,yt),I.onBeforeCompile(yt,w),ee=pt.acquireProgram(yt,Dt),Nt.set(Dt,ee),q.uniforms=yt.uniforms;const It=q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(It.clippingPlanes=Ot.uniform),oh(I,yt),q.needsLights=fm(I),q.lightsStateVersion=Ct,q.needsLights&&(It.ambientLightColor.value=Y.state.ambient,It.lightProbe.value=Y.state.probe,It.sunLights.value=Y.state.sun,It.sunLightShadows.value=Y.state.sunShadow,It.directionalLights.value=Y.state.directional,It.directionalLightShadows.value=Y.state.directionalShadow,It.spotLights.value=Y.state.spot,It.spotLightShadows.value=Y.state.spotShadow,It.rectAreaLights.value=Y.state.rectArea,It.ltc_1.value=Y.state.rectAreaLTC1,It.ltc_2.value=Y.state.rectAreaLTC2,It.pointLights.value=Y.state.point,It.pointLightShadows.value=Y.state.pointShadow,It.hemisphereLights.value=Y.state.hemi,It.sunShadowMatrix.value=Y.state.sunShadowMatrix,It.sunShadowCascade.value=Y.state.sunShadowCascade,It.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,It.spotLightMatrix.value=Y.state.spotLightMatrix,It.spotLightMap.value=Y.state.spotLightMap,It.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=l.state.lightProbeGridArray.length>0,q.currentProgram=ee,q.uniformsList=null,ee}function sh(I){if(I.uniformsList===null){const k=I.currentProgram.getUniforms();I.uniformsList=ha.seqWithValue(k.seq,I.uniforms)}return I.uniformsList}function oh(I,k){const J=W.get(I);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function um(I,k){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;c.setFromMatrixPosition(k.matrixWorld);for(let J=0,q=I.length;J<q;J++){const Y=I[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(c))return Y}return null}function hm(I,k,J,q,Y){k.isScene!==!0&&(k=Kt),j.resetTextureUnits();const bt=k.fog,Ct=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,yt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:re.workingColorSpace,Dt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Nt=ht.get(q.envMap||Ct,Dt),jt=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ee=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!J.morphAttributes.position,he=!!J.morphAttributes.normal,Le=!!J.morphAttributes.color;let Se=ri;q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Se=w.toneMapping);const ge=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tn=ge!==void 0?ge.length:0,At=W.get(q),cn=l.state.lights;if(Rt===!0&&(Ut===!0||I!==$)){const xe=I===$&&q.id===z;Ot.setState(q,I,xe)}let se=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==cn.state.version||At.outputColorSpace!==yt||Y.isBatchedMesh&&At.batching===!1||!Y.isBatchedMesh&&At.batching===!0||Y.isBatchedMesh&&At.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&At.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&At.instancing===!1||!Y.isInstancedMesh&&At.instancing===!0||Y.isSkinnedMesh&&At.skinning===!1||!Y.isSkinnedMesh&&At.skinning===!0||Y.isInstancedMesh&&At.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&At.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&At.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&At.instancingMorph===!1&&Y.morphTexture!==null||At.envMap!==Nt||q.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ot.numPlanes||At.numIntersection!==Ot.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==ee||At.morphTargets!==It||At.morphNormals!==he||At.morphColors!==Le||At.toneMapping!==Se||At.morphTargetsCount!==tn||!!At.lightProbeGrid!=l.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,At.__version=q.version);let Rn=At.currentProgram;se===!0&&(Rn=so(q,k,Y),A&&q.isNodeMaterial&&A.onUpdateProgram(q,Rn,At));let Zn=!1,Ii=!1,wr=!1;const pe=Rn.getUniforms(),Ae=At.uniforms;if(P.useProgram(Rn.program)&&(Zn=!0,Ii=!0,wr=!0),q.id!==z&&(z=q.id,Ii=!0),At.needsLights){const xe=um(l.state.lightProbeGridArray,Y);At.lightProbeGrid!==xe&&(At.lightProbeGrid=xe,Ii=!0)}if(Zn||$!==I){P.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),pe.setValue(B,"projectionMatrix",I.projectionMatrix),pe.setValue(B,"viewMatrix",I.matrixWorldInverse);const Ni=pe.map.cameraPosition;Ni!==void 0&&Ni.setValue(B,ae.setFromMatrixPosition(I.matrixWorld)),L.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pe.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),$!==I&&($=I,Ii=!0,wr=!0)}if(At.needsLights&&(cn.state.sunShadowMap.length>0&&pe.setValue(B,"sunShadowMap",cn.state.sunShadowMap,j),cn.state.directionalShadowMap.length>0&&pe.setValue(B,"directionalShadowMap",cn.state.directionalShadowMap,j),cn.state.spotShadowMap.length>0&&pe.setValue(B,"spotShadowMap",cn.state.spotShadowMap,j),cn.state.pointShadowMap.length>0&&pe.setValue(B,"pointShadowMap",cn.state.pointShadowMap,j)),Y.isSkinnedMesh){pe.setOptional(B,Y,"bindMatrix"),pe.setOptional(B,Y,"bindMatrixInverse");const xe=Y.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),pe.setValue(B,"boneTexture",xe.boneTexture,j))}Y.isBatchedMesh&&(pe.setOptional(B,Y,"batchingTexture"),pe.setValue(B,"batchingTexture",Y._matricesTexture,j),pe.setOptional(B,Y,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",Y._indirectTexture,j),pe.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",Y._colorsTexture,j));const Li=J.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&V.update(Y,J,Rn),(Ii||At.receiveShadow!==Y.receiveShadow)&&(At.receiveShadow=Y.receiveShadow,pe.setValue(B,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Ae.envMapIntensity.value=k.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=cb()),Ii){if(pe.setValue(B,"toneMappingExposure",w.toneMappingExposure),At.needsLights&&dm(Ae,wr),bt&&q.fog===!0&&Ft.refreshFogUniforms(Ae,bt),Ft.refreshMaterialUniforms(Ae,q,K,X,l.state.transmissionRenderTarget[I.id]),At.needsLights&&At.lightProbeGrid){const xe=At.lightProbeGrid;Ae.probesSH.value=xe.texture,Ae.probesMin.value.copy(xe.boundingBox.min),Ae.probesMax.value.copy(xe.boundingBox.max),Ae.probesResolution.value.copy(xe.resolution)}ha.upload(B,sh(At),Ae,j)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ha.upload(B,sh(At),Ae,j),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pe.setValue(B,"center",Y.center),pe.setValue(B,"modelViewMatrix",Y.modelViewMatrix),pe.setValue(B,"normalMatrix",Y.normalMatrix),pe.setValue(B,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const xe=q.uniformsGroups;for(let Ni=0,Tr=xe.length;Ni<Tr;Ni++){const lh=xe[Ni];at.update(lh,Rn),at.bind(lh,Rn)}}return Rn}function dm(I,k){I.ambientLightColor.needsUpdate=k,I.lightProbe.needsUpdate=k,I.sunLights.needsUpdate=k,I.sunLightShadows.needsUpdate=k,I.directionalLights.needsUpdate=k,I.directionalLightShadows.needsUpdate=k,I.pointLights.needsUpdate=k,I.pointLightShadows.needsUpdate=k,I.spotLights.needsUpdate=k,I.spotLightShadows.needsUpdate=k,I.rectAreaLights.needsUpdate=k,I.hemisphereLights.needsUpdate=k}function fm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(I,k,J){const q=W.get(I);q.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),W.get(I.texture).__webglTexture=k,W.get(I.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,k){const J=W.get(I);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(I,k=0,J=0){G=I,F=k,O=J;let q=null,Y=!1,bt=!1;if(I){const yt=W.get(I);if(yt.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(B.FRAMEBUFFER,yt.__webglFramebuffer),Z.copy(I.viewport),ot.copy(I.scissor),lt=I.scissorTest,P.viewport(Z),P.scissor(ot),P.setScissorTest(lt),z=-1;return}else if(yt.__webglFramebuffer===void 0)j.setupRenderTarget(I);else if(yt.__hasExternalTextures)j.rebindTextures(I,W.get(I.texture).__webglTexture,W.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const jt=I.depthTexture;if(yt.__boundDepthTexture!==jt){if(jt!==null&&W.has(jt)&&(I.width!==jt.image.width||I.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(I)}}const Dt=I.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(bt=!0);const Nt=W.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?q=Nt[k][J]:q=Nt[k],Y=!0):I.samples>0&&j.useMultisampledRTT(I)===!1?q=W.get(I).__webglMultisampledFramebuffer:Array.isArray(Nt)?q=Nt[J]:q=Nt,Z.copy(I.viewport),ot.copy(I.scissor),lt=I.scissorTest}else Z.copy(ct).multiplyScalar(K).floor(),ot.copy(zt).multiplyScalar(K).floor(),lt=Vt;if(J!==0&&(q=C),P.bindFramebuffer(B.FRAMEBUFFER,q)&&P.drawBuffers(I,q),P.viewport(Z),P.scissor(ot),P.setScissorTest(lt),Y){const yt=W.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,yt.__webglTexture,J)}else if(bt){const yt=k;for(let Dt=0;Dt<I.textures.length;Dt++){const Nt=W.get(I.textures[Dt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Dt,Nt.__webglTexture,J,yt)}}else if(I!==null&&J!==0){const yt=W.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,J)}z=-1};function ah(I){const k=W.get(I);return(k.__readFormat!==I.format||k.__readType!==I.type)&&(k.__readFormat=I.format,k.__readType=I.type,k.__formatReadable=L.textureFormatReadable(I.format),k.__typeReadable=L.textureTypeReadable(I.type)),k}this.readRenderTargetPixels=function(I,k,J,q,Y,bt,Ct,yt=0){if(!(I&&I.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=W.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt){P.bindFramebuffer(B.FRAMEBUFFER,Dt);try{const Nt=I.textures[yt],jt=Nt.format,ee=Nt.type;I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);const It=ah(Nt);if(It.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=I.width-q&&J>=0&&J<=I.height-Y&&B.readPixels(k,J,q,Y,_t.convert(jt),_t.convert(ee),bt)}finally{const Nt=G!==null?W.get(G).__webglFramebuffer:null;P.bindFramebuffer(B.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(I,k,J,q,Y,bt,Ct,yt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=W.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ct!==void 0&&(Dt=Dt[Ct]),Dt)if(k>=0&&k<=I.width-q&&J>=0&&J<=I.height-Y){P.bindFramebuffer(B.FRAMEBUFFER,Dt);const Nt=I.textures[yt],jt=Nt.format,ee=Nt.type;I.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);const It=ah(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(k,J,q,Y,_t.convert(jt),_t.convert(ee),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Le=G!==null?W.get(G).__webglFramebuffer:null;P.bindFramebuffer(B.FRAMEBUFFER,Le);const Se=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await v0(B,Se,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,he),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(he),B.deleteSync(Se),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,k=null,J=0){const q=Math.pow(2,-J),Y=Math.floor(I.image.width*q),bt=Math.floor(I.image.height*q),Ct=k!==null?k.x:0,yt=k!==null?k.y:0;j.setTexture2D(I,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ct,yt,Y,bt),P.unbindTexture()},this.copyTextureToTexture=function(I,k,J=null,q=null,Y=0,bt=0){let Ct,yt,Dt,Nt,jt,ee,It,he,Le;const Se=I.isCompressedTexture?I.mipmaps[bt]:I.image;if(J!==null)Ct=J.max.x-J.min.x,yt=J.max.y-J.min.y,Dt=J.isBox3?J.max.z-J.min.z:1,Nt=J.min.x,jt=J.min.y,ee=J.isBox3?J.min.z:0;else{const Ae=Math.pow(2,-Y);Ct=Math.floor(Se.width*Ae),yt=Math.floor(Se.height*Ae),I.isDataArrayTexture?Dt=Se.depth:I.isData3DTexture?Dt=Math.floor(Se.depth*Ae):Dt=1,Nt=0,jt=0,ee=0}q!==null?(It=q.x,he=q.y,Le=q.z):(It=0,he=0,Le=0);const ge=_t.convert(k.format),tn=_t.convert(k.type);let At;k.isData3DTexture?(j.setTexture3D(k,0),At=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(j.setTexture2DArray(k,0),At=B.TEXTURE_2D_ARRAY):(j.setTexture2D(k,0),At=B.TEXTURE_2D),P.activeTexture(B.TEXTURE0),P.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const cn=P.getParameter(B.UNPACK_ROW_LENGTH),se=P.getParameter(B.UNPACK_IMAGE_HEIGHT),Rn=P.getParameter(B.UNPACK_SKIP_PIXELS),Zn=P.getParameter(B.UNPACK_SKIP_ROWS),Ii=P.getParameter(B.UNPACK_SKIP_IMAGES);P.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),P.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),P.pixelStorei(B.UNPACK_SKIP_PIXELS,Nt),P.pixelStorei(B.UNPACK_SKIP_ROWS,jt),P.pixelStorei(B.UNPACK_SKIP_IMAGES,ee);const wr=I.isDataArrayTexture||I.isData3DTexture,pe=k.isDataArrayTexture||k.isData3DTexture;if(I.isDepthTexture){const Ae=W.get(I),Li=W.get(k),xe=W.get(Ae.__renderTarget),Ni=W.get(Li.__renderTarget);P.bindFramebuffer(B.READ_FRAMEBUFFER,xe.__webglFramebuffer),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Tr=0;Tr<Dt;Tr++)wr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(I).__webglTexture,Y,ee+Tr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(k).__webglTexture,bt,Le+Tr)),B.blitFramebuffer(Nt,jt,Ct,yt,It,he,Ct,yt,B.DEPTH_BUFFER_BIT,B.NEAREST);P.bindFramebuffer(B.READ_FRAMEBUFFER,null),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||I.isRenderTargetTexture||W.has(I)){const Ae=W.get(I),Li=W.get(k);P.bindFramebuffer(B.READ_FRAMEBUFFER,D),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let xe=0;xe<Dt;xe++)wr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.__webglTexture,Y,ee+xe):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,Y),pe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Li.__webglTexture,bt,Le+xe):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Li.__webglTexture,bt),Y!==0?B.blitFramebuffer(Nt,jt,Ct,yt,It,he,Ct,yt,B.COLOR_BUFFER_BIT,B.NEAREST):pe?B.copyTexSubImage3D(At,bt,It,he,Le+xe,Nt,jt,Ct,yt):B.copyTexSubImage2D(At,bt,It,he,Nt,jt,Ct,yt);P.bindFramebuffer(B.READ_FRAMEBUFFER,null),P.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pe?I.isDataTexture||I.isData3DTexture?B.texSubImage3D(At,bt,It,he,Le,Ct,yt,Dt,ge,tn,Se.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(At,bt,It,he,Le,Ct,yt,Dt,ge,Se.data):B.texSubImage3D(At,bt,It,he,Le,Ct,yt,Dt,ge,tn,Se):I.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,It,he,Ct,yt,ge,tn,Se.data):I.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,It,he,Se.width,Se.height,ge,Se.data):B.texSubImage2D(B.TEXTURE_2D,bt,It,he,Ct,yt,ge,tn,Se);P.pixelStorei(B.UNPACK_ROW_LENGTH,cn),P.pixelStorei(B.UNPACK_IMAGE_HEIGHT,se),P.pixelStorei(B.UNPACK_SKIP_PIXELS,Rn),P.pixelStorei(B.UNPACK_SKIP_ROWS,Zn),P.pixelStorei(B.UNPACK_SKIP_IMAGES,Ii),bt===0&&k.generateMipmaps&&B.generateMipmap(At),P.unbindTexture()},this.initRenderTarget=function(I){W.get(I).__webglFramebuffer===void 0&&j.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?j.setTextureCube(I,0):I.isData3DTexture?j.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?j.setTexture2DArray(I,0):j.setTexture2D(I,0),P.unbindTexture()},this.resetState=function(){F=0,O=0,G=null,P.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Gp=0,hb=1,db=2,Ed=2,Gl=1.25,wd=1,on=32,ze=on/4,Hp=65535,da=Math.pow(2,-24),Bu=Symbol("SKIP_GENERATION"),Vp={strategy:Gp,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Bu]:!1};function Te(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function lu(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const r=n[i+3]-n[i];r>e&&(e=r,t=i)}return t}function Td(n,t){t.set(n)}function Ad(n,t,e){let i,r;for(let s=0;s<3;s++){const o=s+3;i=n[s],r=t[s],e[s]=i<r?i:r,i=n[o],r=t[o],e[o]=i>r?i:r}}function No(n,t,e){for(let i=0;i<3;i++){const r=t[n+2*i],s=t[n+2*i+1],o=r-s,a=r+s;o<e[i]&&(e[i]=o),a>e[i+3]&&(e[i+3]=a)}}function Cs(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}function Re(n,t){return t[n+15]===Hp}function Xe(n,t){return t[n+6]}function an(n,t){return t[n+14]}function ke(n){return n+ze}function Ge(n,t){const e=t[n+6];return n+e*ze}function zu(n,t){return t[n+7]}function Hl(n,t,e,i,r){let s=1/0,o=1/0,a=1/0,u=-1/0,h=-1/0,d=-1/0,p=1/0,m=1/0,g=1/0,S=-1/0,M=-1/0,_=-1/0;const v=n.offset||0;for(let E=(t-v)*6,f=(t+e-v)*6;E<f;E+=6){const c=n[E+0],x=n[E+1],l=c-x,R=c+x;l<s&&(s=l),R>u&&(u=R),c<p&&(p=c),c>S&&(S=c);const y=n[E+2],b=n[E+3],w=y-b,T=y+b;w<o&&(o=w),T>h&&(h=T),y<m&&(m=y),y>M&&(M=y);const A=n[E+4],C=n[E+5],D=A-C,U=A+C;D<a&&(a=D),U>d&&(d=U),A<g&&(g=A),A>_&&(_=A)}i[0]=s,i[1]=o,i[2]=a,i[3]=u,i[4]=h,i[5]=d,r[0]=p,r[1]=m,r[2]=g,r[3]=S,r[4]=M,r[5]=_}const Si=32,fb=(n,t)=>n.candidate-t.candidate,ki=new Array(Si).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Uo=new Float32Array(6);function pb(n,t,e,i,r,s){let o=-1,a=0;if(s===Gp)o=lu(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===hb)o=lu(n),o!==-1&&(a=mb(e,i,r,o));else if(s===db){const u=Cs(n);let h=Gl*r;const d=e.offset||0,p=(i-d)*6,m=(i+r-d)*6;for(let g=0;g<3;g++){const S=t[g],v=(t[g+3]-S)/Si;if(r<Si/4){const E=[...ki];E.length=r;let f=0;for(let x=p;x<m;x+=6,f++){const l=E[f];l.candidate=e[x+2*g],l.count=0;const{bounds:R,leftCacheBounds:y,rightCacheBounds:b}=l;for(let w=0;w<3;w++)b[w]=1/0,b[w+3]=-1/0,y[w]=1/0,y[w+3]=-1/0,R[w]=1/0,R[w+3]=-1/0;No(x,e,R)}E.sort(fb);let c=r;for(let x=0;x<c;x++){const l=E[x];for(;x+1<c&&E[x+1].candidate===l.candidate;)E.splice(x+1,1),c--}for(let x=p;x<m;x+=6){const l=e[x+2*g];for(let R=0;R<c;R++){const y=E[R];l>=y.candidate?No(x,e,y.rightCacheBounds):(No(x,e,y.leftCacheBounds),y.count++)}}for(let x=0;x<c;x++){const l=E[x],R=l.count,y=r-l.count,b=l.leftCacheBounds,w=l.rightCacheBounds;let T=0;R!==0&&(T=Cs(b)/u);let A=0;y!==0&&(A=Cs(w)/u);const C=wd+Gl*(T*R+A*y);C<h&&(o=g,h=C,a=l.candidate)}}else{for(let c=0;c<Si;c++){const x=ki[c];x.count=0,x.candidate=S+v+c*v;const l=x.bounds;for(let R=0;R<3;R++)l[R]=1/0,l[R+3]=-1/0}for(let c=p;c<m;c+=6){let R=~~((e[c+2*g]-S)/v);R>=Si&&(R=Si-1);const y=ki[R];y.count++,No(c,e,y.bounds)}const E=ki[Si-1];Td(E.bounds,E.rightCacheBounds);for(let c=Si-2;c>=0;c--){const x=ki[c],l=ki[c+1];Ad(x.bounds,l.rightCacheBounds,x.rightCacheBounds)}let f=0;for(let c=0;c<Si-1;c++){const x=ki[c],l=x.count,R=x.bounds,b=ki[c+1].rightCacheBounds;l!==0&&(f===0?Td(R,Uo):Ad(R,Uo,Uo)),f+=l;let w=0,T=0;f!==0&&(w=Cs(Uo)/u);const A=r-f;A!==0&&(T=Cs(b)/u);const C=wd+Gl*(w*f+T*A);C<h&&(o=g,h=C,a=x.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function mb(n,t,e,i){let r=0;const s=n.offset;for(let o=t,a=t+e;o<a;o++)r+=n[(o-s)*6+i*2];return r/e}class Vl{constructor(){this.boundingData=new Float32Array(6)}}function gb(n,t,e,i,r,s){let o=i,a=i+r-1;const u=s.pos,h=s.axis*2,d=e.offset||0;for(;;){for(;o<=a&&e[(o-d)*6+h]<u;)o++;for(;o<=a&&e[(a-d)*6+h]>=u;)a--;if(o<a){for(let p=0;p<t;p++){let m=n[o*t+p];n[o*t+p]=n[a*t+p],n[a*t+p]=m}for(let p=0;p<6;p++){const m=o-d,g=a-d,S=e[m*6+p];e[m*6+p]=e[g*6+p],e[g*6+p]=S}o++,a--}else return o}}let $p,fa,cu,Wp;const _b=Math.pow(2,32);function uu(n){return"count"in n?1:1+uu(n.left)+uu(n.right)}function xb(n,t,e){return $p=new Float32Array(e),fa=new Uint32Array(e),cu=new Uint16Array(e),Wp=new Uint8Array(e),hu(n,t)}function hu(n,t){const e=n/4,i=n/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)$p[e+o]=s[o];if(r)return t.buffer?(Wp.set(new Uint8Array(t.buffer),n),n+t.buffer.byteLength):(fa[e+6]=t.offset,cu[i+14]=t.count,cu[i+15]=Hp,n+on);{const{left:o,right:a,splitAxis:u}=t,h=n+on;let d=hu(h,o);const p=n/on,g=d/on-p;if(g>_b)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return fa[e+6]=g,fa[e+7]=u,hu(d,a)}}function vb(n,t,e,i,r,s){const{maxDepth:o,verbose:a,targetLeafSize:u,_strictLeafSize:h=1/0,strategy:d,onProgress:p}=r,m=n.primitiveBuffer,g=n.primitiveBufferStride,S=new Float32Array(6);let M=!1;const _=new Vl;return Hl(t,e,i,_.boundingData,S),E(_,e,i,S),_;function v(f){p&&p((f-s.offset)/s.count)}function E(f,c,x,l=null,R=0){!M&&R>=o&&(M=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));const y=x>h;if(x<=u&&!y||R>=o)return v(c+x),f.offset=c,f.count=x,f;const b=pb(f.boundingData,l,t,c,x,d);let w=b.axis===-1?-1:gb(m,g,t,c,x,b);if(b.axis===-1||w===c||w===c+x){if(!y)return v(c+x),f.offset=c,f.count=x,f;b.axis=Math.max(0,lu(f.boundingData)),w=c+Math.max(1,Math.floor(x/2))}f.splitAxis=b.axis;const T=new Vl,A=c,C=w-c;f.left=T,Hl(t,A,C,T.boundingData,S),E(T,A,C,S,R+1);const D=new Vl,U=w,F=x-C;return f.right=D,Hl(t,U,F,D.boundingData,S),E(D,U,F,S,R+1),f}}function Sb(n,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=n.getRootRanges(t.range),r=i[0],s=i[i.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,n.computePrimitiveBounds(o.offset,o.count,a),n._roots=i.map(u=>{const h=vb(n,a,u.offset,u.count,t,o),d=uu(h),p=new e(on*d);return xb(0,h,p),p})}class ku{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class yb{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=i=>{e&&t.push(e),e=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const Me=new yb;let Yi,os;const Vr=[],Fo=new ku(()=>new fn);function Mb(n,t,e,i,r,s){Yi=Fo.getPrimitive(),os=Fo.getPrimitive(),Vr.push(Yi,os),Me.setBuffer(n._roots[t]);const o=du(0,n.geometry,e,i,r,s);Me.clearBuffer(),Fo.releasePrimitive(Yi),Fo.releasePrimitive(os),Vr.pop(),Vr.pop();const a=Vr.length;return a>0&&(os=Vr[a-1],Yi=Vr[a-2]),o}function du(n,t,e,i,r=null,s=0,o=0){const{float32Array:a,uint16Array:u,uint32Array:h}=Me;let d=n*2;if(Re(d,u)){const S=Xe(n,h),M=an(d,u);return Te(n,a,Yi),i(S,M,!1,o,s+n/ze,Yi)}else{let A=function(D){const{uint16Array:U,uint32Array:F}=Me;let O=D*2;for(;!Re(O,U);)D=ke(D),O=D*2;return Xe(D,F)},C=function(D){const{uint16Array:U,uint32Array:F}=Me;let O=D*2;for(;!Re(O,U);)D=Ge(D,F),O=D*2;return Xe(D,F)+an(O,U)};var m=A,g=C;const S=ke(n),M=Ge(n,h);let _=S,v=M,E,f,c,x;if(r&&(c=Yi,x=os,Te(_,a,c),Te(v,a,x),E=r(c),f=r(x),f<E)){_=M,v=S;const D=E;E=f,f=D,c=x}c||(c=Yi,Te(_,a,c));const l=Re(_*2,u),R=e(c,l,E,o+1,s+_/ze);let y;if(R===Ed){const D=A(_),F=C(_)-D;y=i(D,F,!0,o+1,s+_/ze,c)}else y=R&&du(_,t,e,i,r,s,o+1);if(y)return!0;x=os,Te(v,a,x);const b=Re(v*2,u),w=e(x,b,f,o+1,s+v/ze);let T;if(w===Ed){const D=A(v),F=C(v)-D;T=i(D,F,!0,o+1,s+v/ze,x)}else T=w&&du(v,t,e,i,r,s,o+1);return!!T}}const Hs=new Me.constructor,La=new Me.constructor,Hi=new ku(()=>new fn),$r=new fn,Wr=new fn,$l=new fn,Wl=new fn;let Xl=!1;function bb(n,t,e,i){if(Xl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Xl=!0;const r=n._roots,s=t._roots;let o,a=0,u=0;const h=new ie().copy(e).invert();for(let d=0,p=r.length;d<p;d++){Hs.setBuffer(r[d]),u=0;const m=Hi.getPrimitive();Te(0,Hs.float32Array,m),m.applyMatrix4(h);for(let g=0,S=s.length;g<S&&(La.setBuffer(s[g]),o=Vn(0,0,e,h,i,a,u,0,0,m),La.clearBuffer(),u+=s[g].byteLength/on,!o);g++);if(Hi.releasePrimitive(m),Hs.clearBuffer(),a+=r[d].byteLength/on,o)break}return Xl=!1,o}function Vn(n,t,e,i,r,s=0,o=0,a=0,u=0,h=null,d=!1){let p,m;d?(p=La,m=Hs):(p=Hs,m=La);const g=p.float32Array,S=p.uint32Array,M=p.uint16Array,_=m.float32Array,v=m.uint32Array,E=m.uint16Array,f=n*2,c=t*2,x=Re(f,M),l=Re(c,E);let R=!1;if(l&&x)d?R=r(Xe(t,v),an(t*2,E),Xe(n,S),an(n*2,M),u,o+t/ze,a,s+n/ze):R=r(Xe(n,S),an(n*2,M),Xe(t,v),an(t*2,E),a,s+n/ze,u,o+t/ze);else if(l){const y=Hi.getPrimitive();Te(t,_,y),y.applyMatrix4(e);const b=ke(n),w=Ge(n,S);Te(b,g,$r),Te(w,g,Wr);const T=y.intersectsBox($r),A=y.intersectsBox(Wr);R=T&&Vn(t,b,i,e,r,o,s,u,a+1,y,!d)||A&&Vn(t,w,i,e,r,o,s,u,a+1,y,!d),Hi.releasePrimitive(y)}else{const y=ke(t),b=Ge(t,v);Te(y,_,$l),Te(b,_,Wl);const w=h.intersectsBox($l),T=h.intersectsBox(Wl);if(w&&T)R=Vn(n,y,e,i,r,s,o,a,u+1,h,d)||Vn(n,b,e,i,r,s,o,a,u+1,h,d);else if(w)if(x)R=Vn(n,y,e,i,r,s,o,a,u+1,h,d);else{const A=Hi.getPrimitive();A.copy($l).applyMatrix4(e);const C=ke(n),D=Ge(n,S);Te(C,g,$r),Te(D,g,Wr);const U=A.intersectsBox($r),F=A.intersectsBox(Wr);R=U&&Vn(y,C,i,e,r,o,s,u,a+1,A,!d)||F&&Vn(y,D,i,e,r,o,s,u,a+1,A,!d),Hi.releasePrimitive(A)}else if(T)if(x)R=Vn(n,b,e,i,r,s,o,a,u+1,h,d);else{const A=Hi.getPrimitive();A.copy(Wl).applyMatrix4(e);const C=ke(n),D=Ge(n,S);Te(C,g,$r),Te(D,g,Wr);const U=A.intersectsBox($r),F=A.intersectsBox(Wr);R=U&&Vn(b,C,i,e,r,o,s,u,a+1,A,!d)||F&&Vn(b,D,i,e,r,o,s,u,a+1,A,!d),Hi.releasePrimitive(A)}}return R}const ql=new class{constructor(){let n=null,t=null,e=null,i=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(i)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=n=s._roots[o],this.uint16Array=e=new Uint16Array(n),this.uint32Array=t=new Uint32Array(n)},this.reset=()=>{this.root=null,this.buffer=n=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!Re(o,e);)s=ke(s),o=s*2;return Xe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!Re(o,e);)s=Ge(s,t),o=s*2;return Xe(s,t)+an(o,e)};const r=(s,o,a)=>{const u=o*2,h=Re(u,e);if(!s(a,h,o)&&!h){const p=ke(o),m=Ge(o,t);r(s,p,a+1),r(s,m,a+1)}};this.traverseBuffer=s=>{if(i)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");i=!0;try{r(s,0,0)}finally{i=!1}},this.traverse=s=>{this.traverseBuffer((o,a,u)=>{if(a){const h=u*2,d=t[u+6],p=e[h+14];return s(o,a,new Float32Array(n,u*4,6),d,p)}else{const h=zu(u,t);return s(o,a,new Float32Array(n,u*4,6),h)}})}}},Cd=new fn,Xr=new Float32Array(6);class Eb{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Vp,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Sb(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,i,r){let s=1/0,o=1/0,a=1/0,u=-1/0,h=-1/0,d=-1/0;for(let p=t,m=t+e;p<m;p++){this.writePrimitiveBounds(p,Xr,0);const[g,S,M,_,v,E]=Xr;g<s&&(s=g),_>u&&(u=_),S<o&&(o=S),v>h&&(h=v),M<a&&(a=M),E>d&&(d=E)}return i[r+0]=s,i[r+1]=o,i[r+2]=a,i[r+3]=u,i[r+4]=h,i[r+5]=d,i}computePrimitiveBounds(t,e,i){const r=i.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,Xr,0);const[a,u,h,d,p,m]=Xr,g=(a+d)/2,S=(u+p)/2,M=(h+m)/2,_=(d-a)/2,v=(p-u)/2,E=(m-h)/2,f=(s-r)*6;i[f+0]=g,i[f+1]=_+(Math.abs(g)+_)*da,i[f+2]=S,i[f+3]=v+(Math.abs(S)+v)*da,i[f+4]=M,i[f+5]=E+(Math.abs(M)+E)*da}return i}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let i=0,r=e.length;i<r;i++)e[i]+=t;else{const i=this._roots;for(let r=0;r<i.length;r++){const s=i[r],o=new Uint32Array(s),a=new Uint16Array(s),u=s.byteLength/on;for(let h=0;h<u;h++){const d=ze*h,p=2*d;Re(p,a)&&(o[d+6]+=t)}}}}traverse(t,e=0){ql.setBVH(this,e),ql.traverse(t),ql.reset()}refit(){const t=this._roots;for(let e=0,i=t.length;e<i;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),u=r.byteLength/on;for(let h=u-1;h>=0;h--){const d=h*ze,p=d*2;if(Re(p,o)){const g=Xe(d,s),S=an(p,o);this.writePrimitiveRangeBounds(g,S,Xr,0),a.set(Xr,d)}else{const g=ke(d),S=Ge(d,s);for(let M=0;M<3;M++){const _=a[g+M],v=a[g+M+3],E=a[S+M],f=a[S+M+3];a[d+M]=_<E?_:E,a[d+M+3]=v>f?v:f}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{Te(0,new Float32Array(i),Cd),t.union(Cd)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:i,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const p=r;r=(m,g,S,M,_)=>p(m,g,S,M,_)?!0:a(m,g,this,s,S,M,o)}else r||(s?r=(p,m,g,S)=>a(p,m,this,s,g,S,o):r=(p,m,g)=>g);let u=!1,h=0;const d=this._roots;for(let p=0,m=d.length;p<m;p++){const g=d[p];if(u=Mb(this,p,i,r,e,h),u)break;h+=g.byteLength/on}return u}bvhcast(t,e,i){let{intersectsRanges:r}=i;return bb(this,t,e,r)}}function wb(){return typeof SharedArrayBuffer<"u"}function Gu(n){return n.index?n.index.count:n.attributes.position.count}function Ya(n){return Gu(n)/3}function Tb(n,t=ArrayBuffer){return n>65535?new Uint32Array(new t(4*n)):new Uint16Array(new t(2*n))}function Ab(n,t){if(!n.index){const e=n.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Tb(e,i);n.setIndex(new Tn(r,1));for(let s=0;s<e;s++)r[s]=s}}function Cb(n,t,e){const i=Gu(n)/e,r=t||n.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),u=Math.min(i,o)-a;return{offset:Math.floor(a),count:Math.floor(u)}}function Rb(n,t){return n.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Rd(n,t,e){const i=Cb(n,t,e),r=Rb(n,e);if(!r.length)return[i];const s=[],o=i.offset,a=i.offset+i.count,u=Gu(n)/e,h=[];for(const m of r){const{offset:g,count:S}=m,M=g,_=isFinite(S)?S:u-g,v=g+_;M<a&&v>o&&(h.push({pos:Math.max(o,M),isStart:!0}),h.push({pos:Math.min(a,v),isStart:!1}))}h.sort((m,g)=>m.pos!==g.pos?m.pos-g.pos:m.type==="end"?-1:1);let d=0,p=null;for(const m of h){const g=m.pos;d!==0&&g!==p&&s.push({offset:p,count:g-p}),d+=m.isStart?1:-1,p=g}return s}function Pb(n,t){const e=n[n.length-1],i=e.offset+e.count>2**16,r=n.reduce((h,d)=>h+d.count,0),s=i?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=i?new Uint32Array(o):new Uint16Array(o);let u=0;for(let h=0;h<n.length;h++){const{offset:d,count:p}=n[h];for(let m=0;m<p;m++)a[u+m]=d+m;u+=p}return a}class Db extends Eb{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!wb())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?i=>this._indirectBuffer[i]:i=>i,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Vp,...e},e[Bu]||this.init(e)}init(t){const{geometry:e,primitiveStride:i}=this;if(t.indirect){const r=Rd(e,t.range,i),s=Pb(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Ab(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new fn))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Rd(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Pi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const u=t[s][e];i=u<i?u:i,r=u>r?u:r}this.min=i,this.max=r}setFromPoints(t,e){let i=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],u=t.dot(a);i=u<i?u:i,r=u>r?u:r}this.min=i,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Pi.prototype.setFromBox=(function(){const n=new N;return function(e,i){const r=i.min,s=i.max;let o=1/0,a=-1/0;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){n.x=r.x*u+s.x*(1-u),n.y=r.y*h+s.y*(1-h),n.z=r.z*d+s.z*(1-d);const p=e.dot(n);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();const Ib=(function(){const n=new N,t=new N,e=new N;return function(r,s,o){const a=r.start,u=n,h=s.start,d=t;e.subVectors(a,h),n.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const p=e.dot(d),m=d.dot(u),g=d.dot(d),S=e.dot(u),_=u.dot(u)*g-m*m;let v,E;_!==0?v=(p*m-S*g)/_:v=0,E=(p+v*m)/g,o.x=v,o.y=E}})(),Hu=(function(){const n=new kt,t=new N,e=new N;return function(r,s,o,a){Ib(r,s,n);let u=n.x,h=n.y;if(u>=0&&u<=1&&h>=0&&h<=1){r.at(u,o),s.at(h,a);return}else if(u>=0&&u<=1){h<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let d;u<0?d=r.start:d=r.end;let p;h<0?p=s.start:p=s.end;const m=t,g=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(d,!0,e),m.distanceToSquared(p)<=g.distanceToSquared(d)){o.copy(m),a.copy(p);return}else{o.copy(d),a.copy(g);return}}}})(),Lb=(function(){const n=new N,t=new N,e=new bn,i=new Ze;return function(s,o){const{radius:a,center:u}=s,{a:h,b:d,c:p}=o;if(i.start=h,i.end=d,i.closestPointToPoint(u,!0,n).distanceTo(u)<=a||(i.start=h,i.end=p,i.closestPointToPoint(u,!0,n).distanceTo(u)<=a)||(i.start=d,i.end=p,i.closestPointToPoint(u,!0,n).distanceTo(u)<=a))return!0;const M=o.getPlane(e);if(Math.abs(M.distanceToPoint(u))<=a){const v=M.projectPoint(u,t);if(o.containsPoint(v))return!0}return!1}})(),Nb=["x","y","z"],Mi=1e-15,Pd=Mi*Mi;function Dn(n){return Math.abs(n)<Mi}class vn extends ye{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new N),this.satBounds=new Array(4).fill().map(()=>new Pi),this.points=[this.a,this.b,this.c],this.plane=new bn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ze,this.needsUpdate=!0}intersectsSphere(t){return Lb(t,this)}update(){const t=this.a,e=this.b,i=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],u=o[0];this.getNormal(a),u.setFromPoints(a,r);const h=s[1],d=o[1];h.subVectors(t,e),d.setFromPoints(h,r);const p=s[2],m=o[2];p.subVectors(e,i),m.setFromPoints(p,r);const g=s[3],S=o[3];g.subVectors(i,t),S.setFromPoints(g,r);const M=h.length(),_=p.length(),v=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,M<Mi?_<Mi||v<Mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(i)):_<Mi?v<Mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):v<Mi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(i),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}vn.prototype.closestPointToSegment=(function(){const n=new N,t=new N,e=new Ze;return function(r,s=null,o=null){const{start:a,end:u}=r,h=this.points;let d,p=1/0;for(let m=0;m<3;m++){const g=(m+1)%3;e.start.copy(h[m]),e.end.copy(h[g]),Hu(e,r,n,t),d=n.distanceToSquared(t),d<p&&(p=d,s&&s.copy(n),o&&o.copy(t))}return this.closestPointToPoint(a,n),d=a.distanceToSquared(n),d<p&&(p=d,s&&s.copy(n),o&&o.copy(a)),this.closestPointToPoint(u,n),d=u.distanceToSquared(n),d<p&&(p=d,s&&s.copy(n),o&&o.copy(u)),Math.sqrt(p)}})();vn.prototype.intersectsTriangle=(function(){const n=new vn,t=new Pi,e=new Pi,i=new N,r=new N,s=new N,o=new N,a=new Ze,u=new Ze,h=new N,d=new kt,p=new kt;function m(f,c,x,l){const R=i;!f.isDegenerateIntoPoint&&!f.isDegenerateIntoSegment?R.copy(f.plane.normal):R.copy(c.plane.normal);const y=f.satBounds,b=f.satAxes;for(let A=1;A<4;A++){const C=y[A],D=b[A];if(t.setFromPoints(D,c.points),C.isSeparated(t)||(o.copy(R).cross(D),t.setFromPoints(o,f.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}const w=c.satBounds,T=c.satAxes;for(let A=1;A<4;A++){const C=w[A],D=T[A];if(t.setFromPoints(D,f.points),C.isSeparated(t)||(o.crossVectors(R,D),t.setFromPoints(o,f.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return x&&(l||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}function g(f,c,x,l,R,y,b,w,T,A,C){let D=b/(b-w);A.x=l+(R-l)*D,C.start.subVectors(c,f).multiplyScalar(D).add(f),D=b/(b-T),A.y=l+(y-l)*D,C.end.subVectors(x,f).multiplyScalar(D).add(f)}function S(f,c,x,l,R,y,b,w,T,A,C){if(R>0)g(f.c,f.a,f.b,l,c,x,T,b,w,A,C);else if(y>0)g(f.b,f.a,f.c,x,c,l,w,b,T,A,C);else if(w*T>0||b!=0)g(f.a,f.b,f.c,c,x,l,b,w,T,A,C);else if(w!=0)g(f.b,f.a,f.c,x,c,l,w,b,T,A,C);else if(T!=0)g(f.c,f.a,f.b,l,c,x,T,b,w,A,C);else return!0;return!1}function M(f,c,x,l){const R=c.degenerateSegment,y=f.plane.distanceToPoint(R.start),b=f.plane.distanceToPoint(R.end);return Dn(y)?Dn(b)?m(f,c,x,l):(x&&(x.start.copy(R.start),x.end.copy(R.start)),f.containsPoint(R.start)):Dn(b)?(x&&(x.start.copy(R.end),x.end.copy(R.end)),f.containsPoint(R.end)):f.plane.intersectLine(R,i)!=null?(x&&(x.start.copy(i),x.end.copy(i)),f.containsPoint(i)):!1}function _(f,c,x){const l=c.a;return Dn(f.plane.distanceToPoint(l))&&f.containsPoint(l)?(x&&(x.start.copy(l),x.end.copy(l)),!0):!1}function v(f,c,x){const l=f.degenerateSegment,R=c.a;return l.closestPointToPoint(R,!0,i),R.distanceToSquared(i)<Pd?(x&&(x.start.copy(R),x.end.copy(R)),!0):!1}function E(f,c,x,l){if(f.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){const R=f.degenerateSegment,y=c.degenerateSegment,b=r,w=s;R.delta(b),y.delta(w);const T=i.subVectors(y.start,R.start),A=b.x*w.y-b.y*w.x;if(Dn(A))return!1;const C=(T.x*w.y-T.y*w.x)/A,D=-(b.x*T.y-b.y*T.x)/A;if(C<0||C>1||D<0||D>1)return!1;const U=R.start.z+b.z*C,F=y.start.z+w.z*D;return Dn(U-F)?(x&&(x.start.copy(R.start).addScaledVector(b,C),x.end.copy(R.start).addScaledVector(b,C)),!0):!1}else return c.isDegenerateIntoPoint?v(f,c,x):M(c,f,x,l);else{if(f.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(f.a)<Pd?(x&&(x.start.copy(f.a),x.end.copy(f.a)),!0):!1:c.isDegenerateIntoSegment?v(c,f,x):_(c,f,x);if(c.isDegenerateIntoPoint)return _(f,c,x);if(c.isDegenerateIntoSegment)return M(f,c,x,l)}}return function(c,x=null,l=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(n.copy(c),n.update(),c=n);const R=E(this,c,x,l);if(R!==void 0)return R;const y=this.plane,b=c.plane;let w=b.distanceToPoint(this.a),T=b.distanceToPoint(this.b),A=b.distanceToPoint(this.c);Dn(w)&&(w=0),Dn(T)&&(T=0),Dn(A)&&(A=0);const C=w*T,D=w*A;if(C>0&&D>0)return!1;let U=y.distanceToPoint(c.a),F=y.distanceToPoint(c.b),O=y.distanceToPoint(c.c);Dn(U)&&(U=0),Dn(F)&&(F=0),Dn(O)&&(O=0);const G=U*F,z=U*O;if(G>0&&z>0)return!1;r.copy(y.normal),s.copy(b.normal);const $=r.cross(s);let Z=0,ot=Math.abs($.x);const lt=Math.abs($.y);lt>ot&&(ot=lt,Z=1),Math.abs($.z)>ot&&(Z=2);const ut=Nb[Z],Mt=this.a[ut],X=this.b[ut],K=this.c[ut],st=c.a[ut],dt=c.b[ut],ct=c.c[ut];if(S(this,Mt,X,K,C,D,w,T,A,d,a))return m(this,c,x,l);if(S(c,st,dt,ct,G,z,U,F,O,p,u))return m(this,c,x,l);if(d.y<d.x){const zt=d.y;d.y=d.x,d.x=zt,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(p.y<p.x){const zt=p.y;p.y=p.x,p.x=zt,h.copy(u.start),u.start.copy(u.end),u.end.copy(h)}return d.y<p.x||p.y<d.x?!1:(x&&(p.x>d.x?x.start.copy(u.start):x.start.copy(a.start),p.y<d.y?x.end.copy(u.end):x.end.copy(a.end)),!0)}})();vn.prototype.distanceToPoint=(function(){const n=new N;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}})();vn.prototype.distanceToTriangle=(function(){const n=new N,t=new N,e=["a","b","c"],i=new Ze,r=new Ze;return function(o,a=null,u=null){const h=a||u?i:null;if(this.intersectsTriangle(o,h,!0))return(a||u)&&(a&&h.getCenter(a),u&&h.getCenter(u)),0;let d=1/0;for(let p=0;p<3;p++){let m;const g=e[p],S=o[g];this.closestPointToPoint(S,n),m=S.distanceToSquared(n),m<d&&(d=m,a&&a.copy(n),u&&u.copy(S));const M=this[g];o.closestPointToPoint(M,n),m=M.distanceToSquared(n),m<d&&(d=m,a&&a.copy(M),u&&u.copy(n))}for(let p=0;p<3;p++){const m=e[p],g=e[(p+1)%3];i.set(this[m],this[g]);for(let S=0;S<3;S++){const M=e[S],_=e[(S+1)%3];r.set(o[M],o[_]),Hu(i,r,n,t);const v=n.distanceToSquared(t);v<d&&(d=v,a&&a.copy(n),u&&u.copy(t))}}return Math.sqrt(d)}})();class pn{constructor(t,e,i){this.isOrientedBox=!0,this.min=new N,this.max=new N,this.matrix=new ie,this.invMatrix=new ie,this.points=new Array(8).fill().map(()=>new N),this.satAxes=new Array(3).fill().map(()=>new N),this.satBounds=new Array(3).fill().map(()=>new Pi),this.alignedSatBounds=new Array(3).fill().map(()=>new Pi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}pn.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,i=this.max,r=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let p=0;p<=1;p++){const m=1*h|2*d|4*p,g=r[m];g.x=h?i.x:e.x,g.y=d?i.y:e.y,g.z=p?i.z:e.z,g.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let h=0;h<3;h++){const d=o[h],p=s[h],m=1<<h,g=r[m];d.subVectors(a,g),p.setFromPoints(d,r)}const u=this.alignedSatBounds;u[0].setFromPointsField(r,"x"),u[1].setFromPointsField(r,"y"),u[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();pn.prototype.intersectsBox=(function(){const n=new Pi;return function(e){this.needsUpdate&&this.update();const i=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(n.min=i.x,n.max=r.x,a[0].isSeparated(n)||(n.min=i.y,n.max=r.y,a[1].isSeparated(n))||(n.min=i.z,n.max=r.z,a[2].isSeparated(n)))return!1;for(let u=0;u<3;u++){const h=o[u],d=s[u];if(n.setFromBox(h,e),d.isSeparated(n))return!1}return!0}})();pn.prototype.intersectsTriangle=(function(){const n=new vn,t=new Array(3),e=new Pi,i=new Pi,r=new N;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(n.copy(o),n.update(),o=n);const a=this.satBounds,u=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let m=0;m<3;m++){const g=a[m],S=u[m];if(e.setFromPoints(S,t),g.isSeparated(e))return!1}const h=o.satBounds,d=o.satAxes,p=this.points;for(let m=0;m<3;m++){const g=h[m],S=d[m];if(e.setFromPoints(S,p),g.isSeparated(e))return!1}for(let m=0;m<3;m++){const g=u[m];for(let S=0;S<4;S++){const M=d[S];if(r.crossVectors(g,M),e.setFromPoints(r,t),i.setFromPoints(r,p),e.isSeparated(i))return!1}}return!0}})();pn.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();pn.prototype.distanceToPoint=(function(){const n=new N;return function(e){return this.closestPointToPoint(e,n),e.distanceTo(n)}})();pn.prototype.distanceToBox=(function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new Ze),e=new Array(12).fill().map(()=>new Ze),i=new N,r=new N;return function(o,a=0,u=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(u||h)&&(o.getCenter(r),this.closestPointToPoint(r,i),o.closestPointToPoint(i,r),u&&u.copy(i),h&&h.copy(r)),0;const d=a*a,p=o.min,m=o.max,g=this.points;let S=1/0;for(let _=0;_<8;_++){const v=g[_];r.copy(v).clamp(p,m);const E=v.distanceToSquared(r);if(E<S&&(S=E,u&&u.copy(v),h&&h.copy(r),E<d))return Math.sqrt(E)}let M=0;for(let _=0;_<3;_++)for(let v=0;v<=1;v++)for(let E=0;E<=1;E++){const f=(_+1)%3,c=(_+2)%3,x=v<<f|E<<c,l=1<<_|v<<f|E<<c,R=g[x],y=g[l];t[M].set(R,y);const w=n[_],T=n[f],A=n[c],C=e[M],D=C.start,U=C.end;D[w]=p[w],D[T]=v?p[T]:m[T],D[A]=E?p[A]:m[T],U[w]=m[w],U[T]=v?p[T]:m[T],U[A]=E?p[A]:m[T],M++}for(let _=0;_<=1;_++)for(let v=0;v<=1;v++)for(let E=0;E<=1;E++){r.x=_?m.x:p.x,r.y=v?m.y:p.y,r.z=E?m.z:p.z,this.closestPointToPoint(r,i);const f=r.distanceToSquared(i);if(f<S&&(S=f,u&&u.copy(i),h&&h.copy(r),f<d))return Math.sqrt(f)}for(let _=0;_<12;_++){const v=t[_];for(let E=0;E<12;E++){const f=e[E];Hu(v,f,i,r);const c=i.distanceToSquared(r);if(c<S&&(S=c,u&&u.copy(i),h&&h.copy(r),c<d))return Math.sqrt(c)}}return Math.sqrt(S)}})();class Ub extends ku{constructor(){super(()=>new vn)}}const Fn=new Ub,Rs=new N,Yl=new N;function Fb(n,t,e={},i=0,r=1/0){const s=i*i,o=r*r;let a=1/0,u=null;if(n.shapecast({boundsTraverseOrder:d=>(Rs.copy(t).clamp(d.min,d.max),Rs.distanceToSquared(t)),intersectsBounds:(d,p,m)=>m<a&&m<o,intersectsTriangle:(d,p)=>{d.closestPointToPoint(t,Rs);const m=t.distanceToSquared(Rs);return m<a&&(Yl.copy(Rs),a=m,u=p),m<s}}),a===1/0)return null;const h=Math.sqrt(a);return e.point?e.point.copy(Yl):e.point=Yl.clone(),e.distance=h,e.faceIndex=u,e}const Oo=parseInt(no)>=169,Ob=parseInt(no)<=161,cr=new N,ur=new N,hr=new N,Bo=new kt,zo=new kt,ko=new kt,Dd=new N,Id=new N,Ld=new N,Ps=new N;function Bb(n,t,e,i,r,s,o,a){let u;if(s===hn?u=n.intersectTriangle(i,e,t,!0,r):u=n.intersectTriangle(t,e,i,s!==$n,r),u===null)return null;const h=n.origin.distanceTo(r);return h<o||h>a?null:{distance:h,point:r.clone()}}function Nd(n,t,e,i,r,s,o,a,u,h,d){cr.fromBufferAttribute(t,s),ur.fromBufferAttribute(t,o),hr.fromBufferAttribute(t,a);const p=Bb(n,cr,ur,hr,Ps,u,h,d);if(p){if(i){Bo.fromBufferAttribute(i,s),zo.fromBufferAttribute(i,o),ko.fromBufferAttribute(i,a),p.uv=new kt;const g=ye.getInterpolation(Ps,cr,ur,hr,Bo,zo,ko,p.uv);Oo||(p.uv=g)}if(r){Bo.fromBufferAttribute(r,s),zo.fromBufferAttribute(r,o),ko.fromBufferAttribute(r,a),p.uv1=new kt;const g=ye.getInterpolation(Ps,cr,ur,hr,Bo,zo,ko,p.uv1);Oo||(p.uv1=g),Ob&&(p.uv2=p.uv1)}if(e){Dd.fromBufferAttribute(e,s),Id.fromBufferAttribute(e,o),Ld.fromBufferAttribute(e,a),p.normal=new N;const g=ye.getInterpolation(Ps,cr,ur,hr,Dd,Id,Ld,p.normal);p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1),Oo||(p.normal=g)}const m={a:s,b:o,c:a,normal:new N,materialIndex:0};if(ye.getNormal(cr,ur,hr,m.normal),p.face=m,p.faceIndex=s,Oo){const g=new N;ye.getBarycoord(Ps,cr,ur,hr,g),p.barycoord=g}}return p}function Ud(n){return n&&n.isMaterial?n.side:n}function Za(n,t,e,i,r,s,o){const a=i*3;let u=a+0,h=a+1,d=a+2;const{index:p,groups:m}=n;n.index&&(u=p.getX(u),h=p.getX(h),d=p.getX(d));const{position:g,normal:S,uv:M,uv1:_}=n.attributes;if(Array.isArray(t)){const v=i*3;for(let E=0,f=m.length;E<f;E++){const{start:c,count:x,materialIndex:l}=m[E];if(v>=c&&v<c+x){const R=Ud(t[l]),y=Nd(e,g,S,M,_,u,h,d,R,s,o);if(y)if(y.faceIndex=i,y.face.materialIndex=l,r)r.push(y);else return y}}}else{const v=Ud(t),E=Nd(e,g,S,M,_,u,h,d,v,s,o);if(E)if(E.faceIndex=i,E.face.materialIndex=0,r)r.push(E);else return E}return null}function Fe(n,t,e,i){const r=n.a,s=n.b,o=n.c;let a=t,u=t+1,h=t+2;e&&(a=e.getX(a),u=e.getX(u),h=e.getX(h)),r.x=i.getX(a),r.y=i.getY(a),r.z=i.getZ(a),s.x=i.getX(u),s.y=i.getY(u),s.z=i.getZ(u),o.x=i.getX(h),o.y=i.getY(h),o.z=i.getZ(h)}function zb(n,t,e,i,r,s,o,a){const{geometry:u,_indirectBuffer:h}=n;for(let d=i,p=i+r;d<p;d++)Za(u,t,e,d,s,o,a)}function kb(n,t,e,i,r,s,o){const{geometry:a,_indirectBuffer:u}=n;let h=1/0,d=null;for(let p=i,m=i+r;p<m;p++){let g;g=Za(a,t,e,p,null,s,o),g&&g.distance<h&&(d=g,h=g.distance)}return d}function Gb(n,t,e,i,r,s,o){const{geometry:a}=e,{index:u}=a,h=a.attributes.position;for(let d=n,p=t+n;d<p;d++){let m;if(m=d,Fe(o,m*3,u,h),o.needsUpdate=!0,i(o,m,r,s))return!0}return!1}function Hb(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,u,h=0;const d=n._roots;for(let m=0,g=d.length;m<g;m++)s=d[m],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),p(0,h),h+=s.byteLength;function p(m,g,S=!1){const M=m*2;if(Re(M,a)){const _=Xe(m,o),v=an(M,a);let E=1/0,f=1/0,c=1/0,x=-1/0,l=-1/0,R=-1/0;for(let y=3*_,b=3*(_+v);y<b;y++){let w=i[y];const T=r.getX(w),A=r.getY(w),C=r.getZ(w);T<E&&(E=T),T>x&&(x=T),A<f&&(f=A),A>l&&(l=A),C<c&&(c=C),C>R&&(R=C)}return u[m+0]!==E||u[m+1]!==f||u[m+2]!==c||u[m+3]!==x||u[m+4]!==l||u[m+5]!==R?(u[m+0]=E,u[m+1]=f,u[m+2]=c,u[m+3]=x,u[m+4]=l,u[m+5]=R,!0):!1}else{const _=ke(m),v=Ge(m,o);let E=S,f=!1,c=!1;if(t){if(!E){const w=_/ze+g/on,T=v/ze+g/on;f=t.has(w),c=t.has(T),E=!f&&!c}}else f=!0,c=!0;const x=E||f,l=E||c;let R=!1;x&&(R=p(_,g,E));let y=!1;l&&(y=p(v,g,E));const b=R||y;if(b)for(let w=0;w<3;w++){const T=_+w,A=v+w,C=u[T],D=u[T+3],U=u[A],F=u[A+3];u[m+w]=C<U?C:U,u[m+w+3]=D>F?D:F}return b}}}function Qi(n,t,e,i,r){let s,o,a,u,h,d;const p=1/e.direction.x,m=1/e.direction.y,g=1/e.direction.z,S=e.origin.x,M=e.origin.y,_=e.origin.z;let v=t[n],E=t[n+3],f=t[n+1],c=t[n+3+1],x=t[n+2],l=t[n+3+2];return p>=0?(s=(v-S)*p,o=(E-S)*p):(s=(E-S)*p,o=(v-S)*p),m>=0?(a=(f-M)*m,u=(c-M)*m):(a=(c-M)*m,u=(f-M)*m),s>u||a>o||((a>s||isNaN(s))&&(s=a),(u<o||isNaN(o))&&(o=u),g>=0?(h=(x-_)*g,d=(l-_)*g):(h=(l-_)*g,d=(x-_)*g),s>d||h>o)?!1:((h>s||s!==s)&&(s=h),(d<o||o!==o)&&(o=d),s<=r&&o>=i)}function Vb(n,t,e,i,r,s,o,a){const{geometry:u,_indirectBuffer:h}=n;for(let d=i,p=i+r;d<p;d++){let m=h?h[d]:d;Za(u,t,e,m,s,o,a)}}function $b(n,t,e,i,r,s,o){const{geometry:a,_indirectBuffer:u}=n;let h=1/0,d=null;for(let p=i,m=i+r;p<m;p++){let g;g=Za(a,t,e,u?u[p]:p,null,s,o),g&&g.distance<h&&(d=g,h=g.distance)}return d}function Wb(n,t,e,i,r,s,o){const{geometry:a}=e,{index:u}=a,h=a.attributes.position;for(let d=n,p=t+n;d<p;d++){let m;if(m=e.resolveTriangleIndex(d),Fe(o,m*3,u,h),o.needsUpdate=!0,i(o,m,r,s))return!0}return!1}function Xb(n,t,e,i,r,s,o){Me.setBuffer(n._roots[t]),fu(0,n,e,i,r,s,o),Me.clearBuffer()}function fu(n,t,e,i,r,s,o){const{float32Array:a,uint16Array:u,uint32Array:h}=Me,d=n*2;if(Re(d,u)){const m=Xe(n,h),g=an(d,u);zb(t,e,i,m,g,r,s,o)}else{const m=ke(n);Qi(m,a,i,s,o)&&fu(m,t,e,i,r,s,o);const g=Ge(n,h);Qi(g,a,i,s,o)&&fu(g,t,e,i,r,s,o)}}const qb=["x","y","z"];function Yb(n,t,e,i,r,s){Me.setBuffer(n._roots[t]);const o=pu(0,n,e,i,r,s);return Me.clearBuffer(),o}function pu(n,t,e,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:u}=Me;let h=n*2;if(Re(h,a)){const p=Xe(n,u),m=an(h,a);return kb(t,e,i,p,m,r,s)}else{const p=zu(n,u),m=qb[p],S=i.direction[m]>=0;let M,_;S?(M=ke(n),_=Ge(n,u)):(M=Ge(n,u),_=ke(n));const E=Qi(M,o,i,r,s)?pu(M,t,e,i,r,s):null;if(E){const x=E.point[m];if(S?x<=o[_+p]:x>=o[_+p+3])return E}const c=Qi(_,o,i,r,s)?pu(_,t,e,i,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const Go=new fn,qr=new vn,Yr=new vn,Ds=new ie,Fd=new pn,Ho=new pn;function Zb(n,t,e,i){Me.setBuffer(n._roots[t]);const r=mu(0,n,e,i);return Me.clearBuffer(),r}function mu(n,t,e,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=Me;let u=n*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Fd.set(e.boundingBox.min,e.boundingBox.max,i),r=Fd),Re(u,o)){const d=t.geometry,p=d.index,m=d.attributes.position,g=e.index,S=e.attributes.position,M=Xe(n,a),_=an(u,o);if(Ds.copy(i).invert(),e.boundsTree)return Te(n,s,Ho),Ho.matrix.copy(Ds),Ho.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Ho.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(i),E.b.applyMatrix4(i),E.c.applyMatrix4(i),E.needsUpdate=!0;for(let f=M*3,c=(_+M)*3;f<c;f+=3)if(Fe(Yr,f,p,m),Yr.needsUpdate=!0,E.intersectsTriangle(Yr))return!0;return!1}});{const v=Ya(e);for(let E=M*3,f=(_+M)*3;E<f;E+=3){Fe(qr,E,p,m),qr.a.applyMatrix4(Ds),qr.b.applyMatrix4(Ds),qr.c.applyMatrix4(Ds),qr.needsUpdate=!0;for(let c=0,x=v*3;c<x;c+=3)if(Fe(Yr,c,g,S),Yr.needsUpdate=!0,qr.intersectsTriangle(Yr))return!0}}}else{const d=ke(n),p=Ge(n,a);return Te(d,s,Go),!!(r.intersectsBox(Go)&&mu(d,t,e,i,r)||(Te(p,s,Go),r.intersectsBox(Go)&&mu(p,t,e,i,r)))}}const Vo=new ie,Zl=new pn,Is=new pn,Kb=new N,Jb=new N,jb=new N,Qb=new N;function t1(n,t,e,i={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Zl.set(t.boundingBox.min,t.boundingBox.max,e),Zl.needsUpdate=!0;const a=n.geometry,u=a.attributes.position,h=a.index,d=t.attributes.position,p=t.index,m=Fn.getPrimitive(),g=Fn.getPrimitive();let S=Kb,M=Jb,_=null,v=null;r&&(_=jb,v=Qb);let E=1/0,f=null,c=null;return Vo.copy(e).invert(),Is.matrix.copy(Vo),n.shapecast({boundsTraverseOrder:x=>Zl.distanceToBox(x),intersectsBounds:(x,l,R)=>R<E&&R<o?(l&&(Is.min.copy(x.min),Is.max.copy(x.max),Is.needsUpdate=!0),!0):!1,intersectsRange:(x,l)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:y=>Is.distanceToBox(y),intersectsBounds:(y,b,w)=>w<E&&w<o,intersectsRange:(y,b)=>{for(let w=y,T=y+b;w<T;w++){Fe(g,3*w,p,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let A=x,C=x+l;A<C;A++){Fe(m,3*A,h,u),m.needsUpdate=!0;const D=m.distanceToTriangle(g,S,_);if(D<E&&(M.copy(S),v&&v.copy(_),E=D,f=A,c=w),D<s)return!0}}}});{const R=Ya(t);for(let y=0,b=R;y<b;y++){Fe(g,3*y,p,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let w=x,T=x+l;w<T;w++){Fe(m,3*w,h,u),m.needsUpdate=!0;const A=m.distanceToTriangle(g,S,_);if(A<E&&(M.copy(S),v&&v.copy(_),E=A,f=w,c=y),A<s)return!0}}}}}),Fn.releasePrimitive(m),Fn.releasePrimitive(g),E===1/0?null:(i.point?i.point.copy(M):i.point=M.clone(),i.distance=E,i.faceIndex=f,r&&(r.point?r.point.copy(v):r.point=v.clone(),r.point.applyMatrix4(Vo),M.applyMatrix4(Vo),r.distance=M.sub(r.point).length(),r.faceIndex=c),i)}function e1(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,u,h=0;const d=n._roots;for(let m=0,g=d.length;m<g;m++)s=d[m],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),p(0,h),h+=s.byteLength;function p(m,g,S=!1){const M=m*2;if(Re(M,a)){const _=Xe(m,o),v=an(M,a);let E=1/0,f=1/0,c=1/0,x=-1/0,l=-1/0,R=-1/0;for(let y=_,b=_+v;y<b;y++){const w=3*n.resolveTriangleIndex(y);for(let T=0;T<3;T++){let A=w+T;A=i?i[A]:A;const C=r.getX(A),D=r.getY(A),U=r.getZ(A);C<E&&(E=C),C>x&&(x=C),D<f&&(f=D),D>l&&(l=D),U<c&&(c=U),U>R&&(R=U)}}return u[m+0]!==E||u[m+1]!==f||u[m+2]!==c||u[m+3]!==x||u[m+4]!==l||u[m+5]!==R?(u[m+0]=E,u[m+1]=f,u[m+2]=c,u[m+3]=x,u[m+4]=l,u[m+5]=R,!0):!1}else{const _=ke(m),v=Ge(m,o);let E=S,f=!1,c=!1;if(t){if(!E){const w=_/ze+g/on,T=v/ze+g/on;f=t.has(w),c=t.has(T),E=!f&&!c}}else f=!0,c=!0;const x=E||f,l=E||c;let R=!1;x&&(R=p(_,g,E));let y=!1;l&&(y=p(v,g,E));const b=R||y;if(b)for(let w=0;w<3;w++){const T=_+w,A=v+w,C=u[T],D=u[T+3],U=u[A],F=u[A+3];u[m+w]=C<U?C:U,u[m+w+3]=D>F?D:F}return b}}}function n1(n,t,e,i,r,s,o){Me.setBuffer(n._roots[t]),gu(0,n,e,i,r,s,o),Me.clearBuffer()}function gu(n,t,e,i,r,s,o){const{float32Array:a,uint16Array:u,uint32Array:h}=Me,d=n*2;if(Re(d,u)){const m=Xe(n,h),g=an(d,u);Vb(t,e,i,m,g,r,s,o)}else{const m=ke(n);Qi(m,a,i,s,o)&&gu(m,t,e,i,r,s,o);const g=Ge(n,h);Qi(g,a,i,s,o)&&gu(g,t,e,i,r,s,o)}}const i1=["x","y","z"];function r1(n,t,e,i,r,s){Me.setBuffer(n._roots[t]);const o=_u(0,n,e,i,r,s);return Me.clearBuffer(),o}function _u(n,t,e,i,r,s){const{float32Array:o,uint16Array:a,uint32Array:u}=Me;let h=n*2;if(Re(h,a)){const p=Xe(n,u),m=an(h,a);return $b(t,e,i,p,m,r,s)}else{const p=zu(n,u),m=i1[p],S=i.direction[m]>=0;let M,_;S?(M=ke(n),_=Ge(n,u)):(M=Ge(n,u),_=ke(n));const E=Qi(M,o,i,r,s)?_u(M,t,e,i,r,s):null;if(E){const x=E.point[m];if(S?x<=o[_+p]:x>=o[_+p+3])return E}const c=Qi(_,o,i,r,s)?_u(_,t,e,i,r,s):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}const $o=new fn,Zr=new vn,Kr=new vn,Ls=new ie,Od=new pn,Wo=new pn;function s1(n,t,e,i){Me.setBuffer(n._roots[t]);const r=xu(0,n,e,i);return Me.clearBuffer(),r}function xu(n,t,e,i,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=Me;let u=n*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Od.set(e.boundingBox.min,e.boundingBox.max,i),r=Od),Re(u,o)){const d=t.geometry,p=d.index,m=d.attributes.position,g=e.index,S=e.attributes.position,M=Xe(n,a),_=an(u,o);if(Ls.copy(i).invert(),e.boundsTree)return Te(n,s,Wo),Wo.matrix.copy(Ls),Wo.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Wo.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(i),E.b.applyMatrix4(i),E.c.applyMatrix4(i),E.needsUpdate=!0;for(let f=M,c=_+M;f<c;f++)if(Fe(Kr,3*t.resolveTriangleIndex(f),p,m),Kr.needsUpdate=!0,E.intersectsTriangle(Kr))return!0;return!1}});{const v=Ya(e);for(let E=M,f=_+M;E<f;E++){const c=t.resolveTriangleIndex(E);Fe(Zr,3*c,p,m),Zr.a.applyMatrix4(Ls),Zr.b.applyMatrix4(Ls),Zr.c.applyMatrix4(Ls),Zr.needsUpdate=!0;for(let x=0,l=v*3;x<l;x+=3)if(Fe(Kr,x,g,S),Kr.needsUpdate=!0,Zr.intersectsTriangle(Kr))return!0}}}else{const d=ke(n),p=Ge(n,a);return Te(d,s,$o),!!(r.intersectsBox($o)&&xu(d,t,e,i,r)||(Te(p,s,$o),r.intersectsBox($o)&&xu(p,t,e,i,r)))}}const Xo=new ie,Kl=new pn,Ns=new pn,o1=new N,a1=new N,l1=new N,c1=new N;function u1(n,t,e,i={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Kl.set(t.boundingBox.min,t.boundingBox.max,e),Kl.needsUpdate=!0;const a=n.geometry,u=a.attributes.position,h=a.index,d=t.attributes.position,p=t.index,m=Fn.getPrimitive(),g=Fn.getPrimitive();let S=o1,M=a1,_=null,v=null;r&&(_=l1,v=c1);let E=1/0,f=null,c=null;return Xo.copy(e).invert(),Ns.matrix.copy(Xo),n.shapecast({boundsTraverseOrder:x=>Kl.distanceToBox(x),intersectsBounds:(x,l,R)=>R<E&&R<o?(l&&(Ns.min.copy(x.min),Ns.max.copy(x.max),Ns.needsUpdate=!0),!0):!1,intersectsRange:(x,l)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:y=>Ns.distanceToBox(y),intersectsBounds:(y,b,w)=>w<E&&w<o,intersectsRange:(y,b)=>{for(let w=y,T=y+b;w<T;w++){const A=R.resolveTriangleIndex(w);Fe(g,3*A,p,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let C=x,D=x+l;C<D;C++){const U=n.resolveTriangleIndex(C);Fe(m,3*U,h,u),m.needsUpdate=!0;const F=m.distanceToTriangle(g,S,_);if(F<E&&(M.copy(S),v&&v.copy(_),E=F,f=C,c=w),F<s)return!0}}}})}else{const R=Ya(t);for(let y=0,b=R;y<b;y++){Fe(g,3*y,p,d),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let w=x,T=x+l;w<T;w++){const A=n.resolveTriangleIndex(w);Fe(m,3*A,h,u),m.needsUpdate=!0;const C=m.distanceToTriangle(g,S,_);if(C<E&&(M.copy(S),v&&v.copy(_),E=C,f=w,c=y),C<s)return!0}}}}}),Fn.releasePrimitive(m),Fn.releasePrimitive(g),E===1/0?null:(i.point?i.point.copy(M):i.point=M.clone(),i.distance=E,i.faceIndex=f,r&&(r.point?r.point.copy(v):r.point=v.clone(),r.point.applyMatrix4(Xo),M.applyMatrix4(Xo),r.distance=M.sub(r.point).length(),r.faceIndex=c),i)}function Bd(n,t,e){return n===null?null:(n.point.applyMatrix4(t.matrixWorld),n.distance=n.point.distanceTo(e.ray.origin),n.object=t,n)}const qo=new pn,Yo=new xs,zd=new N,kd=new ie,Gd=new N,Jl=["getX","getY","getZ"];class Na extends Db{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,r=t._roots,s=t._indirectBuffer,o=i.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(u=>u.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),u(s));const a=new Na(e,{...i,[Bu]:!0});if(a._roots=s,a._indirectBuffer=o||null,i.setIndex){const h=e.getIndex();if(h===null){const d=new Tn(t.index,1,!1);e.setIndex(d)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return a;function u(h){for(let d=0;d<h.length;d++){const p=h[d],m=new Uint32Array(p),g=new Uint16Array(p);for(let S=0,M=p.byteLength/on;S<M;S++){const _=ze*S,v=2*_;Re(v,g)||(m[_+6]=m[_+6]/ze-S)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,i){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=(s?s[t]:t)*3;let d=h+0,p=h+1,m=h+2;a&&(d=a[d],p=a[p],m=a[m]);for(let g=0;g<3;g++){const S=o[Jl[g]](d),M=o[Jl[g]](p),_=o[Jl[g]](m);let v=S;M<v&&(v=M),_<v&&(v=_);let E=S;M>E&&(E=M),_>E&&(E=_),e[i+g]=v,e[i+g+3]=E}return e}computePrimitiveBounds(t,e,i){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=o.normalized;if(t<0||e+t-i.offset>i.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=o.array,d=o.offset||0;let p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);const m=["getX","getY","getZ"],g=i.offset;for(let S=t,M=t+e;S<M;S++){const v=(s?s[S]:S)*3,E=(S-g)*6;let f=v+0,c=v+1,x=v+2;a&&(f=a[f],c=a[c],x=a[x]),u||(f=f*p+d,c=c*p+d,x=x*p+d);for(let l=0;l<3;l++){let R,y,b;u?(R=o[m[l]](f),y=o[m[l]](c),b=o[m[l]](x)):(R=h[f+l],y=h[c+l],b=h[x+l]);let w=R;y<w&&(w=y),b<w&&(w=b);let T=R;y>T&&(T=y),b>T&&(T=b);const A=(T-w)/2,C=l*2;i[E+C+0]=w+A,i[E+C+1]=A+(Math.abs(w)+A)*da}}return i}raycastObject3D(t,e,i=[]){const{material:r}=t;if(r===void 0)return;kd.copy(t.matrixWorld).invert(),Yo.copy(e.ray).applyMatrix4(kd),Gd.setFromMatrixScale(t.matrixWorld),zd.copy(Yo.direction).multiply(Gd);const s=zd.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let u=this.raycastFirst(Yo,r,o,a);u=Bd(u,t,e),u&&i.push(u)}else{const u=this.raycast(Yo,r,o,a);for(let h=0,d=u.length;h<d;h++){const p=Bd(u[h],t,e);p&&i.push(p)}}return i}refit(t=null){return(this.indirect?e1:Hb)(this,t)}raycast(t,e=oi,i=0,r=1/0){const s=this._roots,o=[],a=this.indirect?n1:Xb;for(let u=0,h=s.length;u<h;u++)a(this,u,e,t,o,i,r);return o}raycastFirst(t,e=oi,i=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?r1:Yb;for(let u=0,h=s.length;u<h;u++){const d=a(this,u,e,t,i,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let i=!1;const r=this._roots,s=this.indirect?s1:Zb;for(let o=0,a=r.length;o<a&&(i=s(this,o,t,e),!i);o++);return i}shapecast(t){const e=Fn.getPrimitive(),i=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Wb:Gb});return Fn.releasePrimitive(e),i}bvhcast(t,e,i){let{intersectsRanges:r,intersectsTriangles:s}=i;const o=Fn.getPrimitive(),a=this.geometry.index,u=this.geometry.attributes.position,h=this.indirect?S=>{const M=this.resolveTriangleIndex(S);Fe(o,M*3,a,u)}:S=>{Fe(o,S*3,a,u)},d=Fn.getPrimitive(),p=t.geometry.index,m=t.geometry.attributes.position,g=t.indirect?S=>{const M=t.resolveTriangleIndex(S);Fe(d,M*3,p,m)}:S=>{Fe(d,S*3,p,m)};if(s){if(!(t instanceof Na))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const S=(M,_,v,E,f,c,x,l)=>{for(let R=v,y=v+E;R<y;R++){g(R),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let b=M,w=M+_;b<w;b++)if(h(b),o.needsUpdate=!0,s(o,d,b,R,f,c,x,l))return!0}return!1};if(r){const M=r;r=function(_,v,E,f,c,x,l,R){return M(_,v,E,f,c,x,l,R)?!0:S(_,v,E,f,c,x,l,R)}}else r=S}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return qo.set(t.min,t.max,e),qo.needsUpdate=!0,this.shapecast({intersectsBounds:i=>qo.intersectsBox(i),intersectsTriangle:i=>qo.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},r={},s=0,o=1/0){return(this.indirect?u1:t1)(this,t,e,i,r,s,o)}closestPointToPoint(t,e={},i=0,r=1/0){return Fb(this,t,e,i,r)}}const Xp=1e-6,h1=Xp*.5,qp=Math.pow(10,-Math.log10(Xp)),d1=h1*qp;function ii(n){return~~(n*qp+d1)}function f1(n){return`${ii(n.x)},${ii(n.y)}`}function Hd(n){return`${ii(n.x)},${ii(n.y)},${ii(n.z)}`}function p1(n){return`${ii(n.x)},${ii(n.y)},${ii(n.z)},${ii(n.w)}`}function m1(n,t,e){e.direction.subVectors(t,n).normalize();const i=n.dot(e.direction);return e.origin.copy(n).addScaledVector(e.direction,-i),e}function Yp(){return typeof SharedArrayBuffer<"u"}function g1(n){if(n.buffer instanceof SharedArrayBuffer)return n;const t=n.constructor,e=n.buffer,i=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(i).set(r,0),new t(i)}function _1(n){return n.index?n.index.count:n.attributes.position.count}function Vu(n){return _1(n)/3}const x1=1e-8,v1=new N;function S1(n){return~~(n/3)}function y1(n){return n%3}function Vd(n,t){return n.start-t.start}function $d(n,t){return v1.subVectors(t,n.origin).dot(n.direction)}function M1(n,t,e,i=x1){n.sort(Vd),t.sort(Vd);for(let a=0;a<n.length;a++){const u=n[a];for(let h=0;h<t.length;h++){const d=t[h];if(!(d.start>u.end)){if(u.end<d.start||d.end<u.start)continue;if(u.start<=d.start&&u.end>=d.end)s(d.end,u.end)||n.splice(a+1,0,{start:d.end,end:u.end,index:u.index}),u.end=d.start,d.start=0,d.end=0;else if(u.start>=d.start&&u.end<=d.end)s(u.end,d.end)||t.splice(h+1,0,{start:u.end,end:d.end,index:d.index}),d.end=u.start,u.start=0,u.end=0;else if(u.start<=d.start&&u.end<=d.end){const p=u.end;u.end=d.start,d.start=p}else if(u.start>=d.start&&u.end>=d.end){const p=d.end;d.end=u.start,u.start=p}else throw new Error}if(e.has(u.index)||e.set(u.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(u.index).push(d.index),e.get(d.index).push(u.index),o(d)&&(t.splice(h,1),h--),o(u)){n.splice(a,1),a--;break}}}r(n),r(t);function r(a){for(let u=0;u<a.length;u++)o(a[u])&&(a.splice(u,1),u--)}function s(a,u){return Math.abs(u-a)<i}function o(a){return Math.abs(a.end-a.start)<i}}const Wd=1e-5,Xd=1e-4;class b1{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,i=t.clone();i.direction.multiplyScalar(-1);let r=1/0,s=null;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(o(d,t)&&o(d,i))continue;const p=a(d,t),m=a(d,i),g=Math.min(p,m);g<r&&(r=g,s=d)}return s;function o(u,h){const d=u.origin.distanceTo(h.origin)>Wd;return u.direction.angleTo(h.direction)>Xd||d}function a(u,h){const d=u.origin.distanceTo(h.origin),p=u.direction.angleTo(h.direction);return d/Wd+p/Xd}}}const jl=new N,Ql=new N,Zo=new xs;function E1(n,t,e){const i=n.attributes,r=n.index,s=i.position,o=new Map,a=new Map,u=Array.from(t),h=new b1;for(let d=0,p=u.length;d<p;d++){const m=u[d],g=S1(m),S=y1(m);let M=3*g+S,_=3*g+(S+1)%3;r&&(M=r.getX(M),_=r.getX(_)),jl.fromBufferAttribute(s,M),Ql.fromBufferAttribute(s,_),m1(jl,Ql,Zo);let v,E=h.findClosestRay(Zo);E===null&&(E=Zo.clone(),h.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),v=a.get(E);let f=$d(E,jl),c=$d(E,Ql);f>c&&([f,c]=[c,f]),Zo.direction.dot(E.direction)<0?v.reverse.push({start:f,end:c,index:m}):v.forward.push({start:f,end:c,index:m})}return a.forEach(({forward:d,reverse:p},m)=>{M1(d,p,o,e),d.length===0&&p.length===0&&a.delete(m)}),{disjointConnectivityMap:o,fragmentMap:a}}const w1=new kt,tc=new N,T1=new me,ec=["","",""];class A1{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:~~(i/3)}getSiblingEdgeIndex(t,e){const i=this.data[t*3+e];return i===-1?-1:i%3}getDisjointSiblingTriangleIndices(t,e){const i=t*3+e,r=this.disjointConnections.get(i);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const i=t*3+e,r=this.disjointConnections.get(i);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:i,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?f:E,a=new Map,{attributes:u}=t,h=e?Object.keys(u):null,d=t.index,p=u.position;let m=Vu(t);const g=m;let S=0;i&&(S=t.drawRange.start,t.drawRange.count!==1/0&&(m=~~(t.drawRange.count/3)));let M=this.data;(!M||M.length<3*g)&&(M=new Int32Array(3*g)),M.fill(-1);let _=0,v=new Set;for(let c=S,x=m*3+S;c<x;c+=3){const l=c;for(let R=0;R<3;R++){let y=l+R;d&&(y=d.getX(y)),ec[R]=o(y)}for(let R=0;R<3;R++){const y=(R+1)%3,b=ec[R],w=ec[y],T=`${w}_${b}`;if(a.has(T)){const A=l+R,C=a.get(T);M[A]=C,M[C]=A,a.delete(T),_+=2,v.delete(C)}else{const A=`${b}_${w}`,C=l+R;a.set(A,C),v.add(C)}}}if(r){const{fragmentMap:c,disjointConnectivityMap:x}=E1(t,v,s);v.clear(),c.forEach(({forward:l,reverse:R})=>{l.forEach(({index:y})=>v.add(y)),R.forEach(({index:y})=>v.add(y))}),this.unmatchedDisjointEdges=c,this.disjointConnections=x,_=m*3-v.size}this.matchedEdges=_,this.unmatchedEdges=v.size,this.data=M;function E(c){return tc.fromBufferAttribute(p,c),Hd(tc)}function f(c){let x="";for(let l=0,R=h.length;l<R;l++){const y=u[h[l]];let b;switch(y.itemSize){case 1:b=ii(y.getX(c));break;case 2:b=f1(w1.fromBufferAttribute(y,c));break;case 3:b=Hd(tc.fromBufferAttribute(y,c));break;case 4:b=p1(T1.fromBufferAttribute(y,c));break}x!==""&&(x+="|"),x+=b}return x}}}class Wi extends Je{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new ie,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,i=t.elements,r=e.elements;for(let s=0;s<16;s++)if(i[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,i=Yp(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,u=`${t.uuid}_${o}_${a}`;if(this._hash===u)return;if(this._hash=u,i)for(const m in e){const g=e[m];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=g1(g.array)}t.boundsTree=new Na(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:i}),t.halfEdges||(t.halfEdges=new A1),t.halfEdges.updateFrom(t);const h=Vu(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));const d=t.groupIndices,p=t.groups;for(let m=0,g=p.length;m<g;m++){const{start:S,count:M}=p[m];for(let _=S/3,v=(S+M)/3;_<v;_++)d[_]=m}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var C1=Object.getOwnPropertyNames,Cn=(n,t)=>function(){return t||(0,n[C1(n)[0]])((t={exports:{}}).exports,t),t.exports},Ka=Cn({"node_modules/binary-search-bounds/search-bounds.js"(n,t){function e(u,h,d,p,m){for(var g=m+1;p<=m;){var S=p+m>>>1,M=u[S],_=d!==void 0?d(M,h):M-h;_>=0?(g=S,m=S-1):p=S+1}return g}function i(u,h,d,p,m){for(var g=m+1;p<=m;){var S=p+m>>>1,M=u[S],_=d!==void 0?d(M,h):M-h;_>0?(g=S,m=S-1):p=S+1}return g}function r(u,h,d,p,m){for(var g=p-1;p<=m;){var S=p+m>>>1,M=u[S],_=d!==void 0?d(M,h):M-h;_<0?(g=S,p=S+1):m=S-1}return g}function s(u,h,d,p,m){for(var g=p-1;p<=m;){var S=p+m>>>1,M=u[S],_=d!==void 0?d(M,h):M-h;_<=0?(g=S,p=S+1):m=S-1}return g}function o(u,h,d,p,m){for(;p<=m;){var g=p+m>>>1,S=u[g],M=d!==void 0?d(S,h):S-h;if(M===0)return g;M<=0?p=g+1:m=g-1}return-1}function a(u,h,d,p,m,g){return typeof d=="function"?g(u,h,d,p===void 0?0:p|0,m===void 0?u.length-1:m|0):g(u,h,void 0,d===void 0?0:d|0,p===void 0?u.length-1:p|0)}t.exports={ge:function(u,h,d,p,m){return a(u,h,d,p,m,e)},gt:function(u,h,d,p,m){return a(u,h,d,p,m,i)},lt:function(u,h,d,p,m){return a(u,h,d,p,m,r)},le:function(u,h,d,p,m){return a(u,h,d,p,m,s)},eq:function(u,h,d,p,m){return a(u,h,d,p,m,o)}}}}),$u=Cn({"node_modules/two-product/two-product.js"(n,t){t.exports=i;var e=+(Math.pow(2,27)+1);function i(r,s,o){var a=r*s,u=e*r,h=u-r,d=u-h,p=r-d,m=e*s,g=m-s,S=m-g,M=s-S,_=a-d*S,v=_-p*S,E=v-d*M,f=p*M-E;return o?(o[0]=f,o[1]=a,o):[f,a]}}}),Zp=Cn({"node_modules/robust-sum/robust-sum.js"(n,t){t.exports=i;function e(r,s){var o=r+s,a=o-r,u=o-a,h=s-a,d=r-u,p=d+h;return p?[p,o]:[o]}function i(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var u=o+a,h=new Array(u),d=0,p=0,m=0,g=Math.abs,S=r[p],M=g(S),_=s[m],v=g(_),E,f;M<v?(f=S,p+=1,p<o&&(S=r[p],M=g(S))):(f=_,m+=1,m<a&&(_=s[m],v=g(_))),p<o&&M<v||m>=a?(E=S,p+=1,p<o&&(S=r[p],M=g(S))):(E=_,m+=1,m<a&&(_=s[m],v=g(_)));for(var c=E+f,x=c-E,l=f-x,R=l,y=c,b,w,T,A,C;p<o&&m<a;)M<v?(E=S,p+=1,p<o&&(S=r[p],M=g(S))):(E=_,m+=1,m<a&&(_=s[m],v=g(_))),f=R,c=E+f,x=c-E,l=f-x,l&&(h[d++]=l),b=y+c,w=b-y,T=b-w,A=c-w,C=y-T,R=C+A,y=b;for(;p<o;)E=S,f=R,c=E+f,x=c-E,l=f-x,l&&(h[d++]=l),b=y+c,w=b-y,T=b-w,A=c-w,C=y-T,R=C+A,y=b,p+=1,p<o&&(S=r[p]);for(;m<a;)E=_,f=R,c=E+f,x=c-E,l=f-x,l&&(h[d++]=l),b=y+c,w=b-y,T=b-w,A=c-w,C=y-T,R=C+A,y=b,m+=1,m<a&&(_=s[m]);return R&&(h[d++]=R),y&&(h[d++]=y),d||(h[d++]=0),h.length=d,h}}}),R1=Cn({"node_modules/two-sum/two-sum.js"(n,t){t.exports=e;function e(i,r,s){var o=i+r,a=o-i,u=o-a,h=r-a,d=i-u;return s?(s[0]=d+h,s[1]=o,s):[d+h,o]}}}),Kp=Cn({"node_modules/robust-scale/robust-scale.js"(n,t){var e=$u(),i=R1();t.exports=r;function r(s,o){var a=s.length;if(a===1){var u=e(s[0],o);return u[0]?u:[u[1]]}var h=new Array(2*a),d=[.1,.1],p=[.1,.1],m=0;e(s[0],o,d),d[0]&&(h[m++]=d[0]);for(var g=1;g<a;++g){e(s[g],o,p);var S=d[1];i(S,p[0],d),d[0]&&(h[m++]=d[0]);var M=p[1],_=d[1],v=M+_,E=v-M,f=_-E;d[1]=v,f&&(h[m++]=f)}return d[1]&&(h[m++]=d[1]),m===0&&(h[m++]=0),h.length=m,h}}}),Jp=Cn({"node_modules/robust-subtract/robust-diff.js"(n,t){t.exports=i;function e(r,s){var o=r+s,a=o-r,u=o-a,h=s-a,d=r-u,p=d+h;return p?[p,o]:[o]}function i(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var u=o+a,h=new Array(u),d=0,p=0,m=0,g=Math.abs,S=r[p],M=g(S),_=-s[m],v=g(_),E,f;M<v?(f=S,p+=1,p<o&&(S=r[p],M=g(S))):(f=_,m+=1,m<a&&(_=-s[m],v=g(_))),p<o&&M<v||m>=a?(E=S,p+=1,p<o&&(S=r[p],M=g(S))):(E=_,m+=1,m<a&&(_=-s[m],v=g(_)));for(var c=E+f,x=c-E,l=f-x,R=l,y=c,b,w,T,A,C;p<o&&m<a;)M<v?(E=S,p+=1,p<o&&(S=r[p],M=g(S))):(E=_,m+=1,m<a&&(_=-s[m],v=g(_))),f=R,c=E+f,x=c-E,l=f-x,l&&(h[d++]=l),b=y+c,w=b-y,T=b-w,A=c-w,C=y-T,R=C+A,y=b;for(;p<o;)E=S,f=R,c=E+f,x=c-E,l=f-x,l&&(h[d++]=l),b=y+c,w=b-y,T=b-w,A=c-w,C=y-T,R=C+A,y=b,p+=1,p<o&&(S=r[p]);for(;m<a;)E=_,f=R,c=E+f,x=c-E,l=f-x,l&&(h[d++]=l),b=y+c,w=b-y,T=b-w,A=c-w,C=y-T,R=C+A,y=b,m+=1,m<a&&(_=-s[m]);return R&&(h[d++]=R),y&&(h[d++]=y),d||(h[d++]=0),h.length=d,h}}}),P1=Cn({"node_modules/robust-orientation/orientation.js"(n,t){var e=$u(),i=Zp(),r=Kp(),s=Jp(),o=5,a=11102230246251565e-32,u=(3+16*a)*a,h=(7+56*a)*a;function d(c,x,l,R){return function(b,w,T){var A=c(c(x(w[1],T[0]),x(-T[1],w[0])),c(x(b[1],w[0]),x(-w[1],b[0]))),C=c(x(b[1],T[0]),x(-T[1],b[0])),D=R(A,C);return D[D.length-1]}}function p(c,x,l,R){return function(b,w,T,A){var C=c(c(l(c(x(T[1],A[0]),x(-A[1],T[0])),w[2]),c(l(c(x(w[1],A[0]),x(-A[1],w[0])),-T[2]),l(c(x(w[1],T[0]),x(-T[1],w[0])),A[2]))),c(l(c(x(w[1],A[0]),x(-A[1],w[0])),b[2]),c(l(c(x(b[1],A[0]),x(-A[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),A[2])))),D=c(c(l(c(x(T[1],A[0]),x(-A[1],T[0])),b[2]),c(l(c(x(b[1],A[0]),x(-A[1],b[0])),-T[2]),l(c(x(b[1],T[0]),x(-T[1],b[0])),A[2]))),c(l(c(x(w[1],T[0]),x(-T[1],w[0])),b[2]),c(l(c(x(b[1],T[0]),x(-T[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),T[2])))),U=R(C,D);return U[U.length-1]}}function m(c,x,l,R){return function(b,w,T,A,C){var D=c(c(c(l(c(l(c(x(A[1],C[0]),x(-C[1],A[0])),T[2]),c(l(c(x(T[1],C[0]),x(-C[1],T[0])),-A[2]),l(c(x(T[1],A[0]),x(-A[1],T[0])),C[2]))),w[3]),c(l(c(l(c(x(A[1],C[0]),x(-C[1],A[0])),w[2]),c(l(c(x(w[1],C[0]),x(-C[1],w[0])),-A[2]),l(c(x(w[1],A[0]),x(-A[1],w[0])),C[2]))),-T[3]),l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),w[2]),c(l(c(x(w[1],C[0]),x(-C[1],w[0])),-T[2]),l(c(x(w[1],T[0]),x(-T[1],w[0])),C[2]))),A[3]))),c(l(c(l(c(x(T[1],A[0]),x(-A[1],T[0])),w[2]),c(l(c(x(w[1],A[0]),x(-A[1],w[0])),-T[2]),l(c(x(w[1],T[0]),x(-T[1],w[0])),A[2]))),-C[3]),c(l(c(l(c(x(A[1],C[0]),x(-C[1],A[0])),w[2]),c(l(c(x(w[1],C[0]),x(-C[1],w[0])),-A[2]),l(c(x(w[1],A[0]),x(-A[1],w[0])),C[2]))),b[3]),l(c(l(c(x(A[1],C[0]),x(-C[1],A[0])),b[2]),c(l(c(x(b[1],C[0]),x(-C[1],b[0])),-A[2]),l(c(x(b[1],A[0]),x(-A[1],b[0])),C[2]))),-w[3])))),c(c(l(c(l(c(x(w[1],C[0]),x(-C[1],w[0])),b[2]),c(l(c(x(b[1],C[0]),x(-C[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),C[2]))),A[3]),c(l(c(l(c(x(w[1],A[0]),x(-A[1],w[0])),b[2]),c(l(c(x(b[1],A[0]),x(-A[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),A[2]))),-C[3]),l(c(l(c(x(T[1],A[0]),x(-A[1],T[0])),w[2]),c(l(c(x(w[1],A[0]),x(-A[1],w[0])),-T[2]),l(c(x(w[1],T[0]),x(-T[1],w[0])),A[2]))),b[3]))),c(l(c(l(c(x(T[1],A[0]),x(-A[1],T[0])),b[2]),c(l(c(x(b[1],A[0]),x(-A[1],b[0])),-T[2]),l(c(x(b[1],T[0]),x(-T[1],b[0])),A[2]))),-w[3]),c(l(c(l(c(x(w[1],A[0]),x(-A[1],w[0])),b[2]),c(l(c(x(b[1],A[0]),x(-A[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),A[2]))),T[3]),l(c(l(c(x(w[1],T[0]),x(-T[1],w[0])),b[2]),c(l(c(x(b[1],T[0]),x(-T[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),T[2]))),-A[3]))))),U=c(c(c(l(c(l(c(x(A[1],C[0]),x(-C[1],A[0])),T[2]),c(l(c(x(T[1],C[0]),x(-C[1],T[0])),-A[2]),l(c(x(T[1],A[0]),x(-A[1],T[0])),C[2]))),b[3]),l(c(l(c(x(A[1],C[0]),x(-C[1],A[0])),b[2]),c(l(c(x(b[1],C[0]),x(-C[1],b[0])),-A[2]),l(c(x(b[1],A[0]),x(-A[1],b[0])),C[2]))),-T[3])),c(l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),b[2]),c(l(c(x(b[1],C[0]),x(-C[1],b[0])),-T[2]),l(c(x(b[1],T[0]),x(-T[1],b[0])),C[2]))),A[3]),l(c(l(c(x(T[1],A[0]),x(-A[1],T[0])),b[2]),c(l(c(x(b[1],A[0]),x(-A[1],b[0])),-T[2]),l(c(x(b[1],T[0]),x(-T[1],b[0])),A[2]))),-C[3]))),c(c(l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),w[2]),c(l(c(x(w[1],C[0]),x(-C[1],w[0])),-T[2]),l(c(x(w[1],T[0]),x(-T[1],w[0])),C[2]))),b[3]),l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),b[2]),c(l(c(x(b[1],C[0]),x(-C[1],b[0])),-T[2]),l(c(x(b[1],T[0]),x(-T[1],b[0])),C[2]))),-w[3])),c(l(c(l(c(x(w[1],C[0]),x(-C[1],w[0])),b[2]),c(l(c(x(b[1],C[0]),x(-C[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),C[2]))),T[3]),l(c(l(c(x(w[1],T[0]),x(-T[1],w[0])),b[2]),c(l(c(x(b[1],T[0]),x(-T[1],b[0])),-w[2]),l(c(x(b[1],w[0]),x(-w[1],b[0])),T[2]))),-C[3])))),F=R(D,U);return F[F.length-1]}}function g(c){var x=c===3?d:c===4?p:m;return x(i,e,r,s)}var S=g(3),M=g(4),_=[function(){return 0},function(){return 0},function(x,l){return l[0]-x[0]},function(x,l,R){var y=(x[1]-R[1])*(l[0]-R[0]),b=(x[0]-R[0])*(l[1]-R[1]),w=y-b,T;if(y>0){if(b<=0)return w;T=y+b}else if(y<0){if(b>=0)return w;T=-(y+b)}else return w;var A=u*T;return w>=A||w<=-A?w:S(x,l,R)},function(x,l,R,y){var b=x[0]-y[0],w=l[0]-y[0],T=R[0]-y[0],A=x[1]-y[1],C=l[1]-y[1],D=R[1]-y[1],U=x[2]-y[2],F=l[2]-y[2],O=R[2]-y[2],G=w*D,z=T*C,$=T*A,Z=b*D,ot=b*C,lt=w*A,xt=U*(G-z)+F*($-Z)+O*(ot-lt),ut=(Math.abs(G)+Math.abs(z))*Math.abs(U)+(Math.abs($)+Math.abs(Z))*Math.abs(F)+(Math.abs(ot)+Math.abs(lt))*Math.abs(O),Mt=h*ut;return xt>Mt||-xt>Mt?xt:M(x,l,R,y)}];function v(c){var x=_[c.length];return x||(x=_[c.length]=g(c.length)),x.apply(void 0,c)}function E(c,x,l,R,y,b,w){return function(A,C,D,U,F){switch(arguments.length){case 0:case 1:return 0;case 2:return R(A,C);case 3:return y(A,C,D);case 4:return b(A,C,D,U);case 5:return w(A,C,D,U,F)}for(var O=new Array(arguments.length),G=0;G<arguments.length;++G)O[G]=arguments[G];return c(O)}}function f(){for(;_.length<=o;)_.push(g(_.length));t.exports=E.apply(void 0,[v].concat(_));for(var c=0;c<=o;++c)t.exports[c]=_[c]}f()}}),D1=Cn({"node_modules/cdt2d/lib/monotone.js"(n,t){var e=Ka(),i=P1()[3],r=0,s=1,o=2;t.exports=M;function a(_,v,E,f,c){this.a=_,this.b=v,this.idx=E,this.lowerIds=f,this.upperIds=c}function u(_,v,E,f){this.a=_,this.b=v,this.type=E,this.idx=f}function h(_,v){var E=_.a[0]-v.a[0]||_.a[1]-v.a[1]||_.type-v.type;return E||_.type!==r&&(E=i(_.a,_.b,v.b),E)?E:_.idx-v.idx}function d(_,v){return i(_.a,_.b,v)}function p(_,v,E,f,c){for(var x=e.lt(v,f,d),l=e.gt(v,f,d),R=x;R<l;++R){for(var y=v[R],b=y.lowerIds,T=b.length;T>1&&i(E[b[T-2]],E[b[T-1]],f)>0;)_.push([b[T-1],b[T-2],c]),T-=1;b.length=T,b.push(c);for(var w=y.upperIds,T=w.length;T>1&&i(E[w[T-2]],E[w[T-1]],f)<0;)_.push([w[T-2],w[T-1],c]),T-=1;w.length=T,w.push(c)}}function m(_,v){var E;return _.a[0]<v.a[0]?E=i(_.a,_.b,v.a):E=i(v.b,v.a,_.a),E||(v.b[0]<_.b[0]?E=i(_.a,_.b,v.b):E=i(v.b,v.a,_.b),E||_.idx-v.idx)}function g(_,v,E){var f=e.le(_,E,m),c=_[f],x=c.upperIds,l=x[x.length-1];c.upperIds=[l],_.splice(f+1,0,new a(E.a,E.b,E.idx,[l],x))}function S(_,v,E){var f=E.a;E.a=E.b,E.b=f;var c=e.eq(_,E,m),x=_[c],l=_[c-1];l.upperIds=x.upperIds,_.splice(c,1)}function M(_,v){for(var E=_.length,f=v.length,c=[],x=0;x<E;++x)c.push(new u(_[x],null,r,x));for(var x=0;x<f;++x){var l=v[x],R=_[l[0]],y=_[l[1]];R[0]<y[0]?c.push(new u(R,y,o,x),new u(y,R,s,x)):R[0]>y[0]&&c.push(new u(y,R,o,x),new u(R,y,s,x))}c.sort(h);for(var b=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),w=[new a([b,1],[b,0],-1,[],[])],T=[],x=0,A=c.length;x<A;++x){var C=c[x],D=C.type;D===r?p(T,w,_,C.a,C.idx):D===o?g(w,_,C):S(w,_,C)}return T}}}),I1=Cn({"node_modules/cdt2d/lib/triangulation.js"(n,t){var e=Ka();t.exports=o;function i(a,u){this.stars=a,this.edges=u}var r=i.prototype;function s(a,u,h){for(var d=1,p=a.length;d<p;d+=2)if(a[d-1]===u&&a[d]===h){a[d-1]=a[p-2],a[d]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function u(h,d){return h[0]-d[0]||h[1]-d[1]}return function(h,d){return a[0]=Math.min(h,d),a[1]=Math.max(h,d),e.eq(this.edges,a,u)>=0}})(),r.removeTriangle=function(a,u,h){var d=this.stars;s(d[a],u,h),s(d[u],h,a),s(d[h],a,u)},r.addTriangle=function(a,u,h){var d=this.stars;d[a].push(u,h),d[u].push(h,a),d[h].push(a,u)},r.opposite=function(a,u){for(var h=this.stars[u],d=1,p=h.length;d<p;d+=2)if(h[d]===a)return h[d-1];return-1},r.flip=function(a,u){var h=this.opposite(a,u),d=this.opposite(u,a);this.removeTriangle(a,u,h),this.removeTriangle(u,a,d),this.addTriangle(a,d,h),this.addTriangle(u,h,d)},r.edges=function(){for(var a=this.stars,u=[],h=0,d=a.length;h<d;++h)for(var p=a[h],m=0,g=p.length;m<g;m+=2)u.push([p[m],p[m+1]]);return u},r.cells=function(){for(var a=this.stars,u=[],h=0,d=a.length;h<d;++h)for(var p=a[h],m=0,g=p.length;m<g;m+=2){var S=p[m],M=p[m+1];h<Math.min(S,M)&&u.push([h,S,M])}return u};function o(a,u){for(var h=new Array(a),d=0;d<a;++d)h[d]=[];return new i(h,u)}}}),L1=Cn({"node_modules/robust-in-sphere/in-sphere.js"(n,t){var e=$u(),i=Zp(),r=Jp(),s=Kp(),o=6;function a(f){var c=f===3?p:f===4?m:f===5?g:S;return c(i,r,e,s)}function u(){return 0}function h(){return 0}function d(){return 0}function p(f,c,x,l){function R(y,b,w){var T=x(y[0],y[0]),A=l(T,b[0]),C=l(T,w[0]),D=x(b[0],b[0]),U=l(D,y[0]),F=l(D,w[0]),O=x(w[0],w[0]),G=l(O,y[0]),z=l(O,b[0]),$=f(c(z,F),c(U,A)),Z=c(G,C),ot=c($,Z);return ot[ot.length-1]}return R}function m(f,c,x,l){function R(y,b,w,T){var A=f(x(y[0],y[0]),x(y[1],y[1])),C=l(A,b[0]),D=l(A,w[0]),U=l(A,T[0]),F=f(x(b[0],b[0]),x(b[1],b[1])),O=l(F,y[0]),G=l(F,w[0]),z=l(F,T[0]),$=f(x(w[0],w[0]),x(w[1],w[1])),Z=l($,y[0]),ot=l($,b[0]),lt=l($,T[0]),xt=f(x(T[0],T[0]),x(T[1],T[1])),ut=l(xt,y[0]),Mt=l(xt,b[0]),X=l(xt,w[0]),K=f(f(l(c(X,lt),b[1]),f(l(c(Mt,z),-w[1]),l(c(ot,G),T[1]))),f(l(c(Mt,z),y[1]),f(l(c(ut,U),-b[1]),l(c(O,C),T[1])))),st=f(f(l(c(X,lt),y[1]),f(l(c(ut,U),-w[1]),l(c(Z,D),T[1]))),f(l(c(ot,G),y[1]),f(l(c(Z,D),-b[1]),l(c(O,C),w[1])))),dt=c(K,st);return dt[dt.length-1]}return R}function g(f,c,x,l){function R(y,b,w,T,A){var C=f(x(y[0],y[0]),f(x(y[1],y[1]),x(y[2],y[2]))),D=l(C,b[0]),U=l(C,w[0]),F=l(C,T[0]),O=l(C,A[0]),G=f(x(b[0],b[0]),f(x(b[1],b[1]),x(b[2],b[2]))),z=l(G,y[0]),$=l(G,w[0]),Z=l(G,T[0]),ot=l(G,A[0]),lt=f(x(w[0],w[0]),f(x(w[1],w[1]),x(w[2],w[2]))),xt=l(lt,y[0]),ut=l(lt,b[0]),Mt=l(lt,T[0]),X=l(lt,A[0]),K=f(x(T[0],T[0]),f(x(T[1],T[1]),x(T[2],T[2]))),st=l(K,y[0]),dt=l(K,b[0]),ct=l(K,w[0]),zt=l(K,A[0]),Vt=f(x(A[0],A[0]),f(x(A[1],A[1]),x(A[2],A[2]))),wt=l(Vt,y[0]),Rt=l(Vt,b[0]),Ut=l(Vt,w[0]),Tt=l(Vt,T[0]),ae=f(f(f(l(f(l(c(Tt,zt),w[1]),f(l(c(Ut,X),-T[1]),l(c(ct,Mt),A[1]))),b[2]),f(l(f(l(c(Tt,zt),b[1]),f(l(c(Rt,ot),-T[1]),l(c(dt,Z),A[1]))),-w[2]),l(f(l(c(Ut,X),b[1]),f(l(c(Rt,ot),-w[1]),l(c(ut,$),A[1]))),T[2]))),f(l(f(l(c(ct,Mt),b[1]),f(l(c(dt,Z),-w[1]),l(c(ut,$),T[1]))),-A[2]),f(l(f(l(c(Tt,zt),b[1]),f(l(c(Rt,ot),-T[1]),l(c(dt,Z),A[1]))),y[2]),l(f(l(c(Tt,zt),y[1]),f(l(c(wt,O),-T[1]),l(c(st,F),A[1]))),-b[2])))),f(f(l(f(l(c(Rt,ot),y[1]),f(l(c(wt,O),-b[1]),l(c(z,D),A[1]))),T[2]),f(l(f(l(c(dt,Z),y[1]),f(l(c(st,F),-b[1]),l(c(z,D),T[1]))),-A[2]),l(f(l(c(ct,Mt),b[1]),f(l(c(dt,Z),-w[1]),l(c(ut,$),T[1]))),y[2]))),f(l(f(l(c(ct,Mt),y[1]),f(l(c(st,F),-w[1]),l(c(xt,U),T[1]))),-b[2]),f(l(f(l(c(dt,Z),y[1]),f(l(c(st,F),-b[1]),l(c(z,D),T[1]))),w[2]),l(f(l(c(ut,$),y[1]),f(l(c(xt,U),-b[1]),l(c(z,D),w[1]))),-T[2]))))),Xt=f(f(f(l(f(l(c(Tt,zt),w[1]),f(l(c(Ut,X),-T[1]),l(c(ct,Mt),A[1]))),y[2]),l(f(l(c(Tt,zt),y[1]),f(l(c(wt,O),-T[1]),l(c(st,F),A[1]))),-w[2])),f(l(f(l(c(Ut,X),y[1]),f(l(c(wt,O),-w[1]),l(c(xt,U),A[1]))),T[2]),l(f(l(c(ct,Mt),y[1]),f(l(c(st,F),-w[1]),l(c(xt,U),T[1]))),-A[2]))),f(f(l(f(l(c(Ut,X),b[1]),f(l(c(Rt,ot),-w[1]),l(c(ut,$),A[1]))),y[2]),l(f(l(c(Ut,X),y[1]),f(l(c(wt,O),-w[1]),l(c(xt,U),A[1]))),-b[2])),f(l(f(l(c(Rt,ot),y[1]),f(l(c(wt,O),-b[1]),l(c(z,D),A[1]))),w[2]),l(f(l(c(ut,$),y[1]),f(l(c(xt,U),-b[1]),l(c(z,D),w[1]))),-A[2])))),Kt=c(ae,Xt);return Kt[Kt.length-1]}return R}function S(f,c,x,l){function R(y,b,w,T,A,C){var D=f(f(x(y[0],y[0]),x(y[1],y[1])),f(x(y[2],y[2]),x(y[3],y[3]))),U=l(D,b[0]),F=l(D,w[0]),O=l(D,T[0]),G=l(D,A[0]),z=l(D,C[0]),$=f(f(x(b[0],b[0]),x(b[1],b[1])),f(x(b[2],b[2]),x(b[3],b[3]))),Z=l($,y[0]),ot=l($,w[0]),lt=l($,T[0]),xt=l($,A[0]),ut=l($,C[0]),Mt=f(f(x(w[0],w[0]),x(w[1],w[1])),f(x(w[2],w[2]),x(w[3],w[3]))),X=l(Mt,y[0]),K=l(Mt,b[0]),st=l(Mt,T[0]),dt=l(Mt,A[0]),ct=l(Mt,C[0]),zt=f(f(x(T[0],T[0]),x(T[1],T[1])),f(x(T[2],T[2]),x(T[3],T[3]))),Vt=l(zt,y[0]),wt=l(zt,b[0]),Rt=l(zt,w[0]),Ut=l(zt,A[0]),Tt=l(zt,C[0]),ae=f(f(x(A[0],A[0]),x(A[1],A[1])),f(x(A[2],A[2]),x(A[3],A[3]))),Xt=l(ae,y[0]),Kt=l(ae,b[0]),$t=l(ae,w[0]),qt=l(ae,T[0]),B=l(ae,C[0]),Ee=f(f(x(C[0],C[0]),x(C[1],C[1])),f(x(C[2],C[2]),x(C[3],C[3]))),Gt=l(Ee,y[0]),L=l(Ee,b[0]),P=l(Ee,w[0]),H=l(Ee,T[0]),W=l(Ee,A[0]),j=f(f(f(l(f(f(l(f(l(c(W,B),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),w[2]),l(f(l(c(W,B),w[1]),f(l(c(P,ct),-A[1]),l(c($t,dt),C[1]))),-T[2])),f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ct),-T[1]),l(c(Rt,st),C[1]))),A[2]),l(f(l(c(qt,Ut),w[1]),f(l(c($t,dt),-T[1]),l(c(Rt,st),A[1]))),-C[2]))),b[3]),f(l(f(f(l(f(l(c(W,B),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),b[2]),l(f(l(c(W,B),b[1]),f(l(c(L,ut),-A[1]),l(c(Kt,xt),C[1]))),-T[2])),f(l(f(l(c(H,Tt),b[1]),f(l(c(L,ut),-T[1]),l(c(wt,lt),C[1]))),A[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,xt),-T[1]),l(c(wt,lt),A[1]))),-C[2]))),-w[3]),l(f(f(l(f(l(c(W,B),w[1]),f(l(c(P,ct),-A[1]),l(c($t,dt),C[1]))),b[2]),l(f(l(c(W,B),b[1]),f(l(c(L,ut),-A[1]),l(c(Kt,xt),C[1]))),-w[2])),f(l(f(l(c(P,ct),b[1]),f(l(c(L,ut),-w[1]),l(c(K,ot),C[1]))),A[2]),l(f(l(c($t,dt),b[1]),f(l(c(Kt,xt),-w[1]),l(c(K,ot),A[1]))),-C[2]))),T[3]))),f(f(l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ct),-T[1]),l(c(Rt,st),C[1]))),b[2]),l(f(l(c(H,Tt),b[1]),f(l(c(L,ut),-T[1]),l(c(wt,lt),C[1]))),-w[2])),f(l(f(l(c(P,ct),b[1]),f(l(c(L,ut),-w[1]),l(c(K,ot),C[1]))),T[2]),l(f(l(c(Rt,st),b[1]),f(l(c(wt,lt),-w[1]),l(c(K,ot),T[1]))),-C[2]))),-A[3]),l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,dt),-T[1]),l(c(Rt,st),A[1]))),b[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,xt),-T[1]),l(c(wt,lt),A[1]))),-w[2])),f(l(f(l(c($t,dt),b[1]),f(l(c(Kt,xt),-w[1]),l(c(K,ot),A[1]))),T[2]),l(f(l(c(Rt,st),b[1]),f(l(c(wt,lt),-w[1]),l(c(K,ot),T[1]))),-A[2]))),C[3])),f(l(f(f(l(f(l(c(W,B),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),b[2]),l(f(l(c(W,B),b[1]),f(l(c(L,ut),-A[1]),l(c(Kt,xt),C[1]))),-T[2])),f(l(f(l(c(H,Tt),b[1]),f(l(c(L,ut),-T[1]),l(c(wt,lt),C[1]))),A[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,xt),-T[1]),l(c(wt,lt),A[1]))),-C[2]))),y[3]),l(f(f(l(f(l(c(W,B),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),y[2]),l(f(l(c(W,B),y[1]),f(l(c(Gt,z),-A[1]),l(c(Xt,G),C[1]))),-T[2])),f(l(f(l(c(H,Tt),y[1]),f(l(c(Gt,z),-T[1]),l(c(Vt,O),C[1]))),A[2]),l(f(l(c(qt,Ut),y[1]),f(l(c(Xt,G),-T[1]),l(c(Vt,O),A[1]))),-C[2]))),-b[3])))),f(f(f(l(f(f(l(f(l(c(W,B),b[1]),f(l(c(L,ut),-A[1]),l(c(Kt,xt),C[1]))),y[2]),l(f(l(c(W,B),y[1]),f(l(c(Gt,z),-A[1]),l(c(Xt,G),C[1]))),-b[2])),f(l(f(l(c(L,ut),y[1]),f(l(c(Gt,z),-b[1]),l(c(Z,U),C[1]))),A[2]),l(f(l(c(Kt,xt),y[1]),f(l(c(Xt,G),-b[1]),l(c(Z,U),A[1]))),-C[2]))),T[3]),l(f(f(l(f(l(c(H,Tt),b[1]),f(l(c(L,ut),-T[1]),l(c(wt,lt),C[1]))),y[2]),l(f(l(c(H,Tt),y[1]),f(l(c(Gt,z),-T[1]),l(c(Vt,O),C[1]))),-b[2])),f(l(f(l(c(L,ut),y[1]),f(l(c(Gt,z),-b[1]),l(c(Z,U),C[1]))),T[2]),l(f(l(c(wt,lt),y[1]),f(l(c(Vt,O),-b[1]),l(c(Z,U),T[1]))),-C[2]))),-A[3])),f(l(f(f(l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,xt),-T[1]),l(c(wt,lt),A[1]))),y[2]),l(f(l(c(qt,Ut),y[1]),f(l(c(Xt,G),-T[1]),l(c(Vt,O),A[1]))),-b[2])),f(l(f(l(c(Kt,xt),y[1]),f(l(c(Xt,G),-b[1]),l(c(Z,U),A[1]))),T[2]),l(f(l(c(wt,lt),y[1]),f(l(c(Vt,O),-b[1]),l(c(Z,U),T[1]))),-A[2]))),C[3]),l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ct),-T[1]),l(c(Rt,st),C[1]))),b[2]),l(f(l(c(H,Tt),b[1]),f(l(c(L,ut),-T[1]),l(c(wt,lt),C[1]))),-w[2])),f(l(f(l(c(P,ct),b[1]),f(l(c(L,ut),-w[1]),l(c(K,ot),C[1]))),T[2]),l(f(l(c(Rt,st),b[1]),f(l(c(wt,lt),-w[1]),l(c(K,ot),T[1]))),-C[2]))),y[3]))),f(f(l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ct),-T[1]),l(c(Rt,st),C[1]))),y[2]),l(f(l(c(H,Tt),y[1]),f(l(c(Gt,z),-T[1]),l(c(Vt,O),C[1]))),-w[2])),f(l(f(l(c(P,ct),y[1]),f(l(c(Gt,z),-w[1]),l(c(X,F),C[1]))),T[2]),l(f(l(c(Rt,st),y[1]),f(l(c(Vt,O),-w[1]),l(c(X,F),T[1]))),-C[2]))),-b[3]),l(f(f(l(f(l(c(H,Tt),b[1]),f(l(c(L,ut),-T[1]),l(c(wt,lt),C[1]))),y[2]),l(f(l(c(H,Tt),y[1]),f(l(c(Gt,z),-T[1]),l(c(Vt,O),C[1]))),-b[2])),f(l(f(l(c(L,ut),y[1]),f(l(c(Gt,z),-b[1]),l(c(Z,U),C[1]))),T[2]),l(f(l(c(wt,lt),y[1]),f(l(c(Vt,O),-b[1]),l(c(Z,U),T[1]))),-C[2]))),w[3])),f(l(f(f(l(f(l(c(P,ct),b[1]),f(l(c(L,ut),-w[1]),l(c(K,ot),C[1]))),y[2]),l(f(l(c(P,ct),y[1]),f(l(c(Gt,z),-w[1]),l(c(X,F),C[1]))),-b[2])),f(l(f(l(c(L,ut),y[1]),f(l(c(Gt,z),-b[1]),l(c(Z,U),C[1]))),w[2]),l(f(l(c(K,ot),y[1]),f(l(c(X,F),-b[1]),l(c(Z,U),w[1]))),-C[2]))),-T[3]),l(f(f(l(f(l(c(Rt,st),b[1]),f(l(c(wt,lt),-w[1]),l(c(K,ot),T[1]))),y[2]),l(f(l(c(Rt,st),y[1]),f(l(c(Vt,O),-w[1]),l(c(X,F),T[1]))),-b[2])),f(l(f(l(c(wt,lt),y[1]),f(l(c(Vt,O),-b[1]),l(c(Z,U),T[1]))),w[2]),l(f(l(c(K,ot),y[1]),f(l(c(X,F),-b[1]),l(c(Z,U),w[1]))),-T[2]))),C[3]))))),ht=f(f(f(l(f(f(l(f(l(c(W,B),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),w[2]),l(f(l(c(W,B),w[1]),f(l(c(P,ct),-A[1]),l(c($t,dt),C[1]))),-T[2])),f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ct),-T[1]),l(c(Rt,st),C[1]))),A[2]),l(f(l(c(qt,Ut),w[1]),f(l(c($t,dt),-T[1]),l(c(Rt,st),A[1]))),-C[2]))),y[3]),f(l(f(f(l(f(l(c(W,B),T[1]),f(l(c(H,Tt),-A[1]),l(c(qt,Ut),C[1]))),y[2]),l(f(l(c(W,B),y[1]),f(l(c(Gt,z),-A[1]),l(c(Xt,G),C[1]))),-T[2])),f(l(f(l(c(H,Tt),y[1]),f(l(c(Gt,z),-T[1]),l(c(Vt,O),C[1]))),A[2]),l(f(l(c(qt,Ut),y[1]),f(l(c(Xt,G),-T[1]),l(c(Vt,O),A[1]))),-C[2]))),-w[3]),l(f(f(l(f(l(c(W,B),w[1]),f(l(c(P,ct),-A[1]),l(c($t,dt),C[1]))),y[2]),l(f(l(c(W,B),y[1]),f(l(c(Gt,z),-A[1]),l(c(Xt,G),C[1]))),-w[2])),f(l(f(l(c(P,ct),y[1]),f(l(c(Gt,z),-w[1]),l(c(X,F),C[1]))),A[2]),l(f(l(c($t,dt),y[1]),f(l(c(Xt,G),-w[1]),l(c(X,F),A[1]))),-C[2]))),T[3]))),f(f(l(f(f(l(f(l(c(H,Tt),w[1]),f(l(c(P,ct),-T[1]),l(c(Rt,st),C[1]))),y[2]),l(f(l(c(H,Tt),y[1]),f(l(c(Gt,z),-T[1]),l(c(Vt,O),C[1]))),-w[2])),f(l(f(l(c(P,ct),y[1]),f(l(c(Gt,z),-w[1]),l(c(X,F),C[1]))),T[2]),l(f(l(c(Rt,st),y[1]),f(l(c(Vt,O),-w[1]),l(c(X,F),T[1]))),-C[2]))),-A[3]),l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,dt),-T[1]),l(c(Rt,st),A[1]))),y[2]),l(f(l(c(qt,Ut),y[1]),f(l(c(Xt,G),-T[1]),l(c(Vt,O),A[1]))),-w[2])),f(l(f(l(c($t,dt),y[1]),f(l(c(Xt,G),-w[1]),l(c(X,F),A[1]))),T[2]),l(f(l(c(Rt,st),y[1]),f(l(c(Vt,O),-w[1]),l(c(X,F),T[1]))),-A[2]))),C[3])),f(l(f(f(l(f(l(c(W,B),w[1]),f(l(c(P,ct),-A[1]),l(c($t,dt),C[1]))),b[2]),l(f(l(c(W,B),b[1]),f(l(c(L,ut),-A[1]),l(c(Kt,xt),C[1]))),-w[2])),f(l(f(l(c(P,ct),b[1]),f(l(c(L,ut),-w[1]),l(c(K,ot),C[1]))),A[2]),l(f(l(c($t,dt),b[1]),f(l(c(Kt,xt),-w[1]),l(c(K,ot),A[1]))),-C[2]))),y[3]),l(f(f(l(f(l(c(W,B),w[1]),f(l(c(P,ct),-A[1]),l(c($t,dt),C[1]))),y[2]),l(f(l(c(W,B),y[1]),f(l(c(Gt,z),-A[1]),l(c(Xt,G),C[1]))),-w[2])),f(l(f(l(c(P,ct),y[1]),f(l(c(Gt,z),-w[1]),l(c(X,F),C[1]))),A[2]),l(f(l(c($t,dt),y[1]),f(l(c(Xt,G),-w[1]),l(c(X,F),A[1]))),-C[2]))),-b[3])))),f(f(f(l(f(f(l(f(l(c(W,B),b[1]),f(l(c(L,ut),-A[1]),l(c(Kt,xt),C[1]))),y[2]),l(f(l(c(W,B),y[1]),f(l(c(Gt,z),-A[1]),l(c(Xt,G),C[1]))),-b[2])),f(l(f(l(c(L,ut),y[1]),f(l(c(Gt,z),-b[1]),l(c(Z,U),C[1]))),A[2]),l(f(l(c(Kt,xt),y[1]),f(l(c(Xt,G),-b[1]),l(c(Z,U),A[1]))),-C[2]))),w[3]),l(f(f(l(f(l(c(P,ct),b[1]),f(l(c(L,ut),-w[1]),l(c(K,ot),C[1]))),y[2]),l(f(l(c(P,ct),y[1]),f(l(c(Gt,z),-w[1]),l(c(X,F),C[1]))),-b[2])),f(l(f(l(c(L,ut),y[1]),f(l(c(Gt,z),-b[1]),l(c(Z,U),C[1]))),w[2]),l(f(l(c(K,ot),y[1]),f(l(c(X,F),-b[1]),l(c(Z,U),w[1]))),-C[2]))),-A[3])),f(l(f(f(l(f(l(c($t,dt),b[1]),f(l(c(Kt,xt),-w[1]),l(c(K,ot),A[1]))),y[2]),l(f(l(c($t,dt),y[1]),f(l(c(Xt,G),-w[1]),l(c(X,F),A[1]))),-b[2])),f(l(f(l(c(Kt,xt),y[1]),f(l(c(Xt,G),-b[1]),l(c(Z,U),A[1]))),w[2]),l(f(l(c(K,ot),y[1]),f(l(c(X,F),-b[1]),l(c(Z,U),w[1]))),-A[2]))),C[3]),l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,dt),-T[1]),l(c(Rt,st),A[1]))),b[2]),l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,xt),-T[1]),l(c(wt,lt),A[1]))),-w[2])),f(l(f(l(c($t,dt),b[1]),f(l(c(Kt,xt),-w[1]),l(c(K,ot),A[1]))),T[2]),l(f(l(c(Rt,st),b[1]),f(l(c(wt,lt),-w[1]),l(c(K,ot),T[1]))),-A[2]))),y[3]))),f(f(l(f(f(l(f(l(c(qt,Ut),w[1]),f(l(c($t,dt),-T[1]),l(c(Rt,st),A[1]))),y[2]),l(f(l(c(qt,Ut),y[1]),f(l(c(Xt,G),-T[1]),l(c(Vt,O),A[1]))),-w[2])),f(l(f(l(c($t,dt),y[1]),f(l(c(Xt,G),-w[1]),l(c(X,F),A[1]))),T[2]),l(f(l(c(Rt,st),y[1]),f(l(c(Vt,O),-w[1]),l(c(X,F),T[1]))),-A[2]))),-b[3]),l(f(f(l(f(l(c(qt,Ut),b[1]),f(l(c(Kt,xt),-T[1]),l(c(wt,lt),A[1]))),y[2]),l(f(l(c(qt,Ut),y[1]),f(l(c(Xt,G),-T[1]),l(c(Vt,O),A[1]))),-b[2])),f(l(f(l(c(Kt,xt),y[1]),f(l(c(Xt,G),-b[1]),l(c(Z,U),A[1]))),T[2]),l(f(l(c(wt,lt),y[1]),f(l(c(Vt,O),-b[1]),l(c(Z,U),T[1]))),-A[2]))),w[3])),f(l(f(f(l(f(l(c($t,dt),b[1]),f(l(c(Kt,xt),-w[1]),l(c(K,ot),A[1]))),y[2]),l(f(l(c($t,dt),y[1]),f(l(c(Xt,G),-w[1]),l(c(X,F),A[1]))),-b[2])),f(l(f(l(c(Kt,xt),y[1]),f(l(c(Xt,G),-b[1]),l(c(Z,U),A[1]))),w[2]),l(f(l(c(K,ot),y[1]),f(l(c(X,F),-b[1]),l(c(Z,U),w[1]))),-A[2]))),-T[3]),l(f(f(l(f(l(c(Rt,st),b[1]),f(l(c(wt,lt),-w[1]),l(c(K,ot),T[1]))),y[2]),l(f(l(c(Rt,st),y[1]),f(l(c(Vt,O),-w[1]),l(c(X,F),T[1]))),-b[2])),f(l(f(l(c(wt,lt),y[1]),f(l(c(Vt,O),-b[1]),l(c(Z,U),T[1]))),w[2]),l(f(l(c(K,ot),y[1]),f(l(c(X,F),-b[1]),l(c(Z,U),w[1]))),-T[2]))),A[3]))))),ft=c(j,ht);return ft[ft.length-1]}return R}var M=[u,h,d];function _(f){var c=M[f.length];return c||(c=M[f.length]=a(f.length)),c.apply(void 0,f)}function v(f,c,x,l,R,y,b,w){function T(A,C,D,U,F,O){switch(arguments.length){case 0:case 1:return 0;case 2:return l(A,C);case 3:return R(A,C,D);case 4:return y(A,C,D,U);case 5:return b(A,C,D,U,F);case 6:return w(A,C,D,U,F,O)}for(var G=new Array(arguments.length),z=0;z<arguments.length;++z)G[z]=arguments[z];return f(G)}return T}function E(){for(;M.length<=o;)M.push(a(M.length));t.exports=v.apply(void 0,[_].concat(M));for(var f=0;f<=o;++f)t.exports[f]=M[f]}E()}}),N1=Cn({"node_modules/cdt2d/lib/delaunay.js"(n,t){var e=L1()[4];Ka(),t.exports=r;function i(s,o,a,u,h,d){var p=o.opposite(u,h);if(!(p<0)){if(h<u){var m=u;u=h,h=m,m=d,d=p,p=m}o.isConstraint(u,h)||e(s[u],s[h],s[d],s[p])<0&&a.push(u,h)}}function r(s,o){for(var a=[],u=s.length,h=o.stars,d=0;d<u;++d)for(var p=h[d],m=1;m<p.length;m+=2){var g=p[m];if(!(g<d)&&!o.isConstraint(d,g)){for(var S=p[m-1],M=-1,_=1;_<p.length;_+=2)if(p[_-1]===g){M=p[_];break}M<0||e(s[d],s[g],s[S],s[M])<0&&a.push(d,g)}}for(;a.length>0;){for(var g=a.pop(),d=a.pop(),S=-1,M=-1,p=h[d],v=1;v<p.length;v+=2){var E=p[v-1],f=p[v];E===g?M=f:f===g&&(S=E)}S<0||M<0||e(s[d],s[g],s[S],s[M])>=0||(o.flip(d,g),i(s,o,a,S,d,M),i(s,o,a,d,M,S),i(s,o,a,M,g,S),i(s,o,a,g,S,M))}}}}),U1=Cn({"node_modules/cdt2d/lib/filter.js"(n,t){var e=Ka();t.exports=u;function i(h,d,p,m,g,S,M){this.cells=h,this.neighbor=d,this.flags=m,this.constraint=p,this.active=g,this.next=S,this.boundary=M}var r=i.prototype;function s(h,d){return h[0]-d[0]||h[1]-d[1]||h[2]-d[2]}r.locate=(function(){var h=[0,0,0];return function(d,p,m){var g=d,S=p,M=m;return p<m?p<d&&(g=p,S=m,M=d):m<d&&(g=m,S=d,M=p),g<0?-1:(h[0]=g,h[1]=S,h[2]=M,e.eq(this.cells,h,s))}})();function o(h,d){for(var p=h.cells(),m=p.length,g=0;g<m;++g){var S=p[g],M=S[0],_=S[1],v=S[2];_<v?_<M&&(S[0]=_,S[1]=v,S[2]=M):v<M&&(S[0]=v,S[1]=M,S[2]=_)}p.sort(s);for(var E=new Array(m),g=0;g<E.length;++g)E[g]=0;var f=[],c=[],x=new Array(3*m),l=new Array(3*m),R=null;d&&(R=[]);for(var y=new i(p,x,l,E,f,c,R),g=0;g<m;++g)for(var S=p[g],b=0;b<3;++b){var M=S[b],_=S[(b+1)%3],w=x[3*g+b]=y.locate(_,M,h.opposite(_,M)),T=l[3*g+b]=h.isConstraint(M,_);w<0&&(T?c.push(g):(f.push(g),E[g]=1),d&&R.push([_,M,-1]))}return y}function a(h,d,p){for(var m=0,g=0;g<h.length;++g)d[g]===p&&(h[m++]=h[g]);return h.length=m,h}function u(h,d,p){var m=o(h,p);if(d===0)return p?m.cells.concat(m.boundary):m.cells;for(var g=1,S=m.active,M=m.next,_=m.flags,v=m.cells,E=m.constraint,f=m.neighbor;S.length>0||M.length>0;){for(;S.length>0;){var c=S.pop();if(_[c]!==-g){_[c]=g,v[c];for(var x=0;x<3;++x){var l=f[3*c+x];l>=0&&_[l]===0&&(E[3*c+x]?M.push(l):(S.push(l),_[l]=g))}}}var R=M;M=S,S=R,M.length=0,g=-g}var y=a(v,_,d);return p?y.concat(m.boundary):y}}}),F1=Cn({"node_modules/cdt2d/cdt2d.js"(n,t){var e=D1(),i=I1(),r=N1(),s=U1();t.exports=d;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,m){return p[0]-m[0]||p[1]-m[1]}function u(p){return p.map(o).sort(a)}function h(p,m,g){return m in p?p[m]:g}function d(p,m,g){Array.isArray(m)?(g=g||{},m=m||[]):(g=m||{},m=[]);var S=!!h(g,"delaunay",!0),M=!!h(g,"interior",!0),_=!!h(g,"exterior",!0),v=!!h(g,"infinity",!1);if(!M&&!_||p.length===0)return[];var E=e(p,m);if(S||M!==_||v){for(var f=i(p.length,u(m)),c=0;c<E.length;++c){var x=E[c];f.addTriangle(x[0],x[1],x[2])}return S&&r(p,f),_?M?v?s(f,0,v):f.cells():s(f,1,v):s(f,-1)}else return E}}});const O1=F1();class br{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const qd=1e-16,B1=1e-16,xr=new N,Yd=new N,Zd=new br(()=>({param:0,index:0})),z1=new br(()=>new N);function k1(n,t,e,i){Zd.clear(),t.length=0,e.length=0;for(let h=0,d=n.length;h<d;h++){const p=n[h];u(p.start),u(p.end)}for(let h=0,d=n.length;h<d;h++){const p=n[h];for(let m=h+1;m<d;m++){const g=n[m];p.distanceSqToLine3(g,xr,Yd)<qd*i&&u(Yd)}}const r=[];for(let h=0,d=n.length;h<d;h++){r.length=0;const p=n[h];for(let m=0,g=t.length;m<g;m++){const S=t[m],M=p.closestPointToPointParameter(S,!0);if(p.at(M,xr),S.distanceToSquared(xr)<qd*i){const _=Zd.getInstance();_.param=M,_.index=m,r.push(_)}}r.sort(a);for(let m=0,g=r.length-1;m<g;m++){const S=r[m].index,M=r[m+1].index;S!==M&&e.push([S,M])}}const s=new Set;let o=0;for(let h=0,d=e.length;h<d;h++){const p=e[h],m=Math.min(p[0],p[1]),g=Math.max(p[0],p[1]),S=m+","+g;s.has(S)||(s.add(S),e[o++]=p)}e.length=o;function a(h,d){return h.param-d.param}function u(h){for(let d=0;d<t.length;d++){const p=t[d];if(h===p||h.distanceToSquared(p)<B1*i)return d}return t.push(z1.getInstance().copy(h)),t.length-1}}class Kd{constructor(){this.trianglePool=new br(()=>new vn),this.linePool=new br(()=>new Ze),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new N,this.projOrigin=new N,this.projU=new N,this.projV=new N,this.baseTri=new vn,this.baseIndices=new Array(3)}initialize(t,e=null,i=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:u,projOrigin:h,constrainedEdges:d,linePool:p,baseIndices:m}=this;t.getNormal(s),o.copy(t),o.update(),m[0]=e,m[1]=i,m[2]=r,d.length=0;const g=p.getInstance();g.start.copy(o.a),g.end.copy(o.b);const S=p.getInstance();S.start.copy(o.b),S.end.copy(o.c);const M=p.getInstance();M.start.copy(o.c),M.end.copy(o.a),d.push(g,S,M),h.copy(o.a),a.subVectors(o.b,o.a).normalize(),u.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:i}=this,r=i.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:i,projU:r,projV:s}=this;return xr.subVectors(t,i),e.set(xr.dot(r),xr.dot(s),0)}_from2D(t,e,i){const{projOrigin:r,projU:s,projV:o}=this;return i.copy(r).addScaledVector(s,t).addScaledVector(o,e),i}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:i,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:u}=this;t.length=0,e.clear();const h=[];for(let v=0,E=a.length;v<E;v++){const f=a[v],c=s.getInstance();this._to2D(f.start,c.start),this._to2D(f.end,c.end),h.push(c)}let d=0;for(let v=0;v<3;v++){const E=this._to2D(o.points[v],xr);d=Math.max(d,Math.abs(E.x),Math.abs(E.y))}const p=[],m=[];k1(h,p,m,d);const g=[];for(let v=0,E=p.length;v<E;v++){const f=p[v];g.push([f.x,f.y])}const S=O1(g,m,{exterior:!1}),M=new Map;for(let v=0,E=m.length;v<E;v++){const f=m[v];M.set(`${f[0]}_${f[1]}`,-1),M.set(`${f[1]}_${f[0]}`,-1)}const _=`${u[0]}_${u[1]}_${u[2]}_`;for(let v=0,E=S.length;v<E;v++){const f=S[v],[c,x,l]=f,R=e.getInstance();this._from2D(g[c][0],g[c][1],R.a),this._from2D(g[x][0],g[x][1],R.b),this._from2D(g[l][0],g[l][1],R.c),t.push(R);const y=[];i.push(y);const b=[];r.push(b);for(let w=0;w<3;w++){const T=f[w];b.push(T<3?u[T]:_+T);const A=f[(w+1)%3],C=`${T}_${A}`;if(M.has(C)){const D=M.get(C);D!==-1&&(y.push(D),i[D].push(v))}else{const D=`${A}_${T}`;M.set(D,v)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const G1=1e-14,nc=new N,Jd=new N,jd=new N;function Xi(n,t=G1){nc.subVectors(n.b,n.a),Jd.subVectors(n.c,n.a),jd.subVectors(n.b,n.c);const e=nc.angleTo(Jd),i=nc.angleTo(jd),r=Math.PI-e-i;return Math.abs(e)<t||Math.abs(i)<t||Math.abs(r)<t||n.a.distanceToSquared(n.b)<t||n.a.distanceToSquared(n.c)<t||n.b.distanceToSquared(n.c)<t}const ic=1e-10,Us=1e-10,_i=new Ze,Ce=new Ze,xi=new N,Qd=new N,tf=new N,Ko=new bn,rc=new vn;class ef{constructor(){this.trianglePool=new br(()=>new ye),this.triangles=[],this.normal=new N}initialize(t){this.reset();const{triangles:e,trianglePool:i,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(xi).dot(r))>ic)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const u=i.getInstance();u.copy(a),e.push(u)}else{t.getNormal(r);const s=i.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:i}=this;if(e){for(let s=0,o=i.length;s<o;s++){const a=i[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],u=r[o];t.getNormal(Qd).normalize(),xi.subVectors(u,a).normalize(),tf.crossVectors(Qd,xi),Ko.setFromNormalAndCoplanarPoint(tf,a),this.splitByPlane(Ko,t)}}else t.getPlane(Ko),this.splitByPlane(Ko,t)}splitByPlane(t,e){const{triangles:i,trianglePool:r}=this;rc.copy(e),rc.needsUpdate=!0;for(let s=0,o=i.length;s<o;s++){const a=i[s];if(!rc.intersectsTriangle(a,_i,!0))continue;const{a:u,b:h,c:d}=a;let p=0,m=-1,g=!1,S=[],M=[];const _=[u,h,d];for(let v=0;v<3;v++){const E=(v+1)%3;_i.start.copy(_[v]),_i.end.copy(_[E]);const f=t.distanceToPoint(_i.start),c=t.distanceToPoint(_i.end);if(Math.abs(f)<Us&&Math.abs(c)<Us){g=!0;break}if(f>0?S.push(v):M.push(v),Math.abs(f)<Us)continue;let x=!!t.intersectLine(_i,xi);!x&&Math.abs(c)<Us&&(xi.copy(_i.end),x=!0),x&&!(xi.distanceTo(_i.start)<ic)&&(xi.distanceTo(_i.end)<ic&&(m=v),p===0?Ce.start.copy(xi):Ce.end.copy(xi),p++)}if(!g&&p===2&&Ce.distance()>Us)if(m!==-1){m=(m+1)%3;let v=0;v===m&&(v=(v+1)%3);let E=v+1;E===m&&(E=(E+1)%3);const f=r.getInstance();f.a.copy(_[E]),f.b.copy(Ce.end),f.c.copy(Ce.start),Xi(f)||i.push(f),a.a.copy(_[v]),a.b.copy(Ce.start),a.c.copy(Ce.end),Xi(a)&&(i.splice(s,1),s--,o--)}else{const v=S.length>=2?M[0]:S[0];if(v===0){let l=Ce.start;Ce.start=Ce.end,Ce.end=l}const E=(v+1)%3,f=(v+2)%3,c=r.getInstance(),x=r.getInstance();_[E].distanceToSquared(Ce.start)<_[f].distanceToSquared(Ce.end)?(c.a.copy(_[E]),c.b.copy(Ce.start),c.c.copy(Ce.end),x.a.copy(_[E]),x.b.copy(_[f]),x.c.copy(Ce.start)):(c.a.copy(_[f]),c.b.copy(Ce.start),c.c.copy(Ce.end),x.a.copy(_[E]),x.b.copy(_[f]),x.c.copy(Ce.end)),a.a.copy(_[v]),a.b.copy(Ce.end),a.c.copy(Ce.start),Xi(c)||i.push(c),Xi(x)||i.push(x),Xi(a)&&(i.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class nf{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,i=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),i&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:i}=this;i.has(t)||i.set(t,new Set),i.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const H1=0,Ja=1,V1=2,$1=3,W1=4,jp=5,Qp=6,sc=1e-10,X1=1e-15,q1=1e-10,Y1=1e-10,rf=new Ze,Jr=new Ze,sf=new N,of=new N,af=new N,oc=new bn,as=new N,Ua=new N;function Z1(n,t){n.getNormal(as),t.getNormal(Ua);const e=as.dot(Ua);if(Math.abs(1-Math.abs(e))>=q1)return!1;const i=as.dot(n.a),r=as.dot(t.a);return Math.abs(i-r)<Y1}function lf(n,t,e,i){let r=0,s=1;n.delta(sf);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const u=o[a],h=o[(a+1)%3];of.subVectors(h,u),af.crossVectors(e,of),oc.setFromNormalAndCoplanarPoint(af,u);const d=oc.distanceToPoint(n.start),p=oc.normal.dot(sf);if(Math.abs(p)<X1){if(d<-sc)return null;continue}const m=-d/p;if(p>0?r=Math.max(r,m):s=Math.min(s,m),r>s+sc)return null}return s-r<sc?null:(n.at(r,i.start),n.at(s,i.end),i)}function cf(n,t,e){let i=0;n.getNormal(as),t.getNormal(Ua);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){Jr.start.copy(r[o]),Jr.end.copy(r[(o+1)%3]);const a=lf(Jr,n,as,rf);a!==null&&(i>=e.length&&e.push(new Ze),e[i].copy(a),i++)}const s=[n.a,n.b,n.c];for(let o=0;o<3;o++){Jr.start.copy(s[o]),Jr.end.copy(s[(o+1)%3]);const a=lf(Jr,t,Ua,rf);a!==null&&(i>=e.length&&e.push(new Ze),e[i].copy(a),i++)}return i}const jr=new xs,uf=new ie,Jo=new Ze,ac=[],jo=new br(()=>new Ze),es=-1,ns=1,pa=-2,ma=2,Vs=0,dr=1,Wu=2;let ga=null;function hf(n){ga=n}function tm(n,t,e=null){n.getMidpoint(jr.origin),n.getNormal(jr.direction),e&&(jr.origin.applyMatrix4(e),jr.direction.transformDirection(e));const i=t.raycastFirst(jr,$n);return!!(i&&jr.direction.dot(i.face.normal)>0)?es:ns}function K1(n,t){const e=new nf,i=new nf;return jo.clear(),uf.copy(n.matrixWorld).invert().multiply(t.matrixWorld),n.geometry.boundsTree.bvhcast(t.geometry.boundsTree,uf,{intersectsTriangles(r,s,o,a){if(!Xi(r)&&!Xi(s)){const h=(Z1(r,s)?cf(r,s,ac):0)>2;if(h||r.intersectsTriangle(s,Jo,!0)){const p=n.geometry.boundsTree.resolveTriangleIndex(o),m=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,m,h),i.add(m,p,h),h){const g=cf(r,s,ac);for(let S=0;S<g;S++){const M=jo.getInstance().copy(ac[S]);e.addIntersectionEdge(p,M),i.addIntersectionEdge(m,M)}}else{const g=jo.getInstance().copy(Jo),S=jo.getInstance().copy(Jo);e.addIntersectionEdge(p,g),i.addIntersectionEdge(m,S)}ga&&(ga.addEdge(Jo),ga.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:i}}function em(n,t,e=!1){switch(n){case H1:if(t===ns||t===ma&&!e)return dr;break;case Ja:if(e){if(t===es)return Vs}else if(t===ns||t===pa)return dr;break;case V1:if(e){if(t===ns||t===pa)return dr}else if(t===es)return Vs;break;case W1:if(t===es)return Vs;if(t===ns)return dr;break;case $1:if(t===es||t===ma&&!e)return dr;break;case jp:if(!e&&(t===ns||t===pa))return dr;break;case Qp:if(!e&&(t===es||t===ma))return dr;break;default:throw new Error(`Unrecognized CSG operation enum "${n}".`)}return Wu}class J1{constructor(t){this.triangle=new ye().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new ye().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const i in e)t.push(e[i]);return t}}class df{constructor(){this.data={}}addTriangleIntersection(t,e,i,r){const{data:s}=this;s[t]||(s[t]=new J1(e)),s[t].addTriangle(i,r)}getTrianglesAsArray(t=null){const{data:e}=this,i=[];if(t!==null)t in e&&i.push(e[t].triangle);else for(const r in e)i.push(e[r].triangle);return i}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(i=>parseInt(i)):[]}getIntersectionsAsArray(t=null,e=null){const{data:i}=this,r=new Set,s=[],o=a=>{if(i[a])if(e!==null)i[a].intersects[e]&&s.push(i[a].intersects[e]);else{const u=i[a].intersects;for(const h in u)r.has(h)||(r.add(h),s.push(u[h]))}};if(t!==null)o(t);else for(const a in i)o(a);return s}reset(){this.data={}}}class j1{constructor(){this.enabled=!1,this.triangleIntersectsA=new df,this.triangleIntersectsB=new df,this.intersectionEdges=[]}addIntersectingTriangles(t,e,i,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,i,r),o.addTriangleIntersection(i,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),hf(this))}complete(){this.enabled&&hf(null)}}const Mn=new ie,fr=new ie,xn=new ie,Vi=new Yt,Gn=new ye,pr=new ye,Hn=new ye,Gi=new ye,vr=[],ti=[],Qo=new Set,ff=new N,pf=new N,mf=new br(()=>new ye),gf=new N,ta=[];function Q1(n,t,e,i,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:u}=K1(n,t),h=[];let d=null,p;return p=o?0:-1,xf(n,t,a,e,!1,r,p),_f(n,t,a,e,!1,i,r,p),e.findIndex(g=>g!==Qp&&g!==jp)!==-1&&(r.forEach(g=>g.clearIndexMap()),p=o?n.geometry.groups.length||1:-1,xf(t,n,u,e,!0,r,p),_f(t,n,u,e,!0,i,r,p)),r.forEach(g=>g.clearIndexMap()),vr.length=0,{groups:h,materials:d}}function _f(n,t,e,i,r,s,o,a=0){Mn.copy(t.matrixWorld).invert().multiply(n.matrixWorld),fr.copy(Mn).invert(),r?xn.copy(Mn):xn.identity();const u=xn.determinant()<0;Vi.getNormalMatrix(xn).multiplyScalar(u?-1:1);const h=n.geometry.groupIndices,d=n.geometry.index,p=n.geometry.attributes.position,m=t.geometry.boundsTree,g=t.geometry.index,S=t.geometry.attributes.position,M=e.ids;for(let _=0,v=M.length;_<v;_++){const E=M[_],f=a===-1?0:h[E]+a,c=3*E;let x=c+0,l=c+1,R=c+2;d&&(x=d.getX(x),l=d.getX(l),R=d.getX(R)),Gn.a.fromBufferAttribute(p,x),Gn.b.fromBufferAttribute(p,l),Gn.c.fromBufferAttribute(p,R),r&&(Gn.a.applyMatrix4(Mn),Gn.b.applyMatrix4(Mn),Gn.c.applyMatrix4(Mn)),s.reset(),s.initialize(Gn,x,l,R),ta.length=0,mf.clear(),Gn.getNormal(pf);const y=e.coplanarSet.get(E);if(y)for(const A of y){const C=3*A;let D=C+0,U=C+1,F=C+2;g&&(D=g.getX(D),U=g.getX(U),F=g.getX(F));const O=mf.getInstance();O.a.fromBufferAttribute(S,D),O.b.fromBufferAttribute(S,U),O.c.fromBufferAttribute(S,F),r||(O.a.applyMatrix4(fr),O.b.applyMatrix4(fr),O.c.applyMatrix4(fr)),ta.push(O)}if(s.addConstraintEdge){const A=e.getIntersectionEdges(E);if(A)for(const C of A)s.addConstraintEdge(C);s.triangulate()}else{const C=e.intersectionSet.get(E);for(let D=0,U=C.length;D<U;D++){const F=C[D],O=y&&y.has(F),G=3*F;let z=G+0,$=G+1,Z=G+2;g&&(z=g.getX(z),$=g.getX($),Z=g.getX(Z)),pr.a.fromBufferAttribute(S,z),pr.b.fromBufferAttribute(S,$),pr.c.fromBufferAttribute(S,Z),r||(pr.a.applyMatrix4(fr),pr.b.applyMatrix4(fr),pr.c.applyMatrix4(fr)),s.splitByTriangle(pr,O)}}const{triangles:b,triangleIndices:w=[],triangleConnectivity:T=[]}=s;for(let A=0,C=o.length;A<C;A++)o[A].initInterpolatedAttributeData(n.geometry,xn,Vi,x,l,R);Qo.clear();for(let A=0,C=b.length;A<C;A++){if(Qo.has(A))continue;const D=b[A],U=r?null:Mn;let F=null;D.getMidpoint(ff);for(let O=0,G=ta.length;O<G;O++){const z=ta[O];if(z.containsPoint(ff)){z.getNormal(gf),F=pf.dot(gf)>0?ma:pa;break}}F===null&&(F=tm(D,m,U)),vr.length=0,ti.length=0;for(let O=0,G=i.length;O<G;O++){const z=em(i[O],F,r);z!==Wu&&(vr.push(z),ti.push(o[O]))}if(ti.length!==0){const O=[A];for(;O.length>0;){const G=O.pop();if(Qo.has(G))continue;Qo.add(G);const z=w[G];let $=null,Z=null,ot=null;z&&($=z[0],Z=z[1],ot=z[2]);const lt=b[G];Gn.getBarycoord(lt.a,Gi.a),Gn.getBarycoord(lt.b,Gi.b),Gn.getBarycoord(lt.c,Gi.c);for(let xt=0,ut=ti.length;xt<ut;xt++){const Mt=ti[xt],K=vr[xt]===Vs,st=u!==K;Mt.appendInterpolatedAttributeData(f,Gi.a,$,st),st?(Mt.appendInterpolatedAttributeData(f,Gi.c,ot,st),Mt.appendInterpolatedAttributeData(f,Gi.b,Z,st)):(Mt.appendInterpolatedAttributeData(f,Gi.b,Z,st),Mt.appendInterpolatedAttributeData(f,Gi.c,ot,st))}}}}}return M.length}function xf(n,t,e,i,r,s,o=0){Mn.copy(t.matrixWorld).invert().multiply(n.matrixWorld),r?xn.copy(Mn):xn.identity();const a=xn.determinant()<0;Vi.getNormalMatrix(xn).multiplyScalar(a?-1:1);const u=t.geometry.boundsTree,h=n.geometry.groupIndices,d=n.geometry.index,m=n.geometry.attributes.position,g=[],S=n.geometry.halfEdges,M=new Set(e.ids),_=Vu(n.geometry);for(let v=0;v<_&&M.size!==_;v++){if(M.has(v))continue;M.add(v),g.push(v);const E=3*v;let f=E+0,c=E+1,x=E+2;d&&(f=d.getX(f),c=d.getX(c),x=d.getX(x)),Hn.a.fromBufferAttribute(m,f),Hn.b.fromBufferAttribute(m,c),Hn.c.fromBufferAttribute(m,x),r&&(Hn.a.applyMatrix4(Mn),Hn.b.applyMatrix4(Mn),Hn.c.applyMatrix4(Mn));const l=tm(Hn,u,r?null:Mn);vr.length=0,ti.length=0;for(let R=0,y=i.length;R<y;R++){const b=em(i[R],l,r);b!==Wu&&(vr.push(b),ti.push(s[R]))}for(;g.length>0;){const R=g.pop();for(let y=0;y<3;y++){const b=S.getSiblingTriangleIndex(R,y);b!==-1&&!M.has(b)&&(g.push(b),M.add(b))}if(ti.length!==0){const y=3*R;let b=y+0,w=y+1,T=y+2;d&&(b=d.getX(b),w=d.getX(w),T=d.getX(T));const A=o===-1?0:h[R]+o;if(Hn.a.fromBufferAttribute(m,b),Hn.b.fromBufferAttribute(m,w),Hn.c.fromBufferAttribute(m,T),!Xi(Hn))for(let C=0,D=ti.length;C<D;C++){const U=ti[C],G=vr[C]===Vs!==a;U.appendIndexFromGeometry(n.geometry,xn,Vi,A,b,G),G?(U.appendIndexFromGeometry(n.geometry,xn,Vi,A,T,G),U.appendIndexFromGeometry(n.geometry,xn,Vi,A,w,G)):(U.appendIndexFromGeometry(n.geometry,xn,Vi,A,w,G),U.appendIndexFromGeometry(n.geometry,xn,Vi,A,T,G))}}}}}function tE(n){return n=~~n,n+4-n%4}class eE{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,i=Yp()?SharedArrayBuffer:ArrayBuffer,r=new e(new i(tE(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:i}=this;i+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[i+r]=t[r];this.length+=t.length}clear(){this.length=0}}const gn=new N,lc=new N,cc=new N,uc=new N,ea=new me,nE=new me,iE=new me,rE=new me;function sE(n,t,e,i,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(n,i.x).addScaledVector(t,i.y).addScaledVector(e,i.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function vf(n,t,e){switch(t){case 1:e.push(n.x);break;case 2:e.push(n.x,n.y);break;case 3:e.push(n.x,n.y,n.z);break;case 4:e.push(n.x,n.y,n.z,n.w);break}}class hc extends eE{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class oE{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:i}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],u=r[a],h=u.array.constructor;i[a]||(i[a]=new hc(h)),i[a].setType(h),i[a].itemSize=u.itemSize,i[a].normalized=u.normalized}for(const s in i.attributes)e.includes(s)||i.delete(s)}initInterpolatedAttributeData(t,e,i,r,s,o){const{attributeData:a,interpolatedFields:u}=this,{attributes:h}=t;for(const d in a){const p=h[d];if(!p)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let m,g,S;if(d==="position"?(m=lc.fromBufferAttribute(p,r).applyMatrix4(e),g=cc.fromBufferAttribute(p,s).applyMatrix4(e),S=uc.fromBufferAttribute(p,o).applyMatrix4(e)):d==="normal"?(m=lc.fromBufferAttribute(p,r).applyNormalMatrix(i),g=cc.fromBufferAttribute(p,s).applyNormalMatrix(i),S=uc.fromBufferAttribute(p,o).applyNormalMatrix(i)):d==="tangent"?(m=lc.fromBufferAttribute(p,r).transformDirection(e),g=cc.fromBufferAttribute(p,s).transformDirection(e),S=uc.fromBufferAttribute(p,o).transformDirection(e)):(m=nE.fromBufferAttribute(p,r),g=iE.fromBufferAttribute(p,s),S=rE.fromBufferAttribute(p,o)),!u[d])u[d]=[m.clone(),g.clone(),S.clone()];else{const M=u[d];M[0].copy(m),M[1].copy(g),M[2].copy(S)}}}appendInterpolatedAttributeData(t,e,i=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:u,invertedIndexMap:h}=this;for(;s.length<=t;)s.push(new hc(Uint32Array));const d=r?h:u,p=s[t];if(i!==null&&d.has(i))p.push(d.get(i));else{d.set(i,o.position.count),p.push(o.position.count);for(const m in a){const g=o[m],S=m==="normal"||m==="tangent",M=r&&S,_=g.itemSize,[v,E,f]=a[m];sE(v,E,f,e,ea,S,M),vf(ea,_,g)}}}appendIndexFromGeometry(t,e,i,r,s,o=!1){const{groupIndices:a,attributeData:u,forwardIndexMap:h,invertedIndexMap:d}=this;for(;a.length<=r;)a.push(new hc(Uint32Array));const p=o?d:h,m=a[r];if(s!==null&&p.has(s))m.push(p.get(s));else{p.set(s,u.position.count),m.push(u.position.count);const{attributes:g}=t;for(const S in u){const M=u[S],_=g[S];if(!_)throw new Error(`CSG Operations: Attribute ${S} not available on geometry.`);const v=_.itemSize;S==="position"?(gn.fromBufferAttribute(_,s).applyMatrix4(e),M.push(gn.x,gn.y,gn.z)):S==="normal"?(gn.fromBufferAttribute(_,s).applyNormalMatrix(i),o&&gn.multiplyScalar(-1),M.push(gn.x,gn.y,gn.z)):S==="tangent"?(gn.fromBufferAttribute(_,s).transformDirection(e),o&&gn.multiplyScalar(-1),M.push(gn.x,gn.y,gn.z)):(ea.fromBufferAttribute(_,s),vf(ea,v,M))}}}buildGeometry(t,e){let i=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const d in s){const p=s[d],{type:m,itemSize:g,normalized:S,length:M,count:_}=p,v=p.array.buffer;let E=o[d];(!E||E.count<_||E.array.type!==m)&&(E=new Tn(new m(M),g,S),t.setAttribute(d,E),i=!0),E.array.set(new m(v,0,M),0),E.needsUpdate=!0}const u=r.reduce((d,p)=>p.count+d,0);(!t.index||a.count<u||a.array.type!==Uint32Array)&&(t.setIndex(new Tn(new Uint32Array(u),1)),i=!0),t.clearGroups();let h=0;for(let d=0,p=Math.min(e.length,r.length);d<p;d++){const{index:m,materialIndex:g}=e[d],{count:S}=r[m],M=r[m].array.buffer;S!==0&&(t.index.array.set(new Uint32Array(M,0,S),h),t.addGroup(h,S,g),h+=S)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,i&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const i in e)e[i].clear();t.forEach(i=>{i.clear()}),this.clearIndexMap()}}function aE(n,t){for(const e in n.attributes)t.includes(e)||(n.deleteAttribute(e),n.dispose());return n}function lE(n,t){const e=[];for(let i=0,r=n.length;i<r;i++){const s=n[i],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function cE(n,t){const e=[],i=new Map;for(let r=0,s=n.length;r<s;r++){const o=n[r];i.has(o.materialIndex)||(i.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=i.get(o.materialIndex)}return e}function uE(n){for(let t=0;t<n.length-1;t++){const e=n[t],i=n[t+1];if(e.materialIndex===i.materialIndex){const r=e.start,s=i.start+i.count;i.start=r,i.count=s-r,n.splice(t,1),t--}}}function Sf(n,t){let e=t;return Array.isArray(t)||(e=[],n.forEach(i=>{e[i.materialIndex]=t})),e}class hE{get useCDTClipping(){return this.triangleSplitter instanceof Kd}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Kd:new ef)}constructor(){this.triangleSplitter=new ef,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new j1}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(i=>({...i}))}evaluate(t,e,i,r=new Wi){let s=!0;if(Array.isArray(i)||(i=[i]),Array.isArray(r)||(r=[r],s=!1),r.length!==i.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:u,useGroups:h,consolidateGroups:d,removeUnusedMaterials:p,debug:m}=this;for(;a.length<r.length;)a.push(new oE);r.forEach((f,c)=>{a[c].initFromGeometry(t.geometry,u),aE(f.geometry,u)}),m.init(),Q1(t,e,i,o,a,{useGroups:h}),m.complete();const g=this.getGroupRanges(t.geometry),S=Sf(g,t.material),M=this.getGroupRanges(e.geometry),_=Sf(M,e.material);M.forEach(f=>f.materialIndex+=S.length);const v=[...S,..._];let E=[...g,...M].map((f,c)=>({...f,index:c}));return h?h&&d&&(E=lE(E,v),E.sort((f,c)=>f.materialIndex-c.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((f,c)=>{const x=f.geometry;a[c].buildGeometry(x,E),t.matrixWorld.decompose(f.position,f.quaternion,f.scale),f.updateMatrix(),f.matrixWorld.copy(t.matrixWorld),h?(f.material=v,d&&uE(x.groups),p&&(f.material=cE(x.groups,v))):f.material=v[0]}),s?r:r[0]}evaluateHierarchy(t,e=new Wi){t.updateMatrixWorld(!0);const i=(s,o)=>{const a=s.children;for(let u=0,h=a.length;u<h;u++){const d=a[u];d.isOperationGroup?i(d,o):o(d)}},r=s=>{const o=s.children;let a=!1;for(let h=0,d=o.length;h<d;h++){const p=o[h];a=r(p)||a}const u=s.isDirty();if(u&&s.markUpdated(),a&&!s.isOperationGroup){let h;return i(s,d=>{h?h=this.evaluate(h,d,d.operation):h=this.evaluate(s,d,d.operation)}),s._cachedGeometry=h.geometry,s._cachedMaterials=h.material,!0}else return a||u};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const ja=new hE;ja.useGroups=!1;const Xu=new Dp({color:2450411,roughness:.4,metalness:.3,flatShading:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),mr=new Dp({color:16096779,transparent:!0,opacity:.38,roughness:.25,metalness:.1,side:oi,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),nm=new Er({color:1920728,transparent:!0,opacity:.8}),Fs=new Er({color:14251782,transparent:!0,opacity:.9}),vi=.2;function is(n,t,e,i,r,s,o){const a=[new N(n,t,r),new N(e,t,r),new N(e,t,r),new N(e,i,r),new N(e,i,r),new N(n,i,r),new N(n,i,r),new N(n,t,r),new N(n,t,s),new N(e,t,s),new N(e,t,s),new N(e,i,s),new N(e,i,s),new N(n,i,s),new N(n,i,s),new N(n,t,s),new N(n,t,r),new N(n,t,s),new N(e,t,r),new N(e,t,s),new N(e,i,r),new N(e,i,s),new N(n,i,r),new N(n,i,s)],u=new Qe().setFromPoints(a);return new ps(u,o)}function dE(n,t,e,i,r,s=48,o){const a=[];for(let h=0;h<s;h++){const d=h/s*Math.PI*2,p=(h+1)/s*Math.PI*2,m=n+e*Math.cos(d),g=t+e*Math.sin(d),S=n+e*Math.cos(p),M=t+e*Math.sin(p);a.push(new N(m,g,i),new N(S,M,i)),a.push(new N(m,g,r),new N(S,M,r)),h%(s/4)===0&&a.push(new N(m,g,i),new N(m,g,r))}const u=new Qe().setFromPoints(a);return new ps(u,o)}function im(n){const t=Math.max(1,et(n.stockWidth,100)),e=Math.max(1,et(n.stockHeight,75)),i=Math.max(.5,et(n.stockThickness,12.7)),r=new rn(t,e,i);r.translate(t/2,e/2,-i/2);const s=new Wi(r,Xu);return s.updateMatrixWorld(),{brush:s,w:t,h:e,t:i}}function rm(n,t){const i=qn(n.toolId).diameterMm,r=Math.max(1,et(t.stockWidth,100)),s=Math.max(1,et(t.stockHeight,75)),o=Math.max(.5,et(t.stockThickness,12.7));switch(n.type){case"surfacing":{const a=et(n.x,0),u=et(n.y,0),h=Math.max(.1,et(n.width,r)),d=Math.max(.1,et(n.height,s)),p=Math.max(.01,Math.min(o,et(n.cutDepth,1))),m=p+vi,g=new rn(h,d,m);g.translate(a+h/2,u+d/2,(vi-p)/2);const S=new Wi(g);return S.updateMatrixWorld(),S}case"profiling":{const a=et(n.x,0),u=et(n.y,0),h=Math.max(.1,et(n.width,50)),d=Math.max(.1,et(n.height,50)),p=Math.max(.01,Math.min(o+1,et(n.cutDepth,5))),m=p+vi;let g,S,M,_,v,E,f,c;n.side==="outside"?(g=a-i,S=a+h+i,M=u-i,_=u+d+i,v=a,E=a+h,f=u,c=u+d):(g=a,S=a+h,M=u,_=u+d,v=Math.min(a+h/2,a+i),E=Math.max(a+h/2,a+h-i),f=Math.min(u+d/2,u+i),c=Math.max(u+d/2,u+d-i));const x=S-g,l=_-M,R=Math.max(.01,E-v),y=Math.max(.01,c-f),b=new rn(x,l,m);b.translate((g+S)/2,(M+_)/2,(vi-p)/2);const w=new Wi(b);w.updateMatrixWorld();const T=new rn(R,y,m+.5);T.translate((v+E)/2,(f+c)/2,(vi-p)/2);const A=new Wi(T);A.updateMatrixWorld();try{const C=ja.evaluate(w,A,Ja);return C.updateMatrixWorld(),C}catch{return w}}case"pocket":{const a=et(n.x,0),u=et(n.y,0),h=Math.max(.1,et(n.width,40)),d=Math.max(.1,et(n.height,30)),p=Math.max(.01,Math.min(o,et(n.cutDepth,3))),m=p+vi,g=new rn(h,d,m);g.translate(a+h/2,u+d/2,(vi-p)/2);const S=new Wi(g);return S.updateMatrixWorld(),S}case"hole":{const a=et(n.x,r/2),u=et(n.y,s/2),h=Math.max(.1,et(n.diameter,i)),d=Math.max(.01,Math.min(o+2,et(n.cutDepth,5))),p=h/2,m=d+vi,g=new $a(p,p,m,48);g.rotateX(Math.PI/2),g.translate(a,u,(vi-d)/2);const S=new Wi(g);return S.updateMatrixWorld(),S}}return null}function sm(n,t){const{brush:e,w:i,h:r,t:s}=im(t),a=qn(n.toolId).diameterMm;let u=null;const h=[];let d;switch(n.type){case"surfacing":{const g=et(n.x,0),S=et(n.y,0),M=Math.max(.1,et(n.width,i)),_=Math.max(.1,et(n.height,r)),v=Math.max(.01,Math.min(s,et(n.cutDepth,1))),E=new rn(M,_,v);E.translate(g+M/2,S+_/2,-v/2),u=new Je(E,mr),h.push(is(g,S,g+M,S+_,0,-v,Fs));break}case"profiling":{const g=et(n.x,0),S=et(n.y,0),M=Math.max(.1,et(n.width,50)),_=Math.max(.1,et(n.height,50)),v=Math.max(.01,Math.min(s+1,et(n.cutDepth,5)));let E,f,c,x,l,R,y,b;n.side==="outside"?(E=g-a,f=g+M+a,c=S-a,x=S+_+a,l=g,R=g+M,y=S,b=S+_):(E=g,f=g+M,c=S,x=S+_,l=Math.min(g+M/2,g+a),R=Math.max(g+M/2,g+M-a),y=Math.min(S+_/2,S+a),b=Math.max(S+_/2,S+_-a));const w=Math.max(.01,R-l),T=x-c,A=new Ei,C=-v/2,D=l-E;if(D>.01){const G=new rn(D,T,v);G.translate((E+l)/2,(c+x)/2,C),A.add(new Je(G,mr))}const U=f-R;if(U>.01){const G=new rn(U,T,v);G.translate((R+f)/2,(c+x)/2,C),A.add(new Je(G,mr))}const F=y-c;if(F>.01){const G=new rn(w,F,v);G.translate((l+R)/2,(c+y)/2,C),A.add(new Je(G,mr))}const O=x-b;if(O>.01){const G=new rn(w,O,v);G.translate((l+R)/2,(b+x)/2,C),A.add(new Je(G,mr))}u=A,h.push(is(E,c,f,x,0,-v,Fs)),h.push(is(l,y,R,b,0,-v,Fs));break}case"pocket":{const g=et(n.x,0),S=et(n.y,0),M=Math.max(.1,et(n.width,40)),_=Math.max(.1,et(n.height,30)),v=Math.max(.01,Math.min(s,et(n.cutDepth,3)));(M<a||_<a)&&(d=`Pocket size (${M.toFixed(1)}x${_.toFixed(1)}mm) is smaller than tool diameter (${a.toFixed(2)}mm).`);const E=new rn(M,_,v);E.translate(g+M/2,S+_/2,-v/2),u=new Je(E,mr),h.push(is(g,S,g+M,S+_,0,-v,Fs));break}case"hole":{const g=et(n.x,i/2),S=et(n.y,r/2),M=Math.max(.1,et(n.diameter,a)),_=Math.max(.01,Math.min(s+2,et(n.cutDepth,5)));M<a-.05&&(d=`Hole diameter (${M.toFixed(2)}mm) is smaller than bit diameter (${a.toFixed(2)}mm).`);const v=M/2,E=new $a(v,v,_,48);E.rotateX(Math.PI/2),E.translate(g,S,-_/2),u=new Je(E,mr),h.push(dE(g,S,v,0,-_,48,Fs));break}}const p=rm(n,t);let m;if(p)try{m=ja.evaluate(e,p,Ja),m.material=Xu}catch{m=e}else m=e;return h.push(is(0,0,i,r,0,-s,nm)),{remainingStock:m,cutVolume:u||void 0,wireframes:h,warning:d}}function fE(n,t){const e=Math.max(1,et(t.stockWidth,100)),i=Math.max(1,et(t.stockHeight,75)),r=Math.max(.5,et(t.stockThickness,12.7));let s=im(t).brush;const o=new Ei,a=[];let u;for(const h of n){if(!h.enabled)continue;const{cutVolume:d,wireframes:p,warning:m}=sm(h,t);m&&!u&&(u=m);const g=rm(h,t);if(g)try{const S=ja.evaluate(s,g,Ja);S.material=Xu,s=S}catch(S){console.warn("CSG subtraction error on op:",h.name,S)}if(d&&o.add(d.clone()),p)for(let S=0;S<p.length-1;S++)a.push(p[S])}return a.push(is(0,0,e,i,0,-r,nm)),{remainingStock:s,cutVolume:o.children.length>0?o:void 0,wireframes:a,warning:u}}const yf={type:"change"},qu={type:"start"},om={type:"end"},na=new xs,Mf=new bn,pE=Math.cos(70*M0.DEG2RAD),Oe=new N,_n=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dc=1e-6;class mE extends dx{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ji,this._lastTargetPosition=new N,this._quat=new Ji().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new jh,this._sphericalDelta=new jh,this._scale=1,this._panOffset=new N,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new N,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_E.bind(this),this._onPointerDown=gE.bind(this),this._onPointerUp=xE.bind(this),this._onContextMenu=wE.bind(this),this._onMouseWheel=yE.bind(this),this._onKeyDown=ME.bind(this),this._onTouchStart=bE.bind(this),this._onTouchMove=EE.bind(this),this._onMouseDown=vE.bind(this),this._onMouseMove=SE.bind(this),this._interceptControlDown=TE.bind(this),this._interceptControlUp=AE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yf),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=_n:i>Math.PI&&(i-=_n),r<-Math.PI?r+=_n:r>Math.PI&&(r-=_n),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const u=a-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new N(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<pE?this.object.lookAt(this.target):(Mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(Mf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dc||this._lastTargetPosition.distanceToSquared(this.target)>dc?(this.dispatchEvent(yf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Oe.copy(r).sub(this.target);let s=Oe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function gE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _E(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(om),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function vE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case cs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case cs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(qu)}function SE(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yE(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(qu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(om))}function ME(n){this.enabled!==!1&&this._handleKeyDown(n)}function bE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(qu)}function EE(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function wE(n){this.enabled!==!1&&n.preventDefault()}function TE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class CE{constructor(t){Ke(this,"canvas");Ke(this,"renderer");Ke(this,"scene");Ke(this,"camera");Ke(this,"controls");Ke(this,"animationFrameId",null);Ke(this,"resizeObserver",null);Ke(this,"meshGroup");Ke(this,"toolpathGroup");Ke(this,"helpersGroup");this.canvas=t,this.renderer=new ub({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t.clientWidth,t.clientHeight,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=np,this.scene=new F0,this.scene.background=new te(1184276);const e=t.clientWidth/(t.clientHeight||1);this.camera=new Nn(45,e,1,2e3),this.camera.up.set(0,0,1),this.camera.position.set(120,-140,100),this.controls=new mE(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.target.set(50,40,-6),this.controls.update(),this.meshGroup=new Ei,this.toolpathGroup=new Ei,this.helpersGroup=new Ei,this.scene.add(this.meshGroup),this.scene.add(this.toolpathGroup),this.scene.add(this.helpersGroup),this.setupLights(),this.setupHelpers(100,75,12.7),this.resizeObserver=new ResizeObserver(()=>{this.handleResize()}),this.resizeObserver.observe(t),this.startRenderLoop()}setupLights(){const t=new sx(16777215,.7);this.scene.add(t);const e=new Jh(16777215,.9);e.position.set(100,-100,150),this.scene.add(e);const i=new Jh(9741240,.4);i.position.set(-80,80,-50),this.scene.add(i);const r=new nx(14870768,1976635,.4);this.scene.add(r)}setupHelpers(t,e,i=12.7){this.helpersGroup.clear();const r=new hx(Math.max(30,Math.min(t,e)*.5));r.position.set(0,0,0),this.helpersGroup.add(r);const s=Math.max(150,Math.max(t,e)*1.6),o=new ux(s,Math.round(s/10),3684414,2236966);o.rotateX(Math.PI/2),o.position.set(t/2,e/2,-i-.2),this.helpersGroup.add(o)}updateMeshes(t,e=!0){if(this.meshGroup.clear(),t.remainingStock&&this.meshGroup.add(t.remainingStock),e&&t.cutVolume&&this.meshGroup.add(t.cutVolume),t.wireframes)for(let i=0;i<t.wireframes.length;i++){const r=t.wireframes[i];(i===t.wireframes.length-1||e)&&this.meshGroup.add(r)}}updateToolpaths(t,e=!0){if(this.toolpathGroup.clear(),!(!e||t.length===0))for(const i of t){const r=[],s=[];let o=new N(0,0,10);for(const a of i.moves){const u=new N(a.x!==void 0?a.x:o.x,a.y!==void 0?a.y:o.y,a.z!==void 0?a.z:o.z);if(a.type==="rapid")s.push(o.clone(),u.clone());else if(a.type==="arc-cw"||a.type==="arc-ccw"){const h=a.type==="arc-cw",d=a.i??0,p=a.j??0,m=o.x+d,g=o.y+p,S=Math.hypot(d,p);if(S>1e-4){const M=Math.atan2(o.y-g,o.x-m),_=Math.atan2(u.y-g,u.x-m);let v=h?M-_:_-M;for(;v<=1e-5;)v+=2*Math.PI;const E=24;let f=o.clone();for(let c=1;c<=E;c++){const x=c/E,l=h?M-x*v:M+x*v,R=o.z+x*(u.z-o.z),y=new N(m+S*Math.cos(l),g+S*Math.sin(l),R);r.push(f.clone(),y.clone()),f=y}}else r.push(o.clone(),u.clone())}else r.push(o.clone(),u.clone());o=u}if(r.length>0){const a=new Qe().setFromPoints(r),u=new Er({color:440020,linewidth:1.5}),h=new ps(a,u);this.toolpathGroup.add(h)}if(s.length>0){const a=new Qe().setFromPoints(s),u=new ex({color:15381256,dashSize:2,gapSize:1.5,transparent:!0,opacity:.5}),h=new ps(a,u);h.computeLineDistances(),this.toolpathGroup.add(h)}}}fitView(t,e,i){const r=t/2,s=e/2,o=-i/2;this.controls.target.set(r,s,o);const a=Math.max(t,e,i);this.camera.position.set(r+a*.9,s-a*1.2,o+a*1.1),this.controls.update()}setViewPreset(t,e,i,r){const s=e/2,o=i/2,a=-r/2,u=Math.max(e,i)*1.6;switch(this.controls.target.set(s,o,a),t){case"iso":this.camera.position.set(s+u*.7,o-u*.9,a+u*.8);break;case"top":this.camera.position.set(s,o,a+u*1.3);break;case"front":this.camera.position.set(s,o-u*1.3,a);break;case"right":this.camera.position.set(s+u*1.3,o,a);break}this.controls.update()}handleResize(){const t=this.canvas.clientWidth,e=this.canvas.clientHeight;t===0||e===0||(this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1))}startRenderLoop(){const t=()=>{this.animationFrameId=requestAnimationFrame(t),this.controls.update(),this.renderer.render(this.scene,this.camera)};t()}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.resizeObserver&&this.resizeObserver.disconnect(),this.controls.dispose(),this.renderer.dispose()}}var RE=Pt('<div class=legend-item><span class="legend-color legend-path"></span><span>Cutting Move'),PE=Pt('<div class=legend-item><span class="legend-color legend-rapid"></span><span>Rapid Move'),DE=Pt(`<div class=preview-container><div class=preview-toolbar><div class=toolbar-left><div class=segmented-control><button title="Preview only the selected operation's cut">Selected Op</button><button title="Preview all operations accumulated">Full Part</button></div><label class=toolbar-toggle title="Toggle toolpath lines in 3D"><input type=checkbox><span>Toolpaths</span></label></div><div class=toolbar-right><div class=btn-group-views><button class=btn-view title="Isometric View">Iso</button><button class=btn-view title="Top Plan View (XY)">Top</button><button class=btn-view title="Front View (XZ)">Front</button><button class=btn-view title="Right View (YZ)">Right</button><button class=btn-view title="Fit to Stock">Fit</button></div></div></div><div class=canvas-wrapper><canvas class=webgl-canvas></canvas><div class=preview-legend><div class=legend-item><span class="legend-color legend-stock"></span><span>Stock Body</span></div><button type=button><span></span><span>Material Removed`);function IE(){let n,t=null;Af(()=>{t=new CE(n);const u=be(),h=Math.max(1,et(u.settings.stockWidth,100)),d=Math.max(1,et(u.settings.stockHeight,75)),p=Math.max(.5,et(u.settings.stockThickness,12.7));t.fitView(h,d,p),Su(()=>{t==null||t.dispose()})});const e=()=>{try{const u=localStorage.getItem("gcoder_show_cut_material");return u!==null?JSON.parse(u):!0}catch{return!0}},[i,r]=ve(e()),s=()=>{const u=!i();r(u);try{localStorage.setItem("gcoder_show_cut_material",JSON.stringify(u))}catch{}};vu(()=>{if(!t)return;const u=be(),h=Hf(),d=rl(),p=sl(),m=i(),g=Ys(),S=Math.max(1,et(u.settings.stockWidth,100)),M=Math.max(1,et(u.settings.stockHeight,75)),_=Math.max(.5,et(u.settings.stockThickness,12.7));if(t.setupHelpers(S,M,_),d==="selected"&&h){const v=sm(h,u.settings);t.updateMeshes(v,m);const E=g.toolpaths.filter(f=>f.opId===h.id);t.updateToolpaths(E,p)}else{const v=fE(u.operations,u.settings);t.updateMeshes(v,m),t.updateToolpaths(g.toolpaths,p)}});const o=u=>{if(!t)return;const h=be(),d=Math.max(1,et(h.settings.stockWidth,100)),p=Math.max(1,et(h.settings.stockHeight,75)),m=Math.max(.5,et(h.settings.stockThickness,12.7));t.setViewPreset(u,d,p,m)},a=()=>{if(!t)return;const u=be(),h=Math.max(1,et(u.settings.stockWidth,100)),d=Math.max(1,et(u.settings.stockHeight,75)),p=Math.max(.5,et(u.settings.stockThickness,12.7));t.fitView(h,d,p)};return(()=>{var u=DE(),h=u.firstChild,d=h.firstChild,p=d.firstChild,m=p.firstChild,g=m.nextSibling,S=p.nextSibling,M=S.firstChild,_=d.nextSibling,v=_.firstChild,E=v.firstChild,f=E.nextSibling,c=f.nextSibling,x=c.nextSibling,l=x.nextSibling,R=h.nextSibling,y=R.firstChild,b=y.nextSibling,w=b.firstChild,T=w.nextSibling,A=T.firstChild;m.$$click=()=>_h("selected"),g.$$click=()=>_h("full"),M.addEventListener("change",D=>pg(D.currentTarget.checked)),E.$$click=()=>o("iso"),f.$$click=()=>o("top"),c.$$click=()=>o("front"),x.$$click=()=>o("right"),l.$$click=a;var C=n;return typeof C=="function"?Lf(C,y):n=y,T.$$click=s,tt(b,rt(Ue,{get when(){return sl()},get children(){return[RE(),PE()]}}),null),ce(D=>{var U=`seg-btn ${rl()==="selected"?"active":""}`,F=`seg-btn ${rl()==="full"?"active":""}`,O=`legend-item legend-item-toggle ${i()?"active":"inactive"}`,G=i()?"Click to hide removed material":"Click to show removed material",z=`legend-color legend-cut ${i()?"":"dimmed"}`;return U!==D.e&&Un(m,D.e=U),F!==D.t&&Un(g,D.t=F),O!==D.a&&Un(T,D.a=O),G!==D.o&&Sr(T,"title",D.o=G),z!==D.i&&Un(A,D.i=z),D},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),ce(()=>M.checked=sl()),u})()}ui(["click"]);var LE=Pt('<form class=create-project-form><input type=text class=project-input placeholder="Project Name..."autofocus><button type=submit class=btn-primary>Create</button><button type=button class=btn-secondary>Cancel'),NE=Pt('<div class=modal-overlay><div class="modal-card project-modal"><div class=modal-header><h3>Projects</h3><button class=modal-close-btn title="Close dialog"></button></div><div class=modal-body><div class=project-actions-bar><button class=btn-secondary title="Duplicate active project"><span>Duplicate Current</span></button></div><div class=projects-table-wrapper><table class=projects-table><thead><tr><th>Project Name</th><th>Operations</th><th>Last Modified</th><th></th></tr></thead><tbody>'),UE=Pt("<button class=btn-primary><span>Create New Project"),FE=Pt("<input type=text class=proj-rename-inline-input autofocus>"),OE=Pt("<tr><td class=proj-name-cell><div class=proj-name-wrapper><span class=proj-icon></span></div></td><td> ops</td><td class=proj-date></td><td class=proj-actions><div class=proj-actions-group>"),BE=Pt('<span class=proj-name title="Double-click or double-tap to rename">'),zE=Pt("<span class=active-badge>ACTIVE"),kE=Pt('<button class="btn-sm btn-primary">Open'),GE=Pt('<button class="btn-sm btn-danger">Delete');function HE(){const[n,t]=ve(""),[e,i]=ve(!1),[r,s]=ve(null),[o,a]=ve("");let u=0;const h=()=>Object.values(Ci),d=_=>{_.preventDefault();const v=n().trim()||"New CNC Project";xg(v),t(""),i(!1),Bs(!1)},p=_=>{vg(_),Bs(!1)},m=(_,v)=>{s(_),a(v)},g=()=>{const _=r();if(_){const v=o().trim();v&&Vf(_,v),s(null)}},S=()=>{s(null)},M=(_,v)=>{const E=Date.now();E-u<350?(m(_,v),u=0):u=E};return rt(Ue,{get when(){return gg()},get children(){var _=NE(),v=_.firstChild,E=v.firstChild,f=E.firstChild,c=f.nextSibling,x=E.nextSibling,l=x.firstChild,R=l.firstChild,y=R.firstChild,b=l.nextSibling,w=b.firstChild,T=w.firstChild,A=T.nextSibling;return _.$$click=()=>Bs(!1),v.$$click=C=>C.stopPropagation(),c.$$click=()=>Bs(!1),tt(c,rt(Ga,{size:14})),tt(l,rt(Ue,{get when(){return e()},get fallback(){return(()=>{var C=UE(),D=C.firstChild;return C.$$click=()=>i(!0),tt(C,rt(Jf,{size:13}),D),C})()},get children(){var C=LE(),D=C.firstChild,U=D.nextSibling,F=U.nextSibling;return C.addEventListener("submit",d),D.$$input=O=>t(O.currentTarget.value),F.$$click=()=>i(!1),ce(()=>D.value=n()),C}}),R),ya(R,"click",Mg,!0),tt(R,rt(ka,{size:13}),y),tt(A,rt(Mu,{get each(){return h()},children:C=>{const D=()=>C.id===Ba(),U=()=>r()===C.id;return(()=>{var F=OE(),O=F.firstChild,G=O.firstChild,z=G.firstChild,$=O.nextSibling,Z=$.firstChild,ot=$.nextSibling,lt=ot.nextSibling,xt=lt.firstChild;return tt(z,rt(qf,{size:14})),tt(G,rt(Ue,{get when(){return U()},get fallback(){return(()=>{var ut=BE();return ut.$$dblclick=Mt=>{Mt.stopPropagation(),m(C.id,C.name)},ut.$$click=()=>M(C.id,C.name),tt(ut,()=>C.name),ut})()},get children(){var ut=FE();return ut.$$click=Mt=>Mt.stopPropagation(),ut.addEventListener("blur",g),ut.$$keydown=Mt=>{Mt.key==="Enter"?g():Mt.key==="Escape"&&S()},ut.$$input=Mt=>a(Mt.currentTarget.value),ce(()=>ut.value=o()),ut}}),null),tt(G,(()=>{var ut=qi(()=>!!D());return()=>ut()&&zE()})(),null),tt($,()=>C.operations.length,Z),tt(ot,()=>new Date(C.updatedAt).toLocaleDateString()),tt(xt,(()=>{var ut=qi(()=>!D());return()=>ut()&&(()=>{var Mt=kE();return Mt.$$click=()=>p(C.id),Mt})()})(),null),tt(xt,(()=>{var ut=qi(()=>h().length>1);return()=>ut()&&(()=>{var Mt=GE();return Mt.$$click=()=>{confirm(`Delete project "${C.name}"?`)&&yg(C.id)},Mt})()})(),null),ce(()=>Un(F,D()?"active-row":"")),F})()}})),_}})}ui(["click","input","keydown","dblclick"]);var VE=Pt("<div class=warning-banner><div class=warning-banner-icon></div><div class=warning-banner-content><div class=warning-banner-title>Toolpath Warnings:</div><ul class=warning-banner-list>"),$E=Pt("<li class=warning-item>");function WE(){const n=()=>Ys().warnings;return rt(Ue,{get when(){return n().length>0},get children(){var t=VE(),e=t.firstChild,i=e.nextSibling,r=i.firstChild,s=r.nextSibling;return tt(e,rt(wa,{size:15})),tt(s,rt(Mu,{get each(){return n()},children:o=>(()=>{var a=$E();return tt(a,o),a})()})),t}})}var XE=Pt("<div class=app-layout><main class=main-workspace><aside class=sidebar-operations></aside><section class=center-params></section><section class=preview-panel>");function qE(){return Af(()=>{const n=t=>{const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT")||((t.ctrlKey||t.metaKey)&&!t.shiftKey&&t.key.toLowerCase()==="z"?(t.preventDefault(),$f()):((t.ctrlKey||t.metaKey)&&t.shiftKey&&t.key.toLowerCase()==="z"||(t.ctrlKey||t.metaKey)&&t.key.toLowerCase()==="y")&&(t.preventDefault(),Wf()))};window.addEventListener("keydown",n),Su(()=>{window.removeEventListener("keydown",n)})}),(()=>{var n=XE(),t=n.firstChild,e=t.firstChild,i=e.nextSibling,r=i.nextSibling;return tt(n,rt(x_,{}),t),tt(n,rt(WE,{}),t),tt(e,rt(T_,{})),tt(i,rt(O_,{})),tt(r,rt(IE,{})),tt(n,rt(HE,{}),null),tt(n,rt(d_,{}),null),tt(n,rt(o_,{}),null),n})()}const bf=document.getElementById("root");bf&&Um(()=>rt(qE,{}),bf);
