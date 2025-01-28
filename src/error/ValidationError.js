const CustomError = require('./CustomError');

class ValidationError extends CustomError {
  constructor(message = 'Validation Error') {
    super(message, 400);
  }
}

module.exports = ValidationError;