const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });
const User = require('./models/user');

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: process.env.BASE_URL + '/auth/google/redirect',
			userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
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
