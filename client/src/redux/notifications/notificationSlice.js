import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationsDB: [],
  conversationActive: { chatId: "" },
};

const notificationSlice = createSlice({
  name: "notification_slice",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      state.notificationsDB = action.payload;
    },
    deleteNotification: (state, action) => {
      state.notificationsDB.pop(action.payload);
    },
    setSingleNotification: (state, action) => {
      state.notificationsDB.push(action.payload);
    },
  },
});

export const {
  setNotification,
  deleteNotification,
  setSingleNotification,
  setConversationActive,
} = notificationSlice.actions;

export default notificationSlice.reducer;
