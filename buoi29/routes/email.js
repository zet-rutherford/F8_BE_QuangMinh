var express = require('express');
var router = express.Router();
const sendController = require('../controllers/sendController')
/* GET users listing. */
router.get('/send', sendController.index);
router.post('/send',sendController.handleSend);
router.get('/history',sendController.getList);
router.get('/detail/:id',sendController.getDetail)

module.exports = router;
