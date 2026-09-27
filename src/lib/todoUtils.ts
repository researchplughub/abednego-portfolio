/**
 * Utility functions to ensure NO TODO value is ever rendered in the UI.
 * Validates strings, arrays, and objects to strictly exclude any unverified placeholder data.
 */

export function isTodo(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") {
    const trimmed = value.trim();
    return (
      trimmed.includes("[TODO") ||
      trimmed.includes("TODO:") ||
      trimmed.startsWith("TODO") ||
      /\bTODO\b/i.test(trimmed)
    );
  }
  return false;
}

/**
 * Returns the string only if it is NOT a TODO, otherwise returns undefined.
 */
export function cleanValue(value?: string): string | undefined {
  if (!value) return undefined;
  if (isTodo(value)) return undefined;
  return value;
}

/**
 * Filters an array of strings, removing all items containing TODO markers.
 */
export function filterCleanList(list?: string[]): string[] {
  if (!list || !Array.isArray(list)) return [];
  return list.filter((item) => !isTodo(item));
}

/**
 * Checks if a string has a valid URL that is not a placeholder or TODO.
 */
export function isValidUrl(url?: string): boolean {
  if (!url || isTodo(url)) return false;
  try {
    // If it's a mailto or tel link
    if (url.startsWith("mailto:") || url.startsWith("tel:")) {
      const target = url.split(":")[1];
      return !isTodo(target) && target.includes("@");
    }
    // Check standard URLs
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    // Relative URLs
    return url.startsWith("/") && !isTodo(url);
  }
}
