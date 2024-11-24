import { T as slot, V as store_get, W as unsubscribe_stores, x as pop, X as fallback, Y as stringify, Z as bind_props, v as push } from './index-DRPMmmiR.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { p as page } from './stores-CrtYttwd.js';
import './escaping-CqgfEcN3.js';
import './exports-CTha0ECg.js';

function BackToTop($$payload, $$props) {
  push();
  let showOnPx = fallback($$props["showOnPx"], 10);
  $$payload.out += `<button${attr("class", `back-to-top svelte-petspv ${stringify(["hidden"].filter(Boolean).join(" "))}`)} aria-label="none"></button>`;
  bind_props($$props, { showOnPx });
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<div class="app svelte-rxyi5l"><main class="svelte-rxyi5l"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="svelte-rxyi5l">`;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname === "/") {
    $$payload.out += "<!--[-->";
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div>Back to <a href="/">Home</a>.</div>`;
  }
  $$payload.out += `<!--]--></footer> `;
  BackToTop($$payload, {});
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BeYq_4Fi.js.map
