<template>

    <section class="containerPage">

        <Header />
        <Main />
        <Footer />
        
    </section>


</template>

<script>

    import Footer from './Footer.vue';
import Header from './Header.vue';
import Main from './Main.vue';

    export default {

        components: {Header, Main, Footer}

    }

</script>

<style>

    .containerPage {
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        color: var(--font-color)
    }

</style>