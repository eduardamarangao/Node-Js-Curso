const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '269824eam', {
    host: "localhost", //rodando mysql no meu computador
    dialect: 'mysql' //tipo de banco de dados que quero me conectar
})




















/*
sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso.')
}).catch((erro) => {
    console.log('Erro ao conectar: ' + erro + '.')
})
*/