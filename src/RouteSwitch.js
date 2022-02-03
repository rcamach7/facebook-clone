import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/facebook-clone/" element={<LandingPage />} />
        <Route path="/facebook-clone/home" element={<Home />} />
        <Route path="/facebook-clone/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
