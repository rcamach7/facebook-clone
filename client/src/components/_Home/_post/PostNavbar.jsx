import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { processPostLike } from "../../../assets/api";
import { findIndexOfPost } from "../../../assets/helpers";

function PostNavbar({ postId, setPosts }) {
  const handleLike = async () => {
    try {
      const post = await processPostLike(postId);
      setPosts((prevState) => {
        const newState = [...prevState];
        newState[findIndexOfPost(prevState, postId)] = post;
        return newState;
      });
    } catch (error) {
      console.log(error);
      alert("Error liking post!");
    }
  };
  return (
    <nav className="PostNavbar">
      <span className="postNavbar-item" onClick={() => handleLike()}>
        <FontAwesomeIcon icon={faThumbsUp} /> Like
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
