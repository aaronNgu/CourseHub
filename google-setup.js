const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "/auth/google/redirect",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
async (token, tokenSecret, profile, done) => {
      return done(null, profile);
    }
  )
);
