import { createAsyncThunk } from '@reduxjs/toolkit';
import { BooksSortField, Filter, PrintType } from '@/entities/Book';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getBooksPageInited } from '../../selectors/getBooksPageInited/getBooksPageInited';
import { SortOrder } from '@/shared/types';
import { booksPageActions } from '../../slices/booksPageSlice';
import { fetchBooksList } from '../fetchBooksList/fetchBooksList';

export const initBooksList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'books/initBooksList',
  async (searchParams, thunkApi) => {
    const {
      dispatch,
      getState,
    } = thunkApi;

    const inited = getBooksPageInited(getState());
    const state = getState();

    if (!inited) {
      const sortFromUrl = searchParams.get('sort') as BooksSortField;
      const categoryFromUrl = searchParams.get('category') as string;
      const searchFromUrl = searchParams.get('search');
      const printTypeFromUrl = searchParams.get('printType') as PrintType;
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const filterFromUrl = searchParams.get('filter') as Filter;

      if (sortFromUrl) {
        dispatch(booksPageActions.setSort(sortFromUrl));
      }

      if (categoryFromUrl) {
        dispatch(booksPageActions.setCategory(categoryFromUrl));
      }

      if (searchFromUrl) {
        dispatch(booksPageActions.setSearch(searchFromUrl));
      }

      if (printTypeFromUrl) {
        dispatch(booksPageActions.setPrintType(printTypeFromUrl));
      }

      if (orderFromUrl) {
        dispatch(booksPageActions.setOrder(orderFromUrl));
      }

      if (filterFromUrl) {
        dispatch(booksPageActions.setFilter(filterFromUrl));
      }

      dispatch(booksPageActions.initState());
      dispatch(fetchBooksList({}));
    }
  },
);
