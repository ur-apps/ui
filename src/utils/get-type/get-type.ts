type TValueType =
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'null'
  | 'undefined'
  | 'object'
  | 'array'
  | 'date'
  | 'function';

export function getType(value: unknown): TValueType {
  if (value === null) {
    return 'null';
  }

  if (Array.isArray(value)) {
    return 'array';
  }

  if (value instanceof Date) {
    return 'date';
  }

  return typeof value;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is object {
  return getType(value) === 'object';
}

export function isAllowedType(value: unknown, allowed: TValueType[]): boolean {
  return allowed.includes(getType(value));
}
