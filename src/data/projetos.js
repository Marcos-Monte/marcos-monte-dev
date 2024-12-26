import CadastroGestantes from '@/data/img/cadastro-gestante.png';
import JornadaPython from '@/data/img/jornada-python.webp';
import MatadorDeMonstros from '@/data/img/matador-de-monstros.jpeg';
import Restaurant from '@/data/img/restaurant.webp';
import ThiagoAndradeImagem from '@/data/img/thiagoandrade.webp';
import ToDoList from '@/data/img/todolist.jpeg';

export default {
    projetos: [
        {titulo: 'Pagina Institucional', subtitulo: 'Thiago Andrade', imagem: ThiagoAndradeImagem, linkGithub: 'https://github.com/Marcos-Monte/thiago-andrade', linkApp: 'https://thiagoandradests.com.br/', descricao: 'Este projeto consiste em uma página institucional para um pré-candidato a vereador da cidade de Santos, atualmente em desenvolvimento. A página oferece uma visão completa sobre o candidato e permite a interação com a população.'},

        {titulo: 'Página de Cadastro', subtitulo: 'Controle de Gestantes SUS', imagem: CadastroGestantes, linkGithub: 'https://github.com/Marcos-Monte/cadastro-gestantes', linkApp: 'https://cadastro-gestantes.vercel.app/', descricao: 'Este projeto é destinado ao controle dos registros de gestantes em uma Unidade Básica de Saúde (SUS). A aplicação está atualmente em desenvolvimento.'},


        {titulo: 'ToDo List', subtitulo: 'Organizador de Tarefas', imagem: ToDoList, linkGithub: 'hhttps://github.com/Marcos-Monte/todo-list', linkApp: 'https://todo-list-one-blue.vercel.app/', descricao: 'ToDo List é uma aplicação simples e eficiente desenvolvida em Vue.js que permite ao usuário organizar suas tarefas diárias. A aplicação possibilita a criação, exclusão e marcação de tarefas concluídas, além de fornecer um marcador visual que mostra o progresso das atividades.'},

        {titulo: 'Matador de Monstros', subtitulo: 'Jogo de Batalhas', imagem: MatadorDeMonstros, linkGithub: 'https://github.com/Marcos-Monte/matador-de-monstros', linkApp: 'https://marcos-monte.github.io/matador-de-monstros/', descricao: 'Matador de Monstros é uma aplicação desenvolvida durante meus estudos de Vue.js. Trata-se de um jogo simples e interativo onde o jogador enfrenta um monstro em uma batalha épica. O objetivo é derrotar o monstro antes de ser derrotado!'},

        {titulo: 'Jornada Python', subtitulo: 'Landing Page', imagem: JornadaPython, linkGithub: 'https://github.com/Marcos-Monte/Teste-Pratico-Hashtag', linkApp: 'https://teste-pratico-hashtag.vercel.app/', descricao: 'Este projeto é uma landing page desenvolvida para o evento de ensino "Jornada Python", parte de um teste prático para a vaga de Desenvolvedor Front-End na Empresa Hashtag. A página é totalmente responsiva, feita em HTML e CSS, seguindo as especificações do recrutador.'},

        {titulo: 'Restaurant', subtitulo: 'Menu Interativo', imagem: Restaurant, linkGithub: 'https://github.com/Marcos-Monte/next-restaurant', linkApp: 'https://next-restaurant-ecru.vercel.app/', descricao: 'O projeto consiste numa página de menu interativa, pensada para proporcionar aos utilizadores uma experiência dinâmica na exploração de diferentes categorias de pratos, como entradas, massas, bebidas, etc.'},
    ]
}