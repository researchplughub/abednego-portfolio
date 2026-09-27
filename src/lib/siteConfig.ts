/**
 * Centralized site configuration.
 * Uses NEXT_PUBLIC_SITE_URL as the single source of truth for canonical URLs,
 * Open Graph URLs, sitemaps, JSON-LD, and metadata.
 */
export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl && envUrl.trim() !== "") {
    return envUrl.replace(/\/+$/, "");
  }
  return "http://localhost:3000";
}
