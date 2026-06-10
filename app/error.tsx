"use client";

import { useEffect } from "react";
import NextLink from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[65vh] items-center bg-[#fff5eb] px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-bebas text-2xl tracking-[0.08em] text-[#2181c2]">
          Something went wrong
        </p>
        <h1 className="mt-4 text-4xl font-black text-[#13362f] sm:text-5xl">
          We could not load this page.
        </h1>
        <p className="mt-5 text-base leading-7 text-[#4b5e59]">
          Try the page again. If the issue continues, return to the Camp Messiah
          home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            className="rounded-full bg-[#2181c2] px-6 py-3 font-semibold text-white"
            type="button"
            onClick={() => reset()}
          >
            Try again
          </button>
          <NextLink
            className="rounded-full border border-[#13362f] px-6 py-3 font-semibold text-[#13362f]"
            href="/"
          >
            Go home
          </NextLink>
        </div>
      </div>
    </section>
  );
}
