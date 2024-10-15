import { PredefinedToolbarCommands } from '../../types/toolbar-commands';
import { convertToCamelCase, handleToolbarAction } from '../../utils';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

interface ToolbarCommandProps {
  command: PredefinedToolbarCommands;
  tooltip: boolean;
}

export const ToolbarCommand = ({ command, tooltip }: ToolbarCommandProps) => {
  const [editor] = useLexicalComposerContext();

  const commandElement = (
    <button
      className="lp-command"
      onClick={() => handleToolbarAction({ editor, command })}
    >
      <Icon command={command} />
    </button>
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
