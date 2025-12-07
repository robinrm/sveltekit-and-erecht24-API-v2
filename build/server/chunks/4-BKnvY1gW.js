import { writeFile } from 'node:fs/promises';
import { C as CheckPullRequest, L as LastPullLogImprint, a as ContentFilePathImprint, T as TimeLimit, f as fetchERecht24Api, u as urlImprint } from './apirequest-DJBqjIPA.js';

const prerender = false;
async function load() {
  try {
    let pullresponse = await CheckPullRequest(LastPullLogImprint, ContentFilePathImprint, TimeLimit);
    let APIcontent = null;
    if (pullresponse.fileExists) {
      APIcontent = pullresponse.offlinedata || null;
    }
    if (pullresponse.datediff > TimeLimit) {
      let apiResponse = await fetchERecht24Api(urlImprint);
      if (apiResponse.apidata) {
        const json = JSON.stringify(apiResponse.apidata, null, 2);
        await writeFile(ContentFilePathImprint, json, "utf-8");
        await writeFile(LastPullLogImprint, (/* @__PURE__ */ new Date()).toISOString(), "utf8");
        return { APIcontent: apiResponse.apidata };
      } else {
        return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null, error: apiResponse.error };
      }
    } else {
      return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null };
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
const component = async () => component_cache ??= (await import('./_page.svelte-BTLA57bk.js')).default;
const server_id = "src/routes/imprint_EN/+page.server.ts";
const imports = ["_app/immutable/nodes/4.DXjGBtUX.js","_app/immutable/chunks/Bl9b3Z-2.js","_app/immutable/chunks/DSIQN05n.js","_app/immutable/chunks/BPemj8jd.js","_app/immutable/chunks/CxaBVJg1.js","_app/immutable/chunks/XtHQpmrf.js","_app/immutable/chunks/B2YaYGee.js","_app/immutable/chunks/D1cgDPj7.js","_app/immutable/chunks/DP26lvdW.js","_app/immutable/chunks/BYE1fQNG.js","_app/immutable/chunks/ddDoCI7i.js","_app/immutable/chunks/CWnqNahl.js","_app/immutable/chunks/BHrqZzbu.js","_app/immutable/chunks/DOiJmLaJ.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-BKnvY1gW.js.map
