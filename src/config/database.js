require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.PG_URI
});

pool.on('connect', () => {
  console.log('Conectado ao PostgreSQL!');
});

pool.on('error', (err) => {
  console.error('Erro no Pool PG:', err);
});

module.exports = pool;