import { RefObject, useLayoutEffect, useMemo, useState } from 'react';
import { useThrottle } from '@ur-apps/common-fe';

import { getTooltipPosition } from '../helpers/get-position';
import { TooltipPlacement } from '../tooltip.types';

export type TUseTooltipPositionProps = {
  /**
   * The position of the tooltip relative to the target element.
   */
  placement: TooltipPlacement;
  /**
   * Whether the tooltip should be visible.
   */
  visible: boolean;
  /**
   * Throttle interval for position updates (ms)
   */
  throttleInterval: number;
  /**
   * A ref to the target element that the tooltip is positioned relative to.
   */
  targetRef?: RefObject<HTMLElement | null> | null;
  /**
   * A ref to the tooltip element itself.
   */
  tooltipRef?: RefObject<HTMLDivElement | null> | null;
};

export function useTooltipPosition({
  visible,
  placement,
  throttleInterval,
  targetRef,
  tooltipRef,
}: TUseTooltipPositionProps) {
  const [top, setTop] = useState<number | undefined>(undefined);
  const [left, setLeft] = useState<number | undefined>(undefined);

  const updatePosition = useThrottle(
    () => {
      if (!targetRef?.current || !tooltipRef?.current) return;

      const targetRect = targetRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const tooltipComputedStyle = getComputedStyle(tooltipRef.current);
      const offset = parseInt(tooltipComputedStyle.getPropertyValue('--offset')) || 0;

      const { top, left } = getTooltipPosition(targetRect, tooltipRect, placement, offset);

      setTop(top);
      setLeft(left);
    },
    throttleInterval,
    {
      leading: true,
    }
  );

  useLayoutEffect(() => {
    if (visible) {
      updatePosition();
    }
  }, [updatePosition, visible, placement]);

  useLayoutEffect(() => {
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [updatePosition]);

  return useMemo(() => ({ top, left }), [top, left]);
}
