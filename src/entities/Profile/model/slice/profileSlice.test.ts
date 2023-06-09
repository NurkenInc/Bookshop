import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

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

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErros: undefined,
      form: data,
      data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { lastname: 'ollo' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ lastname: 'boom' }),
    )).toEqual({
      form: {
        lastname: 'boom',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      validateErrors: undefined,
      isLoading: false,
      readonly: true,
      form: data,
      data,
    });
  });
});
