var express = require("express");
var router = express.Router();

const FileController = require("../controllers/FileController");

router.post("/", FileController.upload);
router.get("/list-link", FileController.index);
router.get("/:fileName", FileController.send);

module.exports = router;
