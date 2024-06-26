import React, { forwardRef, useCallback, useEffect, useRef } from 'react';

import { KeyCode } from 'constants/';
import { CssVariableGroup } from 'contexts';
import { classNames } from 'utils';

import { Overlay } from '../overlay';
import { Portal } from '../portal';

import { IModalProps } from './modal.types';
import styles from './modal.module.scss';

export const Modal = forwardRef<HTMLDivElement, IModalProps>(function Modal(
  {
    className,
    shape,
    size,
    withOverlay = true,
    isOpen = true,
    closeOnOverlay = true,
    closeOnESC = true,
    onClose,
    ...props
  },
  ref
) {
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
      overlayRef.current.addEventListener('keydown', escPressHandler);
      overlayRef.current.focus();

      return () => {
        overlayRef.current?.removeEventListener('keydown', escPressHandler);
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
});
