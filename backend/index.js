const express = require('express');
const cors = require('cors')
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErroHandler } = require('./middlewares/errorHandler')
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())

const whiteList = [
  'https://waiting-line-app.vercel.app/'
]

// const options = {
//   origin: (origin, callback) => {
//     if(whiteList.includes(origin) || !origin){
//       callback(null, true)
//     }else{
//       callback(new Error('no permitido'))
//     }
//   }
// }
// app.use(cors(options))
app.use(cors())

routerApi(app)
app.use(logErrors)
app.use(boomErroHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port ' + port)
})
