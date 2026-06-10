import NextLink from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center bg-[#fff5eb] px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-bebas text-3xl tracking-[0.08em] text-[#2181c2]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black text-[#13362f] sm:text-5xl">
          This page could not be found.
        </h1>
        <NextLink
          className="mt-8 inline-flex rounded-full bg-[#2181c2] px-6 py-3 font-semibold text-white"
          href="/"
        >
          Return home
        </NextLink>
      </div>
    </section>
  );
}
