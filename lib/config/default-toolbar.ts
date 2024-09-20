import { ToolbarConfig } from '../types/toolbar';

export const defaultToolbar: ToolbarConfig = {
  position: 'bottom',
  visible: true,
  groups: [
    {
      name: 'history',
      position: 1,
      hidden: false,
      items: [
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
      items: [
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
  ],
};
