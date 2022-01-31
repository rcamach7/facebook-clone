import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="Navbar">
      <ul className="navbar-leftMenu">
        <Link to="/facebook-clone/" className="leftMenu-item logo">
          <img src={logo} alt="" />
        </Link>
        <li className="leftMenu-item search">
          <FontAwesomeIcon icon="search" size="2x" />
          <form>
            <input
              className="search-input"
              placeholder="Search Facebook"
              type="text"
            />
          </form>
        </li>
      </ul>

      <ul className="navbar-menu">
        <Link to="/facebook-clone/" className="menu-item">
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
          <img src={props.icon} alt="" />
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
