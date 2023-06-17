import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({ baseUrl: __API__ }),
  endpoints: (builder) => ({}),
});
