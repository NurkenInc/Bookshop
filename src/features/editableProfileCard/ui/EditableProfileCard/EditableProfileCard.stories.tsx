import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
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
Normal.decorators = [StoreDecorator({})];
