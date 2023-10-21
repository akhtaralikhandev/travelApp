import { apiSlice } from "../api/apiSlice";

export const formulasApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getFormula: builders.query({
      query: (name) => ({
        url: `/formulas/${name}`,
        method: "GET",
      }),
    }),
    getFormulas: builders.query({
      query: () => ({
        url: `/formulas`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFormulasQuery, useGetFormulaQuery } = formulasApi;
