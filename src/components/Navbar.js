import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="navbar-leftMenu">
        <li className="leftMenu-item logo">
          <img src={logo} alt="" />
        </li>
        <li className="leftMenu-item search">
          <FontAwesomeIcon icon="search" size="2x" />
          <form>
            <input className="search-input" type="text" />
          </form>
        </li>
      </ul>

      <ul className="navbar-menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Friends</li>
        <li className="menu-item">Videos</li>
        <li className="menu-item">Marketplace</li>
        <li className="menu-item">Groups</li>
      </ul>

      <ul className="navbar-rightMenu">
        <li className="rightMenu-item">User</li>
      </ul>
    </nav>
  );
}

export default Navbar;
