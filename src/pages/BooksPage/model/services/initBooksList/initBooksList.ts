import { createAsyncThunk } from '@reduxjs/toolkit';
import { BooksSortField, Filter, PrintType } from '@/entities/Book';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getBooksPageInited } from '../../selectors/getBooksPageInited/getBooksPageInited';
import { SortOrder } from '@/shared/types';
import { booksPageActions } from '../../slices/booksPageSlice';
import { fetchBooksList } from '../fetchBooksList/fetchBooksList';

const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const initBooksList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'books/initBooksList',
  async (searchParams, thunkApi) => {
    const {
      dispatch,
      getState,
    } = thunkApi;

    const inited = getBooksPageInited(getState());

    if (!inited) {
      const sortFromUrl = searchParams.get('orderBy') as BooksSortField;
      const categoryFromUrl = searchParams.get('subject') as string;
      const searchFromUrl = searchParams.get('q');
      const printTypeFromUrl = searchParams.get('printType') as PrintType;
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const filterFromUrl = searchParams.get('filter') as Filter;

      if (sortFromUrl) {
        booksPageActions.setSort(sortFromUrl);
      }

      if (categoryFromUrl) {
        booksPageActions.setCategory(categoryFromUrl);
      }

      if (searchFromUrl) {
        booksPageActions.setSearch(searchFromUrl);
      }

      if (printTypeFromUrl) {
        booksPageActions.setPrintType(printTypeFromUrl);
      }

      if (orderFromUrl) {
        booksPageActions.setOrder(orderFromUrl);
      }

      if (filterFromUrl) {
        booksPageActions.setFilter(filterFromUrl);
      }

      dispatch(booksPageActions.initState());
      dispatch(fetchBooksList({}));
    }
  },
);
