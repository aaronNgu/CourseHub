const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
  _id: String,
  overall_rating: String,
  description: String
})

module.exports = mongoose.model('Course', courseSchema, 'Courses')
