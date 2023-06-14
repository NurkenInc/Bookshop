import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
  title: 'features/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleInfiniteList>;

export const Normal: Story = {
  args: {},
};
Normal.decorators = [StoreDecorator({})];
