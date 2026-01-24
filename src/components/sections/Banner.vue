<template>
    <section id="bannerSection">
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
    #bannerSection {
        width: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>