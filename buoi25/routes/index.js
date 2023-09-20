var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/HomeController");
const UserValidate = require('../middlewares/UserMiddleware');

/* GET home page. */
router.get("/", HomeController.index);
router.get('/edit/:id',HomeController.edit);
router.post('/edit/:id', UserValidate(), HomeController.store)
router.post('/delete/:id',HomeController.delete);

module.exports = router;
