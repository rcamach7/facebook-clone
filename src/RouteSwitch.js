import { BrowserRouter, Routes, Route, resolvePath } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "./App";
import LandingPage from "./LandingPage";
import Profile from "./components/Profile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseConfig } from "./data/config";
import { initializeApp } from "firebase/app";

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
