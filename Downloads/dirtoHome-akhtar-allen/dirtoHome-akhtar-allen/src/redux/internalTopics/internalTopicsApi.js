import { apiSlice } from "../api/apiSlice";

export const internalTopicsApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getInternalTopics: builders.query({
      query: () => ({
        url: `/internaltopics`,
        method: "GET",
      }),
    }),
    createInternalTopic: builders.mutation({
      query: (topic) => ({
        url: `/internaltopics`,
        method: "POST",
        body: topic,
      }),
    }),
  }),
});

export const { useGetInternalTopicsQuery, useCreateInternalTopicMutation } =
  internalTopicsApi;
