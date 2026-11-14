import React, { useCallback, useEffect, useRef, useState } from 'react';
import { classNames, useScrollLock } from '@urapps/react';

import { KeyCode } from '../../constants';
import { CssVariableGroup } from '../../contexts';
import { Overlay } from '../overlay';
import { Portal } from '../portal';

import { useFocusTrap } from './hooks';
import { IModalProps } from './modal.types';
import styles from './modal.module.scss';

export function Modal({
  className,
  overlayClassName,
  shape = 'default',
  size = 'm',
  withOverlay = true,
  isOpen = true,
  closeOnOverlay = true,
  closeOnESC = true,
  onClose,
  ref,
  ...props
}: IModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pointerDownOnOverlayRef = useRef(false);
  const [isRendered, setIsRendered] = useState(isOpen);

  if (isOpen && !isRendered) {
    setIsRendered(true);
  }

  useScrollLock(isOpen);
  useFocusTrap(overlayRef, isOpen);

  const classes = classNames(
    CssVariableGroup.ModalTokens,
    styles.modal,
    styles[`modal--shape-${shape}`],
    styles[`modal--size-${size}`],
    className
  );

  const overlayPointerDownHandler = (evt: React.PointerEvent) => {
    pointerDownOnOverlayRef.current = evt.currentTarget === evt.target;
  };

  // closes only when both the press and the release happened on the overlay itself,
  // so a text selection started inside the modal and released outside does not close it
  const overlayClickHandler = (evt: React.MouseEvent) => {
    if (onClose && closeOnOverlay && pointerDownOnOverlayRef.current && evt.currentTarget === evt.target) {
      onClose();
    }
  };

  const escPressHandler = useCallback(
    (evt: KeyboardEvent) => {
      if (onClose && evt.code === KeyCode.Escape) {
        // This is needed for the Safari browser to prevent exiting full screen mode
        evt.preventDefault();
        evt.stopPropagation();

        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen && closeOnESC && overlayRef.current) {
      const overlay = overlayRef.current;
      overlay.addEventListener('keydown', escPressHandler);

      return () => {
        overlay.removeEventListener('keydown', escPressHandler);
      };
    }
  }, [isOpen, closeOnESC, escPressHandler]);

  useEffect(() => {
    const dialog = overlayRef.current?.querySelector<HTMLElement>(':scope > [role="dialog"]');

    if (isOpen && dialog && !dialog.contains(document.activeElement)) {
      dialog.focus();
    }
  }, [isOpen]);

  // keeps the modal mounted until the closing animations of the overlay and the dialog finish
  useEffect(() => {
    if (isOpen || !isRendered) return;

    const overlay = overlayRef.current;
    const dialog = overlay?.querySelector<HTMLElement>(':scope > [role="dialog"]');
    const animations = [overlay, dialog].flatMap((element) => element?.getAnimations() ?? []);
    let cancelled = false;

    Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
      if (!cancelled) {
        setIsRendered(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [isOpen, isRendered]);

  return isRendered ? (
    <Portal>
      <Overlay
        className={classNames(
          styles.overlay,
          { [styles['overlay--hidden']]: !withOverlay, [styles['overlay--closing']]: !isOpen },
          overlayClassName
        )}
        tabIndex={-1}
        onPointerDown={overlayPointerDownHandler}
        onClick={overlayClickHandler}
        ref={overlayRef}>
        <div {...props} className={classes} ref={ref} role="dialog" aria-modal="true" tabIndex={-1} />
      </Overlay>
    </Portal>
  ) : null;
}
