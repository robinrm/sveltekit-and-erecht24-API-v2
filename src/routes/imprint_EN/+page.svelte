<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import logo from "$lib/images/seal_copyright.png";
    import "./style.css";

    export const target = "_blank";
    export const rel = "noopener noreferrer";

    // set languages de or en
    let language: "en" | "de" = "en";

    let loading = true;
    let input: string | undefined = undefined;
    let apidata_content: string = "";
    let apidata_date: string | undefined = "false";

    onMount(async () => {
        try {
            await page.data.imprint;
        } finally {
            loading = false;

            if (language == "de") {
                input = page.data.imprint
                    ? JSON.stringify(page.data.imprint.html_de, null, 4)
                    : "No data available";
            } else if (language == "en") {
                input = page.data.imprint
                    ? JSON.stringify(page.data.imprint.html_en, null, 4)
                    : "No data available";
            }

            if (input) {
                input = input.replace(/\r?\n|\r/g, "");
                input = input.replace(
                    /mustermann@musterfirma.de/gm,
                    "<a href=mailto:mustermann@musterfirma.de>mustermann@musterfirma.de</a>"
                );
                // you can add as many replacements as you want here
                apidata_content = JSON.parse(input);
                apidata_date = page.data.imprint.modified;
            }
        }
    });
</script>

<svelte:head>
    <title>erecht24 API v2 Test Project</title>
    <meta
        name="description"
        content="imprint in english from erecht24 API v2 test project"
    />
</svelte:head>

<section class="content">
    <div>
        {#if loading}
            loading data, please wait ...
        {:else if page.data.error != null && page.data.imprint == null}
            <p class="highlight_error">{page.data.error}</p>
            Please try again later or contact admin if problem keeps happening.
        {:else if page.data.error != null && page.data.imprint != null}
            {@html apidata_content}
            last changes: {@html apidata_date}
            <p class="highlight_error">{page.data.error}</p>
            <br class="inline-breack" />
            <a
                href="https://ecmin.click/erecht24"
                class="nolink"
                {target}
                {rel}
            >
                <img src={logo} alt="represented by eRecht24 GmbH" /></a
            >
        {:else}
            {@html apidata_content}
            last changes: {@html apidata_date}
            <br class="inline-breack" />
            <a
                href="https://ecmin.click/erecht24"
                class="nolink"
                {target}
                {rel}
            >
                <img src={logo} alt="represented by eRecht24 GmbH" /></a
            >
        {/if}
    </div>
</section>

<style>
</style>
