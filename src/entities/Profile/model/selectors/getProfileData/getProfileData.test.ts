import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('Should return profile data', () => {
    const data = {
      username: 'Admin',
      age: 22,
      first: 'Will',
      lastname: 'Smith',
      country: Country.USA,
      currency: Currency.USD,
      avatar: 'shared/assets/tests/avatar.png',
      city: 'New York',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
