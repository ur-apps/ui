import React from 'react';

import { classNames } from 'utils';
import styles from './loading-bar.module.scss';

export interface ILoadingBarProps {
  className?: string;
}

export function LoadingBar({ className }: ILoadingBarProps) {
  return <div className={classNames(styles['loading-bar'], className)} />;
}
