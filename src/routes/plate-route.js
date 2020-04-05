const express = require('express');

const router = express.Router();
const controller = require('../controllers/plate-controller');

router.get('/:plate', controller.get);

module.exports = router;
