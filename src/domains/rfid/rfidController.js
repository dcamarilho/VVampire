const RfidModel = require('./RfidModel');

const rfidController = {
  async createTag(req, res) {
    try {
      const { tagCode, produtoId } = req.body;
      const tag = await RfidModel.createTag(tagCode, produtoId);
      res.json({ success: true, data: tag });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = rfidController;