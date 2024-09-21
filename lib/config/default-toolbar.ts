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
          icon: 'undo',
        },
        {
          name: 'redo',
          position: 2,
          hidden: false,
          icon: 'redo',
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
          icon: 'bold',
        },
        {
          name: 'italic',
          position: 2,
          hidden: false,
          icon: 'italic',
        },
        {
          name: 'underline',
          position: 3,
          hidden: false,
          icon: 'underline',
        },
        {
          name: 'strikethrough',
          position: 4,
          hidden: false,
          icon: 'strikethrough',
        },
      ],
    },
    {
      name: 'alignment',
      position: 3,
      hidden: false,
      align: 'left',
      commands: [
        { name: 'left', position: 1, hidden: false, icon: 'align-left' },
        { name: 'center', position: 2, hidden: false, icon: 'align-center' },
        { name: 'right', position: 3, hidden: false, icon: 'align-right' },
        { name: 'justify', position: 4, hidden: false, icon: 'align-justify' },
        { name: 'start', position: 5, hidden: false, icon: 'align-left' },
        { name: 'end', position: 6, hidden: false, icon: 'align-right' },
        { name: 'outdent', position: 7, hidden: false, icon: 'indent-left' },
        { name: 'indent', position: 8, hidden: false, icon: 'indent-right' },
      ],
    },
    {
      name: 'block',
      position: 4,
      hidden: false,
      align: 'left',
      commands: [
        {
          name: 'Normal',
          position: 1,
          hidden: false,
          icon: 'clear-formatting',
        },
        { name: 'Heading 1', position: 2, hidden: false, icon: 'heading-h1' },
        { name: 'Heading 2', position: 3, hidden: false, icon: 'heading-h2' },
        { name: 'Heading 3', position: 4, hidden: false, icon: 'heading-h3' },
        { name: 'Heading 4', position: 5, hidden: false, icon: 'heading-h4' },
        { name: 'Heading 5', position: 6, hidden: false, icon: 'heading-h5' },
        { name: 'Heading 6', position: 7, hidden: false, icon: 'heading-h6' },
        { name: 'Blockquote', position: 8, hidden: false, icon: 'quote-right' },
        { name: 'Code', position: 8, hidden: false, icon: 'code' },
      ],
    },
    {
      name: 'list',
      position: 5,
      hidden: false,
      align: 'left',
      commands: [
        { name: 'ordered', position: 1, hidden: false, icon: 'list-number' },
        {
          name: 'unordered',
          position: 2,
          hidden: false,
          icon: 'list-bullet',
        },
        { name: 'outdent', position: 3, hidden: false, icon: 'indent-left' },
        { name: 'indent', position: 4, hidden: false, icon: 'indent-right' },
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
