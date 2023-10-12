import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  lodding: false,
  signinError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loddingStart: (state) => {
      state.lodding = true;
    },
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.lodding = false;
      state.signinError = false;
    },
    signinFailed: (state, action) => {
      state.signinError = action.payload;
      state.lodding = false;
    },
  },
});

export const { loddingStart, signinSuccess, signinFailed } = userSlice.actions;

export default userSlice.reducer;
