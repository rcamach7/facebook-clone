import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Protects routes that require authentication
export function RequireAuth({ children }) {
  const jwtToken = useSelector((state) => state.jwtToken.value);

  return jwtToken === null ? (
    <Navigate to="/facebook-clone" replace />
  ) : (
    children
  );
}

// Once authenticated, we don't want our users to continue in the landing page / sign in page.
export function NotAuthenticated({ children }) {
  const jwtToken = useSelector((state) => state.jwtToken.value);

  return jwtToken === null ? (
    children
  ) : (
    <Navigate to="/facebook-clone/home" replace />
  );
}
