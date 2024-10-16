import classNames from 'classnames';
import { Pad } from '../Pad';
import { Toolbar } from '../Toolbar';
import { EditorConfig } from '../../types/editor';
import { mergeToolbar } from '../../utils';
import { RecursivePartial } from '../../types/recursive-partial';
import { useMemo } from 'react';
import { defaultToolbar } from '../../config/default-toolbar';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { editorConfig } from '../../config/editorConfig';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';

type EditorProps = RecursivePartial<EditorConfig>;

export const Editor = ({ className = '', toolbar }: EditorProps) => {
  const mergedToolbar = useMemo(() => {
    if (toolbar?.visible === false) {
      return { ...defaultToolbar, visible: false };
    }
    return mergeToolbar(toolbar);
  }, [toolbar]);

  const toolbarOnTop = {
    'lp-col-reverse': mergedToolbar.position === 'top',
  };

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={classNames('lp-wrapper', toolbarOnTop, className)}>
        <Pad />
        {mergedToolbar.visible && <Toolbar config={mergedToolbar} />}
      </div>
      <HistoryPlugin />
      <ListPlugin />
      <CheckListPlugin />
    </LexicalComposer>
  );
};
