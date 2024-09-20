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
        { name: 'history', position: 6 },
        { name: 'test group', position: 2 },
        { name: 'test 2', position: 3 },
      ],
    },
  },
};

// TO-DO: define types as enums

// export const ToolbarOnTop: Story = {
//   args: {
//     toolbar: { position: 'top' },
//   },
// };

// export const HiddenToolbar: Story = {
//   args: {
//     toolbar: { visible: false },
//   },
// };
