import React, { useMemo } from 'react';
import { ToolbarGroup } from '../ToolbarGroup';
import { ToolbarConfig } from '../../types/toolbar';

type ToolbarProps = {
  config: ToolbarConfig;
};

export const Toolbar = React.memo(({ config }: ToolbarProps) => {
  const leftAlignedGroups = useMemo(
    () =>
      config.groups
        .filter(
          (group) =>
            !group.hidden &&
            (group.align === undefined || group.align === 'left')
        )
        .sort((a, b) => a.position - b.position),
    [config.groups] // Only re-compute when groups change
  );

  const rightAlignedGroups = useMemo(
    () =>
      config.groups
        .filter((group) => !group.hidden && group.align === 'right')
        .sort((a, b) => a.position - b.position),
    [config.groups] // Only re-compute when groups change
  );

  return (
    <div className='lp-toolbar'>
      <div className='lp-command-groups'>
        {leftAlignedGroups.map((group) => (
          <ToolbarGroup key={group.name} group={group} config={config} />
        ))}
      </div>

      {/* Right-aligned groups */}
      <div className='lp-command-groups'>
        {rightAlignedGroups.map((group) => (
          <ToolbarGroup key={group.name} group={group} config={config} />
        ))}
      </div>
    </div>
  );
});
