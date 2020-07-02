const NodeMailer = require('nodemailer')
const MailConfig = require('../../config/Mail')

const mail = NodeMailer.createTransport(MailConfig)

module.exports = {
  key: 'RegistrationMail',
  async handle ({ data }) {
    const { user } = data
    await mail.sendMail({
      from: 'Admin <admin@test.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Confirmação de cadastro',
      html: `Olá, ${user.name} seja bem-vindo(a) ao nosso sistema.`
    })
  }
}
