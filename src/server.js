const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.json({message: `Hellooooo ${req.query.name}`,
teste: `testandoooo aqui`,
teste2: `sera que deu certo?`,
teste3: `show de bolas`
});

});

server.listen(3333);