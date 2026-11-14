import { IDropdownStyleTokens } from './dropdown.types';

export const dropdownStyleTokens: IDropdownStyleTokens = {
  color: {
    bg: {
      filled: {
        default: 'var(--uu-color-neutral-100)',
      },
      outlined: {
        default: 'var(--uu-color-bg-primary)',
      },
      clear: {
        default: 'var(--uu-color-bg-primary)',
      },
    },
    border: {
      outlined: {
        default: 'var(--uu-color-neutral-a15)',
      },
      clear: {
        default: 'var(--uu-color-neutral-a15)',
      },
    },
    text: {
      filled: {
        empty: 'var(--uu-color-text-secondary)',
      },
      outlined: {
        empty: 'var(--uu-color-text-secondary)',
      },
      clear: {
        empty: 'var(--uu-color-text-secondary)',
      },
    },
  },
  'box-shadow': '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
  height: {
    s: 'var(--uu-height-s)',
    m: 'var(--uu-height-m)',
    l: 'var(--uu-height-l)',
  },
  'horizontal-padding': {
    s: 'var(--uu-space-s)',
    m: 'var(--uu-space-m)',
    l: 'var(--uu-space-l)',
  },
  'border-radius': {
    s: 'var(--uu-radius-xs)',
    m: 'var(--uu-radius-s)',
    l: 'var(--uu-radius-m)',
  },
  'font-size': {
    s: 'var(--uu-font-size-xs)',
    m: 'var(--uu-font-size-s)',
    l: 'var(--uu-font-size-m)',
  },
  'line-height': {
    s: 'var(--uu-line-height-xs)',
    m: 'var(--uu-line-height-s)',
    l: 'var(--uu-line-height-m)',
  },
  'font-weight': {
    s: 'var(--uu-font-weight-400)',
    m: 'var(--uu-font-weight-400)',
    l: 'var(--uu-font-weight-400)',
  },
};

export const dropdownDarkModeStyleTokens: IDropdownStyleTokens = {
  color: {
    bg: {
      filled: {
        default: 'var(--uu-color-neutral-200)',
      },
    },
  },
  'box-shadow': '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
};
