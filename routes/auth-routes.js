const router = require("express").Router();
const passport = require("passport");

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
  res.status(200).json({
    isAuthenticated: true,
    message: "user successfully authenticated",
    user: req.user
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({
    isAuthenticated: false, 
    user: null,
  });
});

// auth with google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// redirect to home page after successfully login via google
router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: '/homepage',
    failureRedirect: '/login'
  })
);

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/facebook/redirect',
  passport.authenticate('facebook', {
    successRedirect: '/homepage',
    failureRedirect: '/login'
  })
);

module.exports = router;
