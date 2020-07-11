const router = require("express").Router();
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000/homepage";

// when login is successful, retrieve user info
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      isAuthenticated: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      isAuthenticated: false,
      message: "user has not been authenticated"
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
    user: req.user,
    cookies: req.cookies
  });
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
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
    failureRedirect: "/auth/login/failed"
  })
);

module.exports = router;
