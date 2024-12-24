<template>

    <header class="containerHeader">

        <h3>
            <strong>M</strong>arcos<strong>M</strong>onte
        </h3>

        <div class="menu" v-if="windowWidth <= 768" @click="handleMenu()">

            <i class="bi bi-menu-button-fill"></i>

        </div>  

        <nav :class="visibility == false? 'hidden': 'visible'">
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

<script>

    /* Importando Objeto de Event Bus */
    import eventBus from '@/barramento';

    export default {
        
        data(){
            return {
                windowWidth: window.innerWidth, // Armazena a largura inicial da tela
                styleCircle: false, // Estilo do 'circulo' de dentro do botão que altera o estilo
                visibility: true, // Mostrar ou esconder o 'menu' (resolução mobile) após o click
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
            // Atualiza a largura da janela ()
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;

                // Se a largura da tela for MAIOR que 768 (mostrar navegação), senão. (não mostrar)
                this.windowWidth > 768? this.visibility = true: this.visibility = false;

            },

            /* Emite um Evento Personalizado que será usado para modificar o 'estilo' da aplicação entre 'dark e light mode' */
            changeStyleMode(){
                eventBus.emit('alterouEstilo')

                /* Altera o 'circulo' de dentro do botão que altera o estilo */
                this.styleCircle = !this.styleCircle
            },

            handleMenu(){
                this.visibility = !this.visibility
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

    /* Menu */
    .menu {
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            background-color: var(--secondary-color);
            border-radius: .5rem;
            border: none;
        }
    .visible {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    /* Medias */
    @media (min-width: 769px) and (max-width: 1200px){
        .containerHeader {
            nav {
                width: 60%;
                
            }
        }
    }

    @media (max-width: 768px) {
        .containerHeader{
            flex-wrap: wrap;
            padding: 0 1.5rem;
            justify-content: space-between;

            h3 {
                font-size: 1.5rem;
            }

            nav {
                min-width: 50%;
                height: 15rem;
                position: absolute;
                right: 0;
                bottom: -15rem;
                background-color: var(--secondary-color);
                border-radius: 0px 0px 0px 10px ;

                ul {
                    height: 100%;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: space-evenly;
                }
            }
        }
    }

    @media (max-width: 350px){
        .containerHeader {
            justify-content: flex-end;
            h3 {
                display: none;
                
            }
        }
    } 

</style>