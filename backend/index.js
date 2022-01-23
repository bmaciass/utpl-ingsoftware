'use strict'

const express = require('express')
const { USERS } = require('./seeds/users')
const { PRODUCTS } = require('./seeds/products')

const app = express()
app.use(express.json())

app.get('/health', function (req, res) {
  res.send('hola mundo');
})

app.post('/login', function (req, res) {
  const { body } = req
  const { usuario, clave } = body.data;
  const found = USERS.find((u) => {
    return u.user === usuario && u.password === clave;
  });
  if (!found) {
    return res.status(401).send({ error: 'Usuario o clave incorrecta' });
  }
  res.status(200).send()
});

app.get('/producto/lista', function (req, res) {
  res.send(PRODUCTS)
});

app.get('/producto/detalle/:id', function (req, res) {
  const producto = PRODUCTS.find((p) => {
    return p.id === req.params.id;
  });
  if (typeof producto === 'undefined') {
    return res.status(404).send()
  }
  res.send(producto);
});

app.listen(3000)