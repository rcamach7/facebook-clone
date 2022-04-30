import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import DeletePostForm from "../../forms/DeletePostForm";
import { useState } from "react";

function PostInfo({
  fullName,
  authorProfilePicture,
  timeStamp,
  description,
  picture,
  likes,
  numComments,
  postId,
  setPosts,
}) {
  const [showDeletePostForm, setShowDeletePostForm] = useState(false);

  return (
    <div className="PostInfo">
      <div className="postInfo-main">
        <div className="postInfo-main-user postInfo-main-item">
          <img src={authorProfilePicture} alt="" />
        </div>
        <div className="postInfo-main-details postInfo-main-item">
          <p className="details-username">{fullName}</p>
          <p className="details-postTime">{moment(timeStamp).fromNow()}</p>
        </div>
        <div className="postInfo-main-editPost postInfo-main-item">
          <button
            className="editPost-btn"
            onClick={() => setShowDeletePostForm(!showDeletePostForm)}
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          {showDeletePostForm ? (
            <DeletePostForm
              postId={postId}
              setPosts={setPosts}
              setShowDeletePostForm={setShowDeletePostForm}
            />
          ) : null}
        </div>
      </div>

      <div className="postInfo-description">
        <p>{description}</p>
        {picture !== null && (
          <img className="postInfo-description-picture" src={picture} alt="" />
        )}
      </div>
      <div className="postInfo-interactivity">
        <span>
          {likes.length > 0 && (
            <p>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="interactivity-likes-icon"
              />{" "}
              {likes.length}
            </p>
          )}
        </span>
        <span>
          {numComments > 0 && (
            <p>
              {numComments} Comment{numComments > 1 && "s"}
            </p>
          )}
        </span>
      </div>
    </div>
  );
}

export default PostInfo;
