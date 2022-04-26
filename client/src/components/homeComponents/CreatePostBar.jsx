import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../RouteSwitch";
import { useContext } from "react";

function CreatePostBar({ setShowPopup }) {
  const { user } = useContext(UserContext);

  return (
    <div className="CreatePost">
      <div className="createPost-submission">
        <div className="createPost-submission-user">
          <img src={user ? user.profilePicture : null} alt="" />
        </div>
        <button
          className="createPost-submission-input"
          onClick={() => setShowPopup(true)}
        >
          What's on your mind, {user ? user.fullName : null}?
        </button>
      </div>

      <div className="createPost-nav">
        <span className="createPost-nav-item">
          <FontAwesomeIcon icon="video" className="nav-liveVideo" /> Live Video
        </span>
        <span className="createPost-nav-item">
          <FontAwesomeIcon icon={faPhotoVideo} className="nav-photo" />
          Photo/video
        </span>
        <span className="createPost-nav-item">
          <FontAwesomeIcon icon={faLaughBeam} className="nav-feeling" />
          Feeling/activity
        </span>
      </div>
    </div>
  );
}

export default CreatePostBar;
