import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment({
  username,
  comment,
  commenterPicture,
  likes,
  postId,
  commentId,
}) {
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
          onClick={() => console.log("add comment")}
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
