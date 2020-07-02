const dotenv = require('dotenv')
dotenv.config()

const QueueService = require('./services/QueueService')

QueueService.process()
