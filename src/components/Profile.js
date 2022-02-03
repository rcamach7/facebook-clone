import "../styles/Profile.css";
import Navbar from "./Navbar";
import { getFirebaseConfig } from "../data/config";
import { initializeApp } from "firebase/app";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const firebaseApp = initializeApp(getFirebaseConfig());
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  let x = false;

  onAuthStateChanged(auth, (user) => {
    if (!x) {
      setUser(user);
    }
  });

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/facebook-clone/");
    }

    return () => {};
  }, [navigate, user]);

  const handleSignOut = () => {
    x = true;
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
