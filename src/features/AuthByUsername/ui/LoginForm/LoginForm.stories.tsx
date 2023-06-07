import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'random' },
})];

export const WithError: Story = {};
WithError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'random', error: 'Error preview' },
})];

export const Loading: Story = {};
Loading.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'random', isLoading: true },
})];
