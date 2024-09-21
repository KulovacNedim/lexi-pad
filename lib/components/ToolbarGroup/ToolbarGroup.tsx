import { ToolbarGroup as ToolbarGroupType } from '../../types/toolbar-groups';

type ToolbarGroupProps = {
  group: ToolbarGroupType;
};

export const ToolbarGroup = ({ group }: ToolbarGroupProps) => {
  return (
    <div key={group.name} className='lp-command-group'>
      {group.commands.map((cmd) => (
        <div key={cmd.name} className='lp-command'>
          {cmd.icon}
        </div>
      ))}
    </div>
  );
};
