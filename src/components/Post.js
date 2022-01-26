import "../styles/Post.css";
import PostInfo from "./postSubComponents/PostInfo";
import PostNavbar from "./postSubComponents/PostNavbar";
import PostComments from "./postSubComponents/PostComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Post(props) {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo
          userName={props.post.userName}
          icon={props.post.icon}
          timePosted={props.post.timePosted}
          postDescription={props.post.postDescription}
        />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar />
      </div>
      <div className="postCommentsContainer">
        <PostComments comments={props.post.comments} />
      </div>
      <div className="postAddCommentContainer">
        <PostAddComment icon={props.icon} />
      </div>
    </div>
  );
}

function PostAddComment(props) {
  return (
    <div className="PostAddComment">
      <div className="postAddComment-user">
        <img src={props.icon} alt="" />
      </div>
      <form className="postAddComment-input">
        <input type="text" placeholder="Write a comment..." />
      </form>
    </div>
  );
}
