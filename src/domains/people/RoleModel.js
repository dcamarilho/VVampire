const pool = require('../../config/database');
const schema = 'vvs';

const RoleModel = {
  async create(nome) {
    const sql = `INSERT INTO ${schema}.papeis (nome) VALUES ($1) RETURNING *;`;
    const { rows } = await pool.query(sql, [nome]);
    return rows[0];
  },
  async findAll() {
    const sql = `SELECT * FROM ${schema}.papeis ORDER BY id ASC;`;
    const { rows } = await pool.query(sql);
    return rows;
  }
};

module.exports = RoleModel;