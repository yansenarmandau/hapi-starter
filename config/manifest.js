const ConfigServer = require('./server')

module.exports = {
  server: {
    port: ConfigServer.port,
    host: ConfigServer.host,
    routes: {
      cors: true
    }
  }
}
