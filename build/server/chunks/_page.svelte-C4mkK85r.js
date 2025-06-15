import { p as push, G as fallback, L as head, F as bind_props, n as pop } from './exports-CaU072BI.js';
import './client-cSphzYuA.js';

function _page($$payload, $$props) {
  push();
  let target = fallback($$props["target"], "_blank");
  let rel = fallback($$props["rel"], "noopener noreferrer");
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>erecht24 API v2 Test Project</title>`;
    $$payload2.out += `<meta name="description" content="privacy in english from erecht24 API v2 test project">`;
  });
  $$payload.out += `<section class="content"><div>`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `loading data, please wait ...`;
  }
  $$payload.out += `<!--]--></div></section>`;
  bind_props($$props, { target, rel });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-C4mkK85r.js.map
