import { useState, useEffect } from "react";
import { getUser } from "../assets/api";

export default function useFetchUser(storedJwt, setStoredJwt) {
  const [user, setUser] = useState(null);

  // Get user data if JWT token exists but we haven't requested user data.
  useEffect(() => {
    // Retrieve user data and update state.
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (error) {
        // Token might be expired, or API is down.
        localStorage.removeItem("token");
        setUser(null);
        setStoredJwt(null);
      }
    };

    if (storedJwt !== null) {
      fetchUser();
    } else if (user === null && storedJwt !== null) {
      fetchUser();
    }
  }, [user, storedJwt, setStoredJwt]);

  return [user, setUser];
}
