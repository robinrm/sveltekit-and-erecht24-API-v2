var An=Array.isArray,Sn=Array.from,Rn=Object.defineProperty,at=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,On=Object.prototype,xn=Array.prototype,Vt=Object.getPrototypeOf;const Dn=()=>{};function kn(t){return t()}function Gt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,M=8,nt=16,y=32,K=64,O=128,B=256,p=512,S=1024,Y=2048,I=4096,j=8192,$t=16384,vt=32768,In=65536,Kt=1<<18,pt=1<<19,ut=Symbol("$state"),Nn=Symbol("legacy props"),bn=Symbol("");function ht(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Zt(t,this.v)}function Wt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Jt(t){throw new Error("effect_orphan")}function Qt(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function Cn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function qn(){throw new Error("state_prototype_fixed")}function Xt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}let Z=!1;function Ln(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Mn(t){return yt(rt(t))}function nn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Yn(t,n=!1){return yt(nn(t,n))}function yt(t){return u!==null&&u.f&m&&(d===null?dn([t]):d.push(t)),t}function jn(t,n){return u!==null&&lt()&&u.f&(m|nt)&&(d===null||!d.includes(t))&&tn(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=Lt(),Et(t,S),lt()&&a!==null&&a.f&p&&!(a.f&y)&&(_!==null&&_.includes(t)?(E(a,S),z(a)):A===null?yn([t]):A.push(t))),n}function Et(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&S||!e&&o===a||(E(o,n),i&(p|O)&&(i&m?Et(o,Y):z(o)))}}const Hn=1,Un=2,Bn=4,Vn=8,Gn=16,$n=1,Kn=2,en="[",sn="[!",ln="]",wt={},Zn=Symbol();function mt(t){console.warn("hydration_mismatch")}let N=!1;function Wn(t){N=t}let T;function F(t){if(t===null)throw mt(),wt;return T=t}function zn(){return F(b(T))}function Jn(t){if(N){if(b(T)!==null)throw mt(),wt;T=t}}function Qn(){for(var t=0,n=T;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var it,on,Tt,gt;function Xn(){if(it===void 0){it=window,on=document;var t=Element.prototype,n=Node.prototype;Tt=at(n,"firstChild").get,gt=at(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function J(t=""){return document.createTextNode(t)}function Q(t){return Tt.call(t)}function b(t){return gt.call(t)}function tr(t,n){if(!N)return Q(t);var r=Q(T);if(r===null)r=T.appendChild(J());else if(n&&r.nodeType!==3){var e=J();return r==null||r.before(e),F(e),e}return F(r),r}function nr(t,n){if(!N){var r=Q(t);return r instanceof Comment&&r.data===""?b(r):r}return T}function rr(t,n=1,r=!1){let e=N?T:t;for(;n--;)e=b(e);if(!N)return e;var s=e.nodeType;if(r&&s!==3){var l=J();return e==null||e.before(l),F(l),l}return F(e),e}function er(t){t.textContent=""}function an(t){var n=m|S;a===null?n|=O:a.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:a};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function sr(t){const n=an(t);return n.equals=dt,n}function At(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):C(e)}}}function St(t){var n,r=a;$(t.parent);try{At(t),n=Mt(t)}finally{$(r)}return n}function Rt(t){var n=St(t),r=(x||t.f&O)&&t.deps!==null?Y:p;E(t,r),t.equals(n)||(t.v=n,t.version=Lt())}function et(t){At(t),L(t,0),E(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){a===null&&u===null&&Jt(),u!==null&&u.f&O&&zt(),st&&Wt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&K)!==0,l=a,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{ft(!0),W(o),o.f|=$t}catch(c){throw C(o),c}finally{ft(i)}}else n!==null&&z(o);var w=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&pt)===0;if(!w&&!s&&e&&(l!==null&&un(o,l),u!==null&&u.f&m)){var g=u;(g.children??(g.children=[])).push(o)}return o}function lr(t){const n=P(M,null,!1);return E(n,p),n.teardown=t,n}function or(t){Ot();var n=a!==null&&(a.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:a,reaction:u})}else{var e=xt(t);return e}}function ar(t){return Ot(),fn(t)}function ur(t){const n=P(K,t,!0);return()=>{C(n)}}function xt(t){return P(ct,t,!1)}function fn(t){return P(M,t,!0)}function ir(t){return _n(t)}function _n(t,n=0){return P(M|nt|n,t,!0)}function fr(t,n=!0){return P(M|y,t,!0,n)}function Dt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),G(null);try{n.call(null)}finally{_t(r),G(e)}}}function kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function It(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:b(e);e.remove(),e=l}r=!0}It(t,n&&!r),kt(t),L(t,0),E(t,j);var o=t.transitions;if(o!==null)for(const w of o)w.stop();Dt(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function _r(t,n){var r=[];bt(t,r,!0),vn(r,()=>{C(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function bt(t,n,r){if(!(t.f&I)){if(t.f^=I,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&vt)!==0||(e.f&y)!==0;bt(e,n,l?r:!1),e=s}}}function cr(t){Pt(t,!0)}function Pt(t,n){if(t.f&I){H(t)&&W(t),t.f^=I;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,X=[];function Ct(){V=!1;const t=X.slice();X=[],Gt(t)}function vr(t){V||(V=!0,queueMicrotask(Ct)),X.push(t)}function pn(){V&&Ct()}const Ft=0,hn=1;let U=Ft,q=!1,D=!1,st=!1;function ft(t){D=t}function _t(t){st=t}let R=[],k=0;let u=null;function G(t){u=t}let a=null;function $(t){a=t}let d=null;function dn(t){d=t}let _=null,h=0,A=null;function yn(t){A=t}let qt=0,x=!1,f=null;function Lt(){return++qt}function lt(){return!Z||f!==null&&f.l===null}function H(t){var o,i;var n=t.f;if(n&S)return!0;if(n&Y){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var l=r[s];if(H(l)&&Rt(l),e&&a!==null&&!x&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||E(t,p)}return!1}function En(t,n,r){throw t}function Mt(t){var ot;var n=_,r=h,e=A,s=u,l=x,o=d,i=f,w=t.f;_=null,h=0,A=null,u=w&(y|K)?null:t,x=!D&&(w&O)!==0,d=null,f=t.ctx;try{var g=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!x)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return g}finally{_=n,h=r,A=e,u=s,x=l,d=o,f=i}}function wn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(E(n,Y),n.f&(O|B)||(n.f^=B),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)wn(t,r[e])}function W(t){var n=t.f;if(!(n&j)){E(t,p);var r=a;a=t;try{n&nt?cn(t):It(t),kt(t),Dt(t);var e=Mt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(s){En(s)}finally{a=r}}}function Yt(){k>1e3&&(k=0,Qt()),k++}function jt(t){var n=t.length;if(n!==0){Yt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Ht(s,l),mn(l)}}finally{D=r}}}function mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|I))&&H(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function Tn(){if(q=!1,k>1001)return;const t=R;R=[],jt(t),q||(k=0)}function z(t){U===Ft&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(K|y)){if(!(r&p))return;n.f^=p}}R.push(n)}function Ht(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,o=l&&(s&p)!==0;if(!o&&!(s&I))if(s&M){l?r.f^=p:H(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var g=v.next;if(g!==null){r=g;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ht(i,n)}function Ut(t){var n=U,r=R;try{Yt();const s=[];U=hn,R=s,q=!1,jt(r);var e=t==null?void 0:t();return pn(),(R.length>0||s.length>0)&&Ut(),k=0,e}finally{U=n,R=r}}async function pr(){await Promise.resolve(),Ut()}function hr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=St(t);return et(t),e}if(u!==null){d!==null&&d.includes(t)&&Xt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&a!==null&&a.f&p&&!(a.f&y)&&A.includes(t)&&(E(a,S),z(a))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,H(l)&&Rt(l)),t.v}function dr(t){const n=u;try{return u=null,t()}finally{u=n}}const gn=~(S|Y|p);function E(t,n){t.f=t.f&gn|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function Er(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=a,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];$(l.effect),G(l.reaction),xt(l.fn)}}finally{$(r),G(e)}}f=n.p,n.m=!0}return{}}function wr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{on as $,jn as A,Yn as B,zn as C,fr as D,mt as E,wt as F,C as G,Kt as H,Vt as I,Bt as J,Xn as K,bn as L,ln as M,Pn as N,er as O,Sn as P,ur as Q,a as R,ut as S,On as T,xn as U,rt as V,Fn as W,Zn as X,at as Y,qn as Z,An as _,Er as a,cr as a0,_r as a1,vt as a2,sn as a3,Qn as a4,Cn as a5,In as a6,y as a7,K as a8,$ as a9,Z as aa,Un as ab,Vn as ac,Nn as ad,sr as ae,Bn as af,dt as ag,Hn as ah,Gn as ai,nn as aj,G as ak,u as al,lr as am,vr as an,Rn as ao,Dn as ap,$n as aq,Kn as ar,it as as,xt as at,fn as au,Ut as av,pr as aw,Mn as ax,Zt as ay,or as b,tr as c,f as d,dr as e,nr as f,Gt as g,hr as h,kn as i,wr as j,an as k,J as l,_n as m,N as n,en as o,yr as p,b as q,Jn as r,rr as s,ir as t,ar as u,Wn as v,F as w,T as x,Q as y,Ln as z};