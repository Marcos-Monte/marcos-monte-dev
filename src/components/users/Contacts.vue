<template>

    <section class="container">

        <span>Redes e Contatos</span>

        <div class="contacts">

            <a href="https://www.linkedin.com/in/montemarcos/" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a href="https://github.com/Marcos-Monte" target="_blank"><i class="bi bi-github"></i></a>
            <a href="mailto:marcos.monte.junior@gmail.com" target="_blank"><i class="bi bi-envelope"></i></a>
            <a href="https://wa.me/5513996398240?text=" target="_blank"><i class="bi bi-whatsapp"></i></a>
            <a href="/CV 2025.pdf" target="_blank"><i class="bi bi-file-person-fill"></i></a>

        </div>
    </section>

</template>

<style lang="scss" scoped>

    .container {
        width: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        span {
            font-size: 1.6rem;
            color: var(--secondary-color);
            font-weight: 700;
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
    .contacts {
        a:hover {
            background-color: var(--font-color);
            i {
                color: var(--secondary-color)
            }
        }
    }

    /* Medias */

    @media (max-width: 380px){
        .container {
            span {
                font-size: 1.2rem;
            }
        }
    }

    @media (max-width: 350px){

        .contacts {
            width: 100%;

            img {
                width: 3rem;
                height: 3rem;
            }
        }
    }
</style>