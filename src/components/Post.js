import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  return (
    <div className="Post">
      <div className="postInfoContainer">
        <PostInfo />
      </div>
      <div className="postNavbarContainer"></div>
      <div className="postCommentsContainer"></div>
      <div className="postAddCommentContainer"></div>
    </div>
  );
}

function PostInfo() {
  return (
    <div className="PostInfo">
      <div className="postInfo-user">
        <FontAwesomeIcon icon="user" size="1x" />
      </div>
      <div className="postInfo-details">
        <p className="details-username">Ricardo Camacho</p>
        <p>12 hrs ago</p>
      </div>
      <div className="postInfo-editPost">
        <button className="editPost-btn">
          <FontAwesomeIcon icon={faEllipsisH} />
        </button>
      </div>
    </div>
  );
}
