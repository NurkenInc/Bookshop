import type { Meta, StoryObj } from '@storybook/react';

import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  args: {
    text: `
import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Code>;`,
  },
};
