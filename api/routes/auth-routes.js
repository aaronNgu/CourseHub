const router = require("express").Router();
const passport = require("passport");

const CLIENT_BASE_URL = 'http://localhost:3000';

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(200).json({
      isAuthenticated: false,
      message: "user has not been authenticated",
      user: null
    });
  } else {
    next();
  }
};

router.get("/checkStatus", authCheck, (req, res) => {
  // passport.authenticate('google', { scope: ["profile"] }),
  res.status(200).json({
    isAuthenticated: true,
    message: "user successfully authenticated",
    user: req.user
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_BASE_URL + '/homepage');
});

// auth with google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// redirect to home page after successfully login via google
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: CLIENT_BASE_URL + '/homepage',
    failureRedirect: CLIENT_BASE_URL + '/login'
  })
);

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', {
    successRedirect: CLIENT_BASE_URL + '/homepage',
    failureRedirect: CLIENT_BASE_URL + '/login'
  })
);

module.exports = router;
