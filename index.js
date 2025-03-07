const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");


  // Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize("teste", "root", "269824eam", {
      host: "localhost", 
      dialect: "mysql"
    });

  // Rotas
    app.get("/cad", (req, res) => {
      res.send('<h1>Rota de cadastro de posts</h1>');
    })

  // Conexão com o banco de dados
  app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
});
