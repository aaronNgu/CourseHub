var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Review = require('../models/review')

/* GET users listing. */
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
  console.log('inside get reviewId')
  const id = req.params.userId
  REviews.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => console.log(err))
});

router.post('/', function(req, res, next) {
  const newReview = new Review({
      content: req.body.content,
      _id: req.body._id
  })
  newReview.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
});

module.exports = router;
