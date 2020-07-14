const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

const fbcallback = (accessToken, refreshToken, profile, cb) => {
	return cb(null, profile);
};

passport.use(new FacebookStrategy({
	clientID: process.env.FB_CLIENT,
	clientSecret: process.env.FB_SECRET,
	callbackURL: '/auth/facebook/redirect',
}, fbcallback));
