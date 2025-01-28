const express = require('express');
const router = express.Router();
const turnoController = require('./turnoController');

router.post('/', turnoController.create);

module.exports = router;