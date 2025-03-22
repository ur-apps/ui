import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { IOverlayProps } from './overlay.types';
import styles from './overlay.module.scss';

export function Overlay({ className, ref, ...props }: IOverlayProps) {
  return <div {...props} className={classNames(CssVariableGroup.OverlayTokens, styles.overlay, className)} ref={ref} />;
}
