import React from 'react';

import { PlayIcon, VolumeIcon } from 'icons';
import { classNames } from 'utils';
import styles from './play-button.module.scss';

export interface IPlayButtonProps {
  className?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  variant?: 'play' | 'volume';
  audioURL: string;
}

export function PlayButton({ className, size = 'm', variant = 'play', audioURL }: IPlayButtonProps) {
  const clickHandler = () => {
    new Audio(audioURL).play();
  };

  return variant === 'play' ? (
    <PlayIcon className={classNames(styles.button, styles[`button--size-${size}`], className)} onClick={clickHandler} />
  ) : (
    <VolumeIcon
      className={classNames(styles.button, styles[`button--size-${size}`], className)}
      onClick={clickHandler}
    />
  );
}
