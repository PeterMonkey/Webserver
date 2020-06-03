const express = require('express')
const app = express();

app.use( express.static( __dirname + '/public' ) ); //Archivos de dominio publico
 
// app.get('/', (req, res) => {
// //   res.send('Hello World')
// let salida = {
//              nombre: 'Pedro',
//              edad: 24,
//              url: req.url
//          };

//       res.send(salida);

// });

app.get('/data', (req, res) => {
  res.send('Hello World')


      res.send(salida);

});
 
app.listen(3000, () => {
   console.log('Escuchando peticiones en el puerto 3000');
});