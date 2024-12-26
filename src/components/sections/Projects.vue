<template>

    <section id="projects">

        <h2>Projetos</h2>

        <section class="containerCards">

            <template v-if="projetos.length > 0">
                <Card 
                    v-for="projeto in projetos"
                    :propsProjeto = projeto
                />
            </template>

            <p v-else>Houve um erro no carregamento dos projetos =(</p>
            
        </section>

    </section>

</template>

<script>

    import data from '@/data/projetos.js';
import Card from '../users/Card.vue';

    export default {

        components: {Card},

        data(){
            return {
                projetos: data.projetos,
            }
        }

    }

</script>

<style lang="scss" scoped>

    #projects {
        width: 100%;
        height: 99vh;
        padding: 5rem 0;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        gap: 3rem;

        background-image: var(--home-background);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        h2 {
            font-size: 2rem;
        }

        p{
            font-size: 1.8rem;
        }
    }

    .containerCards {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem
    }

    /* Medias */
    @media (max-width: 1200px){
        #projects {
            height: 100%;
        }
    }

</style>