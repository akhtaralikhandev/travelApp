import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterByCharacter } = filterSlice.actions;
