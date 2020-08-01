const mongoose = require('mongoose')
const Int32 = require('mongoose-int32');

const courseSchema = mongoose.Schema({
  _id: String,
  overall_rating: String,
  description: String,
  num_reviews: Int32
})

courseSchema.index({ _id: 'text', overall_rating: 'text'});
module.exports = mongoose.model('Course', courseSchema, 'Courses')
