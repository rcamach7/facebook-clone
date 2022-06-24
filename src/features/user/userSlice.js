import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: localStorage.getItem("token") },
  reducers: {},
});

export const {} = userSlice.actions;

export const jwtReducer = userSlice.reducer;
