import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="Bob" text="Bob preview prev" />,
  },
};
