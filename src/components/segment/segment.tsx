import { useEffect } from 'react';
import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';

import { ISegmentProps } from './segment.types';
import styles from './segment.module.scss';

export function Segment({
  className,
  variant = 'filled',
  color = 'primary',
  shape = 'default',
  size = 'm',
  type = 'radio',
  label,
  icon: Icon,
  ref,
  ...props
}: ISegmentProps) {
  const classes = classNames(
    CssVariableGroup.SegmentTokens,
    styles.segment,
    styles[`segment--variant-${variant}`],
    styles[`segment--color-${color}`],
    styles[`segment--shape-${shape}`],
    styles[`segment--size-${size}`],
    className
  );

  useEffect(() => {
    if (!label && !Icon) {
      console.warn('[UR UI] Segment: either label or icon should be provided');
    }
  }, [label, Icon]);

  return (
    <label className={classes} ref={ref}>
      <input className={styles.input} {...props} type={type} />
      {!label && Icon && <Icon className={styles.icon} />}
      {label}
    </label>
  );
}
