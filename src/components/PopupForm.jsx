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
import { v4 as uuidv4 } from "uuid";

function PopupForm(props) {
  const formPlaceholder = `What's on your mind, ${props.userInfo.fullName}?`;
  const [postDescription, setPostDescription] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmission = (e) => {
    e.preventDefault();

    const newPost = {
      postId: uuidv4(),
      userName: props.userInfo.userName,
      icon: props.profilePicture,
      timePosted: new Date(),
      postDescription: postDescription,
      likes: [],
      picture: picture,
      comments: [],
    };

    props.handleNewPost(newPost);
    props.setShowPopup(false);
  };

  return (
    <div className="form-container">
      <form className="PopupForm" onSubmit={handleSubmission}>
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
            <img src={props.profilePicture} alt="" />
          </div>
          <div className="popupForm-userInfo-data">
            <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
              {props.userInfo.fullName}
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

        <label htmlFor="testInput"></label>
        <textarea
          id="testInput"
          className="popupForm-input"
          placeholder={formPlaceholder}
          onChange={(e) => setPostDescription(e.target.value)}
          required
          minLength="5"
        />
        <div className="popupForm-subNavbar">
          <span className="subNavbar-addMore">Add to your post</span>

          <label className="subNavbar-item" htmlFor="image_uploads">
            <FontAwesomeIcon
              style={{ color: "rgb(69,189,98)" }}
              icon={faPhotoVideo}
            />
            <input
              className="file-upload"
              type="file"
              id="image_uploads"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </label>

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

        <input className="popupForm-submit" type="submit" value="Post" />
      </form>
    </div>
  );
}

export default PopupForm;
