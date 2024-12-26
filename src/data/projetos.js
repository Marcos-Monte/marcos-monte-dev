import CadastroGestantes from '@/data/img/cadastro-gestante.png';
import ThiagoAndradeImagem from '@/data/img/thiagoandrade.webp';
import ToDoList from '@/data/img/todolist.jpeg';

export default {
    projetos: [
        {titulo: 'Pagina Institucional', subtitulo: 'Thiago Andrade', imagem: ThiagoAndradeImagem, linkGithub: 'https://github.com/Marcos-Monte/thiago-andrade', linkApp: 'https://thiagoandradests.com.br/', descricao: 'Este projeto consiste em uma página institucional para um pré-candidato a vereador da cidade de Santos, atualmente em desenvolvimento. A página oferece uma visão completa sobre o candidato e permite a interação com a população.'},

        {titulo: 'Página de Cadastro', subtitulo: 'Controle de Gestantes SUS', imagem: CadastroGestantes, linkGithub: 'https://github.com/Marcos-Monte/cadastro-gestantes', linkApp: 'https://cadastro-gestantes.vercel.app/', descricao: 'Este projeto é destinado ao controle dos registros de gestantes em uma Unidade Básica de Saúde (SUS). A aplicação está atualmente em desenvolvimento.'},


        {titulo: 'ToDo List', subtitulo: 'Organizador de Tarefas', imagem: ToDoList, linkGithub: 'hhttps://github.com/Marcos-Monte/todo-list', linkApp: 'https://todo-list-one-blue.vercel.app/', descricao: 'ToDo List é uma aplicação simples e eficiente desenvolvida em Vue.js que permite ao usuário organizar suas tarefas diárias. A aplicação possibilita a criação, exclusão e marcação de tarefas concluídas, além de fornecer um marcador visual que mostra o progresso das atividades.'},

    ]
}