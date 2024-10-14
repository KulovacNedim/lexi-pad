import type { Meta, StoryObj } from '@storybook/react';
import { Editor } from '../../components/Editor';

const meta = {
  title: 'Components/ToolbarOnTop',
  component: Editor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToolbarOnTop: Story = {
  args: {
    toolbar: {
      position: 'top',
      groups: [{ type: 'rich-text', name: 'block', hidden: true }],
    },
  },
};
