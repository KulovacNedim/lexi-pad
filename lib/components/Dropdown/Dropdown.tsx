import { useEffect, useRef, useState } from 'react';
import { PredefinedToolbarGroup } from '../../types/toolbar-groups';
import { PredefinedToolbarCommands } from '../../types/toolbar-commands';
import { Icon } from '../Icon';
import classNames from 'classnames';
import SvgChevronDown from '../../icons/SvgChevronDown';
import { Tooltip } from '../Tooltip';
import { convertToCamelCase } from '../../utils';
import { ToolbarConfig } from '../../types/toolbar';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { commandHandlers } from '../../utils/commandHandlers';
import { CommandHandlers } from '../../types/commandTypes';

function capitalizeName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

type DropdownProps = {
  group: PredefinedToolbarGroup;
  isOpen: boolean;
  tooltip: boolean;
  toggleDropdown: (groupName: string) => void;
  closeDropdown: () => void;
  toolbarPosition: ToolbarConfig['position'];
};

export const Dropdown = ({
  group,
  isOpen,
  tooltip,
  toggleDropdown,
  closeDropdown,
  toolbarPosition,
}: DropdownProps) => {
  const [editor] = useLexicalComposerContext();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const commands = group.commands.filter((command) => !command.hidden);

  const [selectedCommand, setSelectedCommand] =
    useState<PredefinedToolbarCommands>(commands[0]);

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

  const onSelectHandler = (command: PredefinedToolbarCommands) => {
    setSelectedCommand(command);
    toggleDropdown(command.name);
    const handler = commandHandlers[command.name as keyof CommandHandlers];
    if (handler) {
      editor.dispatchCommand(handler.command, handler.options);
    }
  };

  const base = (
    <button
      className="lp-dropdown-list-item"
      onClick={() => toggleDropdown(group.name)}
    >
      <Icon command={selectedCommand} />
      <span className="flex-1 text-left">
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
  );

  return (
    <div className="relative" ref={dropdownRef}>
      {tooltip && (
        <Tooltip content={convertToCamelCase(group.name)}>{base}</Tooltip>
      )}
      {!tooltip && base}

      {isOpen && (
        <div
          className={classNames('lp-dropdown-list', {
            'lp-dropdown-bellow': toolbarPosition === 'top',
            'lp-dropdown-above': toolbarPosition === 'bottom',
          })}
        >
          {commands.map((command) => (
            <button
              key={command.name}
              className={classNames('lp-dropdown-list-item', {
                'lp-dropdown-list-item-selected':
                  selectedCommand.name === command.name,
              })}
              onClick={() => onSelectHandler(command)}
            >
              <Icon command={command} />
              <span>{capitalizeName(command.name)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
