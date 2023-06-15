import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit id ipsa iusto, voluptate suscipit et nobis molestias repellat veniam ea ratione sapiente eos ipsum consequatur laborum iure reiciendis provident perferendis! Iure, commodi. Assumenda consectetur sint architecto quod nam excepturi ullam id possimus, impedit officiis corporis, est, aut similique non.',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta velit id ipsa iusto, voluptate suscipit et nobis molestias repellat veniam ea ratione sapiente eos ipsum consequatur laborum iure reiciendis provident perferendis! Iure, commodi. Assumenda consectetur sint architecto quod nam excepturi ullam id possimus, impedit officiis corporis, est, aut similique non.',
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
