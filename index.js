const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function (req, res) {
  res.sendFile(__dirname + "/html/blog.html");
});

app.get("/ola/:cargo/:nome/:cor", function (req, res) {
  res.send(
    "Ola, " +
      req.params.nome +
      " seja bem-vindo(a)! Você é um(a) " +
      req.params.cargo +
      " e sua cor favorita é " +
      req.params.cor
  );
});

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
});
