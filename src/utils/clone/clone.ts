import { isArray, isObject } from '../get-type';

export function cloneObject<T extends Record<string, any>>(obj: T, clonedMap = new WeakMap()): T {
  if (clonedMap.has(obj)) {
    return clonedMap.get(obj);
  }

  const newObject = {} as T;

  clonedMap.set(obj, newObject);

  for (const [key, value] of Object.entries(obj)) {
    newObject[key as keyof T] = clone(value, clonedMap);
  }

  return newObject;
}

export function cloneArray<T extends Array<any>>(arr: T, clonedMap = new WeakMap()): T {
  if (clonedMap.has(arr)) {
    return clonedMap.get(arr);
  }

  const newArray = [] as unknown as T;

  clonedMap.set(arr, newArray);

  for (const value of arr) {
    newArray.push(clone(value, clonedMap));
  }

  return newArray;
}

export function clone<T>(value: T, clonedMap = new WeakMap()): T {
  if (isArray(value)) {
    return cloneArray(value, clonedMap);
  } else if (isObject(value)) {
    return cloneObject(value, clonedMap);
  }

  return value;
}
