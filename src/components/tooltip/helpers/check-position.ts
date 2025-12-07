import { TooltipPlacement } from '../tooltip.types';

export type TAvailableSpace = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  vertical: number;
  horizontal: number;
};

export function getAvailableSpace(targetRect: DOMRect): TAvailableSpace {
  const { clientWidth: windowWidth, clientHeight: windowHeight } = window.document.documentElement;

  return {
    top: targetRect.top,
    right: windowWidth - targetRect.right,
    bottom: windowHeight - targetRect.bottom,
    left: targetRect.left,
    vertical: windowHeight,
    horizontal: windowWidth,
  };
}

export function getAvailablePlacements(
  availableSpace: TAvailableSpace,
  tooltipRect: DOMRect
): Record<TooltipPlacement, boolean> {
  const available: Record<TooltipPlacement, boolean> = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  };

  const isVerticalPossible = availableSpace.horizontal >= tooltipRect.width;
  const isHorizontalPossible = availableSpace.vertical >= tooltipRect.height;

  if (isVerticalPossible && availableSpace.top >= tooltipRect.height) {
    available.top = true;
  }

  if (isHorizontalPossible && availableSpace.right >= tooltipRect.width) {
    available.right = true;
  }

  if (isVerticalPossible && availableSpace.bottom >= tooltipRect.height) {
    available.bottom = true;
  }

  if (isHorizontalPossible && availableSpace.left >= tooltipRect.width) {
    available.left = true;
  }

  return available;
}
