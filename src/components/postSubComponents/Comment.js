import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment(props) {
  return (
    <div className="Comment">
      <div className="comment-main">
        <span className="comment-icon">
          <img src={props.icon} alt="" />
        </span>
        <div className="comment-description">
          <p className="comment-description-user">{props.userName}</p>
          <p className="comment-description-text">{props.comment}</p>
        </div>
      </div>

      <div className="comment-interaction">
        <p
          className="comment-interaction-like"
          onClick={() =>
            props.handleAddCommentLike(props.postId, props.commentId)
          }
        >
          Like
        </p>
        <span className="comment-interaction-result">
          {props.likes.length > 0 && (
            <FontAwesomeIcon icon={faThumbsUp} className="result-icon" />
          )}
          <p className="result-number">
            {props.likes.length > 0 && props.likes.length}
          </p>
        </span>
      </div>
    </div>
  );
}

export default Comment;
