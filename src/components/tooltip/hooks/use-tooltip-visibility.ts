import { RefObject, useEffect } from 'react';
import { useFlag, useHover } from '@ur-apps/common-fe';

import { TooltipTrigger } from '../tooltip.types';

export type UseTooltipVisibilityProps = {
  trigger: TooltipTrigger;
  disabled?: boolean;
  showDelay?: number;
  hideDelay?: number;
  targetRef: RefObject<HTMLElement | SVGElement | null>;
  tooltipRef: RefObject<HTMLDivElement | null>;
};

export function useTooltipVisibility({
  trigger,
  disabled,
  showDelay,
  hideDelay,
  targetRef,
  tooltipRef,
}: UseTooltipVisibilityProps) {
  const [isTooltipVisible, setIsTooltipVisible, toggleTooltipVisible] = useFlag(false);

  const targetHovered = useHover(targetRef, {
    enterDelay: showDelay,
    leaveDelay: hideDelay,
    includeFocus: true,
    pointerTypes: ['mouse', 'pen'],
    disabled: trigger !== 'hover' || disabled,
  });
  const tooltipHovered = useHover(tooltipRef, {
    leaveDelay: hideDelay,
    disabled: trigger !== 'hover' || disabled,
  });

  useEffect(() => {
    if (trigger !== 'click') {
      setIsTooltipVisible(false);
    }
  }, [trigger, setIsTooltipVisible]);

  useEffect(() => {
    if (disabled || trigger !== 'click' || !targetRef.current) return;

    const target = targetRef.current;

    target.addEventListener('click', toggleTooltipVisible);

    return () => {
      target.removeEventListener('click', toggleTooltipVisible);
    };
  }, [disabled, targetRef, toggleTooltipVisible, trigger]);

  useEffect(() => {
    if (trigger !== 'click' || !isTooltipVisible) return;

    const target = targetRef.current;

    const handleClickOutside = (event: MouseEvent) => {
      const clickedElement = event.target as Node;
      const isClickOnTooltip = tooltipRef.current?.contains(clickedElement);
      const isClickOnTarget = target?.contains(clickedElement);

      if (!isClickOnTooltip && !isClickOnTarget) {
        setIsTooltipVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isTooltipVisible, setIsTooltipVisible, targetRef, tooltipRef, trigger]);

  return trigger === 'manual' || tooltipHovered || targetHovered || isTooltipVisible;
}
