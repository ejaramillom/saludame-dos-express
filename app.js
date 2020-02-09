const express = require("express");
const app = express();

app.get('/makers/:nombre', (req, res) => {
  function capitalize(s){
      return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
  };
  let name = req.params.nombre;
  res.send("<h1>Hola " + capitalize(name) + "!</h1>");
});

app.get('/', (req, res) => {
  res.send(`<h1>Hola desconocido!</h1>`);
});

app.get('/makers', (req, res) => {
  res.send(`<h1>Hola desconocido!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
