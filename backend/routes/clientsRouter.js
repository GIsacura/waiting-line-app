const express = require('express');
const ClientsService = require('../services/clientService')
const validatorHandler = require('../middlewares/validatorHandler')
const { createClientSchema } = require('../schemas/clientsSchema')

const router = express.Router()
const service = new ClientsService()

router.get('/', async (req, res) =>{
  const clients = await service.find()
  res.json(clients)
})

router.post('/',
  validatorHandler(createClientSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newClient = await service.create(body)
    res.json(newClient)
  }
)

router.delete('/:id', async (req, res) => {
  const {id} = req.params
  const deleted = await service.delete(id)
  res.json(deleted)
})


module.exports = router