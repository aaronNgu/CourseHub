const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  _id: String,
  User_id: String,
  Rating: Number,
  Date: Date,
  Comments: String,
})

module.exports = mongoose.model('Review', reviewSchema, 'Reviews')
