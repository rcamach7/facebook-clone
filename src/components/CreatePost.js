import "../styles/CreatePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo, faLaughBeam } from "@fortawesome/free-solid-svg-icons";

function CreatePost(props) {
  return (
    <div className="CreatePost">
      <div className="createPost-submission">
        <div className="createPost-submission-user">
          <img src={props.userInfo.icon} alt="" />
        </div>
        <button
          className="createPost-submission-input"
          onClick={() => props.setShowPopup(true)}
        >
          What's on your mind, {props.userInfo.fullName}?
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

export default CreatePost;
