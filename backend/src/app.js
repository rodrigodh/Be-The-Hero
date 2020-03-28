const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);
app.use(errors());

module.exports = app

/**
 * Utilizamos o knex para gerenciar o SQL (sqlite tbm faz parte)
 * Driver: SELECET * FROM users
 * Query Builder: table('users').select('*').where()
 * BackendFuncionando
 */