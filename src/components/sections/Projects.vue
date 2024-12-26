<template>

    <section id="projects">

        <h2>Projetos</h2>

        <section class="containerCards">
            <Card 
                v-for="projeto in projetos"
                :propsProjeto = projeto
            />
            
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

<style>
    #projects {
        width: 100%;
        height: 99vh;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        border: solid black;
    }

    .containerCards {
        width: 80%;
        /* height: 100%; */
        display: flex;
        justify-content: space-around;
    }

</style>