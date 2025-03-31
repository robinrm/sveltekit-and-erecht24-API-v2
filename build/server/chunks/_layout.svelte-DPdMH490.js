import { p as push, m as slot, n as bind_props, l as pop, q as fallback, t as attr_class } from './index-B2hqJWev.js';
import { p as page } from './index2-DMlbhW9e.js';
import './exports-CXb9l_ZD.js';

function BackToTop($$payload, $$props) {
  push();
  let showOnPx = fallback($$props["showOnPx"], 10);
  let hidden = true;
  $$payload.out += `<button${attr_class("back-to-top svelte-petspv", void 0, { "hidden": hidden })} aria-label="none"></button>`;
  bind_props($$props, { showOnPx });
  pop();
}
function _layout($$payload, $$props) {
  push();
  const target = "_blank";
  const rel = "noopener noreferrer";
  $$payload.out += `<div class="app svelte-rxyi5l"><main class="svelte-rxyi5l"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="svelte-rxyi5l">`;
  if (page.url.pathname === "/") {
    $$payload.out += "<!--[-->";
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div>Back to <a href="/">Home</a>.</div>`;
  }
  $$payload.out += `<!--]--></footer> `;
  BackToTop($$payload, {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { target, rel });
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DPdMH490.js.map
