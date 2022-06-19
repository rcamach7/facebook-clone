import "./styles/index.scss";
import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./hooks/useUserContext";
import useFetchUser from "./hooks/useFetchUser";
import useFetchPosts from "./hooks/useFetchPosts";
import Home from "./routes/Home";
import LandingPage from "./routes/LandingPage";
import Profile from "./routes/Profile";

export default function RouteSwitch({ myToken }) {
  const [storedJwt, setStoredJwt] = useState(myToken);
  const [user, setUser] = useFetchUser(storedJwt, setStoredJwt);
  const [posts, setPosts] = useFetchPosts(storedJwt);

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

// Protects routes that require authentication
function RequireAuth({ children, storedJwt }) {
  return storedJwt === null ? (
    <Navigate to="/facebook-clone" replace />
  ) : (
    children
  );
}

// Once authenticated, we don't want our users to continue in the landing page / sign in page.
function NotAuthenticated({ children, storedJwt }) {
  return storedJwt === null ? (
    children
  ) : (
    <Navigate to="/facebook-clone/home" replace />
  );
}
