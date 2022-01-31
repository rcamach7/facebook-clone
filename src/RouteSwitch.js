import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import stockPic from "./assets/elon.jpeg";

const RouteSwitch = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Test Data with specific userID
    const testUser = {
      fullName: "Elon Musk",
      username: "theRealElon",
      icon: stockPic,
      userId: "8c5e95ba-f122-4972-93a5-5569634a4c53",
    };
    setUserInfo(testUser);
  }, []);

  return (
    <BrowserRouter>
      <Navbar icon={userInfo.icon} />
      <Routes>
        <Route path="/facebook-clone" element={<App />} />
        <Route path="/facebook-clone/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
