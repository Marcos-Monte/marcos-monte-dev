/* Import: Estilizações Globais */
import './style.css';
// Import: Biblioteca de Estilizações CSS, registrando de forma GLOBAL
import 'animate.css';
/* Import: Módulo de Criação de Instancia Vue */
import { createApp } from 'vue';
/* Import: Componente Principal da Aplicação */
import App from './App.vue';

/* Criando e Montando a Instancia Vue */
createApp(App).mount('#app')
