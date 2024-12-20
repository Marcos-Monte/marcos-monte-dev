<template>

    <section id="about">

        <div class="photo">
            <img src="@/assets/foto.jpeg" alt="">
        </div>

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

            
            <span>Contate me</span>

            <div class="contacts">

                <a href="https://www.linkedin.com/in/montemarcos/" target="_blank"><img alt="Logo do LinkedIn" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" style="color: transparent;"></a>

                <a href="https://github.com/Marcos-Monte" target="_blank"><img alt="Logo do Github" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" style="color: transparent;"></a>

                <a href="https://github.com/Marcos-Monte" target="_blank"><img alt="Logo do Email" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" src="https://www.svgrepo.com/show/464889/email-open.svg" style="color: transparent;"></a>

                <a href="https://github.com/Marcos-Monte" target="_blank"><img alt="Logo de Email" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mail-open/mail-open-original.svg" style="color: transparent;"></a>
            
            </div>
        </article>

    </section>

</template>

<script>

    export default {



    }

</script>

<style lang="scss">

    #about {
        width: 100%;
        height: 99.5vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        border: solid black;

        .photo {
            width: 25%;
            
            
            img {
                width: 100%;
                border-radius: 50%;
            }
        }

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
                color: var(--secondary-color)
            }

            div {
                width: 100%;
                display: flex;
                justify-content: space-around;
            }
        }
    }

</style>