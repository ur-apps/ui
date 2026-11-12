import { classNames } from '@urapps/react';

import { CssVariableGroup } from '../../contexts';

import { IOverlayProps } from './overlay.types';
import styles from './overlay.module.scss';

export function Overlay({ className, ref, ...props }: IOverlayProps) {
  return <div {...props} className={classNames(CssVariableGroup.OverlayTokens, styles.overlay, className)} ref={ref} />;
}
