const pool = require('../../config/database');
const schema = 'vvs';

const PersonRoleModel = {
  async addRoleToPerson(pessoaId, papelId) {
    const sql = `INSERT INTO ${schema}.pessoas_papeis (pessoa_id, papel_id) VALUES ($1, $2) RETURNING pessoa_id, papel_id;`;
    const { rows } = await pool.query(sql, [pessoaId, papelId]);
    return rows[0];
  }
};

module.exports = PersonRoleModel;