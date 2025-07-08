// since there's dynamic data here, we can't prerender
export const prerender = false;

import { writeFile } from 'fs/promises';

import { CheckPullRequest } from "$lib/components/checkpullrequest";
import type { CheckPullResponse } from "$lib/components/checkpullrequest";

import { fetchERecht24Api } from "$lib/components/apirequest";
import type { ApiResponse } from "$lib/components/apirequest";
import { urlImprint } from "$lib/stores/apisettings";

const LastPullLog = './static/apidata/lastpull-imprint.log';
const ContentFilePath = './static/apidata/imprint.json';
const TimeLimit = 1800000; // 30 minutes in ms

export async function load() {
    try {
        let pullresponse: CheckPullResponse | null = await CheckPullRequest(LastPullLog, ContentFilePath, TimeLimit);
        let APIcontent: string | null = null;

        if (pullresponse.fileExists) {
            APIcontent = pullresponse.offlinedata || null;
        }

        // console.log("Imprint Last Pull:", pullresponse.datediff, "ms");
        if (pullresponse.datediff > TimeLimit) {
            let apiResponse: ApiResponse | null = await fetchERecht24Api(urlImprint);

            if (apiResponse.apidata) {
                const json = JSON.stringify(apiResponse.apidata, null, 2);
                await writeFile(ContentFilePath, json, 'utf-8');
                await writeFile(LastPullLog, new Date().toISOString(), 'utf8');
                return { APIcontent: apiResponse.apidata };
            } else {
                // console.log("API Imprint Error:", APIcontent.error);
                return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null, error: apiResponse.error };
            }

        } else {
            // console.log("Imprint: Using cached data.");
            return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null };
        }

    } catch (err) {
        // console.error(err);
        return { error: 'An error occurred while loading the imprint data: ' + err };
    }
}