const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");
const { ConnectionTimedOutError, where } = require("sequelize");

// Config
// Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas

  app.get("/", (req, res) => {
    Post.findAll({ order: [["id", "DESC"]] }).then((posts) => {
      console.log(posts);
      res.render("home", { posts: posts });
    });
  });

  app.get("/cad", (req, res) => {
    res.render("formulario");
  });

  app.post("/add", (req, res) => {
    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    }).then(() => {
        res.redirect("/");
      }).catch((erro) => {
        res.send("Erro ao criar o post: " + erro);
      });
  });

  app.get("/deletar/:id", (req, res) => {
    Post.destroy({ where: { id: req.params.id } }).then(() => {
        res.render("postagem");
      }).catch((erro) => {
        res.send("Essa postagem não existe " + erro);
      });
  });

  // Conexão com o banco de dados
  app.listen(8081, function () {
    console.log("Servidor rodando na url http://localhost:8081");
  });
