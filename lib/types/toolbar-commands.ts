type ToolbarCommand = {
  hidden: boolean;
  position: number;
  icon: string;
};
//   | AlignmentCommand
//   | BlockCommand
//   | ListCommand
//   | LinkCommand

export type HistoryCommand = {
  name: 'undo' | 'redo';
} & ToolbarCommand;

export type InlineCommand = {
  name: 'bold' | 'italic' | 'underline' | 'strikethrough';
  // TO-DO: implement options below
  // | 'monospace'
  // | 'highlight'
  // | 'superscript'
  // | 'subscript';
} & ToolbarCommand;

export type AlignmentCommand = {
  name:
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | 'start'
    | 'end'
    | 'indent'
    | 'outdent';
} & ToolbarCommand;

export type BlockCommand = {
  name:
    | 'normal'
    | 'heading 1'
    | 'heading 2'
    | 'heading 3'
    | 'heading 4'
    | 'heading 5'
    | 'heading 6'
    | 'blockquote'
    | 'code';
} & ToolbarCommand;

export type ListCommand = {
  name: 'unordered' | 'ordered' | 'indent' | 'outdent';
  blockType?: string;
} & ToolbarCommand;

export type LinkCommand = {
  name: 'link' | 'unlink';
} & ToolbarCommand;

export type OneofToolbarCommand =
  | HistoryCommand
  | InlineCommand
  | AlignmentCommand
  | BlockCommand
  | ListCommand
  | LinkCommand;
