import "../../styles/LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faHistory,
  faBookmark,
  faFlag,
  faNewspaper,
  faCalendarTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function LeftSideBar(props) {
  return (
    <aside className="LeftSideBar">
      <ul className="leftSideBar-nav">
        <Link to="/facebook-clone/profile" className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder icon">
            <img src={props.userInfo.icon} alt="" />
          </span>
          {props.userInfo.fullName}
        </Link>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-lightBlue">
            <FontAwesomeIcon icon="user-friends" />
          </span>
          Find Friends
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon="users" />
          </span>
          Groups
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon="store" />
          </span>
          Market Place
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon="video" />
          </span>
          Watch
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-lightBlue">
            <FontAwesomeIcon icon={faHistory} />
          </span>
          Memories
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-purple">
            <FontAwesomeIcon icon={faBookmark} />
          </span>
          Saved
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-orange">
            <FontAwesomeIcon icon={faFlag} />
          </span>
          Pages
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon={faNewspaper} />
          </span>
          News
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-red">
            <FontAwesomeIcon icon={faCalendarTimes} />
          </span>
          Events
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder">
            <FontAwesomeIcon icon={faCaretSquareDown} />
          </span>
          See More
        </li>
      </ul>
    </aside>
  );
}

export default LeftSideBar;
