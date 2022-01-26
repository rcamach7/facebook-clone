import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function PostComments(props) {
  return (
    <div className="PostComments">
      {props.comments.map((curComment) => {
        return (
          <Comment
            key={uuidv4()}
            userName={curComment.userName}
            comment={curComment.comment}
            icon={curComment.icon}
            likes={curComment.likes}
            handleAddLike={props.handleAddLike}
            postId={props.postId}
          />
        );
      })}
    </div>
  );
}

function Comment(props) {
  const handleAddLike = () => {
    props.handleAddLike(props.postId);
  };

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
        <p className="comment-interaction-like" onClick={() => handleAddLike()}>
          Like
        </p>
        <span className="comment-interaction-result">
          {props.likes > 0 && (
            <FontAwesomeIcon icon={faThumbsUp} className="result-icon" />
          )}
          <p className="result-number">{props.likes > 0 && props.likes}</p>
        </span>
      </div>
    </div>
  );
}

export default PostComments;
