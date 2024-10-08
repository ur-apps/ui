import React, { forwardRef, useEffect } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { ISegmentProps } from './segment.types';
import styles from './segment.module.scss';

export const Segment = forwardRef<HTMLLabelElement, ISegmentProps>(function Segment(
  {
    className,
    variant = 'filled',
    color = 'primary',
    shape = 'default',
    size = 'm',
    type = 'radio',
    label,
    icon: Icon,
    ...props
  },
  ref
) {
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
});
