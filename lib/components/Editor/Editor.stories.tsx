import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Editor } from './editor';
import { EmojiPicker } from '../EmojiPicker';

const meta = {
  title: 'Components/Editor',
  component: Editor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    toolbar: {
      position: 'bottom',
      groups: [
        { name: 'history', position: 6, align: 'right' },
        {
          name: 'inline',
          position: 2,
          align: 'right',
          hidden: false,
          commands: [{ name: 'bold' }],
        },
        { type: 'rich-text', name: 'alignment', position: 5 },
        {
          name: 'emoji-picker',
          position: 0,
          hidden: false,
          align: 'right',
          dropdown: false,
          renderComponent: <EmojiPicker />,
        },
      ],
    },
  },
};

export const ToolbarOnTop: Story = {
  args: {
    toolbar: { position: 'top' },
  },
};

export const HiddenToolbar: Story = {
  args: {
    toolbar: { visible: false },
  },
};
