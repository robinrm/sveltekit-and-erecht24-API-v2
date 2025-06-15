import { f as fetchERecht24Api, u as urlImprint } from './apirequest-SOZ8w9Aw.js';
import { readFile, writeFile } from 'fs/promises';

const prerender = false;
let apiResponse = null;
async function load() {
  try {
    const LastPullLog = "./static/apidata/lastpull-imprint.log";
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
    const imprintFilePath = "./static/apidata/imprint.json";
    let imprintFileExists = false;
    let imprint = null;
    try {
      imprint = await readFile(imprintFilePath, "utf8");
      imprintFileExists = true;
    } catch {
      imprint = null;
      imprintFileExists = false;
    }
    if (!imprintFileExists) {
      datediff = 1800001;
    }
    if (datediff > 18e5) {
      apiResponse = await fetchERecht24Api(urlImprint);
      if (apiResponse.apidata) {
        const json = JSON.stringify(apiResponse.apidata, null, 2);
        const filename = "./static/apidata/imprint.json";
        await writeFile(filename, json, "utf-8");
        await writeFile(LastPullLog, datenow.toISOString(), "utf8");
        return { imprint: apiResponse.apidata };
      } else {
        return { imprint: imprint ? JSON.parse(imprint) : null, error: apiResponse.error };
      }
    } else {
      return { imprint: imprint ? JSON.parse(imprint) : null };
    }
  } catch (err) {
    return { error: "An error occurred while loading the imprint data: " + err };
  }
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D-93sdIo.js')).default;
const server_id = "src/routes/imprint_EN/+page.server.ts";
const imports = ["_app/immutable/nodes/4.DRKL_n6U.js","_app/immutable/chunks/DoJ4FQ80.js","_app/immutable/chunks/DyjbJ_Nr.js","_app/immutable/chunks/foGI30Z4.js","_app/immutable/chunks/DkCPv214.js","_app/immutable/chunks/zKfbbJIh.js","_app/immutable/chunks/DbDjbU46.js","_app/immutable/chunks/ozF4whhL.js","_app/immutable/chunks/DDEW7o5U.js","_app/immutable/chunks/bzeerR4Q.js","_app/immutable/chunks/Cl3TGfqg.js","_app/immutable/chunks/CbYkjYKz.js","_app/immutable/chunks/C8E--EF8.js","_app/immutable/chunks/Dw38WHNR.js","_app/immutable/chunks/DOiJmLaJ.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-CMI-nxxh.js.map
