import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../redux/api/apiSlice";
import entities from "../redux/entities";
import api from "../redux/middleware/api";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    entities,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat([apiSlice.middleware, api]),
});
