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
  const storedJwt = useJwtToken();
  const [user, setUser] = useFetchUser();
  const [posts, setPosts] = useFetchPosts();

  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser, posts, setPosts }}>
        <Routes>
          <Route
            path="/facebook-clone/"
            element={
              <NotAuthenticated storedJwt={storedJwt}>
                <LandingPage />
              </NotAuthenticated>
            }
          />
          <Route
            path="/facebook-clone/home"
            element={
              <RequireAuth storedJwt={storedJwt}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/facebook-clone/profile/:username"
            element={
              <RequireAuth storedJwt={storedJwt}>
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
