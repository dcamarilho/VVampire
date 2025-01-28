const pool = require('../../config/database');
const schema = 'vvs';

const TurnoModel = {
  async abrirTurno(responsavel) {
    const sql = `INSERT INTO ${schema}.turnos (responsavel, status) VALUES ($1, 'aberto') RETURNING *;`;
    const { rows } = await pool.query(sql, [responsavel]);
    return rows[0];
  }
};

module.exports = TurnoModel;