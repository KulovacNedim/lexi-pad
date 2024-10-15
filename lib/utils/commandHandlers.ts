import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, INDENT_CONTENT_COMMAND, OUTDENT_CONTENT_COMMAND, REDO_COMMAND, UNDO_COMMAND, $createParagraphNode } from "lexical";
import { $createHeadingNode, $createQuoteNode } from '@lexical/rich-text';
import { $createCodeNode } from '@lexical/code';

import { CommandHandlers } from "../types/commandTypes";

export const commandHandlers: CommandHandlers = {
    // history
    undo: {
        command: UNDO_COMMAND,
        options: undefined,
        type: 'dispatch'
    },
    redo: {
        command: REDO_COMMAND,
        options: undefined,
        type: 'dispatch'
    },
    // inline
    bold: {
        command: FORMAT_TEXT_COMMAND,
        options: 'bold',
        type: 'dispatch'
    },
    italic: {
        command: FORMAT_TEXT_COMMAND,
        options: 'italic',
        type: 'dispatch'
    },
    underline: {
        command: FORMAT_TEXT_COMMAND,
        options: 'underline',
        type: 'dispatch'
    },
    strikethrough: {
        command: FORMAT_TEXT_COMMAND,
        options: 'strikethrough',
        type: 'dispatch'
    },
    'text-code': {
        command: FORMAT_TEXT_COMMAND,
        options: 'code',
        type: 'dispatch'
    },
    // alignment
    left: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'left',
        type: 'dispatch'
    },
    center: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'center',
        type: 'dispatch'
    },
    right: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'right',
        type: 'dispatch'
    },
    justify: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'justify',
        type: 'dispatch'
    },
    start: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'start',
        type: 'dispatch'
    },
    end: {
        command: FORMAT_ELEMENT_COMMAND,
        options: 'end',
        type: 'dispatch'
    },
    outdent: {
        command: OUTDENT_CONTENT_COMMAND,
        options: undefined,
        type: 'dispatch'
    },
    indent: {
        command: INDENT_CONTENT_COMMAND,
        options: undefined,
        type: 'dispatch'
    },
    // block
    normal: {
        command: () => $createParagraphNode(),
        options: undefined,
        type: 'update'
    },
    'heading 1': {
        command: () => $createHeadingNode('h1'),
        options: undefined,
        type: 'update'
    },
    'heading 2': {
        command: () => $createHeadingNode('h2'),
        options: undefined,
        type: 'update'
    },
    'heading 3': {
        command: () => $createHeadingNode('h3'),
        options: undefined,
        type: 'update'
    },
    'heading 4': {
        command: () => $createHeadingNode('h4'),
        options: undefined,
        type: 'update'
    },
    'heading 5': {
        command: () => $createHeadingNode('h5'),
        options: undefined,
        type: 'update'
    },
    'heading 6': {
        command: () => $createHeadingNode('h6'),
        options: undefined,
        type: 'update'
    },
    blockquote: {
        command: () => $createQuoteNode(),
        options: undefined,
        type: 'update'
    },
    code: {
        command: () => $createCodeNode(),
        options: undefined,
        type: 'update'
    },
};
