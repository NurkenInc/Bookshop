import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelector';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const {
      getState,
      dispatch,
    } = thunkApi;

    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const sortFromUrl = searchParams.get('order') as ArticleSortField;
      const searchFromUrl = searchParams.get('search');

      if (orderFromUrl) {
        articlesPageActions.setOrder(orderFromUrl);
      }

      if (sortFromUrl) {
        articlesPageActions.setSort(sortFromUrl);
      }

      if (searchFromUrl) {
        articlesPageActions.setSearch(searchFromUrl);
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
