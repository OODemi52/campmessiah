import type { Metadata } from "next";

import Image from "next/image";
import NextLink from "next/link";
import { Card } from "@heroui/react";

import { activityHighlights, programTracks } from "@/config/camp-content";
import { RegistrationSection } from "@/components/registration-section";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const overviewCollageImages = [
  {
    src: "/images/activity-dance.jpg",
    alt: "Campers dancing in a classroom",
    className:
      "rotate-[-4deg] lg:absolute lg:left-[2%] lg:top-8 lg:w-[24%] lg:-rotate-6",
  },
  {
    src: "/images/activity-bounce.jpg",
    alt: "Camper bouncing and playing",
    className:
      "rotate-[3deg] lg:absolute lg:left-[6%] lg:top-[36%] lg:w-[16%] lg:rotate-[4deg]",
  },
  {
    src: "/images/activity-crafts.jpg",
    alt: "Campers doing a crafts activity",
    className:
      "rotate-[5deg] lg:absolute lg:right-[12%] lg:top-[42%] lg:w-[20%] lg:-rotate-[5deg]",
  },
  {
    src: "/images/activity-table-group.jpg",
    alt: "Campers gathered around a table doing crafts",
    className:
      "rotate-[-3deg] lg:absolute lg:right-[4%] lg:top-12 lg:w-[24%] lg:rotate-[6deg]",
  },
  {
    src: "/images/activity-group.jpg",
    alt: "Group of campers posing indoors",
    className:
      "rotate-[2deg] lg:absolute lg:left-[23%] lg:top-[10%] lg:w-[20%] lg:rotate-[3deg]",
  },
  {
    src: "/images/activity-limbo.jpg",
    alt: "Camper doing limbo",
    className:
      "rotate-[-5deg] lg:absolute lg:right-[26%] lg:top-[8%] lg:w-[13%] lg:-rotate-[7deg]",
  },
  {
    src: "/images/activity-ring-toss.jpg",
    alt: "Camper playing ring toss",
    className:
      "rotate-[4deg] lg:absolute lg:left-[18%] lg:bottom-[8%] lg:w-[16%] lg:rotate-[7deg]",
  },
  {
    src: "/images/activity-jump.jpg",
    alt: "Camper jumping indoors",
    className:
      "rotate-[-4deg] lg:absolute lg:right-[3%] lg:bottom-[9%] lg:w-[16%] lg:rotate-[4deg]",
  },
  {
    src: "/images/activity-playground.jpg",
    alt: "Camper climbing on a playground",
    className:
      "rotate-[6deg] lg:absolute lg:left-0 lg:bottom-0 lg:w-[14%] lg:-rotate-[8deg]",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="overflow-x-clip bg-[#ffbd59]">
        <div className="mx-auto grid max-w-7xl items-center justify-items-center gap-10 px-6 py-12 text-center sm:gap-12 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <Card className="w-full max-w-md overflow-hidden bg-transparent shadow-none sm:max-w-xl">
            <Card.Content className="p-4 sm:p-6">
              <Image
                priority
                alt="Camp Messiah summer camp flyer"
                className="w-full rounded-3xl border border-[#efe7db]"
                height={1200}
                sizes="(min-width: 1024px) 42vw, (min-width: 640px) 576px, 100vw"
                src="/images/camp-hero.png"
                width={960}
              />
            </Card.Content>
          </Card>

          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <h2 className="text-2xl tracking-wide font-bebas font-black sm:text-3xl">
              Camp Messiah
            </h2>
            <h1 className="mt-5 text-balance text-5xl leading-[0.92] font-bungee tracking-tight text-[#e56a49] sm:mt-6 sm:text-7xl lg:text-8xl">
              A Summer Camp Like No Other!
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4b5e59] sm:mt-6 sm:text-lg sm:leading-8">
              Learning with Fun in the Sun.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <NextLink
                className="button button--primary rounded-full bg-white px-7 py-4 text-center text-xl font-bebas font-black tracking-wider text-[#2181c2] shadow-none sm:button--xl sm:px-10 sm:py-5 sm:text-2xl"
                href="/registration"
              >
                Register Today!
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-[#2181c2]" id="overview">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <h2 className="mx-auto max-w-5xl text-balance text-center text-4xl leading-[0.92] font-black tracking-wide text-white sm:text-6xl lg:text-7xl">
            KICK START SUMMER WITH US
          </h2>

          <div className="mt-12">
            <div className="grid gap-6 lg:hidden">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {overviewCollageImages.map((image) => (
                  <div
                    key={image.src}
                    className={`overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(22,54,47,0.08)] ${image.className}`}
                  >
                    <Image
                      alt={image.alt}
                      className="h-64 w-full rounded-2xl object-cover sm:h-56"
                      height={800}
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                      src={image.src}
                      width={800}
                    />
                  </div>
                ))}
                <div
                  className="fade-up-reveal rounded-[2rem] bg-[#eef7f6] px-6 py-8 text-center shadow-[0_18px_40px_rgba(22,54,47,0.08)] sm:col-span-2"
                  style={{ animationDelay: "620ms" }}
                >
                  <p className="font-bebas text-xl tracking-[0.22em] text-[#0f6d67]">
                    Camp Energy
                  </p>
                  <p className="mt-4 text-3xl font-black leading-tight text-[#16362f] sm:text-4xl">
                    At Camp Messiah, there are no dull moments, except to rest
                    and reset !!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[980px] lg:block">
              {overviewCollageImages.map((image) => (
                <div
                  key={image.src}
                  className={`overflow-hidden rounded-[2rem] shadow-[0_18px_45px_rgba(22,54,47,0.12)] ${image.className}`}
                >
                  <Image
                    alt={image.alt}
                    className="h-auto w-full rounded-[2rem] object-cover"
                    height={800}
                    sizes="24vw"
                    src={image.src}
                    width={800}
                  />
                </div>
              ))}

              <div
                className="fade-up-reveal absolute left-1/2 top-1/2 z-10 w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[2.8rem] bg-[#eef7f6] px-10 py-12 text-center shadow-[0_25px_60px_rgba(22,54,47,0.14)]"
                style={{ animationDelay: "540ms" }}
              >
                <p className="font-bebas text-2xl tracking-[0.28em] text-[#0f6d67]">
                  Camp Energy
                </p>
                <p className="mt-5 text-5xl font-black leading-[1.02] text-[#16362f]">
                  At Camp Messiah, there are no dull moments, except to rest and
                  reset !!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip bg-[#f6fbfb]" id="activities">
        <div className="mx-auto max-w-7xl px-6 py-18">
          <SectionHeading
            align="center"
            description="From movement and games to group learning and hands-on projects, each camp day is built to keep kids engaged, active, and excited to come back."
            title="No dull moments, just structured energy."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {activityHighlights.map((activity) => (
              <Card
                key={activity.title}
                className="overflow-hidden border border-[#dde7e6] bg-white shadow-none"
              >
                <Image
                  alt={activity.title}
                  className="h-60 w-full object-cover sm:h-72"
                  height={800}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  src={activity.image}
                  width={800}
                />
                <Card.Content className="p-6">
                  <Card.Title className="text-xl font-bold text-[#16362f]">
                    {activity.title}
                  </Card.Title>
                  <Card.Description className="mt-3 text-base leading-7 text-[#4b5e59]">
                    {activity.copy}
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {programTracks.map((track, index) => {
              const isMiddleCard = index === 2;
              const textColor = isMiddleCard ? "text-[#153b32]" : "text-white";

              return (
                <Card key={track.title} className={`${track.tone}`}>
                  <Card.Content
                    className={`flex h-full flex-col px-5 py-6 ${textColor}`}
                  >
                    <Card.Title
                      className={`text-lg font-bold sm:text-xl ${textColor}`}
                    >
                      {track.title}
                    </Card.Title>
                    <ul
                      className={`mt-4 space-y-3 text-sm leading-6 ${textColor}`}
                    >
                      {track.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <RegistrationSection />
    </>
  );
}
