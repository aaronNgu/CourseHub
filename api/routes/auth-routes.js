const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/homepage";


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
  res.redirect(CLIENT_HOME_PAGE_URL);
});

// auth with google
router.get("/google", passport.authenticate("google",  { scope: ["profile"] }));

// redirect to home page after successfully login via google
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: CLIENT_HOME_PAGE_URL
  })
);

module.exports = router;
