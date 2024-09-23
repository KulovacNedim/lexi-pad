import { OneofToolbarCommand } from '../../types/toolbar-commands';
import { Icon } from '../Icon';

interface ToolbarCommandProps {
  command: OneofToolbarCommand;
}

export const ToolbarCommand = ({ command }: ToolbarCommandProps) => {
  return (
    <div className='lp-command'>
      <Icon command={command} />
    </div>
  );
};
