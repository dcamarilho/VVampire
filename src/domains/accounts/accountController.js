const AccountModel = require('./AccountModel');

const accountController = {
  async list(req, res) {
    try {
      const contas = await AccountModel.findAll();
      res.json({ success: true, data: contas });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const { pessoa_id } = req.body;
      const conta = await AccountModel.create(pessoa_id);
      res.json({ success: true, data: conta });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = accountController;