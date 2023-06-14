import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Normal: Story = {
  args: {},
};
