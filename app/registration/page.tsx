import type { Metadata } from "next";

import Image from "next/image";
import { Card } from "@heroui/react";

import { RegistrationForm } from "@/components/registration-form";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Submit a Camp Messiah registration request for a camper ages 3-16 and receive confirmation and payment details by email.",
  alternates: {
    canonical: "/registration",
  },
};

export default function RegistrationPage() {
  return (
    <>
      <section className="bg-[#fff5eb]">
        <div className="mx-auto max-w-7xl px-6 py-18 text-center sm:py-24">
          <h1 className="font-bebas text-6xl uppercase leading-[0.9] tracking-[0.08em] sm:text-8xl lg:text-[8.5rem]">
            Reserve Your Spot
          </h1>
        </div>
      </section>

      <section className="bg-[#fff5eb]">
        <div className="relative h-[340px] w-full sm:h-[460px] lg:h-[620px]">
          <Image
            fill
            alt="Camp Messiah full-width registration banner"
            className="object-cover"
            sizes="100vw"
            src="/images/pexels-tu-n-nguy-n-van-2158117329-35564228.jpg"
          />
        </div>
      </section>

      <section className="bg-[#fff5eb]" id="registration">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:py-20">
          <div className="max-w-xl">
            <div className="space-y-5">
              <p className="font-vietnam text-5xl font-semibold leading-tight sm:text-6xl">
                Fill out the form to reserve your spot.
              </p>
              <p className="font-vietnam text-base leading-8 sm:text-lg">
                Once submitted, we&apos;ll send your confirmation and payment
                details via email.
              </p>
            </div>
          </div>

          <div>
            <Card className="border border-[#e4d6c3] bg-white shadow-none">
              <Card.Content className="p-6 sm:p-8">
                <RegistrationForm />
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
