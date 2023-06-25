import React from 'react';

import { ReactComponent as AvatarFillIcon } from './avatar-fill.svg';
import { ReactComponent as AvatarOutlineIcon } from './avatar-outline.svg';
import { ReactComponent as BinIcon } from './bin-fill.svg';
import { ReactComponent as BookIcon } from './book.svg';
import { ReactComponent as BulbIcon } from './bulb.svg';
import { ReactComponent as ChatIcon } from './chat.svg';
import { ReactComponent as CloseIcon } from './close.svg';
import { ReactComponent as EyeCrossedIcon } from './eye-crossed.svg';
import { ReactComponent as EyeIcon } from './eye.svg';
import { ReactComponent as FilterIcon } from './filter.svg';
import { ReactComponent as HeartIcon } from './heart.svg';
import { ReactComponent as HomeIcon } from './home.svg';
import { ReactComponent as LockIcon } from './lock.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as MaginfierIcon } from './magnifier.svg';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as PathDownIcon } from './path-down.svg';
import { ReactComponent as PathLeftIcon } from './path-left.svg';
import { ReactComponent as PathRightIcon } from './path-right.svg';
import { ReactComponent as PathUpIcon } from './path-up.svg';
import { ReactComponent as PauseIcon } from './pause.svg';
import { ReactComponent as PencilIcon } from './pencil.svg';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as ReloadIcon } from './reload.svg';
import { ReactComponent as SunIcon } from './sun.svg';
import { ReactComponent as TranslateIcon } from './translate.svg';
import { ReactComponent as VolumeIcon } from './volume.svg';
import styles from './preview.module.scss';

export function IconsPreview() {
  return (
    <>
      <AvatarFillIcon className={styles.icon} />
      <AvatarOutlineIcon className={styles.icon} />
      <BinIcon className={styles.icon} />
      <BookIcon className={styles.icon} />
      <BulbIcon className={styles.icon} />
      <ChatIcon className={styles.icon} />
      <CloseIcon className={styles.icon} />
      <EyeCrossedIcon className={styles.icon} />
      <EyeIcon className={styles.icon} />
      <FilterIcon className={styles.icon} />
      <HeartIcon className={styles.icon} />
      <HomeIcon className={styles.icon} />
      <LockIcon className={styles.icon} />
      <InfoIcon className={styles.icon} />
      <MaginfierIcon className={styles.icon} />
      <MoonIcon className={styles.icon} />
      <PathDownIcon className={styles.icon} />
      <PathLeftIcon className={styles.icon} />
      <PathRightIcon className={styles.icon} />
      <PathUpIcon className={styles.icon} />
      <PauseIcon className={styles.icon} />
      <PencilIcon className={styles.icon} />
      <PlayIcon className={styles.icon} />
      <ReloadIcon className={styles.icon} />
      <SunIcon className={styles.icon} />
      <TranslateIcon className={styles.icon} />
      <VolumeIcon className={styles.icon} />
    </>
  );
}
