import React, { useMemo } from 'react';

import { classNames } from 'utils';
import { TagButtons } from './tag-buttons';
import { TTagButton } from './types';
import styles from './tag.module.scss';

export interface ITagProps {
  className?: string;
  contentClassName?: string;
  id?: string;
  size?: 's';
  appearance?: 'fill' | 'outline';
  color?: 'primary' | 'accent' | 'secondary' | 'success' | 'warning' | 'error';
  buttons?: TTagButton[];
  children: React.ReactNode;
}

export function Tag({
  className,
  contentClassName,
  id,
  size = 's',
  appearance = 'fill',
  color = 'primary',
  buttons = [],
  children,
}: ITagProps) {
  const [startButtons, endButtons] = useMemo(() => {
    const startButtons: TTagButton[] = [];
    const endButtons: TTagButton[] = [];

    for (const button of buttons) {
      if (button.position === 'start') {
        startButtons.push(button);
      } else {
        endButtons.push(button);
      }
    }

    return [startButtons, endButtons];
  }, [buttons]);

  return (
    <div
      className={classNames(
        styles.tag,
        styles[`tag--size-${size}`],
        styles[`tag--appearance-${appearance}`],
        styles[`tag--color-${color}`],
        className
      )}
      id={id}>
      {startButtons.length ? <TagButtons className={styles['buttons--start']} buttons={startButtons} /> : null}

      <div className={classNames(styles.content, contentClassName)}>{children}</div>

      {endButtons.length ? <TagButtons className={styles['buttons--end']} buttons={endButtons} /> : null}
    </div>
  );
}
