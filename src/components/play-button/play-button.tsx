import React, { useState, useRef } from 'react';

import { PauseIcon, PlayIcon, VolumeIcon } from 'icons';
import { classNames } from 'utils';
import styles from './play-button.module.scss';

export interface IPlayButtonProps {
  className?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  variant?: 'play' | 'volume';
  audioURL: string;
}

export function PlayButton({ className, size = 'm', variant = 'play', audioURL }: IPlayButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement>();
  const iconClassNames = classNames(styles.button, styles[`button--size-${size}`], className);

  const clickHandler = () => {
    if (!audio.current) {
      audio.current = new Audio(audioURL);
    }

    audio.current.onerror = () => {
      audio.current = undefined;
      setIsPlaying(false);
    };

    audio.current.onended = () => {
      audio.current = undefined;
      setIsPlaying(false);
    };

    setIsPlaying(true);
    audio.current?.play();
  };

  const pauseHandler = () => {
    audio.current?.pause();
    setIsPlaying(false);
  };

  return variant === 'volume' ? (
    <VolumeIcon className={iconClassNames} onClick={clickHandler} />
  ) : isPlaying ? (
    <PauseIcon className={iconClassNames} onClick={pauseHandler} />
  ) : (
    <PlayIcon className={iconClassNames} onClick={clickHandler} />
  );
}
