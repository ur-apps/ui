import React from 'react';

import { classNames } from 'utils';
import { TTagButton } from './types';
import styles from './tag.module.scss';

interface ITagButtonsProps {
  className?: string;
  buttons: TTagButton[];
}

export function TagButtons({ className, buttons }: ITagButtonsProps) {
  return (
    <div className={classNames(styles.buttons, className)}>
      {buttons.map(({ id, className, label, icon, onClick }) => {
        return (
          <button
            className={classNames(styles.button, onClick ? styles['button--interactive'] : null, className)}
            onClick={onClick}
            id={String(id)}
            key={id}>
            {label
              ? label
              : icon &&
                React.createElement(icon, {
                  className: styles.icon,
                })}
          </button>
        );
      })}
    </div>
  );
}
