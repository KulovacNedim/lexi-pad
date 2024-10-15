import { ElementNode, LexicalCommand } from 'lexical';


export type CommandName =
    'bold' |
    'italic' |
    'underline' |
    'strikethrough' |
    'text-code' |
    'undo' |
    'redo' |
    'left' |
    'center' |
    'right' |
    'justify' |
    'start' |
    'end' |
    'outdent' |
    'indent' |
    'normal' |
    'heading 1' |
    'heading 2' |
    'heading 3' |
    'heading 4' |
    'heading 5' |
    'heading 6' |
    'blockquote' |
    'code';

export type LexCommand = LexicalCommand<string | null | undefined>
export type LexNode = () => ElementNode
export interface CommandHandler {
    command: LexCommand | LexNode;
    options?: string | null | undefined;
    type: 'dispatch' | 'update' | 'format';
}

export type CommandHandlers = {
    [key in CommandName]: CommandHandler;
};