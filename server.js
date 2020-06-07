const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

app.use( express.static( __dirname + '/public' ) ); //Archivos de dominio publico

// Express HBS engine
hbs.registerPartials( __dirname + '/views/parcials' );
app.set('view engine', 'hbs');



 
app.get('/', (req, res) => {

      res.render('home', {
         nombre: 'Pedro'
      });

});

app.get('/about', (req, res) => {

       res.render('about');
});

// app.get('/data', (req, res) => {
//   res.send('Hello World')


//       res.send(salida);

// });
 
app.listen(3000, () => {
   console.log('Escuchando peticiones en el puerto 3000');
});