import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare } from "@fortawesome/free-solid-svg-icons";

function PostNavbar() {
  return (
    <nav className="PostNavbar">
      <span className="postNavbar-item">
        <FontAwesomeIcon icon={faThumbsUp} /> Like
      </span>

      <span className="postNavbar-item">
        <FontAwesomeIcon icon={faShare} /> Share
      </span>
    </nav>
  );
}

export default PostNavbar;
