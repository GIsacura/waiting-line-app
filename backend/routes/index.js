const express = require('express')
const clientsRouter = require('./clientsRouter')

function routerApi (app){
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/clients', clientsRouter)
}

module.exports = routerApi;