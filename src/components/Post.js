import "../styles/Post.css";
import PostInfo from "./PostInfo";
import PostNavbar from "./PostNavbar";
import PostComments from "./PostComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Post() {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar />
      </div>
      <div className="postCommentsContainer">
        <PostComments />
      </div>
      <div className="postAddCommentContainer">
        <PostAddComment />
      </div>
    </div>
  );
}

function PostAddComment() {
  return (
    <div className="PostAddComment">
      <div className="postAddComment-user">
        <FontAwesomeIcon icon="user" />
      </div>
      <form className="postAddComment-input">
        <input type="text" placeholder="Write a comment..." />
      </form>
    </div>
  );
}
