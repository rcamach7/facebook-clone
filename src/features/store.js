import { configureStore } from "@reduxjs/toolkit";
import { jwtReducer } from "./jwt/jwtSlice";

export const store = configureStore({ reducer: { jwtToken: jwtReducer } });
