import { PredefinedToolbarCommands } from '../../types/toolbar-commands';
import { convertToCamelCase } from '../../utils/toolbar-utils';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';

interface ToolbarCommandProps {
  command: PredefinedToolbarCommands;
  tooltip: boolean;
}

export const ToolbarCommand = ({ command, tooltip }: ToolbarCommandProps) => {
  const commandElement = (
    <div className='lp-command'>
      <Icon command={command} />
    </div>
  );

  if (!tooltip) {
    return commandElement;
  }

  return (
    <Tooltip content={convertToCamelCase(command.name)}>
      {commandElement}
    </Tooltip>
  );
};
