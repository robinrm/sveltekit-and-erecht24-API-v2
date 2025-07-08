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

    async function updateContent() {
        try {
            await page.data.APIcontent;
        } finally {
            let input =
                language === "de"
                    ? page.data.APIcontent.html_de
                    : page.data.APIcontent.html_en;

            input = input.replace(/\r?\n|\r/g, "");
            input = input.replace(
                /mustermann@musterfirma.de/gm,
                '<a href="mailto:mustermann@musterfirma.de">mustermann@musterfirma.de</a>'
            );

            apidata_content = input;
            apidata_date = page.data.APIcontent.modified;
            loading = false;
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
            <p class="highlight_error">{page.data.error}</p>
            Please try again later or contact admin if problem keeps happening.
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
