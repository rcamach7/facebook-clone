import Home from "./routes/Home";
import LandingPage from "./routes/LandingPage";
import Profile from "./routes/Profile";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/facebook-clone/" element={<LandingPage />} />
        <Route path="/facebook-clone/home" element={<Home />} />
        <Route path="/facebook-clone/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/facebook-clone/" />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;
