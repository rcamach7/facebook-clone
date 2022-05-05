import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { UserContext } from "../RouteSwitch";
import { useContext } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LoadingUx from "./LoadingUx";

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
          <FontAwesomeIcon icon={faSearch} className="searchIcon" size="2x" />
          <form className="navbar-form">
            <input placeholder="Search Facebook" type="text" />
          </form>
        </li>
      </ul>

      <ul className="navbar-menu"></ul>

      <ul className="navbar-rightMenu">
        <Link to="/facebook-clone/profile" className="rightMenu-item">
          {user ? <img src={user.profilePicture} alt="" /> : <LoadingUx />}
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
