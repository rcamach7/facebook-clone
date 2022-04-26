import PostInfo from "./PostInfo";
import PostNavbar from "./PostNavbar";
import PostComments from "./PostComments";
import PostAddComment from "./PostAddComment";

export default function Post({ post, user }) {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo
          username={post.postedBy.username}
          authorProfilePicture={post.postedBy.profilePicture}
          timeStamp={post.timeStamp}
          description={post.description}
          picture={post.picture}
          likes={post.likes}
          numComments={post.comments.length}
        />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar />
      </div>
      <div className="postCommentsContainer">
        <PostComments comments={post.comments} postId={post._id} />
      </div>
      <div className="postAddCommentContainer">
        <PostAddComment
          postId={post._id}
          profilePicture={user.profilePicture}
        />
      </div>
    </div>
  );
}
