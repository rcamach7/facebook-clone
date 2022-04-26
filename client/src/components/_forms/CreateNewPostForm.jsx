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
import { useState, useContext } from "react";
import { UserContext } from "../../RouteSwitch";

function CreateNewPostForm({ setShowPopup }) {
  const { user } = useContext(UserContext);
  const formPlaceholder = `What's on your mind, ${
    user ? user.fullName : "loading"
  }?`;
  // Form input fields
  const [postDescription, setPostDescription] = useState("");
  const [picture, setPicture] = useState(null);

  const handleSubmission = (e) => {
    setShowPopup(false);
  };

  return (
    <div className="form-container">
      <form className="CreateNewPostForm" onSubmit={handleSubmission}>
        <div className="createNewPostForm-title">
          <p
            className="createNewPostForm-title-item text"
            style={{ fontWeight: "bolder" }}
          >
            Create post
          </p>
          <p className="createNewPostForm-title-item close">
            <FontAwesomeIcon
              icon={faWindowClose}
              style={{ fontSize: "20px" }}
              onClick={() => setShowPopup(false)}
            />
          </p>
        </div>

        <div className="createNewPostForm-userInfo">
          <div className="createNewPostForm-userInfo-icon">
            <img src={user ? user.profilePicture : null} alt="" />
          </div>
          <div className="createNewPostForm-userInfo-data">
            <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
              {user ? user.fullName : null}
            </p>
            <div className="createNewPostForm-userInfo-data-nav">
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
          className="createNewPostForm-input"
          placeholder={formPlaceholder}
          onChange={(e) => setPostDescription(e.target.value)}
          required
          minLength="5"
        />
        <div className="createNewPostForm-subNavbar">
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

        <input
          className="createNewPostForm-submit"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  );
}

export default CreateNewPostForm;
