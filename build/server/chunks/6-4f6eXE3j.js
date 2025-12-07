import { writeFile } from 'fs/promises';
import { C as CheckPullRequest, b as LastPullLogPrivacy, c as ContentFilePathPrivacy, T as TimeLimit, f as fetchERecht24Api, d as urlPrivacy } from './apirequest-DJBqjIPA.js';
import 'node:fs/promises';

const prerender = false;
async function load() {
  try {
    let pullresponse = await CheckPullRequest(LastPullLogPrivacy, ContentFilePathPrivacy, TimeLimit);
    let APIcontent = null;
    if (pullresponse.fileExists) {
      APIcontent = pullresponse.offlinedata || null;
    }
    if (pullresponse.datediff > TimeLimit) {
      let apiResponse = await fetchERecht24Api(urlPrivacy);
      if (apiResponse.apidata) {
        const json = JSON.stringify(apiResponse.apidata, null, 2);
        await writeFile(ContentFilePathPrivacy, json, "utf-8");
        await writeFile(LastPullLogPrivacy, (/* @__PURE__ */ new Date()).toISOString(), "utf8");
        return { APIcontent: apiResponse.apidata };
      } else {
        return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null, error: apiResponse.error };
      }
    } else {
      return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null };
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
const component = async () => component_cache ??= (await import('./_page.svelte-DK0O_xQF.js')).default;
const server_id = "src/routes/privacy_EN/+page.server.ts";
const imports = ["_app/immutable/nodes/6.CH7p1DXV.js","_app/immutable/chunks/Bl9b3Z-2.js","_app/immutable/chunks/DSIQN05n.js","_app/immutable/chunks/BPemj8jd.js","_app/immutable/chunks/CxaBVJg1.js","_app/immutable/chunks/XtHQpmrf.js","_app/immutable/chunks/B2YaYGee.js","_app/immutable/chunks/D1cgDPj7.js","_app/immutable/chunks/DP26lvdW.js","_app/immutable/chunks/BYE1fQNG.js","_app/immutable/chunks/CWnqNahl.js","_app/immutable/chunks/BHrqZzbu.js","_app/immutable/chunks/hlBhQlEl.js","_app/immutable/chunks/Ci594k53.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-4f6eXE3j.js.map
