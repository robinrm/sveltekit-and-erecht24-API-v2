import { V as store_get, W as unsubscribe_stores, x as pop, v as push } from './index-DRPMmmiR.js';
import { p as page } from './stores-CrtYttwd.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import './exports-CTha0ECg.js';

function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-BLLqUwfp.js.map
