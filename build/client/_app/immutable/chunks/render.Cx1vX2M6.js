import{K as g,y as D,o as O,q as S,F as m,v as h,w as T,C as I,x as _,M as L,E as V,N as C,O as H,P as M,Q as Y,l as P,D as $,p as j,n as E,R as k,a as q,d as F}from"./runtime.s4LxpMgD.js";import{b as K,r as N,h as v}from"./store.BV25xDdQ.js";import{r as Q}from"./svelte-head.BL-8Fur5.js";import{b as W}from"./disclose-version.CzQY0kcY.js";const z=["touchstart","touchmove"];function B(t){return z.includes(t)}function x(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function G(t,e){return b(t,e)}function ee(t,e){g(),e.intro=e.intro??!1;const n=e.target,u=E,l=_;try{for(var r=D(n);r&&(r.nodeType!==8||r.data!==O);)r=S(r);if(!r)throw m;h(!0),T(r),I();const i=b(t,{...e,anchor:r});if(_===null||_.nodeType!==8||_.data!==L)throw V(),m;return h(!1),i}catch(i){if(i===m)return e.recover===!1&&C(),g(),H(n),h(!1),G(t,e);throw i}finally{h(u),T(l),Q()}}const d=new Map;function b(t,{target:e,anchor:n,props:u={},events:l,context:r,intro:i=!0}){g();var y=new Set,p=o=>{for(var a=0;a<o.length;a++){var s=o[a];if(!y.has(s)){y.add(s);var f=B(s);e.addEventListener(s,v,{passive:f});var R=d.get(s);R===void 0?(document.addEventListener(s,v,{passive:f}),d.set(s,1)):d.set(s,R+1)}}};p(M(K)),N.add(p);var c=void 0,A=Y(()=>{var o=n??e.appendChild(P());return $(()=>{if(r){j({});var a=F;a.c=r}l&&(u.$$events=l),E&&W(o,null),c=t(o,u)||{},E&&(k.nodes_end=_),r&&q()}),()=>{var f;for(var a of y){e.removeEventListener(a,v);var s=d.get(a);--s===0?(document.removeEventListener(a,v),d.delete(a)):d.set(a,s)}N.delete(p),w.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(c,A),c}let w=new WeakMap;function te(t){const e=w.get(t);e&&e()}export{ee as h,G as m,x as s,te as u};