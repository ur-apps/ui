import React, { useCallback, useEffect, useRef } from 'react';
import { classNames } from '@ur-apps/common-fe';

import { KeyCode } from 'constants/';
import { CssVariableGroup } from 'contexts';

import { Overlay } from '../overlay';
import { Portal } from '../portal';

import { IModalProps } from './modal.types';
import styles from './modal.module.scss';

export function Modal({
  className,
  shape,
  size,
  withOverlay = true,
  isOpen = true,
  closeOnOverlay = true,
  closeOnESC = true,
  onClose,
  ref,
  ...props
}: IModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const classes = classNames(
    CssVariableGroup.ModalTokens,
    styles.modal,
    styles[`modal--shape-${shape}`],
    styles[`modal--size-${size}`],
    className
  );

  const overlayClickHandler = (evt: React.MouseEvent) => {
    if (onClose && closeOnOverlay && evt.currentTarget === evt.target) {
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
      overlay.focus();

      return () => {
        overlay.removeEventListener('keydown', escPressHandler);
      };
    }
  }, [isOpen, closeOnESC, escPressHandler]);

  return isOpen ? (
    <Portal>
      <Overlay
        className={classNames(styles.overlay, { [styles['overlay--hidden']]: !withOverlay })}
        tabIndex={-1}
        onClick={overlayClickHandler}
        ref={overlayRef}>
        <div {...props} className={classes} ref={ref} />
      </Overlay>
    </Portal>
  ) : null;
}
