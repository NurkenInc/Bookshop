import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'entities/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
  args: {
    comment: {
      id: '2',
      text: 'Let him cook!',
      user: { id: '2', username: 'user-vs4eew4evd287tj' },
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
