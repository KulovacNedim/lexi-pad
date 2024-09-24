import classNames from 'classnames';
import { useState } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
};

export const Tooltip = ({
  children,
  content,
  position = 'top',
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={classNames('lp-tooltip', {
            'lp-tooltip-top': position === 'top',
            'lp-tooltip-bottom': position === 'bottom',
            'lp-tooltip-left': position === 'left',
            'lp-tooltip-right': position === 'right',
          })}
        >
          {content}
        </div>
      )}
    </div>
  );
};
