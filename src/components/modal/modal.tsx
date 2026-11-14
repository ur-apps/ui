import React, { useCallback, useEffect, useRef } from 'react';
import { classNames, useMergeRefs, useScrollLock } from '@urapps/react';

import { KeyCode } from '../../constants';
import { CssVariableGroup } from '../../contexts';
import { Overlay } from '../overlay';
import { Portal } from '../portal';

import { useFocusTrap, usePresence, useSwipeToDismiss } from './hooks';
import { IModalProps } from './modal.types';
import styles from './modal.module.scss';

export function Modal({
  className,
  overlayClassName,
  shape = 'default',
  size = 'm',
  mobileVariant = 'sheet',
  withOverlay = true,
  isOpen = true,
  closeOnOverlay = true,
  closeOnESC = true,
  onClose,
  ref,
  overlayRef: consumerOverlayRef,
  ...props
}: IModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const mergedOverlayRef = useMergeRefs(overlayRef, consumerOverlayRef);
  const dialogRef = useRef<HTMLDivElement>(null);
  const mergedDialogRef = useMergeRefs(dialogRef, ref);
  const pointerDownOnOverlayRef = useRef(false);
  const isRendered = usePresence(isOpen, overlayRef);

  useScrollLock(isOpen);
  useFocusTrap(overlayRef, isOpen);
  useSwipeToDismiss(dialogRef, isOpen && mobileVariant === 'sheet', onClose);

  const classes = classNames(
    CssVariableGroup.ModalTokens,
    styles.modal,
    styles[`modal--shape-${shape}`],
    styles[`modal--size-${size}`],
    styles[`modal--mobile-${mobileVariant}`],
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
    const dialog = dialogRef.current;

    if (isOpen && dialog && !dialog.contains(document.activeElement)) {
      dialog.focus();
    }
  }, [isOpen]);

  return isRendered ? (
    <Portal>
      <Overlay
        className={classNames(
          styles.overlay,
          styles[`overlay--mobile-${mobileVariant}`],
          { [styles['overlay--hidden']]: !withOverlay, [styles['overlay--closing']]: !isOpen },
          overlayClassName
        )}
        tabIndex={-1}
        onPointerDown={overlayPointerDownHandler}
        onClick={overlayClickHandler}
        ref={mergedOverlayRef}>
        <div {...props} className={classes} ref={mergedDialogRef} role="dialog" aria-modal="true" tabIndex={-1} />
      </Overlay>
    </Portal>
  ) : null;
}
