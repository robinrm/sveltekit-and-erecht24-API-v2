<script lang="ts">
    import { page } from "$app/state";

    export const target = "_blank";
    export const rel = "noopener noreferrer";
</script>

<svelte:head>
    <title>erecht24 API v2 Test Project</title>
    <meta name="description" content="test page" />
</svelte:head>

<section class="content">
    <h1>hello welcome at {page.url.pathname}!</h1>
</section>

<style>
</style>
