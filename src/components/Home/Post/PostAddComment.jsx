import { useState } from "react";
import { processPostComment } from "../../../assets/api";
import { findIndexOfPost } from "../../../assets/helpers";

function PostAddComment({ profilePicture, setPosts, postId }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post = await processPostComment(postId, comment);
      setPosts((prevState) => {
        const newState = [...prevState];
        newState[findIndexOfPost(prevState, postId)] = post;
        return newState;
      });
      setComment("");
    } catch (error) {
      alert("Error adding comment");
    }
  };

  return (
    <div className="PostAddComment">
      <div className="postAddComment-user">
        <img src={profilePicture} alt="" />
      </div>
      <form className="postAddComment-input" onSubmit={(e) => handleSubmit(e)}>
        <input
          id={postId}
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          minLength="4"
          required
        />
      </form>
    </div>
  );
}

export default PostAddComment;
