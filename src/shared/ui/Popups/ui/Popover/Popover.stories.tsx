import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../../../Button/Button';

const meta: Meta<typeof Popover> = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {},
};
