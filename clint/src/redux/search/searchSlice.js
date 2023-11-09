import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQueryState: "",
  searchTermState: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQueryState = action.payload;
    },
    setSearchTermState: (state, action) => {
      state.searchTermState = action.payload;
    },
  },
});

export const { setSearchTermState, setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
