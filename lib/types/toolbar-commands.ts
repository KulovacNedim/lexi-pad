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
    | 'Normal'
    | 'Heading 1'
    | 'Heading 2'
    | 'Heading 3'
    | 'Heading 4'
    | 'Heading 5'
    | 'Heading 6'
    | 'Blockquote'
    | 'Code';
} & ToolbarCommand;

export type ListCommand = {
  name: 'unordered' | 'ordered' | 'indent' | 'outdent';
  blockType?: string;
} & ToolbarCommand;

export type LinkCommand = {
  name: 'link' | 'unlink';
} & ToolbarCommand;
