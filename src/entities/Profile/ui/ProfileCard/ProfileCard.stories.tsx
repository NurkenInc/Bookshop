import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarSrc from 'shared/assets/tests/avatar.png';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: 'Admin',
      age: 22,
      first: 'Will',
      lastname: 'Smith',
      country: Country.USA,
      currency: Currency.USD,
      avatar: AvatarSrc,
      city: 'New York',
    },
  },
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
