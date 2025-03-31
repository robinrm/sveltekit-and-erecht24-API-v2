<script>
    export const target = "_blank";
    export const rel = "noopener noreferrer";
</script>

<svelte:head>
    <title>erecht24 API v2 Test Project</title>
    <meta
        name="description"
        content="landing page from erecht24 API v2 test project"
    />
</svelte:head>

<section class="content">
    <h1>welcome HOME!</h1>
    <p>
        This an example project to show the function from the erech24 API v2 in
        sveltekit without sync/push functionality. This project get the data
        from the erech24 API v2 and displays it.
    </p>
    <p>
        The user or an refresh from the page will not trigger directly an
        request to the API server. Only after an treshold time the data will be
        updated and compared with the local saved version. In case a new version
        exists on erecht24 it'll be saved on the server.
    </p>
    <p>
        The project is not optimized for production just for demonstration how
        it works.
    </p>
    <div>
        For examples take a look on:
        <ul>
            <li><a href="/imprint_DE">Imprint German</a></li>
            <li><a href="/imprint_EN">Imprint English</a></li>
            <li><a href="/privacy_DE">Privacy German</a></li>
            <li><a href="/privacy_EN">Privacy English</a></li>
        </ul>
        to display your data or the data from your customer enter your apikey in
        the 'apisetting.ts' file and set the testMode variable to false.
    </div>
    <p>
        Developed by Eickelmann & Meyer Industries GbR | Robin Meyer | <a
            href="https://ecmin.de"
            class="nolink"
            {target}
            {rel}>ecmin.de</a
        >
        | <a href="mailto:contact@ecmin.de">contact@ecmin.de</a>
    </p>
</section>
