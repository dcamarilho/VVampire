const request = require('supertest');
const app = require('../src/app');

describe('People API', () => {
  it('deve criar uma pessoa', async () => {
    const res = await request(app)
      .post('/pessoas')
      .send({ nome: 'Pessoa de Teste' });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.nome).toBe('Pessoa de Teste');
  });

  it('deve listar todas as pessoas', async () => {
    const res = await request(app).get('/pessoas');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});