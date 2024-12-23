<template>

    <!-- Exibe a foto somente se a largura da tela for maior que 700px -->
    <template v-if="isWideScreen">
        <div class="quote-container">
            <p v-if="quote" class="quote-text">"{{ quote.content }}" - {{ quote.author }}</p>
            <p v-else class="quote-text">Carregando frase...</p>
        </div>
    </template>

</template>

<script>
    export default {

        data() {
            return {
                windowWidth: window.innerWidth,// Armazena a largura inicial da tela
                quote: null,
                interval: null,
            };
        },

        computed: {
            isWideScreen() {
                // Computed property para verificar se a largura é maior que 700px
                return this.windowWidth > 800
            }
        },

        created() {
            this.fetchQuote();
        },

        mounted(){

            // Muda a frase a cada 10 segundos (10000 ms)
            this.interval = setInterval(this.fetchQuote, 10000);
            
            // Escuta eventos de resize para atualizar a largura da janela
            window.addEventListener('resize', this.updateWindowWidth);

        },

        beforeDestroy() {
            // Limpa o intervalo quando o componente for destruído
            if (this.interval) {
                clearInterval(this.interval);
            }

            // Remove o ouvinte de evento quando o componente for destruído
            window.removeEventListener('resize', this.updateWindowWidth);
        },

        methods: {

            // Atualiza a largura da janela
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            },

            async fetchQuote() {

                try {
                    const response = await fetch('https://api.quotable.io/random');

                    console.log('Status da Resposta:', response.status); // Verifique o código de status

                    if (!response.ok && this.windowWidth > 800)  {
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
