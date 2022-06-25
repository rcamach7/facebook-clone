import { useState } from "react";
import { processPostComment } from "../../../assets/api";
import { findIndexOfPost } from "../../../assets/helpers";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../../features/posts/postsSlice";

function PostAddComment({ profilePicture, postId }) {
  const [comment, setComment] = useState("");
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const post = await processPostComment(postId, comment);

      const updatedPosts = [...posts];
      updatedPosts[findIndexOfPost(updatedPosts, postId)] = post;
      dispatch(setPosts(updatedPosts));

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
