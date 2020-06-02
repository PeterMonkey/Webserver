
const http = require('http');


http.createServer( (req, res) =>{ //Crea el servidor
      res.writeHead(200, { 'Content-Type': 'application/json' });
         
         let salida = {
             nombre: 'Pedro',
             edad: 24,
             url: req.url
         }

        //res.write('Hola Mundo');
          res.write( JSON.stringify( salida ) );
          res.end(); //final de la respuesta

    })
    .listen(8080); //Escuchando al puerto 8080

console.log('Escuchando al puerto 8080');




