const express = require('express')
const clientsRouter = require('./clientsRouter')

function routerApi (app){
  const router = express.Router()
  app.use('/api/v1', router) // Aca creamos un router que utilizaremos justo debajo para que podamos dividir la api en versiones pero de esta manera si queremos cambiar a algun endpoint a alguna version mas nueva o simplemente queremos probar cambios en algun endpoint sin afectar a los clientes que estan conectados a una verison anterior, de esta manera solo tenemos que cambiar la palabra router por el correspondiente a la version que queremos utilizar
  router.use('/clients', clientsRouter)
}

module.exports = routerApi;