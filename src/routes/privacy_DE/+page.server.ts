// since there's dynamic data here, we can't prerender
export const prerender = false;

import { writeFile } from 'node:fs/promises';

import { CheckPullRequest } from "$lib/components/api/checkpullrequest";
import type { CheckPullResponse } from "$lib/components/api/checkpullrequest";

import { fetchERecht24Api } from "$lib/components/api/apirequest";
import type { ApiResponse } from "$lib/components/api/apirequest";
import { urlPrivacy, TimeLimit, LastPullLogPrivacy, ContentFilePathPrivacy } from "$lib/stores/apisettings";

export async function load() {
    try {
        let pullresponse: CheckPullResponse | null = await CheckPullRequest(LastPullLogPrivacy, ContentFilePathPrivacy, TimeLimit);
        let APIcontent: string | null = null;

        if (pullresponse.fileExists) {
            APIcontent = pullresponse.offlinedata || null;
        }

        // console.log("Privacy Last Pull:", pullresponse.datediff, "ms");
        if (pullresponse.datediff > TimeLimit) {
            let apiResponse: ApiResponse | null = await fetchERecht24Api(urlPrivacy);

            if (apiResponse.apidata) {
                const json = JSON.stringify(apiResponse.apidata, null, 2);
                await writeFile(ContentFilePathPrivacy, json, 'utf-8');
                await writeFile(LastPullLogPrivacy, new Date().toISOString(), 'utf8');
                return { APIcontent: apiResponse.apidata };
            } else {
                // console.log("API Privacy Error:", apiResponse.error);
                return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null, error: apiResponse.error };
            }

        } else {
            // console.log("Privacy: Using cached data.");
            return { APIcontent: APIcontent ? JSON.parse(APIcontent) : null };
        }

    } catch (err) {
        // console.error(err);
        return { error: 'An error occurred while loading the privacy data: ' + err };
    }
}