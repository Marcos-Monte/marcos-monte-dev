<template>

    <template v-if="isWideScreen">

        <header class="containerHeader">

            <h3>
                <strong>M</strong>arcos<strong>M</strong>onte
            </h3>

            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>

                    <button class="styleButton" @click="changeStyleMode()" :class="styleCircle === false? 'lightModeCircle': 'darkModeCircle'">
                        <span></span>
                    </button>

                </ul>
            </nav>

        </header>

    </template>

    <template v-else>

        <Menu />

    </template>
    


</template>

<script>

    /* Importando Objeto de Event Bus */
    import eventBus from '@/barramento';
import Menu from '@/components/users/Menu.vue';

    export default {

        components: {Menu},
        
        data(){
            return {
                windowWidth: window.innerWidth, // Armazena a largura inicial da tela
                styleCircle: false, // Estilo do 'circulo' de dentro do botão que altera o estilo
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
            },

            /* Emite um Evento Personalizado que será usado para modificar o 'estilo' da aplicação entre 'dark e light mode' */
            changeStyleMode(){
                eventBus.emit('alterouEstilo')

                /* Altera o 'circulo' de dentro do botão que altera o estilo */
                this.styleCircle = !this.styleCircle
            }
        }

    }

</script>

<style lang="scss" scoped>

    .containerHeader {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: solid var(--secondary-color);
        background-color: var(--primary-color);
        font-size: 1.5rem;
        position: fixed;

        h3 {
            font-size: 2rem;

            strong {
                color: var(--secondary-color)
            }
        }

        nav {
            width: 30%;

            ul {
                width: 100%;
                list-style: none;
                display: flex;
                justify-content: space-around;
                align-items: center;

                a {
                    color: var(--font-color);
                    text-decoration: none;
                }

                a:hover {
                    color: var(--secondary-color);
                }

            }

        }
    }

    .styleButton {
        width: 4rem;
        height: 2rem;
        display: flex;
        align-items: center;
        background-color: transparent;
        border: solid var(--secondary-color);
        border-radius: 15px;
        padding: 4px;
        transition: ease;

        span {
            height: 100%;
            width: 35%;
            background-color: var(--secondary-color);
            border-radius: 50%;
        }
    }

    .lightModeCircle {
            justify-content: flex-start;
        }

    .darkModeCircle {
        justify-content: flex-end;
    }

    /* Medias */
    @media (min-width: 769px) and (max-width: 1000px){
        .containerHeader {
            nav {
                width: 60%;
                
            }
        }
    }

    @media (max-width: 768px) {

    }

</style>