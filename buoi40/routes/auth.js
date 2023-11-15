var express = require("express");
var passport = require("passport");
var router = express.Router();
const authController = require("../controllers/auth.controller");
var guestMiddleware = require("../middlewares/guest.middleware");
const token = require("../utils/token");

router.get("/login", guestMiddleware, authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    // failureFlash: true,
    // successRedirect: "/",
  }),
  authController.handleLogin,
  (req, res) => {
    if (req.query.redirect) {
      res.redirect("/auth/redirect?url=" + req.query.redirect);
    }
    res.redirect("/");
  }
  // authController.handleLogin
);

router.get("/redirect", (req, res) => {
  const cookie = req.cookies["connect.sid"];
  res.redirect(req.query.url + "?cookie=" + cookie);
});

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next();
    }
    res.redirect("/auth/login");
  });
});

module.exports = router;
