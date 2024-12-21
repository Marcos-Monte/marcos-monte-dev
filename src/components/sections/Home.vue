<template>

    <section id="home">

        <article>
            <h1>Marcos Monte</h1>
            <span>Desenvolvedor_Web</span>

            <div class="containerIcons">
                <img alt="Logo JAVASCRIPT" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg">

                <img alt="Logo JAVASCRIPT" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg">

                <img alt="Logo JAVASCRIPT" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg">

                <img alt="Logo JAVASCRIPT" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg">

                <img alt="Logo JAVASCRIPT" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg">

                
            </div>

            
            <span>Contatos</span>

            <div class="contacts">

                <a href="https://www.linkedin.com/in/montemarcos/" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/Marcos-Monte" target="_blank"><i class="bi bi-github"></i></a>
                <a href="mailto:marcos.monte.junior@gmail.com" target="_blank"><i class="bi bi-envelope"></i></a>
                <a href="https://wa.me/5513996398240?text=" target="_blank"><i class="bi bi-whatsapp"></i></a>
                <a href="/Curriculo-Marcos Monte.pdf" target="_blank"><i class="bi bi-file-person-fill"></i></a>
            
            </div>
        </article>

        <Quote />

    </section>

</template>

<script>

    import Quote from '../users/Quote.vue';

    export default {

        components: {Quote}


    }

</script>

<style lang="scss">

    #home {
        width: 100%;
        height: 99.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        background-image: url('../../assets/background-dark.jpg');
        background-size: cover;
        background-position: center;

        article {
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            h1 {
                font-size: 3rem;
            }

            span {
                font-size: 2rem;
                font-weight: 700;
                color: var(--secondary-color)
            }

            .containerIcons {
                width: 100%;
                height: 6rem;
                display: flex;
                justify-content: space-between;
                align-items: center;

            }

            .contacts {
                width: 80%;
                display: flex;
                justify-content: space-between;
                
                a {
                    width: 3rem;
                    height: 3rem;
                    
                    
                    border-radius: .5rem;
                    background-color: var(--secondary-color);
                    text-decoration: none;

                    i {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5rem;
                        color: var(--font-color);
                    }

                    i:hover{
                        color: var(--secondary-color)
                    }
                }

                a:hover {
                    background-color: var(--font-color);
                }
            }
        }
    }

</style>