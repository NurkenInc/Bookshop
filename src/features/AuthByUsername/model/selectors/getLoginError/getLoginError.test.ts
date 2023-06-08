import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('Should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { error: 'Something went wrong' },
    };
    expect(getLoginError(state as StateSchema)).toEqual('Something went wrong');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
