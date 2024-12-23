<template>

    <header class=menu
        @mouseover="openMenu"
        @mouseout="closeMenu"
    >

        <div class="containerMenu">

            <h3>
                <strong>M</strong>arcos<strong>M</strong>onte
            </h3>

            <div 
                
                
            >

                <i class="bi bi-menu-button-fill"></i>

            </div>    

            <section class="listMenu" v-if="visible" >

                <nav @mouseover="openMenu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#projects">Projetos</a></li>
                    </ul>
                </nav>

            </section>

        </div>

    </header>


</template>

<script>

    export default {

        data(){

            return {
                visible: false,
            }

        },

        methods: {

            openMenu(){
                this.visible = true

            },

            closeMenu(){
                this.visible = false
            }

        }

    }

</script>

<style lang="scss" scoped>

    .menu {
        width: 100%;
        height: 5rem;
        border-bottom: solid var(--secondary-color);
        background-color: var(--primary-color);
        position: fixed;
    }

    .containerMenu {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        position: relative;

        h3 {
            font-size: 1.5rem;

            strong {
                color: var(--secondary-color)
            }
        }

        div {
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            background-color: var(--secondary-color);
            border-radius: .5rem;
            border: none;
        }
    }

    .listMenu {
        width: 15rem;
        height: 15rem;
        position: absolute;
        right: 0;
        bottom: -15rem;
        background-color: var(--secondary-color);
        opacity: .5;
        border-radius: 0px 0px 0px 10px;
        
        nav {
            width:100%;
            height: 100%;
            padding: 0 1rem;

            ul {
                width:100%;
                height: 100%;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: flex-end;

                a {
                    color: var(--font-color);
                    text-decoration: none;
                    font-size: 2rem;
                }

                a:hover {
                    color: var(--secondary-color);
                }

            }

        }
    }

    .listMenu:hover {
        opacity: 1;

        a:hover {
            color: var(--primary-color)
        }
    }

</style>