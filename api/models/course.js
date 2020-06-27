const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  _id: String,
  overall_rating: String,
})

module.exports = mongoose.model('Course', messageSchema, 'Courses')
