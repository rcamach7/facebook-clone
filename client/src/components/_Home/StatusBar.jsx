import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo, faLaughBeam } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../RouteSwitch";
import { useContext } from "react";

function StatusBar({ setShowPopup }) {
  const { user } = useContext(UserContext);

  return (
    <div className="StatusBar">
      <div className="statusBar-submission">
        <div className="statusBar-submission-user">
          <img src={user ? user.profilePicture : null} alt="" />
        </div>
        <button
          className="statusBar-submission-input"
          onClick={() => setShowPopup(true)}
        >
          What's on your mind, {user ? user.fullName : null}?
        </button>
      </div>

      <div className="statusBar-nav">
        <span className="statusBar-nav-item">
          <FontAwesomeIcon icon="video" className="nav-liveVideo" /> Live Video
        </span>
        <span className="statusBar-nav-item">
          <FontAwesomeIcon icon={faPhotoVideo} className="nav-photo" />
          Photo/video
        </span>
        <span className="statusBar-nav-item">
          <FontAwesomeIcon icon={faLaughBeam} className="nav-feeling" />
          Feeling/activity
        </span>
      </div>
    </div>
  );
}

export default StatusBar;
