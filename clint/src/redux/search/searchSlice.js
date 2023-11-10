import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTermState: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTermState: (state, action) => {
      state.searchTermState = action.payload;
    },
  },
});

export const { setSearchTermState, } = searchSlice.actions;

export default searchSlice.reducer;
