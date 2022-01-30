import React from 'react';

import { AvatarFillIcon } from 'icons';
import { useTheme } from 'context';
import { classNames } from 'utils';
import styles from './avatar.module.scss';

export interface IAvatarProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  appearance?: 'circle' | 'square';
  colorScheme?: 'light' | 'dark' | 'blue';
  autoColor?: boolean;
  img?: string;
}

Avatar.defaultProps = {
  size: 'medium',
  appearance: 'circle',
  colorScheme: 'light',
  autoColor: true,
} as IAvatarProps;

export function Avatar({ className, size, appearance, colorScheme, autoColor, img }: IAvatarProps) {
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
