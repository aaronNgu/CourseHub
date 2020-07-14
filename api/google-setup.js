const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: "798089317931-hca1vqdbgf41bcu3vnbsg4c7f1h58gdu.apps.googleusercontent.com",
    clientSecret: "jQCNTrDmsy9sTwy8ANjtxCwB",
    callbackURL: "/auth/google/redirect",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
async (token, tokenSecret, profile, done) => {
      return done(null, profile);
    }
  )
);
