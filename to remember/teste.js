const Sequelize = require("sequelize");
const sequelize = new Sequelize("teste", "root", "269824eam", {
  host: "localhost", //rodando mysql no meu computador
  dialect: "mysql", //tipo de banco de dados que quero me conectar
});

const Postagem = sequelize.define("postagens", {
  titulo: {
    type: Sequelize.STRING,
  },
  conteudo: {
    type: Sequelize.TEXT,
  },
});

Postagem.create({
  titulo: "Um título qualquer",
  conteudo: "Conteúdo qualquer",
});

const Usuario = sequelize.define("usuarios", {
  nome: {
    type: Sequelize.STRING,
  },
  sobrenome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
});

Usuario.create({
  nome: "eduarda",
  sobrenome: "amorim",
  idade: 14,
  email: "blabla@email.com",
});

//Post.findAll({order: [['id', 'DESC']]}).then((posts) => { //desc é decrescente, asc é crescente


/*
{{#each posts}}
    <small>{{createdAt}}</small> //exibe a hora de criaçao da postagem
    <h1>{{titulo}}</h1>
    <p>{{conteudo}}</p>
    <hr>
{{/each}} 
*/ //para cada postagem, ele vai exibir o título e o conteúdo

//Post.findOne({where: {id: 1}}).then((post) => { //findOne é para encontrar um post específico