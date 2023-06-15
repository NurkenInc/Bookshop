import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title preview',
    text: 'This is a text preview',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title preview',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'This is a text preview',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title preview',
    text: 'This is a text preview',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title preview',
  },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: 'This is a text preview',
  },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
  args: {
    title: 'Title preview',
    text: 'This is a text preview',
    theme: TextTheme.ERROR,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title preview',
    text: 'This is a text preview',
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title preview',
    text: 'This is a text preview',
    size: TextSize.L,
  },
};
