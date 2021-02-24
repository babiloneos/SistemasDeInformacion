var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    console.log(request.url);
    console.log(request)
    response.writeHead(200,"Content-Type:text/html")
    response.write("<style> *{background-color: black; color: white;} </style>")
    response.write("<h1>Hello there</h1>");
    response.end();
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
