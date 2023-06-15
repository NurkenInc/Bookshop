import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Hello world!',
        user: { id: '1', username: 'Jonh' },
      },
      {
        id: '2',
        text: 'Let him cook!',
        user: { id: '2', username: 'user-vs4eew4evd287tj' },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
