import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { processCommentLike } from "../../../data/api";
import { findIndexOfPost } from "../../../data/helpers";
import { useState } from "react";
import moment from "moment";
import LoadingUx from "../../LoadingUx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../features/posts/postsSlice";

function Comment({
  username,
  comment,
  commenterPicture,
  likes,
  postId,
  commentId,
  timeStamp,
}) {
  const [loading, setLoading] = useState(false);
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  const handleCommentLike = async () => {
    try {
      setLoading(true);
      const post = await processCommentLike(postId, commentId);

      const updatedPosts = [...posts];
      updatedPosts[findIndexOfPost(updatedPosts, postId)] = post;
      dispatch(setPosts(updatedPosts));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error adding like to comment");
    }
  };
  return (
    <div className="Comment">
      <div className="comment-main">
        <span className="comment-icon">
          <Link to={`/facebook-clone/profile/${username}`}>
            <img src={commenterPicture} alt="" />
          </Link>
        </span>
        <div className="comment-description">
          <Link
            to={`/facebook-clone/profile/${username}`}
            style={{ textDecoration: "none" }}
          >
            <p className="comment-description-user">{username}</p>
          </Link>
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
