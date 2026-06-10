import { Accordion } from "@heroui/react";

import { faqItems } from "@/config/camp-content";

export function FaqAccordion() {
  return (
    <Accordion
      hideSeparator
      className="w-full"
      defaultExpandedKeys={["coaches"]}
    >
      {faqItems.map((item) => (
        <Accordion.Item key={item.id} id={item.id}>
          <Accordion.Heading>
            <Accordion.Trigger className="px-4 py-5 text-left text-base font-semibold text-[#16362f]">
              <span>{item.question}</span>
              <Accordion.Indicator />
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="px-4 pb-5 text-base leading-7 text-[#4b5e59]">
              {item.answer}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
