import type { Metadata } from "next";

import Image from "next/image";
import { Card } from "@heroui/react";

import { faqCards } from "@/config/camp-content";

const faqHeroWords = ["Frequently", "Asked", "Questions"] as const;

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about what campers should bring, discounts, weather, age groups, instruments, and Camp Messiah instructors.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <section className="overflow-hidden bg-[#2181c2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-0 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="pb-12 lg:pt-4 lg:pb-16">
            <h1 className="font-vietnam text-6xl font-semibold leading-[0.9] text-[#ffbd59] sm:text-8xl lg:text-[7.4rem]">
              {faqHeroWords.map((word, index) => (
                <span
                  key={word}
                  className="faq-word-reveal block"
                  style={{ animationDelay: `${index * 160}ms` }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="mt-8 font-bebas text-2xl tracking-[0.06em] text-white sm:text-3xl">
              Everything you need before game day.
            </p>
          </div>

          <div className="flex h-full items-end justify-center lg:justify-end">
            <Image
              priority
              alt="Person holding a soccer ball"
              className="faq-drop-in h-auto w-full max-w-[32rem] object-contain object-bottom sm:max-w-[38rem] lg:max-w-[42rem]"
              height={1600}
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/faizan-ali-bgBdGYkYWy4-unsplash.png"
              width={1200}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#ffbd59]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {faqCards.map((card) => (
              <Card
                key={card.id}
                className="min-h-[22rem] rounded-none border border-[#1e6ea4] bg-[#2181c2] text-white shadow-none xl:aspect-square xl:min-h-0"
              >
                <Card.Content className="flex h-full flex-col p-6 sm:p-7">
                  <p className="font-vietnam text-5xl font-semibold leading-none text-white sm:text-6xl">
                    {card.number}.
                  </p>

                  <div className="mt-5 space-y-4">
                    <h2 className="font-bebas text-3xl leading-[0.95] tracking-[0.04em] text-white sm:text-[2.25rem]">
                      {card.title}
                    </h2>

                    <div className="space-y-3 font-bebas text-base leading-6 tracking-[0.05em] text-white/80 sm:text-lg sm:leading-7">
                      {card.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
