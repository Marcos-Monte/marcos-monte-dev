<template>

    <section id="about">

        <div class="photo">
            <img src="@/assets/foto.jpeg" alt="">
        </div>

        <article class="description">

            <h2><strong>S</strong>obre <strong>M</strong>im</h2>

            <p>Olá, sou Marcos Monte, desenvolvedor Web em transição de carreira e estudante de Análise e Desenvolvimento de Sistemas. Apaixonado por tecnologia, atualmente estou no 4º semestre do curso e desenvolvo projetos utilizando tecnologias como Vue.js, React e Node.js.</p> 
            
            <p>Minha jornada combina habilidades técnicas com uma base sólida de resolução de problemas adquirida ao longo de minha experiência profissional. Como servidor público na área da saúde, desenvolvi uma visão estratégica que aplico no desenvolvimento de soluções funcionais e impactantes.</p> 
            
            <p>Estou sempre explorando novas ferramentas e tendências em tecnologia, buscando evoluir como desenvolvedor e criar aplicações que fazem a diferença. <strong> Vamos construir algo incrível juntos?</strong></p>


        </article>
    </section>

</template>

<script>

    export default {



    }

</script>

<style lang="scss" scoped>
    #about {
        width: 100%;
        height: 99.5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        border: solid black;
        
    }

    .photo {
            width: 20%;
            border-radius: 50%;
            
            
            img {
                width: 100%;
                border-radius: 50%;
            }
    }

    .photo:hover{
        box-shadow: 0 12px 100px var(--secondary-color);
    }

    .description {
        width: 35%;
        text-align: justify;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 2rem;

        h2 {
            font-size: 3rem;

            strong {
                color: var(--secondary-color)
            }

        }

        p{
            line-height: 1.8rem;
            font-size: 1.2rem;

            strong {
                color: var(--secondary-color)
            }
        }
    }

</style>