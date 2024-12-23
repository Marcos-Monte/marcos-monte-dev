<template>

    <section class="containerMain">

        <Home />

        <About />

        <!-- <Projects /> -->

    </section>

</template>

<script>

    import About from '../sections/About.vue';
import Home from '../sections/Home.vue';
/* import Projects from '../sections/Projects.vue'; */

    export default {

        /* components: {Home, Projects, About}, */
        components: {Home, About}

    }

</script>

<style>

    .containerMain {
        width: 100%;
    }

</style>