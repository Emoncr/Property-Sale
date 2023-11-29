import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationsDB: [],
};

const notificationSlice = createSlice({
  name: "notification_slice",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.notificationsDB = action.payload;
    },
    deleteNotification: (state, action) => {
      state.notificationsDB = action.payload;
    },
  },
});

export const { setNotification, deleteNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
