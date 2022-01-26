import { useState } from "react";

function PostAddComment(props) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddCommentToPost(props.postId, comment);

    setComment("");
  };

  return (
    <div className="PostAddComment">
      <div className="postAddComment-user">
        <img src={props.icon} alt="" />
      </div>
      <form className="postAddComment-input" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </div>
  );
}

export default PostAddComment;
