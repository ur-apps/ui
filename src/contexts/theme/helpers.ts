import { isObject } from 'utils';

export function formatToCSSVariables(variables: Record<string, any>, prefix = ''): string[] {
  const result: string[] = [];

  if (isObject(variables)) {
    Object.entries(variables).forEach(([key, value]) => {
      const formattedKey = prefix ? `${prefix}-${key}` : `${key}`;

      if (typeof value === 'object' && value !== null) {
        result.push(...formatToCSSVariables(value, formattedKey));
      } else {
        result.push(`--${formattedKey}: ${value}`);
      }
    });
  }

  return result;
}

export function getVariableStyles(variables: Record<string, any>, className: string, prefix = '') {
  const tokens = formatToCSSVariables(variables, prefix);

  return tokens.length ? `.${className} { \n${tokens.join(';\n')};\n}` : '';
}
