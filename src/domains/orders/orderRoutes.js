const express = require('express');
const router = express.Router();
const orderController = require('./orderController');

router.post('/', orderController.create);

module.exports = router;