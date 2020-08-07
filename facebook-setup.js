const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });
const User = require('./models/user');

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FB_CLIENT,
			clientSecret: process.env.FB_SECRET,
			callbackURL: process.env.BASE_URL + '/auth/facebook/redirect',
		},
		async (token, tokenSecret, profile, done) => {
			// find current user in UserModel
			const currentUser = await User.findOne({
				_id: profile.id,
			});
			// create new user if the database doesn't have this user
			if (!currentUser) {
				const newUser = await new User({
					_id: profile.id,
					displayName: profile.displayName,
					role: 'Customer',
				}).save();
				if (newUser) {
					done(null, newUser);
				}
			}
			done(null, currentUser);
		}
	)
);
