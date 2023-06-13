import type { Meta, StoryObj } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/editableProfile/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Normal: Story = {
  args: {
  },
};
