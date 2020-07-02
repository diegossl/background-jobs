const express = require('express')
const logger = require('morgan')
const dotenv = require('dotenv')

dotenv.config()

const usersRouter = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', usersRouter)

module.exports = app
