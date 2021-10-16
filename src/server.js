const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();
mongoose.connect('mongodb+srv://Algoroz:926803@cluster0.clzgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ 
 useNewUrlParser: true});

server.use(express.json());
server.use(routes);

server.listen(3333);