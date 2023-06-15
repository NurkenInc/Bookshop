import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/consts';

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

describe('validateProfileData', () => {
  test('Test profile data without errors validation', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('Test profile data with incorrect lastname and first validation', async () => {
    const result = validateProfileData({ ...data, lastname: '', first: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('Test profile data with incorrect age validation', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('Test profile data with incorrect country validation', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('Should work with empty data', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_CURRENCY,
      ValidateProfileError.INCORRECT_AVATAR,
    ]);
  });
});
