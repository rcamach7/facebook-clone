import Home from "./routes/Home";
import LandingPage from "./routes/LandingPage";
import Profile from "./routes/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/facebook-clone/" element={<LandingPage />} />
        <Route path="/facebook-clone/home" element={<Home />} />
        <Route path="/facebook-clone/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/facebook-clone/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
