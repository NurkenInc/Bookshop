import type { Meta, StoryObj } from '@storybook/react';

import { ListBox, ListBoxItem } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ListBox>;

const options: ListBoxItem[] = [
  {
    content: 'Preview 1',
    value: 'Preview 1',
  },
  {
    content: 'Preview 2',
    value: 'Preview 2',
    disabled: true,
  },
  {
    content: 'Preview 3',
    value: 'Preview 3',
  },
  {
    content: 'Preview 4',
    value: 'Preview 4',
  },
];

export const Primary: Story = {
  args: {
    items: options,
    defaultValue: 'Pick a value',
    value: 'Preview 2',
  },
};

export const PrimaryBottom: Story = {
  args: {
    items: options,
    defaultValue: 'Pick a value',
    value: 'Preview 2',
    direction: 'bottom',
  },
};

export const Disabled: Story = {
  args: {
    items: options,
    defaultValue: 'Pick a value',
    value: 'Preview 2',
    readonly: true,
  },
};

export const PrimaryLabel: Story = {
  args: {
    items: options,
    defaultValue: 'Pick a value',
    value: 'Preview 2',
    label: 'Pick something',
  },
};
