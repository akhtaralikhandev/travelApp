import { createSlice } from '@reduxjs/toolkit';
import { SalonProfileListItems } from '../store/SalonProfileListItems';

// const apiEndpoint = apiUrl.url + "/acupunctures";


const initialState = {
  salonprofilelist: SalonProfileListItems
};

export const salonSlice = createSlice({
  name: 'salon',
  initialState,

});

export default salonSlice.reducer;
