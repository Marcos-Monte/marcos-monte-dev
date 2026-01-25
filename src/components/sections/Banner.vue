<template>
    <section id="home" class="bannerSection">
        <img :src="imagePath" alt="Banner Image" loading="lazy"/>
    </section>

</template>

<script>
import { mapGetters } from 'vuex';
import MobileLightBanner from '../../assets/banner-light-mobile.png';
import LightBanner from '../../assets/banner-light.png';
import MobileDarkBanner from '../../assets/banner-mobile.png';
import DarkBanner from '../../assets/banner.png';

    export default {
        data(){
            return {
                banner: DarkBanner,
                windowWidth: window.innerWidth,
            }
        },

        computed: {
            ...mapGetters('globals', ['appStyle']),

            imagePath() {
                return this.appStyle
                    ? (this.isMobile ? MobileLightBanner : LightBanner)
                    : (this.isMobile ? MobileDarkBanner : DarkBanner)
            },

            isMobile() {
                return this.windowWidth <= 700;
            },
        },

        async mounted() {
            window.addEventListener('resize', this.updateWindowWidth);
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.updateWindowWidth);
        },

        methods: {
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            },
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

    @media screen and (max-width: 700px) {
        .bannerSection {
            img {
                object-fit: fill;
            }
        }
    }
</style>