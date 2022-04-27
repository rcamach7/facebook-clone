import React from "react";
import { deletePost } from "../../assets/api";

export default function DeletePostForm({
  setShowDeletePostForm,
  setPosts,
  postId,
}) {
  const handleDeletePost = async (e) => {
    try {
      const posts = await deletePost(postId);
      setPosts(posts);
      setShowDeletePostForm(false);
    } catch (error) {
      console.log(error.response);
      alert("Error deleting post - must be author of post");
    }
  };

  return (
    <form className="DeletePostForm" onSubmit={(e) => handleDeletePost(e)}>
      <div className="inputContainer">
        <button type="submit" id="submitBtn">
          Delete
        </button>
        <button type="button" onClick={() => setShowDeletePostForm(false)}>
          Close
        </button>
      </div>
    </form>
  );
}
