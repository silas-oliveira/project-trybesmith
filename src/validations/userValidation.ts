import Joi from '@hapi/joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': 'Username is required',
    'string.base': 'Username must be a string',
    'string.min': 'Username must be longer than 2 characters',
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': 'Classe is required',
    'string.base': 'Classe must be a string',
    'string.min': 'Classe must be longer than 2 characters',
  }),
  level: Joi.number().strict(true).min(1).required()
    .messages({
      'any.required': 'Level is required',
      'number.base': 'Level must be a number',
      'number.min': 'Level must be greater than 0',
    }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than 7 characters',
  }),
});

export function getStatusUser(error: string) {
  console.log('getstatus', error);
  let defaultState = 422;
  switch (error) {
    case 'Username is required':
      defaultState = 400;
      break;
    case 'Classe is required':
      defaultState = 400;
      break;
    case 'Level is required':
      defaultState = 400;
      break;
    case 'Password is required':
      defaultState = 400;
      break;
    default:
  }
  return defaultState;
}
