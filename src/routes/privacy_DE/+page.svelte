<script lang="ts">
    import "./style.css";
    import { onMount } from "svelte";
    import { fetchERecht24Api } from "$lib/components/apirequest";
    import type { ApiResponse } from "$lib/components/apirequest";
    import { urlPrivacy } from "$lib/stores/apisettings";
    import logo from "$lib/images/seal_privacy.png";

    export let target = "_blank";
    export let rel = "noopener noreferrer";

    // set languages de or en
    const language: "en" | "de" = "de";

    let apiResponse: ApiResponse | null = null;
    let apidata_content: string = "";
    let apidata_date: string | undefined = "false";
    let json_input: string | undefined = undefined;
    let display_api_data = false;

    async function loadApiData() {
        apiResponse = await fetchERecht24Api(urlPrivacy);
        if (apiResponse.apidata) {
            if (language == "de") {
                json_input = JSON.stringify(
                    apiResponse.apidata.html_de,
                    null,
                    4,
                );
            } else if (language == "en") {
                json_input = JSON.stringify(
                    apiResponse.apidata.html_en,
                    null,
                    4,
                );
            }
            if (json_input) {
                json_input = json_input.replace(/\r?\n|\r/g, "");
                json_input = json_input.replace(
                    /info@beispielfirma.de/gm,
                    "<a href=mailto:info@beispielfirma.de>info@beispielfirma.de</a>",
                );
                // you can add as many replacements as you want here
                apidata_content = JSON.parse(json_input);
                apidata_date = apiResponse.apidata.modified;
                display_api_data = true;
            }
        } else if (apiResponse.error) {
            apidata_content = apiResponse.error;
            display_api_data = false;
        }
    }

    onMount(() => {
        // Load the API data when the component mounts
        loadApiData();
    });
</script>

<svelte:head>
    <title>erecht24 API v2 Test Project</title>
    <meta
        name="description"
        content="privacy in german from erecht24 API v2 test project"
    />
</svelte:head>

<section class="content">
    <p>
        {#if display_api_data}
            {@html apidata_content}
            Letzte Änderung: {@html apidata_date}
        {:else}
            {@html apidata_content}
        {/if}
        <br class="inline-breack" />
        <a
            href="https://www.digistore24.com/redir/174027/ecmin_gbr/"
            class="nolink"
            {target}
            {rel}
        >
            <img src={logo} alt="Vertreten durch die eRecht24 GmbH" /></a
        >
    </p>
</section>

<style>
</style>
