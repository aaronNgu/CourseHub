const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
  _id: String,
  User_id: String,
  Rating: Number,
  Date: {
    type: Date, 
    default: Date.now,
  },
  Comments: String,
})

module.exports = mongoose.model('Review', reviewSchema, 'Reviews')
