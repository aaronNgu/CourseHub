var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
require('./FacebookSetup');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses');
var reviewsRouter = require('./routes/reviews');
var facebookRoute = require('./routes/facebookAuth');

var app = express();

//connect to mongo db
const mongoose = require('mongoose');
const config = process.env;
mongoose.connect('mongodb+srv://' + config.DB_USER  + ':' + config.DB_PW + '@sandbox-7vuqw.mongodb.net/' + config.DB_DBNAME + '?retryWrites=true&w=majority')
  .then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({credentials: true,}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/reviews', reviewsRouter);
app.use('/auth/facebook', facebookRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
