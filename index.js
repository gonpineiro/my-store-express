const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi SRV');
});

app.get('/new', (req, res) => {
  res.send('Hola soy un nuevo ENDPOINT');
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
