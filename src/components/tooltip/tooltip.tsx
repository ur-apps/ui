import { useRef } from 'react';
import { classNames, useMergeRefs } from '@urapps/react';

import { CssVariableGroup } from '../../contexts';
import { Portal } from '../portal';

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
  disabled = false,
  showDelay = 100,
  hideDelay = 200,
  throttleInterval = 100,
  children,
  ref,
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
  const mergedTooltipRef = useMergeRefs(tooltipRef, ref);

  const isTooltipVisible = useTooltipVisibility({
    trigger,
    disabled,
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
          ref={mergedTooltipRef}>
          {children}
        </div>
      </Portal>
    )
  );
}
