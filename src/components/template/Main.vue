<template>

    <section class="containerMain">

        <About />

        <Projects />

        <Contacts />

    </section>

</template>

<script>

    import About from '../sections/About.vue';
import Contacts from '../sections/Contacts.vue';
import Projects from '../sections/Projects.vue';

    export default {

        components: {About, Projects, Contacts}

    }

</script>

<style>

    .containerMain {
        width: 100%;
    }

</style>