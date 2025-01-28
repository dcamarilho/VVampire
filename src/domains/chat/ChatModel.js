const pool = require('../../config/database');
const schema = 'vvs';

const ChatModel = {
  async enviarMensagem(autor, conteudo) {
    const sql = `INSERT INTO ${schema}.chat_mensagens (autor, conteudo) VALUES ($1, $2) RETURNING *;`;
    const { rows } = await pool.query(sql, [autor, conteudo]);
    return rows[0];
  }
};

module.exports = ChatModel;