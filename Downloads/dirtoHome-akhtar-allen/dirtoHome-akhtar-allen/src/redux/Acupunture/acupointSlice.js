import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nav: '',
  acupagelink: '',
  activeid: null,
  acupointlinkload: false,
  navdata: []
};

export const acupointSlice = createSlice({
  name: 'acupoint',
  initialState,
  reducers: {
    activeNav: (state, action) => {
      state.nav = action.payload;
    },
    acuPageLink: (state, action) => {
      state.acupagelink = action.payload;
      state.acupointlinkload = true;
    },
    activeId: (state, action) => {
      state.activeid = action.payload;
    },
    navdata: (state, action) => {
      state.navdata = action.payload;
    }
  },
});

export const {
  navdata,
  activeNav,
  acuPageLink,
  activeId
} = acupointSlice.actions;

export const selectAcuPoint = (state) => state.acupoint;

export default acupointSlice.reducer;
