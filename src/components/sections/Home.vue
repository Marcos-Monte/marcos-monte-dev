<template>

    <section id="home">

        <section class="description">

            <article class="article">
                <h1>Marcos Monte</h1>
                <span>Desenvolvedor_Web</span>

                <div class="containerIcons">

                    <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg">

                    <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg">

                    <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg">

                    <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg">

                    <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg">

                    
                </div>
            
                <span class="spanArticle">Contatos</span>

                <div class="contacts">

                    <a href="https://www.linkedin.com/in/montemarcos/" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="https://github.com/Marcos-Monte" target="_blank"><i class="bi bi-github"></i></a>
                    <a href="mailto:marcos.monte.junior@gmail.com" target="_blank"><i class="bi bi-envelope"></i></a>
                    <a href="https://wa.me/5513996398240?text=" target="_blank"><i class="bi bi-whatsapp"></i></a>
                    <a href="/Curriculo-Marcos Monte.pdf" target="_blank"><i class="bi bi-file-person-fill"></i></a>
                
                </div>

            </article>

            <div class="photo">
                <img src="@/assets/cartoon-sem-fundo-dark.jpeg" alt="">
            </div>

        </section>

        <Quote class="visible"/>

    </section>

</template>

<script>

    import Quote from '../users/Quote.vue';

    export default {

        components: {Quote},

    }

</script>

<style lang="scss" scoped>

    #home {
        width: 100%;
        height: 99vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        background-image: url('@/assets/background-dark.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .description {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem
    }

    .article {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        h1 {
            font-size: 2.5rem
        }

        span {
            font-size: 1.8rem;
            color: var(--secondary-color);
            font-weight: 700;
        }
    }

    .containerIcons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        img {
            width: 17%;
            min-width: 40px;
        }
    }

    .photo {
        width: 25%;
        min-width: 250px;
        border-radius: 50%;

        img {
            width: 100%;
            border-radius: 50%;
        }
    }

    .contacts {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        a {
            width: 3rem;
            height: 3rem;
            background-color: var(--secondary-color);
            border-radius: .5rem;
            text-decoration: none;

            i {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.5rem;
                color: var(--font-color)

            }
        }
    }

    /* Hover */
    .photo:hover{
        box-shadow: 0 12px 100px var(--secondary-color);
    }

    .contacts {
        a:hover {
            background-color: var(--font-color);
            i {
                color: var(--secondary-color)
            }
        }
    }

    /* Medias */
    @media (min-width: 801px) and (max-width: 1200px){
        .description {
            width: 100%;
        }
    }

    @media (min-width: 350px) and (max-width: 801px){
        #home {
            padding: 7rem 0 3rem 0 ;
            height: 100%;
        }

        .description {
            width: 100%;
            height: 100%;
            flex-direction:column-reverse;
            gap: 0;
        }

        .article {
            width: 100%;
        }

        .containerIcons {
            width: 80%;
            justify-content: center;
            gap: 2rem;

            img {
                width: 60px;
            }
        }
    }

    @media (max-width: 350px){
        #home {
            padding: 6rem 0;
            height: 100%;
        }

        .description {
            width: 100%;
            height: 100%;
            flex-direction:column-reverse;
            gap: 0;

            h1 {
                font-size: 1.8rem;
            }

            span {
                font-size: 1.2rem;
            }

        }

        .article {
            width: 100%;
        }

        .containerIcons, .contacts {
            width: 100%;

            img {
                width: 40px;
            }
        }

        .photo {
            min-width: 60%;

            img {
                width: 100%;
            }
        }
    }
</style>