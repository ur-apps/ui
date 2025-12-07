import { useRef } from 'react';
import { classNames } from '@ur-apps/common-fe';

import { Portal } from 'components';
import { CssVariableGroup } from 'contexts';

import { useTooltipPosition, useTooltipVisibility } from './hooks';
import { ITooltipProps } from './tooltip.types';
import styles from './tooltip.module.scss';

export function Tooltip({
  className,
  anchor,
  variant = 'filled',
  color = 'primary',
  shape = 'default',
  size = 'm',
  placement = 'top',
  trigger = 'hover',
  showDelay = 100,
  hideDelay = 200,
  throttleInterval = 100,
  children,
  ...props
}: ITooltipProps) {
  const tooltipClasses = classNames(
    CssVariableGroup.TooltipTokens,
    styles.tooltip,
    styles[`tooltip--variant-${variant}`],
    styles[`tooltip--color-${color}`],
    styles[`tooltip--shape-${shape}`],
    styles[`tooltip--size-${size}`],
    className
  );

  const targetRef = anchor;
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const isTooltipVisible = useTooltipVisibility({
    trigger,
    showDelay,
    hideDelay,
    targetRef,
    tooltipRef,
  });
  const position = useTooltipPosition({
    visible: isTooltipVisible,
    placement,
    throttleInterval,
    targetRef,
    tooltipRef,
  });

  return (
    isTooltipVisible && (
      <Portal>
        <div
          {...props}
          style={{ ...props.style, ...position }}
          className={tooltipClasses}
          role="tooltip"
          ref={tooltipRef}>
          {children}
        </div>
      </Portal>
    )
  );
}
