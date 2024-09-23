import { useEffect, useRef, useState } from 'react';
import { ToolbarGroup } from '../../types/toolbar-groups';
import { OneofToolbarCommand } from '../../types/toolbar-commands';
import { Icon } from '../Icon';
import classNames from 'classnames';
import SvgChevronDown from '../../icons/ChevronDown';

function capitalizeName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

type DropdownProps = {
  group: ToolbarGroup;
  isOpen: boolean;
  toggleDropdown: (groupName: string) => void;
  closeDropdown: () => void;
};

export const Dropdown = ({
  group,
  isOpen,
  toggleDropdown,
  closeDropdown,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const commands = group.commands.filter((command) => !command.hidden);

  const [selectedCommand, setSelectedCommand] = useState<OneofToolbarCommand>(
    commands[0]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeDropdown]);

  const onSelectHandler = (command: OneofToolbarCommand) => {
    setSelectedCommand(command);
    toggleDropdown(command.name);
  };

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        className='lp-dropdown-list-item'
        onClick={() => toggleDropdown(group.name)}
      >
        <Icon command={selectedCommand} />
        <span className='flex-1 text-left'>
          {capitalizeName(selectedCommand.name)}
        </span>
        <div
          className={classNames('lp-chevron', {
            'lp-rotate-180': isOpen,
            'lp-rotate-0': !isOpen,
          })}
        >
          <SvgChevronDown />
        </div>
      </button>

      {isOpen && (
        <div className='lp-dropdown-list'>
          {commands.map((command) => (
            <div
              key={command.name}
              className={classNames('lp-dropdown-list-item', {
                'lp-dropdown-list-item-selected':
                  selectedCommand.name === command.name,
              })}
              onClick={() => onSelectHandler(command)}
            >
              <Icon command={command} />
              <span>{capitalizeName(command.name)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
