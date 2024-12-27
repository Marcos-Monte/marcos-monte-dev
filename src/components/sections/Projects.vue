<template>

    <section id="projects">

        <h2>Projetos</h2>

        <section class="carrossel">

            <button class="botaoCarrossel prev" @click="prevSlide">❮</button>

            <!-- :style="{ transform: `translateX(-${currentIndex * 100}%)` }" -->
            <div 
                class="carrosselContainer"
                
                >

                <Card 
                    class="carrosselItem"
                    v-for="(projeto, index) in projetos"
                    :key="index"
                    :propsProjeto="projeto"

                    :propsCurrentIndex="currentIndex" 
                    :propsIndex="index"
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
                itemsPerPage: 3, // Número de projetos visíveis por vez
            };

        },

        computed: {

            totalSlides() {
                // Calcula o número total de "páginas" de projetos
                /* return Math.ceil(this.projetos.length / this.itemsPerPage); */
                return this.projetos.length
            },

        },

        methods: {

            nextSlide() {
                // Avança para o próximo grupo, com looping circular
                this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
                console.log(this.currentIndex)
            },

            prevSlide() {
                // Retrocede para o grupo anterior, com looping circular
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
        width: 80%;
        height: 600px;
        position: relative;
        overflow: hidden;
    }

    .carrosselItem{
        width: calc(100% / 3);
        height: 100%;
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
