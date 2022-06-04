const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err) // Aca enviamos por parametro del next el error porque este es un middleware de error, si no fuera de error entonces no se mandaria por parametro
}

const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

const boomErroHandler = (err, req, res, next) => {
  // Cuando manejamos un error con boom, ese error tiene una propiedad llamada isBoom que utilizaremos para identificar si el error que estamos capturando es con boom o no
  if(err.isBoom){
    const { output } = err // La pripiedad output es la que tiene la informacion del error con boom
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

module.exports = { logErrors, errorHandler, boomErroHandler }
