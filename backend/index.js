'use strict'

const express = require('express')
const { USERS } = require('./seeds/users')
const { PRODUCTS } = require('./seeds/products')

function mapearLista (v) {
  return { id: v.id, nombre: v.nombre };
}

const topMalos = PRODUCTS.sort((a, b) => { return (a.caloriasTotales - b.caloriasTotales) }).slice(0, 10).map(mapearLista);
const topBuenos = PRODUCTS.sort((a, b) => { return (b.caloriasTotales - a.caloriasTotales) }).slice(0, 10).map(mapearLista);

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
  res.send(PRODUCTS.sort((a, b) => { return (a.id - b.id) }).map(mapearLista))
});

app.get('/producto/detalle/:id', function (req, res) {
  const id = parseInt(req.params.id);
  const producto = PRODUCTS.find((p) => {
    return p.id === id;
  });
  if (typeof producto === 'undefined') {
    return res.status(404).send(producto)
  }
  res.send(producto);
});

app.get('/producto/lista/top-bueno', function (req, res) {
  res.send(topBuenos);
});

app.get('/producto/lista/top-malo', function (req, res) {
  res.send(topMalos);
});

app.listen(3000)