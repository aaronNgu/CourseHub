var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
var router = express.Router();
var port = 9000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses');
var reviewsRouter = require('./routes/reviews');
var authRouter = require('./routes/auth-routes');

const cookieSession = require("cookie-session");
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const googleSetup = require("./google-setup");
const findOrCreate = require('mongoose-findorcreate');

var app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["thisappisawesome"],
    maxAge: 24 * 60 * 60 * 100
  })
);

// parse cookies
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

//connect to mongo db
const mongoose = require('mongoose');
const config = process.env;
mongoose.connect('mongodb+srv://' + config.DB_USER  + ':' + config.DB_PW + '@sandbox-7vuqw.mongodb.net/' + config.DB_DBNAME + '?retryWrites=true&w=majority', { useNewUrlParser: true })
  .then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));

  //to resolve deprecation warning
 mongoose.set("useCreateIndex", true);

 const myUserSchema = new mongoose.Schema({
   name: String,
   id: String
 })

 myUserSchema.plugin(passportLocalMongoose);
 myUserSchema.plugin(findOrCreate);

 const myUser = new mongoose.model("myUser", myUserSchema);

 passport.use(myUser.createStrategy());

 passport.serializeUser((user, done) => {
   done(null, user);
 });

 passport.deserializeUser((user, done) => {
   // myUser.findById(id)
   //   .then(user => {
   //     done(null, user);
   //   })
   //   .catch(e => {
   //     done(new Error("Failed to deserialize user"));
   //   });
   done(null, user);
 });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/reviews', reviewsRouter);
app.use("/auth", authRouter);

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

// connect react to nodejs express server
// app.listen(port, () => console.log(`Server is running on port ${port}!`));

module.exports = app;
