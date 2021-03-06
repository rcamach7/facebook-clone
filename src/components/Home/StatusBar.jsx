import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhotoVideo,
  faLaughBeam,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function StatusBar({ setShowPopup }) {
  const user = useSelector((state) => state.user.value);

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
          What's on your mind, {user ? user.fullName : "loading..."}?
        </button>
      </div>

      <div className="statusBar-nav">
        <span className="statusBar-nav-item" onClick={() => setShowPopup(true)}>
          <FontAwesomeIcon icon={faVideo} className="nav-liveVideo" />
          Live Video
        </span>
        <span className="statusBar-nav-item" onClick={() => setShowPopup(true)}>
          <FontAwesomeIcon icon={faPhotoVideo} className="nav-photo" />
          Photo/video
        </span>
        <span className="statusBar-nav-item" onClick={() => setShowPopup(true)}>
          <FontAwesomeIcon icon={faLaughBeam} className="nav-feeling" />
          Activity
        </span>
      </div>
    </div>
  );
}

export default StatusBar;
