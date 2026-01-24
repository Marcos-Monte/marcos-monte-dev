<template>
    <section id="projects" class="projectsSection">

        <h2>Principais Projetos</h2>

        <span>Selecione o projeto que deseja saber mais.</span>

        <template  v-if="projetos.length > 0">
            
            <section class="carrossel wow animate__animated animate__fadeInUp">
                <button class="botaoCarrossel prev" @click="prevSlide">❮</button>

                <div class="carrosselContainer">
                    <Card 
                        v-for="(projeto, index) in visibleProjects"
                        :key="index"
                        :propsProjeto="projeto"
                    />
                </div>
                <button class="botaoCarrossel next" @click="nextSlide">❯</button>
            </section>


        </template>

        <p v-else>Houve um erro no carregamento dos projetos =(</p>
    </section>
</template>

<script>
/* Import de Componentes e Dados */
import data from "../../data/projetos.js";
import Card from "../users/Card.vue";

    export default {

        components: { Card },

        data() {

            return {
                projetos: data.projetos,
                currentIndex: 0, // Índice do grupo atual
                itemsPerPage: 0, // Número de projetos visíveis por vez
                windowWidth: window.innerWidth, // Armazena a largura inicial da tela
            };

        },

        created() {
            // Escuta eventos de resize para atualizar a largura da janela
            window.addEventListener('resize', this.visibleProjects);
        },

        beforeDestroy() {
            // Remove o ouvinte de evento quando o componente for destruído
            window.removeEventListener('resize', this.visibleProjects);
        },

        computed: {

            totalSlides() {
                // Calcula o número total de "páginas" de projetos
                return Math.ceil(this.projetos.length / this.itemsPerPage);
                
            },

            visibleProjects(){
                /* Recebe a 'largura da tela' atual, sempre que o método for iniciado */
                this.windowWidth = window.innerWidth;

                /* Armazena a Lógica: 
                    Se a resolução for menos que 900, mostrar apenas 1 Item
                    Se a resolução for maior que 900, mostrar 3 Itens */
                const quantidade = this.windowWidth < 900? this.itemsPerPage = 1: this.itemsPerPage = 3;

                /* Armazena  o Calculo abaixo*/
                const start = this.currentIndex * quantidade;

                /* Retorna a quantidade de itens indicada */
                return this.projetos.slice(start, start + quantidade)
            }

        },

        methods: {

            nextSlide() {
                // Avança para a próxima página
                this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
                
            },

            prevSlide() {
                // Retrocede para a página anterior
                this.currentIndex =(this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            },

        },

        
    };

</script>

<style lang="scss" scoped>
    .projectsSection {
        width: 100vw !important;
        padding: 5rem 1rem !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem 0;
        gap: 2rem;

        background-image: var(--home-background);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        h2 {
            font-size: 2rem;
        }

        p, span {
            font-size: 1.8rem;
            text-align: center;
        }
    }

    /* Container Maior */
    .carrossel {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        max-width: 1480px;
        margin: 0 auto;
        box-sizing: border-box;
    }

    /* Container que armazena os Items / Projetos */
    .carrosselContainer{
        width: 100%;
        height: 600px;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .botaoCarrossel{
        position: absolute;
        background-color: var(--secondary-color);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 1rem;
        top: 50%;
        color: var(--font-color);
        cursor: pointer;
        z-index: 10;

        &:hover {
            opacity: 0.8;
            transition: all 0.3s ease;
            transform: scale(1.3);
        }
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }


    /* Medias */
    @media (max-width: 900px){
        .projectsSection {
            height: 100%;

            h2 {
                font-size: 1.5rem;
            }

            span {
                font-size: 1.2rem;
            }
        }
    }

</style>
