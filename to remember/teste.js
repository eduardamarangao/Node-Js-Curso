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
