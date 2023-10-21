import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./Acupunture/alphabetSlice";
import acupointSlice from "./Acupunture/acupointSlice";
import clinicsSlice from "./clinicsSlics";
import filterReducer from "./filters/filterSlice";
import salonSlice from "./salonSlice";

export default combineReducers({
  clinics: clinicsSlice,
  acudata: dataSlice,
  acupoint: acupointSlice,
  salon: salonSlice,
  filter: filterReducer,
});
