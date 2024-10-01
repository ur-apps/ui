import { useId } from 'react';

/**
 * Custom hook that returns the provided name or a fallback name.
 *
 * @param {string} [name] - Optional name to be used.
 * @returns {string} - The provided name if available, otherwise a fallback name.
 */
export function useName(name?: string): string {
  const falbackName = useId();

  return name ?? falbackName;
}
