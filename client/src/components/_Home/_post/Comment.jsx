import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { processCommentLike } from "../../../assets/api";
import { findIndexOfPost } from "../../../assets/helpers";

function Comment({
  username,
  comment,
  commenterPicture,
  likes,
  postId,
  commentId,
  setPosts,
}) {
  const handleCommentLike = async () => {
    try {
      const post = await processCommentLike(postId, commentId);
      setPosts((prevState) => {
        const newState = [...prevState];
        newState[findIndexOfPost(prevState, postId)] = post;
        return newState;
      });
    } catch (error) {
      alert("Error adding like to comment");
    }
  };
  return (
    <div className="Comment">
      <div className="comment-main">
        <span className="comment-icon">
          <img src={commenterPicture} alt="" />
        </span>
        <div className="comment-description">
          <p className="comment-description-user">{username}</p>
          <p className="comment-description-text">{comment}</p>
        </div>
      </div>

      <div className="comment-interaction">
        <p
          className="comment-interaction-like"
          onClick={() => handleCommentLike()}
        >
          Like
        </p>
        <span className="comment-interaction-result">
          {likes.length > 0 && (
            <FontAwesomeIcon icon={faThumbsUp} className="result-icon" />
          )}
          <p className="result-number">{likes.length > 0 && likes.length}</p>
        </span>
      </div>
    </div>
  );
}

export default Comment;
