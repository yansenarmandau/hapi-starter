'use strict'

const Glue = require('glue')

const manifest = require('./config/manifest')

const startServer = async () => {
  try {
    const server = await Glue.compose(manifest, { relativeTo: __dirname })

    // routes
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => `i'm Hapi`
    })

    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

startServer()
