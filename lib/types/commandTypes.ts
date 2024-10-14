import { LexicalCommand } from 'lexical';


export type CommandName = 'bold' | 'italic' | 'underline' | 'strikethrough';

export interface CommandHandler {
  command: LexicalCommand<string | null | undefined>;
  options?: string | null | undefined;
}

export type CommandHandlers = {
  [key in CommandName]: CommandHandler;
};