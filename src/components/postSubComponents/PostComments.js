import { v4 as uuidv4 } from "uuid";
import Comment from "./Comment";
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
            commentId={curComment.commentId}
            handleAddCommentLike={props.handleAddCommentLike}
            postId={props.postId}
          />
        );
      })}
    </div>
  );
}

export default PostComments;
