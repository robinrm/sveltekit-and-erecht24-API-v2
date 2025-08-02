<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";
    import logo from "$lib/images/seal_copyright.png";
    import "./style.css";

    export const target = "_blank";
    export const rel = "noopener noreferrer";

    // set languages de or en
    const language: "en" | "de" = "de";

    let loading = true;
    let apidata_content: string = "";
    let apidata_date: string | undefined = undefined;
    let input_empty = false;

    async function updateContent() {
        try {
            await page.data.APIcontent;
        } finally {
            if (page.data.error == null && page.data.APIcontent != null) {
                let input =
                    language === "de"
                        ? page.data.APIcontent.html_de
                        : page.data.APIcontent.html_en;

                if (input == null || input === "") {
                    input_empty = true;
                    loading = false;
                    return;
                }

                input = input.replace(/\r?\n|\r/g, "");
                input = input.replace(
                    /mustermann@musterfirma.de/gm,
                    '<a href="mailto:mustermann@musterfirma.de">mustermann@musterfirma.de</a>',
                );
                // you can add as many replacements as you want here

                apidata_content = input;
                apidata_date = page.data.APIcontent.modified;
                loading = false;
            } else {
                console.error("Failed to fetch API data", page.data.error);
                loading = false;
            }
        }
    }

    onMount(() => {
        updateContent();
    });
</script>

<svelte:head>
    <title>erecht24 API v2 Test Project</title>
    <meta
        name="description"
        content="imprint in german from erecht24 API v2 test project"
    />
</svelte:head>

<section class="content">
    <div>
        {#if loading}
            Lade Daten, einen Moment bitte ...
        {:else if page.data.error != null && page.data.APIcontent == null}
            <h1>Impressum</h1>
            <p class="highlight_error">{page.data.error}</p>
            Bitte versuche es später erneut oder wende dich an den Administrator,
            sollte das Problem länger bestehen.
        {:else if page.data.error != null && page.data.APIcontent != null}
            {@html apidata_content}
            Letzte Änderung: {@html apidata_date}
            <p class="highlight_error">{page.data.error}</p>
            <br class="inline-breack" />
            <a
                href="https://ecmin.click/erecht24"
                class="nolink"
                {target}
                {rel}
            >
                <img src={logo} alt="Vertreten durch die eRecht24 GmbH" /></a
            >
        {:else if input_empty}
            <h1>Impressum</h1>
            <p>
                Content from API is empty. Check your Data in eRecht24 Account.
            </p>
        {:else}
            {@html apidata_content}
            Letzte Änderung: {@html apidata_date}
            <br class="inline-breack" />
            <a
                href="https://ecmin.click/erecht24"
                class="nolink"
                {target}
                {rel}
            >
                <img src={logo} alt="Vertreten durch die eRecht24 GmbH" /></a
            >
        {/if}
    </div>
</section>

<style>
</style>
