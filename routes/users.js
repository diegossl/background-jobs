const express = require('express')
const router = express.Router()
const UserController = require('../api/controllers/UserController')

router.post('/register', UserController.store)

module.exports = router
