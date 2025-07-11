import { writeFile } from 'fs/promises';
import { C as CheckPullRequest, L as LastPullLogImprint, a as ContentFilePathImprint, T as TimeLimit, f as fetchERecht24Api, u as urlImprint } from './apirequest-KaZ4ieee.js';

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
      console.log("Imprint: Using cached data.");
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
const component = async () => component_cache ??= (await import('./_page.svelte-D-93sdIo.js')).default;
const server_id = "src/routes/imprint_EN/+page.server.ts";
const imports = ["_app/immutable/nodes/4.BXC_ZKKa.js","_app/immutable/chunks/BntLBAS7.js","_app/immutable/chunks/D65nL8m3.js","_app/immutable/chunks/CiQDV1LN.js","_app/immutable/chunks/CutkM_hP.js","_app/immutable/chunks/lwbMhMiE.js","_app/immutable/chunks/CIoTbYV3.js","_app/immutable/chunks/NcKODrK9.js","_app/immutable/chunks/C1m7Dt8l.js","_app/immutable/chunks/G_Cck0g2.js","_app/immutable/chunks/xVt4Qbn6.js","_app/immutable/chunks/C0WIFU-j.js","_app/immutable/chunks/D1j6As27.js","_app/immutable/chunks/DSze3bgh.js","_app/immutable/chunks/DOiJmLaJ.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-B0S8njZ8.js.map
