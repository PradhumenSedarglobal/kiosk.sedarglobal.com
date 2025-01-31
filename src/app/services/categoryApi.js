import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "https://uatapi.sedarglobal.com";

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl }), 
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/kiosk/categories', 
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
