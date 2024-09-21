import { ToolbarGroup as ToolbarGroupType } from '../../types/toolbar-groups';
import { ToolbarCommand } from '../ToolbarCommand';

type ToolbarGroupProps = {
  group: ToolbarGroupType;
};

export const ToolbarGroup = ({ group }: ToolbarGroupProps) => {
  return (
    <div key={group.name} className='lp-command-group'>
      {group.commands.map((command) => (
        // TO-DO: this can be a dropdown too
        <ToolbarCommand command={command} key={command.name} />
      ))}
    </div>
  );
};
