import { useState } from 'react';
import { ToolbarGroup as ToolbarGroupType } from '../../types/toolbar-groups';
import { ToolbarCommand } from '../ToolbarCommand';
import { Dropdown } from '../Dropdown';
import { ToolbarConfig } from '../../types/toolbar';

type ToolbarGroupProps = {
  group: ToolbarGroupType;
  config: ToolbarConfig;
};

export const ToolbarGroup = ({ group, config }: ToolbarGroupProps) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<string | null>(
    null
  );

  const toggleDropdown = (groupName: string) => {
    if (openDropdownIndex === groupName) {
      setOpenDropdownIndex(null); // Toggle dropdown close
    } else {
      setOpenDropdownIndex(groupName); // Open the clicked dropdown
    }
  };

  const closeDropdown = () => setOpenDropdownIndex(null);

  // custom component
  if ('renderComponent' in group) {
    return group.renderComponent;
  }

  // dropdown
  if (group.dropdown) {
    return (
      <Dropdown
        group={group}
        isOpen={openDropdownIndex === group.name}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
        tooltip={config.tooltip}
      />
    );
  }

  // list of commands
  return (
    <div key={group.name} className='lp-command-group'>
      {group.commands
        .filter((command) => !command.hidden)
        .map((command) => (
          <ToolbarCommand
            command={command}
            key={command.name}
            tooltip={config.tooltip}
          />
        ))}
    </div>
  );
};
