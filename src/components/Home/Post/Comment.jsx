import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { processCommentLike } from "../../../assets/api";
import { findIndexOfPost } from "../../../assets/helpers";
import { useState } from "react";
import moment from "moment";
import LoadingUx from "../../LoadingUx";

function Comment({
  username,
  comment,
  commenterPicture,
  likes,
  postId,
  commentId,
  setPosts,
  timeStamp,
}) {
  const [loading, setLoading] = useState(false);

  const handleCommentLike = async () => {
    try {
      setLoading(true);
      const post = await processCommentLike(postId, commentId);
      setLoading(false);

      setPosts((prevState) => {
        const newState = [...prevState];
        newState[findIndexOfPost(prevState, postId)] = post;
        return newState;
      });
    } catch (error) {
      setLoading(false);
      alert("Error adding like to comment");
    }
  };
  return (
    <div className="Comment">
      <div className="comment-main">
        <span className="comment-icon">
          <img src={commenterPicture} alt="" />
        </span>
        <div className="comment-description">
          <p className="comment-description-user">{username}</p>
          <p className="comment-description-text">{comment}</p>
        </div>
      </div>

      <div className="comment-interaction">
        <section className="comment-interaction-like">
          {loading ? (
            <LoadingUx />
          ) : (
            <div className="like-interaction">
              <span onClick={() => handleCommentLike()}>Like </span>
              <p>- {moment(timeStamp).fromNow()}</p>
            </div>
          )}
        </section>
        <span className="comment-interaction-result">
          {likes.length > 0 && (
            <FontAwesomeIcon icon={faThumbsUp} className="result-icon" />
          )}
          <p className="result-number">{likes.length > 0 && likes.length}</p>
        </span>
      </div>
    </div>
  );
}

export default Comment;
