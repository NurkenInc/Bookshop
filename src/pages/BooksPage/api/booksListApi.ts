import { rtkApi } from '@/shared/api/rtkApi';
import { BooksItems } from '@/entities/Book';

interface BooksListApiProps {
  limit: number,
  startIndex: number,
  category: string,
}

const apiKey = process.env.VITE_GOOGLE_BOOKS_API_KEY;

export const booksListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBooksList: build.query<BooksItems, BooksListApiProps>({
      query: ({ limit, startIndex, category }) => ({
        url: `/volumes?q=subject:${category}&maxResults=${limit}&startIndex=${startIndex}${apiKey}`,
      }),
    }),
  }),
});

export const useBooksList = booksListApi.useGetBooksListQuery;
