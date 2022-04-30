import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faHistory,
  faBookmark,
  faFlag,
  faNewspaper,
  faCalendarTimes,
  faUserGroup,
  faCircleXmark,
  faVideo,
  faStore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../RouteSwitch";
import { useContext } from "react";

function LeftSideBar() {
  const { user } = useContext(UserContext);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <aside className="LeftSideBar">
      <ul className="leftSideBar-nav">
        <Link to="/facebook-clone/profile" className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder icon">
            {user ? <img src={user.profilePicture} alt="" /> : null}
          </span>
          {user ? <span>{user.fullName}</span> : null}
        </Link>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-lightBlue">
            <FontAwesomeIcon icon={faUserGroup} />
          </span>
          Find Friends
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon={faUsers} />
          </span>
          Groups
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon={faStore} />
          </span>
          Market Place
        </li>
        <li className="leftSideBar-nav-item">
          <span className="nav-item-iconHolder fb-blue">
            <FontAwesomeIcon icon={faVideo} />
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
        <li className="leftSideBar-nav-item" onClick={() => handleLogOut()}>
          <span className="nav-item-iconHolder">
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          Log Out
        </li>
      </ul>
    </aside>
  );
}

export default LeftSideBar;
