import "./styles/index.css";
import "./styles/scss/index.scss";
import Home from "./routes/Home";
import LandingPage from "./routes/LandingPage";
import React from "react";
import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import useFetchUser from "./hooks/useFetchUser";
import useFetchPosts from "./hooks/useFetchPosts";

// Send all requests with our authentication token - if it exists.
const myToken = localStorage.getItem("token");
axios.interceptors.request.use(
  (config) => {
    if (myToken) {
      config.headers.authorization = `Bearer ${myToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Export user context to provide to any children components who need it.
export const UserContext = React.createContext();

const RouteSwitch = () => {
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
          {/* <Route path="/facebook-clone/profile" element={<Profile />} /> */}
          <Route path="*" element={<Navigate to="/facebook-clone/" />} />
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
};

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

export default RouteSwitch;
