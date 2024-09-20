import { ToolbarItem } from './toolbar-item';

export type ToolbarItemGroup = {
  name: string;
  position: number;
  hidden: boolean;
  items: ToolbarItem[];
};
