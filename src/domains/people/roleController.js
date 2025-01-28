const RoleModel = require('./RoleModel');

const roleController = {
  async list(req, res) {
    try {
      const roles = await RoleModel.findAll();
      res.json({ success: true, data: roles });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  async create(req, res) {
    try {
      const { nome } = req.body;
      const papel = await RoleModel.create(nome);
      res.json({ success: true, data: papel });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = roleController;