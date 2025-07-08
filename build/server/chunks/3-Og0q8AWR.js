import { writeFile } from 'fs/promises';
import { C as CheckPullRequest, f as fetchERecht24Api, u as urlImprint } from './apirequest-D5roicaZ.js';

const prerender = false;
const LastPullLog = "./static/apidata/lastpull-imprint.log";
const ContentFilePath = "./static/apidata/imprint.json";
const TimeLimit = 18e5;
async function load() {
  try {
    let pullresponse = await CheckPullRequest(LastPullLog, ContentFilePath, TimeLimit);
    let APIcontent = null;
    if (pullresponse.fileExists) {
      APIcontent = pullresponse.offlinedata || null;
    }
    if (pullresponse.datediff > TimeLimit) {
      let apiResponse = await fetchERecht24Api(urlImprint);
      if (apiResponse.apidata) {
        const json = JSON.stringify(apiResponse.apidata, null, 2);
        await writeFile(ContentFilePath, json, "utf-8");
        await writeFile(LastPullLog, (/* @__PURE__ */ new Date()).toISOString(), "utf8");
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

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte--9v59dnr.js')).default;
const server_id = "src/routes/imprint_DE/+page.server.ts";
const imports = ["_app/immutable/nodes/3.BBmdCuH-.js","_app/immutable/chunks/BntLBAS7.js","_app/immutable/chunks/D65nL8m3.js","_app/immutable/chunks/CiQDV1LN.js","_app/immutable/chunks/CutkM_hP.js","_app/immutable/chunks/lwbMhMiE.js","_app/immutable/chunks/CIoTbYV3.js","_app/immutable/chunks/NcKODrK9.js","_app/immutable/chunks/C1m7Dt8l.js","_app/immutable/chunks/G_Cck0g2.js","_app/immutable/chunks/xVt4Qbn6.js","_app/immutable/chunks/D7rv7dk8.js","_app/immutable/chunks/BSLWDcwn.js","_app/immutable/chunks/DSze3bgh.js","_app/immutable/chunks/DOiJmLaJ.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-Og0q8AWR.js.map
