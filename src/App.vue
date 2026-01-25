<template>
  <Page :class="appStyle? 'light': 'dark'"/>
</template>

<script>
import { mapGetters } from 'vuex';
import Page from './components/template/Page.vue';

  export default {
    
    name: 'App',

    components: {Page},

    computed: {
      ...mapGetters('globals', ['appStyle']),
    },
  }
</script>

<style>

  #app {
    width: 100%;
    /* Evita criar barras de rolagem */
    overflow: hidden; 
  }

</style>
