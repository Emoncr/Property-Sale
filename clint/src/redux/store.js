import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
