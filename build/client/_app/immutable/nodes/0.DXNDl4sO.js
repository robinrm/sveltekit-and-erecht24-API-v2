import{a as f,t as u}from"../chunks/disclose-version.CzQY0kcY.js";import"../chunks/legacy.CtYM5vDw.js";import{n as k,C as w,p as h,t as L,a as b,as as T,A as p,h as $,B,c as l,r as c,s as v}from"../chunks/runtime.s4LxpMgD.js";import{p as O,i as C}from"../chunks/props.Bqh0rTSG.js";import{i as _}from"../chunks/lifecycle.DyIOpnj9.js";import{e as m,s as P,a as A}from"../chunks/store.BV25xDdQ.js";import{p as E}from"../chunks/stores.Cg4rUp9c.js";function H(a,t,r,s,n){var o;k&&w();var e=(o=t.$$slots)==null?void 0:o[r],i=!1;e===!0&&(e=t.children,i=!0),e===void 0||e(a,i?()=>s:s)}function I(a,t,r){if(r){if(a.classList.contains(t))return;a.classList.add(t)}else{if(!a.classList.contains(t))return;a.classList.remove(t)}}var S=u('<button class="back-to-top svelte-petspv" aria-label="none"></button>');function V(a,t){h(t,!1);let r=O(t,"showOnPx",8,10),s=B(!0);function n(){document.body.scrollIntoView()}function e(){return document.documentElement||document.body}function i(){e()&&(e().scrollTop>r()?p(s,!1):p(s,!0))}_();var o=S();m("scroll",T,i),L(()=>I(o,"hidden",$(s))),m("click",o,n),f(a,o),b()}var j=u('<div>Back to <a href="/">Home</a>.</div>'),q=u('<div class="app svelte-rxyi5l"><main class="svelte-rxyi5l"><!></main> <footer class="svelte-rxyi5l"><!></footer> <!></div>');function N(a,t){h(t,!1);const r=P(),s=()=>A(E,"$page",r);_();var n=q(),e=l(n),i=l(e);H(i,t,"default",{}),c(e);var o=v(e,2),g=l(o);C(g,()=>s().url.pathname==="/",d=>{},d=>{var x=j();f(d,x)}),c(o);var y=v(o,2);V(y,{}),c(n),f(a,n),b()}export{N as component};
