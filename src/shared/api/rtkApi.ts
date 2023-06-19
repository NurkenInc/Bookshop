import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = import.meta.env.VITE_GOOGLE_BOOKS_API_BASE_URL;

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}` }),
  endpoints: (builder) => ({}),
});
