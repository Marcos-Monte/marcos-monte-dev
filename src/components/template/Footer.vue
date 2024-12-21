<template>

    <footer class="containerFooter">

        <span>Copyright © 2024 by <a href="https://www.linkedin.com/in/montemarcos/" target="_blank">Marcos Monte</a>. All rights reserved.</span>

    </footer>


</template>

<script>

    export default {



    }

</script>

<style>

    .containerFooter {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        background-color: var(--primary-color);
        border: solid black;

        a {
            text-decoration: none;
            color: var(--font-color)
        }

        a:hover {
            color: var(--secondary-color)
        }
    }


</style>