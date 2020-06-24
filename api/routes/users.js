var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  User.find()
      .populate('User')
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

router.get('/:userId', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  console.log('inside get userId')
  const id = req.params.userId
  User.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => console.log(err))
});

router.post('/', function(req, res, next) {
  const newUser = new User({
      content: req.body.content,
      _id: req.body._id
  })
  newUser.save().then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
});

module.exports = router;
