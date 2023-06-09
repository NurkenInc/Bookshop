import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarSrc from 'shared/assets/tests/avatar.png';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: AvatarSrc,
    alt: 'avatar',
    size: 150,
  },
};

export const Small: Story = {
  args: {
    src: AvatarSrc,
    alt: 'avatar',
    size: 50,
  },
};
