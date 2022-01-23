import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

function PopupForm() {
  return (
    <form className="PopupForm">
      <div className="popupForm-title">
        <p className="popupForm-title-item text">Create post</p>
        <p className="popupForm-title-item close">X</p>
      </div>
      <div className="popupForm-userInfo">
        <div className="popupForm-userInfo-icon">
          <FontAwesomeIcon icon="user" style={{ fontSize: "20px" }} />
        </div>
        <div className="popupForm-userInfo-data">
          <p style={{ fontWeight: "bolder" }}>Ricardo Camacho</p>
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
    </form>
  );
}

export default PopupForm;
