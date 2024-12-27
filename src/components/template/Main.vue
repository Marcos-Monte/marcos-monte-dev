<template>

    <section class="containerMain">

        <Home />

        <About />

        <Projects />

    </section>

</template>

<script>

/* Imports: Componentes referentes ao conteudo da aplicação */
import About from '../sections/About.vue';
import Home from '../sections/Home.vue';
import Projects from '../sections/Projects.vue';

    export default {
        /* Registrando Componentes */
        components: {Home, Projects, About},

    }

</script>

<style>

    .containerMain {
        width: 100%;
    }

</style>