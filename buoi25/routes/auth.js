const AuthController = require("../controllers/AuthController");

var express = require("express");
var router = express.Router();

router.get("/login", AuthController.index);
router.get("/logout", AuthController.logout);
router.post("/login", AuthController.handeLogin);
router.get("/register",AuthController.register);
router.post("/register", AuthController.handleRegister);

module.exports = router;
