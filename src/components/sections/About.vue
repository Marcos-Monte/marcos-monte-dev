<template>

    <section id="about">
        <!-- Exibe a foto somente se a largura da tela for maior que 700px -->
        <template v-if="isWideScreen">

            <!-- Componente recebe, método COMPUTADO que armazena o caminho da Imagem e texto alternativo, via 'props'-->
            <!-- Animação usando as bibliotecas 'wow.js e animate.css' -->
            <Photo 
                class="wow animate__animated animate__slideInLeft"
                :propsImage="image"
                :propsAlt="'Foto do Desenvolvedor'" 
            />

        </template>

        <!-- Animação usando as bibliotecas 'wow.js e animate.css' -->
        <article class="description wow animate__animated animate__slideInRight">

            <h2><strong>S</strong>obre <strong>M</strong>im</h2>

            <p>Olá, sou Marcos Monte, desenvolvedor Web em transição de carreira e estudante de Análise e Desenvolvimento de Sistemas. Apaixonado por tecnologia, atualmente estou no 4º semestre do curso e desenvolvo projetos utilizando tecnologias como Vue.js, React e Node.js.</p> 
            
            <p>Minha jornada combina habilidades técnicas com uma base sólida de resolução de problemas adquirida ao longo de minha experiência profissional. Como servidor público na área da saúde, desenvolvi uma visão estratégica que aplico no desenvolvimento de soluções funcionais e impactantes.</p> 
            
            <p>Estou sempre explorando novas ferramentas e tendências em tecnologia, buscando evoluir como desenvolvedor e criar aplicações que fazem a diferença. <strong> Vamos construir algo incrível juntos?</strong></p>


        </article>

    </section>

</template>

<script>
/* Import de Imagems */
import Foto from '../../assets/foto.jpeg';

/* Import de Componentes */
import Photo from '../users/Photo.vue';

    export default {
        /* Registrando componente Filho */
        components: {Photo},

        data(){
            return {
                windowWidth: window.innerWidth, // Armazena a largura inicial da tela
                image: Foto, // Variavel recebe o caminho da 'imagem', que será adicionada ao componente Photo via Props
            }
        },

        computed: {
            // Computed property para verificar se a largura é maior que 700px
            isWideScreen(){
                return this.windowWidth > 700
            },
        },

        mounted() {
            // Escuta eventos de resize para atualizar a largura da janela
            window.addEventListener('resize', this.updateWindowWidth);

        },

        beforeDestroy() {
            // Remove o ouvinte de evento quando o componente for destruído
            window.removeEventListener('resize', this.updateWindowWidth);
        },

        methods: {
            // Atualiza a largura da janela
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            }
        }

    }

</script>

<style lang="scss" scoped>
    #about {
        width: 100%;
        height: 99.5vh;
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

        p{
            font-size: 1.2rem;

            strong {
                color: var(--secondary-color)
            }
        }
    }

    /* Medias */
    @media (min-width: 701px) and (max-width: 1200px){
        #about {
            padding: 5rem 0 3rem 0 ;
            height: 100%;
            flex-direction: column;
        }

        .description {
            width: 80%;
        }
    }

    @media (max-width: 700px){
        #about {
            padding: 5rem 0 3rem 0 ;
            height: 100%;
            flex-direction: column;
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