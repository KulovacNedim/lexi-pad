import { PredefinedToolbarCommands } from '../../types/toolbar-commands';
import { convertToCamelCase } from '../../utils';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { commandHandlers } from '../../utils/commandHandlers';
import { CommandHandlers } from '../../types/commandTypes';

interface ToolbarCommandProps {
  command: PredefinedToolbarCommands;
  tooltip: boolean;
}

export const ToolbarCommand = ({ command, tooltip }: ToolbarCommandProps) => {
  const [editor] = useLexicalComposerContext();

  const onClickHandler = () => {
    const handler = commandHandlers[command.name as keyof CommandHandlers];
    if (handler) {
      editor.dispatchCommand(handler.command, handler.options);
    }
  };

  const commandElement = (
    <div className="lp-command" onClick={onClickHandler}>
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
