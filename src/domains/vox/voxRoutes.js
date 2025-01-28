const express = require('express');
const router = express.Router();
const voxController = require('./voxController');

router.post('/', voxController.processCommand);

module.exports = router;