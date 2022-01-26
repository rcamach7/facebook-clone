import { v4 as uuidv4 } from "uuid";

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
          />
        );
      })}
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <span className="comment-icon">
        <img src={props.icon} alt="" />
      </span>
      <div className="comment-description">
        <p className="comment-description-user">{props.userName}</p>
        <p className="comment-description-text">{props.comment}</p>
      </div>
    </div>
  );
}

export default PostComments;
