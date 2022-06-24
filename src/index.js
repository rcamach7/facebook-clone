import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./features/store";

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
  <Provider store={store}>
    <RouteSwitch myToken={myToken} />
  </Provider>,
  document.getElementById("root")
);
