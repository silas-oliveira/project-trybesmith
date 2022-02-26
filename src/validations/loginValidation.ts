import Joi from '@hapi/joi';

const INVALID = 'Username or password invalid';

export const loginSchema = Joi.object({
  username: Joi.string().min(3).max(8).required()
    .messages({
      'any.required': 'Username is required',
      'string.base': 'Username must be a string',
      'string.min': INVALID,
      'string.max': INVALID,
    }),
  password: Joi.string().min(8).max(14).required()
    .messages({
      'any.required': 'Password is required',
      'string.base': 'Password must be a string',
      'string.min': INVALID,
      'string.max': INVALID,
    }),
});

export function getStatusLogin(error: string) {
  let defaultState = 400;
  switch (error) {
    case INVALID:
      defaultState = 401;
      break;
    default:
  }
  return defaultState;
}
