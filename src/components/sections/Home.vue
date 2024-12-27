<template>

    <section id="home">

            <article class="article">

                <h1>Marcos Monte</h1>
                <span>Desenvolvedor_Web</span>

                <Techs />

                <Contacts />

            </article>

            <Photo 
                :propsImage="imagePath"
                :propsAlt="'Design em animação de um programador com traços indigenas e bigode'" 
            />

    </section>

</template>

<script>

/* Import: do Objeto EventBus */
import EventBus from '@/eventBus';

/* Importando Imagens */
import darkImage from '@/assets/cartoon-sem-fundo-dark.jpeg';
import lightImage from '@/assets/cartoon-sem-fundo-light.jpeg';

/* Import: Componentes */
import Contacts from '../users/Contacts.vue';
import Photo from '../users/Photo.vue';
import Techs from '../users/Techs.vue';

    export default {
        /* Registrando Componentes */
        components: {Techs, Contacts, Photo},

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
                return this.appStyle?lightImage:darkImage
                
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
        height: 99vh;
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
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        h1 {
            font-size: 2.5rem
        }

        span {
            font-size: 1.8rem;
            color: var(--secondary-color);
            font-weight: 700;
        }
    }

    /* Medias */
    @media (min-width: 350px) and (max-width: 801px){
        #home {
            padding: 7rem 0 3rem 0 ;
            height: 100%;
            width: 100%;
            flex-direction:column-reverse;
            gap: 0;
        }

        .article {
            width: 90%;
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

            span {
                font-size: 1.2rem;
            }
        }
    }
</style>