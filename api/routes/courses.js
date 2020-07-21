var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const Course = require('../models/course')


router.get('/:courseId', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    console.log('inside get courseId')
    const id = req.params.courseId;
    Course.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => console.log(err))
});

/* GET Courses listing. */
router.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    Course.find()
        .populate('Course')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
});

router.post('/', function (req, res, next) {
    const newCourse = new Course({
        _id: req.body._id,
        overall_rating: req.body.overall_rating,
        description: req.body.description
    })
    newCourse.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
});

router.delete('/', function (req, res, next) {
    const id = req.body.courseId;
    console.log("trying to delete " + id);
    Course.deleteOne({'_id': id}, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.send('Deleted course with id : ' + id);
        }
    })
});


module.exports = router;
