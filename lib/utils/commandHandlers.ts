import { FORMAT_TEXT_COMMAND, REDO_COMMAND, UNDO_COMMAND } from "lexical";
import { CommandHandlers } from "../types/commandTypes";

export const commandHandlers: CommandHandlers = {
    undo: {
        command: UNDO_COMMAND,
        options: 'bold',
    },
    redo: {
        command: REDO_COMMAND,
        options: 'bold',
    },
    bold: {
        command: FORMAT_TEXT_COMMAND,
        options: 'bold',
    },
    italic: {
        command: FORMAT_TEXT_COMMAND,
        options: 'italic',
    },
    underline: {
        command: FORMAT_TEXT_COMMAND,
        options: 'underline',
    },
    strikethrough: {
        command: FORMAT_TEXT_COMMAND,
        options: 'strikethrough',
    },
};
  