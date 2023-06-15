import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import AvatarSrc from '@/shared/assets/tests/avatar.png';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Normal: Story = {};
Normal.decorators = [StoreDecorator({
  profile: {
    form: {
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
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
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
})];
