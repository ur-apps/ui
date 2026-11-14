import { RefObject, useEffect } from 'react';
import { useLatest } from '@urapps/react';

// matches the media query of the sheet presentation in modal.module.scss
const SHEET_MEDIA_QUERY = '(width < 640px)';
const REDUCED_MOTION_MEDIA_QUERY = '(prefers-reduced-motion: reduce)';
const DISMISS_DISTANCE_RATIO = 0.25;
const DISMISS_VELOCITY = 0.5; // px/ms
const FLICK_MAX_PAUSE = 100; // ms
const SNAP_BACK_DURATION = 200; // ms

function isScrolledFromTop(target: Element, dialog: HTMLElement): boolean {
  let element: Element | null = target;

  while (element) {
    if (element.scrollTop > 0) return true;
    if (element === dialog) return false;

    element = element.parentElement;
  }

  return false;
}

/**
 * Custom hook that lets the user drag the modal dialog down and dismiss it, as a native bottom sheet.
 * The drag starts only on touch screens in the sheet presentation and only when the content under the finger
 * is scrolled to the top. Released past a quarter of the dialog height or with a flick, the dialog is dismissed,
 * otherwise it returns to its place.
 *
 * @param dialogRef - The dialog element to drag.
 * @param enabled - Whether the dialog can be dragged.
 * @param onDismiss - Called when the dialog is released in the dismiss position.
 */
export function useSwipeToDismiss(
  dialogRef: RefObject<HTMLElement | null>,
  enabled: boolean,
  onDismiss?: () => void
): void {
  const onDismissRef = useLatest(onDismiss);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!enabled || !dialog) return;

    // the dialog keeps its drag offset while closing, so it is reset if the modal is reopened meanwhile
    dialog.style.removeProperty('transform');

    let startY = 0;
    let lastY = 0;
    let lastTime = 0;
    let velocity = 0;
    let canDrag = false;
    let isDragging = false;
    let isDisposed = false;

    const snapBack = (offset: number) => {
      dialog.style.removeProperty('transform');

      if (!window.matchMedia(REDUCED_MOTION_MEDIA_QUERY).matches) {
        dialog.animate([{ transform: `translateY(${offset}px)` }, { transform: 'translateY(0)' }], {
          duration: SNAP_BACK_DURATION,
          easing: 'ease-out',
        });
      }
    };

    const touchStartHandler = (evt: TouchEvent) => {
      const target = evt.target;

      canDrag =
        evt.touches.length === 1 &&
        !!onDismissRef.current &&
        window.matchMedia(SHEET_MEDIA_QUERY).matches &&
        target instanceof Element &&
        !isScrolledFromTop(target, dialog);
      isDragging = false;
      startY = evt.touches[0].clientY;
      lastY = startY;
      lastTime = evt.timeStamp;
      velocity = 0;
    };

    const touchMoveHandler = (evt: TouchEvent) => {
      if (!canDrag) return;

      const y = evt.touches[0].clientY;
      const offset = y - startY;

      if (!isDragging) {
        // moving up scrolls the content, so this gesture is not a drag anymore
        if (offset < 0) {
          canDrag = false;

          return;
        }

        if (offset === 0) return;

        isDragging = true;
      }

      evt.preventDefault();

      velocity = (y - lastY) / Math.max(evt.timeStamp - lastTime, 1);
      lastY = y;
      lastTime = evt.timeStamp;

      dialog.style.transform = `translateY(${Math.max(offset, 0)}px)`;
    };

    const touchEndHandler = (evt: TouchEvent) => {
      if (!isDragging) return;

      isDragging = false;
      canDrag = false;

      const offset = Math.max(lastY - startY, 0);
      const isFlick = velocity > DISMISS_VELOCITY && evt.timeStamp - lastTime < FLICK_MAX_PAUSE;
      const isPastThreshold = offset > dialog.offsetHeight * DISMISS_DISTANCE_RATIO;

      if (evt.type === 'touchend' && (isFlick || isPastThreshold) && onDismissRef.current) {
        onDismissRef.current();

        // the dialog returns to its place if onDismiss did not close the modal
        requestAnimationFrame(() => {
          if (!isDisposed) {
            snapBack(offset);
          }
        });

        return;
      }

      snapBack(offset);
    };

    dialog.addEventListener('touchstart', touchStartHandler, { passive: true });
    dialog.addEventListener('touchmove', touchMoveHandler, { passive: false });
    dialog.addEventListener('touchend', touchEndHandler);
    dialog.addEventListener('touchcancel', touchEndHandler);

    return () => {
      isDisposed = true;

      dialog.removeEventListener('touchstart', touchStartHandler);
      dialog.removeEventListener('touchmove', touchMoveHandler);
      dialog.removeEventListener('touchend', touchEndHandler);
      dialog.removeEventListener('touchcancel', touchEndHandler);
    };
  }, [enabled, dialogRef, onDismissRef]);
}
