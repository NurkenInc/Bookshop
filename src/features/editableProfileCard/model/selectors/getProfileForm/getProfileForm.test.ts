import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('Should return profile form data', () => {
    const formData = {
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
        form: formData,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(formData);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
