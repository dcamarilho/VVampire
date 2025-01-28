const express = require('express');
const router = express.Router();
const roleController = require('./roleController');

router.get('/', roleController.list);
router.post('/', roleController.create);

module.exports = router;