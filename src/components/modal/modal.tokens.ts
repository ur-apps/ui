import { IModalStyleTokens } from './modal.types';

export const modalStyleTokens: IModalStyleTokens = {
  color: {
    bg: 'var(--uu-color-bg-primary)',
    border: 'var(--uu-color-neutral-a15)',
  },
  'box-shadow': '0 -3px 8px 0 rgba(0, 0, 0, 0.15)',
  width: {
    s: '320px',
    m: '480px',
    l: '560px',
  },
  padding: {
    s: 'var(--uu-space-l)',
    m: 'var(--uu-space-xl)',
    l: 'var(--uu-space-2xl)',
  },
  'border-radius': {
    s: 'var(--uu-radius-m)',
    m: 'var(--uu-radius-l)',
    l: 'var(--uu-radius-xl)',
  },
};

export const modalDarkModeStyleTokens: IModalStyleTokens = {
  'box-shadow': '0 -3px 8px 0 rgba(0, 0, 0, 0.4)',
};
