var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Course = require('../models/course')

/* GET Courses listing. */
router.get('/', function (req, res, next) {

  const pagenumber = typeof req.query.page === 'undefined' ? 0 : (req.query.page - 1 );

  res.setHeader('Content-Type', 'application/json');
  Course.find({},{}, {skip: 10 * pagenumber, limit:10})
      .populate('Course')
        .exec()
        .then(docs =>{
          Course.countDocuments()
            .then(count => {
              let pageCount = Math.floor(count/10) < 1 ? 1 : Math.floor(count/10)
              package = { 
                pageCount : pageCount,
                data: docs};
              res.status(200).json(package);
            })
            .catch(err => {
              res.status(500).json({error: err});
            })
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
          error: err});
        })
});

router.get('/:courseId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  console.log('inside get courseId')
  const id = req.params.courseId
  Course.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => console.log(err))
});

router.post('/', function(req, res, next) {
  const newCourse = new Course({
      _id: req.body._id,
overall_rating: req.body.overall_rating,
description: req.body.description,
num_reviews: req.body.num_reviews
  })
  newCourse.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
});

router.delete('/:courseId', function(req, res, next) {
  const courseId = req.params.courseId
  Course.deleteOne({'_id': courseId}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.send('deleted course with id :  ' + courseId);
            }})
});


module.exports = router;
