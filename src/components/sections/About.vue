<template>
    <section id="about" class="d-flex flex-direction justify-content-between align-item-center">
        <div class="aboutSection">
            <div class="photoSection">
                <Photo class="wow animate__animated animate__slideInLeft" :propsImage="imagePath"
                    :propsAlt="'Design em animação de um programador com traços indigenas e bigode'" />

                <div class="buttonsBox">
                    <button class="buttonMidia" v-for="midia in midias" :key="midia.name" @click="handleBlick(midia.link)">
                        {{ midia.name }}
                    </button>
                </div>
            </div>
            <article class="description wow animate__animated animate__slideInRight">

                <h2><strong>S</strong>obre <strong>M</strong>im</h2>

                <p>Olá, sou Marcos Monte, desenvolvedor Web Júnior formado em Análise e Desenvolvimento de Sistemas em
                    junho de 2025. Apaixonado por tecnologia, estou sempre explorando novas ferramentas para criar
                    soluções inovadoras e impactantes.</p>
                <p>Desde fevereiro de 2025, atuo como desenvolvedor Web, utilizando minha stack composta por JavaScript,
                    Vue.js, Bootstrap, Vuetify, Vue-Router, VUEX, GIT, VS Code, Bitbucket, Jira, Axios e integração com
                    APIs RESTful.</p>
                <p>Participo de uma squad com cinco membros fixos, onde colaboro em projetos de alto impacto. Essa
                    experiência tem aprimorado minhas habilidades técnicas e interpessoais em ambientes dinâmicos e
                    colaborativos.</p>
                <p>No momento, estou ampliando meu conhecimento com Kotlin, visando criar aplicações mobile usando
                    Kotlin Multiplataforma para Android e iOS. Apesar de estar no início dos estudos, estou animado para
                    construir minha primeira aplicação.</p>
                <p>Com visão estratégica desenvolvida através da saúde pública e uma base sólida em resolução de
                    problemas, busco evoluir continuamente e criar aplicações que fazem a diferença. <strong>Vamos
                        juntos nessa jornada?</strong></p>

            </article>
        </div>
        <LoopTechnologies />
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import curriculoPDF from '../../../public/CV 2025.pdf';
import darkImage from '../../assets/cartoon-sem-fundo-dark.jpeg';
import lightImage from '../../assets/cartoon-sem-fundo-light.jpeg';
import Photo from '../users/Photo.vue';
import LoopTechnologies from './LoopTechnologies.vue';

export default {
    components: {
        Photo,
        LoopTechnologies,
    },

    data() {
        return {
            midias: [
                { name: 'Linkedin', link: 'https://www.linkedin.com/in/montemarcos/' },
                { name: 'WhatsApp', link: 'https://wa.me/+5513996398240' },
                { name: 'Email', link: 'mailto:marcos.monte.junior@gmail.com' },
                { name: 'GitHub', link: 'https://github.com/Marcos-Monte' },
                { name: 'Curriculo', link: curriculoPDF },
            ]
        };
    },

    computed: {
        ...mapGetters('globals', ['appStyle']),

        imagePath() {
            return this.appStyle
                ? lightImage
                : darkImage
        }
    },

    methods: {
        handleBlick(link) {
            window.open(link, '_blank');
        }
    }
}

</script>

<style lang="scss" scoped>
.aboutSection {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .photoSection {
        width: 50%;
        min-width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        .buttonsBox {
            width: 100% !important;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            .buttonMidia {
                padding: 0.8rem 1.5rem;
                border: none;
                border-radius: 8px;
                background-color: var(--primary-color);
                color: var(--text-color);
                font-size: 1rem;
                cursor: pointer;
                transition: background-color 0.3s, color 0.3s;

                &:hover {
                    background-color: var(--secondary-color);
                    color: var(--background-color);
                }
            }
        }
    }
}

.description {
    width: 50%;
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
        height: 100%;
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

        .photoSection {
            width: 100%;
        }
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