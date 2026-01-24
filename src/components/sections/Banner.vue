<template>
    <section id="home" class="bannerSection">
        <img :src="imagePath" alt="Banner Image" loading="lazy"/>
    </section>

</template>

<script>
import { mapGetters } from 'vuex';
import LightBanner from '../../assets/banner-light.png';
import DarkBanner from '../../assets/banner.png';

    export default {
        data(){
            return {
                banner: DarkBanner,
            }
        },

        computed: {
            ...mapGetters('globals', ['appStyle']),

            imagePath() {
                return this.appStyle
                    ? LightBanner
                    : DarkBanner
            }
        },
    }

</script>

<style scoped lang="scss">
    .bannerSection {
        padding-top: 80px !important;
        width: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
</style>