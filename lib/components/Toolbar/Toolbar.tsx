import React, { useMemo } from 'react';
import { ToolbarGroup as ToolbarGroupType } from '../../types/toolbar-groups';
import { ToolbarGroup } from '../ToolbarGroup';

type ToolbarProps = {
  groups: ToolbarGroupType[];
};

export const Toolbar = React.memo(({ groups }: ToolbarProps) => {
  const leftAlignedGroups = useMemo(
    () =>
      groups
        .filter(
          (group) =>
            !group.hidden &&
            (group.align === undefined || group.align === 'left')
        )
        .sort((a, b) => a.position - b.position),
    [groups] // Only re-compute when groups change
  );

  const rightAlignedGroups = useMemo(
    () =>
      groups
        .filter((group) => !group.hidden && group.align === 'right')
        .sort((a, b) => a.position - b.position),
    [groups] // Only re-compute when groups change
  );

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
});
