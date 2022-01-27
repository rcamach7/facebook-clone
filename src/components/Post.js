import "../styles/Post.css";
import PostInfo from "./postSubComponents/PostInfo";
import PostNavbar from "./postSubComponents/PostNavbar";
import PostComments from "./postSubComponents/PostComments";
import PostAddComment from "./postSubComponents/PostAddComment";

export default function Post(props) {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo
          userName={props.post.userName}
          icon={props.post.icon}
          timePosted={props.post.timePosted}
          postDescription={props.post.postDescription}
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
          icon={props.icon}
        />
      </div>
    </div>
  );
}
