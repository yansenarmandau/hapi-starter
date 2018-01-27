const ConfigServer = require('./server')
const routes = require('./../routes')

module.exports = {
  server: {
    port: ConfigServer.port,
    host: ConfigServer.host,
    routes: {
      cors: true
    }
  },
  register: {
    plugins: [
      { plugin: routes }
    ]
  }
}
