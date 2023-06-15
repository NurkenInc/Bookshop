import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
  test('Should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
