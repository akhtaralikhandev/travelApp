import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../config/config";
import { getJwt } from "../../services/authservice";

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl.url,
  prepareHeaders: async (headers, { getState }) => {
    const token = getJwt();
    if (token) {
      // headers.set("Authorization", `Bearer ${token}`);
      headers.set("x-auth-token", token);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({}),
});
