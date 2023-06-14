import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Normal: Story = {
  args: {
  },
};