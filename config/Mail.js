const Env = require('./Env')

module.exports = {
  host: Env.get('MAIL_HOST'),
  port: Env.get('MAIL_PORT'),
  auth: {
    user: Env.get('MAIL_USER'),
    pass: Env.get('MAIL_PASSWORD')
  }
}