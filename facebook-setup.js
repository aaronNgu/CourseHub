const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
// require('dotenv').config();

const fbcallback = (token, tokenSecret, profile, done) => {
	return done(null, profile);
};

passport.use(new FacebookStrategy({
	clientID: process.env.FB_CLIENT,
	clientSecret: process.env.FB_SECRET,
<<<<<<< HEAD
	callbackURL: 'https://coursehububc.herokuapp.com/auth/facebook/redirect',
=======
	callbackURL: process.env.BASE_URL + '/auth/facebook/redirect',
>>>>>>> aaron_resolve_login
}, fbcallback));
