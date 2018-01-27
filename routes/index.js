const routes = {
  register: (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/',
        handler: (request, h) => `i'm Hapi`
      }
    ])
  },
  name: 'routes-plugin'
}

module.exports = routes
