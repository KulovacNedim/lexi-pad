import Theme from '../config/theme';
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { CodeNode } from '@lexical/code'

export const editorConfig = {
    namespace: 'lexipad',
    nodes: [
        HeadingNode,
        QuoteNode,
        CodeNode,
    ],
    // Handling of errors during update
    onError(error: Error) {
        throw error;
    },
    theme: Theme,
};