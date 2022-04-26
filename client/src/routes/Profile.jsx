import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [status, setStatus] = useState({});
  const [user, setUser] = useState({});
  const [profilePicture, setProfilePicture] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status) {
      navigate("/facebook-clone/");
    }

    return () => {};
  }, [navigate, status]);

  return (
    <div className="Profile">
      <header>
        <Navbar icon={profilePicture} />
      </header>
      <div className="profile-main">
        <img src={profilePicture} alt="" />

        <div className="profile-userInfo">
          <h1>{user.fullName}</h1>
          <p>
            <strong>UserName: </strong>
            {user.userName}
          </p>
          <p>
            <strong>Email: </strong>
            {user.email}
          </p>
          <p>
            <strong>My ID: </strong>
            {user.userId}
          </p>
        </div>

        <button className="profile-signOut">Sign Out</button>
        <button className="profile-EditInfo">Edit Account Info</button>
      </div>
    </div>
  );
};

export default Profile;
