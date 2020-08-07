var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Review = require('../models/review');
const Course = require('../models/course');

/* GET Reviews listing. */
router.get('/', function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	Review.find()
		.populate('Review')
		.exec()
		.then((docs) => {
			res.status(200).json(docs);
		})
		.catch((err) => {
			console.log('Failed to get reviews listing.');
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

router.get('/:reviewId', function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	const id = req.params.reviewId;
	Review.findById(id)
		.exec()
		.then((doc) => {
			res.status(200).json(doc);
		})
		.catch((err) => {
			console.log('Fail to retrieve specific review');
			console.log(err);
		});
});

router.get('/course/:courseId', function (req, res, next) {
	res.setHeader('Content-Type', 'application/json');
	Review.find({ Course_id: req.params.courseId })
		.exec()
		.then((docs) => {
			res.status(200).json(docs);
		})
		.catch((err) => {
			console.log('Failed to retrieve reviews for course.');
			console.log(err);
			res.status(500).json({
				error: err,
			});
		});
});

const calculateNewRating = (numOfRatings, overallRating, newRating) => {
	if (overallRating === '-' || overallRating === '0') {
		return newRating;
	}
	let total = parseInt(overallRating) * numOfRatings;
	total += parseInt(newRating);
	numOfRatings += 1;
	let average = total / numOfRatings++;
	average = Math.round(average);
	return average.toString();
};

const updateCourseInformation = (courseId, newRating) => {
	Course.findById(courseId).then((doc) => {
		const newAverage = calculateNewRating(
			doc['num_reviews'],
			doc['overall_rating'],
			newRating
		);
		Course.findByIdAndUpdate(
			courseId,
			{ $inc: { num_reviews: 1 }, overall_rating: newAverage },
			{ new: 1 }
		)
			.then((updatedCourse) => {})
			.catch((err) => {
				console.log('Failed to update Course Info.');
				console.log(err);
			});
	});
};

router.post('/', function (req, res, next) {
	if (req.user) {
		const newReview = new Review({
			_id: mongoose.Types.ObjectId(),
			User_id: req.user.id,
			Course_id: req.body.Course_id,
			Rating: req.body.Rating,
			Comments: req.body.Comments,
		});

		newReview
			.save()
			.then((result) => {
				updateCourseInformation(req.body.Course_id, req.body.Rating);
				res.status(200).json(result);
			})
			.catch((err) => {
				console.log('Fail to add review');
				console.log(err);
				res.status(500).json({
					message: 'Server error. Unable to add review',
				});
			});
	} else {
		res.status(401).json({ message: 'Unauthorized user' });
	}
});

router.delete('/:reviewId', function (req, res, next) {
	const reviewId = req.params.reviewId;
	Review.deleteOne({ _id: reviewId }, function (err) {
		if (err) {
			console.log('Fail to delete review');
			console.log(err);
		} else {
			res.send('deleted review with id :  ' + reviewId);
		}
	});
});

module.exports = router;
