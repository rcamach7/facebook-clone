import PostInfo from "./PostInfo";
import PostNavbar from "./PostNavbar";
import PostComments from "./PostComments";
import PostAddComment from "./PostAddComment";

export default function Post({ post, user }) {
  const { postedBy, timeStamp, description, picture, likes, comments, _id } =
    post;

  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo
          fullName={postedBy.fullName}
          username={postedBy.username}
          authorProfilePicture={postedBy.profilePicture}
          timeStamp={timeStamp}
          description={description}
          picture={picture}
          likes={likes}
          numComments={comments.length}
          postId={_id}
        />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar postId={_id} />
      </div>
      <div className="postCommentsContainer">
        <PostComments comments={comments} postId={_id} />
      </div>
      <div className="postAddCommentContainer">
        <PostAddComment
          postId={_id}
          profilePicture={user ? user.profilePicture : null}
        />
      </div>
    </div>
  );
}
