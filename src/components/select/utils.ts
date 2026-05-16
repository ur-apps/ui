import { isArray } from '@ur-apps/common';

import { IOptionProps, TOptionValue } from '../option';

export function stringifyValue(
  value: TOptionValue | TOptionValue[] | undefined,
  optionsMap: Record<TOptionValue, IOptionProps>
): string {
  if (isArray(value)) {
    return value.reduce<string>((acc, current) => {
      const label = optionsMap[current]?.label;

      if (!acc) {
        return label ?? '';
      }

      if (label) {
        return `${acc}, ${label}`;
      }

      return acc;
    }, '');
  }

  return value ? optionsMap[value as TOptionValue]?.label : '';
}
