import React, { useState } from 'react';

import { PlayButton, Tag, Tooltip } from 'components';
import { CloseIcon, EyeCrossedIcon, EyeIcon, PencilIcon, SaveFillIcon } from 'icons';
import { classNames } from 'utils';
import styles from './transcription.module.scss';

export interface ITranscriptionProps {
  className?: string;
  id: string | number;
  transcription: string;
  audio?: string | null;
  isActive: boolean;
  editable: boolean;
  removable: boolean;
  mode: 'read' | 'edit';
  onActivate?: (id: string | number, value: boolean) => void;
  onChange?: (id: string | number, value: string) => void;
  onDelete?: (id: string | number) => void;
}

export function Transcription({
  className,
  id,
  transcription,
  audio,
  isActive = true,
  editable = false,
  removable = false,
  mode = 'read',
  onActivate,
  onChange,
  onDelete,
}: ITranscriptionProps) {
  const [value, setValue] = useState(transcription);
  const [isEditing, setIsEditing] = useState(false);

  const activationHandler = () => {
    onActivate && onActivate(id, !isActive);
  };

  const deleteHandler = () => {
    onDelete && onDelete(id);
  };

  const editClickHandler = () => {
    setIsEditing(true);
  };

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  };

  const changeResetHandler = () => {
    setValue(transcription);
    setIsEditing(false);
  };

  const changeSaveHandler = () => {
    onChange && onChange(id, value);
    setIsEditing(false);
  };

  return (
    <Tag className={classNames(styles.transcription, className)} colorScheme="blue" appearance="outline">
      <div className={classNames(styles.content, isActive ? styles['content--active'] : null)}>
        {mode === 'edit' && isEditing ? (
          <input className={styles.input} value={value} onChange={changeHandler} />
        ) : (
          <>
            {audio && <PlayButton size="xs" audioURL={audio} className={styles['play-button']} />}

            <span>{transcription}</span>
          </>
        )}
      </div>

      {mode === 'read' ? null : isEditing ? (
        <>
          <Tooltip className={classNames(styles['icon-container'])} text="save changes" onClick={changeSaveHandler}>
            <SaveFillIcon className={styles.icon} />
          </Tooltip>
          <Tooltip className={classNames(styles['icon-container'])} text="reset changes" onClick={changeResetHandler}>
            <CloseIcon className={styles.icon} />
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip
            className={classNames(styles['icon-container'])}
            text={isActive ? 'disable' : 'activate'}
            onClick={activationHandler}>
            {isActive ? <EyeIcon className={styles.icon} /> : <EyeCrossedIcon className={styles.icon} />}
          </Tooltip>

          {editable && (
            <Tooltip className={classNames(styles['icon-container'])} text="edit" onClick={editClickHandler}>
              <PencilIcon className={styles.icon} />
            </Tooltip>
          )}

          {removable && (
            <Tooltip className={classNames(styles['icon-container'])} text="remove" onClick={deleteHandler}>
              <CloseIcon className={styles.icon} />
            </Tooltip>
          )}
        </>
      )}
    </Tag>
  );
}
