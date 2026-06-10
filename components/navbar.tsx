"use client";

import NextLink from "next/link";
import { Drawer, useOverlayState } from "@heroui/react";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const drawerState = useOverlayState();

  return (
    <header className="sticky top-0 z-40 bg-[#13362f] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NextLink className="min-w-0" href="/">
          <span className="truncate text-lg font-black text-white sm:text-xl">
            Camp Messiah
          </span>
        </NextLink>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="text-sm font-medium text-white transition hover:opacity-70"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:hidden">
          <Drawer state={drawerState}>
            <Drawer.Trigger className="drawer__trigger min-w-0 rounded-full p-0 text-white transition hover:opacity-80">
              <span className="inline-flex min-h-10 min-w-10 items-center justify-center">
                <span className="sr-only">Open navigation menu</span>
                <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
                  <span className="block h-0.5 w-5 rounded-full bg-white" />
                  <span className="block h-0.5 w-5 rounded-full bg-white" />
                  <span className="block h-0.5 w-5 rounded-full bg-white" />
                </span>
              </span>
            </Drawer.Trigger>

            <Drawer.Backdrop className="bg-black/45">
              <Drawer.Content placement="right">
                <Drawer.Dialog className="ml-auto flex h-full w-full max-w-[19rem] flex-col bg-[#13362f] p-0 text-white outline-none">
                  <Drawer.Header className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                    <Drawer.Heading className="text-lg font-bold text-white">
                      Menu
                    </Drawer.Heading>
                    <button
                      className="border border-white/15 px-3 py-1 text-sm text-white transition hover:bg-white/10"
                      type="button"
                      onClick={() => drawerState.close()}
                    >
                      Close
                    </button>
                  </Drawer.Header>

                  <Drawer.Body className="flex-1 px-6 py-6">
                    <nav aria-label="Mobile primary">
                      <ul className="space-y-4">
                        {siteConfig.navItems.map((item) => (
                          <li key={item.href}>
                            <NextLink
                              className="block border-b border-white/10 pb-4 text-2xl font-bebas tracking-[0.06em] text-white"
                              href={item.href}
                              onClick={() => drawerState.close()}
                            >
                              {item.label}
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </Drawer.Body>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
