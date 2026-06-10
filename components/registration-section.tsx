import { Card } from "@heroui/react";

import { RegistrationForm } from "@/components/registration-form";
import { SectionHeading } from "@/components/section-heading";

export function RegistrationSection() {
  return (
    <section className="bg-[#fff5eb]" id="registration">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div className="max-w-xl">
            <SectionHeading
              description="Fill out the form below with your camper details and the best way to reach your family."
              title="Come and Camp With Us!"
            />
          </div>

          <div>
            <Card className="border border-[#e4d6c3] bg-white shadow-none">
              <Card.Content className="p-6 sm:p-8">
                <RegistrationForm />
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
