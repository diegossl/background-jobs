const Env = require('./Env')

module.exports = {
  host: Env.get('REDIS_HOST'),
  port: Env.get('REDIS_PORT'),
}