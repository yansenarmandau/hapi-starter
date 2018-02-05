const routes = {
  register: (server, options) => {
    server.route([
      {
        method: 'GET',
        path: '/',
        config: {
          handler: (request, h) => `i'm Hapi`,
          description: 'Root API',
          notes: 'Return API status',
          tags: ['api'],
          auth: false
        }
      }
    ])
  },
  name: 'routes-plugin'
}

module.exports = routes
