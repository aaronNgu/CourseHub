var express = require('express');
var router = express.Router();

const passport = require('passport');
const app = require('../app');
const CLIENT_BASE_URL = 'http://localhost:3000';
const HOMEPAGE_URL = CLIENT_BASE_URL + '/homepage';
const LOGIN_URL = CLIENT_BASE_URL + '/login';

router.get('/', passport.authenticate('facebook', {scope: ['email']}));

router.get('/redirect', 
    passport.authenticate('facebook', {successRedirect: HOMEPAGE_URL, failureRedirect: LOGIN_URL}));

router.get('/logout', function(req, res) {
    req.logout();
    res.json({
        isAuthenticated: false, 
        message: "successfully logged out"
    })
});
    
const authCheck = (req, res, next) => {
	if (!req.user) {
		res.status(200).json({
			isAuthenticated: false, 
			message: "user not authenticated"
		});
	} else {
		next();
	}
};

router.get('/checkStatus', authCheck, (req, res) => {
    res.status(200).json({
        isAuthenticated: true,
        message: "user authenticated", 
        user: req.user, 
    });
})

module.exports = router;
