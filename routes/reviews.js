var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Review = require('../models/review')

/* GET Reviews listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Review.find()
      .populate('Review')
        .exec()
        .then(docs =>{
          console.log(docs);
          res.status(200).json(docs);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
          error: err});
        })
});

router.get('/:reviewId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  const id = req.params.reviewId
  Review.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => console.log(err))
});

router.post('/', function(req, res, next) {
  const newReview = new Review({
      _id: req.body._id,
      User_id: req.body.User_id,
      Course_id: req.body.Course_id,
      Rating: req.body.Rating,
      Date: req.body.Date,
      Comments:req.body.Comments
  })
  newReview.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
});

router.delete('/:reviewId', function(req, res, next) {
  const reviewId = req.params.reviewId
  Review.deleteOne({'_id': reviewId}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.send('deleted review with id :  ' + reviewId);
            }})
});


module.exports = router;
