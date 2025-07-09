import { readFile } from 'fs/promises';

async function CheckPullRequest(LastPullLog, FilePath, timelimit) {
  let lastpull = "";
  let datediff = 0;
  let fileExists = false;
  let offlinedata = null;
  try {
    lastpull = await readFile(LastPullLog, "utf8");
  } catch {
    lastpull = "";
  }
  const datenow = /* @__PURE__ */ new Date();
  const datenowMs = datenow.getTime();
  const lastpullMs = lastpull ? Date.parse(lastpull) : 0;
  datediff = datenowMs - lastpullMs;
  try {
    offlinedata = await readFile(FilePath, "utf8");
    fileExists = true;
  } catch {
    offlinedata = null;
    fileExists = false;
  }
  if (!fileExists) {
    datediff = timelimit + 1;
  }
  return { lastpull, datediff, fileExists, offlinedata };
}
const pluginKey = "Q2WcOGJPaJKM4E044tqxE1G09L4V2KfI0rmVLmPoY5TgaXqn4QDIiAhaWDbHxSf1";
const apiKeyTest = "e81cbf18a5239377aa4972773d34cc2b81ebc672879581bce29a0a4c414bf117";
const urlImprint = "https://api.e-recht24.de/v2/imprint";
const urlPrivacy = "https://api.e-recht24.de/v2/privacyPolicy";
const LastPullLogImprint = "./static/apidata/lastpull-imprint.log";
const LastPullLogPrivacy = "./static/apidata/lastpull-privacy.log";
const ContentFilePathImprint = "./static/apidata/imprint.json";
const ContentFilePathPrivacy = "./static/apidata/privacy.json";
const TimeLimit = 18e5;
async function fetchERecht24Api(apiUrl) {
  const key = apiKeyTest;
  let errorMessage;
  try {
    const response = await fetch(apiUrl, {
      headers: {
        "eRecht24-api-key": key,
        "eRecht24-plugin-key": pluginKey,
        accept: "application/json"
      },
      method: "GET"
    });
    if (response.ok) {
      const apidata = await response.json();
      return { apidata };
    } else {
      console.log(response.status);
      throw new Error(`${response.status}`);
    }
  } catch (error) {
    if (error == "Error: 400") {
      errorMessage = "No clients found for api-key.";
      return { error: errorMessage };
    }
    if (error == "Error: 401") {
      errorMessage = "Invalid API key and/or Plugin key for the eRecht24 API v2.";
      return { error: errorMessage };
    }
    if (error == "Error: 403") {
      errorMessage = "A maximum of 3 clients may be created per project.";
      return { error: errorMessage };
    }
    if (error == "Error: 404") {
      errorMessage = "Client could not be loaded / updated / deleted.";
      return { error: errorMessage };
    }
    if (error == "Error: 409") {
      errorMessage = "A client with the URL already exists.";
      return { error: errorMessage };
    }
    if (error == "Error: 422") {
      errorMessage = "Invalid params specified.";
      return { error: errorMessage };
    }
    if (error == "Error: 496") {
      errorMessage = "Push request not successfully executed due to errors in requests to clients.";
      return { error: errorMessage };
    }
    if (error == "Error: 497") {
      errorMessage = "Test push was not successful, client did non respond with code 200.";
      return { error: errorMessage };
    }
    if (error == "Error: 498") {
      errorMessage = "Ping was not successful.";
      return { error: errorMessage };
    }
    if (error == "Error: 503") {
      errorMessage = "A connection to the eRecht24 API database could not be established.";
      return { error: errorMessage };
    }
    errorMessage = "Unknown error, see dokumentation https://api-docs.e-recht24.de/. Errorcode: " + error;
    return { error: errorMessage };
  }
}

export { CheckPullRequest as C, LastPullLogImprint as L, TimeLimit as T, ContentFilePathImprint as a, LastPullLogPrivacy as b, ContentFilePathPrivacy as c, urlPrivacy as d, fetchERecht24Api as f, urlImprint as u };
//# sourceMappingURL=apirequest-KaZ4ieee.js.map
