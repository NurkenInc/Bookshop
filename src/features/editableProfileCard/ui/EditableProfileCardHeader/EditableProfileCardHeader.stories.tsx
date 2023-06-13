import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
  title: 'features/editableProfile/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
  args: {
  },
};
