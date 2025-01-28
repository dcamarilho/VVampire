const TokenService = require('./tokenService');
const ValidationError = require('../../error/ValidationError');

function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header) {
      throw new ValidationError('Cabeçalho de autorização ausente');
    }
    const [bearer, token] = header.split(' ');
    if (bearer !== 'Bearer') {
      throw new ValidationError('Formato de autenticação inválido');
    }
    const decoded = TokenService.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { authMiddleware };