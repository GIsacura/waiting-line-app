const Joi = require('joi')

const id = Joi.string().max(8).min(6);
const name = Joi.string().min(2);

const createClientSchema = Joi.object({
  id: id.required(),
  name: name.required()
});


module.exports = { createClientSchema }
