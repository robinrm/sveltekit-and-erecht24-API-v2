import { X as fallback, $ as head, Z as bind_props, x as pop, v as push } from './index-DRPMmmiR.js';
import { h as html_de, l as logo, m as modified } from './seal_copyright-BqFX8j1O.js';
import { h as html } from './html-FW6Ia4bL.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  let target = fallback($$props["target"], "_blank");
  let rel = fallback($$props["rel"], "noopener noreferrer");
  let apidata_content = "false";
  let display_api_data = null;
  if (data.error == void 0) {
    let json_input = JSON.stringify(data.apidata.html_de, null, 4);
    json_input = json_input.replace(/\r?\n|\r/g, "");
    json_input = json_input.replace(/mustermann@musterfirma.de/gm, "<a href=mailto:mustermann@musterfirma.de>mustermann@musterfirma.de</a>");
    apidata_content = JSON.parse(json_input);
    display_api_data = true;
  } else {
    let json_input = JSON.stringify(html_de, null, 4);
    json_input = json_input.replace(/\r?\n|\r/g, "");
    apidata_content = JSON.parse(json_input);
    display_api_data = true;
    display_api_data = false;
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>erecht24 API v2 Test Project</title>`;
    $$payload2.out += `<meta name="description" content="imprint in german from erecht24 API v2 test project">`;
  });
  $$payload.out += `<section class="content"><p>`;
  if (display_api_data) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${html(apidata_content)} Letzte Änderung: ${html(data.apidata.modified)}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${html(apidata_content)} Letzte Änderung: ${html(modified)} <br class="inline-breack"> Daten konnten nicht aktuallisiert werden. <br class="inline-breack"> <hgl class="highlight_error">Error: ${escape_html(data.error)}</hgl> <br class="inline-breack"> Für weitere Informationen siehe: <a href="https://api-docs.e-recht24.de/"${attr("target", target)}${attr("rel", rel)}>API Doku</a>`;
  }
  $$payload.out += `<!--]--> <br class="inline-breack"> <a href="https://www.digistore24.com/redir/174027/ecmin_gbr/" class="nolink"${attr("target", target)}${attr("rel", rel)}><img${attr("src", logo)} alt="Vertreten durch die eRecht24 GmbH"></a></p></section>`;
  bind_props($$props, { data, target, rel });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-ab-DUbJb.js.map
