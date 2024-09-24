import classNames from 'classnames';
import { Pad } from '../Pad';
import { Toolbar } from '../Toolbar';
import { EditorConfig } from '../../types/editor';
import { mergeToolbar } from '../../utils/toolbar-utils';
import { RecursivePartial } from '../../types/recursive-partial';
import { useMemo } from 'react';
import { defaultToolbar } from '../../config/default-toolbar';

type EditorProps = RecursivePartial<EditorConfig>;

export const Editor = ({ className = '', toolbar }: EditorProps) => {
  const mergedToolbar = useMemo(() => {
    if (toolbar?.visible === false) {
      return defaultToolbar;
    }
    return mergeToolbar(toolbar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toolbarOnTop = {
    'lp-col-reverse': mergedToolbar.position === 'top',
  };

  return (
    <div className={classNames('lp-wrapper', toolbarOnTop, className)}>
      <Pad />
      {mergedToolbar.visible && <Toolbar groups={mergedToolbar.groups} />}
    </div>
  );
};
