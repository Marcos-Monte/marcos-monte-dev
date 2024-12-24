<template>

  <Page :class="styleMode === false? 'dark': 'light'"/>

</template>

<script>

  import eventBus from './barramento';
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
