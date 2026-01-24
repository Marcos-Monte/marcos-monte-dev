<template>
    <section id="about" class="d-flex flex-direction justify-content-between align-item-center">
        <div class="aboutSection">
            <Photo class="wow animate__animated animate__slideInLeft" :propsImage="imagePath"
                :propsAlt="'Design em animação de um programador com traços indigenas e bigode'" />

            <article class="description wow animate__animated animate__slideInRight">

                <h2><strong>S</strong>obre <strong>M</strong>im</h2>

                <p>Olá, sou Marcos Monte, desenvolvedor Web em transição de carreira e estudante de Análise e
                    Desenvolvimento de Sistemas. Apaixonado por tecnologia, atualmente estou no 4º semestre do curso e
                    desenvolvo projetos utilizando tecnologias como Vue.js, React e Node.js.</p>

                <p>Minha jornada combina habilidades técnicas com uma base sólida de resolução de problemas adquirida ao
                    longo de minha experiência profissional. Como servidor público na área da saúde, desenvolvi uma
                    visão estratégica que aplico no desenvolvimento de soluções funcionais e impactantes.</p>

                <p>Estou sempre explorando novas ferramentas e tendências em tecnologia, buscando evoluir como
                    desenvolvedor e criar aplicações que fazem a diferença. <strong> Vamos construir algo incrível
                        juntos?</strong></p>


            </article>
        </div>
        <LoopTechnologies />
    </section>
</template>

<script>
import darkImage from '../../assets/cartoon-sem-fundo-dark.jpeg';
import lightImage from '../../assets/cartoon-sem-fundo-light.jpeg';
import EventBus from '../../eventBus';
import Photo from '../users/Photo.vue';
import LoopTechnologies from './LoopTechnologies.vue';

export default {
    components: {
        Photo,
        LoopTechnologies,
    },

    data() {
        return {
            appStyle: false,
        }
    },

    computed: {
        imagePath() {
            return this.appStyle
                ? lightImage
                : darkImage
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

<style lang="scss" scoped>
.aboutSection {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

}

.description {
    width: 35%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    h2 {
        font-size: 2rem;

        strong {
            color: var(--secondary-color)
        }

    }

    p {
        font-size: 1.2rem;

        strong {
            color: var(--secondary-color)
        }
    }
}

/* Medias */
@media (min-width: 701px) and (max-width: 1200px) {
    .aboutSection {
        flex-direction: column;
        gap: 2rem;
    }

    .description {
        width: 80%;
    }
}

@media (max-width: 700px) {
    .aboutSection {
        padding: 3rem 0;
        height: 100%;
        flex-direction: column;
        gap: 1rem;
    }

    .description {
        width: 95%;
        h2 {
            font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
        }
    }
}
</style>