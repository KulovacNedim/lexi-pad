import type { Meta, StoryObj } from '@storybook/react';
import { Editor } from './editor';

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
        { name: 'link', position: 1 },
        // { name: 'test 3', position: 3, align: 'right' },
        // { name: 'test 4', position: 4, align: 'left' },
        // { name: 'test 5', position: 5 },
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
