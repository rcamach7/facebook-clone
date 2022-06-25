import "./styles/index.scss";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./hooks/useUserContext";
import useFetchUser from "./hooks/useFetchUser";
import useFetchPosts from "./hooks/useFetchPosts";
import Home from "./routes/Home";
import LandingPage from "./routes/LandingPage";
import Profile from "./routes/Profile";
import { useJwtToken } from "./hooks/useJwtToken";
import { NotAuthenticated, RequireAuth } from "./components/routeProtections";

export default function RouteSwitch() {
  useJwtToken();
  useFetchPosts();
  const [user, setUser] = useFetchUser();

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </HashRouter>
  );
}
