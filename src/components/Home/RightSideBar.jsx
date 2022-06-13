import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const libraryTechnologies = [
  "react",
  "jwt tokens",
  "user authentication",
  "protected routes",
  "custom hooks",
  "context api",
  "page routing",
  "font awesome icons",
  "uuid",
];

const techItems = [
  "npm",
  "git/github",
  "router-dom",
  "state",
  "props",
  "JSON",
  "form validation",
  "scss",
  "media queries",
];

function RightSideBar(props) {
  return (
    <aside className="RightSideBar">
      <ul className="technologies">
        <li className="technologies-item title">Technologies Used</li>
        <li className="technologies-item">
          <img
            src="https://res.cloudinary.com/de2ymful4/image/upload/v1650948572/facebook/assets/react_afs7eh.png"
            alt=""
          />
        </li>
        <li className="technologies-item">
          <img
            src="https://res.cloudinary.com/de2ymful4/image/upload/v1650948572/facebook/assets/stack_vlfik3.jpg"
            alt=""
          />
        </li>
      </ul>

      <ul className="technologies-squares">
        {libraryTechnologies.map((libraryItem) => {
          return (
            <li key={libraryItem} className="squares-item library">
              {libraryItem}
            </li>
          );
        })}
        {techItems.map((item) => {
          return (
            <li key={item} className="squares-item techItem">
              {item}
            </li>
          );
        })}
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
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Create new group
      </button>
    </aside>
  );
}

export default RightSideBar;
