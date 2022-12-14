# PROJETO API REST

[![GitHub](https://img.shields.io/github/license/paucinha/projeto-api)](https://github.com/Paucinha/projeto-api/blob/master/LICENSE)

# Sobre o projeto

Projeto Integrador desenvolvido durante o curso de Programação Web Full Stack, fornecido pela [Campinho Digital](https://www.campinhodigital.org/).

Criação de um  API REST usando Express para criar um CRUD com Node.js. Para a solução, foi desenvolvido uma API que realize um CRUD de um banco de dados para cadastro de dados pessoais para auxiliar a Campinho Digital.

![API](https://github.com/Paucinha/assets/blob/master/globalArchitecture.png?raw=true)

O projeto foi desenvolvido em três sprints:

1 - Decisão do tema através do quadro Kanban;
2 - Desenvolvimento de uma API por meio do BackEnd;
3 - Testes unitários necessários.

# Tecnologias utilizadas

## BackEnd
- TypeScript
- Node.js
- npm
- Express
- MongoDB
- Visual Studio Code
- Insomnia

## FrontEnd
- Angular / HTML / CSS / JS / TypeScript

# Como foi executado o projeto

## BackEnd
Pré-requisitos: Node.js, Git Bash

```bash
# entrar na pasta do projeto BackEnd
Visual Studio Code

# iniciar o projeto
git init

# iniciar o npm
npm init

# instalar o TypeScript
npm install -D typescript

 # instalar o ts-node-dev
npm install -D ts-node-dev
(Responsável por converter TypeScript em JavaScriopt, pois por padrão o Node.js só entende JavaScript).

# criar um servidor HTTP(Express)
npm install express

Seguir para o código.

# iniciar o Servidor
tsc --init

Criar um Script dentro da pasta package.json = "dev": "tsnd --transpile-only --respawn --ignore-watch node_modules src/server.ts", (esse comando esta na documentação 
TS Node).

# executar o Servidor
npm run dev

# configurar a conexão com o Banco de Dados
npm install mongoose
```

## FrontEnd
Pré-requisitos: npm / Angular CLI

```bash
# entrar na pasta do projeto frontEnd
Visual Studio Code

# instalar Angular CLI
npm install -g @angular/cli

# criar um novo projeto
ng new nome-do-projeto

# entrar dentro da pasta onde foi criado o projeto
cd nome-da-pasta

# startar o projeto
ng serve nome-do-projeto

# executar o projeto/aplicativo
ng serve 
```

# Autora

Paucia Lira Nunes Lisboa

https://www.linkedin.com/in/paucia-lisboa
