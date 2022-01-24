import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faPhotoVideo,
  faLaughBeam,
  faMapMarkerAlt,
  faMicrophone,
  faEllipsisH,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function PopupForm(props) {
  const formPlaceholder = `What's on your mind, ${props.userName}?`;
  const [postDescription, setPostDescription] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    const newPost = {
      userName: props.userName,
      timePosted: "13 hrs ago ",
      postDescription: postDescription,
      likedBy: [],
      comments: [],
    };

    props.handleNewPost(newPost);
    props.setShowPopup(false);
  };
  return (
    <div className="form-container">
      <form className="PopupForm">
        <div className="popupForm-title">
          <p
            className="popupForm-title-item text"
            style={{ fontWeight: "bolder" }}
          >
            Create post
          </p>
          <p className="popupForm-title-item close">
            <FontAwesomeIcon
              icon={faWindowClose}
              style={{ fontSize: "20px" }}
              onClick={() => props.setShowPopup(false)}
            />
          </p>
        </div>

        <div className="popupForm-userInfo">
          <div className="popupForm-userInfo-icon">
            <FontAwesomeIcon icon="user" style={{ fontSize: "25px" }} />
          </div>
          <div className="popupForm-userInfo-data">
            <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
              Ricardo Camacho
            </p>
            <div className="popupForm-userInfo-data-nav">
              <FontAwesomeIcon icon="users" style={{ fontSize: "13px" }} />
              <span style={{ margin: "0px 5px 0 5px" }}>Friends</span>
              <FontAwesomeIcon
                icon={faCaretSquareDown}
                style={{ fontSize: "13px" }}
              />
            </div>
          </div>
        </div>

        <textarea
          id="testInput"
          className="popupForm-input"
          placeholder={formPlaceholder}
          onChange={(e) => setPostDescription(e.target.value)}
        />
        <div className="popupForm-subNavbar">
          <span className="subNavbar-addMore">Add to your post</span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(69,189,98)" }}
              icon={faPhotoVideo}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon style={{ color: "rgb(25,119,242)" }} icon="user" />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(247,185,40)" }}
              icon={faLaughBeam}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(245,83,62)" }}
              icon={faMapMarkerAlt}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(245,83,62)" }}
              icon={faMicrophone}
            />
          </span>
          <span className="subNavbar-item">
            <FontAwesomeIcon
              style={{ color: "rgb(96,103,112)" }}
              icon={faEllipsisH}
            />
          </span>
        </div>

        <input
          className="popupForm-submit"
          type="submit"
          value="Post"
          onClick={handleSubmission}
        />
      </form>
    </div>
  );
}

export default PopupForm;
