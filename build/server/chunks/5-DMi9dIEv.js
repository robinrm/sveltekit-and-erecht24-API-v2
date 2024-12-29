import { a as apiKeyTest, p as pluginKeyTest } from './apisettings-BBZpByMl.js';

const prerender = false;
const apiUrl = "https://api.e-recht24.de/v2/privacyPolicy";
const test = true;
const load = async ({ fetch }) => {
  try {
    if (test) {
      const response = await fetch(
        apiUrl,
        {
          headers: {
            "eRecht24-api-key": apiKeyTest,
            "eRecht24-plugin-key": pluginKeyTest,
            accept: "application/json"
          },
          method: "GET"
        }
      );
      if (response.ok) {
        const apidata = await response.json();
        return { apidata };
      } else {
        throw new Error(`${response.status}`);
      }
    }
  } catch (error) {
    if (error == "Error: 400") {
      console.log("erecht 24 privacy: " + error + " No clients found for api-key.");
      return { error: "No clients found for api-key." };
    }
    if (error == "Error: 401") {
      console.log("erecht 24 privacy: " + error + " Invalid API key and/or Plugin key for the eRecht24 API.");
      return { error: "Invalid API key and/or Plugin key for the eRecht24 API." };
    }
    if (error == "Error: 403") {
      console.log("erecht 24 privacy: " + error + " A maximum of 3 clients may be created per project.");
      return { error: "A maximum of 3 clients may be created per project." };
    }
    if (error == "Error: 404") {
      console.log("erecht 24 privacy: " + error + " Client could not be loaded / updated / deleted.");
      return { error: "Client could not be loaded / updated / deleted." };
    }
    if (error == "Error: 409") {
      console.log("erecht 24 privacy: " + error + " A client with the URL already exists.");
      return { error: "A client with the URL already exists." };
    }
    if (error == "Error: 422") {
      console.log("erecht 24 privacy: " + error + " Invalid params specified.");
      return { error: "Invalid params specified." };
    }
    if (error == "Error: 496") {
      console.log("erecht 24 privacy: " + error + " Push request not successfully executed due to errors in requests to clients.");
      return { error: "Push request not successfully executed due to errors in requests to clients." };
    }
    if (error == "Error: 497") {
      console.log("erecht 24 privacy: " + error + " Test push was not successful, client did non respond with code 200.");
      return { error: "Test push was not successful, client did non respond with code 200." };
    }
    if (error == "Error: 498") {
      console.log("erecht 24 privacy: " + error + " Ping was not successful.");
      return { error: "Ping was not successful." };
    }
    if (error == "Error: 503") {
      console.log("erecht 24 privacy: " + error + " A connection to the eRecht24 API database could not be established.");
      return { error: "A connection to the eRecht24 API database could not be established." };
    }
    console.log("erecht 24 privacy: " + error + " no further details for debug see documentation under https://api-docs.e-recht24.de/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ck3FfGTY.js')).default;
const server_id = "src/routes/privacy_DE/+page.server.ts";
const imports = ["_app/immutable/nodes/5.C6NRqvih.js","_app/immutable/chunks/disclose-version.CzQY0kcY.js","_app/immutable/chunks/runtime.s4LxpMgD.js","_app/immutable/chunks/legacy.CtYM5vDw.js","_app/immutable/chunks/render.Cx1vX2M6.js","_app/immutable/chunks/store.BV25xDdQ.js","_app/immutable/chunks/svelte-head.BL-8Fur5.js","_app/immutable/chunks/props.Bqh0rTSG.js","_app/immutable/chunks/attributes.CLe6I5cX.js","_app/immutable/chunks/lifecycle.DyIOpnj9.js","_app/immutable/chunks/seal_privacy.I96RDoQN.js"];
const stylesheets = ["_app/immutable/assets/3.tn0RQdqM.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=5-DMi9dIEv.js.map
