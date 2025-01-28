const express = require('express');
const router = express.Router();
const rfidController = require('./rfidController');

router.post('/tags', rfidController.createTag);

module.exports = router;