import { p as push, q as fallback, v as head, w as attr, n as bind_props, l as pop } from './index-B2hqJWev.js';
import { l as logo } from './seal_copyright-DfVWVQOf.js';
import { h as html } from './html-BGq_frOu.js';

function _page($$payload, $$props) {
  push();
  let target = fallback($$props["target"], "_blank");
  let rel = fallback($$props["rel"], "noopener noreferrer");
  let apidata_content = "";
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>erecht24 API v2 Test Project</title>`;
    $$payload2.out += `<meta name="description" content="imprint in english from erecht24 API v2 test project">`;
  });
  $$payload.out += `<section class="content"><p>`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${html(apidata_content)}`;
  }
  $$payload.out += `<!--]--> <br class="inline-breack"> <a href="https://www.digistore24.com/redir/174027/ecmin_gbr/" class="nolink"${attr("target", target)}${attr("rel", rel)}><img${attr("src", logo)} alt="Vertreten durch die eRecht24 GmbH"></a></p></section>`;
  bind_props($$props, { target, rel });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CIU0F3g9.js.map
