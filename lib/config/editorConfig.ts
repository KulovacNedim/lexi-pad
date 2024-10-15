import Theme from '../config/theme';

export const editorConfig = {
    namespace: 'lexipad',
    nodes: [],
    // Handling of errors during update
    onError(error: Error) {
        throw error;
    },
    theme: Theme,
};