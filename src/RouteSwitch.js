import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "./App";
import LandingPage from "./LandingPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirebaseConfig } from "./data/config";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(getFirebaseConfig());
const auth = getAuth(firebaseApp);

const RouteSwitch = () => {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/facebook-clone" element={<LandingPage user={user} />} />
        <Route path="/facebook-clone/home" element={<App user={user} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
