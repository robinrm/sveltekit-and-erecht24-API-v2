import{a as d,t as _}from"../chunks/disclose-version.CzQY0kcY.js";import"../chunks/legacy.CtYM5vDw.js";import{p as C,A as t,t as N,a as E,B as O,$ as L,f as P,h as b,c as f,s,r as h}from"../chunks/runtime.s4LxpMgD.js";import{s as B}from"../chunks/render.Cx1vX2M6.js";import{p as k,i as D}from"../chunks/props.Bqh0rTSG.js";import{s as i,h as g}from"../chunks/attributes.CLe6I5cX.js";import{h as F}from"../chunks/svelte-head.BL-8Fur5.js";import{i as G}from"../chunks/lifecycle.DyIOpnj9.js";import{a as H,l as R,m as T}from"../chunks/seal_copyright.DnnDHDMe.js";var q=_('<meta name="description" content="imprint in english from erecht24 API v2 test project">'),z=_("<!> Last Changes: <!>",1),K=_('<!> Last Changes: <!> <br class="inline-breack"> Error while refreshing data. <br class="inline-breack"> <hgl class="highlight_error"> </hgl> <br class="inline-breack"> For more details see: <a href="https://api-docs.e-recht24.de/">API Doku</a>',1),M=_('<section class="content"><p><!> <br class="inline-breack"> <a href="https://www.digistore24.com/redir/174027/ecmin_gbr/" class="nolink"><img alt="represented by eRecht24 GmbH"></a></p></section>');function re(S,n){C(n,!1);let o=k(n,"data",8),j=k(n,"target",8,"_blank"),w=k(n,"rel",8,"noopener noreferrer"),l=O("false"),m=O(null);if(o().error==null){let e=JSON.stringify(o().apidata.html_en,null,4);e=e.replace(/\r?\n|\r/g,""),e=e.replace(/mustermann@musterfirma.de/gm,"<a href=mailto:mustermann@musterfirma.de>mustermann@musterfirma.de</a>"),t(l,JSON.parse(e)),t(m,!0)}else{let e=JSON.stringify(H,null,4);e=e.replace(/\r?\n|\r/g,""),t(l,JSON.parse(e)),t(m,!0),t(m,!1)}G();var v=M();F(e=>{var r=q();L.title="erecht24 API v2 Test Project",d(e,r)});var y=f(v),A=f(y);D(A,()=>b(m),e=>{var r=z(),a=P(r);g(a,()=>b(l));var c=s(a,2);g(c,()=>o().apidata.modified),d(e,r)},e=>{var r=K(),a=P(r);g(a,()=>b(l));var c=s(a,2);g(c,()=>T);var u=s(c,6),I=f(u);h(u);var J=s(u,4);N(()=>{B(I,`Error: ${o().error??""}`),i(J,"target",j()),i(J,"rel",w())}),d(e,r)});var p=s(A,4),x=f(p);i(x,"src",R),h(p),h(y),h(v),N(()=>{i(p,"target",j()),i(p,"rel",w())}),d(S,v),E()}export{re as component};