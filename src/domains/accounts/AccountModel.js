const pool = require('../../config/database');
const schema = 'vvs';

const AccountModel = {
  async create(pessoaId) {
    const sql = `INSERT INTO ${schema}.contas (pessoa_id) VALUES ($1) RETURNING *;`;
    const { rows } = await pool.query(sql, [pessoaId]);
    return rows[0];
  },
  async findAll() {
    const sql = `SELECT * FROM ${schema}.contas;`;
    const { rows } = await pool.query(sql);
    return rows;
  }
};

module.exports = AccountModel;