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

      <ul className="technologies-squares">
        <li className="squares-item library">react</li>
        <li className="squares-item library">moment</li>
        <li className="squares-item library">fortAwesome</li>
        <li className="squares-item library">uuid</li>
        <li className="squares-item library">firebase</li>
        <li className="squares-item techItem">npm</li>
        <li className="squares-item techItem">git/github</li>
        <li className="squares-item techItem">components</li>
        <li className="squares-item techItem">router-dom</li>
        <li className="squares-item techItem">state</li>
        <li className="squares-item techItem">props</li>
        <li className="squares-item techItem">hooks</li>
        <li className="squares-item techItem">JSON</li>
        <li className="squares-item techItem">form validation</li>
        <li className="squares-item techItem">sass</li>
        <li className="squares-item techItem">media queries</li>
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
