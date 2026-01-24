<template>

    <section class="containerMain">
        <Banner />
        <!-- <Home /> -->
        <About />
        <!-- <LoopTechnologies /> -->
        <Projects />
    </section>

</template>

<script>
import About from '../sections/About.vue';
import Banner from '../sections/Banner.vue';
import Home from '../sections/Home.vue';
// import LoopTechnologies from '../sections/LoopTechnologies.vue';
import Projects from '../sections/Projects.vue';

    export default {
        /* Registrando Componentes */
        components: { 
            Home, 
            Projects, 
            About, 
            Banner,
            // LoopTechnologies
        },
    }

</script>

<style scoped lang="scss">
    .containerMain {
        width: 100%;
    }

</style>