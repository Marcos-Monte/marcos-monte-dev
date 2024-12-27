<template>

        <article class="cardContainer">

            <img :src="propsProjeto.imagem" alt="">

            <article class="descriptionContainer">

                <div class="titulos">
                    <h3>{{ propsProjeto.titulo }}</h3>
                    <span>{{ propsProjeto.subtitulo }}</span>
                </div>

                <p>{{ propsProjeto.descricao }}</p>
                
                <div class="techs">

                </div>

                <div class="links">
                    <a :href="propsProjeto.linkGithub" target="_blank"><i class="bi bi-github"></i></a>
                    <a :href="propsProjeto.linkApp" target="_blank"><i class="bi bi-display"></i></a>
                </div>

            </article>

        </article>

</template>

<script>

    export default {

        props: {
            propsProjeto: {
                type: Object,
            }, 

            propsIndex: {
                type: Number
            },

            propsCurrentIndex: {
                type: Number
            }
        }


    }

</script>

<style lang="scss" scoped>

    .cardContainer{
        max-width: 300px;
        height: 600px;
        position: relative;
        border-radius: 40px;
        overflow: hidden;

        img {
            height: 100%;
            width: 100%;
            border-radius: 10px;
        }

    }

    .descriptionContainer {
        width: 100%;
        height: 100%;
        padding: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        position: absolute;
        top: 0;
        left: 0;
        transition: transform 0.5s ease-in-out; //Animação suave
        transform: translateY(100%); // desloca inicialmente o container (descrição) para fora da área visivel do card

        background-color: var(--secondary-color);
        text-align: center;
        border-radius: 10px;

        .links {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            i {
                font-size: 3rem;
                text-decoration: none;
                color: var(--font-color)
            }

            i:hover {
                color: var(--primary-color)
            }
        }
    }

    .cardContainer:hover .descriptionContainer{
            transform: translateY(0); //Tras o container (descrição) para a área visivel do card
        }

    


</style>