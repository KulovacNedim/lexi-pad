import { EmojiPicker } from '../components/EmojiPicker';
import { RecursivePartial } from '../types/recursive-partial';
import { ToolbarConfig } from '../types/toolbar';
import { defaultToolbar } from './default-toolbar';

const minimalToolbarConfig: RecursivePartial<ToolbarConfig> = {
  groups: [
    {
      type: 'rich-text',
      name: 'inline',
      commands: [
        {
          name: 'strikethrough',
          hidden: true,
        },
      ],
    },
    {
      type: 'rich-text',
      name: 'alignment',
      dropdown: false,
      commands: [
        { name: 'start', hidden: true },
        { name: 'end', hidden: true },
        { name: 'outdent', hidden: true },
        { name: 'indent', hidden: true },
      ],
    },
    {
      type: 'rich-text',
      name: 'block',
      hidden: true,
    },
    {
      type: 'rich-text',
      name: 'list',

      commands: [
        { name: 'ordered', hidden: true },
        {
          name: 'unordered',
          hidden: true,
        },
      ],
    },
    {
      type: 'rich-text',
      name: 'link',
      hidden: true,
    },
    {
      type: 'custom-component',
      name: 'emoji-picker',
      hidden: true,
    },
  ],
};

const optimalToolbarConfig: RecursivePartial<ToolbarConfig> = {
  groups: [
    {
      type: 'rich-text',
      name: 'inline',
      commands: [
        {
          name: 'strikethrough',
          hidden: true,
        },
      ],
    },
    {
      type: 'rich-text',
      name: 'alignment',
      dropdown: false,
      commands: [
        { name: 'start', hidden: true },
        { name: 'end', hidden: true },
        { name: 'outdent', hidden: true },
        { name: 'indent', hidden: true },
      ],
    },
    {
      type: 'rich-text',
      name: 'block',
      dropdown: false,
      commands: [
        { name: 'heading 3', hidden: true },
        { name: 'heading 4', hidden: true },
        { name: 'heading 5', hidden: true },
        { name: 'heading 6', hidden: true },
        { name: 'blockquote', hidden: true },
        { name: 'code', position: 8, hidden: true },
      ],
    },
    {
      type: 'rich-text',
      name: 'list',

      commands: [
        { name: 'outdent', hidden: true },
        { name: 'indent', hidden: true },
      ],
    },
    {
      type: 'rich-text',
      name: 'link',
      hidden: true,
    },
    {
      type: 'custom-component',
      name: 'emoji-picker',
      position: 1,
      hidden: false,
      align: 'right',
      dropdown: false,
      renderComponent: <EmojiPicker />,
    },
  ],
};

export const getPredefinedToolbar = (
  mode: string
): RecursivePartial<ToolbarConfig> => {
  if (mode === 'minimal') {
    return minimalToolbarConfig;
  } else if (mode === 'optimal') {
    return optimalToolbarConfig;
  } else {
    return defaultToolbar;
  }
};
