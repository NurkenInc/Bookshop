import { rtkApi } from '@/shared/api/rtkApi';
import { Book, BooksItems } from '@/entities/Book';

const apiKey = process.env.VITE_GOOGLE_BOOKS_API_KEY;

export const bookDetailsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBookDetails: build.query<Book | null, string>({
      query: (id) => ({
        url: `/volumes?q=isbn:${id}&${apiKey}`,
      }),
      transformResponse: (responseData: BooksItems) => {
        return responseData?.items ? responseData?.items[0] : null;
      },
    }),
  }),
});

export const useBookDetails = bookDetailsApi.useGetBookDetailsQuery;
