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

router.get('/course/:courseId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Review.find({Course_id:req.params.courseId})
  .exec()
  .then(docs =>{
    console.log(docs);
    res.status(200).json(docs);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
    error: err});
  });
});

router.post('/', function(req, res, next) {
  if(req.user){
    const newReview = new Review({
        _id: mongoose.Types.ObjectId(),
        User_id: req.user.id,
        Course_id: req.body.Course_id,
        Rating: req.body.Rating,
        Comments:req.body.Comments
    });

    newReview.save()
    .then(result => {res.status(200).json(result);})
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Server error. Unable to add review'
      })
    });

  } else {
    res.status(401).json({message: 'Unauthorized user'});
  }
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
