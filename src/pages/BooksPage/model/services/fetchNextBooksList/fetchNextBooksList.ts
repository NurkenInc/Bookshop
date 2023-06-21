import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getBooksPageHasMore } from '../../selectors/getBooksPageHasMore/getBooksPageHasMore';
import { getBooksPageNum } from '../../selectors/getBooksPageNum.ts/getBooksPageNum';
import { getBooksPageIsLoading } from '../../selectors/getBooksPageIsLoading/getBooksPageIsLoading';
import { fetchBooksList } from '../fetchBooksList/fetchBooksList';
import { booksPageActions } from '../../slices/booksPageSlice';

export const fetchNextBooksList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'books/fetchNextBooksList',
  async (props, thunkApi) => {
    const {
      getState,
      dispatch,
    } = thunkApi;

    const hasMore = getBooksPageHasMore(getState());
    const page = getBooksPageNum(getState());
    const isLoading = getBooksPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(booksPageActions.setPage(page + 1));
      dispatch(fetchBooksList({ }));
    }
  },
);
