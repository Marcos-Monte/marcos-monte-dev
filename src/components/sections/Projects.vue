<template>

    <section id="projects">

        <h2>Projetos</h2>

        <section class="carrossel">

            <button class="botaoCarrossel prev" @click="prevSlide">❮</button>

            <div class="carrosselContainer">

                <Card 
                    v-for="(projeto, index) in visibleProjects"
                    :key="index"
                    :propsProjeto="projeto"
                />

            </div>

            <button class="botaoCarrossel next" @click="nextSlide">❯</button>

            <p v-if="projetos.length === 0">Houve um erro no carregamento dos projetos =(</p>

        </section>
    </section>
</template>

<script>
/* Import de Componentes e Dados */
import data from "@/data/projetos.js";
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
                /* return this.projetos.length */
            },

            visibleProjects(){
                // Retorna apenas os projetos que devem ser visíveis na página atual, (grupo de 3)
                this.windowWidth = window.innerWidth;

                const quantidade = this.windowWidth < 900? this.itemsPerPage = 1: this.itemsPerPage = 3;

                const start = this.currentIndex * quantidade;

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
    #projects {
        width: 100%;
        height: 99vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem 0;
        gap: 3rem;

        background-image: var(--home-background);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        h2 {
            font-size: 3rem;
        }

        p {
            font-size: 1.8rem;
        }
    }

    .carrossel {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .carrosselContainer{
        width: 100%;
        height: 600px;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .carrosselItem{
        /* Exibe 3 itens por vez */
        /* width: calc(100% / 3); */
        /* height: 100%; */
    }

    .botaoCarrossel{
        background-color: var(--secondary-color);
        border: none;
        display: inline-block;
        position: absolute;
        height: 50px;
        width: 70px;
        top: 50%;
        color: var(--font-color);
        cursor: pointer;
        z-index: 10;
    }

    .next {
        right: 0;
    }

    .prev {
        left: 0;
    }

</style>
