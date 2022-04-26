import PostInfo from "./PostInfo";
import PostNavbar from "./PostNavbar";
import PostComments from "./PostComments";
import PostAddComment from "./PostAddComment";

export default function Post({ post, user, setPosts }) {
  const { postedBy, timeStamp, description, picture, likes, comments, _id } =
    post;

  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo
          fullName={postedBy.fullName}
          authorProfilePicture={postedBy.profilePicture}
          timeStamp={timeStamp}
          description={description}
          picture={picture}
          likes={likes}
          numComments={comments.length}
        />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar setPosts={setPosts} postId={_id} />
      </div>
      <div className="postCommentsContainer">
        <PostComments comments={comments} postId={_id} />
      </div>
      <div className="postAddCommentContainer">
        <PostAddComment postId={_id} profilePicture={user.profilePicture} />
      </div>
    </div>
  );
}
