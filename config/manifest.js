const Good = require('good')
const ConfigServer = require('./server')
const routes = require('./../routes')

const ENV = ConfigServer['env']

const goodOptions = {
  includes: {
    request: ['payload'],
    response: ['payload']
  },
  reporters: {
    consoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        error: '*',
        response: '*',
        request: '*'
      }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
}

let plugins = {
  server: {
    port: ConfigServer.port,
    host: ConfigServer.host,
    routes: {
      cors: true
    }
  },
  register: {
    plugins: [
      { plugin: routes },
      { plugin: Good, options: goodOptions }
    ]
  }
}

if (ENV.toLowerCase() === 'development') {
  plugins['register']['plugins'].push({ plugin: require('blipp') })
}

module.exports = plugins
