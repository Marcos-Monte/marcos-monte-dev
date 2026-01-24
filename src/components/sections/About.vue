<template>
    <section id="about" class="d-flex flex-direction justify-content-between align-item-center">
        <div class="aboutSection">
            <Photo class="wow animate__animated animate__slideInLeft" :propsImage="imagePath"
                :propsAlt="'Design em animação de um programador com traços indigenas e bigode'" />

            <article class="description wow animate__animated animate__slideInRight">

                <h2><strong>S</strong>obre <strong>M</strong>im</h2>

                <p>Olá, sou Marcos Monte, desenvolvedor Web Júnior formado em Análise e Desenvolvimento de Sistemas em junho de 2025. Apaixonado por tecnologia, estou sempre explorando novas ferramentas para criar soluções inovadoras e impactantes.</p> <p>Desde fevereiro de 2025, atuo como desenvolvedor Web, utilizando minha stack composta por JavaScript, Vue.js, Bootstrap, Vuetify, Vue-Router, VUEX, GIT, VS Code, Bitbucket, Jira, Axios e integração com APIs RESTful.</p> <p>Participo de uma squad com cinco membros fixos, onde colaboro em projetos de alto impacto. Essa experiência tem aprimorado minhas habilidades técnicas e interpessoais em ambientes dinâmicos e colaborativos.</p> <p>No momento, estou ampliando meu conhecimento com Kotlin, visando criar aplicações mobile usando Kotlin Multiplataforma para Android e iOS. Apesar de estar no início dos estudos, estou animado para construir minha primeira aplicação.</p> <p>Com visão estratégica desenvolvida através da saúde pública e uma base sólida em resolução de problemas, busco evoluir continuamente e criar aplicações que fazem a diferença. <strong>Vamos juntos nessa jornada?</strong></p>

            </article>
        </div>
        <LoopTechnologies />
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import darkImage from '../../assets/cartoon-sem-fundo-dark.jpeg';
import lightImage from '../../assets/cartoon-sem-fundo-light.jpeg';
import Photo from '../users/Photo.vue';
import LoopTechnologies from './LoopTechnologies.vue';

export default {
    components: {
        Photo,
        LoopTechnologies,
    },

    computed: {
        ...mapGetters('globals', ['appStyle']),

        imagePath() {
            return this.appStyle
                ? lightImage
                : darkImage
        }
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
@media (min-width: 901px) and (max-width: 1350px) {
    .aboutSection {
        flex-direction: column;
        gap: 2rem;
    }

    .description {
        width: 80%;
    }
}

@media (max-width: 900px) {
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