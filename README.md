# Portfólio Pessoal 🚀

Este é o meu portfólio pessoal, criado para exibir minhas habilidades e projetos desenvolvidos. A aplicação é construída em **Vue.js** e inclui recursos interativos e uma navegação amigável para proporcionar uma boa experiência ao usuário.

## Funcionalidades

### 1. **Home**  
A seção **Home** conta com meus contatos e uma animação de subtítulo, além de um desenho que me ilustra. É o primeiro ponto de contato com quem visita meu portfólio.

### 2. **Sobre**  
Na seção **Sobre**, você encontrará uma foto minha com um texto me apresentando. Em resoluções menores, a foto desaparece para garantir uma melhor adaptação visual.

### 3. **Projetos**  
A seção **Projetos** apresenta meus principais trabalhos. Cada projeto é exibido como uma imagem e, ao passar o mouse sobre ela, aparece uma animação que revela o **nome**, **subtítulo**, **descrição** e links para o **GitHub** e para a **Aplicação Rodando**.

## Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- **Vue.js**: Framework principal utilizado para construir a interface e gerenciar a interação com o usuário.
- **Vite**: Ferramenta de build rápida e eficiente para desenvolvimento com Vue.js.
- **JavaScript**: Para a lógica da aplicação e a comunicação entre os componentes.
- **HTML e CSS / SCSS**: Para estruturar e estilizar os componentes individualmente. Utilizei SCSS para garantir um código de estilo modular e de fácil manutenção.

## Funcionalidades Adicionais

- **EventBus (mitt)**: Utilizado para lidar com eventos personalizados e a comunicação entre componentes de forma eficiente.
- **Menu Interativo**: O menu está sempre presente, oferecendo navegação rápida entre as seções. Em resoluções menores, ele se transforma em um menu hamburguer interativo.
- **Troca de Estilo (Dark/Light Mode)**: A aplicação permite a troca entre **modo claro** e **modo escuro**, alterando completamente as cores da interface para oferecer uma experiência mais confortável ao usuário.

## Bibliotecas Utilizadas

- **t-writer.js**: Para animações de texto dinâmicas e interativas no subtítulo.
- **mitt**: Para o gerenciamento de eventos e comunicação entre os componentes Vue.
- **wow.js**: Responsável por controlar **o momento e a forma como as animações são ativadas** na tela. Ele detecta a rolagem da página e inicia a animação dos elementos conforme entram na área visível do usuário.
- **animate.css**: Biblioteca de animações em CSS que **fornece os estilos e efeitos visuais usados nas transições da interface**. Combinada com o wow.js, permite criar experiências fluidas e dinâmicas sem necessidade de código JavaScript complexo.

### Como wow.js e animate.css foram utilizados?

1. **Integrando o animate.css**:  
   - Adicionei a biblioteca para aplicar animações predefinidas em elementos da página.
   - Exemplo: Usei a classe `animate__fadeIn` para suavizar a aparição dos elementos ao carregarem.

2. **Configurando o wow.js**:
   - Inicializei o `WOW` para detectar a rolagem e iniciar animações automaticamente.
   - Exemplo de uso:
     ```js
     new WOW().init();
     ```
   - Elementos receberam atributos como `data-wow-delay` e `data-wow-duration` para personalizar os tempos de animação.

## Hospedagem

A aplicação está hospedada na **Vercel**, garantindo alta disponibilidade e desempenho.

## Como Acessar

Você pode acessar a versão ao vivo do meu portfólio clicando no link abaixo:

🔗 [Portfólio - Vercel](https://marcosmontedev.vercel.app/)

## Repositório GitHub

Explore o código-fonte, faça sugestões ou contribua para o desenvolvimento do portfólio:

🔗 [Repositório GitHub](https://github.com/Marcos-Monte/marcos-monte-dev)

---

### Pronto para explorar meus projetos? 🚀

