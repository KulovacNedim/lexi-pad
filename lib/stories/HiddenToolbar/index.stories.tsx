import type { Meta, StoryObj } from '@storybook/react';
import { Editor } from '../../components/Editor';

const meta = {
  title: 'Components/HiddenToolbar',
  component: Editor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiddenToolbar: Story = {
  args: {
    toolbar: {
      visible: false,
      groups: [{ type: 'rich-text', name: 'block', hidden: true }],
    },
  },
};
