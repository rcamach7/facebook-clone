import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

export const useJwtToken = () => {
  const jwtToken = useSelector((state) => state.jwtToken.value);

  useEffect(() => {
    // axios.interceptors.request.use(
    //   (config) => {
    //     if (myToken) {
    //       config.headers.authorization = `Bearer ${myToken}`;
    //     }
    //     return config;
    //   },
    //   (error) => {
    //     return Promise.reject(error);
    //   }
    // );
    console.log(jwtToken);
  }, [jwtToken]);

  return jwtToken;
};
