import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const useJwtToken = () => {
  const jwtToken = useSelector((state) => state.jwtToken.value);

  // Updates the header will the most current JWT token, whenever its value changes.
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        if (jwtToken) {
          config.headers.authorization = `Bearer ${jwtToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, [jwtToken]);
};

export default useJwtToken;
