var express = require("express");
var router = express.Router();
const passport = require("passport");
const AuthController = require("../controllers/AuthController");

const isLogin = (req, res, next) => {
    if (req.user) {
      res.redirect("/");
    }
  
    next();
  };

router.get("/login", isLogin, AuthController.login);
router.post(
    "/login",
    passport.authenticate("local", {
      failureRedirect: "/auth/login",
      failureFlash: true,
    }),
    AuthController.handleLogin,
  );
router.get("/logout", AuthController.logout);
router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/forget",AuthController.forget);
router.post("/forget",AuthController.forgetEmail);
router.get("/verify",AuthController.verify);
router.post("/verify",AuthController.handleVerify);
router.get("/reset",AuthController.reset);
router.post("/reset",AuthController.handleReset)
module.exports = router;