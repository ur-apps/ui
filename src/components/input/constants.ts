import type { HintIcon, HintVariant } from '../hint';
import type { TooltipShape } from '../tooltip';

import type { InputShape, InputStatus, InputVariant } from './input.types';

export const hintIconMap: Record<InputStatus, HintIcon> = {
  default: 'info',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
};

export const hintVariantMap: Record<InputVariant, HintVariant> = {
  filled: 'filled',
  outlined: 'outlined',
  clear: 'outlined',
};

export const hintShapeMap: Record<InputShape, TooltipShape> = {
  default: 'default',
  brick: 'brick',
  round: 'default',
};
