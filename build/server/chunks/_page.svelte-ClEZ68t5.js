import { z as head, x as bind_props } from './index-C38Lqc8r.js';
import './client-CElqSKqd.js';
import { G as fallback } from './context-DWf2YUHq.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let target = fallback($$props["target"], "_blank");
    let rel = fallback($$props["rel"], "noopener noreferrer");
    head("1wgys7z", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>erecht24 API v2 Test Project</title>`);
      });
      $$renderer3.push(`<meta name="description" content="privacy in german from erecht24 API v2 test project"/>`);
    });
    $$renderer2.push(`<section class="content"><div>`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Lade Daten, einen Moment bitte ...`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
    bind_props($$props, { target, rel });
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-ClEZ68t5.js.map
