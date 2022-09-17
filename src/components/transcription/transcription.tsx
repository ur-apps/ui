import React from 'react';

import { Tag, ITagProps } from '../tag';
import { PlayButton } from '../play-button';
import { CloseIcon, EyeCrossedIcon, EyeIcon, PencilIcon } from 'icons';
import styles from './transcription.module.scss';
import { classNames } from 'utils';

export interface ITranscriptionProps {
  className?: string;
  id: string;
  transcription: string;
  audio?: string;
  isActive: boolean;
  editable: boolean;
  removable: boolean;
  mode: 'read' | 'edit';
}

export function Transcription({
  className,
  id,
  transcription,
  audio,
  isActive,
  editable,
  removable,
  mode,
}: ITranscriptionProps) {
  return (
    <Tag className={classNames(styles.transcription, className)} appearance="outline">
      {audio && <PlayButton size="xs" audioURL={audio} className={styles['play-button']} />}

      <span>{transcription}</span>

      {mode === 'edit' && (
        <div className={classNames(styles['icon-container'], styles['icon-container--eye'])}>
          {isActive ? <EyeIcon className={styles.icon} /> : <EyeCrossedIcon className={styles.icon} />}
        </div>
      )}

      {mode === 'edit' && editable && (
        <div className={styles['icon-container']}>
          <PencilIcon className={styles.icon} />
        </div>
      )}

      {mode === 'edit' && removable && (
        <div className={classNames(styles['icon-container'], styles['icon-container--remove'])}>
          <CloseIcon className={styles.icon} />{' '}
        </div>
      )}
    </Tag>
  );
}
