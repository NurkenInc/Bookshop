import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarSrc from '@/shared/assets/tests/avatar.png';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../consts/consts';

describe('getProfileValidateErrors', () => {
  test('Should return profile validate errors', () => {
    const validateErrors = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.INCORRECT_AVATAR,
      ValidateProfileError.INCORRECT_COUNTRY,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });

  test('Should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
