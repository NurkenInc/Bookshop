import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetailsComments } from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsComments>;

export const Normal: Story = {
  args: {
  },
};
