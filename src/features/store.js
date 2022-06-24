import { configureStore } from "@reduxjs/toolkit";
import { jwtReducer } from "./jwt/jwtSlice";
import { userReducer } from "./user/userSlice";
import { postsReducer } from "./posts/postsSlice";

export const store = configureStore({
  reducer: { jwtToken: jwtReducer, user: userReducer, posts: postsReducer },
});
