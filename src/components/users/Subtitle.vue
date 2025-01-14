<template>
    <!-- Contêiner principal que envolve o texto fixo e o dinâmico -->
    <div class="subtitle">

        <!-- Texto fixo na aplicação -->
        <span>Desenvolvedor_</span>

        <!-- Texto dinâmico, que será alterado pelo Typewriter -->
        <span class="sub" ref="subtitleRef"></span>

    </div>

</template>

<script>

// Importando hooks do Vue e o pacote Typewriter
import Typewriter from "t-writer.js";
import { onMounted, ref } from 'vue';

    export default {

        setup() {

            // Criando uma referência para o elemento que será manipulado pelo Typewriter
            const subtitleRef = ref(null);
            
             // `onMounted` é um hook do Vue que executa o código assim que o componente é montado no DOM
            onMounted(() => {
                // Pega a referência do elemento onde o texto será animado
                const subtitleElement = subtitleRef.value;

                // Certifique-se de que o elemento alvo está vazio
                if (subtitleElement) {
                     // Limpa qualquer conteúdo anterior dentro do elemento, caso exista
                    subtitleElement.innerHTML = "";

                     // Cria uma nova instância do Typewriter, que vai controlar o texto no elemento
                    const writer = new Typewriter(subtitleElement, {
                        loop: true, // Faz a animação se repetir em loop
                        deleteSpeed: 200, // A velocidade de remoção de caracteres
                        typeColor: '', // A cor do texto enquanto é digitado
                    });

                    // Define a sequência de animação: digitar, esperar, apagar e repetir
                    writer
                        .type(" Web")
                        .rest(800)
                        .remove(3)
                        .type("Front-End")
                        .rest(500)
                        .remove(9)
                        .type("Vue.js")
                        .rest(500)
                        .remove(6)
                        .type("JavaScript")
                        .rest(500)
                        .clear()
                        .start();
                    }
            });

             // Retorna a referência do elemento para que possa ser usada no template
            return { subtitleRef };
        },

    }

</script>

<style scoped>

    .subtitle>span {
        font-size: 1.6rem;
        color: var(--secondary-color);
        font-weight: 700;
    }

    .sub {
        color: var(--secondary-color);
    }

    @media (max-width: 380px){
        .subtitle>span {
            font-size: 1.2rem;
        }
    }

</style>