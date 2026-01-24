<template>
    <section id="home" class="bannerSection">
        <img :src="imagePath" alt="Banner Image" loading="lazy"/>
    </section>

</template>

<script>
import LightBanner from '../../assets/banner-light.png';
import DarkBanner from '../../assets/banner.png';
import EventBus from '../../eventBus';

    export default {
        data(){
            return {
                banner: DarkBanner,
                appStyle: false,
            }
        },

        computed: {
            imagePath() {
                return this.appStyle
                    ? LightBanner
                    : DarkBanner
            }
        },

        mounted() {
            EventBus.on('alterouEstilo', () => {
                this.appStyle = !this.appStyle
            })
        },

        beforeDestroy() {
            EventBus.off('alterouEstilo');
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