import { HTMLAttributes, Ref } from 'react';
import { TClasses } from '@urapps/react';

export type TModalShape = 'default' | 'brick';
export type TModalSize = 's' | 'm' | 'l';
export type TModalMobileVariant = 'sheet' | 'dialog';

export interface IModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /**
   * additional css class name(s)
   */
  className?: string | TClasses;
  /**
   * overlay additional css class name(s)
   */
  overlayClassName?: string | TClasses;
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
   * modal presentation on screens narrower than 640px:
   * "sheet" slides up from the bottom edge, "dialog" stays centered
   * @default "sheet"
   */
  mobileVariant?: TModalMobileVariant;
  /**
   * use overlay
   * @default true
   */
  withOverlay?: boolean;
  /**
   * is modal open (shown)
   * @default true
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
   */
  onClose?: () => void;
  /**
   * reference to the modal element
   */
  ref?: Ref<HTMLDivElement>;
}

/**
 * Geometry tokens are keyed by presentation: "sheet" applies only on screens narrower than 640px
 * when mobileVariant is "sheet", "dialog" applies in every other case.
 */
export interface IModalStyleTokens {
  color?: {
    bg?: string;
    border?: string;
  };
  'box-shadow'?: {
    [variant in TModalMobileVariant]?: string;
  };
  width?: {
    dialog?: {
      [size in TModalSize]?: string;
    };
  };
  height?: {
    [variant in TModalMobileVariant]?: {
      [size in TModalSize]?: string;
    };
  };
  'horizontal-padding'?: {
    [variant in TModalMobileVariant]?: {
      [size in TModalSize]?: string;
    };
  };
  'vertical-padding'?: {
    [variant in TModalMobileVariant]?: {
      [size in TModalSize]?: string;
    };
  };
  'border-width'?: {
    [variant in TModalMobileVariant]?: {
      [size in TModalSize]?: string;
    };
  };
  'border-radius'?: {
    [variant in TModalMobileVariant]?: {
      [size in TModalSize]?: string;
    };
  };
}
