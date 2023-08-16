var express = require("express");
const LoginController = require("../controllers/LoginController");
var router = express.Router();

/* GET home page. */
router.get("/dang-nhap", LoginController.index);

module.exports = router;
