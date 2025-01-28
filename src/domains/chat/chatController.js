const ChatModel = require('./ChatModel');

const chatController = {
  async create(req, res) {
    try {
      const { autor, conteudo } = req.body;
      const mensagem = await ChatModel.enviarMensagem(autor, conteudo);
      res.json({ success: true, data: mensagem });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = chatController;