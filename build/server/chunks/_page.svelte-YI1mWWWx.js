import { z as head, x as bind_props } from './index-BRjem2Y3.js';
import './client-WJVgMzYQ.js';
import { G as fallback } from './context-BwY0VmbB.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let target = fallback($$props["target"], "_blank");
    let rel = fallback($$props["rel"], "noopener noreferrer");
    head("1cbmlsn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>erecht24 API v2 Test Project</title>`);
      });
      $$renderer3.push(`<meta name="description" content="privacy in english from erecht24 API v2 test project"/>`);
    });
    $$renderer2.push(`<section class="content"><div>`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`loading data, please wait ...`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    bind_props($$props, { target, rel });
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-YI1mWWWx.js.map
