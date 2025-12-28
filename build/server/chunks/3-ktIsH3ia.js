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

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-D__R4qr_.js')).default;
const server_id = "src/routes/imprint_DE/+page.server.ts";
const imports = ["_app/immutable/nodes/3.zDd0YUh_.js","_app/immutable/chunks/DdFkB--J.js","_app/immutable/chunks/CaePOEcs.js","_app/immutable/chunks/BzyMfuf9.js","_app/immutable/chunks/SG3_qa5J.js","_app/immutable/chunks/Cu8SJ2k_.js","_app/immutable/chunks/BvgXXCUp.js","_app/immutable/chunks/CwzrxiFc.js","_app/immutable/chunks/DE_qmx4m.js","_app/immutable/chunks/C943iQqY.js","_app/immutable/chunks/CrNf14Q7.js","_app/immutable/chunks/CiLTIPUC.js","_app/immutable/chunks/DOiJmLaJ.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-ktIsH3ia.js.map
