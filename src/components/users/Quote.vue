<template>

    <div class="quote-container">
        <p v-if="quote" class="quote-text">"{{ quote.content }}" - {{ quote.author }}</p>
        <p v-else class="quote-text">Carregando frase...</p>
    </div>

</template>

<script>
    export default {

        data() {
            return {
                quote: null,
                interval: null,
            };
        },

        created() {
            this.fetchQuote();
        },

        mounted(){

            // Muda a frase a cada 10 segundos (10000 ms)
            this.interval = setInterval(this.fetchQuote, 10000);

        },

        beforeDestroy() {
            // Limpa o intervalo quando o componente for destruído
            if (this.interval) {
                clearInterval(this.interval);
            }
        },



        methods: {

            async fetchQuote() {

                try {
                    const response = await fetch('https://api.quotable.io/random');

                    console.log('Status da Resposta:', response.status); // Verifique o código de status

                    if (!response.ok) {
                        throw new Error(`Erro ao buscar a frase: ${response.statusText}`);
                    }

                    const data = await response.json();
                    this.quote = data;

                } catch (error) {

                    console.error('Erro:', error);
                    this.quote = { content: "Não foi possível carregar uma frase agora. Tente novamente mais tarde.", author: "" };

                }
            }
        },
    };
</script>

<style scoped>
    .quote-container {
    margin-top: 20px;
    text-align: center;
    font-style: italic;
    color: var(--font-color);
    }

    .quote-text {
    font-size: 1.2em;
    line-height: 1.5;
    }
</style>
