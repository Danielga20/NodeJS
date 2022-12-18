var http = require('http');
var path = require('path');
var fs = require('fs');

//en var base se pondria la ruta donde se encuentra nuestra carpeta recursos
//que contendra nuestra pagina web y las imagenes si quisieramos añadirle imagenes a nuestra pagina web

var base = 'C:/NodeJs/Gestiónderecursos/recursos';

http.createServer(function(req,res)
{pathname = base + req.url;
 console.log(pathname);
 fs.exists (pathname,function(exists){
 	if (exists) {
 		res.setHeader('Content-Type','text/html');
 		//200 status

 		//create and piper
	var file = fs.createReadStream(pathname);
 		file.on("open",function(){
 		file.pipe(res);});
 		file.on("error",function(err){
 			console.log(err);});
  	}
 	else{
 		res.writeHead(404);
 		res.write('Bad request 404\n');res.end();
 	}
 })
}).listen(8124);


console.log('Server running at 8124')