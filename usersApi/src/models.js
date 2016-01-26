'use strict'

const mongoose = require('mongoose')
const config = require('../config')

const db = mongoose.createConnection(config.mongodbUri)

const User = db.model('User', {
  name: String,
  email: String
})

module.exports = {
  User
}
