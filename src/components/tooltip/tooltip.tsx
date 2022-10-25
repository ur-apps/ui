import React, { useCallback, useEffect, useRef } from 'react';

import { Indicator, Text } from 'components';
import { useTheme } from 'contexts';
import { classNames } from 'utils';
import { getTooltipPostion } from './helpers';
import styles from './tooltip.module.scss';

export interface ITooltipProps {
  className?: string;
  color?: 'light' | 'dark';
  size?: 's' | 'm' | 'l';
  position?: 'top' | 'bottom' | 'left' | 'right';
  autoColor?: boolean;
  withIndicator?: boolean;
  isIndicatorBlinking?: boolean;
  text: React.ReactNode | string[];
  children: React.ReactNode;
}

export function Tooltip({
  className,
  color = 'light',
  size = 's',
  position = 'bottom',
  autoColor = true,
  withIndicator = false,
  isIndicatorBlinking = false,
  text,
  children,
}: ITooltipProps) {
  const { theme } = useTheme();
  const wrapper = useRef<HTMLDivElement>(null);
  const tooltip = useRef<HTMLDivElement>(null);

  const hoverHandler = useCallback(() => {
    const { top, left } = getTooltipPostion(wrapper.current, tooltip.current, position);
    tooltip.current!.style.top = top ?? 'auto';
    tooltip.current!.style.left = left ?? 'auto';
  }, [position]);

  useEffect(() => {
    wrapper.current?.addEventListener('mouseover', hoverHandler);

    return () => {
      wrapper.current?.removeEventListener('mouseover', hoverHandler);
    };
  }, [hoverHandler]);

  return (
    <div className={classNames(styles.wrapper, styles[`wrapper--${size}`], className)} ref={wrapper}>
      {children}

      <div
        className={classNames(
          styles.tooltip,
          styles[`tooltip--${color}`],
          styles[`tooltip--${size}`],
          styles[`tooltip--${position}`],
          autoColor ? styles[`tooltip--${theme}-mode`] : null
        )}
        ref={tooltip}>
        {typeof text === 'string' ? (
          <Text size={size}>{text}</Text>
        ) : Array.isArray(text) ? (
          text.map((item) => (
            <Text size={size} key={item}>
              - {item}
            </Text>
          ))
        ) : (
          text
        )}
      </div>

      {withIndicator && <Indicator className={styles.indicator} color={'pink'} isBlinking={isIndicatorBlinking} />}
    </div>
  );
}
