import { apiSlice } from "../api/apiSlice";

export const beautysalonsApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getFormulas: builders.query({
      query: (name) => ({
        url: `/beautysalons/${name}`,
        method: "GET",
      }),
    }),
    getFormula: builders.query({
      query: () => ({
        url: `/beautysalons`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBeautySalonQuery, useGetBeautySalonQuery } = beautysalonsApi;
