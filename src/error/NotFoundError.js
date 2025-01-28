const CustomError = require('./CustomError');

class NotFoundError extends CustomError {
  constructor(message = 'Resource Not Found') {
    super(message, 404);
  }
}

module.exports = NotFoundError;