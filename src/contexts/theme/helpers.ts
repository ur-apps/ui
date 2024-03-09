import { isObject } from 'utils';

export function formatCSSVariables(variables: Record<string, any>, prefix = ''): string[] {
  const result: string[] = [];

  if (isObject(variables)) {
    Object.entries(variables).forEach(([key, value]) => {
      const formattedKey = prefix ? `${prefix}-${key}` : `${key}`;

      if (typeof value === 'object' && value !== null) {
        result.push(...formatCSSVariables(value, formattedKey));
      } else {
        result.push(`--${formattedKey}: ${value}`);
      }
    });
  }

  return result;
}
