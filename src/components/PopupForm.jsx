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

function PopupForm(props) {
  const formPlaceholder = `What's on your mind, ${props.userName}?`;
  return (
    <form className="PopupForm">
      <div className="popupForm-title">
        <p
          className="popupForm-title-item text"
          style={{ fontWeight: "bolder" }}
        >
          Create post
        </p>
        <p className="popupForm-title-item close">
          <FontAwesomeIcon icon={faWindowClose} style={{ fontSize: "20px" }} />
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
      <input className="popupForm-submit" type="submit" value="Post" />
    </form>
  );
}

export default PopupForm;