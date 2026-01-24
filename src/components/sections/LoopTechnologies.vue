<template>
    <section class="technologiesSection">
        <div class="technologies-slider">
            <div class="slider-track">
                <img v-for="(technology, index) in duplicatedLogos" :key="`logo- ${index}`" :src="technology.logo" class="technologie-logo"
                    :alt="technology.name" loading="lazy" />
            </div>
        </div>
    </section>
</template>

<script>
import technologies from '../../data/technologies.js';
export default {

    data() {
        return {
            technologies: technologies,
        };
    },

    computed: {
        duplicatedLogos() {
            return [...this.technologies, ...this.technologies, ...this.technologies, ...this.technologies];
        }
    }
};
</script>

<style scoped lang="scss">
.technologiesSection {
    width: 100vw;
    height: max-content !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.technologies-slider {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    padding: 2rem 0;
    z-index: 0;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--secondary-color);
        opacity: 0.2;
        z-index: -1;
    }
}

.slider-track {
    display: inline-block;
    white-space: nowrap;
    animation: scroll 25s linear infinite;
    
}

.technologie-logo {
    height: 50px;
    max-width: 160px;
    margin: 0 40px;
    vertical-align: middle;
    object-fit: contain;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>