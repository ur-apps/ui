import { TooltipPlacement } from '../tooltip.types';

import { getAvailablePlacements, getAvailableSpace } from './check-position';

const PLACEMENT_FALLBACKS: Record<TooltipPlacement, TooltipPlacement[]> = {
  top: ['top', 'bottom', 'right', 'left'],
  bottom: ['bottom', 'top', 'left', 'right'],
  left: ['left', 'right', 'bottom', 'top'],
  right: ['right', 'left', 'bottom', 'top'],
};

const positionFunctions = {
  top: getTopPosition,
  bottom: getBottomPosition,
  left: getLeftPosition,
  right: getRightPosition,
};

export function getTooltipPosition(
  targetRect: DOMRect,
  tooltipRect: DOMRect,
  placement: TooltipPlacement,
  offset: number
): { top: number; left: number } {
  const availableSpace = getAvailableSpace(targetRect);
  const placementsAvailability = getAvailablePlacements(availableSpace, tooltipRect);

  // Try fallbacks
  for (const fallback of PLACEMENT_FALLBACKS[placement]) {
    if (placementsAvailability[fallback]) {
      return positionFunctions[fallback](targetRect, tooltipRect, offset);
    }
  }

  return { left: 0, top: 0 };
}

function getTopPosition(targetRect: DOMRect, tooltipRect: DOMRect, offset: number): { top: number; left: number } {
  const left = calculateConstrainedPosition({
    idealPosition: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
    targetBoundMin: targetRect.right - tooltipRect.width,
    targetBoundMax: targetRect.left,
    viewportBoundMin: 0,
    viewportBoundMax: window.document.documentElement.clientWidth - tooltipRect.width,
  });

  return {
    top: Math.max(targetRect.top - tooltipRect.height - offset, 0),
    left: left,
  };
}

function getBottomPosition(targetRect: DOMRect, tooltipRect: DOMRect, offset: number): { top: number; left: number } {
  const left = calculateConstrainedPosition({
    idealPosition: targetRect.left + targetRect.width / 2 - tooltipRect.width / 2,
    targetBoundMin: targetRect.right - tooltipRect.width,
    targetBoundMax: targetRect.left,
    viewportBoundMin: 0,
    viewportBoundMax: window.document.documentElement.clientWidth - tooltipRect.width,
  });

  return {
    top: targetRect.bottom + offset,
    left: left,
  };
}

function getLeftPosition(targetRect: DOMRect, tooltipRect: DOMRect, offset: number): { top: number; left: number } {
  const top = calculateConstrainedPosition({
    idealPosition: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
    targetBoundMin: targetRect.bottom - tooltipRect.height,
    targetBoundMax: targetRect.top,
    viewportBoundMin: 0,
    viewportBoundMax: window.document.documentElement.clientHeight - tooltipRect.height,
  });

  return {
    top: top,
    left: Math.max(targetRect.left - tooltipRect.width - offset, 0),
  };
}

function getRightPosition(targetRect: DOMRect, tooltipRect: DOMRect, offset: number): { top: number; left: number } {
  const top = calculateConstrainedPosition({
    idealPosition: targetRect.top + targetRect.height / 2 - tooltipRect.height / 2,
    targetBoundMin: targetRect.bottom - tooltipRect.height,
    targetBoundMax: targetRect.top,
    viewportBoundMin: 0,
    viewportBoundMax: window.document.documentElement.clientHeight - tooltipRect.height,
  });

  return {
    top: top,
    left: targetRect.right + offset,
  };
}

function calculateConstrainedPosition({
  idealPosition,
  targetBoundMin,
  targetBoundMax,
  viewportBoundMin,
  viewportBoundMax,
}: {
  idealPosition: number;
  targetBoundMin: number;
  targetBoundMax: number;
  viewportBoundMin: number;
  viewportBoundMax: number;
}): number {
  let position = idealPosition;

  // Apply viewport constraints
  position = Math.max(position, viewportBoundMin);
  position = Math.min(position, viewportBoundMax);

  // Apply target constraints
  position = Math.max(position, targetBoundMin);
  position = Math.min(position, targetBoundMax);

  return position;
}
