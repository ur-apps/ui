import { IStatusIconStyleTokens } from './status-icon.types';

export const statusIconStyleTokens: IStatusIconStyleTokens = {
  color: {
    info: 'var(--uu-color-neutral-1000)',
    success: 'var(--uu-color-success-500)',
    warning: 'var(--uu-color-warning-500)',
    error: 'var(--uu-color-danger-500)',
  },
  height: {
    xs: 'var(--uu-icon-height-xs)',
    s: 'var(--uu-icon-height-s)',
    m: 'var(--uu-icon-height-m)',
    l: 'var(--uu-icon-height-l)',
  },
};
