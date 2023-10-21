import { createSlice } from '@reduxjs/toolkit';
// import { ClinicsProfileListItems } from '../store/ClinicProfileListItems';

// const apiEndpoint = apiUrl.url + "/acupunctures";


const initialState = {
  countrylist: [],
  clinicprofilelist: []
};

export const clinicsSlice = createSlice({
  name: 'clinics',
  initialState,
  reducers: {
    countryList : ( state, action )=>{ 
        state.countrylist = action.payload;
    },
    addDataProfileSalonAndClinics: ( state , action )=>{
      state.clinicprofilelist = action.payload
    }
  },

});

export const {
    countryList,
    addDataProfileSalonAndClinics
} = clinicsSlice.actions;


export const selectClinics = (state) => state.acupoint;


export default clinicsSlice.reducer;
