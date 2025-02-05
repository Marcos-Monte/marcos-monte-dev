<template>

    <div class="photo">
        <img :src="propsImage" :alt="propsAlt" >
    </div>

</template>

<script>

    export default {

        props: {

            propsImage: {
                type: String,
                required: true,
            },

            propsAlt: {
                type: String,
                default: 'Imagem',
            }
            
        }

    }

</script>


<style lang="scss" scoped>

    .photo {
        width: 25%;
        min-width: 250px;
        border-radius: 50%;

        img {
            width: 100%;
            border-radius: 50%;
        }
    }

    /* Hover */
    .photo:hover{
        box-shadow: 0 12px 100px var(--secondary-color);
    }

    /* Media */
    @media (max-width: 350px){
        .photo {
            min-width: 60%;
            animation: none; // Retira a animação 

            img {
                width: 100%;
            }
        }
    }

</style>