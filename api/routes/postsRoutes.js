const router = require("express").Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.getPosts);

router.post("/", postsController.createPost);

// If requests provides a like field thats truthly, we assume the update is a like update(remove or add)  and process it.
// If the user provides a comment field - we assume they are adding a comment to the post and process that.
router.put("/:id", postsController.editPost);

router.delete("/", postsController.deletePost);

module.exports = router;
