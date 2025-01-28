const pool = require('../../config/database');
const bcrypt = require('bcrypt');
const schema = 'vvs';

const PersonModel = {
  async createUser(nome, password) {
    const hash = await bcrypt.hash(password, 10);
    const sql = `INSERT INTO ${schema}.pessoas (nome, password_hash) VALUES ($1, $2) RETURNING *;`;
    const { rows } = await pool.query(sql, [nome, hash]);
    return rows[0];
  },
  async findByName(nome) {
    const sql = `SELECT * FROM ${schema}.pessoas WHERE nome = $1;`;
    const { rows } = await pool.query(sql, [nome]);
    return rows[0] || null;
  }
};

module.exports = PersonModel;