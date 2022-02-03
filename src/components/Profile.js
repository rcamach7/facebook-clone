import "../styles/Profile.css";
import Navbar from "./Navbar";
import { getFirebaseConfig } from "../data/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const Profile = () => {
  const [status, setStatus] = useState({});
  const [user, setUser] = useState({});
  const firebaseApp = initializeApp(getFirebaseConfig());
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (status) => {
    setStatus(status);
  });

  useEffect(() => {
    if (!status) {
      return;
    }
    if (status.uid) {
      const docRef = doc(getFirestore(), "users", status.uid);
      const loadData = async () => {
        const docSnap = await getDoc(docRef);

        // Not a new user
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUser({
            fullName: userData.fullName,
            userName: userData.userName,
            email: userData.email,
            icon: userData.icon,
            userId: userData.userId,
          });
        }
      };
      loadData();
    }
  }, [status]);

  useEffect(() => {
    if (!status) {
      navigate("/facebook-clone/");
    }

    return () => {};
  }, [navigate, status]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="Profile">
      <header>
        <Navbar icon={user.icon} />
      </header>
      <div className="profile-main">
        <h1>Hello {user.fullName}</h1>
        <p>UserName: {user.userName}</p>
        <p>Email: {user.email}</p>
        <p>UserID: {user.userId}</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Profile;
