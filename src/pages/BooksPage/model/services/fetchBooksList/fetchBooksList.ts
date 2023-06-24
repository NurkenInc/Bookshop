import { createAsyncThunk } from '@reduxjs/toolkit';
import { BooksItems } from '@/entities/Book';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { getBooksPageLimit } from '../../selectors/getBooksPageLimit/getBooksPageLimit';
import { getBooksPageSort } from '../../selectors/getBooksPageSort/getBooksPageSort';
import { getBooksPageNum } from '../../selectors/getBooksPageNum.ts/getBooksPageNum';
import { getBooksPageOrder } from '../../selectors/getBooksPageOrder/getBooksPageOrder';
import { getBooksPageCategory } from '../../selectors/getBooksPageCategory/getBooksPageCategory';
import { getBooksPageSearch } from '../../selectors/getBooksPageSearch/getBooksPageSearch';
import { getBooksPagePrintType } from '../../selectors/getBooksPagePrintType/getBooksPagePrintType';
import { getBooksPageFilter } from '../../selectors/getBooksPageFilter/getBooksPageFilter';
import { generateApiUrl } from '@/shared/lib/url/generateApiUrl/generateApiUrl';

interface FetchBooksListProps {
  replace?: boolean;
}

export const fetchBooksList = createAsyncThunk<BooksItems, FetchBooksListProps, ThunkConfig<string>>(
  'books/fetchBooksList',
  async (props, thunkApi) => {
    const {
      extra,
      rejectWithValue,
      getState,
    } = thunkApi;

    const limit = getBooksPageLimit(getState());
    const page = getBooksPageNum(getState());
    const sort = getBooksPageSort(getState());
    const order = getBooksPageOrder(getState());
    const category = getBooksPageCategory(getState());
    const search = getBooksPageSearch(getState());
    const printType = getBooksPagePrintType(getState());
    const filter = getBooksPageFilter(getState());
    const startIndex = (page - 1) * limit;

    try {
      addQueryParams({
        sort, order, search, category, printType, filter,
      });
      const params = {
        subject: category,
        filter,
        printType,
        orderBy: sort,
        maxResults: limit,
        startIndex,
      };
      const apiUrl = generateApiUrl({ search, params });
      const response = await extra.api.get<BooksItems>(apiUrl);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Server error');
    }
  },
);
