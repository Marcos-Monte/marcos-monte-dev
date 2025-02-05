<template>

    <section id="home">

            <article class="article">

                <h1>Marcos Monte</h1>
                <!-- <span>Desenvolvedor_Web</span> -->
                <Subtitle />

                <Techs />

                <Contacts />

            </article>

            <!-- Componente recebe, método COMPUTADO que armazena o caminho da Imagem e texto alternativo, via 'props'-->
            <Photo 
                :propsImage="imagePath"
                :propsAlt="'Design em animação de um programador com traços indigenas e bigode'" 
            />

    </section>

</template>

<script>

/* Import: do Objeto EventBus */
import EventBus from '../../eventBus.js';

/* Importando Imagens */
import darkImage from '../../assets/cartoon-sem-fundo-dark.jpeg';
import lightImage from '../../assets/cartoon-sem-fundo-light.jpeg';

/* Import: Componentes */
import Contacts from '../users/Contacts.vue';
import Photo from '../users/Photo.vue';
import Subtitle from '../users/Subtitle.vue';
import Techs from '../users/Techs.vue';

    export default {
        /* Registrando Componentes */
        components: {Techs, Contacts, Photo, Subtitle},

        data(){

            return {
                /* Variavel que será alternada de acordo com o estilo da aplicação */
                appStyle: false, 

            }

        },

        /* Variaveis que são monitoradas de forma Síncrona */
        computed: {
            
            imagePath(){

                /* De acordo com o 'estilo' da aplicação terá uma imagem específica */
                return this.appStyle
                    ?lightImage
                    :darkImage
                
            }

        },  

        /* Ciclo de vida da aplicação */
        created(){

            /* Assim que a aplicação é iniciada, fica monitorando o evento personalizado */
            EventBus.on('alterouEstilo', () => {
                /* Sempre que o evento ocorrer, alternar o valor da variável */
                this.appStyle = !this.appStyle
            })

        }

    }

</script>

<style lang="scss" scoped>

    #home {
        width: 100%;
        height: 99.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        background-image: var(--home-background);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

    }

    .article {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        h1 {
            font-size: 2.5rem
        }
    }

    /* Medias */
    @media (min-width: 350px) and (max-width: 801px){
        #home {
            padding: 7rem 0 3rem 0 ;
            height: 100vh;
            width: 100%;
            flex-direction:column-reverse;
            gap: 0;
        }

        .article {
            width: 100%;
            
        }

    }

    @media (max-width: 350px){
        #home {
            padding: 6rem 0;
            height: 100%;
            width: 100%;
            flex-direction:column-reverse;
            gap: 0;
        }

        .article {
            width: 100%;

            h1 {
                font-size: 1.8rem;
            }


        }

    }
</style>