import { useEffect, useState } from 'react';
import { OneofToolbarCommand } from '../../types/toolbar-commands';
import { convertToCamelCase } from '../../utils/toolbar-utils';

interface IconProps {
  command: OneofToolbarCommand;
}

export const Icon = ({ command }: IconProps) => {
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
  return <IconComponent width={20} height={20} />;
};
