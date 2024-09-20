import { defaultToolbar } from '../config/default-toolbar';
import { ToolbarConfig } from '../types/toolbar';

export const mergeToolbar = (toolbar?: ToolbarConfig): ToolbarConfig => {
  return {
    ...defaultToolbar,
    ...toolbar,
  };
};
