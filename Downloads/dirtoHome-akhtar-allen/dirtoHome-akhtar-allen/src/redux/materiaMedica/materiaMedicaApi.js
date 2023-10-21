import { apiSlice } from "../api/apiSlice";

export const amateriamedicaApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getMateriaMedica: builders.query({
      query: (id) => ({
        url: `/materiamedicas/${id}`,
        method: "GET",
      }),
    }),
    getMateriaMedicas: builders.query({
      query: () => ({
        url: `/materiamedicas`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMateriaMedicaQuery, useGetMateriaMedicasQuery } = amateriamedicaApi;
