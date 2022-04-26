import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";
import { processPostLike } from "../../../assets/api";

function PostNavbar({ postId, setPosts }) {
  const findIndexOfPost = (posts, postId) => {
    let index = -1;
    posts.forEach((post, i) => {
      if (post._id === postId) {
        index = i;
      }
    });
    return index;
  };

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

      <span className="postNavbar-item">
        <FontAwesomeIcon icon={faShare} /> Share
      </span>
    </nav>
  );
}

export default PostNavbar;
