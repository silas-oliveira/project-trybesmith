import Joi from '@hapi/joi';

const INVALID_NAME = 'Name must be longer than 2 characters';
const INVALID_AMOUNT = 'Amount must be longer than 2 characters';

export const productsSchema = Joi.object({
  name: Joi.string().min(3).required()
    .messages({
      'any.required': 'Name is required',
      'string.base': 'Name must be a string',
      'string.min': INVALID_NAME,
    }),
  amount: Joi.string().min(3).required()
    .messages({
      'any.required': 'Amount is required',
      'string.base': 'Amount must be a string',
      'string.min': INVALID_AMOUNT,
    }),
});

export function getStatusProducts(error: string) {
  let defaultState = 422;
  switch (error) {
    case 'Amount is required':
      defaultState = 400;
      break;   
    case 'Name is required':
      defaultState = 400;
      break;
    default:
  }
  return defaultState;
}
