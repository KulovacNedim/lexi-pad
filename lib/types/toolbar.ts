import { ToolbarGroup } from './toolbar-groups';

export type ToolbarConfig = {
  position: 'top' | 'bottom';
  visible: boolean;
  tooltip: boolean;
  groups: ToolbarGroup[];
};
