import { ToolbarItemGroup } from './toolbar-item-group';

export type ToolbarConfig = {
  position: 'top' | 'bottom';
  visible: boolean;
  groups: ToolbarItemGroup[];
};
