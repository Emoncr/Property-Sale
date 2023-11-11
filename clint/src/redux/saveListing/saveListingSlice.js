import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveListings: [],
};

const saveSlice = createSlice({
  name: "saved_listings",
  initialState,
  reducers: {
    handleSave: (state, action) => {
      state.saveListings = [...state.saveListings, action.payload];
    },
    handleLisingRemove: (state, action) => {
      state.saveListings = action.payload;
    },
  },
});

export const { handleSave, handleLisingRemove } = saveSlice.actions;

export default saveSlice.reducer;
