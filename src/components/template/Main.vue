<template>

    <section class="containerMain">
        <Banner />
        <!-- <Home /> -->
        <About />
        <Projects />
    </section>

</template>

<script>

/* Imports: Componentes referentes ao conteudo da aplicação */
import About from '../sections/About.vue';
import Banner from '../sections/Banner.vue';
import Home from '../sections/Home.vue';
import Projects from '../sections/Projects.vue';

    export default {
        /* Registrando Componentes */
        components: { 
            Home, 
            Projects, 
            About, 
            Banner,
        },
    }

</script>

<style scoped lang="scss">
    .containerMain {
        width: 100%;
    }

</style>