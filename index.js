const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi SRV');
});

app.get('/new', (req, res) => {
  res.send('Hola soy un nuevo ENDPOINT');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 100,
  });
});

app.listen(port, () => {
  console.log('Mi port ' + port);
});