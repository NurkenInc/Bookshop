import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('Should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'alex',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('alex');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
