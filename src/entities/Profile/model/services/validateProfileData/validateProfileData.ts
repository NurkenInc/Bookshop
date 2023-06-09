import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    first,
    lastname,
    age,
    country,
    currency,
    avatar,
    city,
    username,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !lastname || !username) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  if (!avatar) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR);
  }

  return errors;
};
