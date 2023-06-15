import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};
Light.decorators = [StoreDecorator({
  user: { authData: {} },
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  user: { authData: {} },
})];

export const NoAuth: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
NoAuth.decorators = [StoreDecorator({
  user: { },
})];
