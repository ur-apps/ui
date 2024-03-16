export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const picked: Partial<Pick<T, K>> = {};

  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      picked[key] = obj[key];
    }
  });

  return picked as Pick<T, K>;
}
