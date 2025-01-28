const pool = require('../../config/database');
const schema = 'vvs';

const RfidModel = {
  async createTag(tagCode, produtoId) {
    const sql = `INSERT INTO ${schema}.rfid_tags (tag_code, produto_id) VALUES ($1, $2) RETURNING *;`;
    const { rows } = await pool.query(sql, [tagCode, produtoId]);
    return rows[0];
  }
};

module.exports = RfidModel;