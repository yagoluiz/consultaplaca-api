'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const indexRoute = require('./routes/index-route');
const placaRoute = require('./routes/placa-route');

app.use('/', indexRoute);
app.use('/placas', placaRoute);

module.exports = app;