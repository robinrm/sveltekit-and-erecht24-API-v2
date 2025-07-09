import { writeFile } from 'fs/promises';
import { C as CheckPullRequest, b as LastPullLogPrivacy, c as ContentFilePathPrivacy, T as TimeLimit, f as fetchERecht24Api, d as urlPrivacy } from './apirequest-KaZ4ieee.js';

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
      console.log("Privacy: Using cached data.");
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

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DStBOxD4.js')).default;
const server_id = "src/routes/privacy_DE/+page.server.ts";
const imports = ["_app/immutable/nodes/5.DkVYk6Ip.js","_app/immutable/chunks/BntLBAS7.js","_app/immutable/chunks/D65nL8m3.js","_app/immutable/chunks/CiQDV1LN.js","_app/immutable/chunks/CutkM_hP.js","_app/immutable/chunks/lwbMhMiE.js","_app/immutable/chunks/CIoTbYV3.js","_app/immutable/chunks/NcKODrK9.js","_app/immutable/chunks/C1m7Dt8l.js","_app/immutable/chunks/G_Cck0g2.js","_app/immutable/chunks/C0WIFU-j.js","_app/immutable/chunks/D1j6As27.js","_app/immutable/chunks/DSze3bgh.js","_app/immutable/chunks/Blc4UyLb.js","_app/immutable/chunks/Ci594k53.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-POws3srq.js.map
