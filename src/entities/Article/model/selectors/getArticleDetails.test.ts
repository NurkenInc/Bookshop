import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './getArticleDetails';

describe('getProfileDetails', () => {
  test('Should return article details data', () => {
    const data = {
      id: '1',
      title: 'JS NEWS',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('Should return article details loading state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });

  test('Should return article details error state', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
