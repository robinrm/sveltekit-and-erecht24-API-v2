<script lang="ts">
    import "./style.css";

    import * as offline_data from "$lib/stores/imprint.json";
    import logo from "$lib/images/seal_copyright.png";

    export let data;
    export let target = "_blank";
    export let rel = "noopener noreferrer";

    let apidata_content = "false";
    let display_api_data = null;

    if (data.error == undefined) {
        let json_input = JSON.stringify(data.apidata.html_de, null, 4);
        json_input = json_input.replace(/\r?\n|\r/g, "");
        json_input = json_input.replace(
            /mustermann@musterfirma.de/gm,
            "<a href=mailto:mustermann@musterfirma.de>mustermann@musterfirma.de</a>",
        );
        // you can add as many replacements as you want here,
        apidata_content = JSON.parse(json_input);
        display_api_data = true;
    } else {
        let json_input = JSON.stringify(offline_data.html_de, null, 4);
        json_input = json_input.replace(/\r?\n|\r/g, "");
        // you can add as many replacements as you want here
        apidata_content = JSON.parse(json_input);
        display_api_data = true;
        display_api_data = false;
    }
</script>

<svelte:head>
    <title>erecht24 API v2 Test Project</title>
    <meta
        name="description"
        content="imprint in german from erecht24 API v2 test project"
    />
</svelte:head>

<section class="content">
    <p>
        {#if display_api_data}
            {@html apidata_content}
            Letzte Änderung: {@html data.apidata.modified}
        {:else}
            {@html apidata_content}
            Letzte Änderung: {@html offline_data.modified}
            <br class="inline-breack" />
            Daten konnten nicht aktuallisiert werden.
            <br class="inline-breack" />
            <hgl class="highlight_error">Error: {data.error}</hgl>
            <br class="inline-breack" />
            Für weitere Informationen siehe:
            <a href="https://api-docs.e-recht24.de/" {target} {rel}>API Doku</a>
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
