import { useState, useEffect } from "react";
import { getUser } from "../assets/api";
import { useDispatch } from "react-redux";
import { removeToken } from "../features/jwt/jwtSlice";

export default function useFetchUser(storedJwt) {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  // Get user data if JWT token exists but we haven't requested user data.
  useEffect(() => {
    // Retrieve user data and update state.
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (error) {
        // Token might be expired, or API is down.
        setUser(null);
        localStorage.removeItem("token");
        dispatch(removeToken());
      }
    };

    if (user === null && storedJwt !== null) {
      fetchUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, storedJwt]);

  return [user, setUser];
}
