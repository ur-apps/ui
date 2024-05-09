import React, { forwardRef } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { IOverlayProps } from './overlay.types';
import styles from './overlay.module.scss';

export const Overlay = forwardRef<HTMLDivElement, IOverlayProps>(function Overlay({ className, ...props }, ref) {
  return <div {...props} className={classNames(CssVariableGroup.OverlayTokens, styles.overlay, className)} ref={ref} />;
});
