const LOCAL_SITE_URL = "http://localhost:3000";

function normalizeUrl(value: string) {
  return /^https?:\/\//.test(value) ? value : `https://${value}`;
}

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const deploymentUrl = process.env.VERCEL_URL?.trim();
  const value =
    configuredUrl || productionUrl || deploymentUrl || LOCAL_SITE_URL;

  return new URL(normalizeUrl(value));
}

export function isSearchIndexingEnabled() {
  return (
    process.env.SITE_ALLOW_INDEXING === "true" &&
    process.env.VERCEL_ENV !== "preview"
  );
}
