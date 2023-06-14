import type { Meta, StoryObj } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'feature/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [withMock],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
  id: '1',
  img: 'idk',
  createdAt: '02/16/2000',
  blocks: [],
  type: [],
  subtitle: 'JS NEWS',
  title: 'Javascript',
  user: {
    id: '1', username: 'harosh', avatar: 'smth', roles: [],
  },
  views: 205,
};

export const Normal: Story = {
  args: {
  },
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
