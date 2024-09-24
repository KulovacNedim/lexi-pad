import { ToolbarGroup } from './toolbar-groups';

export type ToolbarConfig = {
  mode?: 'minimal' | 'optimal' | 'all';
  position: 'top' | 'bottom';
  visible: boolean;
  tooltip: boolean;
  groups: ToolbarGroup[];
};
