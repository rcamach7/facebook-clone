import "../styles/Post.css";
import PostInfo from "./PostInfo";
import PostNavbar from "./PostNavbar";

export default function Post() {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo />
      </div>
      <div className="postNavbarContainer">
        <PostNavbar />
      </div>
      <div className="postCommentsContainer"></div>
      <div className="postAddCommentContainer"></div>
    </div>
  );
}

function PostComments() {
  return <div className="PostComments"></div>;
}
