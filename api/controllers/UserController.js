const QueueService = require('../services/QueueService')

module.exports = {
  async store (request, response) {
    try {
      const user = request.body
      //Saves to the database
      await QueueService.add('RegistrationMail', { user })
      return response.status(200).send('Tarefa processada com sucesso.')
    } catch (error) {
      return response.status(500).send('Erro interno do servidor.')
    }
  }
}