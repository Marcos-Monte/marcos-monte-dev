<template>

    <section class="containerMain">
        <Banner />
        <About />
        <Projects />
    </section>

</template>

<script>
import About from '../sections/About.vue';
import Banner from '../sections/Banner.vue';
import Projects from '../sections/Projects.vue';

    export default {
        components: { 
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