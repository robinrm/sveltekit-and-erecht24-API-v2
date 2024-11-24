<script lang="ts">
    import "../app.css";
    import BackToTop from "$lib/components/BackToTop.svelte";
    import { page } from "$app/stores";
</script>

<div class="app">
    <main>
        <slot />
    </main>

    <footer>
        {#if $page.url.pathname === "/"}{:else}<div>
                Back to <a href="/">Home</a>.
            </div>
        {/if}
    </footer>

    <BackToTop />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #0000001c;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 70vw;
        margin: 0 auto;
        box-sizing: border-box;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
    }
</style>
