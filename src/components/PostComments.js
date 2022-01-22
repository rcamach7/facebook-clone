import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostComments() {
  return (
    <div className="PostComments">
      <Comment />
      <Comment />
    </div>
  );
}

function Comment() {
  return (
    <div className="Comment">
      <span className="comment-icon">
        <FontAwesomeIcon icon="user" />
      </span>
      <div className="comment-description">
        <p className="comment-description-user">Ricardo Camacho</p>
        <p className="comment-description-text">
          Hey that is incredible much respect dude!
        </p>
      </div>
    </div>
  );
}

export default PostComments;
