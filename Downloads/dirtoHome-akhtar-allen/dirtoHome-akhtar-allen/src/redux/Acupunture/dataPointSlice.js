import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nav: "",
  activeid: null,
  acupointlinkload: false,
  navdata: [],
};

export const acupointSlice = createSlice({
  name: "acupoint",
  initialState,
  reducers: {
    activeNav: (state, action) => {
      state.nav = action.payload;
    },
    activeId: (state, action) => {
      state.activeid = action.payload;
    },
    navdata: (state, action) => {
      state.navdata = action.payload;
    }
  },
});

export const { activeNav, activeId, navdata } = acupointSlice.actions;

export const selectAcuPoint = (state) => state.acupoint;

export default acupointSlice.reducer;