<template>

    <header class="containerHeader">

        <h3>
            <strong>M</strong>arcos<strong>M</strong>onte
        </h3>

        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#projects">Projetos</a></li>
            </ul>
        </nav>

    </header>


</template>

<script>

    export default {



    }

</script>

<style lang="scss">

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


</style>