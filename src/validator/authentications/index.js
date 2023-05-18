const {
  PostAuthenticationPayloadSchema,
  PutAuthenticationPayloadSchema,
  DeleteAuthenticationPayloadSchema,
} = require('./schema');
const AuthenticationError = require('../../exceptions/AuthenticationError');

const AuthenticationsValidator = {
  validatePostAuthenticationPayload: (payload) => {
    const { error } = PostAuthenticationPayloadSchema.validate(payload);
    if (error !== undefined) {
      throw new AuthenticationError(error.message);
    }
  },
  validatePutAuthenticationPayload: (payload) => {
    const { error } = PutAuthenticationPayloadSchema.validate(payload);
    if (error !== undefined) {
      throw new AuthenticationError(error.message);
    }
  },
  validateDeleteAuthenticationPayload: (payload) => {
    const { error } = DeleteAuthenticationPayloadSchema.validate(payload);
    if (error !== undefined) {
      throw new AuthenticationError(error.message);
    }
  },
};

module.exports = AuthenticationsValidator;
