import { RefObject, useEffect, useState } from 'react';

import { KeyCode } from '../../../constants';

const TABBABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable="true"]',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getTabbableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR)).filter(
    (element) => element.tabIndex >= 0 && element.getClientRects().length > 0
  );
}

/**
 * Custom hook that keeps keyboard focus inside the container while enabled
 * and returns it to the previously focused element once disabled.
 * Focus is returned only if it was not moved anywhere else in the meantime.
 *
 * @param containerRef - The element to keep focus in.
 * @param enabled - Whether the focus should be trapped.
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, enabled: boolean): void {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [returnFocusTo, setReturnFocusTo] = useState<Element | null>(null);

  // captured during render, before the container content mounts,
  // so an element focused by autoFocus inside the container is not taken as the one to return to
  if (enabled !== prevEnabled) {
    setPrevEnabled(enabled);
    setReturnFocusTo(enabled ? document.activeElement : null);
  }

  useEffect(() => {
    const container = containerRef.current;

    if (!enabled || !container) return;

    const keyDownHandler = (evt: KeyboardEvent) => {
      if (evt.code !== KeyCode.Tab) return;

      const elements = getTabbableElements(container);
      const active = document.activeElement as HTMLElement | null;

      if (elements.length === 0) {
        evt.preventDefault();

        return;
      }

      const first = elements[0];
      const last = elements[elements.length - 1];
      const isActiveTabbable = active !== null && elements.includes(active);

      if (evt.shiftKey && (active === first || !isActiveTabbable)) {
        evt.preventDefault();
        last.focus();
      } else if (!evt.shiftKey && (active === last || !isActiveTabbable)) {
        evt.preventDefault();
        first.focus();
      }
    };

    container.addEventListener('keydown', keyDownHandler);

    return () => {
      container.removeEventListener('keydown', keyDownHandler);
    };
  }, [enabled, containerRef]);

  useEffect(() => {
    if (!(returnFocusTo instanceof HTMLElement)) return;

    return () => {
      const active = document.activeElement;

      if ((active === null || active === document.body) && returnFocusTo.isConnected) {
        returnFocusTo.focus();
      }
    };
  }, [returnFocusTo]);
}
