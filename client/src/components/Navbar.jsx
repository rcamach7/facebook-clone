import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { UserContext } from "../RouteSwitch";
import { useContext } from "react";

function Navbar(props) {
  const { user } = useContext(UserContext);

  return (
    <nav className="Navbar">
      <ul className="navbar-leftMenu">
        <Link to="/facebook-clone/home" className="leftMenu-item logo">
          <img src={logo} alt="" />
        </Link>
        <li className="leftMenu-item search">
          <FontAwesomeIcon icon="search" size="2x" />
          <form className="navbar-form">
            <input
              className="search-input"
              placeholder="Search Facebook"
              type="text"
            />
          </form>
        </li>
      </ul>

      <ul className="navbar-menu">
        <Link to="/facebook-clone/home" className="menu-item">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <li className="menu-item">
          <FontAwesomeIcon icon="user-friends" size="2x" />
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon="video" size="2x" />
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon="store" size="2x" />
        </li>
        <li className="menu-item">
          <FontAwesomeIcon icon="users" size="2x" />
        </li>
      </ul>

      <ul className="navbar-rightMenu">
        <Link to="/facebook-clone/profile" className="rightMenu-item">
          {user ? <img src={user.profilePicture} alt="" /> : null}
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
