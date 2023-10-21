import { apiSlice } from "../api/apiSlice";

export const acupunturesApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getAcupunture: builders.query({
      query: (name) => ({
        url: `/acupunctures/${name}`,
        method: "GET",
      }),
    }),
    getAcupuntures: builders.query({
      query: () => ({
        url: `/acupunctures`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAcupunturesQuery, useGetAcupuntureQuery } = acupunturesApi;
