import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { processPostLike } from "../../../data/api";
import { findIndexOfPost } from "../../../data/helpers";
import { useState } from "react";
import LoadingUx from "../../LoadingUx";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../features/posts/postsSlice";

function PostNavbar({ postId }) {
  const [loading, setLoading] = useState(false);
  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  const handleLike = async () => {
    try {
      setLoading(true);
      const post = await processPostLike(postId);

      const updatedPosts = [...posts];
      updatedPosts[findIndexOfPost(updatedPosts, postId)] = post;
      dispatch(setPosts(updatedPosts));

      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Error liking post!");
    }
  };
  return (
    <nav className="PostNavbar">
      <span className="postNavbar-item">
        {loading ? (
          <LoadingUx />
        ) : (
          <span onClick={() => handleLike()}>
            <FontAwesomeIcon icon={faThumbsUp} /> Like
          </span>
        )}
      </span>

      <span
        className="postNavbar-item"
        onClick={() => document.getElementById(`${postId}`).focus()}
      >
        <FontAwesomeIcon icon={faComment} /> Comment
      </span>
    </nav>
  );
}

export default PostNavbar;
