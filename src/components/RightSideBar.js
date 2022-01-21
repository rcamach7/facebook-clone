import "../styles/RightSideBar.css";
import reactLogo from "../assets/react.png";
import firebaseLogo from "../assets/firebase.png";
import stack from "../assets/stack.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightSideBar() {
  return (
    <div className="RightSideBar">
      <ul className="technologies">
        <li className="technologies-item title">Technologies Used</li>
        <li className="technologies-item">
          <img src={reactLogo} alt="" />
        </li>
        <li className="technologies-item">
          <img src={firebaseLogo} alt="" />
        </li>
        <li className="technologies-item">
          <img src={stack} alt="" />
        </li>
      </ul>

      <p className="rightSideBar-section">Group Conversations</p>
      <button>
        <span className="newGroup-icon">
          <FontAwesomeIcon icon="plus" />
        </span>
        Create new group
      </button>
    </div>
  );
}

export default RightSideBar;
