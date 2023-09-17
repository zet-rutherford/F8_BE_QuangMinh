const AuthController = require('../controllers/AuthController');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', AuthController.index);

module.exports = router;