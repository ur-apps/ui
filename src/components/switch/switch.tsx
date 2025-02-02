import React, { useEffect, useMemo, useRef } from 'react';

import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { ISwitchProps } from './switch.types';
import styles from './switch.module.scss';

export function Switch({
  className,
  color = 'primary',
  shape = 'default',
  size = 'm',
  checkedChildren,
  uncheckedChildren,
  isLoading = false,
  disabled,
  ...props
}: ISwitchProps) {
  const switchClassNames = useMemo(() => {
    return classNames(
      CssVariableGroup.SwitchTokens,
      styles.switch,
      styles[`switch--color-${color}`],
      styles[`switch--shape-${shape}`],
      styles[`switch--size-${size}`],
      { [styles['switch--loading']]: isLoading },
      className
    );
  }, [color, shape, size, isLoading, className]);
  const switchRef = useRef<HTMLLabelElement>(null);
  const checkedRef = useRef<HTMLSpanElement>(null);
  const uncheckedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    switchRef.current?.style.setProperty('--max-content-width', 'max-content');

    const checkedWidth = checkedRef.current?.offsetWidth ?? 0;
    const uncheckedWidth = uncheckedRef.current?.offsetWidth ?? 0;
    const maxWidth = Math.max(checkedWidth, uncheckedWidth);

    switchRef.current?.style.setProperty('--max-content-width', `${maxWidth}px`);
  }, [checkedChildren, uncheckedChildren, size]);

  return (
    <label className={switchClassNames} role="switch" tabIndex={0} ref={switchRef}>
      <input {...props} disabled={disabled || isLoading} className={styles.input} type="checkbox" />
      <span className={styles.content}>
        <span className={styles['checked-block']} ref={checkedRef}>
          {checkedChildren}
        </span>

        <span className={styles.thumb} />

        <span className={styles['unchecked-block']} ref={uncheckedRef}>
          {uncheckedChildren}
        </span>
      </span>
    </label>
  );
}
