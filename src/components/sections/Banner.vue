<template>
    <section id="home" class="bannerSection">
        <img :src="banner" alt="Banner Image" loading="lazy"/>
    </section>

</template>

<script>
import Banner from '../../assets/banner.png';

    export default {
        data(){
            return {
                banner: Banner,
            }
        },
    }

</script>

<style scoped lang="scss">
    .bannerSection {
        padding-top: 80px !important;
        width: 100%;
        // height: 100vh;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
</style>