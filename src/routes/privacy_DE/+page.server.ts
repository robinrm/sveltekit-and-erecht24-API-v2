// since there's dynamic data here, we can't prerender
export const prerender = false;

import { fetchERecht24Api } from "$lib/components/apirequest";
import type { ApiResponse } from "$lib/components/apirequest";
import { urlPrivacy } from "$lib/stores/apisettings";
import { writeFile, readFile } from 'fs/promises';

let apiResponse: ApiResponse | null = null;

export async function load() {
    try {
        const LastPullLog = './static/apidata/lastpull-privacy.log';
        let lastpull = '';

        try {
            lastpull = await readFile(LastPullLog, 'utf8');
        } catch {
            lastpull = '';
        }

        const datenow = new Date();
        const datenowMs = datenow.getTime();
        const lastpullMs = lastpull ? Date.parse(lastpull) : 0;
        let datediff = datenowMs - lastpullMs;

        const privacyFilePath = './static/apidata/privacy.json';
        let privacyFileExists = false;
        let privacy: string | null = null;

        try {
            privacy = await readFile(privacyFilePath, 'utf8');
            privacyFileExists = true;
        } catch {
            privacy = null;
            privacyFileExists = false;
        }

        if (!privacyFileExists) {
            // console.log("Privacy Error: Privacy file does not exist, fetching new data from API...");
            datediff = 1800001; // force fetch
        }

        if (datediff > 1800000) { // 30 min in ms
            // console.log("Fetching new data from API...");
            apiResponse = await fetchERecht24Api(urlPrivacy);
            if (apiResponse.apidata) {
                const json = JSON.stringify(apiResponse.apidata, null, 2);
                const filename = './static/apidata/privacy.json';
                await writeFile(filename, json, 'utf-8');
                await writeFile(LastPullLog, datenow.toISOString(), 'utf8');
                return { privacy: apiResponse.apidata };
            } else {
                // console.log("API Privacy Error:", apiResponse.error);
                return { privacy: privacy ? JSON.parse(privacy) : null, error: apiResponse.error };
            }
        } else {
            // console.log("Privacy: Using cached data.");
            return { privacy: privacy ? JSON.parse(privacy) : null };
        }

    } catch (err) {
        // console.error(err);
        return { error: 'An error occurred while loading the privacy data: ' + err };
    }
}