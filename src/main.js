/* Import: Estilizações Globais */
import './style.css';
// Import: Biblioteca de Estilizações CSS, registrando de forma GLOBAL
import 'animate.css';
// Import: Biblioteca de ativação das animações ao rolar a pagina
import WOW from 'wow.js';
/* Import: Módulo de Criação de Instancia Vue */
import { createApp } from 'vue';
/* Import: Componente Principal da Aplicação */
import App from './App.vue';

/* Criando a Instancia Vue */
const app = createApp(App)

// Iniciando WOW.js para ativar animações ao rolar a pagina
new WOW({
    boxClass: 'wow',       // Classe que será animada
    animateClass: 'animate__animated', // Classe do animate.css
    offset: 100,           // Distância antes da ativação (100px antes de entrar na tela)
    mobile: true,          // Ativar animações em dispositivos móveis?
    live: true             // Atualizar para elementos carregados dinamicamente?
}).init();

// Montando Componente Principal que recebe o conteudo do id app
app.mount('#app');
