<script>
    export let showOnPx = 10;
    let hidden = true;

    function goTop() {
        document.body.scrollIntoView();
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
            hidden = false;
        } else {
            hidden = true;
        }
    }
</script>

<svelte:window on:scroll={handleOnScroll} />

<button class="back-to-top" on:click={goTop} class:hidden aria-label="none"
></button>

<style>
    .back-to-top {
        opacity: 1;
        transition:
            opacity 0.5s,
            visibility 0.5s;
        position: fixed;
        z-index: 99;
        right: 15px;
        bottom: 15px;
        color: white;
        background-color: black;
        width: 40px;
        height: 40px;
        border-radius: 15px;
        border: none;
    }

    .back-to-top:before {
        content: "";
        position: absolute;
        inset: 30%;
        transform: translateY(20%) rotate(-45deg);
        border-top: 5px solid #fff;
        border-right: 5px solid #fff;
    }

    .back-to-top:hover {
        cursor: pointer;
    }

    .back-to-top.hidden {
        opacity: 0;
        visibility: hidden;
    }
</style>
