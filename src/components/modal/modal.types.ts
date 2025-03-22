import { HTMLAttributes, Ref } from 'react';

import { TClasses } from 'utils';

export type TModalShape = 'default' | 'brick';
export type TModalSize = 's' | 'm' | 'l';

export interface IModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * additinal css class name(s)
   */
  className?: string | TClasses;
  /**
   * modal corner shape
   * @default "default"
   */
  shape?: TModalShape;
  /**
   * modal size
   * @default "m"
   */
  size?: TModalSize;
  /**
   * use overlay
   * @default true
   */
  withOverlay?: boolean;
  /**
   * is modal open (shown)
   * @default false
   */
  isOpen?: boolean;
  /**
   * should modal be closed when clicking outside of it
   * @default true
   */
  closeOnOverlay?: boolean;
  /**
   * should modal be closed when pressing the ESC key
   * @default true
   */
  closeOnESC?: boolean;
  /**
   * close modal handler
   * @default true
   */
  onClose?: () => void;
  /**
   * reference to the modal element
   */
  ref?: Ref<HTMLDivElement>;
}

export interface IModalStyleTokens {
  color?: {
    bg?: string;
    border?: string;
    'overlay-bg'?: string;
  };
  width?: {
    [size in TModalSize]?: string;
  };
  height?: {
    [size in TModalSize]?: string;
  };
  padding?: {
    [size in TModalSize]?: string;
  };
  'border-width'?: {
    [size in TModalSize]?: string;
  };
  'border-radius'?: {
    [size in TModalSize]?: string;
  };
}
