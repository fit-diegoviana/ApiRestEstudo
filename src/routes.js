const express = require('express');

const routes = express();

routes.get('/', (req, res) => {
  return res.json({message: `Hellooooo ${req.query.name}`,
teste: `testandoooo aqui`,
teste2: `sera que deu certo?`,
teste3: `testeeeee`
});

});

module.exports = routes;