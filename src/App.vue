<template>

  <Page :class="styleMode === false? 'dark': 'light'"/>

</template>

<script>

  /* Importando Objeto de Event Bus */
  import eventBus from './eventBus';
  /* Importando Componente Filho */
  import Page from './components/template/Page.vue';

  export default {
    
    name: 'App',

    components: {Page},

    data(){
      return {
        styleMode: false,
      }
    },

    created(){

      eventBus.on('alterouEstilo', () => {

        this.styleMode = !this.styleMode
        
      })


    }
    
  }
</script>

<style>

  #app {
    width: 100%;
    /* Evita criar barras de rolagem */
    overflow: hidden; 
  }

</style>
