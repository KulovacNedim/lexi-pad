import classNames from 'classnames';
import { Pad } from '../Pad';
import { Toolbar } from '../Toolbar';
import { EditorConfig } from '../../types/editor';
import { mergeToolbar } from '../../utils/toolbar-utils';

type EditorProps = Partial<EditorConfig>;

export const Editor = ({ className = '', toolbar }: EditorProps) => {
  const mergedToolbar = mergeToolbar(toolbar);

  const toolbarOnTop = {
    'col-reverse': mergedToolbar.position === 'top',
  };

  return (
    <div className={classNames('lp-wrapper', toolbarOnTop, className)}>
      <Pad />
      <Toolbar />
    </div>
  );
};
