import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function PostInfo() {
  return (
    <div className="PostInfo">
      <div className="postInfo-main">
        <div className="postInfo-main-user">
          <FontAwesomeIcon icon="user" size="1x" />
        </div>
        <div className="postInfo-main-details">
          <p className="details-username">Ricardo Camacho</p>
          <p className="details-postTime">12 hrs ago</p>
        </div>
        <div className="postInfo-main-editPost">
          <button className="editPost-btn">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      <div className="postInfo-description">
        <p>Lorem ipsum dolor sit amet postj skjfjes sgsgjs</p>
      </div>
    </div>
  );
}

export default PostInfo;
