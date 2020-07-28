const history = require('connect-history-api-fallback')

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
// require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });
require('./facebook-setup');
require('./google-setup');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses');
var reviewsRouter = require('./routes/reviews');
var authRouter = require('./routes/auth-routes');

const config = process.env;
const User = require("./models/user");

// CITATION: used https://medium.com/free-code-camp/how-to-set-up-twitter-oauth-using-passport-js-and-reactjs-9ffa6f49ef0
// tutorial for login oauth setup

var app = express();

//connect to mongo db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://' + config.DB_USER + ':' + config.DB_PW + '@sandbox-7vuqw.mongodb.net/' + config.DB_DBNAME + '?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then(() => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch((err) => console.error(err));

passport.serializeUser((user, done) => {
  done(null, user);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser((user, done) => {
  User.findById(user._id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
  cookieSession({
    name: "session",
    keys: ["thisappisawesome"],
    maxAge: 24 * 60 * 60 * 100
  })
);
app.use(cors({origin: config.CLIENT_BASE_URL, credentials: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/reviews', reviewsRouter);
app.use('/auth', authRouter);

app.use(history({verbose: true}));

app.use(express.static(path.join(__dirname, "react_app", "build")))
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', (req5,res1) =>{
    res.sendFile(path.resolve(__dirname, "react_app", "build", "index.html"));
})

module.exports = app;
