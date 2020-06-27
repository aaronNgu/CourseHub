const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  _id: String,
  FirstName: String,
   versionKey: false
})

module.exports = mongoose.model('User', messageSchema, 'Users')
