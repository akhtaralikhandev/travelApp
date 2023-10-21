import { apiSlice } from "../api/apiSlice";

export const companiesApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getCompanies: builders.query({
      query: (name) => ({
        url: `/compamies/${name}`,
        method: "GET",
      }),
    }),
    getCompany: builders.query({
      query: () => ({
        url: `/clinics`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCompanyQuery, useGetCompanyQuery } = companiesApi;
