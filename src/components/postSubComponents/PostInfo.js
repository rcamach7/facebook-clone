import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function PostInfo(props) {
  return (
    <div className="PostInfo">
      <div className="postInfo-main">
        <div className="postInfo-main-user">
          <FontAwesomeIcon icon="user" size="1x" />
        </div>
        <div className="postInfo-main-details">
          <p className="details-username">{props.userName}</p>
          <p className="details-postTime">
            {moment(props.timePosted).fromNow()}
          </p>
        </div>
        <div className="postInfo-main-editPost">
          <button className="editPost-btn">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      <div className="postInfo-description">
        <p>{props.postDescription}</p>
      </div>
    </div>
  );
}

export default PostInfo;
