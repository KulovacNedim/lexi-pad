import classNames from 'classnames';
import { Pad } from '../Pad';
import { Toolbar } from '../Toolbar';
import { EditorConfig } from '../../types/editor';
import { mergeToolbar } from '../../utils/toolbar-utils';
import { RecursivePartial } from '../../types/recursive-partial';

type EditorProps = RecursivePartial<EditorConfig>;

export const Editor = ({ className = '', toolbar }: EditorProps) => {
  // TO-DO: only if the toolbar is visible
  // TO-DO: memoize
  const mergedToolbar = mergeToolbar(toolbar);

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
