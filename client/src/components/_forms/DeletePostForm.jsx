import React from "react";
import { deletePost } from "../../assets/api";
export default function DeletePostForm({
  setShowDeletePostForm,
  setPosts,
  postId,
}) {
  const handleDeletePost = async (e) => {
    e.preventDefault();
    try {
      const posts = await deletePost(postId);
      setShowDeletePostForm(false);
      setPosts(posts);
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
