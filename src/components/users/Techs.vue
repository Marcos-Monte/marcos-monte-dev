<template>

    <div class="containerIcons">

        <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg">

        <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg">

        <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg">

        <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg">

        <img alt="Logo JAVASCRIPT" loading="lazy" decoding="async" data-nimg="1" class="Home_tech__fibFf" style="color:transparent" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg">


    </div>

</template>

<script>

    export default {

    }

</script>

<style lang="scss" scoped>

    .containerIcons {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        img {
            max-width: 12%;
            min-width: 40px;
        }
    }

    /* Media */
    @media (min-width: 350px) and (max-width: 801px){

        .containerIcons {
            width: 100%;
            justify-content: center;
            gap: 2rem;

            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }

    @media (max-width: 350px){

        .containerIcons {
            width: 100%;

            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }

</style>