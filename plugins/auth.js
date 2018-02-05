require('dotenv').config()

const SECRET_KEY = process.env.SECRET_KEY

const auth = {
  register: (server, options) => {
    server.auth.strategy('jwt-strategy', 'hapi-now-auth', {
      verifyJWT: true,
      keychain: [SECRET_KEY],
      validate: async (reques, token, h) => {
        const isValid = true
        const credentials = token.decodedJWT

        return { isValid, credentials }
      }
    })

    // all routes by default will be protected
    server.auth.default('jwt-strategy')
  },
  name: 'authentication-plugin'
}

module.exports = auth
