import React from 'react';

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
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as MaginfierIcon } from './magnifier.svg';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as PauseIcon } from './pause.svg';
import { ReactComponent as PencilIcon } from './pencil.svg';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as SunIcon } from './sun.svg';
import { ReactComponent as TranslateIcon } from './translate.svg';
import { ReactComponent as VolumeIcon } from './volume.svg';
import styles from './preview.module.scss';

export function IconsPreview() {
  return (
    <>
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
      <InfoIcon className={styles.icon} />
      <MaginfierIcon className={styles.icon} />
      <MoonIcon className={styles.icon} />
      <PauseIcon className={styles.icon} />
      <PencilIcon className={styles.icon} />
      <PlayIcon className={styles.icon} />
      <SunIcon className={styles.icon} />
      <TranslateIcon className={styles.icon} />
      <VolumeIcon className={styles.icon} />
    </>
  );
}
