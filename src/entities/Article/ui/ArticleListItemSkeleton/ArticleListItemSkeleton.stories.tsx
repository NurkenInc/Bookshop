import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ArticleView } from '../../model/consts/articleConsts';

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: 'entities/Article/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleListItemSkeleton>;

export const NormalDetailed: Story = {
  args: {
    view: ArticleView.DETAILED,
  },
};

export const NormalBar: Story = {
  args: {
    view: ArticleView.BAR,
  },
};
