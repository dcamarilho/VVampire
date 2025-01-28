const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'DEV_SECRET';

const TokenService = {
  generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1d' });
  },

  verifyToken(token) {
    return jwt.verify(token, secret);
  }
};

module.exports = TokenService;