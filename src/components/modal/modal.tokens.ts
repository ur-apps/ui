import { IModalStyleTokens } from './modal.types';

export const modalStyleTokens: IModalStyleTokens = {
  color: {
    bg: 'var(--uu-color-bg-primary)',
    border: 'var(--uu-color-neutral-a15)',
  },
  'box-shadow': {
    dialog: '0 2px 8px 0 rgba(0, 0, 0, 0.15)',
    sheet: '0 -3px 8px 0 rgba(0, 0, 0, 0.15)',
  },
  width: {
    dialog: {
      s: '320px',
      m: '480px',
      l: '560px',
    },
  },
  'horizontal-padding': {
    dialog: {
      s: 'var(--uu-space-l)',
      m: 'var(--uu-space-xl)',
      l: 'var(--uu-space-2xl)',
    },
    sheet: {
      s: 'var(--uu-space-m)',
      m: 'var(--uu-space-l)',
      l: 'var(--uu-space-xl)',
    },
  },
  'vertical-padding': {
    dialog: {
      s: 'var(--uu-space-l)',
      m: 'var(--uu-space-xl)',
      l: 'var(--uu-space-2xl)',
    },
    sheet: {
      s: 'var(--uu-space-m)',
      m: 'var(--uu-space-l)',
      l: 'var(--uu-space-xl)',
    },
  },
  'border-radius': {
    dialog: {
      s: 'var(--uu-radius-m)',
      m: 'var(--uu-radius-l)',
      l: 'var(--uu-radius-xl)',
    },
    sheet: {
      s: 'var(--uu-radius-m)',
      m: 'var(--uu-radius-l)',
      l: 'var(--uu-radius-xl)',
    },
  },
};

export const modalDarkModeStyleTokens: IModalStyleTokens = {
  'box-shadow': {
    dialog: '0 2px 8px 0 rgba(0, 0, 0, 0.4)',
    sheet: '0 -3px 8px 0 rgba(0, 0, 0, 0.4)',
  },
};
