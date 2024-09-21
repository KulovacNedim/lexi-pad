import { useEffect, useState } from 'react';
import { OneofToolbarCommand } from '../../types/toolbar-commands';
import { convertToCamelCase } from '../../utils/toolbar-utils';

interface ToolbarCommandProps {
  command: OneofToolbarCommand;
}

export const ToolbarCommand = ({ command }: ToolbarCommandProps) => {
  const [IconComponent, setIconComponent] = useState<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const { default: ImportedIcon } = await import(
          `../../icons/Svg${convertToCamelCase(command.icon)}`
        );
        setIconComponent(() => ImportedIcon);
      } catch (error) {
        console.error(`Icon "${command.icon}" not found.`, error);
      }
    };

    loadIcon();
  }, [command.icon]);

  if (!IconComponent) {
    return null;
  }

  return (
    <div className='lp-command'>
      <IconComponent width={20} height={20} />
    </div>
  );
};
