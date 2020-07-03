const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')
const BullBoard = require('bull-board')
const QueueService = require('./api/services/QueueService')

dotenv.config()

BullBoard.setQueues(QueueService.queues.map(queue => queue.bull))

const usersRouter = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', usersRouter)
app.use('/queues', BullBoard.UI)

module.exports = app
