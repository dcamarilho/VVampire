const VoxModel = require('./VoxModel');

const voxController = {
  async processCommand(req, res) {
    try {
      const { comando } = req.body;
      const resposta = 'Resposta para o comando: ' + comando;
      const log = await VoxModel.registrarComando(comando, resposta);
      res.json({ success: true, data: log });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = voxController;