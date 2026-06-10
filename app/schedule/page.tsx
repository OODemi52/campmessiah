import type { Metadata } from "next";

import Image from "next/image";
import NextLink from "next/link";
import { Card } from "@heroui/react";

import { scheduleRows } from "@/config/camp-content";

export const metadata: Metadata = {
  title: "Camp Schedule",
  description:
    "Review Camp Messiah session dates, age groups, weekly pricing, and program notes for summer camp in Temple Hills, Maryland.",
  alternates: {
    canonical: "/schedule",
  },
};

export default function SchedulePage() {
  return (
    <section className="overflow-x-clip bg-[#ffbd59]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
          <Image
            priority
            alt="Camp Messiah schedule page hero"
            className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
            height={1200}
            sizes="(min-width: 1280px) 1280px, 100vw"
            src="/images/pexels-rdne-8033864.jpg"
            width={1800}
          />
        </div>

        <div className="mx-auto mt-10 max-w-5xl text-center">
          <h1 className="font-vietnam text-balance text-[3.25rem] font-black uppercase leading-[0.9] tracking-[0.03em] text-[#2181c2] sm:text-7xl sm:tracking-[0.05em] lg:text-[9rem] lg:tracking-[0.06em]">
            Camp Calendar
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-balance font-bebas text-lg leading-6 tracking-[0.03em] text-[#4b5e59] sm:text-[1.75rem] sm:leading-7">
            Review the current camp schedule below, then use the registration
            form to share your family&apos;s interest.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <NextLink
              className="button button--primary button--lg rounded-full bg-[#2181c2] px-8 text-white shadow-none"
              href="/registration"
            >
              Register now
            </NextLink>
            <NextLink
              className="inline-flex items-center rounded-full border border-[#16362f] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#16362f] transition hover:opacity-70"
              href="/faq"
            >
              FAQ
            </NextLink>
          </div>
        </div>

        <Card className="mt-10 overflow-hidden rounded-[1.75rem] border border-[#e4d6c3] bg-white shadow-none">
          <div className="grid gap-4 p-4 sm:p-5 md:hidden">
            {scheduleRows.map((row) => (
              <div
                key={row.id}
                className="rounded-[1.35rem] border border-[#e9dfd3] bg-[#fffaf4] p-5"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6d67]">
                      Dates
                    </p>
                    <p className="mt-1 text-base font-semibold text-[#16362f]">
                      {row.dates}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6d67]">
                      Age Group
                    </p>
                    <p className="mt-1 text-base text-[#4b5e59]">
                      {row.ageGroup}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6d67]">
                      Price
                    </p>
                    <p className="mt-1 text-base font-semibold text-[#16362f]">
                      {row.price}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f6d67]">
                      Notes
                    </p>
                    <div className="mt-2 space-y-1">
                      {row.notes.map((note, index) => (
                        <p
                          key={`${row.id}-mobile-note-${index}`}
                          className={
                            index === 0
                              ? "text-base font-semibold text-[#16362f]"
                              : "text-sm leading-6 text-[#4b5e59]"
                          }
                        >
                          {note}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#2181c2]">
                <tr>
                  <th className="rounded-tl-[1.75rem] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    Dates
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    Age Group
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    Price
                  </th>
                  <th className="rounded-tr-[1.75rem] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row) => (
                  <tr key={row.id} className="border-t border-[#e9dfd3]">
                    <td className="px-5 py-4 text-center align-middle text-sm font-semibold text-[#16362f]">
                      {row.dates}
                    </td>
                    <td className="px-5 py-4 text-center align-middle text-sm text-[#4b5e59]">
                      {row.ageGroup}
                    </td>
                    <td className="px-5 py-4 text-center align-middle text-sm text-[#16362f]">
                      {row.price}
                    </td>
                    <td className="px-5 py-4 text-center align-middle text-sm leading-6 text-[#4b5e59]">
                      <div className="space-y-1">
                        {row.notes.map((note, index) => (
                          <p
                            key={`${row.id}-note-${index}`}
                            className={
                              index === 0 ? "font-semibold text-[#16362f]" : ""
                            }
                          >
                            {note}
                          </p>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}
