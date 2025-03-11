const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");


  // Config
    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Body Parser
      app.use(bodyParser.urlencoded({extended: false}));
      app.use(bodyParser.json());
    // Conexão com o banco de dados MySql
    const sequelize = new Sequelize("teste", "root", "269824eam", {
      host: "localhost", 
      dialect: "mysql"
    });

  // Rotas
    app.get("/cad", (req, res) => {
      res.render('formulario');
    })

    app.post('/add', (req, res) => {
      res.send('Texto: ' + req.body.titulo + ' Conteúdo: ' + req.body.conteudo);
    })
    
  // Conexão com o banco de dados
  app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
});


