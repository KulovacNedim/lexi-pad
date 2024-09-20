import type { Meta, StoryObj } from '@storybook/react';
import { Editor } from './editor';

const meta = {
  title: 'Components/Editor',
  component: Editor,
  parameters: {
    // layout: 'centered',
    layout: 'padded', // or `padded` by default
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    toolbar: { visible: false, position: 'bottom' },
  },
};
