import {
  AlignmentCommand,
  BlockCommand,
  HistoryCommand,
  InlineCommand,
  LinkCommand,
  ListCommand,
} from './toolbar-commands';

export type HistoryGroup = {
  name: 'history';
  commands: HistoryCommand[];
};

type InlineGroup = {
  name: 'inline';
  commands: InlineCommand[];
};

export type AlignmentGroup = {
  name: 'alignment';
  commands: AlignmentCommand[];
};

export type BlockGroup = {
  name: 'block';
  commands: BlockCommand[];
};

export type ListGroup = {
  name: 'list';
  commands: ListCommand[];
};
export type LinkGroup = {
  name: 'link';
  commands: LinkCommand[];
};

export type ToolbarGroup = {
  name: string;
  position: number;
  hidden: boolean;
  align: 'left' | 'right';
} & (
  | HistoryGroup
  | InlineGroup
  | AlignmentGroup
  | BlockGroup
  | ListGroup
  | LinkGroup
);
