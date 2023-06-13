import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('Should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
