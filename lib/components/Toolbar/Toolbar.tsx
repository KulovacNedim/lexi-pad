import { ToolbarItemGroup } from '../../types/toolbar-item-group';

type ToolbarProps = {
  groups: ToolbarItemGroup[];
};

export const Toolbar = ({ groups }: ToolbarProps) => {
  return (
    <div className='lp-toolbar'>
      {groups.map((group) => (
        <p key={group.name}>
          {group.name} {group.position}
        </p>
      ))}
    </div>
  );
};
