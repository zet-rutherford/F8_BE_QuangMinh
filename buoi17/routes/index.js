var express = require("express");
const HomeController = require("../Controllers/HomeController");
var router = express.Router();

/* GET home page. */
router.get("/", HomeController.index);
router.get("/about", (req, res) => {
  res.render("pages/about", { layout: "layouts/layout" });
});
router.get("/gallery", (req, res) => {
  res.render("pages/gallery", { layout: "layouts/layout" });
});
router.get("/services", (req, res) => {
  res.render("pages/services", { layout: "layouts/layout" });
});
router.get("/contact", (req, res) => {
  res.render("pages/contact", { layout: "layouts/layout" });
});

module.exports = router;
