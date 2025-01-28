const pool = require('../../config/database');
const schema = 'vvs';

const OrderModel = {
  async create({ mesa_id, cliente_id, itens }) {
    const sql = `INSERT INTO ${schema}.pedidos (mesa_id, cliente_id) VALUES ($1, $2) RETURNING *;`;
    const { rows } = await pool.query(sql, [mesa_id, cliente_id]);
    return rows[0];
  }
};

module.exports = OrderModel;