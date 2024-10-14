import { FORMAT_TEXT_COMMAND } from "lexical";
import { CommandHandlers } from "../types/commandTypes";

export const commandHandlers: CommandHandlers = {
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
  