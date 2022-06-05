const express = require('express');
const ClientsService = require('../services/clientService')
const validatorHandler = require('../middlewares/validatorHandler')
const { createClientSchema } = require('../schemas/clientsSchema')

const router = express.Router()
const service = new ClientsService()

//Route to get the list of clients
router.get('/', async (req, res) =>{
  // Conection to the service
  const clients = await service.find()
  res.json(clients)
})

// Route to add a client
router.post('/',
  validatorHandler(createClientSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    //conection to service and sending data from client
    const newClient = await service.create(body)
    res.json(newClient)
  }
)

// Route to delete a client
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  //conection to service and sending id from client
  const deleted = await service.delete(id)
  res.json(deleted)
})


module.exports = router