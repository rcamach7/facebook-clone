import "./styles/index.scss";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useFetchPosts, useFetchUser, useJwtToken } from "./hooks";
import Home from "./routes/Home";
import LandingPage from "./routes/LandingPage";
import Profile from "./routes/Profile";
import { NotAuthenticated, RequireAuth } from "./components/routeProtections";

export default function RouteSwitch() {
  // Custom hooks that manage redux store values based on user status and actions.
  useJwtToken();
  useFetchPosts();
  useFetchUser();

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/facebook-clone/"
          element={
            <NotAuthenticated>
              <LandingPage />
            </NotAuthenticated>
          }
        />
        <Route
          path="/facebook-clone/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        {/* Dynamic routing used to visit different user profiles */}
        <Route
          path="/facebook-clone/profile/:username"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/facebook-clone/" />} />
      </Routes>
    </HashRouter>
  );
}
