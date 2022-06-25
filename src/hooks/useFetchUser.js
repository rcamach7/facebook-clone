import { useEffect } from "react";
import { getUser } from "../assets/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser, removeUser } from "../features/user/userSlice";
import { removeToken } from "../features/jwt/jwtSlice";

export default function useFetchUser() {
  const user = useSelector((state) => state.user.value);
  const jwtToken = useSelector((state) => state.jwtToken.value);
  const dispatch = useDispatch();

  // Get user data if JWT token exists but we haven't requested user data.
  useEffect(() => {
    // Retrieve user data and update state.
    const fetchUser = async () => {
      try {
        const user = await getUser();
        dispatch(setUser(user));
      } catch (error) {
        // Token might be expired, or API is down.
        dispatch(removeUser());
        dispatch(removeToken());
      }
    };

    if (user === null && jwtToken !== null) {
      fetchUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, jwtToken]);

  return [user, null];
}
