import { useState } from "react";

function PostAddComment({ profilePicture }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="PostAddComment">
      <div className="postAddComment-user">
        <img src={profilePicture} alt="" />
      </div>
      <form className="postAddComment-input" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default PostAddComment;
