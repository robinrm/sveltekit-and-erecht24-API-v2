import { p as push, v as head, u as escape_html, n as bind_props, l as pop } from './index-B2hqJWev.js';
import { p as page } from './index2-DMlbhW9e.js';
import './exports-CXb9l_ZD.js';

function _page($$payload, $$props) {
  push();
  const target = "_blank";
  const rel = "noopener noreferrer";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>erecht24 API v2 Test Project</title>`;
    $$payload2.out += `<meta name="description" content="test page">`;
  });
  $$payload.out += `<section class="content"><h1>hello welcome at ${escape_html(page.url.pathname)}!</h1></section>`;
  bind_props($$props, { target, rel });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BRifoieL.js.map
