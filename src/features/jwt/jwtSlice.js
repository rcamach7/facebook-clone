import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwtToken",
  initialState: { value: localStorage.getItem("token") },
  reducers: {
    updateToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.value = action.payload;
    },
    removeToken: (state) => {
      localStorage.removeItem("token");
      state.value = null;
    },
  },
});

export const { updateToken, removeToken } = jwtSlice.actions;

export const jwtReducer = jwtSlice.reducer;
