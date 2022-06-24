import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwtToken",
  initialState: { value: localStorage.getItem("token") },
  reducers: {
    updateToken: (state, action) => {
      state.value = action.payload;
    },
    removeToken: (state) => {
      state.value = null;
    },
  },
});

export const { updateToken, removeToken } = jwtSlice.actions;

export const jwtReducer = jwtSlice.reducer;
