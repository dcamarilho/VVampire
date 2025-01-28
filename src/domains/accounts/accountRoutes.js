const express = require('express');
const router = express.Router();
const accountController = require('./accountController');

router.get('/', accountController.list);
router.post('/', accountController.create);

module.exports = router;