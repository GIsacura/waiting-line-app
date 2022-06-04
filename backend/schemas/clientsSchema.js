const Joi = require('joi')

const id = Joi.string().max(8);
const name = Joi.string().min(3);

const createClientSchema = Joi.object({
  id: id.required(),
  name: name.required()
});


module.exports = { createClientSchema }
