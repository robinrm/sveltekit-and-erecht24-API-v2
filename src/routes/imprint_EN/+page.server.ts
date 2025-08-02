// since there's dynamic data here, we can't prerender
export const prerender = false;

import { writeFile } from 'fs/promises';

import { CheckPullRequest } from "$lib/components/checkpullrequest";
import type { CheckPullResponse } from "$lib/components/checkpullrequest";

import { fetchERecht24Api } from "$lib/components/apirequest";
import type { ApiResponse } from "$lib/components/apirequest";
import { urlImprint, TimeLimit, LastPullLogImprint, ContentFilePathImprint } from "$lib/stores/apisettings";

export async function load() {
    try {
        let pullresponse: CheckPullResponse | null = await CheckPullRequest(LastPullLogImprint, ContentFilePathImprint, TimeLimit);
        let APIcontent: string | null = null;

        if (pullresponse.fileExists) {
            APIcontent = pullresponse.offlinedata || null;
        }

        // console.log("Imprint Last Pull:", pullresponse.datediff, "ms");
        if (pullresponse.datediff > TimeLimit) {
            let apiResponse: ApiResponse | null = await fetchERecht24Api(urlImprint);

            if (apiResponse.apidata) {
                const json = JSON.stringify(apiResponse.apidata, null, 2);
                await writeFile(ContentFilePathImprint, json, 'utf-8');
                await writeFile(LastPullLogImprint, new Date().toISOString(), 'utf8');
                return { APIcontent: apiResponse.apidata };
            } else {
                // console.log("API Imprint Error:", apiResponse.error);
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