const express = require('express');
const router = express.Router();

// Definição de rotas principais
router.get('/', (req, res) => {
  res.send('VVSistema - Tudo separadinho por pastas de domínio!');
});

module.exports = router;