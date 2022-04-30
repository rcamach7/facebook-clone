import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
import axios from "axios";

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

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch myToken={myToken} />
  </React.StrictMode>,
  document.getElementById("root")
);
