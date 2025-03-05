var http = require('http');

http.createServer(function(req,res){
    res.end("oiii")   
}).listen(8081);

console.log('Servidor está rodando')