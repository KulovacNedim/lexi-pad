import { ToolbarGroup as ToolbarGroupType } from '../../types/toolbar-groups';
import { ToolbarGroup } from '../ToolbarGroup';

type ToolbarProps = {
  groups: ToolbarGroupType[];
};

export const Toolbar = ({ groups }: ToolbarProps) => {
  const leftAlignedGroups = groups
    .filter(
      (group) =>
        !group.hidden && (group.align === undefined || group.align === 'left')
    )
    .sort((a, b) => a.position - b.position);
  const rightAlignedGroups = groups
    .filter((group) => !group.hidden && group.align === 'right')
    .sort((a, b) => a.position - b.position);

  // TO-DO next:
  // line in betwen of groups
  // responsive
  // items can be grouped into a dripdown
  // add the hiden prop to itmes too
  // Popup should not be part of the group. It should be listed among the groups, next to them
  // add icons
  // cn
  // tooltip

  return (
    <div className='lp-toolbar'>
      <div className='lp-command-groups'>
        {leftAlignedGroups.map((group) => (
          <ToolbarGroup key={group.name} group={group} />
        ))}
      </div>

      {/* Right-aligned groups */}
      <div className='lp-command-groups'>
        {rightAlignedGroups.map((group) => (
          <ToolbarGroup key={group.name} group={group} />
        ))}
      </div>
    </div>
  );
};
