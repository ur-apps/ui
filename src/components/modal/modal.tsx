import React, { useEffect, useCallback } from 'react';

import { CloseIcon } from 'icons';
import { useTheme } from 'contexts';
import { classNames } from 'utils';
import styles from './modal.module.scss';

export interface IModalProps {
  className?: string;
  overlayClassName?: string;
  size?: 's' | 'm' | 'l';
  colorScheme?: 'white' | 'black';
  autoColor?: boolean;
  onClose: () => void;
  closeOnOverlay?: boolean;
  closeOnESC?: boolean;
  children?: React.ReactNode;
}

Modal.defaultProps = {
  size: 'm',
  colorScheme: 'white',
  autoColor: true,
  closeOnOverlay: true,
  closeOnESC: true,
} as IModalProps;

export function Modal({
  className,
  overlayClassName,
  size,
  colorScheme,
  autoColor,
  onClose,
  closeOnOverlay,
  closeOnESC,
  children,
}: IModalProps) {
  const { theme } = useTheme();

  const overlayClickHandler = (evt: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    if (evt.currentTarget === evt.target) onClose();
  };

  const keyUpHandler = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (closeOnESC) {
      document.addEventListener('keyup', keyUpHandler);

      return () => {
        document.removeEventListener('keyup', keyUpHandler);
      };
    }
  }, [closeOnESC, keyUpHandler]);

  return (
    <div
      className={classNames(
        styles.overlay,
        styles[`overlay--${colorScheme}`],
        autoColor ? styles[`overlay--${theme}-mode`] : undefined,
        overlayClassName
      )}
      onClick={closeOnOverlay ? overlayClickHandler : undefined}>
      <div
        className={classNames(
          styles.modal,
          styles[`modal--${size}`],
          styles[`modal--${colorScheme}`],
          autoColor ? styles[`modal--${theme}-mode`] : undefined,
          className
        )}>
        {children}
        <button
          type="button"
          className={classNames(
            styles.close,
            styles[`close--${size}`],
            styles[`close--${colorScheme}`],
            autoColor ? styles[`close--${theme}-mode`] : undefined
          )}
          onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
