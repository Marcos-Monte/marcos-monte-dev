<template>

    <footer class="containerFooter">

        <span>Copyright © 2024 by <a href="https://www.linkedin.com/in/montemarcos/" target="_blank">Marcos Monte</a>. All rights reserved.</span>

    </footer>


</template>

<script>

    export default {



    }

</script>

<style lang="scss">

    .containerFooter {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        background-color: var(--primary-color);
        border-top: solid var(--secondary-color);

        a {
            text-decoration: none;
            color: var(--font-color)
        }

        a:hover {
            color: var(--secondary-color)
        }
    }

    @media (max-width: 768px){
        .containerFooter {
            font-size: 1rem;
            text-align: center
        }
    }

</style>