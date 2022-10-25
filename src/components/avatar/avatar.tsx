import React from 'react';

import { AvatarFillIcon } from 'icons';
import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './avatar.module.scss';

export interface IAvatarProps {
  className?: string;
  size?: 's' | 'm' | 'l';
  appearance?: 'circle' | 'square';
  colorScheme?: 'light' | 'dark' | 'blue';
  autoColor?: boolean;
  img?: string;
}

export function Avatar({
  className,
  size = 'm',
  appearance = 'circle',
  colorScheme = 'light',
  autoColor = true,
  img,
}: IAvatarProps) {
  const { theme } = useTheme();

  return (
    <div className={classNames(styles.avatar, styles[`avatar--${size}`], styles[`avatar--${appearance}`], className)}>
      {img ? (
        <img src={img} className={styles.img} alt="avatar" />
      ) : (
        <AvatarFillIcon
          className={classNames(
            styles.icon,
            styles[`icon--${colorScheme}`],
            autoColor ? styles[`icon--${theme}-mode`] : undefined
          )}
        />
      )}
    </div>
  );
}
