const pool = require('../../config/database');
const schema = 'vvs';

const VoxModel = {
  async registrarComando(comando, resposta) {
    const sql = `INSERT INTO ${schema}.vox_logs (comando, resposta) VALUES ($1, $2) RETURNING *;`;
    const { rows } = await pool.query(sql, [comando, resposta]);
    return rows[0];
  }
};

module.exports = VoxModel;