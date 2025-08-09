import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveListings: [],
};

const saveSlice = createSlice({

  name: "saved_listings",
  initialState,
  
  reducers: {
    handleSave: (state, action) => {
      state.saveListings.push(action.payload);
    },
    handleLisingRemove: (state, action) => {
      state.saveListings = action.payload;
    },
    clearSavedListing: (state) => {
      state.saveListings = [];
    },
  },
});

export const { handleSave, handleLisingRemove,clearSavedListing } = saveSlice.actions;

export default saveSlice.reducer;
