import { isAllowedType, isArray, isObject } from '@ur-apps/common';

export function merge<T extends Record<string, any>>(target: T, ...sources: Array<Record<string, any>>): T {
  if (!isAllowedType(target, ['array', 'object'])) {
    console.warn('Target must be object or array');

    return target;
  }

  for (const source of sources) {
    if (!isAllowedType(source, ['array', 'object'])) {
      console.warn('Source must be object or array, skiping this item...');

      continue;
    }

    for (const key in source) {
      if (
        Object.prototype.hasOwnProperty.call(target, key) &&
        ((isObject(target[key]) && isObject(source[key])) || (isArray(target[key]) && isArray(source[key])))
      ) {
        merge(target[key], source[key]);
      } else {
        target[key as keyof T] = source[key];
      }
    }
  }

  return target;
}
