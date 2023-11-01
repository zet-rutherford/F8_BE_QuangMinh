var express = require("express");
var router = express.Router();
const MailController = require("../controllers/MailController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/login", MailController.login);
router.post("/login", MailController.handleLogin);
module.exports = router;
