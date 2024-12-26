<template>

  <Page :class="styleMode === false? 'dark': 'light'"/>

</template>

<script>

  /* Importando Objeto de Event Bus */
  import eventBus from './barramento';
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
    
  }

</style>
