const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  _id: String,
  displayName: String,
})

module.exports = mongoose.model('User', messageSchema, 'Users')
