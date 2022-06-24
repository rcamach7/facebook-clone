import { configureStore } from "@reduxjs/toolkit";
import { jwtReducer } from "./jwt/jwtSlice";
import { userReducer } from "./user/userSlice";

export const store = configureStore({
  reducer: { jwtToken: jwtReducer, user: userReducer },
});
