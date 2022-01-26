import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

function PostNavbar() {
  return (
    <div className="PostNavbar">
      <span className="postNavbar-item">
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </span>

      <span className="postNavbar-item">
        <FontAwesomeIcon icon={faComment} /> Comment
      </span>

      <span className="postNavbar-item">
        <FontAwesomeIcon icon={faShare} /> Share
      </span>
    </div>
  );
}

export default PostNavbar;