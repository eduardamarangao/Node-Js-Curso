const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");


  // Config
    // Template Engine
    app.engine("handlebars", handlebars({ defaultLayout: "main" })); //definindo o layout padrão
    app.set("view engine", "handlebars");
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize("teste", "root", "269824eam", {
      host: "localhost", 
      dialect: "mysql"
    });

  // Conexão com o banco de dados
  app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
});
