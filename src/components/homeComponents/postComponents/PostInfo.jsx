import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

function PostInfo(props) {
  return (
    <div className="PostInfo">
      <div className="postInfo-main">
        <div className="postInfo-main-user postInfo-main-item">
          <img src={props.icon} alt="" />
        </div>
        <div className="postInfo-main-details postInfo-main-item">
          <p className="details-username">{props.userName}</p>
          <p className="details-postTime">
            {moment(props.timePosted).fromNow()}
          </p>
        </div>
        <div className="postInfo-main-editPost postInfo-main-item">
          <button className="editPost-btn">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      <div className="postInfo-description">
        <p>{props.postDescription}</p>
        {props.postPicture !== null && (
          <img
            className="postInfo-description-picture"
            src={props.postPicture}
            alt=""
          />
        )}
      </div>
      <div className="postInfo-interactivity">
        <span>
          {props.likes.length > 0 && (
            <p>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="interactivity-likes-icon"
              />{" "}
              {props.likes.length}
            </p>
          )}
        </span>
        <span>
          {props.numComments > 0 && (
            <p>
              {props.numComments} Comment{props.numComments > 1 && "s"}
            </p>
          )}
        </span>
      </div>
    </div>
  );
}

export default PostInfo;
