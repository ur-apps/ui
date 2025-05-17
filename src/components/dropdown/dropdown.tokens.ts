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
  },
  height: {
    s: 'var(--uu-height-s)',
    m: 'var(--uu-height-m)',
    l: 'var(--uu-height-l)',
  },
  'border-radius': {
    s: 'var(--uu-radius-xs)',
    m: 'var(--uu-radius-s)',
    l: 'var(--uu-radius-m)',
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
};
