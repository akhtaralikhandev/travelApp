import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

export const INITIAL_PAGE_LENGTH = 50;

const initialState = {
  list: [],
  status: "idle",
  filter: "all",
  acudata: { descriptions: [] },
  pageLength: INITIAL_PAGE_LENGTH,
  error: false,
  dataLink: "",
  acudataloading: "loading",
  progress: 0,
  cookieaccept: false,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    activeFilter: (state, action) => {
      state.filter = action.payload;
    },
    data: (state, action) => {
      state.list = action.payload;
      state.status = "loaded";
    },
    loading: (state, action) => {
      state.status = "loading";
    },
    headingData: (state, action) => {
      state.acudata = action.payload;
      state.acudataloading = "loaded";
    },
    error: (state, action) => {
      state.status = "error";
    },
    setDataLink: (state, action) => {
      state.dataLink = action.payload;
      state.acudataloading = "loading";
    },
    changepaginationvisiblity: (state, action) => {
      state.acudata.paginationvisible = action.payload;
    },
    Progress: (state, action) => {
      state.progress =
        state.progress === 100 ? 0 + action.payload : state.progress + action.payload;
    },
    setCookieAccept: (state, action) => {
      state.cookieaccept = action.payload;
    },
    setPageLength: (state, action) => {
      state.pageLength = action.payload;
    },
  },
});

export const {
  Progress,
  activeFilter,
  data,
  loading,
  headingData,
  error,
  setDataLink,
  changepaginationvisiblity,
  setCookieAccept,
  setPageLength,
} = dataSlice.actions;

export const selectData = (state) => state.data;

export const loadData = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url: "/acupunctures",
      onStart: loading.type,
      onSuccess: data.type,
      onError: error.type,
    })
  );
};

export default dataSlice.reducer;