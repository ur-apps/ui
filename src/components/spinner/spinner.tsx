import React from 'react';

import { Spinner as SpinnerSVG } from 'icons';
import { classNames } from 'utils';
import styles from './spinner.module.scss';

export interface ISpinnerProps {
  className?: string;
  overlayClassName?: string;
}

export function Spinner({ className, overlayClassName }: ISpinnerProps) {
  return (
    <div className={classNames(styles.spinner__overlay, overlayClassName)}>
      <SpinnerSVG className={classNames(styles.spinner, className)} />
    </div>
  );
}
