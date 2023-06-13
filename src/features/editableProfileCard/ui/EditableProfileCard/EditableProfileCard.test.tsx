import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profile: Profile = {
  age: 32,
  avatar: 'avatar',
  city: 'New York',
  country: Country.USA,
  currency: Currency.USD,
  first: 'James',
  lastname: 'Jonhson',
  id: '1',
  username: 'admin',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/editableProfileCard', () => {
  test('Switch from readonly mode to edit mode', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('Restoring original data when user click Cancel button', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('James');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Jonhson');
  });

  test('Validation error should appear', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
  });

  test('If everything good request should be sent toserver', async () => {
    const mockPutReq = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
