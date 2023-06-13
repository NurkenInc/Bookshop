import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesList } from './fetchNextArticlesList';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

describe('fetchNextArticlesList', () => {
  test('Succeded fetch next articles list', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled();
  });

  test('Fetch next articles list dont make request if data ended', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('Fetch next articles list dont make request if data is Loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesList, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
