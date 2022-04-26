import Navbar from "../components/Navbar";
import { useContext } from "react";
import { UserContext } from "../RouteSwitch";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Profile">
      <header>
        <Navbar icon={user ? user.profilePicture : null} />
      </header>
      <div className="profile-main">
        <img src={user ? user.profilePicture : null} alt="" />

        <div className="profile-userInfo">
          <h1>{user ? user.fullName : null}</h1>
          <p>
            <strong>UserName: </strong>
            {user ? user.username : null}
          </p>
        </div>

        <button className="profile-signOut">Sign Out</button>
        <button className="profile-EditInfo">Edit Account Info</button>
      </div>
    </div>
  );
};

export default Profile;
