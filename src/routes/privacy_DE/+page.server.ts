// since there's dynamic data here, we can't prerender
export const prerender = false;

import { pluginKey, apiKeyUser, apiKeyTest, testmode } from "$lib/stores/apisettings";

const apiUrl = 'https://api.e-recht24.de/v2/privacyPolicy';

export const load = async ({ fetch }) => {
    try {
        if (testmode) {
            const response = await fetch(apiUrl, {
                headers: {
                    'eRecht24-api-key': apiKeyTest,
                    'eRecht24-plugin-key': pluginKey,
                    accept: 'application/json'
                },
                method: 'GET'
            }
            )
            if (response.ok) {
                const apidata = await response.json()
                return { apidata };
            } else {
                throw new Error(`${response.status}`)
            }
        } else {
            const response = await fetch(apiUrl, {
                headers: {
                    'eRecht24-api-key': apiKeyUser,
                    'eRecht24-plugin-key': pluginKey,
                    accept: 'application/json'
                },
                method: 'GET'
            }
            )
            if (response.ok) {
                const apidata = await response.json()
                return { apidata };
            } else {
                throw new Error(`${response.status}`)
            }
        }

    } catch (error) {
        if (error == 'Error: 400') {
            console.log('erecht 24 privacy: ' + error + ' No clients found for api-key.')
            return { error: 'No clients found for api-key.' }
        }
        if (error == 'Error: 401') {
            console.log('erecht 24 privacy: ' + error + ' Invalid API key and/or Plugin key for the eRecht24 API.')
            return { error: 'Invalid API key and/or Plugin key for the eRecht24 API.' }
        }
        if (error == 'Error: 403') {
            console.log('erecht 24 privacy: ' + error + ' A maximum of 3 clients may be created per project.')
            return { error: 'A maximum of 3 clients may be created per project.' }
        }
        if (error == 'Error: 404') {
            console.log('erecht 24 privacy: ' + error + ' Client could not be loaded / updated / deleted.')
            return { error: 'Client could not be loaded / updated / deleted.' }
        }
        if (error == 'Error: 409') {
            console.log('erecht 24 privacy: ' + error + ' A client with the URL already exists.')
            return { error: 'A client with the URL already exists.' }
        }
        if (error == 'Error: 422') {
            console.log('erecht 24 privacy: ' + error + ' Invalid params specified.')
            return { error: 'Invalid params specified.' }
        }
        if (error == 'Error: 496') {
            console.log('erecht 24 privacy: ' + error + ' Push request not successfully executed due to errors in requests to clients.')
            return { error: 'Push request not successfully executed due to errors in requests to clients.' }
        }
        if (error == 'Error: 497') {
            console.log('erecht 24 privacy: ' + error + ' Test push was not successful, client did non respond with code 200.')
            return { error: 'Test push was not successful, client did non respond with code 200.' }
        }
        if (error == 'Error: 498') {
            console.log('erecht 24 privacy: ' + error + ' Ping was not successful.')
            return { error: 'Ping was not successful.' }
        }
        if (error == 'Error: 503') {
            console.log('erecht 24 privacy: ' + error + ' A connection to the eRecht24 API database could not be established.')
            return { error: 'A connection to the eRecht24 API database could not be established.' }
        }
        console.log('erecht 24 privacy: ' + error + ' no further details for debug see documentation under https://api-docs.e-recht24.de/');
    }
}