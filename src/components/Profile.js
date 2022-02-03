import "../styles/Profile.css";
import Navbar from "./Navbar";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseConfig } from "../data/config";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const firebaseApp = initializeApp(getFirebaseConfig());
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    try {
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (!user) {
      navigate("/facebook-clone/");
    }
  }, [navigate, user]);

  const handleSignOut = async () => {
    signOut(auth);
  };

  return (
    <div className="Profile">
      <header>
        <Navbar />
      </header>
      <div className="profile-main">
        <h1>Hello User!</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
