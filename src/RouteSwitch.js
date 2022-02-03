import App from "./App";
import LandingPage from "./LandingPage";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { getFirebaseConfig } from "./data/config";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const RouteSwitch = () => {
  const [user, setUser] = useState();
  const firebaseApp = initializeApp(getFirebaseConfig());
  const auth = getAuth(firebaseApp);

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/facebook-clone/" element={<LandingPage user={user} />} />
        <Route path="/facebook-clone/home" element={<App user={user} />} />
        <Route
          path="/facebook-clone/profile"
          element={<Profile />}
          user={user}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
