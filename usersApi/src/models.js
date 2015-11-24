const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://localhost/users')

const User = db.model('User', {
  name: String,
  email: String
})

module.exports = {
  User
}
