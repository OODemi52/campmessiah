import type { MetadataRoute } from "next";

import { getSiteUrl, isSearchIndexingEnabled } from "@/config/site-url";

export default function robots(): MetadataRoute.Robots {
  if (!isSearchIndexingEnabled()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", getSiteUrl()).toString(),
  };
}
