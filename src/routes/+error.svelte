<script>
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";

    function reloadPage() {
        const thisPage = window.location.pathname;
        goto(thisPage);
    }

    function Pageback() {
        if (browser) window.history.back();
    }
</script>

<section>
    <div>
        <p>Es trat folgender Fehler auf:</p>
        <h1>
            {#if page.status}
                {page.status}
            {:else}
                Unbekannter Status
            {/if}
            {#if page.error?.message}
                {page.error.message}
            {:else}
                Unbekannter Fehler
            {/if}
        </h1>
        <br class="inline-breack" />
        <p>
            wende dich bitte an uns an die Adresse im Impressum, sollte das
            Problem länger andauern oder versuche eine der unteren Optionen!
        </p>
        <button class="help-actions" on:click={() => reloadPage()}
            >Reload</button
        >
        <button class="help-actions" on:click={() => Pageback()}>Zurück</button>
    </div>
</section>

<style>
    .help-actions {
        display: inline-block;
        border: 2px solid black;
        border-radius: 20px;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.5rem 1rem;
        text-decoration: none;
        -webkit-transition: 0.25s ease;
        transition: 0.25s ease;
        background-color: transparent;
        color: var(--color-text);
        font-size: 1.2rem;
        padding: 10px 25px;
    }

    .help-actions:hover {
        text-decoration: none;
        background: orange;
        cursor: pointer;
    }
</style>
