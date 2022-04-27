import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { UserContext } from "../RouteSwitch";
import { useContext } from "react";
import {
  faHouseUser,
  faSearch,
  faStore,
  faUserGroup,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <nav className="Navbar">
      <ul className="navbar-leftMenu">
        <Link to="/facebook-clone/home" className="leftMenu-item logo">
          <img
            src="https://res.cloudinary.com/de2ymful4/image/upload/v1650948572/facebook/assets/logo_haceh1.png"
            alt=""
          />
        </Link>
        <li className="searchItem">
          <FontAwesomeIcon icon={faSearch} size="2x" />
          <form className="navbar-form">
            <input placeholder="Search Facebook" type="text" />
          </form>
        </li>
      </ul>

      <ul className="navbar-menu"></ul>

      <ul className="navbar-rightMenu">
        <Link to="/facebook-clone/profile" className="rightMenu-item">
          {user ? <img src={user.profilePicture} alt="" /> : null}
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
