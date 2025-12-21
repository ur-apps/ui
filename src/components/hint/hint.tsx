import React, { useMemo, useRef } from 'react';
import { isString } from '@ur-apps/common';
import { classNames } from '@ur-apps/common-fe';

import { CssVariableGroup } from 'contexts';

import { Tooltip } from '../tooltip';

import { iconMap, tooltipSizeMap } from './constants';
import { determineHintColorByIcon } from './helpers';
import { IHintProps } from './hint.types';
import styles from './hint.module.scss';

export function Hint({
  className,
  icon = 'info',
  variant = 'filled',
  color = 'auto',
  size = 'm',
  children,
  tooltipProps,
  ...props
}: IHintProps) {
  const iconRef = useRef<SVGSVGElement | null>(null);
  const resolvedColor = useMemo(() => determineHintColorByIcon(icon, color), [icon, color]);
  const classes = classNames(
    CssVariableGroup.HintTokens,
    styles.hint,
    styles[`hint--color-${resolvedColor}`],
    styles[`hint--size-${size}`],
    { [styles['hint--clickable']]: Boolean(tooltipProps?.trigger === 'click') },
    className
  );

  const iconProps = { ...props, className: classes, ref: iconRef };
  const iconElement = isString(icon)
    ? React.createElement(iconMap[variant][icon], iconProps)
    : React.createElement(icon, iconProps);

  return (
    <>
      {iconElement}

      {children && (
        <Tooltip
          size={tooltipSizeMap[size]}
          color={resolvedColor}
          {...tooltipProps}
          anchor={iconRef}
          key={`ht-${variant}-${resolvedColor}-${size}`}>
          {children}
        </Tooltip>
      )}
    </>
  );
}
