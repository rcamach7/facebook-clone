import "../../../styles/Post.css";
import PostInfo from "./PostInfo";
import PostNavbar from "./PostNavbar";
import PostComments from "./PostComments";
import PostAddComment from "./PostAddComment";

export default function Post(props) {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo
          userName={props.post.userName}
          icon={props.post.icon}
          timePosted={props.post.timePosted}
          postDescription={props.post.postDescription}
          postPicture={props.post.picture}
          likes={props.post.likes}
          numComments={props.post.comments.length}
        />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar
          handlePostLike={props.handlePostLike}
          postId={props.post.postId}
        />
      </div>
      <div className="postCommentsContainer">
        <PostComments
          handleAddCommentLike={props.handleAddCommentLike}
          comments={props.post.comments}
          postId={props.post.postId}
        />
      </div>
      <div className="postAddCommentContainer">
        <PostAddComment
          postId={props.post.postId}
          handleAddCommentToPost={props.handleAddCommentToPost}
          icon={props.profilePicture}
        />
      </div>
    </div>
  );
}
