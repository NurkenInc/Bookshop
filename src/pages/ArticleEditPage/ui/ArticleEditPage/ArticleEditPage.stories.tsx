import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleEditPage from './ArticleEditPage';

const meta: Meta<typeof ArticleEditPage> = {
  title: 'pages/ArticleEditPage/ArticleEditPage',
  component: ArticleEditPage,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ArticleEditPage>;

export const Normal: Story = {};
Normal.decorators = [StoreDecorator({})];
