import{a as d,t as _}from"../chunks/disclose-version.CzQY0kcY.js";import"../chunks/legacy.CtYM5vDw.js";import{p as C,A as t,t as N,a as E,B as O,$ as L,f as P,h as u,c as f,s,r as h}from"../chunks/runtime.s4LxpMgD.js";import{s as B}from"../chunks/render.Cx1vX2M6.js";import{p as k,i as D}from"../chunks/props.Bqh0rTSG.js";import{s as i,h as g}from"../chunks/attributes.CLe6I5cX.js";import{h as F}from"../chunks/svelte-head.BL-8Fur5.js";import{i as G}from"../chunks/lifecycle.DyIOpnj9.js";import{a as H,l as R,m as T}from"../chunks/seal_copyright.DnnDHDMe.js";var q=_('<meta name="description" content="imprint in english from erecht24 API v2 test project">'),z=_("<!> Last Changes: <!>",1),K=_('<!> Last Changes: <!> <br class="inline-breack"> Error while refreshing data. <br class="inline-breack"> <hgl class="highlight_error"> </hgl> <br class="inline-breack"> For more details see: <a href="https://api-docs.e-recht24.de/">API Doku</a>',1),M=_('<section class="content"><p><!> <br class="inline-breack"> <a href="https://www.digistore24.com/redir/174027/ecmin_gbr/" class="nolink"><img alt="represented by eRecht24 GmbH"></a></p></section>');function ae(S,o){C(o,!1);let n=k(o,"data",8),j=k(o,"target",8,"_blank"),w=k(o,"rel",8,"noopener noreferrer"),l=O("false"),m=O(null);if(n().error==null){let e=JSON.stringify(n().apidata.html_en,null,4);e=e.replace(/\r?\n|\r/g,""),t(l,JSON.parse(e)),t(m,!0)}else{let e=JSON.stringify(H,null,4);e=e.replace(/\r?\n|\r/g,""),t(l,JSON.parse(e)),t(m,!0),t(m,!1)}G();var v=M();F(e=>{var a=q();L.title="erecht24 API v2 Test Project",d(e,a)});var y=f(v),A=f(y);D(A,()=>u(m),e=>{var a=z(),r=P(a);g(r,()=>u(l));var c=s(r,2);g(c,()=>n().apidata.modified),d(e,a)},e=>{var a=K(),r=P(a);g(r,()=>u(l));var c=s(r,2);g(c,()=>T);var b=s(c,6),I=f(b);h(b);var J=s(b,4);N(()=>{B(I,`Error: ${n().error??""}`),i(J,"target",j()),i(J,"rel",w())}),d(e,a)});var p=s(A,4),x=f(p);i(x,"src",R),h(p),h(y),h(v),N(()=>{i(p,"target",j()),i(p,"rel",w())}),d(S,v),E()}export{ae as component};
