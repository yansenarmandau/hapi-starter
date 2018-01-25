require('dotenv').config()

module.exports = {
  host: process.env.NODE_HOST || '0.0.0.0',
  port: process.env.NODE_PORT || 3030
}
