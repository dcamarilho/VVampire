const express = require('express');
const router = express.Router();
const personController = require('./personController');

router.get('/', personController.list);
router.post('/', personController.create);

module.exports = router;