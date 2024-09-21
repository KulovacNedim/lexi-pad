import { ToolbarConfig } from '../types/toolbar';

export const defaultToolbar: ToolbarConfig = {
  position: 'bottom',
  visible: true,
  groups: [
    {
      name: 'history',
      position: 1,
      hidden: false,
      align: 'left',
      commands: [
        {
          name: 'undo',
          position: 1,
          hidden: false,
          icon: 'unde-icon',
        },
        {
          name: 'redo',
          position: 2,
          hidden: false,
          icon: 'redo-icon',
        },
      ],
    },
    {
      name: 'inline',
      position: 2,
      hidden: false,
      align: 'left',
      commands: [
        {
          name: 'bold',
          position: 1,
          hidden: false,
          icon: 'bold-icon',
        },
        {
          name: 'italic',
          position: 2,
          hidden: false,
          icon: 'italic-icon',
        },
        {
          name: 'underline',
          position: 3,
          hidden: false,
          icon: 'underline-icon',
        },
        {
          name: 'strikethrough',
          position: 4,
          hidden: false,
          icon: 'strikethrough-icon',
        },
      ],
    },
    {
      name: 'alignment',
      position: 3,
      hidden: false,
      align: 'left',
      commands: [
        { name: 'left', position: 1, hidden: false, icon: 'left-icon' },
        { name: 'center', position: 2, hidden: false, icon: 'center-icon' },
        { name: 'right', position: 3, hidden: false, icon: 'right-icon' },
        { name: 'justify', position: 4, hidden: false, icon: 'justify-icon' },
        { name: 'start', position: 5, hidden: false, icon: 'start-icon' },
        { name: 'end', position: 6, hidden: false, icon: 'end-icon' },
        { name: 'outdent', position: 7, hidden: false, icon: 'outdent-icon' },
        { name: 'indent', position: 8, hidden: false, icon: 'indent-icon' },
      ],
    },
    {
      name: 'block',
      position: 4,
      hidden: false,
      align: 'left',
      commands: [
        { name: 'Normal', position: 1, hidden: false, icon: 'block-paragraph' },
        { name: 'Heading 1', position: 2, hidden: false, icon: 'block-h1' },
        { name: 'Heading 2', position: 3, hidden: false, icon: 'block-h2' },
        { name: 'Heading 3', position: 4, hidden: false, icon: 'block-h3' },
        { name: 'Heading 4', position: 5, hidden: false, icon: 'block-h4' },
        { name: 'Heading 5', position: 6, hidden: false, icon: 'block-h5' },
        { name: 'Heading 6', position: 7, hidden: false, icon: 'block-h6' },
        { name: 'Blockquote', position: 8, hidden: false, icon: 'quote' },
        { name: 'Code', position: 8, hidden: false, icon: 'code' },
      ],
    },
    {
      name: 'list',
      position: 5,
      hidden: false,
      align: 'left',
      commands: [
        { name: 'ordered', position: 1, hidden: false, icon: 'list-ordered' },
        {
          name: 'unordered',
          position: 2,
          hidden: false,
          icon: 'list-unordered',
        },
        { name: 'outdent', position: 3, hidden: false, icon: 'right-indent' },
        { name: 'indent', position: 4, hidden: false, icon: 'left-indent' },
      ],
    },
    {
      name: 'link',
      position: 6,
      hidden: false,
      align: 'left',
      commands: [
        { name: 'link', position: 1, hidden: false, icon: 'link' },
        { name: 'unlink', position: 2, hidden: false, icon: 'unlink' },
      ],
    },
  ],
};
