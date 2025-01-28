const OrderModel = require('./OrderModel');

const orderController = {
  async create(req, res) {
    try {
      const { mesa_id, cliente_id, itens } = req.body;
      const pedido = await OrderModel.create({ mesa_id, cliente_id, itens });
      res.json({ success: true, data: pedido });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};

module.exports = orderController;