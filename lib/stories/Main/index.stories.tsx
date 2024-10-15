import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Editor } from '../../components/Editor';
import { EmojiPicker } from '../../components/EmojiPicker';

const meta = {
  title: 'Components/Main',
  component: Editor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    toolbar: {
      tooltip: false,
      position: 'bottom',
      groups: [
        {
          name: 'history',
          position: 6,
          align: 'right',
          // commands: [{ name: 'redo', hidden: true }],
        },
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
