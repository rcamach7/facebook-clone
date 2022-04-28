import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../RouteSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCamera,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import ProfileOverview from "../components/Profile/ProfileOverview";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Profile">
      <header>
        <Navbar icon={user ? user.profilePicture : null} />
      </header>
      {/* First major section of page - showcasing user image, name, and a sub navbar */}
      <ProfileOverview user={user} />
    </div>
  );
};

export default Profile;
