const express = require("express");
const app = express();
const capitalize = require("./capitalize.js");

app.get('/makers/:nombre', (req, res) => {
  // require('./capitalize').capitalize;
  let name = req.params.nombre;
  res.send("<h1>Hola " + capitalize.capitalize(name) + "!</h1>");
});

app.get('/', (req, res) => {
  res.send(`<h1>Hola desconocido!</h1>`);
});

app.get('/makers', (req, res) => {
  res.send(`<h1>Hola desconocido!</h1>`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
