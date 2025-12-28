import { w as slot, x as bind_props, y as attr_class } from './index-BRjem2Y3.js';
import { G as fallback } from './context-BwY0VmbB.js';
import { p as page } from './index2-CZAtziUo.js';
import './client-WJVgMzYQ.js';

function BackToTop($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let showOnPx = fallback($$props["showOnPx"], 10);
    let hidden = true;
    $$renderer2.push(`<button${attr_class("back-to-top svelte-ubv5yg", void 0, { "hidden": hidden })} aria-label="none"></button>`);
    bind_props($$props, { showOnPx });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const target = "_blank";
    const rel = "noopener noreferrer";
    $$renderer2.push(`<div class="app svelte-12qhfyh"><main class="svelte-12qhfyh"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer class="svelte-12qhfyh">`);
    if (page.url.pathname === "/") {
      $$renderer2.push("<!--[-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div>Back to <a href="/">Home</a>.</div>`);
    }
    $$renderer2.push(`<!--]--></footer> `);
    BackToTop($$renderer2, {});
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { target, rel });
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BAqxAKms.js.map
