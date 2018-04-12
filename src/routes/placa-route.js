'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/placa-controller');

router.get('/:numero', controller.get);

module.exports = router;