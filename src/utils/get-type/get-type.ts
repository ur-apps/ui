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

export function isString(value: any): value is string {
  return typeof value === 'string';
}

export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

export function isObject(value: any): value is object {
  return getType(value) === 'object';
}

export function isAllowedType(value: any, allowed: TValueType[]): boolean {
  return allowed.includes(getType(value));
}
