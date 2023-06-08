import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Pick an option',
    options: [
      { value: 'EURO', content: 'EURO' },
      { value: 'USD', content: 'USD' },
      { value: 'BTC', content: 'BTC' },
      { value: 'GBP', content: 'GBP' },
    ],
  },
};
