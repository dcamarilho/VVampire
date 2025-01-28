const request = require('supertest');
const app = require('../src/app');

describe('Auth API', () => {
  let token = '';

  it('deve registrar um novo usuário', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({ nome: 'UsuarioTeste', password: 'senha123' });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    token = res.body.token;
  });

  it('deve fazer login com o usuário registrado', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ nome: 'UsuarioTeste', password: 'senha123' });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
  });

  it('deve acessar rota protegida com token válido', async () => {
    const res = await request(app)
      .get('/auth/profile')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.nome).toBe('UsuarioTeste');
  });
});