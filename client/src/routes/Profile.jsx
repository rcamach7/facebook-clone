import Navbar from "../components/Navbar";
import { getFirebaseConfig } from "../data/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";

const Profile = () => {
  const [status, setStatus] = useState({});
  const [user, setUser] = useState({});
  const [profilePicture, setProfilePicture] = useState();
  const firebaseApp = initializeApp(getFirebaseConfig());
  const storage = getStorage(firebaseApp);
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

          getDownloadURL(ref(storage, `${userData.userId}.jpeg`)).then(
            (url) => {
              setProfilePicture(url);
            }
          );
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

        <button className="profile-signOut" onClick={handleSignOut}>
          Sign Out
        </button>
        <button className="profile-EditInfo">Edit Account Info</button>
      </div>
    </div>
  );
};

export default Profile;
