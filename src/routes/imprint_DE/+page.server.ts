// since there's dynamic data here, we can't prerender
export const prerender = false;

import { fetchERecht24Api } from "$lib/components/apirequest";
import type { ApiResponse } from "$lib/components/apirequest";
import { urlImprint } from "$lib/stores/apisettings";
import { writeFile, readFile } from 'fs/promises';

let apiResponse: ApiResponse | null = null;

export async function load() {
    try {
        const LastPullLog = './static/apidata/lastpull-imprint.log';
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

        const imprintFilePath = './static/apidata/imprint.json';
        let imprintFileExists = false;
        let imprint: string | null = null;

        try {
            imprint = await readFile(imprintFilePath, 'utf8');
            imprintFileExists = true;
        } catch {
            imprint = null;
            imprintFileExists = false;
        }

        if (!imprintFileExists) {
            // console.log("Imprint Error: Imprint file does not exist, fetching new data from API...");
            datediff = 1800001; // force fetch
        }

        if (datediff > 1800000) { // 30 min in ms
            // console.log("Fetching new data from API...");
            apiResponse = await fetchERecht24Api(urlImprint);
            if (apiResponse.apidata) {
                const json = JSON.stringify(apiResponse.apidata, null, 2);
                const filename = './static/apidata/imprint.json';
                await writeFile(filename, json, 'utf-8');
                await writeFile(LastPullLog, datenow.toISOString(), 'utf8');
                return { imprint: apiResponse.apidata };
            } else {
                // console.log("API Imprint Error:", apiResponse.error);
                return { imprint: imprint ? JSON.parse(imprint) : null, error: apiResponse.error };
            }
        } else {
            // console.log("Imprint: Using cached data.");
            return { imprint: imprint ? JSON.parse(imprint) : null };
        }

    } catch (err) {
        // console.error(err);
        return { error: 'An error occurred while loading the imprint data: ' + err };
    }
}