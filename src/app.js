const express = require('express');
const bodyParser = require('body-parser');
const { notFoundError, internalServerError } = require('./middlewares/error-middleware');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const plateRoute = require('./routes/plate-route');

app.use('/api/plates', plateRoute);
app.use(notFoundError);
app.use(internalServerError);

module.exports = app;
