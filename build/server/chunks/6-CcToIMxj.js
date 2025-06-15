import { f as fetchERecht24Api, a as urlPrivacy } from './apirequest-SOZ8w9Aw.js';
import { readFile, writeFile } from 'fs/promises';

const prerender = false;
let apiResponse = null;
async function load() {
  try {
    const LastPullLog = "./static/apidata/lastpull-privacy.log";
    let lastpull = "";
    try {
      lastpull = await readFile(LastPullLog, "utf8");
    } catch {
      lastpull = "";
    }
    const datenow = /* @__PURE__ */ new Date();
    const datenowMs = datenow.getTime();
    const lastpullMs = lastpull ? Date.parse(lastpull) : 0;
    let datediff = datenowMs - lastpullMs;
    const privacyFilePath = "./static/apidata/privacy.json";
    let privacyFileExists = false;
    let privacy = null;
    try {
      privacy = await readFile(privacyFilePath, "utf8");
      privacyFileExists = true;
    } catch {
      privacy = null;
      privacyFileExists = false;
    }
    if (!privacyFileExists) {
      datediff = 1800001;
    }
    if (datediff > 18e5) {
      apiResponse = await fetchERecht24Api(urlPrivacy);
      if (apiResponse.apidata) {
        const json = JSON.stringify(apiResponse.apidata, null, 2);
        const filename = "./static/apidata/privacy.json";
        await writeFile(filename, json, "utf-8");
        await writeFile(LastPullLog, datenow.toISOString(), "utf8");
        return { privacy: apiResponse.apidata };
      } else {
        return { privacy: privacy ? JSON.parse(privacy) : null, error: apiResponse.error };
      }
    } else {
      return { privacy: privacy ? JSON.parse(privacy) : null };
    }
  } catch (err) {
    return { error: "An error occurred while loading the privacy data: " + err };
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C4mkK85r.js')).default;
const server_id = "src/routes/privacy_EN/+page.server.ts";
const imports = ["_app/immutable/nodes/6.DL1HRQcw.js","_app/immutable/chunks/DoJ4FQ80.js","_app/immutable/chunks/DyjbJ_Nr.js","_app/immutable/chunks/foGI30Z4.js","_app/immutable/chunks/DkCPv214.js","_app/immutable/chunks/zKfbbJIh.js","_app/immutable/chunks/DbDjbU46.js","_app/immutable/chunks/ozF4whhL.js","_app/immutable/chunks/DDEW7o5U.js","_app/immutable/chunks/bzeerR4Q.js","_app/immutable/chunks/CbYkjYKz.js","_app/immutable/chunks/C8E--EF8.js","_app/immutable/chunks/Dw38WHNR.js","_app/immutable/chunks/DcUZX_cE.js","_app/immutable/chunks/Ci594k53.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-CcToIMxj.js.map
