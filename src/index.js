import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
import { Provider } from "react-redux";
import { store } from "./features/store";

ReactDOM.render(
  <Provider store={store}>
    <RouteSwitch />
  </Provider>,
  document.getElementById("root")
);
