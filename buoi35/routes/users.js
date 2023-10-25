var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");

/* GET users listing. */
router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);
router.patch("/update-user/:id", UserController.edit);
router.put("/update-user/:id", UserController.edit);
router.delete("/delete-user/:id", UserController.delete);

module.exports = router;
