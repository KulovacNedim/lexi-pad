import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

export const Pad = () => {
  return (
    <RichTextPlugin
      contentEditable={<ContentEditable className="lp-editor-input" />}
      ErrorBoundary={LexicalErrorBoundary}
    />
  );
};
