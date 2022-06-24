import { createSlice } from "@reduxjs/toolkit";

export const jwtSlice = createSlice({
  name: "jwtToken",
  initialState: { value: localStorage.getItem("token") },
  reducers: {
    updateToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateToken } = jwtSlice.actions;

export const jwtReducer = jwtSlice.reducer;
