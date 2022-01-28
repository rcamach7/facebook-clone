import "../../styles/RightSideBar.css";
import reactLogo from "../../assets/react.png";
import firebaseLogo from "../../assets/firebase.png";
import stack from "../../assets/stack.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightSideBar(props) {
  return (
    <aside className="RightSideBar">
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

      <p className="rightSideBar-section">
        Group Conversation
        <span
          style={{ cursor: "pointer" }}
          onClick={() => props.loadTestData()}
        >
          s
        </span>
      </p>
      <button>
        <span className="newGroup-icon">
          <FontAwesomeIcon icon="plus" />
        </span>
        Create new group
      </button>
    </aside>
  );
}

export default RightSideBar;
