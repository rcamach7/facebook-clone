import { v4 as uuidv4 } from "uuid";
import Comment from "./Comment";
function PostComments({ comments, postId, setPosts }) {
  return (
    <div className="PostComments">
      {comments.map((curComment) => {
        return (
          <Comment
            key={uuidv4()}
            username={curComment.user.username}
            comment={curComment.comment}
            commenterPicture={curComment.user.profileImage}
            likes={curComment.likes}
            commentId={curComment._id}
            postId={postId}
            setPosts={setPosts}
          />
        );
      })}
    </div>
  );
}

export default PostComments;
