const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const routerV1 = express.Router();
  const routerV2 = express.Router();

  app.use('/api/v1', routerV1);
  routerV1.use('/products', productsRouter);
  routerV1.use('/users', usersRouter);

  app.use('/api/v2', routerV2);
  routerV2.use('/products', productsRouter);
  routerV2.use('/users', usersRouter);
}

module.exports = routerApi;
