import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: { value: null },
  reducers: {
    setPosts: (state, action) => {
      state.value = action.payload;
    },
    removePosts: (state) => {
      state.value = null;
    },
  },
});

export const { setPosts, removePosts } = postsSlice.actions;

export const userReducer = postsSlice.reducer;
