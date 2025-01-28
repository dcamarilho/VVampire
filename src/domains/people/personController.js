const PersonModel = require('./PersonModel');
const PersonRoleModel = require('./PersonRoleModel');
const RoleModel = require('./RoleModel');

const personController = {
  async list(req, res) {
    try {
      const pessoas = await PersonModel.findAll();
      res.json({ success: true, data: pessoas });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const { nome } = req.body;
      const pessoa = await PersonModel.create(nome);
      res.json({ success: true, data: pessoa });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = personController;