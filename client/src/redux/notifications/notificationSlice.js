import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notification_slice",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.notifications = action.payload;
    },
    deleteNotification: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { setNotification, deleteNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
