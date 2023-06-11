import type { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
import { Text } from '../Text/Text';

const meta: Meta<typeof Tabs> = {
  title: 'shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  {
    value: 'preview',
    content: 'tab 1',
  },
  {
    value: 'preview',
    content: 'tab 2',
  },
  {
    value: 'preview',
    content: 'tab 3',
  },
  {
    value: 'preview',
    content: 'tab 4',
  },
];

export const Primary: Story = {
  args: {
    tabs,
    value: 'tab 2',
    onTabClick: action('onTabClick'),
  },
};
