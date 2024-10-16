import Theme from '../config/theme';
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { CodeNode } from '@lexical/code'
import { ListItemNode, ListNode } from '@lexical/list'

export const editorConfig = {
    namespace: 'lexipad',
    nodes: [
        HeadingNode,
        QuoteNode,
        CodeNode,
        ListNode,
        ListItemNode,
    ],
    // Handling of errors during update
    onError(error: Error) {
        throw error;
    },
    theme: Theme,
};