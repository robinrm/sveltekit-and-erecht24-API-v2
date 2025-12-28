import { H as escape_html } from './context-BwY0VmbB.js';
import { p as page } from './index2-CZAtziUo.js';
import './client-WJVgMzYQ.js';

function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section><div><p>Es trat folgender Fehler auf:</p> <h1>`);
    if (page.status) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(page.status)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Unbekannter Status`);
    }
    $$renderer2.push(`<!--]--> `);
    if (page.error?.message) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(page.error.message)}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Unbekannter Fehler`);
    }
    $$renderer2.push(`<!--]--></h1> <br class="inline-breack"/> <p>wende dich bitte an uns an die Adresse im Impressum, sollte das
            Problem länger andauern oder versuche eine der unteren Optionen!</p> <button class="help-actions svelte-1j96wlh">Reload</button> <button class="help-actions svelte-1j96wlh">Zurück</button></div></section>`);
  });
}

export { _error as default };
//# sourceMappingURL=_error.svelte-B4W6bslP.js.map
