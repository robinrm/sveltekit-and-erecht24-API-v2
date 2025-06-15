import { pluginKey, apiKey, apiKeyTest, testMode } from "$lib/stores/apisettings";

export interface ApiResponse {
    apidata?: {
        html_en: string;
        warnings: string;
        created: string;
        modified: string;
        pushed: string;
        html_de: string;
    };
    error?: string;
}

export async function fetchERecht24Api(apiUrl: string): Promise<ApiResponse> {
    const key = testMode ? apiKeyTest : apiKey;
    let errorMessage: string;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'eRecht24-api-key': key,
                'eRecht24-plugin-key': pluginKey,
                accept: 'application/json'
            },
            method: 'GET'
        });

        if (response.ok) {
            const apidata = await response.json();
            return { apidata };
        } else {
            console.log(response.status);
            throw new Error(`${response.status}`)
        }
    } catch (error) {
        // console.log(error);
        if (error == 'Error: 400') {
            errorMessage = 'No clients found for api-key.';
            return { error: errorMessage }
        }
        if (error == 'Error: 401') {
            errorMessage = 'Invalid API key and/or Plugin key for the eRecht24 API v2.';
            return { error: errorMessage }
        }
        if (error == 'Error: 403') {
            errorMessage = 'A maximum of 3 clients may be created per project.'
            return { error: errorMessage }
        }
        if (error == 'Error: 404') {
            errorMessage = 'Client could not be loaded / updated / deleted.'
            return { error: errorMessage }
        }
        if (error == 'Error: 409') {
            errorMessage = 'A client with the URL already exists.';
            return { error: errorMessage }
        }
        if (error == 'Error: 422') {
            errorMessage = 'Invalid params specified.';
            return { error: errorMessage }
        }
        if (error == 'Error: 496') {
            errorMessage = 'Push request not successfully executed due to errors in requests to clients.';
            return { error: errorMessage }
        }
        if (error == 'Error: 497') {
            errorMessage = 'Test push was not successful, client did non respond with code 200.';
            return { error: errorMessage }
        }
        if (error == 'Error: 498') {
            errorMessage = 'Ping was not successful.';
            return { error: errorMessage }
        }
        if (error == 'Error: 503') {
            errorMessage = 'A connection to the eRecht24 API database could not be established.';
            return { error: errorMessage }
        }

        //not matching any of the above errors
        errorMessage = 'Unknown error, see dokumentation https://api-docs.e-recht24.de/. Errorcode: ' + error;
        return { error: errorMessage }

    }
}
