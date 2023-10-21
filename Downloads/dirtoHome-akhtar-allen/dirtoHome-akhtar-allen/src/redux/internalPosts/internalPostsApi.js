import { apiSlice } from "../api/apiSlice";

export const internalPostsApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getInternalPosts: builders.query({
      query: () => ({
        url: `/internalposts`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetInternalPostsQuery } = internalPostsApi;
