import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { getSiteUrl, isSearchIndexingEnabled } from "@/config/site-url";
import { fontBebas, fontBungee, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "summer camp",
  keywords: [
    "Camp Messiah",
    "summer camp",
    "Temple Hills summer camp",
    "Maryland summer camp",
    "STEAM camp",
    "robotics camp",
    "music camp",
    "children's summer programs",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: isSearchIndexingEnabled()
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
      },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#13362f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
          fontBebas.variable,
          fontBungee.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="border-t border-[#d8d0c2] bg-[#13362f] text-[#f6efe5]">
              <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-bold">Camp Messiah</p>
                  <p className="text-sm text-[#d8d8cd]">{siteConfig.address}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-[#d8d8cd]">
                  <a
                    className="transition hover:text-white"
                    href={siteConfig.links.map}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View Map
                  </a>
                </div>
              </div>
            </footer>
          </div>
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
