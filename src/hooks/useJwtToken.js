import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const useJwtToken = () => {
  const jwtToken = useSelector((state) => state.jwtToken.value);

  // Updates the header will the most current JWT token, whenever its value changes.
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
  }, [jwtToken]);
};

export default useJwtToken;
