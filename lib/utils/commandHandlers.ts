import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND, REDO_COMMAND, UNDO_COMMAND } from "lexical";
import { CommandHandlers } from "../types/commandTypes";

export const commandHandlers: CommandHandlers = {
    // history
    undo: {
        command: UNDO_COMMAND,
        options: undefined,
    },
    redo: {
        command: REDO_COMMAND,
        options: undefined,
    },
    // inline
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
    // alignment
    left: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'left',
    },
    center: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'center',
    },
    right: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'right',
    },
    justify: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'justify',
    },
    start: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'start',
    },
    end: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'end',
    },
    outdent: {
        command: OUTDENT_CONTENT_COMMAND,
        options: undefined,
    },
    indent: {
        command: INDENT_CONTENT_COMMAND,
        options: undefined,
    },
};
