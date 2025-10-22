/* Import de Imagens */
import CadastroGestantes from './img/figures/cadastro-gestante.png';
import FrazattoImagem from './img/figures/frazatto.png';
import GeradorVisita from './img/figures/geradorVisita.png';
import JornadaPython from './img/figures/jornada-python.png';
import MatadorDeMonstros from './img/figures/matador-de-monstros.png';
import Restaurant from './img/figures/restaurant.png';
import Sispar from './img/figures/sispar.png';
import ThiagoAndradeImagem from './img/figures/thiagoandrade.png';
import ToDoList from './img/figures/todolist.png';

/* Import de Tecnologias */
import Axios from './img/icons/iconAxios.png';
import BootstrapVue from './img/icons/iconBootstrapVue.png';
import Css from './img/icons/iconCss.png';
import Git from './img/icons/iconGit.png';
import Html from './img/icons/iconHtml.png';
import JavaScript from './img/icons/iconJs.png';
import MySql from './img/icons/iconMySql.png';
import Next from './img/icons/iconNext.png';
import Node from './img/icons/IconNode.webp';
import Python from './img/icons/iconPython.png';
import React from './img/icons/iconReact.png';
import Sass from './img/icons/iconSass.png';
import SheetDb from './img/icons/iconSheetsDb.png';
import Vite from './img/icons/IconVite.png';
import Vue from './img/icons/iconVue.png';

export default {
    projetos: [
        {titulo: 'Landing Page', subtitulo: 'Frazatto Logística', imagem: FrazattoImagem, linkGithub: '', linkApp: 'https://frazattologistica.com.br/', descricao: 'Landing Page de empresa com foco no ramo Logístico', techs: [JavaScript, Vue, BootstrapVue, Sass, Git]},

        {titulo: 'Pagina Institucional', subtitulo: 'Thiago Andrade', imagem: ThiagoAndradeImagem, linkGithub: '', linkApp: 'https://thiagoandradests.com.br/', descricao: 'Este projeto consiste em uma página institucional para um pré-candidato a vereador da cidade de Santos, atualmente em desenvolvimento. A página oferece uma visão completa sobre o candidato e permite a interação com a população.', techs: [JavaScript, React, Next, Node, SheetDb]},

        {titulo: 'Sistema de Reembolso', subtitulo: 'SISPAR', imagem: Sispar, linkGithub: '', linkGithub: 'https://github.com/Marcos-Monte/sispar', linkGithub: 'https://github.com/Marcos-Monte/sispar-backend', linkApp: 'https://sispar-iota.vercel.app/', descricao: 'O SISPAR é uma aplicação web desenvolvida no curso Fullstack "Be Digital" da Vai na Web, oferecido pela Wilson Sons. O objetivo desse projeto é construir um sistema FullStack de gerenciamento de reembolsos.', techs: [React, Python, MySql, Axios]},

        {titulo: 'Gerador de Visitas', subtitulo: 'Solicitação de Visita Domiciliar SUS', imagem: GeradorVisita, linkGithub: 'https://github.com/Marcos-Monte/vd-valongo', linkApp: 'https://vd-valongo.vercel.app/', descricao: 'Aplicação desenvolvida para Unidade de Saúde da Família do Valongo, Santos-SP. Visa gerar um arquivo, para impressão, que antes era feito manualmente. Pretensão de estender para usabilidade em todas as unidades.', techs: [JavaScript, Vue, Vite, Node]},

        {titulo: 'Página de Cadastro', subtitulo: 'Controle de Gestantes SUS', imagem: CadastroGestantes, linkGithub: 'https://github.com/Marcos-Monte/cadastro-gestantes', linkApp: 'https://cadastro-gestantes.vercel.app/', descricao: 'Este projeto é destinado ao controle dos registros de gestantes em uma Unidade Básica de Saúde (SUS). A aplicação está atualmente em desenvolvimento.', techs: [JavaScript, React, Next, Node, Axios]},


        {titulo: 'ToDo List', subtitulo: 'Organizador de Tarefas', imagem: ToDoList, linkGithub: 'https://github.com/Marcos-Monte/todo-list', linkApp: 'https://todo-list-one-blue.vercel.app/', descricao: 'ToDo List é uma aplicação simples e eficiente desenvolvida em Vue.js que permite ao usuário organizar suas tarefas diárias. A aplicação possibilita a criação, exclusão e marcação de tarefas concluídas, além de fornecer um marcador visual que mostra o progresso das atividades.', techs:[Vue, JavaScript,Node ]},

        {titulo: 'Matador de Monstros', subtitulo: 'Jogo de Batalhas', imagem: MatadorDeMonstros, linkGithub: 'https://github.com/Marcos-Monte/matador-de-monstros', linkApp: 'https://marcos-monte.github.io/matador-de-monstros/', descricao: 'Matador de Monstros é uma aplicação desenvolvida durante meus estudos de Vue.js. Trata-se de um jogo simples e interativo onde o jogador enfrenta um monstro em uma batalha épica. O objetivo é derrotar o monstro antes de ser derrotado!', techs:[Vue, JavaScript]},

        {titulo: 'Jornada Python', subtitulo: 'Landing Page', imagem: JornadaPython, linkGithub: 'https://github.com/Marcos-Monte/Teste-Pratico-Hashtag', linkApp: 'https://teste-pratico-hashtag.vercel.app/', descricao: 'Este projeto é uma landing page desenvolvida para o evento de ensino "Jornada Python", parte de um teste prático para a vaga de Desenvolvedor Front-End na Empresa Hashtag. A página é totalmente responsiva, feita em HTML e CSS, seguindo as especificações do recrutador.', techs:[Html, Css]},

        {titulo: 'Restaurant', subtitulo: 'Menu Interativo', imagem: Restaurant, linkGithub: 'https://github.com/Marcos-Monte/next-restaurant', linkApp: 'https://next-restaurant-ecru.vercel.app/', descricao: 'O projeto consiste numa página de menu interativa, pensada para proporcionar aos utilizadores uma experiência dinâmica na exploração de diferentes categorias de pratos, como entradas, massas, bebidas, etc.', techs: [JavaScript, React, Next, Node]},

    ]
}