const router = require("express").Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.getPosts);

router.post("/", postsController.createPost);

// To be implemented in the future
router.put("/", postsController.editPost);
router.delete("/", postsController.deletePost);

module.exports = router;
