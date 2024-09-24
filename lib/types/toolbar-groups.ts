import {
  AlignmentCommand,
  BlockCommand,
  HistoryCommand,
  InlineCommand,
  LinkCommand,
  ListCommand,
} from './toolbar-commands';

export type ToolbarGroupName =
  | 'history'
  | 'inline'
  | 'alignment'
  | 'block'
  | 'list'
  | 'link';

export type HistoryGroup = {
  type: 'rich-text';
  name: 'history';
  commands: HistoryCommand[];
};

export type InlineGroup = {
  type: 'rich-text';
  name: 'inline';
  commands: InlineCommand[];
};

export type AlignmentGroup = {
  type: 'rich-text';
  name: 'alignment';
  commands: AlignmentCommand[];
};

export type BlockGroup = {
  type: 'rich-text';
  name: 'block';
  commands: BlockCommand[];
};

export type ListGroup = {
  type: 'rich-text';
  name: 'list';
  commands: ListCommand[];
};
export type LinkGroup = {
  type: 'rich-text';
  name: 'link';
  commands: LinkCommand[];
};

export type PredefinedToolbarGroup =
  | HistoryGroup
  | InlineGroup
  | AlignmentGroup
  | BlockGroup
  | ListGroup
  | LinkGroup;

export type CustomComponentGroup = {
  type: 'custom-component';
  renderComponent: JSX.Element;
};

type WithBaseGroup<T> = T & {
  name: string;
  position: number;
  hidden: boolean;
  dropdown: boolean;
  align: 'left' | 'right';
};

export type ToolbarGroup =
  | WithBaseGroup<PredefinedToolbarGroup>
  | WithBaseGroup<CustomComponentGroup>;
