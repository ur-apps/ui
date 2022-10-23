const margins = {
  s: 3,
  m: 4,
  l: 5,
};

export function getTooltipPostion(
  wrapper: HTMLDivElement | null,
  tooltip: HTMLDivElement | null,
  position: 'top' | 'bottom' | 'left' | 'right'
): { top?: string; left?: string } {
  if (!wrapper || !tooltip) return {};

  const { clientWidth: windowWidth, clientHeight: windowHeight } = window.document.documentElement;
  const { offsetWidth: wrapperWidth, offsetHeight: wrapperHeight } = wrapper;
  const { offsetWidth: tooltipWidth, offsetHeight: tooltipHeight } = tooltip;
  const wrapperPostitionToWindow = wrapper.getBoundingClientRect();

  const space = {
    top: wrapperPostitionToWindow.top,
    bottom: windowHeight - wrapperPostitionToWindow.bottom,
    left: wrapperPostitionToWindow.left,
    right: windowWidth - wrapperPostitionToWindow.right,
  };

  const isVerticalPossible = windowWidth >= tooltipWidth;
  const isHorizontalPossible = windowHeight >= tooltipHeight;

  const isTopPossible = isVerticalPossible && space.top >= tooltipHeight + margins.s;
  const isBottomPossible = isVerticalPossible && space.bottom >= tooltipHeight + margins.s;
  const isLeftPossible = isHorizontalPossible && space.left >= tooltipWidth + margins.s;
  const isRightPossible = isHorizontalPossible && space.right >= tooltipWidth + margins.s;

  function getTopPosition() {
    const centerShiftX = tooltipWidth / 2 - wrapperWidth / 2;
    const isLeftEnough = space.left - centerShiftX >= 0;
    const isRightEnough = space.right - centerShiftX >= 0;

    const y = -(tooltipHeight + margins.s);
    const x = isLeftEnough
      ? isRightEnough
        ? -centerShiftX
        : -(tooltipWidth - wrapperWidth - space.right)
      : -space.left;

    return {
      top: y + 'px',
      left: x + 'px',
    };
  }

  function getBottomPosotion() {
    const centerShiftX = tooltipWidth / 2 - wrapperWidth / 2;
    const isLeftEnough = space.left - centerShiftX >= 0;
    const isRightEnough = space.right - centerShiftX >= 0;

    const y = wrapperHeight + margins.s;
    const x = isLeftEnough
      ? isRightEnough
        ? -centerShiftX
        : -(tooltipWidth - wrapperWidth - space.right)
      : -space.left;

    return {
      top: y + 'px',
      left: x + 'px',
    };
  }

  function getLeftPosotion() {
    const centerShiftY = tooltipHeight / 2 - wrapperHeight / 2;
    const isTopEnough = space.top - centerShiftY >= 0;
    const isBottomEnough = space.bottom - centerShiftY >= 0;

    const y = isTopEnough
      ? isBottomEnough
        ? -centerShiftY
        : -(tooltipHeight - wrapperHeight - space.bottom)
      : -space.top;
    const x = -(tooltipWidth + margins.s);

    return {
      top: y + 'px',
      left: x + 'px',
    };
  }

  function getRightPosition() {
    const centerShiftY = tooltipHeight / 2 - wrapperHeight / 2;
    const isTopEnough = space.top - centerShiftY >= 0;
    const isBottomEnough = space.bottom - centerShiftY >= 0;

    const y = isTopEnough
      ? isBottomEnough
        ? -centerShiftY
        : -(tooltipHeight - wrapperHeight - space.bottom)
      : -space.top;
    const x = wrapperWidth + margins.s;

    return {
      top: y + 'px',
      left: x + 'px',
    };
  }

  switch (position) {
    case 'top':
      if (isTopPossible) {
        return getTopPosition();
      } else if (isBottomPossible) {
        return getBottomPosotion();
      } else if (isLeftPossible) {
        return getLeftPosotion();
      } else if (isRightPossible) {
        return getRightPosition();
      }
      return {};

    case 'bottom':
      if (isBottomPossible) {
        return getBottomPosotion();
      } else if (isTopPossible) {
        return getTopPosition();
      } else if (isLeftPossible) {
        return getLeftPosotion();
      } else if (isRightPossible) {
        return getRightPosition();
      }
      return {};

    case 'left':
      if (isLeftPossible) {
        return getLeftPosotion();
      } else if (isRightPossible) {
        return getRightPosition();
      } else if (isBottomPossible) {
        return getBottomPosotion();
      } else if (isTopPossible) {
        return getTopPosition();
      }
      return {};

    case 'right':
      if (isRightPossible) {
        return getRightPosition();
      } else if (isLeftPossible) {
        return getLeftPosotion();
      } else if (isBottomPossible) {
        return getBottomPosotion();
      } else if (isTopPossible) {
        return getTopPosition();
      }
      return {};

    default:
      return {};
  }
}
