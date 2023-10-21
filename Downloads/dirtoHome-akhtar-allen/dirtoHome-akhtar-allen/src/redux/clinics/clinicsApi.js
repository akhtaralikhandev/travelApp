import { apiSlice } from "../api/apiSlice";

export const clinicsApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getFormulas: builders.query({
      query: (name) => ({
        url: `/clinics/${name}`,
        method: "GET",
      }),
    }),
    getFormula: builders.query({
      query: () => ({
        url: `/clinics`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetClinicQuery, useGetClinicQuery } = clinicsApi;
