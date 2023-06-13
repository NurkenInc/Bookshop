import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'feature/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Normal: Story = {
  args: {
  },
};
