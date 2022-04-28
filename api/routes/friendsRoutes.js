const router = require("express").Router();
const friendsController = require("../controllers/loginController");

router.post("/", friendsController.addFriend);

module.exports = router;
