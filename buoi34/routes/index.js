var express = require("express");
var router = express.Router();
const hash = require("../utils/hash");
const RoleMiddleware = require("../middlewares/RoleMiddleware");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;

/*
Viết middleware để check route và permission tương ứng
Viết hàm check quyền -> Ẩn/Hiện các button, menu tương ứng
*/
